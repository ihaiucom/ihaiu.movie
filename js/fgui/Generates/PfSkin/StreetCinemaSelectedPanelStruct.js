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
        var StreetCinemaSelectedPanelStruct = /** @class */ (function (_super) {
            __extends(StreetCinemaSelectedPanelStruct, _super);
            function StreetCinemaSelectedPanelStruct() {
                return _super.call(this) || this;
            }
            StreetCinemaSelectedPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetCinemaSelectedPanel"));
            };
            StreetCinemaSelectedPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txtTip1 = (this.getChild("txtTip1"));
                this.m_txtTip2 = (this.getChild("txtTip2"));
                this.m_icon = (this.getChild("icon"));
                this.m_txLevel = (this.getChild("txLevel"));
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_btnConfirm = (this.getChild("btnConfirm"));
            };
            StreetCinemaSelectedPanelStruct.URL = "ui://s33x84186ia7t1va";
            StreetCinemaSelectedPanelStruct.DependPackages = ["PfSkin", "Common"];
            return StreetCinemaSelectedPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetCinemaSelectedPanelStruct = StreetCinemaSelectedPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetCinemaSelectedPanelStruct.js.map