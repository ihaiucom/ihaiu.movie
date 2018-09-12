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
    var PlayerInfo;
    (function (PlayerInfo) {
        var TabPanelStruct = /** @class */ (function (_super) {
            __extends(TabPanelStruct, _super);
            function TabPanelStruct() {
                return _super.call(this) || this;
            }
            TabPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PlayerInfo", "TabPanel"));
            };
            TabPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tabctrl = this.getController("tabctrl");
                this.m_tab1 = (this.getChild("tab1"));
                this.m_tab2 = (this.getChild("tab2"));
                this.m_tab3 = (this.getChild("tab3"));
                this.m_tab4 = (this.getChild("tab4"));
                this.m_tab5 = (this.getChild("tab5"));
            };
            TabPanelStruct.URL = "ui://tderqmz5dyfeq";
            TabPanelStruct.DependPackages = ["PlayerInfo", "Common"];
            return TabPanelStruct;
        }(fairygui.GComponent));
        PlayerInfo.TabPanelStruct = TabPanelStruct;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TabPanelStruct.js.map