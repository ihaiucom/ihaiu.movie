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
        var HomeRankItem = /** @class */ (function (_super) {
            __extends(HomeRankItem, _super);
            function HomeRankItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            HomeRankItem.prototype.setInfo = function (info) {
                this.m_title.text = info.title;
                if (info.value === undefined) {
                    this.m_value.text = "";
                }
                else {
                    if (isNumber(info.value)) {
                        this.m_value.text = formatNumberUnit(info.value);
                    }
                    else {
                        this.m_value.text = info.value.toString();
                    }
                }
                if (info.nameTitle) {
                    this.m_nameTitle.text = info.nameTitle.toString();
                }
                else {
                    this.m_nameTitle.text = "";
                }
                //loaderIcon
                if (info.iconId && info.iconId > 0) {
                    this.m_iconLoader.url = Game.config.avatar.GetIconUrl(info.iconId);
                    this.m_iconLoader.width = 73;
                }
                else {
                    this.m_iconLoader.url = "";
                    this.m_iconLoader.width = 0;
                }
            };
            return HomeRankItem;
        }(PlayerInfo.HomeRankItemStruct));
        PlayerInfo.HomeRankItem = HomeRankItem;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=HomeRankItem.js.map