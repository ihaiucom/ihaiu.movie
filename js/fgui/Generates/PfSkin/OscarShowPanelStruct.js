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
        var OscarShowPanelStruct = /** @class */ (function (_super) {
            __extends(OscarShowPanelStruct, _super);
            function OscarShowPanelStruct() {
                return _super.call(this) || this;
            }
            OscarShowPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "OscarShowPanel"));
            };
            OscarShowPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actorControl = (this.getChild("actorControl"));
                this.m_listCandidate = (this.getChild("listCandidate"));
                this.m_listOscarCup = (this.getChild("listOscarCup"));
                this.m_showPoint = (this.getChild("showPoint"));
                this.m_animContainer = (this.getChild("animContainer"));
                this.m_winnerItem = (this.getChild("winnerItem"));
                this.m_danmu = (this.getChild("danmu"));
                this.m_btnNext = (this.getChild("btnNext"));
                this.m_input = (this.getChild("input"));
                this.m_btnSend = (this.getChild("btnSend"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            OscarShowPanelStruct.URL = "ui://s33x8418iybct1vp";
            OscarShowPanelStruct.DependPackages = ["PfSkin"];
            return OscarShowPanelStruct;
        }(fairygui.GComponent));
        PfSkin.OscarShowPanelStruct = OscarShowPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarShowPanelStruct.js.map