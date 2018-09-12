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
        var GuiderStruct = /** @class */ (function (_super) {
            __extends(GuiderStruct, _super);
            function GuiderStruct() {
                return _super.call(this) || this;
            }
            GuiderStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "Guider"));
            };
            GuiderStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            GuiderStruct.URL = "ui://7ecreso0ua2b2x";
            GuiderStruct.DependPackages = ["MainUI"];
            return GuiderStruct;
        }(fairygui.GButton));
        MainUI.GuiderStruct = GuiderStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuiderStruct.js.map