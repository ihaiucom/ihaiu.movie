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
    var DTPerformSpeakStruct = /** @class */ (function (_super) {
        __extends(DTPerformSpeakStruct, _super);
        function DTPerformSpeakStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTPerformSpeakStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTPerformSpeak();
            config.v1 = csvGetInt(csv, 0);
            config.v2 = csvGetInt(csv, 1);
            config.v3 = csvGetInt(csv, 2);
            return config;
        };
        DTPerformSpeakStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTPerformSpeak.parse(csv[i]));
            }
            return list;
        };
        return DTPerformSpeakStruct;
    }(configs.BaseConfig));
    configs.DTPerformSpeakStruct = DTPerformSpeakStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTPerformSpeakStruct.js.map