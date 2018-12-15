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
    var Street;
    (function (Street) {
        var StreetInfoPanel = /** @class */ (function (_super) {
            __extends(StreetInfoPanel, _super);
            function StreetInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetInfoPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_btnConfirm.onClick(this, this.OnBtnConfirmClick);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
                this.m_listReward.itemProvider = new Handler(this, this.GetRewardItemResource, null, false);
                this.m_btnReward.onClick(this, this.OnGetReward);
            };
            StreetInfoPanel.prototype.onWindowOpen = function (arg) {
                this.streetData = arg;
                this.UpdateView();
            };
            StreetInfoPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.rank_GetStreetReward, this.OnGetStreetRewardResponse, this);
            };
            StreetInfoPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.rank_GetStreetReward, this.OnGetStreetRewardResponse, this);
            };
            StreetInfoPanel.prototype.UpdateView = function () {
                this.m_title.text = this.streetData.Name;
                this.m_txtTip2.text = Game.config.msg.getTxtFormat(MsgKey.trophy_tips);
                this.m_txtTip3.text = Game.config.msg.getTxt(MsgKey.trophy_tips2);
                this.m_txtRewardInfo.text = this.streetData.Cfg.nextMsg;
                var rewardList = this.streetData.Cfg.upgrade_reward;
                this.m_listReward.numItems = rewardList.length;
                if (this.streetData.isCurrent) {
                    this.m_isCurrent.setSelectedIndex(1);
                    var nextCfg = Game.config.blockLevel.GetNextSteetCfg(this.streetData.id);
                    this.m_txtTip1.text = nextCfg ? Game.config.msg.getTxtFormat(MsgKey.block_upgrade_requirement, nextCfg.name) : "";
                    this.m_txtStreetInfo.text = this.streetData.Cfg.currentMsg;
                    this.m_progress.value = Game.moduleModel.street.cupNum;
                    this.m_progress.max = Game.moduleModel.street.GetMaxCup(this.streetData.id);
                    this.m_progress.m_title.text = this.m_progress.value + "/" + this.m_progress.max;
                }
                else {
                    this.m_txtTip1.text = Game.config.msg.getTxt(MsgKey.finished_block);
                    this.m_isCurrent.setSelectedIndex(0);
                    this.m_progress.value = 100;
                    this.m_progress.max = 100;
                    this.m_progress.m_title.text = "MAX";
                }
                this.m_canReward.setSelectedIndex(this.streetData.isCurrent && Game.moduleModel.street.canReward ? 1 : 0);
            };
            StreetInfoPanel.prototype.RenderRewardItem = function (index, obj) {
                var data = this.streetData.Cfg.upgrade_reward[index];
                var itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                if (itemData.itemType == 7) {
                    var pact = obj;
                    pact.Render(itemData);
                    // pact.icon = itemData.itemBodyIconUrl;
                    // pact.title = formatNumberUnit(itemData.itemNum);
                    // pact.m_star.starNum = itemData.itemStar;
                }
                else {
                    var item = obj;
                    item.icon = itemData.itemIconUrl;
                    item.m_title.text = formatNumberUnit(itemData.itemNum);
                    item.m_star.starNum = itemData.itemStar;
                    item.PopupInfo = data.itemId;
                }
            };
            StreetInfoPanel.prototype.GetRewardItemResource = function (index) {
                var data = this.streetData.Cfg.upgrade_reward[index];
                var item = Games.ItemData.Create(data.itemId, data.itemNum);
                if (item.itemType == 7) {
                    return fgui.Common.PactIcon_80.URL;
                }
                else {
                    return fgui.Common.CommonItem_70.URL;
                }
            };
            StreetInfoPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            StreetInfoPanel.prototype.OnBtnConfirmClick = function () {
                this.moduleWindow.closeSelf();
            };
            StreetInfoPanel.prototype.OnGetReward = function () {
                Game.protosender.rank.GetStreetReward(0);
            };
            StreetInfoPanel.prototype.OnGetStreetRewardResponse = function () {
                this.UpdateView();
            };
            return StreetInfoPanel;
        }(Street.StreetInfoPanelStruct));
        Street.StreetInfoPanel = StreetInfoPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetInfoPanel.js.map