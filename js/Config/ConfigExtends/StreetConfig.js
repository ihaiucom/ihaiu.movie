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
    var StreetConfig = /** @class */ (function (_super) {
        __extends(StreetConfig, _super);
        function StreetConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(StreetConfig.prototype, "Require", {
            get: function () {
                if (this._require == null) {
                    this._require = [];
                    if (this.spokesperson_art != 0)
                        this._require.push({ type: Games.ActorRequireEnum.art, value: this.spokesperson_art });
                    if (this.spokesperson_entertainment != 0)
                        this._require.push({ type: Games.ActorRequireEnum.entertainment, value: this.spokesperson_entertainment });
                    if (this.spokesperson_performance != 0)
                        this._require.push({ type: Games.ActorRequireEnum.performance, value: this.spokesperson_performance });
                    if (this.spokesperson_plot != 0)
                        this._require.push({ type: Games.ActorRequireEnum.plot, value: this.spokesperson_plot });
                    if (this.spokesperson_scene != 0)
                        this._require.push({ type: Games.ActorRequireEnum.scene, value: this.spokesperson_scene });
                    if (this.spokesperson_sex != 0)
                        this._require.push({ type: Games.ActorRequireEnum.sex, value: this.spokesperson_sex });
                    if (this.spokesperson_age != 0)
                        this._require.push({ type: Games.ActorRequireEnum.age, value: this.spokesperson_age });
                    if (this.spokesperson_Continents != 0)
                        this._require.push({ type: Games.ActorRequireEnum.Continents, value: this.spokesperson_Continents });
                    if (this.spokesperson_type != 0)
                        this._require.push({ type: Games.ActorRequireEnum.type, value: this.spokesperson_type });
                }
                return this._require;
            },
            enumerable: true,
            configurable: true
        });
        return StreetConfig;
    }(configs.StreetConfigStruct));
    configs.StreetConfig = StreetConfig;
})(configs || (configs = {}));
//# sourceMappingURL=StreetConfig.js.map