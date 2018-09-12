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
        var ArtistScoutSuccessUIStruct = /** @class */ (function (_super) {
            __extends(ArtistScoutSuccessUIStruct, _super);
            function ArtistScoutSuccessUIStruct() {
                return _super.call(this) || this;
            }
            ArtistScoutSuccessUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistScoutSuccessUI"));
            };
            ArtistScoutSuccessUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible = this.getController("c_visible");
                this.m_icon = (this.getChild("icon"));
                this.m_starList = (this.getChild("starList"));
                this.m_nameGroup = (this.getChild("nameGroup"));
                this.m_content = (this.getChild("content"));
                this.m_firstGroup = (this.getChild("firstGroup"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_secGroup = (this.getChild("secGroup"));
                this.m_name = (this.getChild("name"));
                this.m_desc1 = (this.getChild("desc1"));
                this.m_desc2 = (this.getChild("desc2"));
                this.m_confirmBtn = (this.getChild("confirmBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_randomBtn = (this.getChild("randomBtn"));
            };
            ArtistScoutSuccessUIStruct.URL = "ui://s33x8418jazc1la";
            ArtistScoutSuccessUIStruct.DependPackages = ["PfSkin", "Fx", "Common"];
            return ArtistScoutSuccessUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistScoutSuccessUIStruct = ArtistScoutSuccessUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutSuccessUIStruct.js.map