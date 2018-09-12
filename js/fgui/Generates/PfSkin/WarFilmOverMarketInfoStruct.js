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
        var WarFilmOverMarketInfoStruct = /** @class */ (function (_super) {
            __extends(WarFilmOverMarketInfoStruct, _super);
            function WarFilmOverMarketInfoStruct() {
                return _super.call(this) || this;
            }
            WarFilmOverMarketInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmOverMarketInfo"));
            };
            WarFilmOverMarketInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_tipIcon = (this.getChild("tipIcon"));
                this.m_topBg = (this.getChild("topBg"));
                this.m_arrow = (this.getChild("arrow"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_icon1 = (this.getChild("icon1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_pinglun1 = (this.getChild("pinglun1"));
                this.m_pinglun2 = (this.getChild("pinglun2"));
                this.m_pinglun3 = (this.getChild("pinglun3"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarFilmOverMarketInfoStruct.URL = "ui://s33x8418t6ra1ue";
            WarFilmOverMarketInfoStruct.DependPackages = ["PfSkin"];
            return WarFilmOverMarketInfoStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmOverMarketInfoStruct = WarFilmOverMarketInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmOverMarketInfoStruct.js.map