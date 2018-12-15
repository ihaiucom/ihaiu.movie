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
        var RightTopMenuBarStruct = /** @class */ (function (_super) {
            __extends(RightTopMenuBarStruct, _super);
            function RightTopMenuBarStruct() {
                return _super.call(this) || this;
            }
            RightTopMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "RightTopMenuBar"));
            };
            RightTopMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_menuList = (this.getChild("menuList"));
            };
            RightTopMenuBarStruct.URL = "ui://7ecreso0hltlx4b";
            RightTopMenuBarStruct.DependPackages = ["MainUI"];
            return RightTopMenuBarStruct;
        }(fairygui.GComponent));
        MainUI.RightTopMenuBarStruct = RightTopMenuBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightTopMenuBarStruct.js.map