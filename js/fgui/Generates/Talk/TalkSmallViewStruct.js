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
        var TalkSmallViewStruct = /** @class */ (function (_super) {
            __extends(TalkSmallViewStruct, _super);
            function TalkSmallViewStruct() {
                return _super.call(this) || this;
            }
            TalkSmallViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Talk", "TalkSmallView"));
            };
            TalkSmallViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isShowInfo = this.getController("isShowInfo");
                this.m_smallView = (this.getChild("smallView"));
                this.m_btnTalk = (this.getChild("btnTalk"));
                this.m_t0 = this.getTransition("t0");
            };
            TalkSmallViewStruct.URL = "ui://tqkotd6uk6rci";
            TalkSmallViewStruct.DependPackages = ["Talk"];
            return TalkSmallViewStruct;
        }(fairygui.GComponent));
        Talk.TalkSmallViewStruct = TalkSmallViewStruct;
    })(Talk = fgui.Talk || (fgui.Talk = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkSmallViewStruct.js.map