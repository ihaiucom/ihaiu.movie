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
var Games;
(function (Games) {
    //======================
    // 战斗 数据模型
    //----------------------
    var WarModel = /** @class */ (function (_super) {
        __extends(WarModel, _super);
        function WarModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sReGetLoginGameData = new Signal();
            _this.curBlockLV = 0;
            _this.refreshTimes = -1;
            _this.sUpdateMediaCall = new TypedSignal();
            // 通告引起的电影期待值
            _this.filmExpectations = new Dictionary();
            // 参加通告的艺人
            _this.filmExpecteActor = new Dictionary();
            // 当前玩家选择的剧本类型
            _this.curFilmType = -1;
            // 类型契合度
            _this.storyShootType = -1;
            _this.theaterId = -1;
            _this.overBattle = 0;
            // 掉落
            _this.dropList = new Array();
            _this.isBattleOverCall = false;
            _this.sUpdateContinue = new Signal();
            _this.curGetStoryGoals = 0;
            // 当前电影使用中的艺人字典
            _this._curYRList = new Dictionary();
            _this.FilmingYRListdic = new Dictionary();
            // 数据是否初始化过了
            _this.filmDataInit = false;
            // 是否隐藏发送电影结算信息
            _this.clientHideFilmOverResult = false;
            _this.filmStatusTick = null;
            _this.isFilmingShangying = false;
            //=====================================================
            // 协议接受数据
            // ========================================
            // 服务器传来的拍摄列表
            _this.movieDataList = new Array();
            _this._movieFilming = false;
            _this.jiesuanName = "";
            /**
             * 用于显示电影详情的配置信息
             */
            _this.filmInfoConfig = null;
            // 未签约院线id        
            _this.emptyCinemalist = [0, 0];
            // 剧本列表
            _this.curStoryList = new Array();
            _this._movieHistogramTime = null;
            // 当前持续收益列表
            _this.endIncomeDic = new Dictionary();
            _this.endIncomeList = new Array();
            // 是否开始update
            _this.endIncomeUpdate = false;
            _this.sUpdateEndIncomeTime = new Signal();
            _this.globalConf_Extension_box_office_con = 0;
            _this.globalConf_Extension_con = 0;
            //====================================================================================
            // 电影持续收益相关数据结束
            //====================================================================================    
            //====================================================================================
            // 以下电影拍摄过程相关
            //====================================================================================
            // 进度条速度
            _this.filmingSpeed = 250;
            _this.warFilmingTSprogerss = new numVal();
            // 是否暂停
            _this.warFilmingTSPause = false;
            /**
             * 自动回复的许可证信息
             */
            _this.licenceAddWithCd = 0;
            _this.preLicenceAddWithCD = 0;
            _this.licenceSubTime = 0;
            _this.sUpdateLicence = new Signal();
            _this.sUpdateLicenceForTime = new Signal();
            _this.isTick = false;
            // 观众情况是否初始化
            _this.haveGuanzhong = false;
            // 观众情况
            _this.guanzhongList = new Array();
            // 最大观众情况
            _this.guanzhongMax = [0, 0, 0];
            // 媒体评价动画回调
            _this.sFeedBackUpdate = new Signal();
            // 观众口碑动画回调
            _this.sAudienceUpdate = new Signal();
            // 属性动画回调
            _this.sProficiencyUpdate = new Signal();
            return _this;
        }
        /**
         * 拍摄请求
         */
        WarModel.prototype.MakeFilm = function () {
            this.curGetStoryGoals = 0;
            this.warFilmingTSprogerss.value = 0;
            this.isBattleOverCall = false;
            Game.moduleModel.warData.filmExpectations.clear();
            Game.moduleModel.warData.filmExpecteActor.clear();
            this.overBattle = 0;
            Game.protosender.movie.MakeFilm();
        };
        /**
         * 拍摄请求返回
         */
        WarModel.prototype.handlerMakeFilm = function () {
            this.initFilmInf();
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilm);
        };
        // 设置电影剧本刷新次数
        WarModel.prototype.setRefrushData = function (msg, reset) {
            if (reset) {
                if (this.storyRefreshData) {
                    this.storyRefreshData.dayTime = 0;
                }
            }
            else {
                this.storyRefreshData = msg;
                if (!Game.time.isLocalTodayTimezone(this.storyRefreshData.lastTime)) {
                    this.storyRefreshData.dayTime = 0;
                }
            }
        };
        Object.defineProperty(WarModel.prototype, "curRefrushTimes", {
            get: function () {
                if (this.curBlockLV !== User.info.stall || this.refreshTimes === -1) {
                    this.curBlockLV = User.info.stall;
                    this.refreshTimes = Game.config.blockLevel.getConfig(this.curBlockLV).story_refresh_times;
                }
                var result = [this.refreshTimes, -1, 0];
                if (this.storyRefreshData) {
                    if (this.refreshTimes > this.storyRefreshData.dayTime) {
                        result[1] = this.storyRefreshData.dayTime;
                        result[2] = this.refreshTimes - this.storyRefreshData.dayTime;
                    }
                }
                else if (this.refreshTimes > 0) {
                    result[1] = 0;
                    result[2] = this.refreshTimes;
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        // 刷新剧本
        WarModel.prototype.refreshMovieStory = function () {
            Game.protosender.movie.RefreshMovieStory(this.moveData.uuid);
        };
        WarModel.prototype.handlerRefreshMovieStory = function () {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilm);
        };
        // 发送修改剧本名称协议
        WarModel.prototype.SendReName = function (newName, currData) {
            Game.protosender.movie.SetMovieName(newName);
        };
        // 修改名称结果返回，进入市场反馈界面
        WarModel.prototype.handleReName = function () {
            this.filmInfoConfig = this.currData;
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmRename);
        };
        /**
        * 设置当前电影的艺人
        * @param index 艺人在第几个位置
        * @param actorId 艺人id
        * @param setActorOver 设置艺人结束的回调函数，等待服务器反馈
        */
        WarModel.prototype.sendSetActor = function (index, actorId) {
            Game.protosender.movie.SetActor(index, actorId);
        };
        /**
         * 设置艺人返回结果
         */
        WarModel.prototype.HandleSetActor = function (msg) {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmSelectActor);
        };
        // 确认艺人全部选择完毕
        WarModel.prototype.ConfirmSetActor = function () {
            Game.protosender.movie.ConfirmSetActor();
        };
        // 确认返回
        WarModel.prototype.HandleConfirmSetActor = function (msg) {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmConfirmSetActor);
        };
        // 通告请求
        WarModel.prototype.AcceptMediaVisit = function (mediaId) {
            Game.protosender.movie.AcceptMediaVisit(mediaId);
        };
        WarModel.prototype.handleAcceptMediaVisit = function (msg) {
            this.sUpdateMediaCall.dispatch(msg.addExpection);
        };
        WarModel.prototype.setSelectType = function (value) {
            this.curFilmType = value;
            Game.protosender.movie.ChoseType(value);
        };
        /**
         * 设置剧本类型返回结果
         */
        WarModel.prototype.HandleSetSelectType = function (msg) {
            this.storyShootType = msg.storyShootType;
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmsetSelectType);
        };
        /**
         * 向服务器发送院线请求
         * @param index
         */
        WarModel.prototype.setPublishMovie = function (index) {
            this.theaterId = index;
            Game.protosender.movie.PublishMovie(index);
        };
        /**
         * 院线返回结果
         * @param msg
         */
        WarModel.prototype.PublishMovie = function (msg) {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmsetPublishMovie);
        };
        /**
         * 上映结束反馈
         * @param msg
         */
        WarModel.prototype.HandlersetBattleOver = function (msg) {
            var _this = this;
            if (this.moveData) {
                var items = format("{0}&{1}&{2}&{3}&{4}&{5}&{6}&{7}", User.info.stall, this.moveData.movieId, this.curGetStoryGoals === this.moveData.movieId ? 1 : 0, this.moveData.mediaCommend, this.moveData.publicPraise, this.moveData.premiereBoxOffice, this.moveData.totalBoxOffice, this.moveData.mExpected);
                Games.Static.Instance.onUserorbit("movie", items, "make");
                var drop = [];
                for (var i = 0; i < msg.dropout.length; i++) {
                    var dropItem = new DTItemNum();
                    dropItem.itemId = msg.dropout[i].itemId;
                    dropItem.itemNum = msg.dropout[i].amount;
                    drop.push(dropItem);
                }
                Games.Static.Instance.onResourceoutput(drop, "movieMake", this.moveData.movieId.toString());
            }
            this.isBattleOverCall = true;
            this.moveData = null;
            if (this.clientHideFilmOverResult) {
                this.moveJieSuanData = null;
                this.sUpdateContinue.dispatch();
                this.isBattleOverCall = false;
            }
            else {
                this.dropList = msg.dropout.sort(function (a, b) { return a.itemId - b.itemId; });
                setTimeout(function () {
                    _this.isBattleOverCall = false;
                    var menuCtl = Game.menu.getMenuCtl(Games.MenuId.War);
                    if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow.contentPane) {
                        var mainUI = menuCtl.moduleWindow.contentPane;
                        mainUI.checkStatus();
                    }
                    else {
                        Game.menu.open(Games.MenuId.War);
                    }
                }, 200);
            }
        };
        // 删除拍摄中的电影
        WarModel.prototype.delFimingMove = function () {
            this.moveData = null;
            this.moveJieSuanData = null;
            this.isBattleOverCall = false;
        };
        /**
         * 更新电影状态
         */
        WarModel.prototype.sendUpdateMovieState = function () {
            Game.protosender.movie.UpdateMovieState(Game.moduleModel.warData.moveData.state);
        };
        /**
         * 电影状态更新完毕
         */
        WarModel.prototype.handleUpdateMovieState = function () {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmUpdateMovieState);
        };
        // 领取剧本目标奖励
        WarModel.prototype.reqGetStoryGoals = function () {
            this.curGetStoryGoals = this.moveData.movieId;
            Game.protosender.movie.GetStoryGoals();
        };
        WarModel.prototype.handlerGetStoryGoals = function () {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmGetStoryGoals);
        };
        // 切换城市
        WarModel.prototype.reqSwitchCity = function (uuid, cityId) {
            Game.protosender.movie.SwitchCity(uuid, cityId);
        };
        WarModel.prototype.handlerSwitchCity = function () {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmSwitchCity);
        };
        // 推广电影
        WarModel.prototype.reqSpreadMovie = function (uuid) {
            Game.protosender.movie.SpreadMovie(uuid);
        };
        WarModel.prototype.handlerSpreadMovie = function () {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmSpreadMovie);
        };
        // 领取收益
        WarModel.prototype.reqGetRewardMovie = function (uuid) {
            Game.protosender.movie.GetRewardMovie(uuid);
        };
        // 领取到的收益列表
        WarModel.prototype.handlerGetRewardMovie = function (msg) {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmGetRewardMovie, msg);
        };
        WarModel.prototype.reqDeleteMovie = function (uuid) {
            Game.protosender.movie.DeleteMovie(uuid);
        };
        WarModel.prototype.handlerDeleteMovie = function (msg) {
            Game.event.dispatch(GameEventKey.GameEventKey_MakeFilmWarEndingIncome);
            this.sUpdateContinue.dispatch();
        };
        Object.defineProperty(WarModel.prototype, "temActor", {
            get: function () {
                if (!this._temActor || this._temActor === null) {
                    this._temActor = new Games.ActorData();
                    this._temActor.setId(9999);
                    this._temActor.name = this._temActor.config.name;
                }
                return this._temActor;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "temActor2", {
            get: function () {
                if (!this._temActor2 || this._temActor2 === null) {
                    this._temActor2 = new Games.ActorData();
                    this._temActor2.setId(9997);
                    this._temActor2.name = this._temActor2.config.name;
                    this._temActor2.level = Game.config.global.getConfig(GlobalKey.story_leader_actor_level).value;
                    this._temActor2.spectacle = this._temActor2.config.spectacle;
                    this._temActor2.perform = this._temActor2.config.perform;
                    this._temActor2.plot = this._temActor2.config.plot;
                    this._temActor2.art = this._temActor2.config.art;
                    this._temActor2.entertainment = this._temActor2.config.entertainment;
                    this._temActor2.shootTypeList = [];
                }
                return this._temActor2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "curYRList", {
            get: function () {
                var curData = this.moveData;
                if (curData === null) {
                    curData = this.moveJieSuanData;
                }
                var actorList = Game.moduleModel.actor.getActors();
                this._curYRList = new Dictionary();
                for (var i = 0; i < curData.data.length; i++) {
                    if (curData.data[i] > 0) {
                        if (curData.data[i] === 9999) {
                            this._curYRList.add(i, this.temActor);
                        }
                        else if (curData.data[i] === 9997) {
                            this._curYRList.add(i, this.temActor2);
                        }
                        else {
                            for (var j = 0; j < actorList.length; j++) {
                                if (actorList[j].id == curData.data[i]) {
                                    this._curYRList.add(i, actorList[j]);
                                }
                            }
                        }
                    }
                }
                return this._curYRList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "getRealYRList", {
            get: function () {
                this.proficiencyForActor = new Dictionary();
                var ryList = new Dictionary();
                var allList = this.curYRList;
                var keys = allList.getKeys();
                for (var i = 0; i < keys.length; i++) {
                    var val = allList.getValue(keys[i]);
                    if (val.id != 9999) {
                        ryList.add(ryList.count, val);
                        this.proficiencyForActor.add(ryList.count, i);
                    }
                }
                return ryList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "filmingYRList", {
            // 拍摄中的艺人列表，外部条件适宜，判断艺人是否在拍摄中
            get: function () {
                if (this.moveData && this.moveData !== null && this.moveData.state >= Proto.SE.EMovieState.costView && this.moveData.state <= Proto.SE.EMovieState.audienceReputation) {
                    return this.getRealYRList;
                }
                return this.FilmingYRListdic;
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.initFilmInf = function () {
            this.filmDataInit = true;
            this.filmingMaxCur = 0;
            this.filmingCurDay = 0;
            this.filmingTotal = 0;
            this.filmingMaxDay = 0;
            this.refrushDataStart = false;
        };
        WarModel.prototype.refrushFilmingStatus = function () {
            if (this.isBattleOverCall) {
                return;
            }
            if (!this.filmStatusTick || this.filmStatusTick === null) {
                this.filmStatusTick = Game.tick.AddTick(this.movieHistogramTime / 1000, -1, Handler.create(this, this.onRefrushFilmingStatus, null, false), null);
            }
            if (!this.isFilmingShangying) {
                this.clientHideFilmOverResult = false;
                var lastTime = Game.time.getSubSecondsAfter(this.moveData.startTime);
                var haveDurDay = 0;
                if (lastTime < 0) {
                    lastTime *= -1;
                    haveDurDay = Math.floor(lastTime / (this.movieHistogramTime / 1000));
                }
                this.filmingMaxCur = 0;
                this.filmingCurDay = 0;
                this.filmingTotal = this.moveData.premiereBoxOffice + this.moveData.extBoxOffice;
                this.filmingMaxDay = this.moveData.runDays.length;
                if (haveDurDay < this.filmingMaxDay) {
                    if (haveDurDay > 2) {
                        this.filmingCurDay = haveDurDay;
                        for (var i = 0; i < this.filmingCurDay; i++) {
                            this.filmingTotal += this.moveData.runDays[i];
                        }
                    }
                    this.filmStatusTick.Restart();
                }
                else {
                    if (180 / (this.movieHistogramTime / 1000) + this.filmingMaxDay < haveDurDay) {
                        this.clientHideFilmOverResult = true;
                    }
                    this.isFilmingShangying = false;
                    this.filmingCurDay = this.filmingMaxDay + 1;
                    // 放映结束
                    var expectnum = 0;
                    if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null) {
                        expectnum = Game.moduleModel.warData.moveData.mExpected;
                    }
                    Game.event.dispatch(GameEventKey.GameEventKey_FilmEnd, expectnum);
                    Game.event.dispatch(GameEventKey.GameEventKey_UpdateFilmingStatus);
                    if (!this.isBattleOverCall) {
                        this.isBattleOverCall = true;
                        Game.protosender.movie.BattleOver();
                    }
                }
            }
        };
        Object.defineProperty(WarModel.prototype, "onCheckHaveDurDay", {
            get: function () {
                if (this.moveData) {
                    var lastTime = Game.time.getSubSecondsAfter(this.moveData.startTime);
                    var haveDurDay = 0;
                    if (lastTime < 0) {
                        lastTime *= -1;
                        haveDurDay = Math.floor(lastTime / (this.movieHistogramTime / 1000));
                    }
                    return haveDurDay < this.filmingMaxDay;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.onRefrushFilmingStatus = function () {
            if (this.filmingCurDay < this.filmingMaxDay) {
                this.isFilmingShangying = true;
                // 统计单日最高票房
                if (this.filmingMaxCur < this.moveData.runDays[this.filmingCurDay]) {
                    this.filmingMaxCur = this.moveData.runDays[this.filmingCurDay];
                }
                if (this.filmingCurDay > 0) {
                    this.filmingTotal += this.moveData.runDays[this.filmingCurDay - 1];
                }
                this.filmingCurDay++;
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateFilmingStatus);
            }
            else {
                this.isFilmingShangying = false;
                this.filmingCurDay = this.filmingMaxDay + 1;
                this.filmStatusTick.Stop();
                // 放映结束
                var expectnum = 0;
                if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null) {
                    expectnum = Game.moduleModel.warData.moveData.mExpected;
                }
                Game.event.dispatch(GameEventKey.GameEventKey_FilmEnd, expectnum);
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateFilmingStatus);
                if (!this.isBattleOverCall) {
                    this.isBattleOverCall = true;
                    Game.protosender.movie.BattleOver();
                }
            }
        };
        Object.defineProperty(WarModel.prototype, "moveData", {
            get: function () {
                return this._movieData;
            },
            set: function (val) {
                this._movieData = val;
                this._movieFilming = val !== null;
                if (val !== null && this._movieData.movieId > 0) {
                    this._moveStory = Game.config.story.getConfig(this._movieData.movieId);
                    this._moveStory.filmName = this._movieData.name;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "moveStory", {
            /**
             * 当前选择的剧本配置表信息(合并服务器协议，更新为用户自定义名称)
             */
            get: function () {
                if (this.moveData === null) {
                    if (this.moveJieSuanData && this.moveJieSuanData !== null && this.moveJieSuanData.movieId > 0) {
                        this._moveStory = Game.config.story.getConfig(this.moveJieSuanData.movieId);
                        this._moveStory.filmName = this.moveJieSuanData.name;
                    }
                }
                return this._moveStory;
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.getListForFilmYR = function (data) {
            // 艺人列表信息
            var actorList = Game.moduleModel.actor.getActors();
            var resList = new Array();
            for (var i = 0; i < actorList.length; i++) {
                // 性别需求
                if (data.sex === 0 || data.sex === actorList[i].config.sex) {
                    // 国籍需求
                    if (data.country === 0 || data.country === actorList[i].config.country) {
                        // 表演类型需求
                        if (data.show_type === 0 || data.show_type === actorList[i].config.show_type) {
                            // 年龄需求
                            if (data.age_type === 0 || data.age_type === actorList[i].config.age_type) {
                                resList.push(actorList[i]);
                            }
                        }
                    }
                }
            }
            return resList;
        };
        // 配置表数据
        // =========================
        WarModel.prototype.cinemaList = function () {
            var result = new Array();
            var allList = Game.config.cinema.getConfigList();
            var serverList = User.info.theaterIds;
            var next1 = 0;
            var next2 = 0;
            for (var i = 0; i < serverList.length; i++) {
                var item = Game.config.cinema.getConfig(serverList[i]);
                if (item && item !== null) {
                    result.push(item);
                    var tem = parseInt((item.id / 1000).toFixed(0)) * 1000;
                    if (next1 < tem) {
                        next1 = tem;
                        next2 = tem + 2000;
                    }
                }
            }
            var result2 = new Array();
            for (var i = 0; i < result.length; i++) {
                var add2 = true;
                for (var j = 0; j < result2.length; j++) {
                    if (result2[j].level === result[i].level) {
                        if (result2[j].id < result[i].id) {
                            result2[j] = result[i];
                        }
                        add2 = false;
                    }
                }
                if (add2) {
                    result2.push(result[i]);
                }
            }
            result2 = result2.sort(function (a, b) { return b.id - a.id; });
            // let next1Conf = Game.config.cinema.getConfig(next1 + 1001);
            // let next1Conf2 = Game.config.cinema.getConfig(next2 + 1);
            // if (next1Conf && next1Conf !== null)
            // {
            //     this.emptyCinemalist[0] = next1Conf.id;
            //     result2.push(next1Conf);
            // }
            // if (next1Conf2 && next1Conf2 !== null)
            // {
            //     this.emptyCinemalist[1] = next1Conf2.id;
            //     result2.push(next1Conf2);
            // }
            return result2;
        };
        Object.defineProperty(WarModel.prototype, "getStoryList", {
            get: function () {
                this.setStoryList();
                return this.curStoryList;
            },
            enumerable: true,
            configurable: true
        });
        // 设置当前可选择剧本列表
        WarModel.prototype.setStoryList = function () {
            var curData = this.moveData;
            if (curData === null) {
                curData = this.moveJieSuanData;
            }
            if (curData.state == EMovieState.chooseScript && curData.data.length > 0) {
                this.curStoryList = new Array();
                for (var i = 0; i < curData.data.length; i++) {
                    var item = Game.config.story.getConfig(curData.data[i]);
                    this.curStoryList.push(item);
                }
            }
        };
        Object.defineProperty(WarModel.prototype, "movieHistogramTime", {
            /**
             * 电影柱状图时间（每根的增长时间/毫秒）
             */
            get: function () {
                if (this._movieHistogramTime || this._movieHistogramTime == null) {
                    this._movieHistogramTime = GlobalConfig.getValue(GlobalKey.Movie_Histogram_Time);
                }
                return this._movieHistogramTime;
            },
            enumerable: true,
            configurable: true
        });
        //====================================================================================
        // 电影持续收益相关数据开始
        //====================================================================================        
        //是否有正在持续收益的电影
        WarModel.prototype.isHasContinueMovie = function () {
            for (var i = 0; i < this.endIncomeList.length; i++) {
                if (this.endIncomeList[i].remainingTime > 0) {
                    return true;
                }
            }
            return false;
        };
        //是否有上映电影
        WarModel.prototype.isHasMovie = function () {
            return this.endingIncome.length > 0;
        };
        // 计算持续收益
        WarModel.prototype.endingIncome = function (uuid) {
            if (uuid) {
                // 删除电影
                this.endIncomeDic.remove(uuid);
                for (var i = 0; i < this.endIncomeList.length; i++) {
                    if (this.endIncomeList[i] && this.endIncomeList[i].uuid === uuid) {
                        this.endIncomeList.splice(i, 1);
                        break;
                    }
                }
                this.endIncomeList = this.endIncomeList.sort(function (a, b) { return a.moveData.startTime - b.moveData.startTime; });
            }
            var datas = Game.moduleModel.warData.movieDataList;
            if (datas.length > 0) {
                for (var i = 0; i < datas.length; i++) {
                    if (!this.endIncomeDic.hasKey(datas[i].uuid)) {
                        var item = new EndIncomeDate();
                        item.index = i;
                        item.uuid = datas[i].uuid;
                        item.moveData = datas[i];
                        item.allTime = 7200 + datas[i].runDays.length * this.movieHistogramTime * 0.001;
                        item.remainingTime = item.allTime - Game.time.getSubSecondsPre(datas[i].startTime);
                        this.endIncomeDic.add(datas[i].uuid, item);
                        this.endIncomeList.push(item);
                    }
                    else {
                        for (var i_1 = 0; i_1 < this.endIncomeList.length; i_1++) {
                            if (this.endIncomeList[i_1] && this.endIncomeList[i_1].uuid === datas[i_1].uuid) {
                                this.endIncomeList[i_1].moveData = datas[i_1];
                            }
                        }
                    }
                }
                this.endIncomeList = this.endIncomeList.sort(function (a, b) { return a.moveData.startTime - b.moveData.startTime; });
                if (!this.endIncomeUpdate) {
                    this.endIncomeUpdate = true;
                    Laya.timer.loop(1000, this, this.onEndIncomeUpdate);
                }
            }
            else {
                if (this.endIncomeUpdate) {
                    this.endIncomeUpdate = false;
                    Laya.timer.clear(this, this.onEndIncomeUpdate);
                }
            }
            this.onEndIncomeUpdate();
        };
        WarModel.prototype.onEndIncomeUpdate = function () {
            if (this.globalConf_Extension_box_office_con === 0 || this.globalConf_Extension_con === 0) {
                this.globalConf_Extension_box_office_con = Game.config.global.getConfig(GlobalKey.Extension_box_office_con).value;
                this.globalConf_Extension_con = Game.config.global.getConfig(GlobalKey.Extension_con).value;
            }
            if (this.endIncomeList.length > 0) {
                for (var i = 0; i < this.endIncomeList.length; i++) {
                    var remain = this.endIncomeList[i].allTime - Game.time.getSubSecondsPre(this.endIncomeList[i].moveData.startTime);
                    this.endIncomeList[i].remainingTime = remain > 0 ? remain : 0;
                    var curData = this.endIncomeList[i].moveData;
                    var attentionval = curData.totalBoxOffice / (this.globalConf_Extension_box_office_con / 100) * (curData.attentionValue * this.globalConf_Extension_con / 100 + 1);
                    var lastToNow = Math.floor(Game.time.getSubSecondsPre(curData.lastTime));
                    var lastVal = 0;
                    if (remain > 0) {
                        lastVal = attentionval * lastToNow + curData.contineTransceiver;
                    }
                    else {
                        var startToNow = Math.floor(Game.time.getSubSecondsPre(this.endIncomeList[i].moveData.startTime));
                        var last2 = 7200 - (startToNow - lastToNow) + this.endIncomeList[i].moveData.runDays.length * Game.moduleModel.warData.movieHistogramTime * 0.001;
                        lastVal = attentionval * last2 + curData.contineTransceiver;
                    }
                    if (lastVal < 0)
                        lastVal = 0;
                    this.endIncomeList[i].incomeValue = lastVal;
                }
            }
            this.sUpdateEndIncomeTime.dispatch();
        };
        // 开始执行
        WarModel.prototype.startWarFilming = function (startVal, isStart) {
            if (isStart === void 0) { isStart = true; }
            if (isStart) {
                if (this.warFilmingTSTween && this.warFilmingTSTween !== null) {
                    this.warFilmingTSTween.clear();
                }
                this.warFilmingTSPause = false;
                if (!this.warFilmingTSprogerss.value || this.warFilmingTSprogerss.value === 0) {
                    this.warFilmingTSprogerss.value = startVal;
                }
                var curDuration = (100 - startVal) * this.filmingSpeed;
                this.warFilmingTSTween = laya.utils.Tween.to(this.warFilmingTSprogerss, { value: 100 }, curDuration, Laya.Ease.linearIn, null, 0, true, true);
            }
            else {
                this.pauseWarFilmingProgress(false);
            }
        };
        // 暂停或继续
        WarModel.prototype.pauseWarFilmingProgress = function (stop) {
            if (stop === void 0) { stop = false; }
            if (stop) {
                if (this.warFilmingTSTween && this.warFilmingTSTween !== null) {
                    this.warFilmingTSTween.pause();
                }
                this.warFilmingTSPause = true;
            }
            else {
                if (this.warFilmingTSTween && this.warFilmingTSTween !== null) {
                    this.warFilmingTSTween.resume();
                }
                this.warFilmingTSPause = false;
            }
        };
        // 结束
        WarModel.prototype.clearWarFilmingProgress = function () {
            if (this.warFilmingTSTween && this.warFilmingTSTween !== null) {
                this.warFilmingTSTween.clear();
            }
        };
        Object.defineProperty(WarModel.prototype, "realLicenceNum", {
            // 主界面使用，拍摄过程中隐藏数量
            get: function () {
                if (!this._movieFilming) {
                    var maxXKZ = Game.config.global.getConfig(GlobalKey.Licence_Store_Max).value;
                    var itemCount = Game.moduleModel.item.getItemNum(Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value);
                    var licenceCount = itemCount + this.preLicenceAddWithCD;
                    if (licenceCount > maxXKZ)
                        licenceCount = maxXKZ;
                    return licenceCount;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "licenceNumInFilming", {
            // 正常数量
            get: function () {
                var maxXKZ = Game.config.global.getConfig(GlobalKey.Licence_Store_Max).value;
                var itemCount = Game.moduleModel.item.getItemNum(Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value);
                var licenceCount = itemCount + this.preLicenceAddWithCD;
                if (licenceCount > maxXKZ)
                    licenceCount = maxXKZ;
                return licenceCount;
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.licenceTimeLeft = function () {
            if (!this.isTick) {
                this.isTick = true;
                Game.tick.AddTick(1, -1, Handler.create(this, this.licenceTick, null, false), null).Start();
            }
        };
        // 10点奥斯卡刷新许可证回复CD
        WarModel.prototype.newlicenceDataRefrush = function () {
            var serverTime22 = new Date(this.licenceData.lastUpdateTime * 1000).setHours(22) / 1000;
            // 上次22点前剩余的时间
            var subTime = serverTime22 - this.licenceData.lastUpdateTime;
            var temLicence = 0;
            if (subTime > 0) {
                if (this.licenceData.cd <= subTime) {
                    // +1
                    if (this.licenceData.dailyCount < Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                        temLicence = 1;
                    }
                    // 配置列表
                    var movieLicenceConfig = Game.config.movieLicence.getConfig(this.licenceData.dailyCount + 2);
                    if (movieLicenceConfig && subTime - this.licenceData.cd > movieLicenceConfig.cool_down) {
                        // +2;
                        if (this.licenceData.dailyCount + 1 < Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                            temLicence = 2;
                        }
                    }
                }
            }
            this.licenceData.cd = Game.config.movieLicence.getConfig(1).cool_down;
            // 距离上次刷新时间22点过去了多久
            var delayTime = Game.time.serverSeconds - serverTime22;
            if (this.licenceData.cd <= delayTime && temLicence < 2) {
                // +1
                temLicence++;
                // 配置列表
                var movieLicenceConfig = Game.config.movieLicence.getConfig(2);
                if (temLicence < 2 && movieLicenceConfig && delayTime - this.licenceData.cd > movieLicenceConfig.cool_down) {
                    // +2;
                    temLicence++;
                }
            }
            this.licenceData.dailyCount = temLicence;
            this.licenceAddWithCd = temLicence;
            this.preLicenceAddWithCD = this.licenceAddWithCd;
        };
        WarModel.prototype.licenceTick = function () {
            if (Game.time.checkNewDayToRefrush(this.licenceData.lastUpdateTime, 22)) {
                this.newlicenceDataRefrush();
                if (this.licenceAddWithCd > 0)
                    return;
            }
            var newDay = false;
            if (this.licenceData.dailyCount >= Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                newDay = Game.time.checkNewDayToRefrush(this.licenceData.lastResetTime, 22);
            }
            this.licenceAddWithCd = 0;
            var subTime = Game.time.getSubSecondsPre(this.licenceData.lastUpdateTime);
            this.licenceSubTime = this.licenceData.cd - subTime;
            if (this.licenceData.cd <= subTime) {
                // +1
                if (newDay || this.licenceData.dailyCount < Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                    this.licenceAddWithCd = 1;
                }
                // 配置列表
                var movieLicenceConfig = Game.config.movieLicence.getConfig(this.licenceData.dailyCount + 2);
                if (movieLicenceConfig && subTime - this.licenceData.cd > movieLicenceConfig.cool_down) {
                    // +2;
                    if (newDay || this.licenceData.dailyCount + 1 < Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value) {
                        this.licenceAddWithCd = 2;
                    }
                }
            }
            else {
                this.licenceAddWithCd = 0;
            }
            if (this.preLicenceAddWithCD !== this.licenceAddWithCd) {
                this.preLicenceAddWithCD = this.licenceAddWithCd;
                this.sUpdateLicence.dispatch();
            }
            if (this.preLicenceAddWithCD < 2) {
                this.sUpdateLicenceForTime.dispatch();
            }
        };
        Object.defineProperty(WarModel.prototype, "refrushGuanzhongInf", {
            get: function () {
                if (this.guanzhongList.length < 10) {
                    this.guanzhongList = new Array();
                    for (var i = 0; i < 10; i++) {
                        this.guanzhongList.push(Random.range(1, 6));
                    }
                }
                var aa = 0;
                var bb = 0;
                for (var i = 0; i < 10; i++) {
                    if (this.guanzhongList[i] >= 3) {
                        aa++;
                    }
                    if (this.guanzhongList[i] === 5) {
                        bb++;
                    }
                }
                return [aa * 10, bb * 10];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarModel.prototype, "isLicenceMax", {
            //许可证是否达到上限
            get: function () {
                return this.realLicenceNum >= GlobalConfig.getValue(GlobalKey.Licence_Store_Max);
            },
            enumerable: true,
            configurable: true
        });
        WarModel.prototype.movieDataToShotData = function (data) {
            var movieData = new Proto.SS.MovieShortData();
            movieData.userId = User.info.entityId;
            movieData.uuid = data.uuid;
            movieData.movieId = data.movieId;
            movieData.name = data.name;
            movieData.type = data.type;
            movieData.totalBoxOffice = data.totalBoxOffice;
            movieData.boxOfficeEvaluation = data.boxOfficeEvaluation;
            movieData.mediaCommend = data.mediaCommend * 0.1;
            movieData.publicPraise = data.publicPraise;
            movieData.data = new Array();
            var actorList = Game.moduleModel.actor.getActors();
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i] === 9997) {
                    var item = new Proto.SS.ActorShortDesc();
                    item.actorId = this.temActor2.id;
                    item.name = this.temActor2.name;
                    movieData.data.push(item);
                }
                else if (data.data[i] > 0 && data.data[i] !== 9999) {
                    for (var j = 0; j < actorList.length; j++) {
                        if (actorList[j].id == data.data[i]) {
                            var item = new Proto.SS.ActorShortDesc();
                            item.actorId = actorList[j].id;
                            item.name = actorList[j].name;
                            movieData.data.push(item);
                        }
                    }
                }
            }
            return movieData;
        };
        return WarModel;
    }(Games.MModel));
    Games.WarModel = WarModel;
    var numVal = /** @class */ (function () {
        function numVal() {
        }
        return numVal;
    }());
    Games.numVal = numVal;
    // 后续持续收益数据    
    var EndIncomeDate = /** @class */ (function () {
        function EndIncomeDate() {
        }
        return EndIncomeDate;
    }());
    Games.EndIncomeDate = EndIncomeDate;
})(Games || (Games = {}));
//# sourceMappingURL=WarModel.js.map