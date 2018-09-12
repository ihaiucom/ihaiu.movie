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
        var MeetingUIStruct = /** @class */ (function (_super) {
            __extends(MeetingUIStruct, _super);
            function MeetingUIStruct() {
                return _super.call(this) || this;
            }
            MeetingUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MeetingUI"));
            };
            MeetingUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_startMeeting = (this.getChild("startMeeting"));
                this.m_askPrice = (this.getChild("askPrice"));
                this.m_gamePanel = (this.getChild("gamePanel"));
                this.m_resultPanel = (this.getChild("resultPanel"));
            };
            MeetingUIStruct.URL = "ui://s33x8418jzhf1vi";
            MeetingUIStruct.DependPackages = ["PfSkin"];
            return MeetingUIStruct;
        }(fairygui.GComponent));
        PfSkin.MeetingUIStruct = MeetingUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MeetingUIStruct.js.map