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
    var DTlValue2Struct = /** @class */ (function (_super) {
        __extends(DTlValue2Struct, _super);
        function DTlValue2Struct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTlValue2Struct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTlValue2();
            config.v1 = csvGetInt(csv, 0);
            config.v2 = csvGetInt(csv, 1);
            return config;
        };
        DTlValue2Struct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTlValue2.parse(csv[i]));
            }
            return list;
        };
        return DTlValue2Struct;
    }(configs.BaseConfig));
    configs.DTlValue2Struct = DTlValue2Struct;
})(configs || (configs = {}));
//# sourceMappingURL=DTlValue2Struct.js.map