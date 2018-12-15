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
        var GMMenuBarStruct = /** @class */ (function (_super) {
            __extends(GMMenuBarStruct, _super);
            function GMMenuBarStruct() {
                return _super.call(this) || this;
            }
            GMMenuBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMMenuBar"));
            };
            GMMenuBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_menuBar = (this.getChild("menuBar"));
                this.m_menuList = (this.getChild("menuList"));
            };
            GMMenuBarStruct.URL = "ui://ujw583ypwl2t1";
            GMMenuBarStruct.DependPackages = ["GM"];
            return GMMenuBarStruct;
        }(fairygui.GComponent));
        GM.GMMenuBarStruct = GMMenuBarStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMMenuBarStruct.js.map