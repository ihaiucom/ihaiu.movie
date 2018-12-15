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
    var Manage;
    (function (Manage) {
        var MeetingResultPanelStruct = /** @class */ (function (_super) {
            __extends(MeetingResultPanelStruct, _super);
            function MeetingResultPanelStruct() {
                return _super.call(this) || this;
            }
            MeetingResultPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingResultPanel"));
            };
            MeetingResultPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_result = this.getController("c_result");
                this.m_title = (this.getChild("title"));
                this.m_paylist = (this.getChild("paylist"));
                this.m_paytitle = (this.getChild("paytitle"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_head = (this.getChild("head"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_refuse = (this.getChild("refuse"));
            };
            MeetingResultPanelStruct.URL = "ui://y3jchkngtpm823";
            MeetingResultPanelStruct.DependPackages = ["Manage", "Common"];
            return MeetingResultPanelStruct;
        }(fairygui.GComponent));
        Manage.MeetingResultPanelStruct = MeetingResultPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingResultPanelStruct.js.map