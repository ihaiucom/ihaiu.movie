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
    var PlayerInfo;
    (function (PlayerInfo) {
        var PlayerInfoAwardItem = /** @class */ (function (_super) {
            __extends(PlayerInfoAwardItem, _super);
            function PlayerInfoAwardItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PlayerInfoAwardItem.prototype.setInfo = function (info) {
                this.m_icon.url = ItemHelper.getItemIcon(info.itemId);
                this.m_num.text = info.itemNumTxt;
            };
            return PlayerInfoAwardItem;
        }(PlayerInfo.PlayerInfoAwardItemStruct));
        PlayerInfo.PlayerInfoAwardItem = PlayerInfoAwardItem;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PlayerInfoAwardItem.js.map