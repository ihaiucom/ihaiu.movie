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
        var ButtonTimeStruct = /** @class */ (function (_super) {
            __extends(ButtonTimeStruct, _super);
            function ButtonTimeStruct() {
                return _super.call(this) || this;
            }
            ButtonTimeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "ButtonTime"));
            };
            ButtonTimeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_time = (this.getChild("time"));
            };
            ButtonTimeStruct.URL = "ui://7ecreso0m6h3x4k";
            ButtonTimeStruct.DependPackages = ["MainUI"];
            return ButtonTimeStruct;
        }(fairygui.GComponent));
        MainUI.ButtonTimeStruct = ButtonTimeStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonTimeStruct.js.map