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
    var DTShootTypeStruct = /** @class */ (function (_super) {
        __extends(DTShootTypeStruct, _super);
        function DTShootTypeStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTShootTypeStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTShootType();
            config.shoottypeid = csvGetInt(csv, 0);
            config.rate = csvGetInt(csv, 1);
            return config;
        };
        DTShootTypeStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTShootType.parse(csv[i]));
            }
            return list;
        };
        return DTShootTypeStruct;
    }(configs.BaseConfig));
    configs.DTShootTypeStruct = DTShootTypeStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTShootTypeStruct.js.map