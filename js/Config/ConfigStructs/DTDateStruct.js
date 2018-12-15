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
    var DTDateStruct = /** @class */ (function (_super) {
        __extends(DTDateStruct, _super);
        function DTDateStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTDateStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTDate();
            config.y = csvGetInt(csv, 0);
            config.m = csvGetInt(csv, 1);
            config.d = csvGetInt(csv, 2);
            return config;
        };
        DTDateStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTDate.parse(csv[i]));
            }
            return list;
        };
        return DTDateStruct;
    }(configs.BaseConfig));
    configs.DTDateStruct = DTDateStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTDateStruct.js.map