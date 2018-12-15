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
    var WarContinue;
    (function (WarContinue) {
        var WarContinuousIncome = /** @class */ (function (_super) {
            __extends(WarContinuousIncome, _super);
            function WarContinuousIncome() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isOverIncome = false;
                _this.attentionval = -1;
                _this.preAttentionVal = -1;
                _this.tipGetCostItemId = 0;
                _this.tipGetCostNum = 0;
                return _this;
            }
            WarContinuousIncome.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 奖励列表
                this.m_rewardList.itemRenderer = Laya.Handler.create(this, this.initRewardItem, null, false);
                this.m_rewardList2.itemRenderer = Laya.Handler.create(this, this.initRewardItem2, null, false);
                // 城市列表
                this.m_cityList.itemRenderer = Laya.Handler.create(this, this.initCityItem, null, false);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.closeThis);
                // 显示城市切换的关闭按钮
                this.m_closeBtn2.onClick(this, this.onClickCloseBtn2);
                // 确定切换城市
                this.m_okBtn2.onClick(this, this.onClickOkBtn2);
                // 提升关注度按钮
                this.m_promotionBtn.onClick(this, this.onClickUpAttentionBtn);
                this.m_promotionBtn.text = TEXT.promotionBtn;
                this.m_okBtn.onClick(this, this.onGetRewardBtn);
                this.m_okBtn.grayed = true;
                this.m_nameBtn.onClick(this, this.showFilmInf);
            };
            WarContinuousIncome.prototype.onWindowShow = function () {
                this.setData();
                Game.moduleModel.warData.sUpdateEndIncomeTime.add(this.updateEndIncomeTime, this);
                Game.event.add(GameEventKey.GameEventKey_MakeFilmSwitchCity, this.onClickCloseBtn2, this);
                Game.event.add(GameEventKey.GameEventKey_MakeFilmSpreadMovie, this.updateAttentionValue, this);
                Game.event.add(GameEventKey.GameEventKey_MakeFilmGetRewardMovie, this.updateContinueLastToNow, this);
            };
            WarContinuousIncome.prototype.onWindowHide = function () {
                Game.event.remove(GameEventKey.GameEventKey_MakeFilmSwitchCity, this.onClickCloseBtn2, this);
                Game.event.remove(GameEventKey.GameEventKey_MakeFilmSpreadMovie, this.updateAttentionValue, this);
                Game.event.remove(GameEventKey.GameEventKey_MakeFilmGetRewardMovie, this.updateContinueLastToNow, this);
                Game.moduleModel.warData.sUpdateEndIncomeTime.remove(this.updateEndIncomeTime, this);
                Laya.timer.clear(this, this.updateContinueLastToNow);
                Game.moduleModel.warData.curContinuData = null;
            };
            // 显示电影详情
            WarContinuousIncome.prototype.showFilmInf = function () {
                Game.system.movieInfo(Game.moduleModel.warData.movieDataToShotData(this.incomeData.moveData));
            };
            WarContinuousIncome.prototype.closeThis = function () {
                this.moduleWindow.menuBack();
            };
            WarContinuousIncome.prototype.setData = function () {
                this.isOverIncome = false;
                this.incomeData = this.moduleWindow.menuParameter.args[0][0];
                if (!this.incomeData || this.incomeData === null) {
                    console.log("未找到数据 this.incomeData");
                    this.closeThis();
                }
                this.globalConf_Extension_box_office_con = Game.config.global.getConfig(GlobalKey.Extension_box_office_con).value;
                this.globalConf_Extension_con = Game.config.global.getConfig(GlobalKey.Extension_con).value;
                this.m_ChangeCity.setSelectedIndex(0);
                this.curCity = null;
                var curData = this.incomeData.moveData;
                this.m_filmName.text = curData.name;
                Game.moduleModel.warData.curContinuData = this.incomeData;
                var sellIcon = Game.config.movieDrop.getSellIcon(curData.boxOfficeEvaluation);
                this.m_pingjia.icon = Game.config.avatar.getConfig(sellIcon).iconUrl;
                // 提升关注度相关
                this.updateAttentionValue();
                this.updateContinueLastToNow();
                Laya.timer.loop(1000, this, this.updateContinueLastToNow, null, true, true);
                // 当前获得的奖励
                this.m_rewardIcon1.icon = Games.WarLoadPic.getItemIcon(3);
                this.updateEndIncomeTime();
            };
            // 更新收益
            WarContinuousIncome.prototype.updateContinueLastToNow = function (msg) {
                var delFilm = false;
                if (msg && msg !== null) {
                    delFilm = true;
                    // 判断是否已经删除
                    for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                        if (Game.moduleModel.warData.movieDataList[i].uuid === msg.uuid) {
                            delFilm = false;
                            break;
                        }
                    }
                    if (msg.dropout && msg.dropout !== null && msg.dropout.length > 0) {
                        // 显示掉落物品
                        this.onGetRewardItem(msg.dropout);
                    }
                }
                if (!this.isOverIncome) {
                    var lastVal = this.incomeData.incomeValue;
                    this.m_rewardValue1.text = formatNumberUnit(lastVal, 1);
                    if (lastVal > 0) {
                        if (this.m_okBtn.grayed) {
                            this.m_okBtn.grayed = false;
                        }
                    }
                    else {
                        if (!this.m_okBtn.grayed) {
                            this.m_okBtn.grayed = true;
                        }
                    }
                }
                else {
                    if (this.m_okBtn.grayed) {
                        this.m_okBtn.grayed = false;
                    }
                }
                if (delFilm) {
                    this.closeThis();
                    Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                }
            };
            WarContinuousIncome.prototype.onGetRewardItem = function (dropList) {
                if (this.m_ChangeCity.selectedIndex === 2) {
                    var dtList = new Array();
                    for (var ll = 0; ll < dropList.length; ll++) {
                        var dtItem = new DTItemNum();
                        dtItem.itemId = dropList[ll].itemId;
                        dtItem.itemNum = dropList[ll].amount;
                        dtList.push(dtItem);
                    }
                    Game.system.getItemText(dtList, null, false);
                }
            };
            // 领取收益按钮
            WarContinuousIncome.prototype.onGetRewardBtn = function () {
                if (!this.m_okBtn.grayed) {
                    if (!this.m_okBtn.grayed) {
                        this.m_okBtn.grayed = true;
                    }
                    Game.moduleModel.warData.reqGetRewardMovie(this.incomeData.moveData.uuid);
                }
            };
            // 更新关注度
            WarContinuousIncome.prototype.updateAttentionValue = function () {
                var curData = this.incomeData.moveData;
                var roomInf = Game.moduleModel.building.getRoomLevel(4);
                this.m_lock.visible = !(roomInf && roomInf > 1);
                this.m_lockTip.text = Game.config.msg.getConfig(MsgKey.movie_city_unlock_tips).notice;
                this.curGZLv = parseInt(curData.attentionValue.toFixed(0));
                this.m_guanzhuduValue.text = format(TEXT.guanzhuduValue, this.curGZLv.toString());
                this.m_guanzhuduProgress.value = curData.attentionProgress;
                var moviePropularizeData = Game.config.moviePopularize.getConfig(this.curGZLv);
                if (!moviePropularizeData || moviePropularizeData === null) {
                    console.log("未找到数据 moviePropularizeData");
                    this.closeThis();
                }
                this.m_expandCost.text = formatNumberUnit(moviePropularizeData.cost_num);
                this.tipGetCostItemId = Game.config.moviePopularize.getConfig(1).cost_id;
                this.tipGetCostNum = moviePropularizeData.cost_num;
                if (moviePropularizeData.cost_num > Game.moduleModel.item.getItemNum(this.tipGetCostItemId)) {
                    if (this.m_showCostRed.selectedIndex !== 1) {
                        this.m_showCostRed.setSelectedIndex(1);
                    }
                }
                else {
                    if (this.m_showCostRed.selectedIndex !== 0) {
                        this.m_showCostRed.setSelectedIndex(0);
                    }
                    this.tipGetCostItemId = 0;
                }
                this.m_expandIcon.icon = Games.WarLoadPic.getItemIcon(moviePropularizeData.cost_id);
                this.onRefrushCity();
            };
            // 确定提升关注度
            WarContinuousIncome.prototype.onClickUpAttentionBtn = function () {
                if (this.curGZLv >= 20) {
                    Game.system.toastText(TEXT.GZMax);
                }
                else {
                    if (this.tipGetCostItemId > 0) {
                        Game.system.openItemWay(this.tipGetCostItemId, this.tipGetCostNum);
                    }
                    else {
                        Game.moduleModel.warData.reqSpreadMovie(this.incomeData.moveData.uuid);
                    }
                }
            };
            WarContinuousIncome.prototype.updateEndIncomeTime = function () {
                if (this.incomeData.remainingTime <= 0) {
                    this.onIncomeOver();
                }
                else {
                    this.onUpdateTime(this.incomeData.remainingTime);
                }
            };
            // 更新持续收益剩余时间
            WarContinuousIncome.prototype.onUpdateTime = function (val) {
                this.m_incomeTime.text = format(Game.config.msg.getConfig(MsgKey.movie_off_line_remaining_time).notice, Games.TimeHelper.TimeFormat3(val));
            };
            // 收益结束
            WarContinuousIncome.prototype.onIncomeOver = function () {
                this.isOverIncome = true;
                this.m_overTip1.text = TEXT.filmOverTip;
                this.m_overTip.text = Game.config.msg.getConfig(MsgKey.earnings_over).notice;
                this.m_ChangeCity.setSelectedIndex(2);
                if (this.m_okBtn.grayed) {
                    this.m_okBtn.grayed = false;
                }
            };
            // 可获得的奖励 item 赋值
            WarContinuousIncome.prototype.initRewardItem = function (index, obj) {
                var item = obj;
                item.setData(index, this.cityPopConfig, this.curGZLv);
            };
            WarContinuousIncome.prototype.initRewardItem2 = function (index, obj) {
                var item = obj;
                item.setData(index, this.cityPopConfig, this.curGZLv, true);
            };
            WarContinuousIncome.prototype.onRefrushCity = function () {
                var curData = this.incomeData.moveData;
                this.cityList = Game.moduleModel.market.GetMovieCity();
                this.curCity = null;
                var indexOf = 0;
                if (curData.extendCity > 0) {
                    for (var i = 0; i < this.cityList.length; i++) {
                        if (this.cityList[i].id === curData.extendCity) {
                            this.curCity = this.cityList[i];
                            indexOf = i;
                            break;
                        }
                    }
                }
                this.m_cityList.numItems = this.cityList.length;
                this.m_cityList.scrollToView(indexOf, true);
                if (this.curCity !== null) {
                    var popularize_id = this.curCity.cfg.popularize_id;
                    this.cityPopConfig = Game.config.cityPopularize.getConfig(popularize_id);
                    this.m_rewardList.numItems = 5;
                }
                else {
                    this.m_rewardList.numItems = 0;
                }
                var val = curData.totalBoxOffice / (this.globalConf_Extension_box_office_con / 100) * (curData.attentionValue * this.globalConf_Extension_con / 100 + 1) * 60;
                var str = format(Game.config.msg.getConfig(MsgKey.movie_off_line_gain_tips).notice, formatNumberUnit(val));
                this.m_Income.setData(EItemId.dollar, str);
                this.m_tip1.text = TEXT.continueTip;
                var cosId = Game.config.moviePopularize.getConfig(1).cost_id;
                this.m_xuanchuance.setData(cosId, formatNumberUnit(Game.moduleModel.item.getItemNum(cosId)).toString());
            };
            // 占领城市信息
            WarContinuousIncome.prototype.initCityItem = function (index, obj) {
                var _this = this;
                var item = obj;
                item.setData(this.cityList[index], this.curCity, function (arg) { _this.selectCallBack(arg); });
            };
            // 点击某个城市，准备选择
            WarContinuousIncome.prototype.selectCallBack = function (data) {
                this.curClickShowCityData = data;
                this.m_cityName.text = data.name;
                var val = this.incomeData.moveData.totalBoxOffice / (this.globalConf_Extension_box_office_con / 100) * (this.incomeData.moveData.attentionValue * this.globalConf_Extension_con / 100 + 1) * 60;
                var str = format(Game.config.msg.getConfig(MsgKey.movie_off_line_gain_tips).notice, formatNumberUnit(val));
                this.m_Income2.setData(EItemId.dollar, str);
                this.m_tip2.text = TEXT.continueTip;
                var popularize_id = data.cfg.popularize_id;
                this.cityPopConfig = Game.config.cityPopularize.getConfig(popularize_id);
                this.m_rewardList2.numItems = 5;
                if (data.state === Games.CityStateEnum.hasOccupy) {
                    this.m_cantTip.visible = false;
                    this.m_okBtn2.visible = true;
                }
                else {
                    this.m_cantTip.visible = true;
                    this.m_okBtn2.visible = false;
                }
                this.m_ChangeCity.setSelectedIndex(1);
            };
            // 显示城市切换的关闭按钮
            WarContinuousIncome.prototype.onClickCloseBtn2 = function () {
                this.m_ChangeCity.setSelectedIndex(0);
                this.curClickShowCityData = null;
                this.onRefrushCity();
            };
            //  确定切换城市
            WarContinuousIncome.prototype.onClickOkBtn2 = function () {
                Game.moduleModel.warData.reqSwitchCity(this.incomeData.moveData.uuid, this.curClickShowCityData.id);
            };
            WarContinuousIncome.prototype.onWindowResize = function () {
                this.setSize(Games.MenuLayer.root.width, Games.MenuLayer.root.height);
            };
            return WarContinuousIncome;
        }(WarContinue.WarContinuousIncomeStruct));
        WarContinue.WarContinuousIncome = WarContinuousIncome;
    })(WarContinue = fgui.WarContinue || (fgui.WarContinue = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinuousIncome.js.map