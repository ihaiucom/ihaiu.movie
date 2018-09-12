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
    var ActorConfigReader = /** @class */ (function (_super) {
        __extends(ActorConfigReader, _super);
        function ActorConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ActorConfigReader.prototype.GetRequire = function (id) {
            var cfg = this.getConfig(id);
            var list = [];
            var map = {};
            map[Games.ActorRequireEnum.sex.toString()] = cfg.sex;
            map[Games.ActorRequireEnum.age.toString()] = cfg.age_type;
            map[Games.ActorRequireEnum.Continents.toString()] = cfg.country;
            map[Games.ActorRequireEnum.type.toString()] = cfg.show_type;
            // map[Games.ActorRequireEnum.art.toString()] = cfg.art;
            // map[Games.ActorRequireEnum.entertainment.toString()] = cfg.entertainment;
            // map[Games.ActorRequireEnum.performance.toString()] = cfg.perform;
            // map[Games.ActorRequireEnum.plot.toString()] = cfg.plot;
            // map[Games.ActorRequireEnum.scene.toString()] = cfg.spectacle;
            return map;
        };
        ActorConfigReader.prototype.GetBodyIconUrl = function (id) {
            var cfg = this.getConfig(id);
            if (cfg) {
                return Game.config.avatar.GetBodyIconUrl(cfg.avatar);
            }
            return "";
        };
        return ActorConfigReader;
    }(configs.ActorConfigReaderStruct));
    configs.ActorConfigReader = ActorConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ActorConfigReader.js.map