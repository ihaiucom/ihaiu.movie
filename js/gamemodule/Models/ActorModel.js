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
    var ActorModel = /** @class */ (function (_super) {
        __extends(ActorModel, _super);
        function ActorModel() {
            var _this = _super.call(this) || this;
            _this.isSortArtist = false;
            _this.isSortFrozen = false;
            /** 更新演员信息 */
            _this.sUpdateActorInfo = new TypedSignal();
            /** 添加演员 */
            _this.sAddActorList = new TypedSignal();
            _this.isRecruiting = false;
            _this.giveAssetType = 0;
            _this.giveAssetUUid = "";
            _this.giveAssetNum = 0;
            //----------------------------------------
            // 艺人训练
            //----------------------------------------
            // creatExerciseData()
            // {
            // 	this.actorExerciseDataList.length = 0;
            // 	let actors = this.getActors();
            // 	let count = Math.min(4, actors.length);
            // 	for (var i: number = 0; i < count; i++)
            // 	{
            // 		let data: ActorExerciseData = new ActorExerciseData(null);
            // 		data.id = actors[i].id;
            // 		data.startTime = 1533098500;
            // 		this.actorExerciseDataList.push(data);
            // 	}
            // }
            _this.actorExerciseMap = new Dictionary();
            _this._noEnoughStamina = [];
            _this.artistList = new Array();
            _this.frozenList = new Array();
            _this.actorMap = new Dictionary();
            _this.actorUUidMap = new Dictionary();
            return _this;
        }
        /**
         * 定时器用于清除数据
         */
        ActorModel.prototype.setup = function () {
            var _this = this;
            clearTimeout(this.resetTimeOut);
            clearTimeout(this.leaveTimeOut);
            clearTimeout(this.clearTimeOut);
            clearTimeout(this.resetDayCultivateTimeOut);
            clearTimeout(this.resetStaminaTimeOut);
            //先判定次数是否已经耗尽
            // //重置小时
            // let resetHour = GlobalConfig.getValue(GlobalKey.KEY_1005_TanChaCD__WuQiShiJian);//22
            // let curr: number = Game.time.serverMilliseconds;
            // let d = new Date();
            // d.setTime(curr);
            // d.setMinutes(0);
            // d.setSeconds(0);
            // let hour = d.getHours();
            // d.setHours(resetHour);
            // if (hour >= resetHour)
            // {
            // 	d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
            // }
            var currSecond = Game.time.serverSeconds;
            //重置时间
            var nextSecond = User.info.resetNoseIntoTime; //Math.floor(d.getTime() / 1000);
            if (currSecond < nextSecond) {
                this.clearTimes = nextSecond - currSecond;
                this.clearTimeOut = setTimeout(function () {
                    User.info.noseIntoNum = 0;
                    User.info.noseIntoTime = 0;
                    User.sGameInfoUpdate.dispatch();
                    _this.setup();
                }, this.clearTimes * 1000);
            }
            else {
                User.info.noseIntoNum = 0;
                User.info.noseIntoTime = 0;
            }
            //探查时间CD
            var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002_XingTanQiaoMu__ChaCDFen) + GlobalConfig.getValue(GlobalKey.KEY_1003_MeiCiTanCha__JiaShiJianFen) * (User.info.noseIntoNum - 1);
            var resetTimes = User.info.noseIntoTime + otherTime * 60;
            this.resetTimes = 0;
            if (resetTimes > currSecond) {
                this.resetTimes = resetTimes - currSecond;
                this.resetTimeOut = setTimeout(function () {
                    User.sGameInfoUpdate.dispatch();
                }, this.resetTimes * 1000);
            }
            //艺人离开时间
            var leaveTimes = User.info.noseIntoActorEffectTime;
            if (leaveTimes > currSecond) {
                this.leaveTimes = leaveTimes - currSecond;
                this.leaveTimeOut = setTimeout(function () {
                    User.info.noseIntoActorList.splice(0, User.info.noseIntoActorList.length);
                    User.sGameInfoUpdate.dispatch();
                }, this.leaveTimes * 1000);
            }
            function resetTrainTimes() {
                User.info.daysCultivateCount = 0;
                User.sGameInfoUpdate.dispatch();
            }
            //培养次数
            var resetHour = GlobalConfig.getValue(GlobalKey.KEY_1031_GongSiPeiYang__WuQiShiJian);
            Games.TimeHelper.lastHourToReset(User.info.resetDaysCultivateCountTime, resetHour, resetTrainTimes);
            //当前时间的小时
            var nowHour = Games.TimeHelper.GetServerDateTime().getHours();
            nextSecond = Games.TimeHelper.TimeReformat(resetHour).getTime() / 1000;
            if (nowHour >= resetHour) {
                nextSecond += Games.TimeHelper.OneDaySeconds;
            }
            if (currSecond < nextSecond) {
                var time = nextSecond - currSecond;
                this.resetDayCultivateTimeOut = setTimeout(function () {
                    resetTrainTimes();
                }, time * 1000);
            }
            // var resetDayTime: number = User.info.resetDaysCultivateCountTime;
            // if (TimeHelper.IsSameDay(resetDayTime, Game.time.serverSeconds) == false)
            // {
            // 	User.info.daysCultivateCount = 0;
            // }
            // else
            // {
            // 	let time = resetDayTime - currSecond;
            // 	this.resetDayCultivateTimeOut = setTimeout(() =>
            // 	{
            // 		User.info.daysCultivateCount = 0;
            // 		User.sGameInfoUpdate.dispatch();
            // 	}, time * 1000);
            // }
            //重置体力
            var t = Games.TimeHelper.SubSecondTimeInDay(Game.time.serverSeconds, GlobalConfig.getValue(GlobalKey.KEY_1011_TiLiChongZhi__WuQiShiJian));
            if (t > 0) {
                this.resetStaminaTimeOut = setTimeout(function () {
                    for (var index = 0; index < _this.artistList.length; index++) {
                        var element = _this.artistList[index];
                        if (element) {
                            element.stamina = element.staminaLimit;
                        }
                    }
                    for (var index = 0; index < _this.frozenList.length; index++) {
                        var element = _this.frozenList[index];
                        if (element) {
                            element.stamina = element.staminaLimit;
                        }
                    }
                }, t * 1000);
            }
        };
        /**
         * 排序
         */
        ActorModel.prototype.sortArtist = function (list) {
            list.sort(this.descActor);
        };
        //降序排列
        ActorModel.prototype.descActor = function (b, a) {
            var result = a.star - b.star;
            if (result == 0) {
                result = a.level - b.level;
                if (result == 0) {
                    result = a.id - b.id;
                }
            }
            return result;
        };
        //是否含有该演员
        ActorModel.prototype.hasActor = function (id) {
            var b = this.actorMap.hasKey(id);
            return b;
        };
        ActorModel.prototype.hasActorByUUid = function (uuid) {
            var b = this.actorUUidMap.hasKey(uuid);
            return b;
        };
        //获取指定演员
        ActorModel.prototype.getActor = function (id) {
            return this.actorMap.getValue(id);
        };
        //获取指定演员数据
        ActorModel.prototype.getActorByUUid = function (uuid) {
            return this.actorUUidMap.getValue(uuid);
        };
        //获取所有
        ActorModel.prototype.getActors = function () {
            if (this.isSortArtist == false) {
                this.sortArtist(this.artistList);
                this.isSortArtist = true;
            }
            return this.artistList;
        };
        /**
         * 获取雪藏艺人
         */
        ActorModel.prototype.getHideActors = function () {
            if (this.isSortFrozen == false) {
                this.sortArtist(this.frozenList);
                this.isSortFrozen = true;
            }
            return this.frozenList;
        };
        //获取雪藏艺人数量
        ActorModel.prototype.getHideActorLen = function () {
            return this.frozenList.length;
        };
        //获取使用艺人数量
        ActorModel.prototype.getActorLen = function () {
            return this.artistList.length;
        };
        //获取所有艺人数量
        ActorModel.prototype.getAllActorLen = function () {
            return this.getActorLen() + this.getHideActorLen();
        };
        Object.defineProperty(ActorModel.prototype, "actorIsMax", {
            /**
             * 艺人是否到最大数
             */
            get: function () {
                return User.info.maxActor <= this.artistList.length;
            },
            enumerable: true,
            configurable: true
        });
        //拓展槽位
        ActorModel.prototype.toMaxActor = function () {
            Game.system.confirmBuyText(Games.TEXT.AlertTextBuyActor, GlobalConfig.getValue1(GlobalKey.KEY_1009_ZuanDanZengJia__ShuLiangXiaoHao), null, function () {
                Game.protosender.Actor.addActorSlot();
            });
        };
        Object.defineProperty(ActorModel.prototype, "actorHideIsMax", {
            /**
             * 获取是否雪藏到最大数
             */
            get: function () {
                return User.info.maxHideActor <= this.frozenList.length;
            },
            enumerable: true,
            configurable: true
        });
        ActorModel.prototype.isHide = function (id) {
            var data = this.getActor(id);
            var b = false;
            if (data) {
                b = data.hide;
            }
            return b;
        };
        /**
         * 添加到艺人收藏列表中
         * @param id 艺人id
         */
        ActorModel.prototype.addToFrozen = function (id) {
            var data = this.actorMap.getValue(id);
            if (this.frozenList.indexOf(data) < 0) {
                this.frozenList.push(data);
            }
            this.isSortFrozen = false;
            this.removeFromArtistList(id);
        };
        /**
         * 从列表中删除
         * @param id 艺人id
         */
        ActorModel.prototype.removeFromArtistList = function (id) {
            var data = this.actorMap.getValue(id);
            var index = this.artistList.indexOf(data);
            if (index >= 0) {
                this.artistList.splice(index, 1);
            }
        };
        /**
         * 从雪藏列表中删除
         * @param id 艺人id
         */
        ActorModel.prototype.removeFromFrozenList = function (id) {
            var data = this.actorMap.getValue(id);
            var index = this.frozenList.indexOf(data);
            if (index >= 0) {
                this.frozenList.splice(index, 1);
            }
        };
        /**
         * 根据服务器传的信息解析
         * @param msg 数据
         */
        ActorModel.prototype.addActorData = function (msg) {
            var data = this.getActor(msg.actorId);
            if (data == null) {
                data = new Games.ActorData();
            }
            data.uuid = msg.uuid;
            data.art = msg.art;
            data.hide = msg.hide;
            data.payCheck = msg.payCheck;
            data.stamina = msg.stamina; //体力
            data.staminaLimit = msg.staminaLimit; //体力上限
            data.loyaltyExp = msg.LoyaltyExp; //忠诚度经验
            //
            if (data.loyaltyLevel && data.loyaltyLevel < msg.LoyaltyLevel) {
                //忠诚度等级变化
                Games.Static.Instance.onUpgrdae("starHeart", msg.actorId.toString(), data.loyaltyLevel.toString(), (msg.LoyaltyLevel - data.loyaltyLevel).toString(), msg.LoyaltyLevel.toString());
            }
            data.loyaltyLevel = msg.LoyaltyLevel; //忠诚度等级
            // data.cultivateCount = msg.cultivateCount; //培养次数
            data.cultivateCountLimit = msg.cultivateCountLimit; //培养次数上限
            data.giveAssetsCount = msg.giveAssetsCount; //赠送资产次数
            data.giveAssetsCountLimit = msg.giveAssetsCountLimit; //赠送资产次数上限
            data.giveAssetsList = msg.giveAssetsList; //赠送资产列表
            data.skillExp = msg.skillExp; //技能经验
            data.skillList = msg.skillList; //技能信息列表
            data.shootTypeList = msg.shootTypeList; //拍摄类型熟练度
            data.spectacle = msg.spectacle; //场面属性
            data.perform = msg.perform; //表演属性
            data.plot = msg.plot; //剧情属性
            data.art = msg.art; //艺术属性
            data.entertainment = msg.entertainment; //娱乐属性
            data.levelExp = msg.levelExp;
            data.assistantInfos = msg.assistantInfos; //助理信息
            data.boxOfficeCount = msg.boxOfficeCount; //参与拍摄票房影响力总和
            data.cupCount = msg.cupCount; //获取奖杯数量
            data.movieCount = msg.movieCount; //拍摄电影次数
            data.setId(msg.actorId); //id
            data.setLevel(msg.level); //等级
            data.setTrainCount(msg.cultivateCount);
            data.setSkills(); //技能
            data.setAssets(); //设置资产
            data.setAssistants(); //设置助理信息
            data.setTagData(); //设置标签数据
            this.addActor(msg.actorId, data);
            if (isNullOrEmpty(msg.name)) {
                data.name = data.config.name;
            }
            else {
                data.name = msg.name;
            }
            //客户端计算
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_3_UpgradeActor);
            return data;
        };
        /**
         * 添加艺人数据
         * @param id 艺人id
         * @param data
         */
        ActorModel.prototype.addActor = function (id, data) {
            this.actorMap.add(id, data);
            this.actorUUidMap.add(data.uuid, data);
            if (data.hide) {
                this.addToFrozen(id);
            }
            else {
                this.addToArist(id);
            }
        };
        /**
         *添加正在使用的列表中
         * @param id
         */
        ActorModel.prototype.addToArist = function (id) {
            var data = this.actorMap.getValue(id);
            if (this.artistList.indexOf(data) < 0) {
                this.artistList.push(data);
            }
            this.isSortArtist = false;
            this.removeFromFrozenList(id);
        };
        /**
         * 移除艺人
         * @param id 艺人
         */
        ActorModel.prototype.removeActor = function (id) {
            var actor = this.getActor(id);
            if (actor) {
                this.actorMap.remove(id);
            }
            //从使用的列表中删除
            this.removeFromArtistList(id);
            //从雪藏列表中删除
            this.removeFromFrozenList(id);
        };
        Object.defineProperty(ActorModel.prototype, "isCanNoseActor", {
            /**
             * 是否可以使用星探卡
             */
            get: function () {
                var isRed = false;
                var isUnlock = Game.config.menu.getConfig(Games.MenuId.ArtistList).isUnlock;
                if (isUnlock) {
                    if (User.info.noseIntoTime > 0) {
                        //有探查时间CD
                        var resetTimes = User.info.noseIntoTime + this.noseCdReset;
                        var nowTimes = Game.time.serverSeconds;
                        if (resetTimes <= nowTimes && this.actorIsMax == false && this.isMaxNose == false) {
                            //cd
                            isRed = true;
                        }
                    }
                    else {
                        //没有cd 
                        if (this.isMaxNose == false && this.actorIsMax == false) {
                            isRed = true;
                        }
                    }
                }
                return isRed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isMaxNose", {
            //返回是否最大探查次数了 true 最大
            get: function () {
                var max = GlobalConfig.getValue(GlobalKey.KEY_1004_TanChaCiShuShangXian);
                if (Game.moduleModel.secretary.isForever) {
                    max += Game.moduleModel.secretary.noseIntoNum;
                }
                return User.info.noseIntoNum >= max;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "noseCdReset", {
            //返回探查cd
            get: function () {
                var otherTime = GlobalConfig.getValue(GlobalKey.KEY_1002_XingTanQiaoMu__ChaCDFen) + GlobalConfig.getValue(GlobalKey.KEY_1003_MeiCiTanCha__JiaShiJianFen) * (User.info.noseIntoNum - 1);
                var resetTime = otherTime * 60;
                if (Game.moduleModel.secretary.isForever) {
                    resetTime = resetTime * ((100 - Game.moduleModel.secretary.resetCdRate) / 100);
                }
                return Math.ceil(resetTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isUnlockActorSkill", {
            get: function () {
                var isUnlock = false;
                isUnlock = User.info.level >= GlobalConfig.getValue(GlobalKey.KEY_1033_YiRenJiNeng__GongSiDengJi);
                return isUnlock;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isUnlockActorTrain", {
            get: function () {
                var isUnlock = false;
                // isUnlock = User.info.level >= GlobalConfig.getValue(GlobalKey.Key);
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isUnlockActorAsset", {
            get: function () {
                var isUnlock = false;
                isUnlock = User.info.level >= GlobalConfig.getValue(GlobalKey.KEY_1034_YiRenZiChan__GongSiDengJi);
                return false;
            },
            enumerable: true,
            configurable: true
        });
        ActorModel.prototype.addActorExerciseData = function (msg, uuid) {
            var actorExpercise = this.actorExerciseMap.getValue(uuid);
            if (!actorExpercise) {
                actorExpercise = new Games.ActorExerciseData(msg);
            }
            actorExpercise.seatUuid = uuid;
            actorExpercise.uuid = msg.actorUuid;
            actorExpercise.seatIndex = msg.index;
            actorExpercise.startTime = msg.startTime;
            actorExpercise.isComplete = false;
            this.actorExerciseMap.add(uuid, actorExpercise);
        };
        //设置训练状态 - 是否完成
        ActorModel.prototype.setActorExerciseStaus = function (lineUuid, complete) {
            var exerciseData = this.getActorExerciseDataByUuid(lineUuid);
            if (exerciseData) {
                exerciseData.isComplete = complete;
            }
        };
        ActorModel.prototype.getActorExerciseDataByActorUuid = function (uuid) {
            var actorExperciseMapValues = this.actorExerciseMap.getValues();
            return actorExperciseMapValues.findOne(function (value) {
                return value.uuid == uuid;
            });
        };
        ActorModel.prototype.getActorExerciseDataByUuid = function (lineUuid) {
            return this.actorExerciseMap.getValue(lineUuid);
        };
        /**
         * 艺人是否正在训练
         * @param actorId
         */
        ActorModel.prototype.isActorOnExercise = function (actorId) {
            var actorData = this.getActor(actorId);
            var actorExerciseData = null;
            if (actorData) {
                actorExerciseData = this.getActorExerciseDataByActorUuid(actorData.uuid);
            }
            return actorExerciseData != null;
        };
        ActorModel.prototype.getActorExerciseDataKeys = function () {
            return this.actorExerciseMap.getKeys();
        };
        ActorModel.prototype.getExperciseDataList = function () {
            return this.actorExerciseMap.getValues();
        };
        Object.defineProperty(ActorModel.prototype, "onExperciseCount", {
            get: function () {
                var actorExperciseMapValues = this.actorExerciseMap.getValues();
                return actorExperciseMapValues.filter(function (value) {
                    return value.uuid != "";
                }).length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *
         */
        ActorModel.prototype.isUseInMovie = function (id) {
            var b = false;
            if (Game.moduleModel.warData.moveData != null) {
                var list = Game.moduleModel.warData.getRealYRList.getValues();
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    if (element.id == id) {
                        b = true;
                        break;
                    }
                }
            }
            return b;
        };
        Object.defineProperty(ActorModel.prototype, "hasCanVisitActor", {
            /**
             * 是否有艺人可以被探班
             */
            get: function () {
                var b = false;
                for (var index = 0; index < this.artistList.length; index++) {
                    var element = this.artistList[index];
                    if (Games.AvatarManager.isActorReceptionOnLimit(element.id) == false) {
                        b = true;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isOpenTrain", {
            //是否开放培养
            get: function () {
                var isOpen = false;
                var config = Game.config.unlock.getConfig(Games.UnlockID.ActorTrain);
                if (config) {
                    isOpen = config.isUnlock;
                }
                return isOpen;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isOpenSkill", {
            //是否开放技能
            get: function () {
                var lv = GlobalConfig.getValue(GlobalKey.KEY_1033_YiRenJiNeng__GongSiDengJi);
                return User.info.level >= lv;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isOpenAsset", {
            //是否开放资产
            get: function () {
                var lv = GlobalConfig.getValue(GlobalKey.KEY_1034_YiRenZiChan__GongSiDengJi);
                return User.info.level >= lv;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "openTrainTip", {
            //培养提示
            get: function () {
                var config = Game.config.unlock.getConfig(Games.UnlockID.ActorTrain);
                var tip = "";
                if (config) {
                    tip = config.touch_txt;
                }
                return tip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "openSkillTip", {
            //技能提示
            get: function () {
                var lv = GlobalConfig.getValue(GlobalKey.KEY_1033_YiRenJiNeng__GongSiDengJi);
                var tip;
                tip = format(Games.TEXT.SkillOpen, lv);
                return tip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "openAssetTip", {
            //资产提示
            get: function () {
                var lv = GlobalConfig.getValue(GlobalKey.KEY_1034_YiRenZiChan__GongSiDengJi);
                var tip;
                tip = format(Games.TEXT.AssetOpen, lv);
                return tip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "openAssistantTip", {
            //资产提示
            get: function () {
                var lv = GlobalConfig.getValue(GlobalKey.KEY_1036);
                var tip;
                tip = format(Games.TEXT.AssistantOpen, lv);
                return tip;
            },
            enumerable: true,
            configurable: true
        });
        //---------------------------------------
        // 艺人信息统计
        //---------------------------------------
        ActorModel.prototype.getAllActors = function () {
            var result = [];
            var actors = this.getActors();
            var hideActors = this.getHideActors();
            for (var _i = 0, actors_1 = actors; _i < actors_1.length; _i++) {
                var actor = actors_1[_i];
                result.push(actor);
            }
            for (var _a = 0, hideActors_1 = hideActors; _a < hideActors_1.length; _a++) {
                var actorHide = hideActors_1[_a];
                result.push(actorHide);
            }
            return result;
        };
        ActorModel.prototype.compareField = function (fieldName) {
            var filterItem;
            var compareVal = 0;
            var actors = this.getAllActors();
            for (var _i = 0, actors_2 = actors; _i < actors_2.length; _i++) {
                var actor = actors_2[_i];
                if (actor[fieldName] >= compareVal) {
                    compareVal = actor.boxOfficeCount;
                    filterItem = actor;
                }
            }
            return filterItem;
        };
        Object.defineProperty(ActorModel.prototype, "getTopBoxOfficeCount", {
            // 1.	票房号召力最强的艺人
            get: function () {
                return this.compareField("boxOfficeCount");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "getTopCupCount", {
            //2.	得奖最多的艺人
            get: function () {
                return this.compareField("cupCount");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "getTopMovieCount", {
            //3.	拍摄电影最多的艺人
            get: function () {
                return this.compareField("movieCount");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "getTopGiveAssetListCount", {
            //4.	最偏爱的艺人
            get: function () {
                return this.compareField("giveAssetsCount");
                // let filterItem: ActorData;
                // let compareVal: number = 0;
                // let actors = this.getAllActors();
                // for (let actor of actors)
                // {
                // 	actor.giveAssetsCount
                // 	let totalCount: number = 0;
                // 	for (let giveAsset of actor.giveAssetsList)
                // 	{
                // 		for (let item of giveAsset.giveItemList)
                // 		{
                // 			totalCount += item.amount;
                // 		}
                // 	}
                // 	if (totalCount >= compareVal)
                // 	{
                // 		compareVal = totalCount;
                // 		filterItem = actor;
                // 	}
                // }
                // return filterItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "getTopCultivateCount", {
            //5.	最重视的艺人
            get: function () {
                return this.compareField("cultivateCount");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "getTopSkillLevel", {
            //6.	最信赖的艺人
            get: function () {
                var filterItem;
                var compareVal = 0;
                var actors = this.getAllActors();
                for (var _i = 0, actors_3 = actors; _i < actors_3.length; _i++) {
                    var actor = actors_3[_i];
                    var totalSkillLevel = 0;
                    for (var _a = 0, _b = actor.skillList; _a < _b.length; _a++) {
                        var skillInfo = _b[_a];
                        var skillCfg = Game.config.skill.getConfig(skillInfo.skillId);
                        totalSkillLevel += skillCfg.lv;
                    }
                    if (totalSkillLevel >= compareVal) {
                        compareVal = totalSkillLevel;
                        filterItem = actor;
                    }
                }
                return filterItem;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "bestActorCupCount", {
            //1.	最佳男（女）演员得奖次数
            get: function () {
                var actors = this.getAllActors();
                var totalCount = 0;
                for (var _i = 0, actors_4 = actors; _i < actors_4.length; _i++) {
                    var actor = actors_4[_i];
                    totalCount += actor.cupCount;
                }
                return totalCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "isHaveNoseActor", {
            //是否有正在探查的艺人
            get: function () {
                var nowTimes = Game.time.serverSeconds;
                var leaveTimes = User.info.noseIntoActorEffectTime;
                var actorLeaveTime = 0;
                if (leaveTimes > nowTimes) {
                    actorLeaveTime = leaveTimes - nowTimes;
                }
                if (actorLeaveTime > 0 && User.info.noseIntoActorList.length > 0) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "noEnoughStaminaActors", {
            get: function () {
                this._noEnoughStamina.splice(0, this._noEnoughStamina.length);
                for (var index = 0; index < this.artistList.length; index++) {
                    var element = this.artistList[index];
                    if (element && (element.stamina < element.staminaLimit)) {
                        this._noEnoughStamina.push(element);
                    }
                }
                return this._noEnoughStamina;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorModel.prototype, "noseActorIsWaiting", {
            //招募艺人正在等候
            get: function () {
                //当前时间
                var nowTimes = Game.time.serverSeconds;
                //探查时间CD
                var leaveTimes = User.info.noseIntoActorEffectTime;
                var actorLeaveTime = 0;
                if (leaveTimes > nowTimes) {
                    actorLeaveTime = leaveTimes - nowTimes;
                }
                return actorLeaveTime > 0;
            },
            enumerable: true,
            configurable: true
        });
        ActorModel.prototype.normalNoseActor = function (useCard) {
            var cost = GlobalConfig.getValue1(GlobalKey.KEY_1001_TanChaXiaoHao);
            var enough = Games.ItemHelper.checkItemEnough3(cost);
            if (enough) {
                if (useCard) {
                    var cost2 = GlobalConfig.getValue1(GlobalKey.KEY_1008_JiangZhiTanCha__PinHeShuLiang);
                    var enough = Games.ItemHelper.checkItemEnough3(cost2);
                    if (enough) {
                        Game.protosender.Actor.noseInfoActor(true);
                    }
                    else {
                        Game.system.openItemWay(cost[0], cost[1]);
                    }
                }
                else {
                    //请求探查艺人
                    Game.protosender.Actor.noseInfoActor(false);
                }
            }
            else {
                Game.system.openItemWay(cost[0], cost[1]);
            }
        };
        Object.defineProperty(ActorModel.prototype, "assistantNpcUrl", {
            //助理icon
            get: function () {
                //助理icon
                return Game.config.npc.getConfig(105).avatarUrl;
            },
            enumerable: true,
            configurable: true
        });
        //资产类型数量
        ActorModel.assetLenth = 4;
        return ActorModel;
    }(Games.MModel));
    Games.ActorModel = ActorModel;
})(Games || (Games = {}));
//# sourceMappingURL=ActorModel.js.map