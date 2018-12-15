var Games;
(function (Games) {
    //====================
    // 消息订阅管理器
    //--------------------
    var ProtoTookManager = /** @class */ (function () {
        function ProtoTookManager() {
            this.list = [];
            this.count = 0;
            this.serverMilliseconds = 0;
        }
        /**
         * 获取单例实例
         */
        ProtoTookManager.getInstance = function () {
            var Class = this;
            if (Class.__instance == null) {
                Class.__instance = new Class();
            }
            return Class.__instance;
        };
        // 添加订阅列表		
        ProtoTookManager.prototype.addTook = function (took) {
            this.list.push(took);
        };
        // 初始化订阅列表
        ProtoTookManager.prototype.initTookList = function () {
            for (var itemKey in Proto.Tooks) {
                var cls = Proto.Tooks[itemKey];
                var obj = new cls();
                obj.init();
                this.addTook(obj);
            }
        };
        // 启动
        ProtoTookManager.prototype.start = function () {
            // 初始化订阅列表
            this.initTookList();
            this.count = this.list.length;
            Laya.timer.loop(1000, this, this.onTick);
        };
        // 停止
        ProtoTookManager.prototype.stop = function () {
            Laya.timer.clear(this, this.onTick);
        };
        // 刷新		
        ProtoTookManager.prototype.onTick = function () {
            this.serverMilliseconds = Game.time.serverMilliseconds;
            for (var i = 0; i < this.count; i++) {
                var took = this.list[i];
                if (this.validate(took)) {
                    took.setParameter();
                    took.__sender();
                }
            }
        };
        // 验证是否可以发送
        ProtoTookManager.prototype.validate = function (took) {
            if (!Game.proto.isEnableSendProto) {
                return false;
            }
            var result = true;
            // 发送时间
            if (took.selfHeartbeat > 0 && took.menuId > 0 && Game.menu.isOpened(took.menuId)) {
                result = this.serverMilliseconds - took.lastSendServerTime >= took.selfHeartbeat;
            }
            else {
                result = this.serverMilliseconds - took.lastSendServerTime >= took.heartbeat;
            }
            // 验证功能是否开发
            if (result && took.menuId > 0)
                result = Games.MenuValidateOpening.getInstance().validate(took.menuId);
            // 验证功能是否解锁
            if (result && took.menuId > 0)
                result = Games.MenuValidateUnlock.getInstance().validate(took.menuId);
            // 验证是否在条件面板
            if (result && took.preconditionMenuIds && took.preconditionMenuIds.length > 0) {
                result = false;
                for (var _i = 0, _a = took.preconditionMenuIds; _i < _a.length; _i++) {
                    var itemId = _a[_i];
                    if (Game.menu.isOpened(itemId)) {
                        result = true;
                        break;
                    }
                }
            }
            if (result)
                result = took.validate();
            return result;
        };
        return ProtoTookManager;
    }());
    Games.ProtoTookManager = ProtoTookManager;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoTookManager.js.map