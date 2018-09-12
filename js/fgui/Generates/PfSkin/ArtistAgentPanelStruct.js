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
        var ArtistAgentPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistAgentPanelStruct, _super);
            function ArtistAgentPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistAgentPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistAgentPanel"));
            };
            ArtistAgentPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_title2 = (this.getChild("title2"));
                this.m_tipLabel1 = (this.getChild("tipLabel1"));
                this.m_tipLabel2 = (this.getChild("tipLabel2"));
                this.m_agent1 = (this.getChild("agent1"));
                this.m_agent2 = (this.getChild("agent2"));
                this.m_agent3 = (this.getChild("agent3"));
                this.m_agent4 = (this.getChild("agent4"));
                this.m_agent5 = (this.getChild("agent5"));
                this.m_agent6 = (this.getChild("agent6"));
                this.m_agent7 = (this.getChild("agent7"));
                this.m_agent8 = (this.getChild("agent8"));
            };
            ArtistAgentPanelStruct.URL = "ui://s33x8418jazc1l0";
            ArtistAgentPanelStruct.DependPackages = ["PfSkin"];
            return ArtistAgentPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistAgentPanelStruct = ArtistAgentPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAgentPanelStruct.js.map