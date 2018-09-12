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
    var DTProficiencyStruct = /** @class */ (function (_super) {
        __extends(DTProficiencyStruct, _super);
        function DTProficiencyStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTProficiencyStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTProficiency();
            config.v1 = csvGetInt(csv, 0);
            config.v2 = csvGetInt(csv, 1);
            return config;
        };
        DTProficiencyStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTProficiency.parse(csv[i]));
            }
            return list;
        };
        return DTProficiencyStruct;
    }(configs.BaseConfig));
    configs.DTProficiencyStruct = DTProficiencyStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTProficiencyStruct.js.map