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
        var WarFilmingYRItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmingYRItemStruct, _super);
            function WarFilmingYRItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmingYRItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmingYRItem"));
            };
            WarFilmingYRItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_tip = (this.getChild("tip"));
                this.m_mingzi = (this.getChild("mingzi"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            WarFilmingYRItemStruct.URL = "ui://y6ozucp1r0zd57";
            WarFilmingYRItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmingYRItemStruct;
        }(fairygui.GLabel));
        WarMovie.WarFilmingYRItemStruct = WarFilmingYRItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingYRItemStruct.js.map