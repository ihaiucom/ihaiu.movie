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
        var ArtistItemViewStruct = /** @class */ (function (_super) {
            __extends(ArtistItemViewStruct, _super);
            function ArtistItemViewStruct() {
                return _super.call(this) || this;
            }
            ArtistItemViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistItemView"));
            };
            ArtistItemViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_head = (this.getChild("head"));
                this.m_starList = (this.getChild("starList"));
                this.m_label = (this.getChild("label"));
                this.m_contory = (this.getChild("contory"));
                this.m_level = (this.getChild("level"));
                this.m_icon = (this.getChild("icon"));
                this.m_detailBtn = (this.getChild("detailBtn"));
                this.m_attr1 = (this.getChild("attr1"));
                this.m_attr2 = (this.getChild("attr2"));
                this.m_attr3 = (this.getChild("attr3"));
                this.m_attr4 = (this.getChild("attr4"));
            };
            ArtistItemViewStruct.URL = "ui://s33x8418jazc1m0";
            ArtistItemViewStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistItemViewStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistItemViewStruct = ArtistItemViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistItemViewStruct.js.map