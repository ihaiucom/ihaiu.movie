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
    var mallSender = /** @class */ (function (_super) {
        __extends(mallSender, _super);
        function mallSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.mall;
            return _this;
        }
        /**
         *
         * @param goodsId  商品编号
         * @param amount  商品数量
         * @param itemId  支付货币类型
         */
        mallSender.prototype.buy = function (goodsId, amount, itemId) {
            var req = new Proto.API.mall.buyRequest();
            req.goodsId = goodsId;
            req.amount = amount;
            this.send(req, true);
        };
        return mallSender;
    }(Games.ProtoSender));
    Games.mallSender = mallSender;
})(Games || (Games = {}));
//# sourceMappingURL=mallSender.js.map