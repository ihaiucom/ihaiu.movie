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
    var HeadPortraitConfigReader = /** @class */ (function (_super) {
        __extends(HeadPortraitConfigReader, _super);
        function HeadPortraitConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 获得玩家头像，如果头像为0，获得默认头像
        HeadPortraitConfigReader.prototype.GetPlayerIconUrl = function (icon, sex) {
            if (icon && icon != 0) {
                var cfg = this.getConfig(icon);
                if (cfg) {
                    return cfg.iconUrl;
                }
            }
            if (sex == EUserSex.boy) {
                return this.getConfig(1101).iconUrl;
            }
            return this.getConfig(1001).iconUrl;
        };
        return HeadPortraitConfigReader;
    }(configs.HeadPortraitConfigReaderStruct));
    configs.HeadPortraitConfigReader = HeadPortraitConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=HeadPortraitConfigReader.js.map