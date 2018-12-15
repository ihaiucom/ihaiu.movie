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
        var RightTopMenuPanelStruct = /** @class */ (function (_super) {
            __extends(RightTopMenuPanelStruct, _super);
            function RightTopMenuPanelStruct() {
                return _super.call(this) || this;
            }
            RightTopMenuPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "RightTopMenuPanel"));
            };
            RightTopMenuPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            RightTopMenuPanelStruct.URL = "ui://7ecreso0zh0zx5l";
            RightTopMenuPanelStruct.DependPackages = ["MainUI"];
            return RightTopMenuPanelStruct;
        }(fairygui.GComponent));
        MainUI.RightTopMenuPanelStruct = RightTopMenuPanelStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RightTopMenuPanelStruct.js.map