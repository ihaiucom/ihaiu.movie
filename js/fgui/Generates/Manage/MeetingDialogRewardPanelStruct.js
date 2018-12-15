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
        var MeetingDialogRewardPanelStruct = /** @class */ (function (_super) {
            __extends(MeetingDialogRewardPanelStruct, _super);
            function MeetingDialogRewardPanelStruct() {
                return _super.call(this) || this;
            }
            MeetingDialogRewardPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingDialogRewardPanel"));
            };
            MeetingDialogRewardPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_title = (this.getChild("title"));
                this.m_name = (this.getChild("name"));
                this.m_list = (this.getChild("list"));
            };
            MeetingDialogRewardPanelStruct.URL = "ui://y3jchkngtpm82b";
            MeetingDialogRewardPanelStruct.DependPackages = ["Manage", "Common"];
            return MeetingDialogRewardPanelStruct;
        }(fairygui.GLabel));
        Manage.MeetingDialogRewardPanelStruct = MeetingDialogRewardPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingDialogRewardPanelStruct.js.map