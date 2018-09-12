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
        var StreetMainPanelStruct = /** @class */ (function (_super) {
            __extends(StreetMainPanelStruct, _super);
            function StreetMainPanelStruct() {
                return _super.call(this) || this;
            }
            StreetMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "StreetMainPanel"));
            };
            StreetMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showTab = this.getController("showTab");
                this.m_streetPanel = (this.getChild("streetPanel"));
                this.m_rankPanel = (this.getChild("rankPanel"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            StreetMainPanelStruct.URL = "ui://s33x8418oebq1vu";
            StreetMainPanelStruct.DependPackages = ["PfSkin", "Street", "Common"];
            return StreetMainPanelStruct;
        }(fairygui.GComponent));
        PfSkin.StreetMainPanelStruct = StreetMainPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetMainPanelStruct.js.map