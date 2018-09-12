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
    var PfSkin;
    (function (PfSkin) {
        var MovieIconStruct = /** @class */ (function (_super) {
            __extends(MovieIconStruct, _super);
            function MovieIconStruct() {
                return _super.call(this) || this;
            }
            MovieIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "MovieIcon"));
            };
            MovieIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_kuang = (this.getChild("kuang"));
                this.m_icon = (this.getChild("icon"));
            };
            MovieIconStruct.URL = "ui://s33x8418l8141v8";
            MovieIconStruct.DependPackages = ["PfSkin", "Common"];
            return MovieIconStruct;
        }(fairygui.GButton));
        PfSkin.MovieIconStruct = MovieIconStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MovieIconStruct.js.map