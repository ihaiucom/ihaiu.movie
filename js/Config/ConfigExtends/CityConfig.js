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
    var CityConfig = /** @class */ (function (_super) {
        __extends(CityConfig, _super);
        function CityConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CityConfig.prototype.GetStreetList = function () {
            var list = this.street_id;
            return list;
        };
        Object.defineProperty(CityConfig.prototype, "Require", {
            get: function () {
                if (this._requireList == null) {
                    this._requireList = [];
                    var list = [];
                    if (this.envoy1_art != 0)
                        list.push({ type: Games.ActorRequireEnum.art, value: this.envoy1_art });
                    if (this.envoy1_entertainment != 0)
                        list.push({ type: Games.ActorRequireEnum.entertainment, value: this.envoy1_entertainment });
                    if (this.envoy1_performance != 0)
                        list.push({ type: Games.ActorRequireEnum.performance, value: this.envoy1_performance });
                    if (this.envoy1_plot != 0)
                        list.push({ type: Games.ActorRequireEnum.plot, value: this.envoy1_plot });
                    if (this.envoy1_scene != 0)
                        list.push({ type: Games.ActorRequireEnum.scene, value: this.envoy1_scene });
                    if (this.envoy1_sex != 0)
                        list.push({ type: Games.ActorRequireEnum.sex, value: this.envoy1_sex });
                    if (this.envoy1_age != 0)
                        list.push({ type: Games.ActorRequireEnum.age, value: this.envoy1_age });
                    if (this.envoy1_Continents != 0)
                        list.push({ type: Games.ActorRequireEnum.Continents, value: this.envoy1_Continents });
                    if (this.envoy1_type != 0)
                        list.push({ type: Games.ActorRequireEnum.type, value: this.envoy1_type });
                    this._requireList.push(list);
                    list = [];
                    if (this.envoy2_art != 0)
                        list.push({ type: Games.ActorRequireEnum.art, value: this.envoy2_art });
                    if (this.envoy2_entertainment != 0)
                        list.push({ type: Games.ActorRequireEnum.entertainment, value: this.envoy2_entertainment });
                    if (this.envoy2_performance != 0)
                        list.push({ type: Games.ActorRequireEnum.performance, value: this.envoy2_performance });
                    if (this.envoy2_plot != 0)
                        list.push({ type: Games.ActorRequireEnum.plot, value: this.envoy2_plot });
                    if (this.envoy2_scene != 0)
                        list.push({ type: Games.ActorRequireEnum.scene, value: this.envoy2_scene });
                    if (this.envoy2_sex != 0)
                        list.push({ type: Games.ActorRequireEnum.sex, value: this.envoy2_sex });
                    if (this.envoy2_age != 0)
                        list.push({ type: Games.ActorRequireEnum.age, value: this.envoy2_age });
                    if (this.envoy2_Continents != 0)
                        list.push({ type: Games.ActorRequireEnum.Continents, value: this.envoy2_Continents });
                    if (this.envoy2_type != 0)
                        list.push({ type: Games.ActorRequireEnum.type, value: this.envoy2_type });
                    this._requireList.push(list);
                    list = [];
                    if (this.envoy3_art != 0)
                        list.push({ type: Games.ActorRequireEnum.art, value: this.envoy3_art });
                    if (this.envoy3_entertainment != 0)
                        list.push({ type: Games.ActorRequireEnum.entertainment, value: this.envoy3_entertainment });
                    if (this.envoy3_performance != 0)
                        list.push({ type: Games.ActorRequireEnum.performance, value: this.envoy3_performance });
                    if (this.envoy3_plot != 0)
                        list.push({ type: Games.ActorRequireEnum.plot, value: this.envoy3_plot });
                    if (this.envoy3_scene != 0)
                        list.push({ type: Games.ActorRequireEnum.scene, value: this.envoy3_scene });
                    if (this.envoy3_sex != 0)
                        list.push({ type: Games.ActorRequireEnum.sex, value: this.envoy3_sex });
                    if (this.envoy3_age != 0)
                        list.push({ type: Games.ActorRequireEnum.age, value: this.envoy3_age });
                    if (this.envoy3_Continents != 0)
                        list.push({ type: Games.ActorRequireEnum.Continents, value: this.envoy3_Continents });
                    if (this.envoy3_type != 0)
                        list.push({ type: Games.ActorRequireEnum.type, value: this.envoy3_type });
                    this._requireList.push(list);
                    list = [];
                    if (this.envoy4_art != 0)
                        list.push({ type: Games.ActorRequireEnum.art, value: this.envoy4_art });
                    if (this.envoy4_entertainment != 0)
                        list.push({ type: Games.ActorRequireEnum.entertainment, value: this.envoy4_entertainment });
                    if (this.envoy4_performance != 0)
                        list.push({ type: Games.ActorRequireEnum.performance, value: this.envoy4_performance });
                    if (this.envoy4_plot != 0)
                        list.push({ type: Games.ActorRequireEnum.plot, value: this.envoy4_plot });
                    if (this.envoy4_scene != 0)
                        list.push({ type: Games.ActorRequireEnum.scene, value: this.envoy4_scene });
                    if (this.envoy4_sex != 0)
                        list.push({ type: Games.ActorRequireEnum.sex, value: this.envoy4_sex });
                    if (this.envoy4_age != 0)
                        list.push({ type: Games.ActorRequireEnum.age, value: this.envoy4_age });
                    if (this.envoy4_Continents != 0)
                        list.push({ type: Games.ActorRequireEnum.Continents, value: this.envoy4_Continents });
                    if (this.envoy4_type != 0)
                        list.push({ type: Games.ActorRequireEnum.type, value: this.envoy4_type });
                    this._requireList.push(list);
                    list = [];
                    if (this.envoy5_art != 0)
                        list.push({ type: Games.ActorRequireEnum.art, value: this.envoy5_art });
                    if (this.envoy5_entertainment != 0)
                        list.push({ type: Games.ActorRequireEnum.entertainment, value: this.envoy5_entertainment });
                    if (this.envoy5_performance != 0)
                        list.push({ type: Games.ActorRequireEnum.performance, value: this.envoy5_performance });
                    if (this.envoy5_plot != 0)
                        list.push({ type: Games.ActorRequireEnum.plot, value: this.envoy5_plot });
                    if (this.envoy5_scene != 0)
                        list.push({ type: Games.ActorRequireEnum.scene, value: this.envoy5_scene });
                    if (this.envoy5_sex != 0)
                        list.push({ type: Games.ActorRequireEnum.sex, value: this.envoy5_sex });
                    if (this.envoy5_age != 0)
                        list.push({ type: Games.ActorRequireEnum.age, value: this.envoy5_age });
                    if (this.envoy5_Continents != 0)
                        list.push({ type: Games.ActorRequireEnum.Continents, value: this.envoy5_Continents });
                    if (this.envoy5_type != 0)
                        list.push({ type: Games.ActorRequireEnum.type, value: this.envoy5_type });
                    this._requireList.push(list);
                }
                return this._requireList;
            },
            enumerable: true,
            configurable: true
        });
        return CityConfig;
    }(configs.CityConfigStruct));
    configs.CityConfig = CityConfig;
})(configs || (configs = {}));
//# sourceMappingURL=CityConfig.js.map