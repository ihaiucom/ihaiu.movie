/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
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
var fgui;
(function (fgui) {
    var Common;
    (function (Common) {
        var CommonViewUIStruct = /** @class */ (function (_super) {
            __extends(CommonViewUIStruct, _super);
            function CommonViewUIStruct() {
                return _super.call(this) || this;
            }
            CommonViewUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "CommonViewUI"));
            };
            CommonViewUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            CommonViewUIStruct.URL = "ui://txcuvopdpqkqcf";
            CommonViewUIStruct.DependPackages = ["Common"];
            return CommonViewUIStruct;
        }(fairygui.GComponent));
        Common.CommonViewUIStruct = CommonViewUIStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonViewUIStruct.js.map