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
    var Building;
    (function (Building) {
        var MainStruct = /** @class */ (function (_super) {
            __extends(MainStruct, _super);
            function MainStruct() {
                return _super.call(this) || this;
            }
            MainStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "Main"));
            };
            MainStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_screenBg = (this.getChild("screenBg"));
                this.m_main_bottom = (this.getChild("main_bottom"));
                this.m_main_top = (this.getChild("main_top"));
                this.m_BuildList = (this.getChild("BuildList"));
            };
            MainStruct.URL = "ui://d062jvkgor9t0";
            MainStruct.DependPackages = ["Building"];
            return MainStruct;
        }(fairygui.GComponent));
        Building.MainStruct = MainStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MainStruct.js.map