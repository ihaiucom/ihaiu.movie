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
    var GiftSender = /** @class */ (function (_super) {
        __extends(GiftSender, _super);
        function GiftSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Gift;
            return _this;
        }
        /**
         *  礼包兑换
         * @param id  兑换码 id
         */
        GiftSender.prototype.Exchange = function (id) {
            var req = new Proto.API.Gift.ExchangeRequest();
            req.id = id;
            this.send(req);
        };
        return GiftSender;
    }(Games.ProtoSender));
    Games.GiftSender = GiftSender;
})(Games || (Games = {}));
//# sourceMappingURL=GiftSender.js.map