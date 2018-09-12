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
        var WarFilmYRShowStruct = /** @class */ (function (_super) {
            __extends(WarFilmYRShowStruct, _super);
            function WarFilmYRShowStruct() {
                return _super.call(this) || this;
            }
            WarFilmYRShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmYRShow"));
            };
            WarFilmYRShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_yrBg = (this.getChild("yrBg"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_yr1 = (this.getChild("yr1"));
                this.m_yr2 = (this.getChild("yr2"));
                this.m_yr3 = (this.getChild("yr3"));
                this.m_yr4 = (this.getChild("yr4"));
                this.m_yr5 = (this.getChild("yr5"));
                this.m_yr6 = (this.getChild("yr6"));
                this.m_bianUp = (this.getChild("bianUp"));
                this.m_bianDown = (this.getChild("bianDown"));
            };
            WarFilmYRShowStruct.URL = "ui://s33x84186ve81ge";
            WarFilmYRShowStruct.DependPackages = ["PfSkin"];
            return WarFilmYRShowStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmYRShowStruct = WarFilmYRShowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmYRShowStruct.js.map