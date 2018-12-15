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
        var WarFilmSelectingStruct = /** @class */ (function (_super) {
            __extends(WarFilmSelectingStruct, _super);
            function WarFilmSelectingStruct() {
                return _super.call(this) || this;
            }
            WarFilmSelectingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmSelecting"));
            };
            WarFilmSelectingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmItemList = (this.getChild("filmItemList"));
                this.m_marketTip1 = (this.getChild("marketTip1"));
                this.m_marketTip2 = (this.getChild("marketTip2"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_sliver = (this.getChild("sliver"));
                this.m_licence = (this.getChild("licence"));
                this.m_men = (this.getChild("men"));
                this.m_women = (this.getChild("women"));
                this.m_child = (this.getChild("child"));
                this.m_refrush = (this.getChild("refrush"));
            };
            WarFilmSelectingStruct.URL = "ui://y6ozucp1r0zd50";
            WarFilmSelectingStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmSelectingStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmSelectingStruct = WarFilmSelectingStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmSelectingStruct.js.map