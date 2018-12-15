/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var MovieShootTypeConfig = /** @class */ (function (_super) {
        __extends(MovieShootTypeConfig, _super);
        function MovieShootTypeConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MovieShootTypeConfig.prototype, "getName", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieShootTypeConfig.prototype, "getLove", {
            get: function () {
                return this.type_des;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieShootTypeConfig.prototype, "rewardItem", {
            get: function () {
                return this.item_id;
            },
            enumerable: true,
            configurable: true
        });
        return MovieShootTypeConfig;
    }(configs.MovieShootTypeConfigStruct));
    configs.MovieShootTypeConfig = MovieShootTypeConfig;
})(configs || (configs = {}));
//# sourceMappingURL=MovieShootTypeConfig.js.map