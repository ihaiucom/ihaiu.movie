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
    var MainUI;
    (function (MainUI) {
        var MainUIStruct = /** @class */ (function (_super) {
            __extends(MainUIStruct, _super);
            function MainUIStruct() {
                return _super.call(this) || this;
            }
            MainUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "MainUI"));
            };
            MainUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_visitui = this.getController("c_visible_visitui");
                this.m_builder = (this.getChild("builder"));
                this.m_topInfoBar = (this.getChild("topInfoBar"));
                this.m_rightBottomMenuBar = (this.getChild("rightBottomMenuBar"));
                this.m_mainMenuBar = (this.getChild("mainMenuBar"));
                this.m_goalPanel = (this.getChild("goalPanel"));
                this.m_warTip = (this.getChild("warTip"));
                this.m_leftBottomMenuBar = (this.getChild("leftBottomMenuBar"));
                this.m_filmSmallBtn = (this.getChild("filmSmallBtn"));
                this.m_expect = (this.getChild("expect"));
                this.m_cooperation = (this.getChild("cooperation"));
                this.m_visitUI = (this.getChild("visitUI"));
                this.m_taskPanel = (this.getChild("taskPanel"));
            };
            MainUIStruct.URL = "ui://7ecreso0rbh3x44";
            MainUIStruct.DependPackages = ["MainUI", "Building", "Common", "System"];
            return MainUIStruct;
        }(fairygui.GComponent));
        MainUI.MainUIStruct = MainUIStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainUIStruct.js.map