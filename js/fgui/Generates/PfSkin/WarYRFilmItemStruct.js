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
        var WarYRFilmItemStruct = /** @class */ (function (_super) {
            __extends(WarYRFilmItemStruct, _super);
            function WarYRFilmItemStruct() {
                return _super.call(this) || this;
            }
            WarYRFilmItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarYRFilmItem"));
            };
            WarYRFilmItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bgXuzuo = (this.getChild("bgXuzuo"));
                this.m_title = (this.getChild("title"));
                this.m_attributeList = (this.getChild("attributeList"));
                this.m_name = (this.getChild("name"));
                this.m_icon = (this.getChild("icon"));
            };
            WarYRFilmItemStruct.URL = "ui://s33x84186ve81gl";
            WarYRFilmItemStruct.DependPackages = ["PfSkin"];
            return WarYRFilmItemStruct;
        }(fairygui.GButton));
        PfSkin.WarYRFilmItemStruct = WarYRFilmItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRFilmItemStruct.js.map