var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Proto;
(function (Proto) {
    var Tooks;
    (function (Tooks) {
        //====================
        // 消息订阅处理器 -- 合作任务界面 2秒一次
        //--------------------
        var GetTaskInfo = /** @class */ (function (_super) {
            __extends(GetTaskInfo, _super);
            function GetTaskInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 初始化 */
            GetTaskInfo.prototype.init = function () {
                // 协议模块名
                this.moduleName = Game.protosender.cooperate.moduleName;
                // 协议请求对象
                this.req = new Proto.API.cooperate.GetTaskInfoRequest();
                // 心跳时间(单位毫秒)
                this.heartbeat = 2000;
                // 前提模块ID, 只有这些模块是置顶时才通过
                this.preconditionMenuIds = [MenuId.Cooperation];
                // 自己所属模块，用来验证功能是否解锁
                this.menuId = MenuId.Cooperation;
            };
            /**
             * 设置参数, 在发送前，框架会调该方法
             * 如果没有自定义的可以不实现该方法
             */
            GetTaskInfo.prototype.setParameter = function () {
                // (this.req as Proto.API.cooperate.GetTaskInfoRequest).oldOrderUuids = Game.moduleModel.order.oldOrderUUids;
            };
            return GetTaskInfo;
        }(Games.ProtoTookHandler));
        Tooks.GetTaskInfo = GetTaskInfo;
    })(Tooks = Proto.Tooks || (Proto.Tooks = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=GetTaskInfoTook.js.map