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
    var ImageConfig = /** @class */ (function (_super) {
        __extends(ImageConfig, _super);
        function ImageConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageConfig.getUrl = function (key) {
            return "res/fspriteassets/Image_" + LangManager.Instance.lang + "/" + key + ".png";
        };
        return ImageConfig;
    }(configs.ImageConfigStruct));
    configs.ImageConfig = ImageConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ImageConfig.js.map