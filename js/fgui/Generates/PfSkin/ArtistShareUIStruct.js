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
        var ArtistShareUIStruct = /** @class */ (function (_super) {
            __extends(ArtistShareUIStruct, _super);
            function ArtistShareUIStruct() {
                return _super.call(this) || this;
            }
            ArtistShareUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistShareUI"));
            };
            ArtistShareUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
                this.m_signActor = (this.getChild("signActor"));
                this.m_share = (this.getChild("share"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_shareBtn = (this.getChild("shareBtn"));
            };
            ArtistShareUIStruct.URL = "ui://s33x8418eb3n1o9";
            ArtistShareUIStruct.DependPackages = ["PfSkin", "Common", "Fx"];
            return ArtistShareUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistShareUIStruct = ArtistShareUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistShareUIStruct.js.map