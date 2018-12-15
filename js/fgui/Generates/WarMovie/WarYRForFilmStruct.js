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
        var WarYRForFilmStruct = /** @class */ (function (_super) {
            __extends(WarYRForFilmStruct, _super);
            function WarYRForFilmStruct() {
                return _super.call(this) || this;
            }
            WarYRForFilmStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarYRForFilm"));
            };
            WarYRForFilmStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_resultList = (this.getChild("resultList"));
                this.m_type = (this.getChild("type"));
                this.m_bubble4 = (this.getChild("bubble4"));
                this.m_bubble6 = (this.getChild("bubble6"));
                this.m_bubble0 = (this.getChild("bubble0"));
                this.m_bubble1 = (this.getChild("bubble1"));
                this.m_bubble3 = (this.getChild("bubble3"));
                this.m_bubble2 = (this.getChild("bubble2"));
                this.m_bubble7 = (this.getChild("bubble7"));
                this.m_bubble5 = (this.getChild("bubble5"));
                this.m_icon = (this.getChild("icon"));
                this.m_skipBtn = (this.getChild("skipBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_t0 = this.getTransition("t0");
            };
            WarYRForFilmStruct.URL = "ui://y6ozucp1r0zd3s";
            WarYRForFilmStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarYRForFilmStruct;
        }(fairygui.GComponent));
        WarMovie.WarYRForFilmStruct = WarYRForFilmStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRForFilmStruct.js.map