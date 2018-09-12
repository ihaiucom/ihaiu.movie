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
    var PfSkin;
    (function (PfSkin) {
        var StreetLvUpInfoPanelStruct = /** @class */ (function (_super) {
            __extends(StreetLvUpInfoPanelStruct, _super);
            function StreetLvUpInfoPanelStruct() {
                return _super.call(this) || this;
            }
            StreetLvUpInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetLvUpInfoPanel"));
            };
            StreetLvUpInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtTip1 = (this.getChild("txtTip1"));
                this.m_txtTip2 = (this.getChild("txtTip2"));
                this.m_txtTip3 = (this.getChild("txtTip3"));
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
            };
            StreetLvUpInfoPanelStruct.URL = "ui://s33x8418pn361w5";
            StreetLvUpInfoPanelStruct.DependPackages = ["PfSkin"];
            return StreetLvUpInfoPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetLvUpInfoPanelStruct = StreetLvUpInfoPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetLvUpInfoPanelStruct.js.map