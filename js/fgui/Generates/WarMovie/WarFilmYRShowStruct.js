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
    var WarMovie;
    (function (WarMovie) {
        var WarFilmYRShowStruct = /** @class */ (function (_super) {
            __extends(WarFilmYRShowStruct, _super);
            function WarFilmYRShowStruct() {
                return _super.call(this) || this;
            }
            WarFilmYRShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmYRShow"));
            };
            WarFilmYRShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_actor1 = (this.getChild("actor1"));
                this.m_actor2 = (this.getChild("actor2"));
                this.m_actor3 = (this.getChild("actor3"));
                this.m_actor4 = (this.getChild("actor4"));
                this.m_actor5 = (this.getChild("actor5"));
            };
            WarFilmYRShowStruct.URL = "ui://y6ozucp1qbxl8g";
            WarFilmYRShowStruct.DependPackages = ["WarMovie", "Fx"];
            return WarFilmYRShowStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmYRShowStruct = WarFilmYRShowStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYRShowStruct.js.map