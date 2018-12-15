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
        var ActorAttrItem = /** @class */ (function (_super) {
            __extends(ActorAttrItem, _super);
            function ActorAttrItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorAttrItem.prototype.updateView = function (value, name, iconUrl) {
                this.m_attLabel.text = formatNumberUnit(value);
                this.m_attTitle.text = name;
                this.m_attrIcon.url = iconUrl;
            };
            return ActorAttrItem;
        }(ArtistDetail.ActorAttrItemStruct));
        ArtistDetail.ActorAttrItem = ActorAttrItem;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorAttrItem.js.map