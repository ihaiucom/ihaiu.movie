var Games;
(function (Games) {
    var TaskData = /** @class */ (function () {
        function TaskData() {
        }
        Object.defineProperty(TaskData.prototype, "progress", {
            get: function () {
                if (this.isMainTask) {
                    this.calClientProgress();
                }
                return this._progress;
            },
            set: function (value) {
                this._progress = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TaskData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                this.config = Game.config.task.getConfig(value);
                if (this.config && this.config.type == EAchievementType.mainTask) {
                    this.mainConfig = Game.config.maintask.getConfig(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TaskData.prototype, "isFinished", {
            get: function () {
                var finish = false;
                if (this.isMainTask) {
                    finish = this.progress >= this.mainConfig.goal;
                }
                else if (this.config) {
                    finish = this.progress >= this.config.goal;
                }
                return finish;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TaskData.prototype, "isMainTask", {
            /**
             * 当前任务是主线任务
             */
            get: function () {
                if (this.config == null) {
                    return false;
                }
                return this.config.type == EAchievementType.mainTask;
            },
            enumerable: true,
            configurable: true
        });
        //计算客户端进度
        TaskData.prototype.calClientProgress = function () {
            if (this.mainConfig) {
                switch (this.mainConfig.require) {
                    case Games.MainTaskRequireType.RequireType_1_MakeBuild:
                        this.progress = Game.moduleModel.task.clientGetBuildRoomProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_2_UpgradeBuild:
                        this.progress = Game.moduleModel.task.clientGetBuildUpgradeProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_3_UpgradeActor:
                        this.progress = Game.moduleModel.task.clientGetUpgradeActorTimesProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_4_NoseActor:
                        this.progress = Game.moduleModel.task.clientGetNoseActorProgress();
                        break;
                    case Games.MainTaskRequireType.RequireType_5_StreetPublicize:
                        this.progress = Game.moduleModel.task.clientGetStreetPublicizeProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_6_RoadShow:
                        this.progress = Game.moduleModel.task.clientGetRoadShowProgress();
                        break;
                    case Games.MainTaskRequireType.RequireType_7_CityFinish:
                        this.progress = Game.moduleModel.task.clientGetCityFinishProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_8_TaskMovie: //服务端做
                        break;
                    case Games.MainTaskRequireType.RequireType_9_SeeMovieReward: //查看收益
                        this.progress = Game.moduleModel.task.clientGetSeeMovieReward();
                        break;
                    case Games.MainTaskRequireType.RequireType_10_GetMovieReward: //服务端做
                        break;
                    case Games.MainTaskRequireType.RequireType_11_UpgradeAttention: //服务端做
                        break;
                    case Games.MainTaskRequireType.RequireType_12_AppointActor: //服务端做
                        this.progress = Game.moduleModel.task.clientGetAmbassadorNumProgress(this.mainConfig.r_value);
                        break;
                    case Games.MainTaskRequireType.RequireType_13_ChooseFocusPointCity: //服务端做
                        this.progress = Game.moduleModel.task.clientChooseFoucePointCityProgress();
                        break;
                    case Games.MainTaskRequireType.RequireType_14_GetCityReward: //服务端做
                        break;
                    case Games.MainTaskRequireType.RequireType_20_OpenRank: //打开排行榜
                        this.progress = Game.moduleModel.task.clientGetOpenRankWindow();
                        break;
                    default:
                        break;
                }
            }
        };
        Object.defineProperty(TaskData.prototype, "mainTaskDesc", {
            //获取主线任务描述
            get: function () {
                var desc = this.config.name + format(" ({0}/{1})", this.progress, this.mainConfig.goal);
                return desc;
            },
            enumerable: true,
            configurable: true
        });
        return TaskData;
    }());
    Games.TaskData = TaskData;
})(Games || (Games = {}));
//# sourceMappingURL=TaskData.js.map