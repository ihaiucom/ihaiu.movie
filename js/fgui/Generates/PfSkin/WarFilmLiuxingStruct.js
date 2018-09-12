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
        var WarFilmLiuxingStruct = /** @class */ (function (_super) {
            __extends(WarFilmLiuxingStruct, _super);
            function WarFilmLiuxingStruct() {
                return _super.call(this) || this;
            }
            WarFilmLiuxingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmLiuxing"));
            };
            WarFilmLiuxingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_bgLight = (this.getChild("bgLight"));
                this.m_xuhua = (this.getChild("xuhua"));
                this.m_xuhua2 = (this.getChild("xuhua2"));
                this.m_shouji2 = (this.getChild("shouji2"));
                this.m_title1 = (this.getChild("title1"));
                this.m_mask1 = (this.getChild("mask1"));
                this.m_icon1 = (this.getChild("icon1"));
                this.m_bglight2 = (this.getChild("bglight2"));
                this.m_xuhua3 = (this.getChild("xuhua3"));
                this.m_xuhua4 = (this.getChild("xuhua4"));
                this.m_dizuo = (this.getChild("dizuo"));
                this.m_kuang = (this.getChild("kuang"));
                this.m_kuang2 = (this.getChild("kuang2"));
                this.m_mask2 = (this.getChild("mask2"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_title2 = (this.getChild("title2"));
                this.m_bglight3 = (this.getChild("bglight3"));
                this.m_xuhua5 = (this.getChild("xuhua5"));
                this.m_baozi = (this.getChild("baozi"));
                this.m_title3 = (this.getChild("title3"));
                this.m_icon3 = (this.getChild("icon3"));
            };
            WarFilmLiuxingStruct.URL = "ui://s33x8418k8js1i1";
            WarFilmLiuxingStruct.DependPackages = ["PfSkin"];
            return WarFilmLiuxingStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmLiuxingStruct = WarFilmLiuxingStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmLiuxingStruct.js.map