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
     *  日常签到

     */
    var dailySignHandler = /** @class */ (function (_super) {
        __extends(dailySignHandler, _super);
        function dailySignHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.dailySign;
            return _this;
        }
        /**
         *  签到
         */
        dailySignHandler.prototype.sign = function (msg) {
            Game.moduleModel.activity.handlerSign(msg);
        };
        return dailySignHandler;
    }(Games.ProtoHandler));
    Games.dailySignHandler = dailySignHandler;
})(Games || (Games = {}));
//# sourceMappingURL=dailySignHandler.js.map