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
        var ArtistTrainItem1Struct = /** @class */ (function (_super) {
            __extends(ArtistTrainItem1Struct, _super);
            function ArtistTrainItem1Struct() {
                return _super.call(this) || this;
            }
            ArtistTrainItem1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTrainItem1"));
            };
            ArtistTrainItem1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_starList = (this.getChild("starList"));
                this.m_name = (this.getChild("name"));
                this.m_level = (this.getChild("level"));
                this.m_expBar = (this.getChild("expBar"));
            };
            ArtistTrainItem1Struct.URL = "ui://s33x8418jazc1m6";
            ArtistTrainItem1Struct.DependPackages = ["PfSkin", "Common"];
            return ArtistTrainItem1Struct;
        }(fairygui.GButton));
        PfSkin.ArtistTrainItem1Struct = ArtistTrainItem1Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem1Struct.js.map