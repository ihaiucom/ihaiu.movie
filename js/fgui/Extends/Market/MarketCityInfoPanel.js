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
    var Market;
    (function (Market) {
        var MarketCityInfoPanel = /** @class */ (function (_super) {
            __extends(MarketCityInfoPanel, _super);
            function MarketCityInfoPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.NAME_ITEMDISPATCH = "DispatchItem";
                return _this;
            }
            MarketCityInfoPanel.prototype.onWindowInited = function () {
                this.m_btnGet.onClick(this, this.OnBtnGetclick);
                this.tick = Game.tick.AddTick(5, -1, Handler.create(this, this.UpdateAddAsset, null, false), null);
                // this.m_marquee.onWindowInited();
                this.InitDispatch();
                this.InitAssetSpeed();
                this.InitAssets();
                this.InitRewards();
            };
            MarketCityInfoPanel.prototype.onWindowDestory = function () {
                // this.m_marquee.onWindowDestory();
                Game.tick.ClearTick(this.tick);
                this.m_btnGet.onClick(null, null);
            };
            MarketCityInfoPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.city_GetReward, this.OnGetRewardResponse, this);
                Game.protoOkEvent.add(ProtoEventKey.city_SetAmbassador, this.OnsSetAmbassador, this);
            };
            MarketCityInfoPanel.prototype.onWindowHide = function () {
                this.m_marquee.Hide();
                this.HideHome();
                Game.protoOkEvent.remove(ProtoEventKey.city_GetReward, this.OnGetRewardResponse, this);
                Game.protoOkEvent.remove(ProtoEventKey.city_SetAmbassador, this.OnsSetAmbassador, this);
            };
            MarketCityInfoPanel.prototype.Open = function (cityId) {
                var _this = this;
                this.cityId = cityId;
                this.UpdateView();
                setTimeout(function () {
                    _this.m_marquee.AddNewContent();
                }, 3000);
            };
            MarketCityInfoPanel.prototype.UpdateView = function () {
                this.cityData = Game.moduleModel.market.GetCity(this.cityId);
                this.m_isHome.setSelectedIndex(this.cityData.isHome ? 1 : 0);
                this.dispatchList = this.cityData.isHome ? Game.moduleModel.market.GetAmbassador() : null;
                this.m_listActor.numItems = 5;
                this.cityRewardList = Game.moduleModel.market.GetCityReward(this.cityData.id);
                this.m_listReward.numItems = this.cityRewardList.length;
                this.m_cityName.text = this.cityData.num + "." + this.cityData.name;
                this.m_isHome.setSelectedIndex(this.cityData.isHome ? 1 : 0);
                if (this.cityData.isHome) {
                    this.m_listAssetSpeed.numItems = 2;
                    this.m_listAsset.numItems = 2;
                    this.SetRed(Game.moduleModel.market.RedNum);
                    this.m_btnGet.enabled = Game.time.getSubSecondsPre(Game.moduleModel.market.Info.lastDropTimestamp) >= 1;
                    var msg = Games.TEXT.MarketMaxAsset.format(Game.moduleModel.market.GoldLimitTime.toFixed(1));
                    this.ShowHome();
                    this.m_marquee.UpdateView([msg, msg], 20);
                }
                else {
                    this.m_listAssetSpeed.numItems = 0;
                    this.m_listAsset.numItems = 0;
                    this.SetRed(false);
                    this.HideHome();
                    this.m_btnGet.enabled = false;
                }
            };
            MarketCityInfoPanel.prototype.SetRed = function (isShow) {
                this.m_red.visible = isShow;
                this.m_red.m_num.text = "";
            };
            MarketCityInfoPanel.prototype.UpdateAddAsset = function () {
                if (this.cityData && this.cityData.isHome) {
                    this.m_btnGet.enabled = Game.time.getSubSecondsPre(Game.moduleModel.market.Info.lastDropTimestamp) >= 1;
                    if (Game.moduleModel.market.GetCurGold() + Game.moduleModel.market.GetCityGoldSpeed() * 5 >= Game.moduleModel.market.GoldLimit) {
                        this.UpdateAsset();
                        return;
                    }
                    this.AddAssetAnim();
                }
            };
            MarketCityInfoPanel.prototype.AddAssetAnim = function () {
                var _this = this;
                // this.m_trAddAsset.play(new Handler(this, this.UpdateAsset, null, false));
                var startPos;
                var endPos;
                var startItem;
                var endItem;
                startPos = new Point(this.width / 2, this.height / 2 - 100);
                endItem = this.m_listAsset.getChildAt(0);
                endPos = this.m_listAsset.localToGlobal(endItem.x, endItem.y);
                endPos = this.globalToLocal(endPos.x, endPos.y);
                endPos.x = endPos.x + 50;
                FguiHelper.startTrailSingle(2, startPos, endPos, 1000, this);
                endItem = this.m_listAsset.getChildAt(1);
                endPos = this.m_listAsset.localToGlobal(endItem.x, endItem.y);
                endPos = this.globalToLocal(endPos.x, endPos.y);
                endPos.x = endPos.x + 50;
                FguiHelper.startTrailSingle(5, startPos, endPos, 1000, this);
                setTimeout(function () {
                    _this.UpdateAsset();
                }, 1000);
            };
            MarketCityInfoPanel.prototype.UpdateAsset = function () {
                if (this.cityData.isHome) {
                    this.m_listAsset.numItems = 2;
                }
                else {
                    this.m_listAsset.numItems = 0;
                }
            };
            MarketCityInfoPanel.prototype.InitDispatch = function () {
                this.m_listActor.itemRenderer = Handler.create(this, this.RenderDispatchList, null, false);
                this.m_listActor.on(fairygui.Events.CLICK_ITEM, this, this.OnDispatchClick);
            };
            MarketCityInfoPanel.prototype.RenderDispatchList = function (index, obj) {
                var item = obj;
                item.name = this.NAME_ITEMDISPATCH + index;
                if (this.cityData == null) {
                    return;
                }
                item.setPivot(0.5, 0.5);
                if (index == 4) {
                    if (!Game.moduleModel.market.IsUnlockFiveActor) {
                        item.m_state.setSelectedIndex(0);
                        return;
                    }
                }
                if (this.dispatchList == null) {
                    item.m_state.setSelectedIndex(1);
                    return;
                }
                var id = this.dispatchList[index];
                if (id == null || id == 0) {
                    item.m_state.setSelectedIndex(1);
                    return;
                }
                var data = Game.config.actor.getConfig(id);
                item.m_state.setSelectedIndex(2);
                item.icon = Game.moduleModel.market.GetActorIcon(id);
            };
            MarketCityInfoPanel.prototype.OnDispatchClick = function (obj) {
                var _this = this;
                var item = obj;
                if (item.m_state.selectedIndex == 0) {
                    Game.system.toastFormatText(Games.TEXT.MarketHomeActorLock, Game.moduleModel.street.CityEnvoyMaxStreet);
                    return;
                }
                if (this.cityData.isHome == false) {
                    Game.system.confirmText(Games.TEXT.MarketChangeHomeContent, Games.TEXT.MarketChangeHomeTitle, this, function () { _this.OnDispatch(item); });
                    return;
                }
                this.OnDispatch(item);
            };
            MarketCityInfoPanel.prototype.OnDispatch = function (item) {
                var _this = this;
                // if (item.m_state.selectedIndex == 0) {
                // 	return;
                // }
                var itemIndex = parseInt(item.name.substr(this.NAME_ITEMDISPATCH.length));
                var demandList = Game.moduleModel.market.GetCityDemand(this.cityData.id, itemIndex);
                var dispatch = this.cityData.isHome ? Game.moduleModel.market.GetAmbassador() : [];
                this.moduleWindow.openSubwindowByIndex(Games.MarketSubEnum.SelectActor, true, function (actor, tweenRect) {
                    _this.OnSelect(itemIndex, actor, tweenRect);
                }, demandList, dispatch, Games.TEXT.MarketSelectActorForCity.format(this.cityData.numName));
            };
            MarketCityInfoPanel.prototype.InitAssetSpeed = function () {
                this.m_listAssetSpeed.itemRenderer = Handler.create(this, this.RenderAssetSpeedList, null, false);
                // list.numItems = this.cityData.cityAsset.length;
            };
            MarketCityInfoPanel.prototype.RenderAssetSpeedList = function (index, obj) {
                var item = obj;
                // var data: CityAsset = this.cityData.cityAsset[index];
                item.setPivot(0.5, 0.5);
                var speed = 0;
                if (index == 0) {
                    speed = Math.floor(Game.moduleModel.market.GetCityGoldSpeed() * 3600);
                    item.icon = Game.moduleModel.item.getItem(2).itemIconUrl;
                }
                else {
                    speed = Math.floor(Game.moduleModel.market.GetCityFansSpeed() * 3600);
                    item.icon = Game.moduleModel.item.getItem(5).itemIconUrl;
                }
                var formatStr = "[color=#e3b121]{0}[/color][color=#488fc1]/{1}[/color]";
                item.title = formatStr.format(formatNumberUnit(speed), Games.TEXT.Hour);
            };
            MarketCityInfoPanel.prototype.InitAssets = function () {
                var list = this.m_listAsset;
                list.itemRenderer = Handler.create(this, this.RenderAssetList, null, false);
            };
            MarketCityInfoPanel.prototype.RenderAssetList = function (index, obj) {
                var item = obj;
                item.setPivot(0.5, 0.5);
                var count = 0;
                var limit = 0;
                var valueTxt = "";
                if (index == 0) {
                    item.m_icon.url = Game.moduleModel.item.getItem(2).itemIconUrl;
                    count = Game.moduleModel.market.GetCurGold();
                    limit = Game.moduleModel.market.GoldLimit;
                    if (count >= limit) {
                        count = limit;
                        valueTxt = formatArrayNumberUnit("[color=#e02f2b]{0}[/color][color=#e3f8ff]/{1}[/color]", count, limit);
                        // item.m_trColor.setSelectedIndex(3);
                    }
                    else {
                        valueTxt = formatArrayNumberUnit("[color=#e3b121]{0}[/color][color=#e3f8ff]/{1}[/color]", count, limit);
                        // item.m_trColor.setSelectedIndex(count >= 10000 ? 1 : 0);
                    }
                }
                else {
                    item.m_icon.url = Game.moduleModel.item.getItem(5).itemIconUrl;
                    count = Game.moduleModel.market.GetCurFans();
                    limit = Game.moduleModel.market.FansLimit;
                    if (count >= limit) {
                        count = limit;
                        valueTxt = formatArrayNumberUnit("[color=#e02f2b]{0}[/color][color=#e3f8ff]/{1}[/color]", count, limit);
                        // item.m_trColor.setSelectedIndex(3);
                    }
                    else {
                        valueTxt = formatArrayNumberUnit("[color=#e3b121]{0}[/color][color=#e3f8ff]/{1}[/color]", count, limit);
                        // item.m_trColor.setSelectedIndex(count >= 10000 ? 1 : 0);
                    }
                }
                item.title = valueTxt;
                ;
            };
            MarketCityInfoPanel.prototype.InitRewards = function () {
                var list = this.m_listReward;
                list.itemRenderer = Handler.create(this, this.RenderRewardList, null, false);
                list.on(fairygui.Events.CLICK_ITEM, this, this.OnRewardItemClick);
            };
            MarketCityInfoPanel.prototype.RenderRewardList = function (index, obj) {
                var viewItem = obj;
                var itemId = this.cityRewardList[index];
                viewItem.name = index.toString();
                viewItem.icon = Game.config.item.getItemIcon(itemId);
                // let itemNum = Game.moduleModel.market.GetCityRewardNum(itemId);
                viewItem.m_num.text = ""; //formatNumberUnit(itemNum);
                viewItem.starNum = Game.config.item.getStarNum(itemId);
                // viewItem.PopupInfo = itemId;
                if (this.cityData.isHome) {
                    viewItem.m_isLock.setSelectedIndex(Game.moduleModel.market.GetAmbassadorNum() > index ? 0 : 1);
                }
                else {
                    viewItem.m_isLock.setSelectedIndex(1);
                }
            };
            MarketCityInfoPanel.prototype.OnRewardItemClick = function (obj) {
                var index = parseInt(obj.name);
                if (index == null) {
                    return;
                }
                var itemId = this.cityRewardList[index];
                if (itemId == null) {
                    return;
                }
                if (this.cityData.isHome && Game.moduleModel.market.GetAmbassadorNum() > index) {
                    Game.system.showItemInfo(obj, itemId);
                }
                else {
                    var title = Games.TEXT.MarketItemLockTitle;
                    var tip = Games.TEXT.MarketItemLockTip.format(index + 1);
                    Game.system.showItemLockTip(obj, tip, title);
                }
            };
            MarketCityInfoPanel.prototype.OnBtnGetclick = function () {
                if (this.cityData.isHome) {
                    Game.protosender.city.GetReward("", this.cityData.id);
                }
            };
            MarketCityInfoPanel.prototype.OnGetRewardResponse = function (resData) {
                // Game.system.getRewardText(this.rewardItems, "获得收益", 4);
                var rewardList = resData.dropout;
                this.OnGetReward(rewardList);
                this.UpdateView();
                this.m_listAsset.numItems = 2;
            };
            MarketCityInfoPanel.prototype.AddRewardAnim = function () {
                var startPos;
                var endPos;
                var startItem;
                var endItem;
                startItem = this.m_listAsset.getChildAt(0);
                startPos = this.m_listAsset.localToGlobal(startItem.x, startItem.y);
                startPos.x = startPos.x + 50;
                endPos = new Point(200, 50);
                FguiHelper.startTrail(2, startPos, endPos, 1000, Games.MenuLayer.dialog);
                startItem = this.m_listAsset.getChildAt(1);
                startPos = this.m_listAsset.localToGlobal(startItem.x, startItem.y);
                startPos.x = startPos.x + 50;
                endPos = this.localToGlobal(this.width / 2, this.height / 2 - 100);
                FguiHelper.startTrail(5, startPos, endPos, 1000, Games.MenuLayer.dialog);
            };
            MarketCityInfoPanel.prototype.OnGetReward = function (rewardList) {
                var addFans = 0;
                for (var index = 0; index < rewardList.length; index++) {
                    var reward = rewardList[index];
                    if (reward.itemId == 5) {
                        addFans = reward.amount;
                    }
                }
                if (addFans > 0) {
                    this.AddRewardAnim();
                    Game.system.addFansText(addFans, null, Games.TEXT.MarketAddFansTip, 3);
                }
            };
            MarketCityInfoPanel.prototype.OnSelect = function (index, actor, tweenRect) {
                if (actor == null) {
                    return;
                }
                this.animSelectActorStruct = { index: index, actor: actor, tweenRect: tweenRect };
                Game.moduleModel.market.SendSetAmbassador("", this.cityData.id, index, actor);
            };
            MarketCityInfoPanel.prototype.OnsSetAmbassador = function (resData) {
                var _this = this;
                var rewardList = resData.dropout;
                this.OnGetReward(rewardList);
                setTimeout(function () {
                    _this.m_marquee.AddNewContent();
                }, 3000);
                if (this.animSelectActorStruct) {
                    var itemIndex = this.animSelectActorStruct.index;
                    var tweenRect = this.animSelectActorStruct.tweenRect;
                    var actorId_1 = this.animSelectActorStruct.actor;
                    var item_1 = this.m_listActor.getChildAt(itemIndex);
                    // this.RenderDispatchList(itemIndex, item)
                    item_1.m_state.setSelectedIndex(1);
                    var icon = item_1.m_icon;
                    // icon.visible = false;
                    var fromRect = this.globalToLocalRect(tweenRect.x, tweenRect.y, tweenRect.width, tweenRect.height);
                    var iconGlobalRect = item_1.localToGlobalRect(icon.x, icon.y, icon.width, icon.height);
                    var toRect = this.globalToLocalRect(iconGlobalRect.x, iconGlobalRect.y, iconGlobalRect.width, iconGlobalRect.height);
                    this.m_tweenIcon.visible = true;
                    this.m_tweenIcon.m_icon.url = Game.moduleModel.market.GetActorIcon(actorId_1);
                    DoTween.TweenRect(this.m_tweenIcon, fromRect, toRect, 300, null, Handler.create(this, function () {
                        item_1.m_state.setSelectedIndex(2);
                        // icon.visible = true;
                        _this.m_tweenIcon.visible = false;
                        //技能触发
                        Game.system.playSkillEffect(actorId_1, Games.SkillTriggerType.city_get_gold_time);
                        Game.system.playSkillEffect(actorId_1, Games.SkillTriggerType.get_gold_speed);
                    }));
                }
                this.animSelectActorStruct = null;
            };
            MarketCityInfoPanel.prototype.ShowHome = function () {
                if (this.cityData.isHome) {
                    this.m_marquee.Show();
                    this.tick.Continue();
                }
                else {
                    this.HideHome();
                }
            };
            MarketCityInfoPanel.prototype.HideHome = function () {
                this.m_marquee.Hide();
                this.tick.Stop();
            };
            return MarketCityInfoPanel;
        }(Market.MarketCityInfoPanelStruct));
        Market.MarketCityInfoPanel = MarketCityInfoPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketCityInfoPanel.js.map