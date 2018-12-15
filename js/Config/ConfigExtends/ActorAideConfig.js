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
    var ActorAideConfig = /** @class */ (function (_super) {
        __extends(ActorAideConfig, _super);
        function ActorAideConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActorAideConfig.prototype, "iconUrl", {
            get: function () {
                return Game.config.avatar.getConfig(this.avatar).iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorAideConfig.prototype, "iconUrl2", {
            get: function () {
                return Game.config.avatar.getConfig(this.avatar).iconUrl2;
            },
            enumerable: true,
            configurable: true
        });
        return ActorAideConfig;
    }(configs.ActorAideConfigStruct));
    configs.ActorAideConfig = ActorAideConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideConfig.js.map