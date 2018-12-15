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
    var Activity;
    (function (Activity) {
        var SignPanelStruct = /** @class */ (function (_super) {
            __extends(SignPanelStruct, _super);
            function SignPanelStruct() {
                return _super.call(this) || this;
            }
            SignPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SignPanel"));
            };
            SignPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_noNext = this.getController("noNext");
                this.m_signList = (this.getChild("signList"));
                this.m_nextTip = (this.getChild("nextTip"));
                this.m_nextIcon = (this.getChild("nextIcon"));
                this.m_nextNum = (this.getChild("nextNum"));
                this.m_starList = (this.getChild("starList"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            SignPanelStruct.URL = "ui://9qou8rs7pytu5";
            SignPanelStruct.DependPackages = ["Activity", "Common"];
            return SignPanelStruct;
        }(fairygui.GComponent));
        Activity.SignPanelStruct = SignPanelStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignPanelStruct.js.map