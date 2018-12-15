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
    var NpcConfig = /** @class */ (function (_super) {
        __extends(NpcConfig, _super);
        function NpcConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(NpcConfig.prototype, "modelSkinUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.modelSkinUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NpcConfig.prototype, "modelBoneUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.modelBoneUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NpcConfig.prototype, "avatarUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.avatar);
                if (avatarCfg) {
                    return avatarCfg.bodyIconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        return NpcConfig;
    }(configs.NpcConfigStruct));
    configs.NpcConfig = NpcConfig;
})(configs || (configs = {}));
//# sourceMappingURL=NpcConfig.js.map