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
        var ButtonTime2Struct = /** @class */ (function (_super) {
            __extends(ButtonTime2Struct, _super);
            function ButtonTime2Struct() {
                return _super.call(this) || this;
            }
            ButtonTime2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "ButtonTime2"));
            };
            ButtonTime2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_time = (this.getChild("time"));
            };
            ButtonTime2Struct.URL = "ui://7ecreso0be5ax5w";
            ButtonTime2Struct.DependPackages = ["MainUI"];
            return ButtonTime2Struct;
        }(fairygui.GComponent));
        MainUI.ButtonTime2Struct = ButtonTime2Struct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonTime2Struct.js.map