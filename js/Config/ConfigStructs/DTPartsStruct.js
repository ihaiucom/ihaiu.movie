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
    var DTPartsStruct = /** @class */ (function (_super) {
        __extends(DTPartsStruct, _super);
        function DTPartsStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTPartsStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTParts();
            config.v1 = csvGetString(csv, 0);
            config.v2 = csvGetString(csv, 1);
            return config;
        };
        DTPartsStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTParts.parse(csv[i]));
            }
            return list;
        };
        return DTPartsStruct;
    }(configs.BaseConfig));
    configs.DTPartsStruct = DTPartsStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTPartsStruct.js.map