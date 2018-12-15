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
        var ArtistGetUIStruct = /** @class */ (function (_super) {
            __extends(ArtistGetUIStruct, _super);
            function ArtistGetUIStruct() {
                return _super.call(this) || this;
            }
            ArtistGetUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistGetUI"));
            };
            ArtistGetUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_starList = (this.getChild("starList"));
                this.m_name = (this.getChild("name"));
                this.m_tipMsg = (this.getChild("tipMsg"));
                this.m_clickclose = (this.getChild("clickclose"));
                this.m_effect = (this.getChild("effect"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_shareBtn = (this.getChild("shareBtn"));
            };
            ArtistGetUIStruct.URL = "ui://s33x8418eb3n1oa";
            ArtistGetUIStruct.DependPackages = ["PfSkin", "Fx", "Common"];
            return ArtistGetUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistGetUIStruct = ArtistGetUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistGetUIStruct.js.map