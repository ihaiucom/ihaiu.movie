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
    var ArtistDic;
    (function (ArtistDic) {
        var SelectItem = /** @class */ (function (_super) {
            __extends(SelectItem, _super);
            function SelectItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectItem.prototype.setData = function (numData) {
                if (numData < 6) {
                    this.m_starNo.setSelectedIndex(1);
                    this.m_title.text = numData.toString();
                }
                else {
                    this.m_starNo.setSelectedIndex(0);
                    this.m_icon.icon = Games.WarLoadPic.getActorTypeIcon(numData);
                }
                this.selected = true;
            };
            return SelectItem;
        }(ArtistDic.SelectItemStruct));
        ArtistDic.SelectItem = SelectItem;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectItem.js.map