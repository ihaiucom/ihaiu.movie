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
    var CityConfigReader = /** @class */ (function (_super) {
        __extends(CityConfigReader, _super);
        function CityConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CityConfigReader.prototype.getCitysByCountry = function (countryId) {
            var retLst = [];
            var cfgList = this.getConfigList();
            for (var index = 0; index < cfgList.length; index++) {
                var cfg = cfgList[index];
                if (cfg.country == countryId) {
                    retLst.push(cfg);
                }
            }
            return retLst;
        };
        CityConfigReader.prototype.GetCityRequire = function (id) {
            var retLst = [];
            var cfg = this.getConfig(id);
            if (cfg) {
                return cfg.Require;
            }
            return [[], [], [], [], []];
        };
        CityConfigReader.prototype.GetCityByNum = function (num) {
            if (this.dicCityNum == null) {
                this.dicCityNum = new Dictionary();
                var list = this.getConfigList();
                for (var index = 0; index < list.length; index++) {
                    var cfg = list[index];
                    this.dicCityNum.add(cfg.city_num, cfg);
                }
            }
            return this.dicCityNum.getValue(num);
        };
        CityConfigReader.prototype.GetCityName = function (id) {
            var cfg = this.getConfig(id);
            if (cfg) {
                return cfg.name;
            }
            return "";
        };
        CityConfigReader.prototype.sort = function (a, b) {
            var ca = this.getConfig(a);
            var cb = this.getConfig(b);
            if (ca && cb) {
                return ca.city_num - cb.city_num;
            }
            if (ca == null) {
                return -1;
            }
            if (cb == null) {
                return 1;
            }
        };
        return CityConfigReader;
    }(configs.CityConfigReaderStruct));
    configs.CityConfigReader = CityConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=CityConfigReader.js.map