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
    var GM;
    (function (GM) {
        var GMSubMenuBarStruct = /** @class */ (function (_super) {
            __extends(GMSubMenuBarStruct, _super);
            function GMSubMenuBarStruct() {
                return _super.call(this) || this;
            }
            GMSubMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMSubMenuBar"));
            };
            GMSubMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_menuBar = (this.getChild("menuBar"));
                this.m_subMenu = (this.getChild("subMenu"));
            };
            GMSubMenuBarStruct.URL = "ui://ujw583ypfbyi6";
            GMSubMenuBarStruct.DependPackages = ["GM"];
            return GMSubMenuBarStruct;
        }(fairygui.GComponent));
        GM.GMSubMenuBarStruct = GMSubMenuBarStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMSubMenuBarStruct.js.map