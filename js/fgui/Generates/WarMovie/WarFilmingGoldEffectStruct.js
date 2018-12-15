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
        var WarFilmingGoldEffectStruct = /** @class */ (function (_super) {
            __extends(WarFilmingGoldEffectStruct, _super);
            function WarFilmingGoldEffectStruct() {
                return _super.call(this) || this;
            }
            WarFilmingGoldEffectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFilmingGoldEffect"));
            };
            WarFilmingGoldEffectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_attIcon1 = (this.getChild("attIcon1"));
                this.m_attIcon2 = (this.getChild("attIcon2"));
                this.m_attText1 = (this.getChild("attText1"));
                this.m_attText2 = (this.getChild("attText2"));
                this.m_dialog = (this.getChild("dialog"));
            };
            WarFilmingGoldEffectStruct.URL = "ui://y6ozucp1r0sqea";
            WarFilmingGoldEffectStruct.DependPackages = ["WarMovie", "Common"];
            return WarFilmingGoldEffectStruct;
        }(fairygui.GComponent));
        WarMovie.WarFilmingGoldEffectStruct = WarFilmingGoldEffectStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingGoldEffectStruct.js.map