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
    var DTVector2Struct = /** @class */ (function (_super) {
        __extends(DTVector2Struct, _super);
        function DTVector2Struct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTVector2Struct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTVector2();
            config.x = csvGetFloat(csv, 0);
            config.y = csvGetFloat(csv, 1);
            return config;
        };
        DTVector2Struct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTVector2.parse(csv[i]));
            }
            return list;
        };
        return DTVector2Struct;
    }(configs.BaseConfig));
    configs.DTVector2Struct = DTVector2Struct;
})(configs || (configs = {}));
//# sourceMappingURL=DTVector2Struct.js.map