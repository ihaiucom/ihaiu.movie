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
        var ActorAttrItemStruct = /** @class */ (function (_super) {
            __extends(ActorAttrItemStruct, _super);
            function ActorAttrItemStruct() {
                return _super.call(this) || this;
            }
            ActorAttrItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDetail", "ActorAttrItem"));
            };
            ActorAttrItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_attrIcon = (this.getChild("attrIcon"));
                this.m_attTitle = (this.getChild("attTitle"));
                this.m_attLabel = (this.getChild("attLabel"));
            };
            ActorAttrItemStruct.URL = "ui://gif3gjfsjd830";
            ActorAttrItemStruct.DependPackages = ["ArtistDetail", "Common"];
            return ActorAttrItemStruct;
        }(fairygui.GComponent));
        ArtistDetail.ActorAttrItemStruct = ActorAttrItemStruct;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorAttrItemStruct.js.map