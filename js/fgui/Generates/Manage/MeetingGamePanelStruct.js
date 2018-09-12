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
        var MeetingGamePanelStruct = /** @class */ (function (_super) {
            __extends(MeetingGamePanelStruct, _super);
            function MeetingGamePanelStruct() {
                return _super.call(this) || this;
            }
            MeetingGamePanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingGamePanel"));
            };
            MeetingGamePanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_other = (this.getChild("other"));
                this.m_minelist = (this.getChild("minelist"));
                this.m_title = (this.getChild("title"));
                this.m_head = (this.getChild("head"));
                this.m_target = (this.getChild("target"));
                this.m_stopBtn = (this.getChild("stopBtn"));
            };
            MeetingGamePanelStruct.URL = "ui://y3jchkngtpm821";
            MeetingGamePanelStruct.DependPackages = ["Manage", "Common"];
            return MeetingGamePanelStruct;
        }(fairygui.GComponent));
        Manage.MeetingGamePanelStruct = MeetingGamePanelStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingGamePanelStruct.js.map