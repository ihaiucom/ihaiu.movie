var Games;
(function (Games) {
    var Event = laya.events.Event;
    /**
     * 骨骼动画模版 对象池
     */
    var TempletPool = /** @class */ (function () {
        function TempletPool() {
            // 回调对象缓存池 {caller: any, onComplete: Function, onError: Function}
            this.callbackHandlerPool = [];
            // 回调
            this.callbackDict = new Dictionary();
            // 正在解析的
            this.parseingDict = new Dictionary();
            // 已经解析好的
            this.dict = new Dictionary();
            // 引用次数
            this.referenceCountDict = new Dictionary();
            // 最后一次返回时间
            this.lastTimeDict = new Dictionary();
        }
        // 获取回调对象		
        TempletPool.prototype.getCallbackHandler = function (caller, onComplete, onError) {
            var item;
            if (this.callbackHandlerPool.length > 0) {
                item = this.callbackHandlerPool.pop();
                item.caller = caller;
                item.onComplete = onComplete;
                item.onError = onError;
            }
            else {
                item = { caller: caller, onComplete: onComplete, onError: onError };
            }
            return item;
        };
        // 返回回调对象		
        TempletPool.prototype.recoverCallbackHandler = function (item) {
            item.caller = undefined;
            item.onComplete = undefined;
            item.onError = undefined;
            this.callbackHandlerPool.push(item);
        };
        // 添加监听回调		
        TempletPool.prototype.addCallbackHandler = function (texturePath, caller, onComplete, onError) {
            var list = this.callbackDict.getValue(texturePath);
            if (!list) {
                list = [];
                this.callbackDict.add(texturePath, list);
            }
            var item = this.getCallbackHandler(caller, onComplete, onError);
            list.push(item);
        };
        // 获取监听回调列表		
        TempletPool.prototype.getCallbackHandlerList = function (texturePath) {
            return this.callbackDict.getValue(texturePath);
        };
        // 销毁模板
        TempletPool.prototype.destoryItem = function (texturePath, skPath) {
            var tpl = this.getCacheItem(texturePath);
            if (tpl) {
                // console.log("destory Skeleton Templet:" + texturePath);
                tpl.destroy();
                tpl.dispose();
                this.dict.remove(texturePath);
            }
            Laya.loader.clearRes(texturePath, true);
            Laya.loader.clearRes(skPath, true);
        };
        // 返回模板
        TempletPool.prototype.recoverItem = function (texturePath, skPath) {
            var num = this.referenceCountDict.getValueOrDefault(texturePath, 0);
            if (num > 0) {
                num = num - 1;
                this.referenceCountDict.set(texturePath, num);
            }
            this.lastTimeDict.add(texturePath, Game.time.localTime);
            if (num <= 0) {
                this.destoryItem(texturePath, skPath);
            }
        };
        // 获取缓存		
        TempletPool.prototype.getCacheItem = function (texturePath) {
            return this.dict.getValue(texturePath);
        };
        // 请求模板		
        TempletPool.prototype.requrestItem = function (texturePath, skPath, caller, onComplete, onError) {
            if (onComplete) {
                var num = this.referenceCountDict.getValueOrDefault(texturePath, 0);
                this.referenceCountDict.add(texturePath, num + 1);
            }
            var tpl = this.getCacheItem(texturePath);
            if (tpl) {
                if (onComplete) {
                    setTimeout(function () {
                        if (caller)
                            onComplete.apply(caller, [tpl]);
                        else
                            onComplete(tpl);
                    }, 100);
                }
            }
            else {
                if (onComplete || onError) {
                    this.addCallbackHandler(texturePath, caller, onComplete, onError);
                }
                tpl = this.parseingDict.getValue(texturePath);
                if (!tpl) {
                    var args = [texturePath, skPath];
                    tpl = new Templet();
                    tpl.on(Event.COMPLETE, this, this.onTempletComplete, args);
                    tpl.on(Event.ERROR, this, this.onTempletError, args);
                    this.parseingDict.add(texturePath, tpl);
                    var assets = [
                        { url: texturePath, type: Loader.IMAGE }
                        // { url: skPath, type: Loader.BUFFER }
                    ];
                    Laya.loader.load(assets, Handler.create(this, this.onLoader, args));
                }
            }
        };
        TempletPool.prototype.onLoader = function (texturePath, skPath, isSuccess) {
            var _this = this;
            if (isSuccess) {
                //骨骼取共享数据
                GameBoone.shareSkeleton.getSkeletonData(skPath, texturePath, this, function (skData, skPath, texturePath) {
                    var tpl = _this.parseingDict.getValue(texturePath);
                    tpl.parseData(Laya.loader.getRes(texturePath), skData);
                });
            }
            else {
                console.error("TempletPool 加载资源失败 texturePath=" + texturePath);
                this.onTempletError(texturePath, skPath, "加载资源失败");
            }
        };
        TempletPool.prototype.onTempletComplete = function (texturePath, skPath) {
            var tpl = this.parseingDict.getValue(texturePath);
            this.dict.add(texturePath, tpl);
            var callers = this.getCallbackHandlerList(texturePath);
            if (callers) {
                for (var _i = 0, callers_1 = callers; _i < callers_1.length; _i++) {
                    var caller = callers_1[_i];
                    if (caller.onComplete) {
                        if (caller.caller) {
                            caller.onComplete.apply(caller.caller, [tpl]);
                        }
                        else {
                            caller.onComplete(tpl);
                        }
                        this.recoverCallbackHandler(caller);
                    }
                }
                this.callbackDict.remove(texturePath);
            }
            this.onTempleteEnd(texturePath);
        };
        TempletPool.prototype.onTempletError = function (texturePath, skPath, error) {
            console.error("TempletPool 解析失败 texturePath=" + texturePath);
            var tpl = this.parseingDict.getValue(texturePath);
            var callers = this.getCallbackHandlerList(texturePath);
            if (callers) {
                for (var _i = 0, callers_2 = callers; _i < callers_2.length; _i++) {
                    var caller = callers_2[_i];
                    if (caller.onError) {
                        if (caller.caller) {
                            caller.onError.apply(caller.caller, [error]);
                        }
                        else {
                            caller.onError(error);
                        }
                    }
                    this.recoverCallbackHandler(caller);
                }
                this.callbackDict.remove(texturePath);
            }
            this.onTempleteEnd(texturePath);
            tpl.destroy();
        };
        TempletPool.prototype.onTempleteEnd = function (texturePath) {
            var tpl = this.parseingDict.getValue(texturePath);
            tpl.off(Event.COMPLETE, this, this.onTempletComplete);
            tpl.off(Event.ERROR, this, this.onTempletError);
            this.parseingDict.remove(texturePath);
        };
        return TempletPool;
    }());
    Games.TempletPool = TempletPool;
})(Games || (Games = {}));
//# sourceMappingURL=TempletPool.js.map