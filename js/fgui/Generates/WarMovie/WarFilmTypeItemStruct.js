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
        var WarFilmTypeItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmTypeItemStruct, _super);
            function WarFilmTypeItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmTypeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmTypeItem"));
            };
            WarFilmTypeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_typeLabel = this.getController("typeLabel");
                this.m_title = (this.getChild("title"));
            };
            WarFilmTypeItemStruct.URL = "ui://y6ozucp1r0zd4z";
            WarFilmTypeItemStruct.DependPackages = ["WarMovie"];
            return WarFilmTypeItemStruct;
        }(fairygui.GLabel));
        WarMovie.WarFilmTypeItemStruct = WarFilmTypeItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmTypeItemStruct.js.map