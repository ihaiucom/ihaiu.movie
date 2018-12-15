var Games;
(function (Games) {
    var StoryManager = /** @class */ (function () {
        function StoryManager() {
            //
            this.isPlayed = false;
            this.isTriggerAll = false;
        }
        Object.defineProperty(StoryManager, "Instance", {
            get: function () {
                if (!StoryManager._Instance) {
                    StoryManager._Instance = new StoryManager();
                    StoryManager._Instance.install();
                }
                return StoryManager._Instance;
            },
            enumerable: true,
            configurable: true
        });
        StoryManager.prototype.install = function () {
            Game.event.add(GameEventKey.GameEventKey_FilmStoryAnimationComplete, this.storyAnimationComplete, this);
            Game.event.add(GameEventKey.GameEventKey_FilmStoryStateChange, this.storyStateChange, this);
        };
        StoryManager.prototype.storyStateChange = function (state) {
            this.triggerPlayStoryByType(Games.StoryTriggerType.FilmState, state);
        };
        StoryManager.prototype.storyAnimationComplete = function (storyList) {
            var isPlay = false;
            for (var index = 0; index < storyList.length; index++) {
                var element = storyList[index];
                isPlay = this.triggerPlayStoryByType(Games.StoryTriggerType.FiveStarStory, element.starNumber);
                if (isPlay) {
                    return;
                }
            }
        };
        //触发回调函数 触发一次置空
        StoryManager.prototype.callTriggerEndStory = function () {
            if (this.triggerEndStoryHandler) {
                this.triggerEndStoryHandler.run();
                this.triggerEndStoryHandler = null;
            }
        };
        StoryManager.prototype.triggerPlayAll = function () {
            var played = false;
            if (this.isTriggerAll == false) {
                for (var index = Games.StoryTriggerType.Start + 1; index < Games.StoryTriggerType.End; index++) {
                    played = this.triggerPlayStoryByType(index);
                    if (played) {
                        this.isTriggerAll = true;
                        break;
                    }
                }
            }
            return played;
        };
        /**
         * 检查播放剧情
         * @param type
         * @param value
         * @param triggerStoryHandler
         * @param noPlayTriggerCallback
         */
        StoryManager.prototype.triggerPlayStoryByType = function (type, value, triggerStoryHandler, noPlayTriggerCallback, forcePlay, parame) {
            if (value === void 0) { value = 0; }
            if (triggerStoryHandler === void 0) { triggerStoryHandler = null; }
            if (noPlayTriggerCallback === void 0) { noPlayTriggerCallback = true; }
            if (forcePlay === void 0) { forcePlay = false; }
            if (parame === void 0) { parame = null; }
            this.triggerEndStoryHandler = triggerStoryHandler;
            var list = Game.config.storyline.getConfigByTrigger(type);
            var isPlay = false;
            if (list) {
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    if (Game.moduleModel.guide.isStoryFinished(element.id) == false || forcePlay) {
                        switch (element.trigger) {
                            case Games.StoryTriggerType.Create: //创角
                                isPlay = true;
                                break;
                            case Games.StoryTriggerType.SelectActor: //选择初始演员
                                if (Game.moduleModel.actor.getAllActorLen() == 1) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishStreet: //完成街道宣传
                                if (Game.moduleModel.market.IsTaskCityPointFinish(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishRoadShow: //完成城市路演
                                if (Game.moduleModel.market.IsTaskRoadShowFinish(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishBuild: //完成建造
                                if (Game.moduleModel.building.getRoomByType(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishPreGuide: //完成前置引导
                                if (Game.moduleModel.guide.isGuideFinished(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.OpenMenu: //打开界面
                                if (value == element.value) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FristSumitTakeMovie: //第一次提交拍摄
                                break;
                            case Games.StoryTriggerType.FristMovieUp: //第一步电影上映
                                if (Game.moduleModel.guide.isFinishMovieUp(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishPreStory: //完成前置剧情
                                if (Game.moduleModel.guide.isFinishStoryGroup(element.value)) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.SelectStoryMoneyNotEnough: //片酬不足
                                if (value == 1) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.OpenOscar: //打开奥斯卡
                                if (value == element.value) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FinishMainTask: //完成主线任务
                                if (value == element.value) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FourStarActor: //四星艺人
                                if (value == element.value) {
                                    element.type_id = parame;
                                    isPlay = true;
                                }
                            case Games.StoryTriggerType.FiveStarStory: //五星剧本
                                if (value == element.value) {
                                    isPlay = true;
                                }
                                break;
                            case Games.StoryTriggerType.FilmState: //拍摄步骤
                                if (value == element.value) {
                                    isPlay = true;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    if (isPlay) {
                        this.playStory(element.id);
                        break;
                    }
                }
            }
            if (isPlay == false && noPlayTriggerCallback) {
                this.callTriggerEndStory();
            }
            return isPlay;
        };
        /**
         * 播放剧情
         * @param id 剧情id
         */
        StoryManager.prototype.playStory = function (id) {
            Game.guide.clearDealyCheckGuide();
            this.guideUI.show();
            var played = false;
            var config = Game.config.storyline.getConfig(id);
            if (config) {
                this.isPlayed = true;
                switch (config.ui_type) {
                    case Games.GuideUIType.InitAcotr: //初始艺人
                        if (Game.moduleModel.actor.getAllActorLen() < 1) {
                            console.log("播放初始艺人选择");
                            this.endStory();
                            //播放初始艺人选择
                            Game.menu.openTab(Games.MenuId.CreateRole, Games.CreateRoleTabType.InitialActor);
                        }
                        else {
                            //完成剧情
                            Game.moduleModel.guide.addFinishStoryId(id);
                        }
                        break;
                    case Games.GuideUIType.Menu: //初始艺人
                        this.endStory();
                        //播放初始艺人选择
                        Game.menu.open(toInt(config.type_id));
                        //完成剧情
                        Game.moduleModel.guide.addFinishStoryId(id);
                        break;
                    default: //对话
                        Game.moduleModel.guide.addFinishStoryId(id);
                        Game.guideUI.play(id, Games.GuideType.Story);
                        break;
                }
            }
            this.storyId = id;
            return played;
        };
        //播放下一个剧情
        StoryManager.prototype.playNextStory = function () {
            var _this = this;
            var storyConfig = Game.config.storyline.getConfig(this.storyId);
            if (storyConfig && storyConfig.reward && storyConfig.reward.length > 0) {
                //先隐藏
                this.hideUI();
                //先提示奖励 在播放下一个剧情
                Game.system.openAwardsAlert(storyConfig.reward, Games.TEXT.RewardTitle, function () {
                    _this.checkNextStory(storyConfig);
                }, true);
            }
            else {
                //下一步剧情
                this.checkNextStory(storyConfig);
            }
        };
        //判断下一步剧情
        StoryManager.prototype.checkNextStory = function (storyConfig) {
            if (storyConfig) {
                var guideId = storyConfig.guide_id;
                if (guideId > 0) {
                    var guideType = storyConfig.guide_type;
                    switch (guideType) {
                        case Proto.SE.EGuideType.story:
                            this.playStory(guideId);
                            break;
                        case Proto.SE.EGuideType.guide:
                            this.endStory();
                            Game.guide.readyPlayGuide(guideId);
                            break;
                        default:
                            break;
                    }
                }
                else {
                    var storyId = storyConfig.id;
                    var nextConfig = Game.config.storyline.getNextStoryline(storyId);
                    if (nextConfig) {
                        this.playStory(nextConfig.id);
                    }
                    else {
                        this.endStory();
                    }
                }
            }
        };
        //结束剧情
        StoryManager.prototype.endStory = function () {
            this.hideUI();
            this.callTriggerEndStory();
            this.isPlayed = false;
            Game.event.dispatch(GameEventKey.GameEventKey_StorylineComplete);
            Game.guide.dealyCheckGuide();
        };
        Object.defineProperty(StoryManager.prototype, "guideUI", {
            //引导窗口
            get: function () {
                return Game.guideUI;
            },
            enumerable: true,
            configurable: true
        });
        //隐藏引导UI
        StoryManager.prototype.hideUI = function () {
            this.guideUI.hideAll();
        };
        return StoryManager;
    }());
    Games.StoryManager = StoryManager;
})(Games || (Games = {}));
//# sourceMappingURL=StoryManager.js.map