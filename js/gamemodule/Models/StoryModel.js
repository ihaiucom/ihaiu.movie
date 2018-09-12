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
    // 剧本 数据模型
    //----------------------
    var StoryModel = /** @class */ (function (_super) {
        __extends(StoryModel, _super);
        function StoryModel() {
            var _this = _super.call(this) || this;
            //总星级数
            _this.totalStarNum = 0;
            //完成剧本挑战
            _this.totalCompleteStoryNum = 0;
            //
            _this.timeDurationOut = 0;
            //
            _this.resetFindTimeOut = 0;
            _this.storylist = new Array();
            _this.storyDict = new Dictionary();
            _this.storyUUidDict = new Dictionary();
            _this.storySuitlist = new Array();
            _this.storySuitDict = new Dictionary();
            _this.storySuitUUidDict = new Dictionary();
            _this.finishDict = new Dictionary();
            _this.totalStarNum = 0;
            return _this;
        }
        StoryModel.prototype.setup = function () {
            clearTimeout(this.timeDurationOut);
            clearTimeout(this.resetFindTimeOut);
            this.resetSou();
            this.resetFindTime();
        };
        //重置时间
        StoryModel.prototype.resetFindTime = function () {
            //
            var preTime = User.info.lastTimeFindStory;
            var nowTime = Game.time.serverSeconds;
            var nextTime = preTime + GlobalConfig.getValue(GlobalKey.story_stack_cd);
            if (nowTime < nextTime) {
                var timeDuration = nextTime - nowTime + 2;
                this.resetFindTimeOut = setTimeout(function () {
                    Game.event.dispatch(GameEventKey.GameEventKey_ResetFindStoryTime);
                }, timeDuration * 1000);
            }
        };
        ////次数
        StoryModel.prototype.resetSou = function () {
            if (Game.time.checkNewDayToRefrush(User.info.lastResetTime, 0)) {
                User.info.findStoryTime = 0;
            }
            else {
                // //重置小时
                var resetHour = 0; //22
                var curr = Game.time.serverMilliseconds;
                var d = new Date();
                d.setTime(curr);
                d.setMinutes(0);
                d.setSeconds(0);
                var hour = d.getHours();
                d.setHours(resetHour);
                if (hour >= resetHour) {
                    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
                }
                var currSecond = Game.time.serverSeconds;
                var nextSecond = Math.floor(d.getTime() / 1000);
                var timeDuration = nextSecond - currSecond;
                this.timeDurationOut = setTimeout(function () {
                    User.info.findStoryTime = 0;
                    Game.event.dispatch(GameEventKey.GameEventKey_ResetFindStoryTime);
                }, timeDuration * 1000);
            }
        };
        /**
         * 通过协议格式化数据
         * @param msg
         */
        StoryModel.prototype.addStoryByProto = function (msg) {
            var data = this.getStoryDataByUUid(msg.uuid);
            var has = true;
            if (data == null) {
                data = new Games.StoryData();
                has = false;
            }
            data.id = msg.storyId;
            data.uuid = msg.uuid;
            data.status = msg.status;
            data.maxScore = msg.maxScore;
            data.progress = msg.progress;
            data.shootLastTime = msg.shootLastTime;
            data.storyProgressInfo = msg.storyProgressInfo;
            if (data.config == null) {
                console.error("没有剧本配置 " + data.id);
                return;
            }
            if (has == false) {
                this.totalStarNum += data.config.starNumber;
            }
            var alreadyFinish = this.finishDict.hasKey(data.id);
            if (data.isFinish && alreadyFinish == false) {
                this.totalCompleteStoryNum++;
            }
            this.addStoryData(data);
        };
        /**
         *
         * @param msg 剧本组数据
         */
        StoryModel.prototype.addStorySuitByProto = function (msg) {
            var data = this.getStorySuitData(msg.storySuitId);
            if (data == null) {
                data = new Games.StorySuitData();
            }
            data.progress = msg.progress;
            data.progress2 = msg.progress2;
            data.status = msg.status;
            data.id = msg.storySuitId;
            if (this.storySuitDict.hasKey(msg.storySuitId) == false) {
                this.storySuitlist.push(data);
            }
            this.storySuitDict.add(msg.storySuitId, data);
            this.storySuitUUidDict.add(msg.uuid, data);
        };
        /**
         *
         * @param id 数据
         */
        StoryModel.prototype.getStorySuitData = function (id) {
            return this.storySuitDict.getValue(id);
        };
        /**
         *
         * @param id 数据
         */
        StoryModel.prototype.getStorySuitDataByUUid = function (uuid) {
            return this.storySuitUUidDict.getValue(uuid);
        };
        /**
         * 移除剧本库
         * @param uuid
         */
        StoryModel.prototype.removeStorySuitData = function (uuid) {
            var data = this.getStorySuitDataByUUid(uuid);
            if (data) {
                this.storySuitDict.remove(data.id);
                this.storySuitUUidDict.remove(uuid);
            }
        };
        /**
         * 移除剧本通过uuid
         * @param uuid
         */
        StoryModel.prototype.removeStoryByUUid = function (uuid) {
            var story = this.getStoryDataByUUid(uuid);
            if (story) {
                this.removeStory(story);
            }
        };
        /**
         * 移除剧本通过id
         * @param id
         */
        StoryModel.prototype.removeStoryByid = function (id) {
            var story = this.getStoryData(id);
            if (story) {
                this.removeStory(story);
            }
        };
        /**
         * 从列表中移除
         * @param story 剧本数据
         */
        StoryModel.prototype.removeStory = function (story) {
            this.storyDict.remove(story.id);
            this.storyUUidDict.remove(story.uuid);
            var index = this.storylist.indexOf(story);
            if (index >= 0) {
                this.storylist.splice(index, 1);
            }
        };
        /**
         * 添加到集合中去
         * @param data 数据
         */
        StoryModel.prototype.addStoryData = function (data) {
            var has = this.hasStoryData(data.id);
            if (has == false) {
                this.storylist.push(data);
                this.storyUUidDict.add(data.uuid, data);
                this.storyDict.add(data.id, data);
            }
        };
        /**
         * 是否含有此剧本
         * @param id
         */
        StoryModel.prototype.hasStoryData = function (id) {
            return this.storyDict.hasKey(id);
        };
        /**
         * 是否含有此剧本
         * @param id
         */
        StoryModel.prototype.hasStoryDataByUUid = function (uuid) {
            return this.storyUUidDict.hasKey(uuid);
        };
        /**
         * 通过uuid获取剧本数据
         * @param uuid
         */
        StoryModel.prototype.getStoryDataByUUid = function (uuid) {
            return this.storyUUidDict.getValue(uuid);
        };
        /**
         * 通过id获取剧本数据
         * @param id
         */
        StoryModel.prototype.getStoryData = function (id) {
            return this.storyDict.getValue(id);
        };
        /**
         * 获取所有剧本集合
         */
        StoryModel.prototype.getStoryList = function () {
            return this.storylist;
        };
        /**
         * 解锁剧本的个数
         */
        StoryModel.prototype.getTotalStoryNum = function () {
            return this.storylist.length;
        };
        /**
         * 获取当前剧本成就中的数据
         */
        StoryModel.prototype.getStoryAchieveList = function () {
            var configs = [];
            for (var index = 1; index < 4; index++) {
                // let list = Game.config.task.getTasksByType(index);
                // if (list)
                // {
                //     for (var index = 0; index < list.length; index++)
                //     {
                //         var config = list[index];
                //         // if (config)
                //         // {
                //         // }
                //     }
                // }
            }
            return configs;
        };
        Object.defineProperty(StoryModel.prototype, "isFindMax", {
            /**
             * 搜罗是否到最大次数
             */
            get: function () {
                var b = User.info.findStoryTime >= GlobalConfig.getValue(GlobalKey.story_stack_daily_times);
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryModel.prototype, "isClearCdUnlock", {
            /**
             * 是否清除cd开放
             */
            get: function () {
                var blockStreetLevel = Game.config.global.getConfig(GlobalKey.story_stack_cd_block_level).value;
                var b = User.info.stall >= blockStreetLevel;
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryModel.prototype, "isRed", {
            //是否有红点
            get: function () {
                var isUnlock = Game.config.menu.getConfig(Games.MenuId.StoryLibrary).isUnlock;
                var b = false;
                if (isUnlock) {
                    if ((this.isFindMax == false && this.remainTimers <= 0) || Game.moduleModel.task.isRedStoryAchievement) {
                        b = true;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryModel.prototype, "remainTimers", {
            //剩余时间
            get: function () {
                //
                var resetTime = 0;
                //
                var preTime = User.info.lastTimeFindStory;
                var nowTime = Game.time.serverSeconds;
                var nextTime = preTime + GlobalConfig.getValue(GlobalKey.story_stack_cd);
                if (nowTime < nextTime) {
                    resetTime = nextTime - nowTime;
                }
                return resetTime;
            },
            enumerable: true,
            configurable: true
        });
        StoryModel.prototype.getStorySuitList = function () {
            this.storySuitlist.sort(function (a, b) { return a.id - b.id; });
            return this.storySuitlist;
        };
        return StoryModel;
    }(Games.MModel));
    Games.StoryModel = StoryModel;
})(Games || (Games = {}));
//# sourceMappingURL=StoryModel.js.map