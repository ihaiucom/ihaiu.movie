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
        var StreetRewardView = /** @class */ (function (_super) {
            __extends(StreetRewardView, _super);
            function StreetRewardView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetRewardView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
                this.m_listReward.itemProvider = new Handler(this, this.GetRewardItemResource, null, false);
            };
            StreetRewardView.prototype.Render = function (data) {
                this.streetData = data;
                var menuList = this.streetData.Cfg.UpgradeMenu;
                if (menuList && menuList.length > 0) {
                    this.m_state.setSelectedIndex(1);
                    this.m_listReward.numItems = menuList.length;
                }
                else {
                    this.m_state.setSelectedIndex(0);
                    var rewardList = this.streetData.Cfg.upgrade_reward;
                    this.m_listReward.numItems = rewardList.length > 2 ? 2 : rewardList.length;
                }
            };
            StreetRewardView.prototype.RenderRewardItem = function (index, obj) {
                if (this.m_state.selectedIndex == 0) {
                    var data = this.streetData.Cfg.upgrade_reward[index];
                    if (data == null) {
                        return;
                    }
                    var itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                    if (itemData.itemType == 7) {
                        var pact = obj;
                        pact.Render(itemData);
                    }
                    else {
                        var item = obj;
                        item.icon = itemData.itemIconUrl;
                        item.title = itemData.itemNumTxt;
                        item.m_star.starNum = itemData.itemStar;
                        item.PopupInfo = itemData.itemId;
                    }
                }
                else {
                    var data = this.streetData.Cfg.UpgradeMenu[index];
                    if (data == null) {
                        return;
                    }
                    var menuItem = obj;
                    var cfg = Game.config.menu.getConfig(data);
                    if (cfg) {
                        menuItem.icon = cfg.iconUrl;
                        menuItem.title = cfg.name;
                    }
                    else {
                        menuItem.icon = "";
                        menuItem.title = "";
                    }
                }
            };
            StreetRewardView.prototype.GetRewardItemResource = function (index) {
                if (this.m_state.selectedIndex == 0) {
                    var data = this.streetData.Cfg.upgrade_reward[index];
                    if (data == null) {
                        return fgui.Common.CommonAssetItem_little.URL;
                    }
                    var item = Games.ItemData.Create(data.itemId, data.itemNum);
                    if (item.itemType == 7) {
                        return fgui.Common.PactIcon_44.URL;
                    }
                    else {
                        return fgui.Common.CommonAssetItem_little.URL;
                    }
                }
                else {
                    return fgui.Street.MenuIcon.URL;
                }
            };
            return StreetRewardView;
        }(Street.StreetRewardViewStruct));
        Street.StreetRewardView = StreetRewardView;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetRewardView.js.map