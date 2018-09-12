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
    var MeetingModel = /** @class */ (function (_super) {
        __extends(MeetingModel, _super);
        function MeetingModel() {
            var _this = _super.call(this) || this;
            _this.isAutoVisit = false;
            _this._companyAvatarId = 0;
            return _this;
        }
        MeetingModel.prototype.getMeetingData = function () {
            return this.meetingData;
        };
        /**
         * 根据服务器传的信息解析
         * @param msg 数据
         */
        MeetingModel.prototype.addMeetingData = function (msg) {
            if (this.meetingData == null) {
                this.meetingData = new Games.MeetingData();
            }
            this.meetingData.uuid = msg.uuid;
            this.meetingData.id = msg.meetID;
            this.meetingData.randResult = msg.randResult;
            this.meetingData.lastTime = msg.lastTime;
            this.meetingData.lineLimit = msg.lineLimit;
            this.meetingData.intervalTime = msg.intervalTime;
            this.meetingData.startToMaxTime();
            return this.meetingData;
        };
        Object.defineProperty(MeetingModel.prototype, "meetingCompanyName", {
            get: function () {
                if (isNullOrEmpty(this._meetingCompanyName)) {
                    this._meetingCompanyName = getRandomRoleName();
                }
                return this._meetingCompanyName;
            },
            set: function (value) {
                this._meetingCompanyName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingModel.prototype, "companyGoal", {
            //目的
            get: function () {
                if (this._companyGoals == null) {
                    this._companyGoals = [Game.config.msg.getTxt(MsgKey.meeting_goal1), Game.config.msg.getTxt(MsgKey.meeting_goal2), Game.config.msg.getTxt(MsgKey.meeting_goal3), Game.config.msg.getTxt(MsgKey.meeting_goal4)];
                }
                var s = this._companyGoals[Math.floor(Math.random() * this._companyGoals.length)];
                return s;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingModel.prototype, "companyDelegateAvatarId", {
            //谈判代表头像
            get: function () {
                if (this._companyAvatarId <= 0) {
                    this._companyAvatarId = 7300 + Math.max(1, Math.ceil(14 * Math.random()));
                }
                return this._companyAvatarId;
            },
            set: function (value) {
                this._companyAvatarId = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MeetingModel.prototype, "isRed", {
            //红点数据
            get: function () {
                var b = false;
                var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Meeting);
                if (isBuild) {
                    if (this.meetingData) {
                        b = this.meetingData.isMax;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        return MeetingModel;
    }(Games.MModel));
    Games.MeetingModel = MeetingModel;
})(Games || (Games = {}));
//# sourceMappingURL=MeetingModel.js.map