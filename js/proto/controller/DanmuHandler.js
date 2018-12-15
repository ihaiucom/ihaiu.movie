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
     *  弹幕接口

     */
    var DanmuHandler = /** @class */ (function (_super) {
        __extends(DanmuHandler, _super);
        function DanmuHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Danmu;
            return _this;
        }
        /**
         *  设置弹幕
         */
        DanmuHandler.prototype.set = function (msg) {
        };
        /**
         *
         */
        DanmuHandler.prototype.get = function (msg) {
            Game.moduleModel.oscar.UpdateDanmu(msg);
        };
        return DanmuHandler;
    }(Games.ProtoHandler));
    Games.DanmuHandler = DanmuHandler;
})(Games || (Games = {}));
//# sourceMappingURL=DanmuHandler.js.map