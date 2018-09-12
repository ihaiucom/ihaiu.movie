/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var Games;
(function (Games) {
    /**
     *
     */
    var manageOrderSender = /** @class */ (function (_super) {
        __extends(manageOrderSender, _super);
        function manageOrderSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageOrder;
            return _this;
        }
        /**
         * 放入物品
         * @param uuid  唯一订单编号
         * @param itemId  物品baseId
         */
        manageOrderSender.prototype.PutItem = function (uuid, entityId, itemId, type, responseRequired, limitTime) {
            if (limitTime === void 0) { limitTime = true; }
            var req = new Proto.API.manageOrder.PutItemRequest();
            req.uuid = uuid;
            req.itemId = itemId;
            req.type = type;
            req.entityId = entityId;
            this.send(req, responseRequired, limitTime);
        };
        /**
         * 销毁订单
         * @param uuid  唯一订单编号
         */
        manageOrderSender.prototype.DelOrder = function (uuid) {
            var req = new Proto.API.manageOrder.DelOrderRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         * 完成订单
         * @param uuid  唯一订单编号
         */
        manageOrderSender.prototype.FinishOrder = function (uuid) {
            var req = new Proto.API.manageOrder.FinishOrderRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         * 请求订单
         * @param uuid  唯一订单编号
         */
        manageOrderSender.prototype.DealOrder = function () {
            var req = new Proto.API.manageOrder.DealOrderRequest();
            this.send(req);
        };
        return manageOrderSender;
    }(Games.ProtoSender));
    Games.manageOrderSender = manageOrderSender;
})(Games || (Games = {}));
//# sourceMappingURL=manageOrderSender.js.map