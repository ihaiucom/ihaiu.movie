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
        var ArtistForzenItemStruct = /** @class */ (function (_super) {
            __extends(ArtistForzenItemStruct, _super);
            function ArtistForzenItemStruct() {
                return _super.call(this) || this;
            }
            ArtistForzenItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistForzenItem"));
            };
            ArtistForzenItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_country = (this.getChild("country"));
                this.m_sex = (this.getChild("sex"));
                this.m_show = (this.getChild("show"));
                this.m_age = (this.getChild("age"));
                this.m_starlist = (this.getChild("starlist"));
                this.m_name = (this.getChild("name"));
                this.m_level = (this.getChild("level"));
                this.m_attrLabel1 = (this.getChild("attrLabel1"));
                this.m_attrIcon1 = (this.getChild("attrIcon1"));
                this.m_attrLabel2 = (this.getChild("attrLabel2"));
                this.m_attrIcon2 = (this.getChild("attrIcon2"));
                this.m_attrLabel3 = (this.getChild("attrLabel3"));
                this.m_attrIcon3 = (this.getChild("attrIcon3"));
                this.m_attrLabel4 = (this.getChild("attrLabel4"));
                this.m_attrIcon4 = (this.getChild("attrIcon4"));
                this.m_icon = (this.getChild("icon"));
                this.m_aliveBtn2 = (this.getChild("aliveBtn2"));
            };
            ArtistForzenItemStruct.URL = "ui://s33x8418jazc1lz";
            ArtistForzenItemStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistForzenItemStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistForzenItemStruct = ArtistForzenItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistForzenItemStruct.js.map