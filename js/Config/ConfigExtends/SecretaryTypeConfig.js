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
    var SecretaryTypeConfig = /** @class */ (function (_super) {
        __extends(SecretaryTypeConfig, _super);
        function SecretaryTypeConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(SecretaryTypeConfig.prototype, "bodyIconUrl", {
            get: function () {
                if (isNullOrEmpty(this._bodyIconUrl)) {
                    var avatarConfig = Game.config.avatar.getConfig(this.picid);
                    if (avatarConfig) {
                        this._bodyIconUrl = avatarConfig.bodyIconUrl;
                    }
                }
                return this._bodyIconUrl;
            },
            enumerable: true,
            configurable: true
        });
        return SecretaryTypeConfig;
    }(configs.SecretaryTypeConfigStruct));
    configs.SecretaryTypeConfig = SecretaryTypeConfig;
})(configs || (configs = {}));
//# sourceMappingURL=SecretaryTypeConfig.js.map