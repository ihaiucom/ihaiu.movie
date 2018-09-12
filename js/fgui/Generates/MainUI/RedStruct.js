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
        var RedStruct = /** @class */ (function (_super) {
            __extends(RedStruct, _super);
            function RedStruct() {
                return _super.call(this) || this;
            }
            RedStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "Red"));
            };
            RedStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_num = (this.getChild("num"));
            };
            RedStruct.URL = "ui://7ecreso011k5x37";
            RedStruct.DependPackages = ["MainUI", "Common"];
            return RedStruct;
        }(fairygui.GComponent));
        MainUI.RedStruct = RedStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RedStruct.js.map