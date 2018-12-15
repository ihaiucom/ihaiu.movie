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
        var MeetingUIStruct = /** @class */ (function (_super) {
            __extends(MeetingUIStruct, _super);
            function MeetingUIStruct() {
                return _super.call(this) || this;
            }
            MeetingUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Manage", "MeetingUI"));
            };
            MeetingUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_c_result_effect = this.getController("c_result_effect");
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_commonTitle = (this.getChild("commonTitle"));
                this.m_startMeeting = (this.getChild("startMeeting"));
                this.m_askPrice = (this.getChild("askPrice"));
                this.m_gamePanel = (this.getChild("gamePanel"));
                this.m_resultPanel = (this.getChild("resultPanel"));
                this.m_resultEffectPanel = (this.getChild("resultEffectPanel"));
            };
            MeetingUIStruct.URL = "ui://y3jchkngtpm824";
            MeetingUIStruct.DependPackages = ["Manage", "PfSkin", "Common", "Fx", "Building"];
            return MeetingUIStruct;
        }(fairygui.GComponent));
        Manage.MeetingUIStruct = MeetingUIStruct;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingUIStruct.js.map