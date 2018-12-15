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
        var TalkViewStruct = /** @class */ (function (_super) {
            __extends(TalkViewStruct, _super);
            function TalkViewStruct() {
                return _super.call(this) || this;
            }
            TalkViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkView"));
            };
            TalkViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_channel = this.getController("channel");
                this.m_listTab = (this.getChild("listTab"));
                this.m_talkContentView = (this.getChild("talkContentView"));
                this.m_privateChatView = (this.getChild("privateChatView"));
                this.m_btnClose = (this.getChild("btnClose"));
            };
            TalkViewStruct.URL = "ui://tqkotd6ue3hk2";
            TalkViewStruct.DependPackages = ["Talk"];
            return TalkViewStruct;
        }(fairygui.GComponent));
        Talk.TalkViewStruct = TalkViewStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkViewStruct.js.map