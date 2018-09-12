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
        var MailContentPanelStruct = /** @class */ (function (_super) {
            __extends(MailContentPanelStruct, _super);
            function MailContentPanelStruct() {
                return _super.call(this) || this;
            }
            MailContentPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MailContentPanel"));
            };
            MailContentPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_reward = this.getController("reward");
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_time = (this.getChild("time"));
                this.m_listReward = (this.getChild("listReward"));
                this.m_tipHasReward = (this.getChild("tipHasReward"));
                this.m_title = (this.getChild("title"));
                this.m_Msg1 = (this.getChild("Msg1"));
                this.m_Msg2 = (this.getChild("Msg2"));
                this.m_content = (this.getChild("content"));
                this.m_btnDelect = (this.getChild("btnDelect"));
                this.m_btnReward = (this.getChild("btnReward"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            MailContentPanelStruct.URL = "ui://s33x8418klss1uh";
            MailContentPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MailContentPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MailContentPanelStruct = MailContentPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailContentPanelStruct.js.map