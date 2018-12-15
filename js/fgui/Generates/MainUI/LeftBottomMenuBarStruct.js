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
        var LeftBottomMenuBarStruct = /** @class */ (function (_super) {
            __extends(LeftBottomMenuBarStruct, _super);
            function LeftBottomMenuBarStruct() {
                return _super.call(this) || this;
            }
            LeftBottomMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "LeftBottomMenuBar"));
            };
            LeftBottomMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_continue0 = (this.getChild("continue0"));
                this.m_continue1 = (this.getChild("continue1"));
                this.m_continue2 = (this.getChild("continue2"));
                this.m_continue3 = (this.getChild("continue3"));
                this.m_continue4 = (this.getChild("continue4"));
            };
            LeftBottomMenuBarStruct.URL = "ui://7ecreso0lftxx5l";
            LeftBottomMenuBarStruct.DependPackages = ["MainUI"];
            return LeftBottomMenuBarStruct;
        }(fairygui.GComponent));
        MainUI.LeftBottomMenuBarStruct = LeftBottomMenuBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LeftBottomMenuBarStruct.js.map