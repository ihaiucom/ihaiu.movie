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
    var ArtistDetail;
    (function (ArtistDetail) {
        var ArtistDetailContentStruct = /** @class */ (function (_super) {
            __extends(ArtistDetailContentStruct, _super);
            function ArtistDetailContentStruct() {
                return _super.call(this) || this;
            }
            ArtistDetailContentStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ArtistDetailContent"));
            };
            ArtistDetailContentStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_di = (this.getChild("di"));
            };
            ArtistDetailContentStruct.URL = "ui://gif3gjfsqr3yt1wm";
            ArtistDetailContentStruct.DependPackages = ["ArtistDetail", "PfSkin", "Common"];
            return ArtistDetailContentStruct;
        }(fairygui.GComponent));
        ArtistDetail.ArtistDetailContentStruct = ArtistDetailContentStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDetailContentStruct.js.map