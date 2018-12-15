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
        var FilmDoorPointStruct = /** @class */ (function (_super) {
            __extends(FilmDoorPointStruct, _super);
            function FilmDoorPointStruct() {
                return _super.call(this) || this;
            }
            FilmDoorPointStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "FilmDoorPoint"));
            };
            FilmDoorPointStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            FilmDoorPointStruct.URL = "ui://d062jvkgopnp140";
            FilmDoorPointStruct.DependPackages = ["Building"];
            return FilmDoorPointStruct;
        }(fairygui.GComponent));
        Building.FilmDoorPointStruct = FilmDoorPointStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmDoorPointStruct.js.map