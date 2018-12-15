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
        var MarketOccupyPanel = /** @class */ (function (_super) {
            __extends(MarketOccupyPanel, _super);
            function MarketOccupyPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ItemPointList = [];
                _this.NAME_BTNCITYPOINT = "BtnCityPoint";
                _this.CityPointPool = new fairygui.GObjectPool();
                return _this;
            }
            MarketOccupyPanel.prototype.onWindowInited = function () {
                this.m_btnRoadShow.onClick(this, this.OnBtnRoadShowClick);
                this.m_btnZhanling.onClick(this, this.OnBtnOccupyClick);
                this.m_listReward.itemRenderer = new Handler(this, this.RenderRewardItem, null, false);
            };
            MarketOccupyPanel.prototype.onWindowDestory = function () {
                this.m_btnRoadShow.onClick(null, null);
                this.m_btnZhanling.onClick(null, null);
            };
            MarketOccupyPanel.prototype.onWindowShow = function () {
                // Game.protoOkEvent.add(ProtoEventKey.city_Roadshow, this.OnsRoadshow, this);
                this.UpdateView();
            };
            MarketOccupyPanel.prototype.onWindowHide = function () {
                // Game.protoOkEvent.remove(ProtoEventKey.city_Roadshow, this.OnsRoadshow, this);
            };
            MarketOccupyPanel.prototype.UpdateView = function () {
                this.cityData = Game.moduleModel.market.GetLastCity();
                this.pointDatas = Game.moduleModel.market.GetStreetList();
                this.rewardList = Game.config.city.getConfig(this.cityData.id).hold_reward;
                var numItems = this.ItemPointList.length;
                this.m_tipCity.text = Games.TEXT.MarketCityTip;
                for (var index = 0; index < this.pointDatas.length; index++) {
                    var item = this.ItemPointList[index];
                    if (item == undefined) {
                        item = this.CityPointPool.getObject(fgui.Market.BtnCityPoint.URL);
                        item.name = this.NAME_BTNCITYPOINT + index;
                        this.addChild(item);
                        item.setPivot(0.5, 1);
                        item.m_btn.onClick(this, this.OnItemClick);
                        this.ItemPointList[index] = item;
                    }
                    var data = this.pointDatas[index];
                    var maxX = this.m_mapCityPoint.width;
                    var maxY = this.m_mapCityPoint.height;
                    var x = data.pos.x * maxX;
                    var y = data.pos.y * maxY;
                    item.setXY(x, y);
                    item.title = data.name;
                    if (data.state == Games.StreetStateEnum.NotOccupy) {
                        item.m_state.setSelectedIndex(0);
                    }
                    else if (data.state == Games.StreetStateEnum.InOccupy) {
                        item.m_progress.value = data.progress;
                        item.m_state.setSelectedIndex(1);
                        item.m_tranOccupy.play();
                    }
                    else if (data.state == Games.StreetStateEnum.HasOccupy) {
                        item.m_state.setSelectedIndex(2);
                    }
                    else {
                    }
                    item.visible = true;
                }
                for (var index = this.pointDatas.length; index < numItems; index++) {
                    var item = this.ItemPointList[index];
                    this.removeChild(item);
                    this.CityPointPool.returnObject(item);
                }
                this.ItemPointList.splice(this.pointDatas.length);
                if (this.cityData.state == Games.CityStateEnum.InOccupy) {
                    this.m_state.setSelectedIndex(0);
                }
                else if (this.cityData.state == Games.CityStateEnum.FinishPublicity) {
                    this.m_btnRoadShow.enabled = true;
                    this.m_state.setSelectedIndex(1);
                    this.m_btnRoadShow.m_state.setSelectedIndex(0);
                }
                else if (this.cityData.state == Games.CityStateEnum.FinishRoadShow) {
                    this.m_state.setSelectedIndex(2);
                    this.m_btnRoadShow.m_state.setSelectedIndex(1);
                }
                else {
                    this.m_state.setSelectedIndex(0);
                }
                var cost = Game.moduleModel.market.GetRoadShowCost();
                this.m_btnRoadShow.m_labCost.icon = Game.config.item.getItemIcon(3);
                this.m_btnRoadShow.m_labCost.title = formatNumberUnit(cost, cost > 1000 ? 1 : 0);
                this.m_labAniCost.icon = Game.config.item.getItemIcon(3);
                this.m_labAniCost.title = formatNumberUnit(cost, cost > 1000 ? 1 : 0);
                this.m_labAniCost.visible = false;
                this.m_listReward.numItems = this.rewardList.length;
                this.m_cityName.text = this.cityData.name + Games.TEXT.MarketShare;
                this.m_progress.value = Game.moduleModel.market.GetCityProgress();
                this.m_country.url = Game.moduleModel.market.GetCountry(this.cityData.country).flagUrl;
                this.m_btnRoadShow.enabled = true;
            };
            MarketOccupyPanel.prototype.RenderRewardItem = function (index, obj) {
                var item = obj;
                var data = this.rewardList[index];
                item.setPivot(0.5, 0.5);
                item.icon = Game.moduleModel.item.getItem(data.itemId).itemIconUrl;
                item.m_num.text = formatNumberUnit(data.itemNum, data.itemNum > 1000 ? 1 : 0);
                item.m_star.starNum = data.itemStar;
                item.PopupInfo = data.itemId;
            };
            MarketOccupyPanel.prototype.OnItemClick = function (evt) {
                var index = Number(fairygui.GObject.cast(evt.currentTarget).name.substr(12));
                var data = this.pointDatas[index];
                if (data.state == Games.StreetStateEnum.InOccupy) {
                    this.moduleWindow.openSubwindowByIndex(Games.MarketSubEnum.Publicity, false, data);
                }
            };
            MarketOccupyPanel.prototype.OnBtnRoadShowClick = function () {
                if (this.cityData.state == Games.CityStateEnum.FinishPublicity) {
                    var cost = Game.moduleModel.market.GetRoadShowCost();
                    if (Game.moduleModel.item.hasItemNum(3, cost)) {
                        this.m_btnRoadShow.enabled = false;
                        this.OnsRoadshow();
                        // Game.protosender.city.Roadshow("", this.cityData.id, 0);
                    }
                    else {
                        Game.system.openItemWay(3, cost);
                    }
                }
            };
            MarketOccupyPanel.prototype.OnsRoadshow = function () {
                var _this = this;
                // Game.sound.playSound(SoundKey.MM10_PayMent);
                this.m_btnRoadShow.m_state.setSelectedIndex(2);
                this.m_tCostMove.play(new Handler(this, function () {
                    _this.moduleWindow.openSubwindowByIndex(Games.MarketSubEnum.RoadShow);
                }));
            };
            MarketOccupyPanel.prototype.OnBtnOccupyClick = function () {
                Game.protosender.city.HoldCity();
            };
            Object.defineProperty(MarketOccupyPanel.prototype, "CurrentStreetBtn", {
                get: function () {
                    var currentStreet = Game.moduleModel.market.GetLastStreet();
                    for (var index = 0; index < this.pointDatas.length; index++) {
                        var pointData = this.pointDatas[index];
                        if (pointData.id == currentStreet.id) {
                            return this.ItemPointList[index];
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            MarketOccupyPanel.prototype.guideGetCityPointBtn = function () {
                for (var index = 0; index < this.pointDatas.length; index++) {
                    var data = this.pointDatas[index];
                    if (data.state == Games.StreetStateEnum.InOccupy) {
                        return this.ItemPointList[index];
                    }
                }
            };
            return MarketOccupyPanel;
        }(Market.MarketOccupyPanelStruct));
        Market.MarketOccupyPanel = MarketOccupyPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketOccupyPanel.js.map