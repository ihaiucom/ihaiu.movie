var Games;
(function (Games) {
    var Templet = laya.ani.bone.Templet;
    var ArmatureInfo = /** @class */ (function () {
        function ArmatureInfo() {
        }
        return ArmatureInfo;
    }());
    Games.ArmatureInfo = ArmatureInfo;
    var AnimationHelper = /** @class */ (function () {
        function AnimationHelper() {
            //动画模板字典
            this.animTemletDict = new Dictionary();
            //正在解析
            this.parsingDict = new Dictionary();
            // 回调对象缓存池 {caller: any, onComplete: Function, onError: Function}
            this.callbackHandlerPool = [];
            //构建队列
            this.buildQueue = [];
            /** 是否在解析中 */
            this.isParsing = false;
        }
        /** 不同类骨骼不同的Templet */
        AnimationHelper.prototype.requestTemplet = function (texturePath) {
            var tpl;
            if (!this.animTemletDict.hasKey(texturePath)) {
                tpl = new Templet();
                tpl.on(laya.events.Event.COMPLETE, this, this.parseAnimComplete);
                tpl.on(laya.events.Event.ERROR, this, this.parseAnimError);
                this.animTemletDict.add(texturePath, tpl);
            }
            else {
                tpl = this.animTemletDict.getValue(texturePath);
            }
            return tpl;
        };
        /** 销毁 */
        AnimationHelper.prototype.dispose = function () {
            throw "NotImplementedException!";
        };
        /** 构建Skeleton */
        AnimationHelper.prototype.buildArmature = function (texturePath, skPath, caller, onComplete, onError) {
            this.requestTemplet(texturePath);
            var handler = this.getCallbackHandler(caller, onComplete, onError);
            var buildItem = laya.utils.Pool.getItemByClass(AnimationHelper.SignArmatureInfo, ArmatureInfo);
            buildItem.texturePath = texturePath;
            buildItem.skPath = skPath;
            this.buildQueue.push(buildItem);
            this.parsingDict.add(texturePath, handler);
            // console.log("buildArmature --- " + this.buildQueue.length);
            this.parseArmatureQueue();
        };
        AnimationHelper.prototype.parseArmatureQueue = function () {
            if (!this.isParsing) {
                if (this.buildQueue.length > 0) {
                    this.isParsing = true;
                    var item = this.buildQueue.pop();
                    GameBoone.animationCache.getSKCache(item.texturePath, item.skPath, this, this.getCacheResComplete, this.getCacheResError);
                    laya.utils.Pool.recover(AnimationHelper.SignArmatureInfo, item);
                }
            }
        };
        /** 获取缓存或加载资源成功 */
        AnimationHelper.prototype.getCacheResComplete = function (textureData, skData) {
            var tpl = this.requestTemplet(textureData.url);
            //engine define property - todo:while engine update
            tpl["skeletonUrl"] = skData.url;
            tpl["clearGraphicCache"]();
            delete tpl.skinDic["default"];
            tpl.parseData(textureData.texture, skData.buffer);
        };
        /** 加载缓存资源失败 */
        AnimationHelper.prototype.getCacheResError = function (texturePath, skPath) {
            console.error("[getCacheResError] texture=" + texturePath + " skeleton=" + skPath);
        };
        /** 解析成功 */
        AnimationHelper.prototype.parseAnimComplete = function (tpl) {
            var textureUrl = tpl["_mainTexture"]["url"];
            (textureUrl === void 0) && (textureUrl = "");
            var callBackHandler = this.parsingDict.getValue(textureUrl);
            if (callBackHandler) {
                var animator = tpl.buildArmature(1); //开启换装模式
                // animator.scale(0.26, 0.26, true); //默认缩放0.26
                callBackHandler.onComplete.apply(callBackHandler.caller, [animator]);
                this.recoverCallbackHandler(callBackHandler);
                this.parsingDict.remove(textureUrl);
            }
            //解析成功继续构建队列
            this.isParsing = false;
            this.parseArmatureQueue();
        };
        /** 解析失败 */
        AnimationHelper.prototype.parseAnimError = function () {
            console.error("[parseAnimError]");
            //解析失败继续构建队列
            this.isParsing = false;
            this.parseArmatureQueue();
        };
        // 获取回调对象		
        AnimationHelper.prototype.getCallbackHandler = function (caller, onComplete, onError) {
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
        AnimationHelper.prototype.recoverCallbackHandler = function (item) {
            item.caller = undefined;
            item.onComplete = undefined;
            item.onError = undefined;
            this.callbackHandlerPool.push(item);
        };
        AnimationHelper.SignArmatureInfo = "ArmatureInfo";
        return AnimationHelper;
    }());
    Games.AnimationHelper = AnimationHelper;
})(Games || (Games = {}));
//# sourceMappingURL=AnimationHelper.js.map