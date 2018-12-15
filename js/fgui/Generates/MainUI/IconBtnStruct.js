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
        var IconBtnStruct = /** @class */ (function (_super) {
            __extends(IconBtnStruct, _super);
            function IconBtnStruct() {
                return _super.call(this) || this;
            }
            IconBtnStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "iconBtn"));
            };
            IconBtnStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_red_visible = this.getController("c_red_visible");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_red = (this.getChild("red"));
            };
            IconBtnStruct.URL = "ui://7ecreso0g8fc2a";
            IconBtnStruct.DependPackages = ["MainUI", "Common"];
            return IconBtnStruct;
        }(fairygui.GButton));
        MainUI.IconBtnStruct = IconBtnStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=IconBtnStruct.js.map