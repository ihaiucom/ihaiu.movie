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
    var Cooperation;
    (function (Cooperation) {
        var CooperationMainPanelStruct = /** @class */ (function (_super) {
            __extends(CooperationMainPanelStruct, _super);
            function CooperationMainPanelStruct() {
                return _super.call(this) || this;
            }
            CooperationMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationMainPanel"));
            };
            CooperationMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_have = this.getController("have");
                this.m_havefirst = this.getController("havefirst");
                this.m_title = (this.getChild("title"));
                this.m_text1 = (this.getChild("text1"));
                this.m_text2 = (this.getChild("text2"));
                this.m_selfId = (this.getChild("selfId"));
                this.m_remind = (this.getChild("remind"));
                this.m_intro = (this.getChild("intro"));
                this.m_text3 = (this.getChild("text3"));
                this.m_otherID = (this.getChild("otherID"));
                this.m_icon1 = (this.getChild("icon1"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_number1 = (this.getChild("number1"));
                this.m_number2 = (this.getChild("number2"));
                this.m_time = (this.getChild("time"));
                this.m_introduce = (this.getChild("introduce"));
                this.m_time1 = (this.getChild("time1"));
                this.m_inviteBtn1 = (this.getChild("inviteBtn1"));
                this.m_inviteBtn2 = (this.getChild("inviteBtn2"));
                this.m_disinviteBtn = (this.getChild("disinviteBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            CooperationMainPanelStruct.URL = "ui://k9ycebr5w3bv0";
            CooperationMainPanelStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationMainPanelStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationMainPanelStruct = CooperationMainPanelStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationMainPanelStruct.js.map