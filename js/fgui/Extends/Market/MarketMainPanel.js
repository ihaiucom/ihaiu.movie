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
        var MarketMainPanel = /** @class */ (function (_super) {
            __extends(MarketMainPanel, _super);
            function MarketMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MarketMainPanel.prototype.onWindowInited = function () {
                this.m_topAsset.InitView(this, this.OnCloseClick, [2, 3]);
                this.m_topAsset.m_Bg.setSelectedIndex(1);
                this.m_btnCountry.onClick(this, this.ShowCountryList);
                this.m_btnLeft.onClick(this, this.OnBtnLeftClick);
                this.m_btnRight.onClick(this, this.OnBtnRightClick);
                this.InitCityList();
            };
            MarketMainPanel.prototype.onWindowDestory = function () {
                this.m_topAsset.onWindowDestory();
                this.m_btnCountry.onClick(null, null);
            };
            MarketMainPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.city_HoldCity, this.OnOccupyFinish, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.m_topAsset.updateAsset, this.m_topAsset);
                Game.protoOkEvent.add(ProtoEventKey.city_Propaganda, this.OnPublicityFinish, this);
                Game.protoOkEvent.add(ProtoEventKey.CityData, this.OnCityDataUpdate, this);
                this.Open();
            };
            MarketMainPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.city_HoldCity, this.OnOccupyFinish, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.m_topAsset.updateAsset, this.m_topAsset);
                Game.protoOkEvent.remove(ProtoEventKey.city_Propaganda, this.OnPublicityFinish, this);
                Game.protoOkEvent.remove(ProtoEventKey.CityData, this.OnCityDataUpdate, this);
            };
            MarketMainPanel.prototype.Open = function () {
                if (this.countryId == null && Game.moduleModel.market.RedNum) {
                    this.countryId = Game.moduleModel.market.GetHomeCountryId();
                    var homeCity = Game.moduleModel.market.GetHomeCity();
                    if (homeCity != null) {
                        this.selectIndex = homeCity.index;
                    }
                }
                this.UpdateView();
            };
            MarketMainPanel.prototype.UpdateView = function () {
                this.m_topAsset.updateAsset();
                if ((this.countryId == null || this.countryId == 0)) {
                    this.countryId = Game.moduleModel.market.GetLastCountryId();
                }
                this.m_btnLeft.enabled = Game.moduleModel.market.GetPreUnlockCountryId(this.countryId) != null;
                this.m_btnRight.enabled = Game.moduleModel.market.GetNextUnlockCountryId(this.countryId) != null;
                this.cityDatas = Game.moduleModel.market.GetCityList(this.countryId);
                if (this.selectIndex == null || this.selectIndex > this.cityDatas.length || this.selectIndex < 0) {
                    if (this.countryId == Game.moduleModel.market.GetLastCountryId()) {
                        this.selectIndex = this.cityDatas.length - 2;
                    }
                    else if (this.countryId == Game.moduleModel.market.GetHomeCountryId()) {
                        var homeCity = Game.moduleModel.market.GetHomeCity();
                        this.selectIndex = homeCity.index;
                    }
                    else {
                        this.selectIndex = this.cityDatas.length - 1;
                    }
                }
                var cfg = Game.config.country.getConfig(this.countryId);
                var countryProgress = Game.moduleModel.market.GetCountryProgress(this.countryId);
                this.m_txtCountry.text = cfg.number + ". " + cfg.name + " " + (countryProgress < cfg.city_num ? countryProgress + 1 : countryProgress) + "/" + cfg.city_num;
                this.m_list.numItems = this.cityDatas.length;
                this.m_list.refreshVirtualList();
                this.m_list.selectedIndex = this.selectIndex;
                this.m_list.scrollToView(this.selectIndex);
                this.ShowCity();
            };
            MarketMainPanel.prototype.InitCityList = function () {
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.RenderCityListItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnCityItemClick);
                this.m_list.numItems = 0;
            };
            MarketMainPanel.prototype.OnCloseClick = function () {
                this.countryId = null;
                this.selectIndex = null;
                this.moduleWindow.menuClose();
            };
            MarketMainPanel.prototype.OnBtnLeftClick = function () {
                this.OnSelectCountry(Game.moduleModel.market.GetPreUnlockCountryId(this.countryId));
            };
            MarketMainPanel.prototype.OnBtnRightClick = function () {
                this.OnSelectCountry(Game.moduleModel.market.GetNextUnlockCountryId(this.countryId));
            };
            // TODO
            MarketMainPanel.prototype.OnDestory = function () {
                // this.m_cityInfoPanel.OnDestory();
            };
            MarketMainPanel.prototype.OnCityItemClick = function (obj) {
                this.selectIndex = this.m_list.selectedIndex;
                this.ShowCity();
            };
            MarketMainPanel.prototype.RenderCityListItem = function (index, obj) {
                var item = obj;
                var data = this.cityDatas[index];
                item.setPivot(0.5, 0.5);
                item.title = data.name;
                item.m_num.text = data.cfg.city_num.toString();
                item.m_state.setSelectedIndex(data.state == Games.CityStateEnum.Lock ? 0 : 1);
                item.enabled = data.state != Games.CityStateEnum.Lock;
                item.m_isHome.setSelectedIndex(data.isHome ? 1 : 0);
                if (data.isHome) {
                    item.Red = Game.moduleModel.market.RedNum;
                }
                else {
                    item.Red = false;
                }
            };
            MarketMainPanel.prototype.ShowCity = function () {
                var index = this.selectIndex;
                if (index == null || index < 0) {
                    return;
                }
                var data = this.cityDatas[index];
                if (data.state == Games.CityStateEnum.Lock) {
                    return;
                }
                if (data.state == Games.CityStateEnum.hasOccupy) {
                    // TODO 展示城市信息
                    this.ShowCityInfo();
                }
                else {
                    this.ShowOccupyPanel();
                }
            };
            MarketMainPanel.prototype.ShowOccupyPanel = function () {
                this.moduleWindow.openTab(Games.MarketTabEnum.Occupy);
                this.m_occupyPanel.UpdateView();
            };
            MarketMainPanel.prototype.ShowCityInfo = function () {
                this.moduleWindow.openTab(Games.MarketTabEnum.CityInfo);
                var data = this.cityDatas[this.m_list.selectedIndex];
                this.m_cityInfoPanel.Open(data.id);
            };
            // TODO 修改
            MarketMainPanel.prototype.OnPublicityFinish = function () {
                this.UpdateView();
            };
            MarketMainPanel.prototype.OnCityDataUpdate = function () {
                this.UpdateView();
            };
            MarketMainPanel.prototype.OnOccupyFinish = function () {
                var city = Game.moduleModel.market.GetMaxCity();
                if (city) {
                    Game.system.getItemText(city.holdReward, function () {
                        Game.moduleModel.func.checkHoldCity();
                    });
                }
                this.UpdateView();
            };
            MarketMainPanel.prototype.OnSelectCountry = function (countryId) {
                if (countryId != null && countryId != this.countryId) {
                    this.countryId = countryId;
                    this.selectIndex = -1;
                }
                this.UpdateView();
            };
            MarketMainPanel.prototype.ShowCountryList = function () {
                this.moduleWindow.openSubwindowByIndex(Games.MarketSubEnum.CountryList, true);
            };
            Object.defineProperty(MarketMainPanel.prototype, "CurrentCity", {
                get: function () {
                    return this.cityDatas[this.m_list.selectedIndex];
                },
                enumerable: true,
                configurable: true
            });
            return MarketMainPanel;
        }(Market.MarketMainPanelStruct));
        Market.MarketMainPanel = MarketMainPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketMainPanel.js.map