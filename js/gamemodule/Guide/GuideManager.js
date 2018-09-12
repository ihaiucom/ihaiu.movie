var Games;
(function (Games) {
    var GuideManager = /** @class */ (function () {
        function GuideManager() {
            //当前引导id
            this.currentGuideId = 0;
            //当前剧情引导id
            this.currentStoryId = 0;
            //当前引导组所有内容
            this.guideList = new Array();
            //当前剧情
            this.storyList = new Array();
            //完成的引导
            this.guideFinishDict = new Dictionary();
            //完成的剧情
            this.storyFinishDict = new Dictionary();
            this.forcePlay = false;
            this.fristGuideId = 100101;
            this.initGuideEvent();
        }
        GuideManager.prototype.initGuideEvent = function () {
            this.guideEvents = new Dictionary();
            // this.guideEvents.add(GuideFinishType.GuideFinishType_1_MakeBuild, [ProtoEventKey.CinemaBuild_BuildRoom, ProtoEventKey.CinemaBuild_ExtendFloor]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_2_UpgradeBuild, [ProtoEventKey.CinemaBuild_UpgradeRoom]);
            this.guideEvents.add(Games.GuideFinishType.GuideFinishType_3_UpgradeActor, [ProtoEventKey.ActorData]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_4_NoseActor, [ProtoEventKey.ActorData]);
            this.guideEvents.add(Games.GuideFinishType.GuideFinishType_5_StreetPublicize, [ProtoEventKey.city_Propaganda]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_6_RoadShow, [ProtoEventKey.city_Roadshow]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_7_CityFinish, [ProtoEventKey.city_HoldCity]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_10_GetMovieReward, );
            // this.guideEvents.add(GuideFinishType.GuideFinishType_11_UpgradeAttention, [ProtoEventKey.movie_SpreadMovie]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_12_AppointActor, [ProtoEventKey.city_SetPropagandaActor]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_13_ChooseFocusPointCity, [ProtoEventKey.CityData]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_14_GetCityReward, [ProtoEventKey.city_SetAmbassador]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_15_DoPuduct, [ProtoEventKey.manageProduce_Produce]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_16_CompleteOrder, [ProtoEventKey.manageOrder_FinishOrder]);
            this.guideEvents.add(Games.GuideFinishType.GuideFinishType_17_DoBusiness, [ProtoEventKey.manageBusiness_GetReward]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_18_FansVisit, [ProtoEventKey.manageVisit_GetReward]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_19_GetTotalRewardMovie, [ProtoEventKey.movie_GetRewardMovie]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_20_ClickTarget, [ProtoEventKey.]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_21_ExpendFloor, [ProtoEventKey.CinemaBuild_ExtendFloor]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_22_SelectContory, [ProtoEventKey.po]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_23_SelectCity, [ProtoEventKey.city]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_24_ClickAnyWhere, [ProtoEventKey.po]);
            this.guideEvents.add(Games.GuideFinishType.GuideFinishType_25_OrderIntoBox, [ProtoEventKey.manageOrder_PutItem]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_26_SelectStory, []);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_27_CostlicenceNum, [ProtoEventKey.MovieData]);
            // this.guideEvents.add(GuideFinishType.GuideFinishType_28_TakeMoiveType, [ProtoEventKey.MovieData]);
        };
        //延时触发检查引导
        GuideManager.prototype.dealyCheckGuide = function () {
            var _this = this;
            if (this.dealyPlayGuideHandler > 0) {
                clearTimeout(this.dealyPlayGuideHandler);
            }
            this.dealyPlayGuideHandler = setTimeout(function () {
                _this.dealyPlayGuideHandler = 0;
                _this.checkPlayGuide();
            }, 200);
        };
        //重置引导
        GuideManager.prototype.resetGuidesFinished = function () {
            for (var index = 0; index < this.guideList.length; index++) {
                var element = this.guideList[index];
                var config = Game.config.guidesystem.getConfig(element);
                this.guideFinishDict.add(element, false);
            }
            Game.guide.dealyCheckGuide();
        };
        /**
         * 初始化一步引导
         * @param id 引导id
         */
        GuideManager.prototype.initFirstGuide = function (id) {
            this.clearGuide();
            this.guideList.push(id);
            this.guideFinishDict.add(id, false);
            this.dealyCheckGuide();
        };
        //完成初始艺人
        GuideManager.prototype.finishInitActor = function () {
            if (this.storylineConfig && this.storylineConfig.ui_type == Games.GuideUIType.InitAcotr) {
                Game.moduleModel.guide.addFinishStoryId(this.storylineConfig.id);
            }
        };
        GuideManager.prototype.removeMenuEventListener = function () {
            Game.event.remove(GameEventKey.GameFrame_OpenMenu, this.openMenuHandler, this);
            Game.event.remove(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
        };
        GuideManager.prototype.openMenuHandler = function () {
            console.log("打开界面判断引导");
            this.dealyCheckGuide();
        };
        GuideManager.prototype.closeMenuHandler = function () {
            console.log("关闭界面判断引导");
            this.dealyCheckGuide();
        };
        GuideManager.prototype.addMenuEventListener = function () {
            this.removeMenuEventListener();
            Game.event.add(GameEventKey.GameFrame_OpenMenu, this.openMenuHandler, this);
            Game.event.add(GameEventKey.GameFrame_CloseMenu, this.closeMenuHandler, this);
            // Game.event.add(GameEventKey.GameFrame_OpenMenu, this.dealyCheckGuide, this);
        };
        /**
         * 检查播放引导
         */
        GuideManager.prototype.checkPlayGuide = function () {
            if (this.currentStoryId > 0) {
                return;
            }
            if (this.guideList.length > 0) {
                this.checkFinishGuide();
                var isPlay = false;
                for (var index = 0; index < this.guideList.length; index++) {
                    var id = this.guideList[index];
                    var config = Game.config.guidesystem.getConfig(id);
                    if (config) {
                        var isFinished = this.guideFinishDict.getValue(config.id);
                        var menuId = GuideHelp.getGuideMenuIdByConfig(config.path_id);
                        var isCanPlay = this.getIsCanPlay(config);
                        var menuIsOpen = GuideHelp.getIsOpenSubIdByConfig(config.path_id); //子窗口是否打开
                        var isLast = Game.menu.getLastOpenMenuId() == menuId;
                        if (menuIsOpen && isLast && (isFinished == false || isFinished == null) && isCanPlay) {
                            this.play(config.id, Games.GuideType.Guide);
                            isPlay = true;
                            break;
                        }
                        else {
                            if (isFinished) {
                                var storyId = config.storyline_id;
                                if (storyId > 0 && this.storyFinishDict.getValue(storyId) != true && Game.moduleModel.guide.isStoryFinished(storyId) == false) {
                                    this.playStory(storyId);
                                    return;
                                }
                            }
                            if (isCanPlay == false && (config.trigger_type == 2 || config.trigger_type == 3)) {
                                this.readyPlayGuide(config.trigger_value);
                                return;
                            }
                            else {
                            }
                            // console.log(format("id {0}, menuIsOpen {1},isLast {2},isFinished {3} isCanPlay{4}", config.id, menuIsOpen, isLast, isFinished, isCanPlay));
                        }
                    }
                }
                if (isPlay == false) {
                    this.endGuide();
                    // this.checkPlayStoryByType(StoryTriggerType.MainUI);
                }
                // console.log("检查引导播放", isPlay, this.currentGuideId);
            }
        };
        /**
         * 预备
         * @param id
         */
        GuideManager.prototype.readyPlayGuide = function (id, forcePlay) {
            if (forcePlay === void 0) { forcePlay = false; }
            this.addMenuEventListener();
            this.forcePlay = forcePlay;
            console.log("预备播放引导id", id);
            this.clearGuide();
            //
            var config = Game.config.guidesystem.getConfig(id);
            if (config) {
                var list = Game.config.guidesystem.getConfigsByGroup(config.group);
                if (list) {
                    for (var index = 0; index < list.length; index++) {
                        var element = list[index];
                        this.guideList.push(element.id);
                        this.addGuideEventListener(element.id);
                        this.guideFinishDict.add(element.id, false);
                        if (this.getIsFinished(element) && element.storyline_id > 0) {
                            this.storyFinishDict.add(element.storyline_id, true);
                        }
                    }
                }
                //检查播放引导
                this.dealyCheckGuide();
            }
        };
        GuideManager.prototype.addGuideEventListener = function (id) {
            var guideSystemConfig = Game.config.guidesystem.getConfig(id);
            if (this.guideEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.protoOkEvent.add(element, this.onServerHandler, this);
                }
            }
        };
        GuideManager.prototype.onServerHandler = function () {
            this.dealyCheckGuide();
        };
        GuideManager.prototype.removeGuideEventListener = function (id) {
            var guideSystemConfig = Game.config.guidesystem.getConfig(id);
            if (this.guideEvents.hasKey(guideSystemConfig.finish_type)) {
                var keys = this.guideEvents.getValue(guideSystemConfig.finish_type);
                for (var index = 0; index < keys.length; index++) {
                    var element = keys[index];
                    Game.protoOkEvent.remove(element, this.onServerHandler, this);
                }
            }
        };
        /**
         * 播放片酬不足
         */
        GuideManager.prototype.checkPlayStorySelectStoryOrActor = function () {
            var play = false;
            var storylineConfigs = Game.config.storyline.getConfigByTrigger(Games.StoryTriggerType.SelectStoryMoneyNotEnough);
            for (var index = 0; index < storylineConfigs.length; index++) {
                var element = storylineConfigs[index];
                if (Game.moduleModel.guide.isStoryFinished(element.id) == false) {
                    play = true;
                    this.checkPlayStoryByType(Games.StoryTriggerType.SelectStoryMoneyNotEnough);
                }
            }
            return play;
        };
        /**
         * 检查播放
         */
        GuideManager.prototype.checkOpenOscarWindow = function (step, callback) {
            this.storyCallBack = callback;
            var storylineConfigs = Game.config.storyline.getConfigByTrigger(Games.StoryTriggerType.OpenOscar);
            var play = false;
            for (var index = 0; index < storylineConfigs.length; index++) {
                var element = storylineConfigs[index];
                if (Game.moduleModel.guide.isStoryFinished(element.id) == false && step == element.value) {
                    play = true;
                    this.checkPlayStoryByType(Games.StoryTriggerType.OpenOscar);
                }
            }
            //
            if (play == false) {
                this.triggerStoryCallBack();
            }
        };
        /**
         * 触发
         */
        GuideManager.prototype.triggerStoryCallBack = function () {
            if (this.storyCallBack) {
                this.storyCallBack();
                this.storyCallBack = null;
            }
        };
        /**
         * 检查播放剧情
         */
        GuideManager.prototype.checkPlayStoryByType = function (type, value) {
            if (value === void 0) { value = 0; }
            var isPlay = false;
            // if (this.currentGuideId <= 0)
            // {
            var list;
            if (type == Games.StoryTriggerType.MainUI) {
                list = Game.config.storyline.getConfigList();
            }
            else {
                list = Game.config.storyline.getConfigByTrigger(type);
            }
            if (list) {
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    if (Game.moduleModel.guide.isStoryFinished(element.id) == false) {
                        switch (element.trigger) {
                            case Games.StoryTriggerType.Create: //创角
                                this.playStory(element.id);
                                break;
                            case Games.StoryTriggerType.SelectActor: //选择初始演员
                                if (Game.moduleModel.actor.getAllActorLen() == 1) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.FinishStreet: //完成街道宣传
                                if (Game.moduleModel.market.IsTaskCityPointFinish(element.value)) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.FinishRoadShow: //完成城市路演
                                if (Game.moduleModel.market.IsTaskRoadShowFinish(element.value)) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.FinishBuild: //完成建造
                                if (Game.moduleModel.building.hasBuildById(element.value)) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.FinishPreGuide: //完成前置引导
                                break;
                            case Games.StoryTriggerType.OpenMenu: //打开界面
                                break;
                            case Games.StoryTriggerType.FristSumitTakeMovie: //第一次提交拍摄
                                break;
                            case Games.StoryTriggerType.FristMovieUp: //第一步电影上映
                                if (Game.moduleModel.guide.isFinishMovieUp(element.value)) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.FinishPreStory: //完成前置剧情
                                if (Game.moduleModel.guide.isFinishStoryGroup(element.value)) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.SelectStoryMoneyNotEnough: //片酬不足
                                if (type == element.trigger) {
                                    this.playStory(element.id);
                                }
                                break;
                            case Games.StoryTriggerType.OpenOscar: //打开奥斯卡
                                if (type == element.trigger) {
                                    this.playStory(element.id);
                                }
                                break;
                            default:
                                break;
                        }
                        if (this.currentStoryId > 0) {
                            isPlay = true;
                            break;
                        }
                    }
                    else {
                        //剧情已经完成，引导没有完成，触发引导
                        var isFinished = Game.moduleModel.guide.isGuideOrStoryFinished(element.guide_id, element.guide_type);
                        if (element.guide_id > 0) {
                            console.log("没有完成的引导", element.guide_id, element.guide_type);
                            if (isFinished) {
                                if (element.guide_type == Proto.SE.EGuideType.guide) {
                                    Game.moduleModel.guide.addFinishGuideId(element.guide_id);
                                }
                                else {
                                    Game.moduleModel.guide.addFinishStoryId(element.guide_id);
                                }
                                Game.event.dispatch(GameEventKey.GameEventKey_ClientUpdateMainTask);
                            }
                            else {
                                isPlay = true;
                                this.playNextStoryOrGuide(element.guide_type, element.guide_id);
                            }
                        }
                    }
                }
                // }
            }
            return isPlay;
        };
        /**
         *
         * @param id
         * @param type
         */
        GuideManager.prototype.play = function (id, type) {
            this.currentGuideType = type;
            switch (type) {
                case Games.GuideType.Story: //剧情
                    console.log("播放剧情：", id);
                    this.playStory(id);
                    break;
                case Games.GuideType.Guide: //引导
                    console.log("播放引导：", id);
                    this.playGuide(id);
                    break;
                default:
                    break;
            }
        };
        /**
         * 播放引导
         * @param id
         */
        GuideManager.prototype.playGuide = function (id) {
            this.currentGuideId = id;
            var config = Game.config.guidesystem.getConfig(id);
            this.guideSystemConfig = config;
            if (config) {
                Game.guideUI.play(id, Games.GuideType.Guide);
            }
        };
        //播放剧情
        GuideManager.prototype.playStory = function (id) {
            // if (this.currentGuideId > 0)
            // {
            // 	return;
            // }
            this.currentStoryId = id;
            this.storyFinishDict.add(id, true);
            var config = Game.config.storyline.getConfig(id);
            this.storylineConfig = config;
            if (config) {
                switch (config.ui_type) {
                    case Games.GuideUIType.InitAcotr: //初始艺人
                        if (Game.moduleModel.actor.getAllActorLen() < 1) {
                            this.pauseGuide();
                            this.playInitActory();
                        }
                        else {
                            //完成剧情
                            Game.moduleModel.guide.addFinishStoryId(id);
                            //检查一下剧情
                            this.checkNextStory();
                        }
                        break;
                    default: //对话
                        Game.moduleModel.guide.addFinishStoryId(id);
                        Game.guideUI.play(id, Games.GuideType.Story);
                        break;
                }
            }
        };
        //初始艺人界面
        GuideManager.prototype.playInitActory = function () {
            Game.menu.openTab(Games.MenuId.CreateRole, Games.CreateRoleTabType.InitialActor);
        };
        //播放下一个剧情
        GuideManager.prototype.playNextStory = function () {
            var _this = this;
            if (this.storylineConfig && this.storylineConfig.reward && this.storylineConfig.reward.length > 0) {
                //先隐藏
                Game.guideUI.hide();
                //先提示奖励 在播放下一个剧情
                Game.system.alertTextIcon(this.storylineConfig.reward, Games.TEXT.RewardTitle, function () {
                    _this.checkNextStory();
                });
            }
            else {
                //下一步剧情
                this.checkNextStory();
            }
        };
        //
        GuideManager.prototype.checkNextGuide = function () {
            if (this.guideSystemConfig) {
                var storyId = this.guideSystemConfig.storyline_id;
                if (storyId > 0) {
                    //播放引导
                    this.endGuide();
                    this.playStory(storyId);
                }
                else {
                    var guideId = this.guideSystemConfig.id;
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
        /**
         * 播放下一个引导或者绝情
         * @param guideType 引导类型
         * @param guideId 引导id
         */
        GuideManager.prototype.playNextStoryOrGuide = function (guideType, guideId) {
            switch (guideType) {
                case Proto.SE.EGuideType.story:
                    // if (Game.moduleModel.guide.isStoryFinished(guideId) == false)
                    // {
                    this.playStory(guideId);
                    // }
                    break;
                case Proto.SE.EGuideType.guide:
                    //播放引导
                    this.endStory();
                    this.readyPlayGuide(guideId);
                    break;
                default:
                    break;
            }
        };
        //判断下一步剧情
        GuideManager.prototype.checkNextStory = function () {
            if (this.storylineConfig) {
                var guideId = this.storylineConfig.guide_id;
                var guideType = this.storylineConfig.guide_type;
                if (guideId > 0) {
                    this.readyPlayGuide(guideId);
                    this.playNextStoryOrGuide(guideType, guideId);
                }
                else {
                    var storyId = this.storylineConfig.id;
                    var nextConfig = Game.config.storyline.getNextStoryline(storyId);
                    if (nextConfig) {
                        this.playStory(nextConfig.id);
                    }
                    else {
                        this.triggerStoryCallBack();
                        this.endStory();
                    }
                }
            }
        };
        ///完成第一步引导
        GuideManager.prototype.finishFirstStep = function () {
            if (this.guideSystemConfig && this.guideSystemConfig.id == 100101) {
                Game.moduleModel.guide.addFinishGuideId(this.guideSystemConfig.id);
                Game.event.dispatch(GameEventKey.GameEventKey_ClientUpdateMainTask);
                this.clearGuide();
            }
            this.checkNextGuide();
        };
        //播放下一个引导		
        GuideManager.prototype.playNextGuide = function () {
            //下一步
            if (this.guideSystemConfig) {
                var storyId = this.guideSystemConfig.storyline_id;
                var guideId = this.guideSystemConfig.id;
                if (storyId > 0) {
                    this.endGuide();
                    this.play(storyId, Games.GuideType.Story);
                }
                else {
                    var nextConfig = Game.config.guidesystem.getNextGuide(guideId);
                    if (nextConfig) {
                        this.play(nextConfig.id, Games.GuideType.Guide);
                    }
                    else {
                        this.endGuide();
                    }
                }
            }
        };
        //结束引导
        GuideManager.prototype.endGuide = function () {
            this.currentGuideId = 0;
            this.currentGuideType = Games.GuideType.None;
            Game.guideUI.hide();
        };
        //清除引导
        GuideManager.prototype.clearGuide = function () {
            for (var index = 0; index < this.guideList.length; index++) {
                var element = this.guideList[index];
                this.removeGuideEventListener(element);
            }
            this.guideList.splice(0, this.guideList.length);
            this.storyFinishDict.clear();
            this.guideFinishDict.clear();
        };
        //暂停引导
        GuideManager.prototype.pauseGuide = function () {
            Game.guideUI.pauseGuide();
        };
        //暂停剧情
        GuideManager.prototype.pauseStory = function () {
            Game.guideUI.pauseStory();
        };
        //继续引导
        GuideManager.prototype.continueGuide = function () {
            this.playGuide(this.currentGuideId);
        };
        //继续剧情
        GuideManager.prototype.continueStory = function () {
            this.playStory(this.currentStoryId);
        };
        //结束剧情
        GuideManager.prototype.endStory = function () {
            this.currentStoryId = 0;
            this.currentGuideType = Games.GuideType.None;
            Game.guideUI.hide();
            // let play = this.checkPlayStoryByType(StoryTriggerType.MainUI);
            // if (play == false)
            // {
            this.dealyCheckGuide();
            // }
        };
        //加入引导完成id
        GuideManager.prototype.finishId = function (id) {
            this.guideFinishDict.add(id, true);
            this.checkPlayStoryByType(Games.StoryTriggerType.FinishPreGuide, id);
            this.dealyCheckGuide();
        };
        /**
         *手动完成的
         * @param trigger 触发条件
         * @param value1 值1
         * @param value2 值2
         */
        GuideManager.prototype.finishGuideByType = function (trigger, value1, value2) {
            for (var index = 0; index < this.guideList.length; index++) {
                var element = this.guideList[index];
                var config = Game.config.guidesystem.getConfig(element);
                if (config && config.finish_type == trigger) {
                    var isFinished = false;
                    if (value1 != null) {
                        isFinished = value1 == config.finish_value_1;
                    }
                    if (value2 != null) {
                        isFinished = isFinished && (value2 == config.finish_value_2);
                    }
                    this.guideFinishDict.add(element, isFinished);
                }
            }
        };
        //检查是否完成引导
        GuideManager.prototype.checkFinishGuide = function () {
            var allFinished = true;
            for (var index = 0; index < this.guideList.length; index++) {
                var element = this.guideList[index];
                var config = Game.config.guidesystem.getConfig(element);
                var isFinished = false;
                if (config) {
                    if (config.id != this.fristGuideId && this.forcePlay == false) {
                        var mainTask = Game.moduleModel.task.getCurrentMainTask();
                        if (mainTask) {
                            isFinished = mainTask.isFinished;
                        }
                    }
                    if (isFinished == false) {
                        if (config.finish_type == Games.GuideFinishType.GuideFinishType_24_ClickAnyWhere) {
                            var nextConfig = Game.config.guidesystem.getNextGuide(element);
                            if (nextConfig && this.getIsFinished(nextConfig)) {
                                isFinished = true;
                            }
                            else {
                                isFinished = this.guideFinishDict.getValue(config.id);
                            }
                        }
                        else {
                            isFinished = this.getIsFinished(config);
                        }
                    }
                }
                //更新
                this.guideFinishDict.add(element, isFinished);
                //
                if (isFinished == false) {
                    allFinished = false;
                }
            }
            if (allFinished) {
                this.endGuide();
            }
        };
        //是否可以
        GuideManager.prototype.getIsCanPlay = function (config) {
            var isPlay = true;
            switch (config.trigger_type) {
                case 1:
                    isPlay = this.guideFinishDict.getValue(config.trigger_value);
                    break;
                case 2:
                    isPlay = Game.moduleModel.warData.isHasContinueMovie();
                    break;
                case 3:
                    isPlay = Game.moduleModel.order.getCurrrentOrderList().length > 0;
                    break;
                case 4:
                    isPlay = Game.moduleModel.building.selectRoomType == config.trigger_value;
                    break;
                default:
                    break;
            }
            return isPlay;
        };
        //
        GuideManager.prototype.getIsFinished = function (config) {
            var isFinished = false;
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
                    isFinished = this.guideFinishDict.getValue(config.id);
                    break;
                case Games.GuideFinishType.GuideFinishType_14_GetCityReward: //领取城市收益
                    isFinished = this.guideFinishDict.getValue(config.id);
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
                    isFinished = this.guideFinishDict.getValue(config.id);
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
                    isFinished = this.guideFinishDict.getValue(config.id);
                    break;
                case Games.GuideFinishType.GuideFinishType_25_OrderIntoBox: //订单装箱
                    // isFinished = this.guideFinishDict.getValue(config.id);
                    isFinished = Game.moduleModel.guide.getGuideIsOrderIntoBox(config.finish_value_1);
                    break;
                case Games.GuideFinishType.GuideFinishType_26_SelectStory: //选择剧本
                    if (Game.moduleModel.warData.moveData) {
                        isFinished = Game.moduleModel.warData.moveData.state > Proto.SE.EMovieState.chooseScript;
                    }
                    else {
                        isFinished = false;
                    }
                    break;
                case Games.GuideFinishType.GuideFinishType_27_CostlicenceNum: //消耗许可证拍摄
                    if (Game.moduleModel.warData.moveData) {
                        isFinished = Game.moduleModel.warData.moveData.state > Proto.SE.EMovieState.chooseScript;
                    }
                    else {
                        isFinished = false;
                    }
                    break;
                case Games.GuideFinishType.GuideFinishType_28_TakeMoiveType: //拍摄
                    if (Game.moduleModel.warData.moveData) {
                        isFinished = Game.moduleModel.warData.moveData.state >= config.finish_value_1;
                    }
                    else {
                        isFinished = false;
                    }
                    break;
                // case GuideFinishType.GuideFinishType_29_FinishPreGuide://完成前置
                // 	isFinished = this.guideFinishDict.getValue(config.finish_value_1);
                // 	break;
            }
            return isFinished;
        };
        return GuideManager;
    }());
    Games.GuideManager = GuideManager;
})(Games || (Games = {}));
//# sourceMappingURL=GuideManager.js.map