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
    var HeadPortraitConfig = /** @class */ (function (_super) {
        __extends(HeadPortraitConfig, _super);
        function HeadPortraitConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(HeadPortraitConfig.prototype, "iconUrl", {
            get: function () {
                var avatarConfig = Game.config.avatar.getConfig(this.icon);
                if (avatarConfig) {
                    return avatarConfig.iconUrl;
                }
            },
            enumerable: true,
            configurable: true
        });
        return HeadPortraitConfig;
    }(configs.HeadPortraitConfigStruct));
    configs.HeadPortraitConfig = HeadPortraitConfig;
})(configs || (configs = {}));
//# sourceMappingURL=HeadPortraitConfig.js.map