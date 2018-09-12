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
        var WarFilmLiuxingStruct = /** @class */ (function (_super) {
            __extends(WarFilmLiuxingStruct, _super);
            function WarFilmLiuxingStruct() {
                return _super.call(this) || this;
            }
            WarFilmLiuxingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmLiuxing"));
            };
            WarFilmLiuxingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_title2 = (this.getChild("title2"));
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_tip = (this.getChild("tip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarFilmLiuxingStruct.URL = "ui://y6ozucp1qbxl9v";
            WarFilmLiuxingStruct.DependPackages = ["WarMovie", "Fx"];
            return WarFilmLiuxingStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmLiuxingStruct = WarFilmLiuxingStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmLiuxingStruct.js.map