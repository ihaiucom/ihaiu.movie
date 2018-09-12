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
        var GMSubMenuRadioBarStruct = /** @class */ (function (_super) {
            __extends(GMSubMenuRadioBarStruct, _super);
            function GMSubMenuRadioBarStruct() {
                return _super.call(this) || this;
            }
            GMSubMenuRadioBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMSubMenuRadioBar"));
            };
            GMSubMenuRadioBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_menuBar = (this.getChild("menuBar"));
                this.m_subMenu = (this.getChild("subMenu"));
            };
            GMSubMenuRadioBarStruct.URL = "ui://ujw583ypket7l";
            GMSubMenuRadioBarStruct.DependPackages = ["GM"];
            return GMSubMenuRadioBarStruct;
        }(fairygui.GComponent));
        GM.GMSubMenuRadioBarStruct = GMSubMenuRadioBarStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMSubMenuRadioBarStruct.js.map