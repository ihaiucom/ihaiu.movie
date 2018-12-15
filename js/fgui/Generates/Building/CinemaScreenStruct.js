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
        var CinemaScreenStruct = /** @class */ (function (_super) {
            __extends(CinemaScreenStruct, _super);
            function CinemaScreenStruct() {
                return _super.call(this) || this;
            }
            CinemaScreenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "CinemaScreen"));
            };
            CinemaScreenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            CinemaScreenStruct.URL = "ui://d062jvkgdgure145";
            CinemaScreenStruct.DependPackages = ["Building"];
            return CinemaScreenStruct;
        }(fairygui.GComponent));
        Building.CinemaScreenStruct = CinemaScreenStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CinemaScreenStruct.js.map