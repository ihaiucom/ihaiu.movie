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
        // 消息订阅处理器 -- 获取排行榜
        //--------------------
        var GetSelfListTook = /** @class */ (function (_super) {
            __extends(GetSelfListTook, _super);
            function GetSelfListTook() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** 初始化 */
            GetSelfListTook.prototype.init = function () {
                // 协议模块名
                this.moduleName = Game.protosender.rank.moduleName;
                // 协议请求对象
                this.req = new Proto.API.rank.GetSelfListRequest();
                // 心跳时间(单位毫秒)
                this.heartbeat = 5000;
                // 前提模块ID, 只有这些模块是置顶时才通过
                this.preconditionMenuIds = [MenuId.Home];
                // 自己所属模块，用来验证功能是否解锁
                this.menuId = MenuId.Rank;
            };
            /**
                     * 验证是否需要发送， 自定义 需要限制发送的条件。不可发送反馈false
                     * 如果没有自定义的可以不实现该方法
                     */
            GetSelfListTook.prototype.validate = function () {
                return true;
            };
            /**
             * 设置参数, 在发送前，框架会调该方法
             * 如果没有自定义的可以不实现该方法
             */
            GetSelfListTook.prototype.setParameter = function () {
                // this.req.xx = vvvv;
            };
            return GetSelfListTook;
        }(Games.ProtoTookHandler));
        Tooks.GetSelfListTook = GetSelfListTook;
    })(Tooks = Proto.Tooks || (Proto.Tooks = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=GetSelfListTook.js.map