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
    var CountActivitiesConfigReader = /** @class */ (function (_super) {
        __extends(CountActivitiesConfigReader, _super);
        function CountActivitiesConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CountActivitiesConfigReader.prototype.sevenConfigList = function () {
            var list = this.getConfigList();
            var result = new Array();
            for (var i = 0; i < list.length; i++) {
                if (list[i].type === 1) {
                    result.push(list[i]);
                }
            }
            return result;
        };
        return CountActivitiesConfigReader;
    }(configs.CountActivitiesConfigReaderStruct));
    configs.CountActivitiesConfigReader = CountActivitiesConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=CountActivitiesConfigReader.js.map