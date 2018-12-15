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
        var ArtistExpertPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistExpertPanelStruct, _super);
            function ArtistExpertPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistExpertPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ArtistExpertPanel"));
            };
            ArtistExpertPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            ArtistExpertPanelStruct.URL = "ui://gif3gjfsjazc1l6";
            ArtistExpertPanelStruct.DependPackages = ["ArtistDetail", "Common"];
            return ArtistExpertPanelStruct;
        }(fairygui.GComponent));
        ArtistDetail.ArtistExpertPanelStruct = ArtistExpertPanelStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistExpertPanelStruct.js.map