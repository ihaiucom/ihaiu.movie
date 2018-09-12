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
    var TaskModel = /** @class */ (function (_super) {
        __extends(TaskModel, _super);
        function TaskModel() {
            var _this = _super.call(this) || this;
            //查看电影持续收益
            _this._seeMovieRewardNum = 0;
            //
            _this._openRankNum = 0;
            _this.taskTypeDict = new Dictionary();
            _this.taskTypeSortDict = new Dictionary();
            _this.tasklist = new Array();
            _this.taskDict = new Dictionary();
            _this.taskUUidDict = new Dictionary();
            _this.deleteTaskDict = new Dictionary();
            _this.mainTaskDict = new Dictionary();
            return _this;
        }
        Object.defineProperty(TaskModel.prototype, "seeMovieRewardNum", {
            get: function () {
                return this._seeMovieRewardNum;
            },
            set: function (value) {
                this._seeMovieRewardNum = value;
                this.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_9_SeeMovieReward);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TaskModel.prototype, "openRankNum", {
            get: function () {
                return this._openRankNum;
            },
            set: function (value) {
                this._openRankNum = value;
                this.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_20_OpenRank);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 通过uuid获取
         * @param uuid 服务器唯一id
         */
        TaskModel.prototype.getTaskDataByUUid = function (uuid) {
            return this.taskUUidDict.getValue(uuid);
        };
        /**
         * 获取删除掉的
         * @param uuid 服务器唯一id
         */
        TaskModel.prototype.getDelTaskDataByUUid = function (uuid) {
            return this.deleteTaskDict.getValue(uuid);
        };
        /**
         * 通过uuid获取
         * @param uuid 服务器唯一id
         */
        TaskModel.prototype.getTaskDataById = function (id) {
            return this.taskDict.getValue(id);
        };
        /**
         *
         * @param type
         */
        TaskModel.prototype.getTaskListByType = function (type, sort) {
            if (sort === void 0) { sort = true; }
            var list = this.taskTypeDict.getValue(type);
            var isSort = this.getisSortByType(type);
            if (isSort == false && sort && list) {
                this.taskTypeSortDict.add(type, true);
                if (type == EAchievementType.mainTask) {
                    list.sort(this.sortMainTaskData);
                }
                else {
                    list.sort(this.sortTaskData);
                }
            }
            return list;
        };
        /**
         * 根据类型获取主线任务
         * @param type mainTask 表里面的require字段
         */
        TaskModel.prototype.getMainTaskListByType = function (type) {
            var list = this.mainTaskDict.getValue(type);
            return list;
        };
        /**
         * 移除
         * @param uuid 服务器唯一id
         */
        TaskModel.prototype.removeTaskDataByUUid = function (uuid) {
            var data = this.taskUUidDict.getValue(uuid);
            if (data) {
                this.taskDict.remove(data.id);
                this.taskUUidDict.remove(uuid);
                //从类型列表中删除
                var list = this.taskTypeDict.getValue(data.type);
                var index = void 0;
                if (list) {
                    index = list.indexOf(data);
                    if (index >= 0) {
                        list.splice(index, 1);
                    }
                }
                //从主线任务列表中删除
                if (data.isMainTask && data.mainConfig) {
                    list = this.mainTaskDict.getValue(data.mainConfig.require);
                    if (list) {
                        index = list.indexOf(data);
                        if (index >= 0) {
                            list.splice(index, 1);
                        }
                    }
                }
                this.deleteTaskDict.add(data.uuid, data);
            }
        };
        /**
         *
         * @param msg
         */
        TaskModel.prototype.addTaskDataByProto = function (msg) {
            var data = this.getTaskDataByUUid(msg.uuid);
            if (data == null) {
                data = new Games.TaskData();
            }
            data.id = msg.cid;
            data.uuid = msg.uuid;
            data.state = msg.state;
            data.progress = msg.progress;
            data.type = msg.type;
            if (this.taskDict.hasKey(data.id) == false) {
                this.tasklist.push(data);
            }
            this.taskDict.add(data.id, data);
            this.taskUUidDict.add(data.uuid, data);
            //任务类型
            var list = this.getTaskListByType(data.type, false);
            if (list == null) {
                list = new Array();
                this.taskTypeDict.add(data.type, list);
            }
            //主线任务
            if (data.isMainTask && data.mainConfig) {
                var mainTaskList = this.getMainTaskListByType(data.mainConfig.require);
                if (mainTaskList == null) {
                    mainTaskList = new Array();
                    this.mainTaskDict.add(data.mainConfig.require, mainTaskList);
                }
                data.calClientProgress();
                if (mainTaskList.indexOf(data) == -1) {
                    mainTaskList.push(data);
                }
                //完成引导
                if (data.isFinished) {
                    Game.guide.clearGuide();
                    Game.guide.endGuide();
                }
            }
            if (list.indexOf(data) == -1) {
                list.push(data);
            }
            //排序
            this.taskTypeSortDict.add(data.type, false);
        };
        //是否已经排序
        TaskModel.prototype.getisSortByType = function (type) {
            var b = false;
            if (this.taskTypeSortDict.hasKey(type)) {
                b = this.taskTypeSortDict.getValue(type);
            }
            return b;
        };
        /**
         * 获取当前的剧本成就任务
         */
        TaskModel.prototype.getCurrentStoryTask = function () {
            var list = this.getTaskListByType(EAchievementType.story);
            return list;
        };
        /**
         * 获取当前主线任务
         */
        TaskModel.prototype.getCurrentMainTask = function () {
            var list = this.getTaskListByType(EAchievementType.mainTask);
            if (list && list.length > 0) {
                return list[0];
            }
            return null;
        };
        Object.defineProperty(TaskModel.prototype, "mainTaskId", {
            /**
             * 主线任务id
             */
            get: function () {
                var mainTask = this.getCurrentMainTask();
                var id = 0;
                if (mainTask) {
                    id = mainTask.id;
                }
                return id;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 外部更新客户端进度更新
         */
        TaskModel.prototype.clientUpdateMainTaskProgress = function (type) {
            var list = this.getMainTaskListByType(type);
            if (list) {
                var mainId = this.mainTaskId;
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    element.calClientProgress();
                    //更新进度
                    if (element.id == mainId) {
                        Game.event.dispatch(GameEventKey.GameEventKey_ClientUpdateMainTask);
                    }
                }
            }
        };
        // /**
        //  * 外部更新客户端进度更新
        //  */
        // public clientUpdateMainTaskProgress(type: MainTaskRequireType): void
        // {
        // 	let list: Array<TaskData> = this.getMainTaskListByType(type);
        // 	let mainId = this.mainTaskId;
        // 	for (var index = 0; index < list.length; index++)
        // 	{
        // 		var element = list[index];
        // 		element.calClientProgress();
        // 		//更新进度
        // 		if (element.id == mainId)
        // 		{
        // 			Game.event.dispatch(GameEventKey.GameEventKey_ClientUpdateMainTask);
        // 		}
        // 	}
        // }
        //排序
        TaskModel.prototype.sortTaskData = function (a, b) {
            return a.id - b.id;
        };
        //排序
        TaskModel.prototype.sortMainTaskData = function (a, b) {
            if (a.mainConfig && b.mainConfig) {
                return a.mainConfig.pre_quest - b.mainConfig.pre_quest;
            }
            return 0;
        };
        Object.defineProperty(TaskModel.prototype, "isRedStoryAchievement", {
            //是否有红点
            get: function () {
                var b = false;
                var list = this.getTaskListByType(EAchievementType.story, false);
                for (var index = 0; index < list.length; index++) {
                    var element = list[index];
                    b = element.isFinished;
                    if (b) {
                        break;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 客户端获取是否建筑房间
         * @param roomType 房间类型
         */
        TaskModel.prototype.clientGetBuildRoomProgress = function (roomType) {
            var progress = Game.moduleModel.building.hasBuildByType(roomType) ? 1 : 0;
            return progress;
        };
        /**
         * 客户端获取建筑房间升级次数
         * @param roomType 房间类型
         */
        TaskModel.prototype.clientGetBuildUpgradeProgress = function (roomType) {
            var progress = 0;
            if (Game.moduleModel.building.hasBuildByType(roomType)) {
                progress = Game.moduleModel.building.getRoomLevel(roomType);
            }
            return progress;
        };
        /**
         * 客户端获取艺人等级升到x级人数
         */
        TaskModel.prototype.clientGetUpgradeActorTimesProgress = function (lv) {
            var progress = 0;
            var actors = Game.moduleModel.actor.getActors();
            actors.forEach(function (element) {
                if (element.level >= lv) {
                    progress++;
                }
            });
            var hideAcotrs = Game.moduleModel.actor.getHideActors();
            hideAcotrs.forEach(function (element) {
                if (element.level >= lv) {
                    progress++;
                }
            });
            return progress;
        };
        /**
         * 客户端获取招募的艺人数量
         */
        TaskModel.prototype.clientGetNoseActorProgress = function () {
            var progress = Game.moduleModel.actor.getAllActorLen();
            return progress;
        };
        /**
         * 客户端获取街道宣传
         */
        TaskModel.prototype.clientGetStreetPublicizeProgress = function (id) {
            var progress = 0;
            if (id > 0) {
                progress = Game.moduleModel.market.IsTaskCityPointFinish(id) ? 1 : 0;
            }
            return progress;
        };
        /**
         * 客户端获取路演次数
         */
        TaskModel.prototype.clientGetRoadShowProgress = function () {
            var progress = Game.moduleModel.market.roadShowNum();
            return progress;
        };
        /**
         * 客户端获取占领城市
         */
        TaskModel.prototype.clientGetCityFinishProgress = function (id) {
            var progress = 0;
            if (id > 0) {
                progress = Game.moduleModel.market.IsTaskCityFinish(id) ? 1 : 0;
            }
            return progress;
        };
        /**
         * 客户端获取任命形象大使
         */
        TaskModel.prototype.clientGetAmbassadorNumProgress = function (id) {
            var progress = 0;
            if (id > 0) {
                progress = Game.moduleModel.market.TaskGetAmbassadorNum(id);
            }
            return progress;
        };
        /**
         * 客户端获取查看收益
         */
        TaskModel.prototype.clientGetSeeMovieReward = function () {
            return this.seeMovieRewardNum;
        };
        /**
         * 客户端获取打开排行榜
         */
        TaskModel.prototype.clientGetOpenRankWindow = function () {
            return this._openRankNum;
        };
        //
        TaskModel.prototype.isShowTaskPanel = function () {
            return Game.moduleModel.guide.isGuideFinished(100101);
        };
        return TaskModel;
    }(Games.MModel));
    Games.TaskModel = TaskModel;
})(Games || (Games = {}));
//# sourceMappingURL=TaskModel.js.map