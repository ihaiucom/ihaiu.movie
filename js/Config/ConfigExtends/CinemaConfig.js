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
    var CinemaConfig = /** @class */ (function (_super) {
        __extends(CinemaConfig, _super);
        function CinemaConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CinemaConfig.prototype, "iconUrl", {
            get: function () {
                var avatarCfg = Game.config.avatar.getConfig(this.pic);
                if (avatarCfg) {
                    return avatarCfg.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CinemaConfig.prototype, "favoriteActor", {
            get: function () {
                var cfg = Game.config.property.getConfig(this.favorite_actor);
                if (cfg) {
                    return cfg.name;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CinemaConfig.prototype, "proportionString", {
            get: function () {
                var prop = Math.floor(this.proportion * 100) + "%";
                return Games.TEXT.StreetCinemaInfo.format(formatNumberUnit(this.num), prop);
            },
            enumerable: true,
            configurable: true
        });
        return CinemaConfig;
    }(configs.CinemaConfigStruct));
    configs.CinemaConfig = CinemaConfig;
})(configs || (configs = {}));
//# sourceMappingURL=CinemaConfig.js.map