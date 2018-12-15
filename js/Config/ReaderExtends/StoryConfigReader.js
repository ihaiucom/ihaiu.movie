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
    var StoryConfigReader = /** @class */ (function (_super) {
        __extends(StoryConfigReader, _super);
        function StoryConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StoryConfigReader.prototype.GetPoster = function (id) {
            var cfg = this.getConfig(id);
            if (cfg) {
                return Game.config.avatar.GetIconUrl(cfg.poster_name);
            }
        };
        StoryConfigReader.prototype.GetStar = function (id) {
            var cfg = this.getConfig(id);
            if (cfg) {
                return cfg.starNumber;
            }
        };
        return StoryConfigReader;
    }(configs.StoryConfigReaderStruct));
    configs.StoryConfigReader = StoryConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=StoryConfigReader.js.map