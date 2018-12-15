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
        var GetAssetFxPanelStruct = /** @class */ (function (_super) {
            __extends(GetAssetFxPanelStruct, _super);
            function GetAssetFxPanelStruct() {
                return _super.call(this) || this;
            }
            GetAssetFxPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "GetAssetFxPanel"));
            };
            GetAssetFxPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            GetAssetFxPanelStruct.URL = "ui://txcuvopdc2r8t24t";
            GetAssetFxPanelStruct.DependPackages = ["Common"];
            return GetAssetFxPanelStruct;
        }(fairygui.GComponent));
        Common.GetAssetFxPanelStruct = GetAssetFxPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GetAssetFxPanelStruct.js.map