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
        var ArtistIcon150Struct = /** @class */ (function (_super) {
            __extends(ArtistIcon150Struct, _super);
            function ArtistIcon150Struct() {
                return _super.call(this) || this;
            }
            ArtistIcon150Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistIcon150"));
            };
            ArtistIcon150Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            ArtistIcon150Struct.URL = "ui://s33x84189wvbt25x";
            ArtistIcon150Struct.DependPackages = ["PfSkin", "Common", "Activity"];
            return ArtistIcon150Struct;
        }(fairygui.GLabel));
        PfSkin.ArtistIcon150Struct = ArtistIcon150Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistIcon150Struct.js.map