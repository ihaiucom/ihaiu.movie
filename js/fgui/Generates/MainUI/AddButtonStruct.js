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
        var AddButtonStruct = /** @class */ (function (_super) {
            __extends(AddButtonStruct, _super);
            function AddButtonStruct() {
                return _super.call(this) || this;
            }
            AddButtonStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "AddButton"));
            };
            AddButtonStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            AddButtonStruct.URL = "ui://7ecreso08zgr35";
            AddButtonStruct.DependPackages = ["MainUI", "Common"];
            return AddButtonStruct;
        }(fairygui.GButton));
        MainUI.AddButtonStruct = AddButtonStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AddButtonStruct.js.map