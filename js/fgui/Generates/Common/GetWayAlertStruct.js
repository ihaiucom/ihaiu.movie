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
        var GetWayAlertStruct = /** @class */ (function (_super) {
            __extends(GetWayAlertStruct, _super);
            function GetWayAlertStruct() {
                return _super.call(this) || this;
            }
            GetWayAlertStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "GetWayAlert"));
            };
            GetWayAlertStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_lbl = (this.getChild("lbl"));
                this.m_descTxt = (this.getChild("descTxt"));
                this.m_needText = (this.getChild("needText"));
                this.m_getwayList = (this.getChild("getwayList"));
                this.m_assetNum = (this.getChild("assetNum"));
                this.m_assetLoad = (this.getChild("assetLoad"));
                this.m_bgmodel = (this.getChild("bgmodel"));
                this.m_commonDialog = (this.getChild("commonDialog"));
            };
            GetWayAlertStruct.URL = "ui://txcuvopde57g2b";
            GetWayAlertStruct.DependPackages = ["Common", "System", "PlayerInfo"];
            return GetWayAlertStruct;
        }(fairygui.GComponent));
        Common.GetWayAlertStruct = GetWayAlertStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GetWayAlertStruct.js.map