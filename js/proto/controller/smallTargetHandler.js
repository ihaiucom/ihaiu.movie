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
    var smallTargetHandler = /** @class */ (function (_super) {
        __extends(smallTargetHandler, _super);
        function smallTargetHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.smallTarget;
            return _this;
        }
        /**
         *  等级礼包
         */
        smallTargetHandler.prototype.LevGift = function (msg) {
            Game.moduleModel.targetPackage.sGetLevelGiftSignal.dispatch(msg.giftId);
            Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, Games.UnlockID.LevelGift);
        };
        /**
         *
         */
        smallTargetHandler.prototype.CupGift = function (msg) {
            Game.moduleModel.targetPackage.sGetCupGiftSignal.dispatch(msg.giftId);
            Game.event.dispatch(GameEventKey.GameEventKey_UnlockChange, Games.UnlockID.CupGift);
        };
        /**
         *
         */
        smallTargetHandler.prototype.GetCupMail = function (msg) {
        };
        return smallTargetHandler;
    }(Games.ProtoHandler));
    Games.smallTargetHandler = smallTargetHandler;
})(Games || (Games = {}));
//# sourceMappingURL=smallTargetHandler.js.map