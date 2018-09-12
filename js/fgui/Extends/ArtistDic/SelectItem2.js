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
        var SelectItem2 = /** @class */ (function (_super) {
            __extends(SelectItem2, _super);
            function SelectItem2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectItem2.prototype.setData = function (protId) {
                this.m_icon.icon = Games.WarLoadPic.getActorTypeIcon(protId);
            };
            return SelectItem2;
        }(ArtistDic.SelectItem2Struct));
        ArtistDic.SelectItem2 = SelectItem2;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectItem2.js.map