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
        var BottomRightMenuPanelStruct = /** @class */ (function (_super) {
            __extends(BottomRightMenuPanelStruct, _super);
            function BottomRightMenuPanelStruct() {
                return _super.call(this) || this;
            }
            BottomRightMenuPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "BottomRightMenuPanel"));
            };
            BottomRightMenuPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_menuGroup = (this.getChild("menuGroup"));
            };
            BottomRightMenuPanelStruct.URL = "ui://7ecreso0cxvgx5m";
            BottomRightMenuPanelStruct.DependPackages = ["MainUI"];
            return BottomRightMenuPanelStruct;
        }(fairygui.GComponent));
        MainUI.BottomRightMenuPanelStruct = BottomRightMenuPanelStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BottomRightMenuPanelStruct.js.map