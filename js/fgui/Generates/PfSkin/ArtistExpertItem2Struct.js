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
        var ArtistExpertItem2Struct = /** @class */ (function (_super) {
            __extends(ArtistExpertItem2Struct, _super);
            function ArtistExpertItem2Struct() {
                return _super.call(this) || this;
            }
            ArtistExpertItem2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistExpertItem2"));
            };
            ArtistExpertItem2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_title = (this.getChild("title"));
            };
            ArtistExpertItem2Struct.URL = "ui://s33x8418jazc1l5";
            ArtistExpertItem2Struct.DependPackages = ["PfSkin", "Common"];
            return ArtistExpertItem2Struct;
        }(fairygui.GComponent));
        PfSkin.ArtistExpertItem2Struct = ArtistExpertItem2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistExpertItem2Struct.js.map