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
        var RightBottomMenuBarStruct = /** @class */ (function (_super) {
            __extends(RightBottomMenuBarStruct, _super);
            function RightBottomMenuBarStruct() {
                return _super.call(this) || this;
            }
            RightBottomMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "RightBottomMenuBar"));
            };
            RightBottomMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_setting = (this.getChild("setting"));
            };
            RightBottomMenuBarStruct.URL = "ui://7ecreso0npx5x3o";
            RightBottomMenuBarStruct.DependPackages = ["MainUI"];
            return RightBottomMenuBarStruct;
        }(fairygui.GComponent));
        MainUI.RightBottomMenuBarStruct = RightBottomMenuBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightBottomMenuBarStruct.js.map