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
        var ArtistForzenUIStruct = /** @class */ (function (_super) {
            __extends(ArtistForzenUIStruct, _super);
            function ArtistForzenUIStruct() {
                return _super.call(this) || this;
            }
            ArtistForzenUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistForzenUI"));
            };
            ArtistForzenUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_xuecang = (this.getChild("xuecang"));
                this.m_artName = (this.getChild("artName"));
                this.m_descLabel = (this.getChild("descLabel"));
                this.m_artlist = (this.getChild("artlist"));
                this.m_canLabel = (this.getChild("canLabel"));
                this.m_noTip = (this.getChild("noTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            ArtistForzenUIStruct.URL = "ui://s33x8418jazc1l7";
            ArtistForzenUIStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistForzenUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistForzenUIStruct = ArtistForzenUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistForzenUIStruct.js.map