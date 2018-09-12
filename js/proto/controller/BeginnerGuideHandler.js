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
     *  引导

     */
    var BeginnerGuideHandler = /** @class */ (function (_super) {
        __extends(BeginnerGuideHandler, _super);
        function BeginnerGuideHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.BeginnerGuide;
            return _this;
        }
        /**
         *  完成一个引导任务
         */
        BeginnerGuideHandler.prototype.CompleteGuide = function (msg) {
        };
        return BeginnerGuideHandler;
    }(Games.ProtoHandler));
    Games.BeginnerGuideHandler = BeginnerGuideHandler;
})(Games || (Games = {}));
//# sourceMappingURL=BeginnerGuideHandler.js.map