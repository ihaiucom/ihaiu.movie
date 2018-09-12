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
        var ArtistAssetItemStruct = /** @class */ (function (_super) {
            __extends(ArtistAssetItemStruct, _super);
            function ArtistAssetItemStruct() {
                return _super.call(this) || this;
            }
            ArtistAssetItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistAssetItem"));
            };
            ArtistAssetItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_starList = (this.getChild("starList"));
                this.m_name = (this.getChild("name"));
                this.m_desc = (this.getChild("desc"));
                this.m_value = (this.getChild("value"));
                this.m_picon = (this.getChild("picon"));
                this.m_unLockGroup = (this.getChild("unLockGroup"));
                this.m_unlock = (this.getChild("unlock"));
                this.m_condition = (this.getChild("condition"));
                this.m_lockGroup = (this.getChild("lockGroup"));
                this.m_sendBtn = (this.getChild("sendBtn"));
                this.m_bar = (this.getChild("bar"));
                this.m_itemView = (this.getChild("itemView"));
            };
            ArtistAssetItemStruct.URL = "ui://s33x8418jazc1ly";
            ArtistAssetItemStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistAssetItemStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistAssetItemStruct = ArtistAssetItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistAssetItemStruct.js.map