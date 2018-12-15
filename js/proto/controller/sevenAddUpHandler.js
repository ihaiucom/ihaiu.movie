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
     *  七日礼包

     */
    var sevenAddUpHandler = /** @class */ (function (_super) {
        __extends(sevenAddUpHandler, _super);
        function sevenAddUpHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.sevenAddUp;
            return _this;
        }
        /**
         * 领取收益
         */
        sevenAddUpHandler.prototype.GetReward = function (msg) {
            Game.moduleModel.activity.handlerSevenGet(msg);
        };
        /**
         *  跨天触发
         */
        sevenAddUpHandler.prototype.Touch = function (msg) {
        };
        return sevenAddUpHandler;
    }(Games.ProtoHandler));
    Games.sevenAddUpHandler = sevenAddUpHandler;
})(Games || (Games = {}));
//# sourceMappingURL=sevenAddUpHandler.js.map