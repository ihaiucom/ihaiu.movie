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
        var ArtistExpertPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistExpertPanelStruct, _super);
            function ArtistExpertPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistExpertPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistExpertPanel"));
            };
            ArtistExpertPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            ArtistExpertPanelStruct.URL = "ui://s33x8418jazc1l6";
            ArtistExpertPanelStruct.DependPackages = ["PfSkin"];
            return ArtistExpertPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistExpertPanelStruct = ArtistExpertPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistExpertPanelStruct.js.map