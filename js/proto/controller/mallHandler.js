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
    var mallHandler = /** @class */ (function (_super) {
        __extends(mallHandler, _super);
        function mallHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.mall;
            return _this;
        }
        /**
         *
         */
        mallHandler.prototype.buy = function (msg) {
        };
        return mallHandler;
    }(Games.ProtoHandler));
    Games.mallHandler = mallHandler;
})(Games || (Games = {}));
//# sourceMappingURL=mallHandler.js.map