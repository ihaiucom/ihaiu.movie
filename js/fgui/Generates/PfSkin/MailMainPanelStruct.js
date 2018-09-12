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
        var MailMainPanelStruct = /** @class */ (function (_super) {
            __extends(MailMainPanelStruct, _super);
            function MailMainPanelStruct() {
                return _super.call(this) || this;
            }
            MailMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MailMainPanel"));
            };
            MailMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_tip = (this.getChild("tip"));
                this.m_NoMail = (this.getChild("NoMail"));
                this.m_viewPanel = (this.getChild("viewPanel"));
                this.m_btnReward = (this.getChild("btnReward"));
                this.m_btnDelect = (this.getChild("btnDelect"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            MailMainPanelStruct.URL = "ui://s33x8418klss1ud";
            MailMainPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MailMainPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MailMainPanelStruct = MailMainPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MailMainPanelStruct.js.map