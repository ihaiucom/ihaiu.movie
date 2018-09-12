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
        var FilmSelectItemStruct = /** @class */ (function (_super) {
            __extends(FilmSelectItemStruct, _super);
            function FilmSelectItemStruct() {
                return _super.call(this) || this;
            }
            FilmSelectItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "FilmSelectItem"));
            };
            FilmSelectItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTypeList = (this.getChild("filmTypeList"));
                this.m_filmInf = (this.getChild("filmInf"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_men = (this.getChild("men"));
                this.m_women = (this.getChild("women"));
                this.m_child = (this.getChild("child"));
                this.m_selectBtn = (this.getChild("selectBtn"));
            };
            FilmSelectItemStruct.URL = "ui://y6ozucp1r0zd55";
            FilmSelectItemStruct.DependPackages = ["WarMovie", "Common"];
            return FilmSelectItemStruct;
        }(fairygui.GComponent));
        WarMovie.FilmSelectItemStruct = FilmSelectItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmSelectItemStruct.js.map