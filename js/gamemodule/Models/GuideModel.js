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
    var GuideModel = /** @class */ (function (_super) {
        __extends(GuideModel, _super);
        function GuideModel() {
            var _this = _super.call(this) || this;
            //完成引导
            _this.finishGuides = new Dictionary();
            //完成的剧情
            _this.finishStorys = new Dictionary();
            //
            _this.finishStoryList = new Array();
            _this.finishGuideList = new Array();
            //
            _this.guideOffset = 1000;
            return _this;
        }
        GuideModel.prototype.addFinishGuideId = function (id) {
            if (id > 0) {
                if (this.isGuideFinished(id) != true) {
                    this.finishGuides.add(id, true);
                    this.addGuideFinishId(id);
                    //完成引导组发送给服务器
                    Game.protosender.BeginnerGuide.CompleteGuide(id, Proto.SE.EGuideType.guide);
                }
            }
        };
        GuideModel.prototype.addFinishStoryId = function (id) {
            if (id > 0) {
                if (this.isStoryFinished(id) != true) {
                    this.finishStorys.add(id, true);
                    this.addStoryFinishId(id);
                    //完成引导组发送给服务器
                    Game.protosender.BeginnerGuide.CompleteGuide(id, Proto.SE.EGuideType.story);
                }
            }
        };
        //初始化
        GuideModel.prototype.initFinishId = function (guideIds, storyIds) {
            this.clearFinishIds();
            if (storyIds) {
                for (var index = 0; index < storyIds.length; index++) {
                    var id = storyIds[index];
                    this.finishStorys.add(id, true);
                    this.addStoryFinishId(id);
                }
            }
            if (guideIds) {
                for (var index = 0; index < guideIds.length; index++) {
                    var id = guideIds[index];
                    this.finishGuides.add(id, true);
                    this.addFinishGuideId(id);
                    var systemConfig = Game.config.guidesystem.getConfig(id);
                    if (systemConfig.storyline_id > 0 && this.finishStorys.hasKey(systemConfig.storyline_id) == false) {
                        this.realdyStoryId = systemConfig.storyline_id;
                        break;
                    }
                }
            }
        };
        //添加id
        GuideModel.prototype.addStoryFinishId = function (id) {
            if (this.finishStoryList.indexOf(id) == -1) {
                this.finishStoryList.push(id);
            }
        };
        //添加id
        GuideModel.prototype.addGuideFinishId = function (id) {
            if (this.finishGuideList.indexOf(id) == -1) {
                this.finishGuideList.push(id);
            }
        };
        //剧情是否完成
        GuideModel.prototype.isStoryFinished = function (id) {
            var finish = this.finishStorys.hasKey(id);
            return finish;
        };
        //完成引导组
        GuideModel.prototype.isFinishStoryGroup = function (id) {
            var configs = Game.config.storyline.getConfigListByGroup(id);
            var isFinished = true;
            for (var index = 0; index < configs.length; index++) {
                var element = configs[index];
                if (this.isStoryFinished(element.id) == false) {
                    isFinished = false;
                }
            }
            return isFinished;
        };
        //完成引导组
        GuideModel.prototype.isFinishMovieUp = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask && mainTask.id == id) {
                return mainTask.isFinished;
            }
            return false;
        };
        //引导是否完成
        GuideModel.prototype.isGuideFinished = function (id) {
            var finish = this.finishGuides.hasKey(id);
            return finish;
        };
        //引导是否完成
        GuideModel.prototype.isGuideOrStoryFinished = function (id, type) {
            var finish = false;
            switch (type) {
                case Proto.SE.EGuideType.story:
                    if (this.finishStorys.hasKey(id)) {
                        finish = this.finishStorys.getValue(id);
                    }
                    break;
                case Proto.SE.EGuideType.guide:
                    if (this.finishGuides.hasKey(id)) {
                        finish = this.finishGuides.getValue(id);
                    }
                    break;
                default:
                    break;
            }
            return finish;
        };
        //清除id
        GuideModel.prototype.clearFinishIds = function () {
            this.finishGuides.clear();
            this.finishStorys.clear();
            this.finishStoryList.splice(0, this.finishStoryList.length);
        };
        Object.defineProperty(GuideModel.prototype, "finishGuideNums", {
            //完成的数量
            get: function () {
                return this.finishGuides.count;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuideModel.prototype, "storyLists", {
            //获取剧情
            get: function () {
                var list = [];
                for (var index = 0; index < this.finishStoryList.length; index++) {
                    var element = this.finishStoryList[index];
                    var config = Game.config.storyline.getConfig(element);
                    if (config) {
                        if (isNaN(config.ui_type) || config.ui_type <= 0) {
                            list.push(config);
                        }
                    }
                }
                list.sort(function (a, b) { return a.id - b.id; });
                return list;
            },
            enumerable: true,
            configurable: true
        });
        //==================================以下是关于引导的特殊判断内容==================================\\
        //是否建造
        GuideModel.prototype.getGuideIsMakeBuild = function (id) {
            var hasBuild = Game.moduleModel.building.hasBuildById(id);
            return hasBuild;
        };
        //是否升级建筑
        GuideModel.prototype.getGuideIsUpgradeBuild = function (id, lv) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //是否升级
        GuideModel.prototype.getGuideIsUpgradeActor = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //是否升级
        GuideModel.prototype.getGuideIsNoseActor = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //是否升级
        GuideModel.prototype.getGuideIsStreetPublicize = function (id) {
            // let mainTask = Game.moduleModel.task.getCurrentMainTask();
            // if (mainTask)
            // {
            // 	return mainTask.isFinished;
            // }
            return Game.moduleModel.market.IsTaskCityPointFinish(id);
        };
        //路演
        GuideModel.prototype.getGuideIsRoadShow = function (id) {
            // let mainTask = Game.moduleModel.task.getCurrentMainTask();
            // if (mainTask)
            // {
            // 	return mainTask.isFinished;
            // }
            return Game.moduleModel.market.IsTaskRoadShowFinish(id);
        };
        //完成占领城市
        GuideModel.prototype.getGuideIsCityFinish = function (id) {
            // let mainTask = Game.moduleModel.task.getCurrentMainTask();
            // if (mainTask)
            // {
            // 	return mainTask.isFinished;
            // }
            return Game.moduleModel.market.IsTaskCityFinish(id);
        };
        //拍摄电影
        GuideModel.prototype.getGuideIsTakeMovie = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //查看电影收益
        GuideModel.prototype.getGuideIsSeeMovieReward = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //领取电影收益次数
        GuideModel.prototype.getGuideIsGetMovieReward = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //提升关注度
        GuideModel.prototype.getGuideIsUpgradeAttention = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //任命形象大使
        GuideModel.prototype.getGuideIsAppointActor = function (id, count) {
            return Game.moduleModel.market.IsTaskAppointActor(id, count);
        };
        //设置宣传城市
        GuideModel.prototype.getGuideIsChooseFocusPointCity = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //领取城市收益
        GuideModel.prototype.getGuideIsGetCityReward = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //进行生产
        GuideModel.prototype.getGuideIsDoPuduct = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //完成订单
        GuideModel.prototype.getGuideIsCompleteOrder = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //处理公务
        GuideModel.prototype.getGuideIsDoBusiness = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //接待粉丝
        GuideModel.prototype.getGuideIsFansVisit = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //领取收益数量
        GuideModel.prototype.getGuideIsGetTotalRewardMovie = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //点击对象
        GuideModel.prototype.getGuideIsClickTarget = function (id) {
            var mainTask = Game.moduleModel.task.getCurrentMainTask();
            if (mainTask) {
                return mainTask.isFinished;
            }
            return false;
        };
        //开拓楼层
        GuideModel.prototype.getGuideIsExpendFloor = function (id) {
            var expendFloor = Game.moduleModel.building.hasBuildFloorWithoutRoom(User.info.extendFloor);
            return expendFloor;
        };
        //选中国家
        GuideModel.prototype.getGuideIsSelectContory = function (id) {
            var menuCtl = Game.menu.getMenuCtl(Games.MenuId.Market);
            if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow) {
                var content = menuCtl.moduleWindow;
                return content.guideCurrentCountry == id;
            }
            return false;
        };
        //选中城市
        GuideModel.prototype.getGuideIsSelectCity = function (id) {
            var menuCtl = Game.menu.getMenuCtl(Games.MenuId.Market);
            if (menuCtl && menuCtl.moduleWindow && menuCtl.moduleWindow) {
                var content = menuCtl.moduleWindow;
                return content.guideCurrentCity == id;
            }
            return false;
        };
        //完成装箱
        GuideModel.prototype.getGuideIsOrderIntoBox = function (num) {
            return Game.moduleModel.order.getIsFinishedPutNum() >= num;
        };
        return GuideModel;
    }(Games.MModel));
    Games.GuideModel = GuideModel;
})(Games || (Games = {}));
//# sourceMappingURL=GuideModel.js.map