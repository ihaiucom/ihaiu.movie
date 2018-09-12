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
    var DTStoryNumStruct = /** @class */ (function (_super) {
        __extends(DTStoryNumStruct, _super);
        function DTStoryNumStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTStoryNumStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTStoryNum();
            config.star = csvGetInt(csv, 0);
            config.num = csvGetInt(csv, 1);
            return config;
        };
        DTStoryNumStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTStoryNum.parse(csv[i]));
            }
            return list;
        };
        return DTStoryNumStruct;
    }(configs.BaseConfig));
    configs.DTStoryNumStruct = DTStoryNumStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTStoryNumStruct.js.map