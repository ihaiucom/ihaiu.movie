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
        var MeetingResultDialogPanelStruct = /** @class */ (function (_super) {
            __extends(MeetingResultDialogPanelStruct, _super);
            function MeetingResultDialogPanelStruct() {
                return _super.call(this) || this;
            }
            MeetingResultDialogPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingResultDialogPanel"));
            };
            MeetingResultDialogPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_talkBg = (this.getChild("talkBg"));
                this.m_title = (this.getChild("title"));
            };
            MeetingResultDialogPanelStruct.URL = "ui://y3jchkngw1sr2m";
            MeetingResultDialogPanelStruct.DependPackages = ["Manage", "Common"];
            return MeetingResultDialogPanelStruct;
        }(fairygui.GLabel));
        Manage.MeetingResultDialogPanelStruct = MeetingResultDialogPanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingResultDialogPanelStruct.js.map