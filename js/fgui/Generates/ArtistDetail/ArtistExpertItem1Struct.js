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
        var ArtistExpertItem1Struct = /** @class */ (function (_super) {
            __extends(ArtistExpertItem1Struct, _super);
            function ArtistExpertItem1Struct() {
                return _super.call(this) || this;
            }
            ArtistExpertItem1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ArtistExpertItem1"));
            };
            ArtistExpertItem1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_title = (this.getChild("title"));
            };
            ArtistExpertItem1Struct.URL = "ui://gif3gjfsjazc1l4";
            ArtistExpertItem1Struct.DependPackages = ["ArtistDetail", "Common"];
            return ArtistExpertItem1Struct;
        }(fairygui.GComponent));
        ArtistDetail.ArtistExpertItem1Struct = ArtistExpertItem1Struct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistExpertItem1Struct.js.map