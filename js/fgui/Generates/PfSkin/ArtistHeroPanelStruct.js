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
        var ArtistHeroPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistHeroPanelStruct, _super);
            function ArtistHeroPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistHeroPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistHeroPanel"));
            };
            ArtistHeroPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title2 = (this.getChild("title2"));
                this.m_tipLabel1 = (this.getChild("tipLabel1"));
                this.m_tipLabel2 = (this.getChild("tipLabel2"));
                this.m_numLabel = (this.getChild("numLabel"));
            };
            ArtistHeroPanelStruct.URL = "ui://s33x8418jazc1l8";
            ArtistHeroPanelStruct.DependPackages = ["PfSkin"];
            return ArtistHeroPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistHeroPanelStruct = ArtistHeroPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistHeroPanelStruct.js.map