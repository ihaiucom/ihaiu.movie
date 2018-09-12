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
    var WarMovie;
    (function (WarMovie) {
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
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                // 显示城市切换的关闭按钮
                this.m_closeBtn2.onClick(this, this.onClickCloseBtn2);
                // 确定切换城市
                this.m_okBtn2.onClick(this, this.onClickOkBtn2);
                // 提升关注度按钮
                this.m_promotionBtn.onClick(this, this.onClickUpAttentionBtn);
                this.m_promotionBtn.text = TEXT.promotionBtn;
                this.m_okBtn.onClick(this, this.onGetRewardBtn);
                this.m_nameBtn.onClick(this, this.showFilmInf);
            };
            // 显示电影详情
            WarContinuousIncome.prototype.showFilmInf = function () {
                Game.system.movieInfo(Game.moduleModel.warData.movieDataToShotData(Game.moduleModel.warData.movieDataList[this.indexOf]));
            };
            WarContinuousIncome.prototype.onClickCloseBtn = function () {
                this.visible = false;
            };
            WarContinuousIncome.prototype.setData = function (indexOf, subTime) {
                this.m_ChangeCity.setSelectedIndex(0);
                this.indexOf = indexOf;
                this.curCity = null;
                var curData = Game.moduleModel.warData.movieDataList[indexOf];
                this.m_filmName.text = curData.name;
                var sellIcon = Game.config.movieDrop.getSellIcon(curData.boxOfficeEvaluation);
                this.m_pingjia.icon = Game.config.avatar.getConfig(sellIcon).iconUrl;
                // 提升关注度相关
                this.updateAttentionValue();
                this.onRefrushCity();
                if (subTime <= 0) {
                    this.isOverIncome = true;
                }
                else {
                    this.isOverIncome = false;
                }
                this.updateContinueLastToNow();
                Laya.timer.loop(60000, this, this.updateContinueLastToNow, null, true, true);
                // 当前获得的奖励
                this.m_rewardIcon1.icon = Games.WarLoadPic.getItemIcon(3);
            };
            // 更新收益
            WarContinuousIncome.prototype.updateContinueLastToNow = function (msg) {
                if (Game.moduleModel.warData.movieDataList.length > this.indexOf) {
                    var delFilm = true;
                    if (msg && msg !== null) {
                        // 判断是否已经删除
                        for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                            if (Game.moduleModel.warData.movieDataList[i].uuid === msg.uuid) {
                                delFilm = false;
                                break;
                            }
                        }
                        //
                        if (msg.dropout && msg.dropout !== null && msg.dropout.length > 0) {
                            // 显示掉落物品
                        }
                    }
                    else {
                        delFilm = false;
                    }
                    if (delFilm) {
                        this.visible = false;
                        Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                    }
                    else {
                        var curData = Game.moduleModel.warData.movieDataList[this.indexOf];
                        var lastVal = 0;
                        if (!this.isOverIncome) {
                            if (this.preAttentionVal !== curData.attentionValue) {
                                this.preAttentionVal = curData.attentionValue;
                                this.attentionval = curData.totalBoxOffice / 30 * (curData.attentionValue * 0.1 + 1);
                            }
                            var lastToNow = Math.floor(Game.time.getSubSecondsPre(curData.lastTime) / 60);
                            lastVal = this.attentionval * lastToNow + curData.contineTransceiver;
                        }
                        else {
                            var lastToNow = Math.floor(Game.time.getSubSecondsPre(curData.lastTime) / 60);
                            var startToNow = Math.floor(Game.time.getSubSecondsPre(curData.startTime) / 60);
                            var last2 = 120 - (startToNow - lastToNow);
                            this.attentionval = curData.totalBoxOffice / 30 * (curData.attentionValue * 0.1 + 1);
                            lastVal = this.attentionval * last2 + curData.contineTransceiver;
                        }
                        if (lastVal < 0)
                            lastVal = 0;
                        lastVal = toInt(lastVal.toString());
                        this.m_rewardValue1.text = formatNumberUnit(lastVal, 1);
                    }
                }
                else {
                    if (msg && msg !== null) {
                        if (msg.dropout && msg.dropout !== null && msg.dropout.length > 0) {
                            // 显示掉落物品
                        }
                    }
                    this.visible = false;
                    Game.menu.getMenuCtl(MenuId.Home).moduleWindow.conent.onCreateFilmContinue();
                }
            };
            // 领取收益按钮
            WarContinuousIncome.prototype.onGetRewardBtn = function () {
                var _this = this;
                Game.moduleModel.warData.reqGetRewardMovie(Game.moduleModel.warData.movieDataList[this.indexOf].uuid, function (msg) { _this.updateContinueLastToNow(msg); });
            };
            // 更新关注度
            WarContinuousIncome.prototype.updateAttentionValue = function () {
                var curData = Game.moduleModel.warData.movieDataList[this.indexOf];
                var roomInf = Game.moduleModel.building.getRoomLevel(4);
                this.m_lock.visible = !(roomInf && roomInf > 1);
                this.m_lockTip.text = Game.config.msg.getConfig(MsgKey.movie_city_unlock_tips).notice;
                this.curGZLv = parseInt(curData.attentionValue.toFixed(0));
                this.m_guanzhuduValue.text = format(TEXT.guanzhuduValue, this.curGZLv.toString());
                this.m_guanzhuduProgress.value = curData.attentionProgress;
                var moviePropularizeData = Game.config.moviePopularize.getConfig(this.curGZLv);
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
            };
            // 确定提升关注度
            WarContinuousIncome.prototype.onClickUpAttentionBtn = function () {
                var _this = this;
                if (this.curGZLv >= 20) {
                    Game.system.toastText(TEXT.GZMax);
                }
                else {
                    if (this.tipGetCostItemId > 0) {
                        Game.system.openItemWay(this.tipGetCostItemId, this.tipGetCostNum);
                    }
                    else {
                        Game.moduleModel.warData.reqSpreadMovie(Game.moduleModel.warData.movieDataList[this.indexOf].uuid, function () {
                            _this.updateAttentionValue();
                            _this.onRefrushCity();
                        });
                    }
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
                var curData = Game.moduleModel.warData.movieDataList[this.indexOf];
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
                var val = curData.totalBoxOffice / 30 * (curData.attentionValue * 0.1 + 1);
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
                var val = Game.moduleModel.warData.movieDataList[this.indexOf].totalBoxOffice / 30 * (Game.moduleModel.warData.movieDataList[this.indexOf].attentionValue * 0.1 + 1);
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
                var _this = this;
                Game.moduleModel.warData.reqSwitchCity(Game.moduleModel.warData.movieDataList[this.indexOf].uuid, this.curClickShowCityData.id, function () { _this.onClickCloseBtn2(); });
            };
            return WarContinuousIncome;
        }(WarMovie.WarContinuousIncomeStruct));
        WarMovie.WarContinuousIncome = WarContinuousIncome;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinuousIncome.js.map