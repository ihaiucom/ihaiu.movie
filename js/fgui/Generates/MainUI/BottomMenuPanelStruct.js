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
        var BottomMenuPanelStruct = /** @class */ (function (_super) {
            __extends(BottomMenuPanelStruct, _super);
            function BottomMenuPanelStruct() {
                return _super.call(this) || this;
            }
            BottomMenuPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "BottomMenuPanel"));
            };
            BottomMenuPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            BottomMenuPanelStruct.URL = "ui://7ecreso0cxvgx5o";
            BottomMenuPanelStruct.DependPackages = ["MainUI"];
            return BottomMenuPanelStruct;
        }(fairygui.GComponent));
        MainUI.BottomMenuPanelStruct = BottomMenuPanelStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BottomMenuPanelStruct.js.map