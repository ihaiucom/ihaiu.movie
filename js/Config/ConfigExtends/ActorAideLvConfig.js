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
    var ActorAideLvConfig = /** @class */ (function (_super) {
        __extends(ActorAideLvConfig, _super);
        function ActorAideLvConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ActorAideLvConfig.prototype, "itemUrl", {
            get: function () {
                return Game.config.avatar.GetIconUrl(this.icon);
            },
            enumerable: true,
            configurable: true
        });
        return ActorAideLvConfig;
    }(configs.ActorAideLvConfigStruct));
    configs.ActorAideLvConfig = ActorAideLvConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ActorAideLvConfig.js.map