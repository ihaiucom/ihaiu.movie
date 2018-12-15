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
        var WarFilmYirenItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmYirenItemStruct, _super);
            function WarFilmYirenItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmYirenItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmYirenItem"));
            };
            WarFilmYirenItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_sex = this.getController("sex");
                this.m_mingzi = (this.getChild("mingzi"));
                this.m_inf = (this.getChild("inf"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmYirenItemStruct.URL = "ui://y6ozucp1r0zd5l";
            WarFilmYirenItemStruct.DependPackages = ["WarMovie"];
            return WarFilmYirenItemStruct;
        }(fairygui.GButton));
        WarMovie.WarFilmYirenItemStruct = WarFilmYirenItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYirenItemStruct.js.map