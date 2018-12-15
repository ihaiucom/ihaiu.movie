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
    var Talk;
    (function (Talk) {
        var TalkMainPanelStruct = /** @class */ (function (_super) {
            __extends(TalkMainPanelStruct, _super);
            function TalkMainPanelStruct() {
                return _super.call(this) || this;
            }
            TalkMainPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkMainPanel"));
            };
            TalkMainPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_channel = this.getController("channel");
                this.m_talkView = (this.getChild("talkView"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            TalkMainPanelStruct.URL = "ui://tqkotd6ue3hk2";
            TalkMainPanelStruct.DependPackages = ["Talk"];
            return TalkMainPanelStruct;
        }(fairygui.GComponent));
        Talk.TalkMainPanelStruct = TalkMainPanelStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkMainPanelStruct.js.map