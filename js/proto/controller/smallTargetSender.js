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
    var smallTargetSender = /** @class */ (function (_super) {
        __extends(smallTargetSender, _super);
        function smallTargetSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.smallTarget;
            return _this;
        }
        /**
         *  等级礼包
         */
        smallTargetSender.prototype.LevGift = function () {
            var req = new Proto.API.smallTarget.LevGiftRequest();
            this.send(req);
        };
        /**
         *
         */
        smallTargetSender.prototype.CupGift = function () {
            var req = new Proto.API.smallTarget.CupGiftRequest();
            this.send(req);
        };
        /**
         *
         */
        smallTargetSender.prototype.GetCupMail = function () {
            var req = new Proto.API.smallTarget.GetCupMailRequest();
            this.send(req);
        };
        return smallTargetSender;
    }(Games.ProtoSender));
    Games.smallTargetSender = smallTargetSender;
})(Games || (Games = {}));
//# sourceMappingURL=smallTargetSender.js.map