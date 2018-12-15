var Games;
(function (Games) {
    var MeetingData = /** @class */ (function () {
        function MeetingData() {
            this.tomaxTimeOut = 0;
        }
        Object.defineProperty(MeetingData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                if (value > 0) {
                    this.config = Game.config.meetingRewards.getConfig(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "nextMeetingNum", {
            //获取
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastTime;
                var duration = 0;
                if (nowTime > lastTime) {
                    duration = nowTime - lastTime;
                }
                var num = Math.floor(duration / this.intervalTime);
                num = Math.min(this.lineLimit, num);
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "nextMeetingComeTime", {
            //新公务到来的时间
            get: function () {
                var nowTime = Game.time.serverSeconds;
                var lastTime = this.lastTime + this.intervalTime;
                return Math.max(0, lastTime - nowTime);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "rewards", {
            //获取奖励
            get: function () {
                var item = new DTItemNum();
                item.itemId = this.config.rewards.itemId;
                var num = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Meeting, item.itemId, this.config.rewards.itemNum);
                item.itemNum = num;
                var expect = new DTItemNum();
                expect.itemId = EItemId.expect;
                num = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Meeting, expect.itemId, this.config.expect);
                expect.itemNum = num;
                var items = [item, expect];
                return items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "meetingMultipleRate", {
            //加成
            get: function () {
                var rate = 1;
                if (this.randResult > 0) {
                    rate = Game.config.meetingGame.getConfig(this.randResult).times.v1 / 100;
                }
                return rate;
            },
            enumerable: true,
            configurable: true
        });
        // 打点调用
        MeetingData.prototype.pireceIntoDaDianForMaidian = function (result) {
            var rat = 1;
            switch (this.randResult) {
                case 1001:
                case 1002:
                case 1003:
                case 1004:
                    rat = 3; // 200%
                    break;
                case 2001:
                case 2002:
                case 2003:
                    rat = 2; // 50%
                    break;
            }
            if (rat === 1) {
                return format("{0}&{1}&{2}", rat, "N", result);
            }
            else {
                return format("{0}&{1}&{2}", rat, this.resultIntoDaDian, result);
            }
        };
        Object.defineProperty(MeetingData.prototype, "resultIntoDaDian", {
            get: function () {
                var rate = 0;
                if (this.randResult > 0) {
                    rate = Game.config.meetingGame.getConfig(this.randResult).result;
                    switch (rate) {
                        case 1:
                            rate = 1;
                            break;
                        case 2:
                            rate = 0;
                            break;
                        case 3:
                            rate = -1;
                            break;
                        case 4:
                            rate = -2;
                            break;
                        default:
                            break;
                    }
                }
                return rate;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "resultRewards", {
            //获取最终奖励
            get: function () {
                var item = new DTItemNum();
                item.itemId = this.config.rewards.itemId;
                var num = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Meeting, item.itemId, this.config.rewards.itemNum);
                item.itemNum = Math.floor(num * this.meetingMultipleRate);
                var expect = new DTItemNum();
                expect.itemId = EItemId.expect;
                num = Game.moduleModel.building.getBuildEffectNum(Games.RoomType.Meeting, expect.itemId, this.config.expect);
                expect.itemNum = Math.floor(num * this.meetingMultipleRate);
                this.rewardData = [item, expect];
                return this.rewardData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingData.prototype, "costMoney", {
            //消耗
            get: function () {
                return Game.config.playerLevel.getConfig(User.info.level).cost;
            },
            enumerable: true,
            configurable: true
        });
        //开始定时器
        MeetingData.prototype.startToMaxTime = function () {
            //清除定时器
            if (this.tomaxTimeOut > 0) {
                clearTimeout(this.tomaxTimeOut);
                this.tomaxTimeOut = 0;
            }
            //当前时间
            var nowTime = Game.time.serverSeconds;
            var nextNum = this.nextMeetingNum;
            //
            if (nextNum < this.lineLimit) {
                var totalDuration = this.lineLimit * this.intervalTime;
                var nextTime = totalDuration + this.lastTime; //到满的时间戳
                if (nextTime > nowTime) {
                    var diffTime = nextTime - nowTime;
                    if (diffTime > 0) {
                        this.tomaxTimeOut = setTimeout(function () {
                            Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
                        }, diffTime * 1000);
                    }
                }
            }
            Game.event.dispatch(GameEventKey.GameEventKey_UpdateMainUIRed);
        };
        Object.defineProperty(MeetingData.prototype, "isMax", {
            //
            get: function () {
                return this.nextMeetingNum >= this.lineLimit;
            },
            enumerable: true,
            configurable: true
        });
        return MeetingData;
    }());
    Games.MeetingData = MeetingData;
})(Games || (Games = {}));
//# sourceMappingURL=MeetingData.js.map