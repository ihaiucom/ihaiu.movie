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
            _this.sUpdateContinue = new Signal();
            // 当前电影使用中的艺人字典
            _this._curYRList = new Dictionary();
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
            /**
             * 用于显示电影详情的配置信息
             */
            _this.filmInfoConfig = null;
            // 未签约院线id        
            _this.emptyCinemalist = [0, 0];
            // 剧本列表
            _this.curStoryList = new Array();
            _this._movieHistogramTime = null;
            //====================================================================================
            // 以下电影拍摄过程相关
            //====================================================================================
            _this.filmingProgress = new numVal();
            _this.isFilming = false;
            // 进度条速度
            _this.filmingSpeed = 250;
            _this.filmGoldCurPress = 0;
            _this.filmGoldProgress = new numVal();
            _this.goldProgressIsStart = false;
            /**
             * 自动回复的许可证信息
             */
            _this.licenceAddWithCd = 0;
            _this.preLicenceAddWithCD = 0;
            _this.licenceSubTime = 0;
            _this.sUpdateLicence = new Signal();
            _this.sUpdateLicenceForTime = new Signal();
            _this.isTick = false;
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
        WarModel.prototype.MakeFilm = function (windowCallBack) {
            this.overBattle = 0;
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.MakeFilm();
        };
        /**
         * 拍摄请求返回
         */
        WarModel.prototype.handlerMakeFilm = function () {
            this.initFilmInf();
            this.windowCallBack();
        };
        // 发送修改剧本名称协议
        WarModel.prototype.SendReName = function (newName, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SetMovieName(newName);
        };
        // 修改名称结果返回，进入市场反馈界面
        WarModel.prototype.handleReName = function () {
            this.windowCallBack();
        };
        /**
        * 设置当前电影的艺人
        * @param index 艺人在第几个位置
        * @param actorId 艺人id
        * @param setActorOver 设置艺人结束的回调函数，等待服务器反馈
        */
        WarModel.prototype.sendSetActor = function (index, actorId, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SetActor(index, actorId);
        };
        /**
         * 设置艺人返回结果
         */
        WarModel.prototype.HandleSetActor = function (msg) {
            this.windowCallBack();
        };
        // 确认艺人全部选择完毕
        WarModel.prototype.ConfirmSetActor = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.ConfirmSetActor();
        };
        // 确认返回
        WarModel.prototype.HandleConfirmSetActor = function (msg) {
            this.windowCallBack();
        };
        // 通告请求
        WarModel.prototype.AcceptMediaVisit = function (mediaId, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.AcceptMediaVisit(mediaId);
        };
        WarModel.prototype.handleAcceptMediaVisit = function (msg) {
            this.windowCallBack(msg.addExpection);
        };
        WarModel.prototype.setSelectType = function (value, windowCallBack) {
            this.windowCallBack = windowCallBack;
            this.curFilmType = value;
            Game.protosender.movie.ChoseType(value);
        };
        /**
         * 设置艺人返回结果
         */
        WarModel.prototype.HandleSetSelectType = function (msg) {
            this.storyShootType = msg.storyShootType;
            this.windowCallBack();
        };
        /**
         * 向服务器发送院线请求
         * @param index
         */
        WarModel.prototype.setPublishMovie = function (index, windowCallBack) {
            this.windowCallBack = windowCallBack;
            this.theaterId = index;
            Game.protosender.movie.PublishMovie(index);
        };
        /**
         * 院线返回结果
         * @param msg
         */
        WarModel.prototype.PublishMovie = function (msg) {
            this.windowCallBack();
        };
        /**
         * 上映结束
         * @param windowCallBack
         */
        WarModel.prototype.setBattleOver = function (windowCallBack) {
            if (this.overBattle === 0) {
                this.overBattle = 1;
                this.windowCallBack = windowCallBack;
                Game.protosender.movie.BattleOver();
            }
        };
        /**
         * 上映结束反馈
         * @param msg
         */
        WarModel.prototype.HandlersetBattleOver = function (msg) {
            this.moveData = null;
            if (this.clientHideFilmOverResult) {
                this.moveJieSuanData = null;
                this.sUpdateContinue.dispatch();
            }
            else {
                this.dropList = msg.dropout.sort(function (a, b) { return a.itemId - b.itemId; });
                if (this.windowCallBack !== null) {
                    this.windowCallBack();
                }
            }
        };
        /**
         * 更新电影状态
         */
        WarModel.prototype.sendUpdateMovieState = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.UpdateMovieState(Game.moduleModel.warData.moveData.state);
        };
        /**
         * 电影状态更新完毕
         */
        WarModel.prototype.handleUpdateMovieState = function () {
            this.windowCallBack();
        };
        // 领取剧本目标奖励
        WarModel.prototype.reqGetStoryGoals = function (windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.GetStoryGoals();
        };
        WarModel.prototype.handlerGetStoryGoals = function () {
            this.windowCallBack();
        };
        // 切换城市
        WarModel.prototype.reqSwitchCity = function (uuid, cityId, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SwitchCity(uuid, cityId);
        };
        WarModel.prototype.handlerSwitchCity = function () {
            this.windowCallBack();
        };
        // 推广电影
        WarModel.prototype.reqSpreadMovie = function (uuid, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.SpreadMovie(uuid);
        };
        WarModel.prototype.handlerSpreadMovie = function () {
            this.windowCallBack();
        };
        // 领取收益
        WarModel.prototype.reqGetRewardMovie = function (uuid, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.GetRewardMovie(uuid);
        };
        // 领取到的收益列表
        WarModel.prototype.handlerGetRewardMovie = function (msg) {
            this.windowCallBack(msg);
        };
        WarModel.prototype.reqDeleteMovie = function (uuid, windowCallBack) {
            this.windowCallBack = windowCallBack;
            Game.protosender.movie.DeleteMovie(uuid);
        };
        WarModel.prototype.handlerDeleteMovie = function (msg) {
            this.windowCallBack(msg.uuid);
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
        WarModel.prototype.initFilmInf = function () {
            this.filmDataInit = true;
            this.filmingMaxCur = 0;
            this.filmingCurDay = 0;
            this.filmingTotal = 0;
            this.filmingMaxDay = 0;
            this.refrushDataStart = false;
        };
        WarModel.prototype.refrushFilmingStatus = function () {
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
                    this.clientHideFilmOverResult = true;
                    this.isFilmingShangying = false;
                    this.filmingCurDay = this.filmingMaxDay + 1;
                    this.windowCallBack = null;
                    // 放映结束
                    Game.event.dispatch(GameEventKey.GameEventKey_FilmEnd, Game.moduleModel.warData.moveData.mExpected);
                    Game.event.dispatch(GameEventKey.GameEventKey_UpdateFilmingStatus);
                    Game.protosender.movie.BattleOver();
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
                Game.event.dispatch(GameEventKey.GameEventKey_FilmEnd, Game.moduleModel.warData.moveData.mExpected);
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateFilmingStatus);
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
            var next1Conf = Game.config.cinema.getConfig(next1 + 1001);
            var next1Conf2 = Game.config.cinema.getConfig(next2 + 1);
            if (next1Conf && next1Conf !== null) {
                this.emptyCinemalist[0] = next1Conf.id;
                result2.push(next1Conf);
            }
            if (next1Conf2 && next1Conf2 !== null) {
                this.emptyCinemalist[1] = next1Conf2.id;
                result2.push(next1Conf2);
            }
            result2 = result2.sort(function (a, b) { return a.id - b.id; });
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
        WarModel.prototype.startFilming = function (startVal, endVal) {
            if (this.filmingTween && this.filmingTween !== null) {
                this.filmingTween.clear();
            }
            this.filmingProgress.value = startVal;
            var curDuration = (endVal - startVal) * this.filmingSpeed;
            this.filmingTween = laya.utils.Tween.to(this.filmingProgress, { value: endVal }, curDuration, Laya.Ease.linearIn, Laya.Handler.create(this, this.filmingToNextStatus));
        };
        WarModel.prototype.filmingToNextStatus = function () {
            if (this.filmingTween && this.filmingTween !== null) {
                this.filmingTween.clear();
            }
        };
        WarModel.prototype.initGoldData = function () {
            if (this.filmingGoldProgressTween && this.filmingGoldProgressTween !== null) {
                this.filmingGoldProgressTween.clear();
            }
            this.filmGoldProgress.value = 0;
            this.goldProgressIsStart = false;
            this.filmGoldCurPress = 0;
        };
        // 金本进度
        WarModel.prototype.startCheckGoldPress = function () {
            if (!this.goldProgressIsStart) {
                this.goldProgressIsStart = true;
                this.initGoldData();
                var curDuration = 300 * this.filmingSpeed * 0.3 * 0.8;
                this.filmingGoldProgressTween = laya.utils.Tween.to(this.filmGoldProgress, { value: 300 }, curDuration, Laya.Ease.linearIn, Laya.Handler.create(this, this.filmGoldEnd));
            }
        };
        // 金本进度结束
        WarModel.prototype.filmGoldEnd = function () {
            if (this.filmingGoldProgressTween && this.filmingGoldProgressTween !== null) {
                this.filmingGoldProgressTween.clear();
            }
        };
        // 金本进度暂停或继续
        WarModel.prototype.filmGoldPauseResume = function (pause) {
            if (pause) {
                if (this.filmingGoldProgressTween && this.filmingGoldProgressTween !== null) {
                    this.filmingGoldProgressTween.pause();
                }
            }
            else {
                if (this.filmingGoldProgressTween && this.filmingGoldProgressTween !== null) {
                    this.filmingGoldProgressTween.resume();
                }
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
        WarModel.prototype.licenceTick = function () {
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
        //是否有正在持续收益的电影
        WarModel.prototype.isHasContinueMovie = function () {
            var datas = Game.moduleModel.warData.movieDataList;
            for (var index = 0; index < datas.length; index++) {
                var curData = datas[index];
                var remainTime = 7200 - Game.time.getSubSecondsPre(curData.startTime);
                if (remainTime > 0) {
                    return true;
                }
            }
            return false;
        };
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
                if (data.data[i] > 0 && data.data[i] !== 9999) {
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
})(Games || (Games = {}));
//# sourceMappingURL=WarModel.js.map