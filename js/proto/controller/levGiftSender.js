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
     *  领取等级礼包

     */
    var levGiftSender = /** @class */ (function (_super) {
        __extends(levGiftSender, _super);
        function levGiftSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.levGift;
            return _this;
        }
        /**
         *
         */
        levGiftSender.prototype.GetLevGift = function () {
            var req = new Proto.API.levGift.GetLevGiftRequest();
            this.send(req);
        };
        return levGiftSender;
    }(Games.ProtoSender));
    Games.levGiftSender = levGiftSender;
})(Games || (Games = {}));
//# sourceMappingURL=levGiftSender.js.map