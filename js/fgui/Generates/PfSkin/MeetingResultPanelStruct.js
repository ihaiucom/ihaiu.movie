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
        var MeetingResultPanelStruct = /** @class */ (function (_super) {
            __extends(MeetingResultPanelStruct, _super);
            function MeetingResultPanelStruct() {
                return _super.call(this) || this;
            }
            MeetingResultPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MeetingResultPanel"));
            };
            MeetingResultPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_paylist = (this.getChild("paylist"));
                this.m_next = (this.getChild("next"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_head = (this.getChild("head"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_refuse = (this.getChild("refuse"));
            };
            MeetingResultPanelStruct.URL = "ui://s33x8418jzhf1vq";
            MeetingResultPanelStruct.DependPackages = ["PfSkin", "Common"];
            return MeetingResultPanelStruct;
        }(fairygui.GComponent));
        PfSkin.MeetingResultPanelStruct = MeetingResultPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingResultPanelStruct.js.map