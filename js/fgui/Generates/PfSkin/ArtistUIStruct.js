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
        var ArtistUIStruct = /** @class */ (function (_super) {
            __extends(ArtistUIStruct, _super);
            function ArtistUIStruct() {
                return _super.call(this) || this;
            }
            ArtistUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistUI"));
            };
            ArtistUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_roomContainer = (this.getChild("roomContainer"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_listPanel = (this.getChild("listPanel"));
                this.m_findPanel = (this.getChild("findPanel"));
            };
            ArtistUIStruct.URL = "ui://s33x8418jazc1lf";
            ArtistUIStruct.DependPackages = ["PfSkin", "Common", "WarMovie", "Fx", "Building"];
            return ArtistUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistUIStruct = ArtistUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistUIStruct.js.map