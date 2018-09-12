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
    var Common;
    (function (Common) {
        var MovieInfoItemStruct = /** @class */ (function (_super) {
            __extends(MovieInfoItemStruct, _super);
            function MovieInfoItemStruct() {
                return _super.call(this) || this;
            }
            MovieInfoItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "MovieInfoItem"));
            };
            MovieInfoItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showHelp = this.getController("showHelp");
                this.m_boxOffice = (this.getChild("boxOffice"));
                this.m_icon = (this.getChild("icon"));
            };
            MovieInfoItemStruct.URL = "ui://txcuvopdcvs8d0";
            MovieInfoItemStruct.DependPackages = ["Common"];
            return MovieInfoItemStruct;
        }(fairygui.GButton));
        Common.MovieInfoItemStruct = MovieInfoItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MovieInfoItemStruct.js.map