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
    var DTRandomIntervalStruct = /** @class */ (function (_super) {
        __extends(DTRandomIntervalStruct, _super);
        function DTRandomIntervalStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTRandomIntervalStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTRandomInterval();
            config.num1 = csvGetInt(csv, 0);
            config.num2 = csvGetInt(csv, 1);
            return config;
        };
        DTRandomIntervalStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTRandomInterval.parse(csv[i]));
            }
            return list;
        };
        return DTRandomIntervalStruct;
    }(configs.BaseConfig));
    configs.DTRandomIntervalStruct = DTRandomIntervalStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTRandomIntervalStruct.js.map