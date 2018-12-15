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
    var DTDateTimeStruct = /** @class */ (function (_super) {
        __extends(DTDateTimeStruct, _super);
        function DTDateTimeStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTDateTimeStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTDateTime();
            config.y = csvGetInt(csv, 0);
            config.m = csvGetInt(csv, 1);
            config.d = csvGetInt(csv, 2);
            config.h = csvGetInt(csv, 3);
            config.mm = csvGetInt(csv, 4);
            config.s = csvGetInt(csv, 5);
            return config;
        };
        DTDateTimeStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTDateTime.parse(csv[i]));
            }
            return list;
        };
        return DTDateTimeStruct;
    }(configs.BaseConfig));
    configs.DTDateTimeStruct = DTDateTimeStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTDateTimeStruct.js.map