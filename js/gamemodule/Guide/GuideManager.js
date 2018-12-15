var Games;
(function (Games) {
    var GuideStoryData = /** @class */ (function () {
        function GuideStoryData() {
        }
        return GuideStoryData;
    }());
    Games.GuideStoryData = GuideStoryData;
    var GuideManager = /** @class */ (function () {
        function GuideManager() {
            //当前引导数据
            this.currentId = 0;
            //
            this.isPlayCar = false;
            this.guideGroupDict = new Dictionary();
            this.guideGroupList = [];
            this.initGuideEvent();
        }
        GuideManager.prototype.initGuideEvent = function () {
            this.guideProtoOkEvents = new Dictionary();
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_3_UpgradeActor, [ProtoEventKey.ActorData]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_5_StreetPublicize, [ProtoEventKey.city_Propaganda]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_11_UpgradeAttention, [ProtoEventKey.movie_SpreadMovie]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_12_AppointActor, [ProtoEventKey.city_SetPropagandaActor]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_17_DoBusiness, [ProtoEventKey.manageBusiness_GetReward]);
            // this.guideProtoOkEvents.add(GuideFinishType.GuideFinishType_18_FansVisit, [ProtoEventKey.ManageVisitData]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_25_OrderIntoBox, [ProtoEventKey.manageOrder_PutItem]);
            this.guideProtoOkEvents.add(Games.GuideFinishType.GuideFinishType_28_TakeMoiveType, [ProtoEventKey.MovieData]);
            //
            this.guideEvents = new Dictionary();
            this.guideEvents.add(Games.GuideFinishType.GuideFinishType_18_FansVisit, [GameEventKey.GameEventKey_UpdateVisitActor]);
        };
        /**
         *
         * @param id
         */
        GuideManager.prototype.addGuideEventListener = function (id) {
            this.removeGuideEventListener(id);
            var guideSystemConfig = Game.config.guidesystem.getConfig(id);
            if (this.guideProtoOkEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideProtoOkEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.protoOkEvent.add(element, this.onServerHandler, this);
                }
            }
            if (this.guideEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.event.add(element, this.onClientHandler, this);
                }
            }
        };
        GuideManager.prototype.onServerHandler = function () {
            this.dealyCheckGuide();
        };
        GuideManager.prototype.onClientHandler = function () {
            this.endGuide();
        };
        //移除服务器返回监听监听
        GuideManager.prototype.removeGuideEventListener = function (id) {
            var guideSystemConfig = Game.config.guidesystem.getConfig(id);
            if (this.guideProtoOkEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideProtoOkEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.protoOkEvent.remove(element, this.onServerHandler, this);
                }
            }
            if (this.guideEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.event.remove(element, this.onClientHandler, this);
                }
            }
        };
        //完成引导
        GuideManager.prototype.endGuide = function (isApplyCallback) {
            if (isApplyCallback === void 0) { isApplyCallback = true; }
            if (this.isHaveGuide) {
                //回收
                this.guideUI.recyclingHand();
                this.guideUI.closeDialog();
                //清除数据
                this.clearGuides();
                //应用回调
                if (isApplyCallback) {
                    //调用回调函数
                    this.callTriggerEndGuide();
                }
            }
        };
        /**
         * 完成引导id
         * @param id
         */
        GuideManager.prototype.finishId = function (id) {
            this.guideGroupDict.add(id, true);
            Game.moduleModel.guide.addFinishGuideId(id);
            //
            var isPlay = Game.story.triggerPlayStoryByType(Games.StoryTriggerType.FinishPreGuide, id);
            if (isPlay == false) {
                this.dealyCheckGuide();
            }
        };
        //触发回调函数 触发一次置空
        GuideManager.prototype.callTriggerEndGuide = function () {
            if (this.triggerEndGuideCallBack) {
                this.triggerEndGuideCallBack();
                this.triggerEndGuideCallBack = null;
            }
        };
        Object.defineProperty(GuideManager, "Instance", {
            get: function () {
                if (!GuideManager._Instance) {
                    GuideManager._Instance = new GuideManager();
                }
                return GuideManager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuideManager.prototype, "guideUI", {
            //引导窗口
            get: function () {
                return Game.guideUI;
            },
            enumerable: true,
            configurable: true
        });
        GuideManager.prototype.openHome = function () {
            this.addMenuEventListener();
            Game.menu.open(Games.MenuId.Home);
        };
        //检查播放
        GuideManager.prototype.checkPlayOpenAnima = function () {
            var _this = this;
            var isFinished = Game.moduleModel.guide.isFinishFirst;
            if (isFinished) {
                this.openHome();
            }
            else {
                if (Game.moduleModel.building.hasBuildFloorWithoutRoom(1)) {
                    setTimeout(function () {
                        _this.openHome();
                    }, 500);
                }
                else {
                    this.playOpenAnima();
                }
            }
        };
        /**
         * 播放开场动画
         */
        GuideManager.prototype.playStartCar = function () {
            this.guideUI.play(0, Games.GuideType.Car);
        };
        /**
         * 播放开场动画
         */
        GuideManager.prototype.playOpenAnima = function () {
            this.guideUI.play(0, Games.GuideType.Anima);
        };
        //延时触发检查引导
        GuideManager.prototype.dealyCheckGuide = function (timeout) {
            var _this = this;
            if (timeout === void 0) { timeout = 200; }
            this.clearDealyCheckGuide();
            if (Game.story.isPlayed == false) {
                this.dealyPlayGuideHandler = setTimeout(function () {
                    _this.dealyPlayGuideHandler = 0;
                    _this.checkPlayGuide();
                }, timeout);
            }
        };
        //
        GuideManager.prototype.clearDealyCheckGuide = function () {
            if (this.dealyPlayGuideHandler > 0) {
                clearTimeout(this.dealyPlayGuideHandler);
                this.dealyPlayGuideHandler = 0;
            }
        };
        //清除配置
        GuideManager.prototype.clearGuides = function () {
            this.guideGroupDict.clear();
            for (var index = 0; index < this.guideGroupList.length; index++) {
                var element = this.guideGroupList[index];
                this.removeGuideEventListener(element);
            }
            this.guideGroupList.splice(0, this.guideGroupList.length);
        };
        //准备播放引导
        GuideManager.prototype.readyPlayGuide = function (id, isForce, callback) {
            if (isForce === void 0) { isForce = true; }
            if (callback === void 0) { callback = null; }
            if (isForce)
                this.guidePlayType = Games.GuidePlayType.DailyTask;
            else
                this.guidePlayType = Games.GuidePlayType.MainTask;
            //清除引导数据
            this.clearGuides();
            //引导配置
            var fConfig = Game.config.guidesystem.getConfig(id);
            if (fConfig) {
                this.triggerEndGuideCallBack = callback;
                var list = Game.config.guidesystem.getConfigsByGroup(fConfig.group);
                if (list) {
                    for (var index = 0; index < list.length; index++) {
                        var element = list[index];
                        this.addGuideEventListener(element.id);
                        this.guideGroupList.push(element.id);
                        this.guideGroupDict.add(element.id, false);
                    }
                }
                //检查播放引导
                this.dealyCheckGuide(200);
            }
        };
        //添加界面打开关闭监听
        GuideManager.prototype.addMenuEventListener = function () {
            Game.event.add(GameEventKey.GameFrame_OpenMenu, this.openMenuHandler, this);
            Game.event.add(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
        };
        //移除界面打开关闭监听
        GuideManager.prototype.removeMenuEventListener = function () {
            Game.event.remove(GameEventKey.GameFrame_OpenMenu, this.openMenuHandler, this);
            Game.event.remove(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
        };
        //打开界面
        GuideManager.prototype.openMenuHandler = function (menuId) {
            var isPlay = false;
            switch (menuId) {
                case Games.MenuId.Market:
                    isPlay = Game.story.triggerPlayStoryByType(Games.StoryTriggerType.FinishRoadShow);
                    break;
                case Games.MenuId.ArtistScoutResult:
                    for (var index = 0; index < User.info.noseIntoActorList.length; index++) {
                        var element = User.info.noseIntoActorList[index];
                        var actorConfig = Game.config.actor.getConfig(element);
                        if (actorConfig && Game.moduleModel.actor.hasActor(actorConfig.id)) {
                            isPlay = Game.story.triggerPlayStoryByType(Games.StoryTriggerType.FourStarActor, actorConfig.starNum, null, false, false, element);
                        }
                        if (isPlay) {
                            break;
                        }
                    }
                    break;
                case Games.MenuId.Home:
                    if (Game.moduleModel.guide.isFinishFirst == false) {
                        if (Game.moduleModel.building.hasBuildFloorWithoutRoom(1)) {
                            this.finishFristStep(1);
                        }
                        else {
                            isPlay = true;
                            this.playStartCar();
                        }
                    }
                    else {
                        isPlay = Game.story.triggerPlayAll();
                    }
                    break;
                default:
                    isPlay = Game.story.triggerPlayStoryByType(Games.StoryTriggerType.OpenMenu, menuId);
                    break;
            }
            if (isPlay == false) {
                this.dealyCheckGuide();
            }
        };
        //关闭界面
        GuideManager.prototype.closeMenuHandler = function (menuId) {
            //检查是否
            if (this.isHaveGuide) {
                this.guideUI.recyclingHand();
                this.guideUI.closeDialog();
                this.dealyCheckGuide();
            }
        };
        Object.defineProperty(GuideManager.prototype, "isHaveGuide", {
            //当前是否有引导
            get: function () {
                return this.guideGroupList.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuideManager.prototype, "isFinishedGroup", {
            /**
             * 是否完成当前引导组
             */
            get: function () {
                var isFinished = true;
                for (var index = 0; index < this.guideGroupList.length; index++) {
                    var id = this.guideGroupList[index];
                    isFinished = this.guideGroupDict.getValue(id);
                    if (isFinished == false) {
                        break;
                    }
                }
                return isFinished;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 是否可以触发
         * @param config
         */
        GuideManager.prototype.isCanTrigger = function (id) {
            var isPlay = true;
            var config = Game.config.guidesystem.getConfig(id);
            if (config) {
                switch (config.trigger_type) {
                    case Games.GuideCanPlayType.FinishPreGuide:
                        isPlay = this.guideGroupDict.getValue(config.trigger_value);
                        break;
                    case Games.GuideCanPlayType.HasContinueMovie:
                        isPlay = Game.moduleModel.warData.isHasContinueMovie();
                        break;
                    case Games.GuideCanPlayType.HasOrderList:
                        isPlay = Game.moduleModel.order.getCurrrentOrderList().length > 0;
                        break;
                    case Games.GuideCanPlayType.SelectRoomType:
                        isPlay = Game.moduleModel.building.selectRoomType == config.trigger_value;
                        break;
                    case Games.GuideCanPlayType.HasContinueMovie2:
                        isPlay = false;
                        var curContinuData = Game.moduleModel.warData.curContinuData;
                        if (curContinuData && curContinuData.remainingTime > 0)
                            isPlay = true;
                        break;
                    case Games.GuideCanPlayType.SelectActor:
                        isPlay = false;
                        var selectActor = Game.moduleModel.actor.selectActor;
                        if (selectActor)
                            isPlay = selectActor.level < config.trigger_value;
                        break;
                    case Games.GuideCanPlayType.VisitActor:
                        isPlay = true;
                        var visit = Game.moduleModel.visit.getVisitData();
                        if (visit) {
                            if (visit.isWaiting) {
                                //正在等候
                                isPlay = false;
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            return isPlay;
        };
        //检查是否播放引导 如果播放就开始播放
        GuideManager.prototype.checkPlayGuide = function () {
            if (this.guideGroupList.length > 0) {
                this.checkFinishGuide();
                var isPlay = false;
                //
                for (var index = 0; index < this.guideGroupList.length; index++) {
                    var id = this.guideGroupList[index];
                    var config = Game.config.guidesystem.getConfig(id);
                    if (config) {
                        //是否完成
                        var isFinished = this.guideGroupDict.getValue(config.id);
                        //menuId
                        var menuId = GuideHelp.getGuideMenuIdByConfig(config.path_id);
                        //子窗口是否打开
                        var menuIsOpen = GuideHelp.getIsOpenSubIdByConfig(config.path_id); //子窗口是否打开
                        //是否可以播放
                        var isCanPlay = this.isCanTrigger(id);
                        //是最后一个打开的窗口
                        var isLast = Game.menu.getLastOpenMenuId() == menuId;
                        //
                        if (menuIsOpen && isLast && isFinished == false && isCanPlay) {
                            isPlay = true;
                            this.playGuide(id);
                            break;
                        }
                        else {
                            if (isFinished) {
                                var storyId = config.storyline_id;
                                //触发剧情
                                if (storyId > 0 && Game.moduleModel.guide.isStoryFinished(storyId) == false) {
                                    Game.story.playStory(storyId);
                                    return;
                                }
                            }
                            if (isCanPlay == false && this.isTriggerOtherGuide(config)) {
                                if (menuIsOpen && isLast && config.trigger_type == Games.GuideCanPlayType.VisitActor) {
                                    this.playGuide(config.break_guide);
                                }
                                else {
                                    //如果触发不成功，触发别的引导
                                    this.readyPlayGuide(config.break_guide);
                                }
                                return;
                            }
                        }
                    }
                }
                if (isPlay == false) {
                    this.guideUI.recyclingHand();
                }
            }
        };
        /**
         * 播放引导
         * @param id
         */
        GuideManager.prototype.playGuide = function (id) {
            var config = Game.config.guidesystem.getConfig(id);
            if (config) {
                this.currentId = id;
                this.guideUI.play(id, Games.GuideType.Guide);
            }
        };
        GuideManager.prototype.finishVisitGuide = function () {
        };
        /**
         * 是否触发别的引导
         * @param config
         */
        GuideManager.prototype.isTriggerOtherGuide = function (config) {
            return config.break_guide > 0;
        };
        /**
         * 完成第一步引导
         */
        GuideManager.prototype.finishInitActor = function () {
            Game.moduleModel.guide.addFinishStoryId(Games.GuideModel.initActorId);
        };
        //播放下一个引导		
        GuideManager.prototype.playNextGuide = function () {
            var guideSystemConfig = Game.config.guidesystem.getConfig(this.currentId);
            //下一步
            if (guideSystemConfig) {
                var storyId = guideSystemConfig.storyline_id;
                var guideId = guideSystemConfig.id;
                if (storyId > 0) {
                    Game.story.playStory(storyId);
                }
                else {
                    var nextConfig = Game.config.guidesystem.getNextGuide(guideId);
                    if (nextConfig) {
                        this.playGuide(nextConfig.id);
                    }
                    else {
                        this.endGuide();
                    }
                }
            }
        };
        //完成第一步引导
        GuideManager.prototype.finishFristStep = function (floorIndex) {
            if (Game.moduleModel.guide.isFinishFirst == false) {
                this.currentId = Games.GuideModel.firstStepId;
                Game.moduleModel.guide.addFinishGuideId(this.currentId);
                Game.event.dispatch(GameEventKey.GameEventKey_ClientUpdateMainTask);
            }
            this.checkNext();
        };
        //检查下一步
        GuideManager.prototype.checkNext = function () {
            if (this.currentId > 0) {
                var guideSystemConfig = Game.config.guidesystem.getConfig(this.currentId);
                if (guideSystemConfig) {
                    var storyId = guideSystemConfig.storyline_id;
                    if (storyId > 0) {
                        //播放引导
                        Game.story.playStory(storyId);
                    }
                    else {
                        var guideId = guideSystemConfig.id;
                        var nextConfig = Game.config.guidesystem.getNextGuide(guideId);
                        if (nextConfig) {
                            this.playGuide(nextConfig.id);
                        }
                        else {
                            this.endGuide(true);
                        }
                    }
                }
            }
        };
        //检查是否完成引导
        GuideManager.prototype.checkFinishGuide = function () {
            for (var index = 0; index < this.guideGroupList.length; index++) {
                var id = this.guideGroupList[index];
                var config = Game.config.guidesystem.getConfig(id);
                var isFinished = this.isFinished;
                if (config) {
                    //判断
                    if (isFinished == false) {
                        if (config.finish_type == Games.GuideFinishType.GuideFinishType_24_ClickAnyWhere) {
                            var nextConfig = Game.config.guidesystem.getNextGuide(id);
                            if (nextConfig && this.getIsFinished(nextConfig.id)) {
                                isFinished = true;
                            }
                            else {
                                isFinished = this.guideGroupDict.getValue(config.id);
                            }
                        }
                        else {
                            isFinished = this.getIsFinished(id);
                        }
                    }
                }
                //更新引导是否完成
                this.guideGroupDict.add(id, isFinished);
            }
            var isFinishedAll = this.isFinishedGroup;
            if (isFinishedAll) {
                this.endGuide();
            }
        };
        Object.defineProperty(GuideManager.prototype, "isFinished", {
            //是否完成
            get: function () {
                var isFinished = false;
                switch (this.guidePlayType) {
                    case Games.GuidePlayType.MainTask:
                        var mainTask = Game.moduleModel.task.getCurrentMainTask();
                        if (mainTask) {
                            isFinished = mainTask.isFinished;
                        }
                        //主线任务
                        break;
                    case Games.GuidePlayType.DailyTask:
                        isFinished = false;
                        //日常任务
                        break;
                    default:
                        break;
                }
                return isFinished;
            },
            enumerable: true,
            configurable: true
        });
        GuideManager.prototype.isGuideUI = function (ui) {
            if (this.guideUI) {
                return this.guideUI.guideBtn == ui;
            }
            return false;
        };
        /**
         * 获取是否完成引导判断
         * @param id
         */
        GuideManager.prototype.getIsFinished = function (id) {
            var config = Game.config.guidesystem.getConfig(id);
            var isFinished = false;
            if (config) {
                switch (config.finish_type) {
                    case Games.GuideFinishType.GuideFinishType_1_MakeBuild: //建造建筑
                        isFinished = Game.moduleModel.guide.getGuideIsMakeBuild(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_2_UpgradeBuild: //升级建筑
                        isFinished = Game.moduleModel.guide.getGuideIsUpgradeBuild(config.finish_value_1, config.finish_value_2);
                        break;
                    case Games.GuideFinishType.GuideFinishType_3_UpgradeActor: //升级艺人
                        isFinished = Game.moduleModel.guide.getGuideIsUpgradeActor(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_4_NoseActor: //招募艺人
                        isFinished = Game.moduleModel.guide.getGuideIsNoseActor(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_5_StreetPublicize: //街道宣传
                        isFinished = Game.moduleModel.guide.getGuideIsStreetPublicize(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_6_RoadShow: //进行路演
                        isFinished = Game.moduleModel.guide.getGuideIsRoadShow(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_7_CityFinish: //占领城市
                        isFinished = Game.moduleModel.guide.getGuideIsCityFinish(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_8_TakeMovie: //拍摄电影
                        isFinished = Game.moduleModel.guide.getGuideIsTakeMovie(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_9_SeeMovieReward: //查看电影收益
                        isFinished = Game.moduleModel.guide.getGuideIsSeeMovieReward(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_10_GetMovieReward: //领取电影收益
                        isFinished = Game.moduleModel.guide.getGuideIsGetMovieReward(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_11_UpgradeAttention: //提升关注度
                        isFinished = Game.moduleModel.guide.getGuideIsUpgradeAttention(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_12_AppointActor: //任命形象大使
                        isFinished = Game.moduleModel.guide.getGuideIsAppointActor(config.finish_value_1, config.finish_value_2);
                        break;
                    case Games.GuideFinishType.GuideFinishType_13_ChooseFocusPointCity: //选中重点宣传城市
                        isFinished = this.guideGroupDict.getValue(config.id);
                        break;
                    case Games.GuideFinishType.GuideFinishType_14_GetCityReward: //领取城市收益
                        isFinished = this.guideGroupDict.getValue(config.id);
                        break;
                    case Games.GuideFinishType.GuideFinishType_15_DoPuduct: //进行生产
                        isFinished = Game.moduleModel.guide.getGuideIsDoPuduct(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_16_CompleteOrder: //完成订单
                        isFinished = Game.moduleModel.guide.getGuideIsCompleteOrder(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_17_DoBusiness: //处理公务
                        isFinished = Game.moduleModel.guide.getGuideIsDoBusiness(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_18_FansVisit: //接待粉丝
                        isFinished = Game.moduleModel.guide.getGuideIsFansVisit(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_19_GetTotalRewardMovie: //领取收益数量
                        isFinished = Game.moduleModel.guide.getGuideIsGetTotalRewardMovie(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_20_ClickTarget: //点击引导对象
                        isFinished = this.guideGroupDict.getValue(config.id);
                        break;
                    case Games.GuideFinishType.GuideFinishType_21_ExpendFloor: //拓展楼层
                        isFinished = Game.moduleModel.guide.getGuideIsExpendFloor(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_22_SelectContory: //选中国家
                        isFinished = Game.moduleModel.guide.getGuideIsSelectContory(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_23_SelectCity: //选中国家
                        isFinished = Game.moduleModel.guide.getGuideIsSelectCity(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_24_ClickAnyWhere: //点击任何地方
                        isFinished = this.guideGroupDict.getValue(config.id);
                        break;
                    case Games.GuideFinishType.GuideFinishType_25_OrderIntoBox: //订单装箱
                        isFinished = Game.moduleModel.guide.getGuideIsOrderIntoBox(config.finish_value_1);
                        break;
                    case Games.GuideFinishType.GuideFinishType_26_SelectStory: //选择剧本
                    case Games.GuideFinishType.GuideFinishType_27_CostlicenceNum: //消耗许可证拍摄
                        if (Game.moduleModel.warData.moveData)
                            isFinished = Game.moduleModel.warData.moveData.state > Proto.SE.EMovieState.chooseScript;
                        else
                            isFinished = false;
                        break;
                    case Games.GuideFinishType.GuideFinishType_28_TakeMoiveType: //拍摄
                        if (Game.moduleModel.warData.moveData)
                            isFinished = Game.moduleModel.warData.moveData.state >= config.finish_value_1;
                        else
                            isFinished = false;
                        break;
                    case Games.GuideFinishType.GuideFinishType_29_Secretary: //小秘书
                        isFinished = this.guideGroupDict.getValue(config.id);
                        if (isFinished == false) {
                            isFinished = Game.moduleModel.guide.getGuideIsSecretary(config.finish_value_1);
                        }
                        break;
                    case Games.GuideFinishType.GuideFinishType_30_MarketSelectActor: //设置代言人
                        isFinished = Game.moduleModel.guide.getGuideIsSetPublicizeActor(config.finish_value_1);
                        break;
                    default:
                        break;
                }
            }
            return isFinished;
        };
        return GuideManager;
    }());
    Games.GuideManager = GuideManager;
})(Games || (Games = {}));
//# sourceMappingURL=GuideManager.js.map