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
        var ArtistTagTipStruct = /** @class */ (function (_super) {
            __extends(ArtistTagTipStruct, _super);
            function ArtistTagTipStruct() {
                return _super.call(this) || this;
            }
            ArtistTagTipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistTagTip"));
            };
            ArtistTagTipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ArtistTagTipStruct.URL = "ui://s33x8418gb1ht26y";
            ArtistTagTipStruct.DependPackages = ["PfSkin", "WarMovie"];
            return ArtistTagTipStruct;
        }(fairygui.GLabel));
        PfSkin.ArtistTagTipStruct = ArtistTagTipStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTagTipStruct.js.map