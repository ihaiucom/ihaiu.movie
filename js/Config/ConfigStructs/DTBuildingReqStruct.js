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
    var DTBuildingReqStruct = /** @class */ (function (_super) {
        __extends(DTBuildingReqStruct, _super);
        function DTBuildingReqStruct() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTBuildingReqStruct.parse = function (txt) {
            var csv = toStringArray(txt);
            var config = new configs.DTBuildingReq();
            config.type = csvGetInt(csv, 0);
            config.level = csvGetInt(csv, 1);
            return config;
        };
        DTBuildingReqStruct.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                list.push(configs.DTBuildingReq.parse(csv[i]));
            }
            return list;
        };
        return DTBuildingReqStruct;
    }(configs.BaseConfig));
    configs.DTBuildingReqStruct = DTBuildingReqStruct;
})(configs || (configs = {}));
//# sourceMappingURL=DTBuildingReqStruct.js.map