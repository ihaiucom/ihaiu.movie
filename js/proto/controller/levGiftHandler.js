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
    var levGiftHandler = /** @class */ (function (_super) {
        __extends(levGiftHandler, _super);
        function levGiftHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.levGift;
            return _this;
        }
        /**
         *
         */
        levGiftHandler.prototype.GetLevGift = function (msg) {
            Game.moduleModel.targetPackage.sGetLevelGiftSignal.dispatch(msg.giftId);
        };
        return levGiftHandler;
    }(Games.ProtoHandler));
    Games.levGiftHandler = levGiftHandler;
})(Games || (Games = {}));
//# sourceMappingURL=levGiftHandler.js.map