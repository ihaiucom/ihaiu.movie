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
        var ArtistScoutResultItemStruct = /** @class */ (function (_super) {
            __extends(ArtistScoutResultItemStruct, _super);
            function ArtistScoutResultItemStruct() {
                return _super.call(this) || this;
            }
            ArtistScoutResultItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistScoutResultItem"));
            };
            ArtistScoutResultItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_need = (this.getChild("need"));
                this.m_already = (this.getChild("already"));
                this.m_tAlready = (this.getChild("tAlready"));
                this.m_goBtn = (this.getChild("goBtn"));
                this.m_detailBtn = (this.getChild("detailBtn"));
                this.m_giftBtn = (this.getChild("giftBtn"));
            };
            ArtistScoutResultItemStruct.URL = "ui://s33x8418jazc1m1";
            ArtistScoutResultItemStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistScoutResultItemStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistScoutResultItemStruct = ArtistScoutResultItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutResultItemStruct.js.map