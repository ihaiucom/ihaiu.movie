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
    var PropertyConfigReader = /** @class */ (function (_super) {
        __extends(PropertyConfigReader, _super);
        function PropertyConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PropertyConfigReader.prototype.getPropertyWithType = function (type) {
            var result = new Array();
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].type == type) {
                    result.push(list[i]);
                }
            }
            return result;
        };
        PropertyConfigReader.prototype.getPropertyList = function () {
            var result = new Array();
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].type == 6) {
                    result.push(list[i].id);
                }
            }
            return result;
        };
        PropertyConfigReader.prototype.getPropertyConfigList = function () {
            var result = new Array();
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].type == 6) {
                    result.push(list[i]);
                }
            }
            return result;
        };
        PropertyConfigReader.prototype.GetPropertyName = function (propertyId) {
            var cfg = this.getConfig(propertyId);
            if (cfg) {
                return cfg.name;
            }
            return "";
        };
        return PropertyConfigReader;
    }(configs.PropertyConfigReaderStruct));
    configs.PropertyConfigReader = PropertyConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=PropertyConfigReader.js.map