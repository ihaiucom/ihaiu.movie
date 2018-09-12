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
        var WarFilmMoveShowStruct = /** @class */ (function (_super) {
            __extends(WarFilmMoveShowStruct, _super);
            function WarFilmMoveShowStruct() {
                return _super.call(this) || this;
            }
            WarFilmMoveShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmMoveShow"));
            };
            WarFilmMoveShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_5 = (this.getChild("5"));
                this.m_mask = (this.getChild("mask"));
                this.m_moveShow = this.getTransition("moveShow");
            };
            WarFilmMoveShowStruct.URL = "ui://y6ozucp1qbxl9b";
            WarFilmMoveShowStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmMoveShowStruct;
        }(fairygui.GButton));
        WarMovie.WarFilmMoveShowStruct = WarFilmMoveShowStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmMoveShowStruct.js.map