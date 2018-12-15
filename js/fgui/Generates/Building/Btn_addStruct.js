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
        var Btn_addStruct = /** @class */ (function (_super) {
            __extends(Btn_addStruct, _super);
            function Btn_addStruct() {
                return _super.call(this) || this;
            }
            Btn_addStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "btn_add"));
            };
            Btn_addStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
            };
            Btn_addStruct.URL = "ui://d062jvkgitjo13l";
            Btn_addStruct.DependPackages = ["Building", "Common"];
            return Btn_addStruct;
        }(fairygui.GButton));
        Building.Btn_addStruct = Btn_addStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Btn_addStruct.js.map