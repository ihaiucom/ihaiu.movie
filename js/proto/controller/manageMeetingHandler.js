/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
    /**
     * 经营会议
     */
    var manageMeetingHandler = /** @class */ (function (_super) {
        __extends(manageMeetingHandler, _super);
        function manageMeetingHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageMeeting;
            return _this;
        }
        /**
         * 领取收益
         */
        manageMeetingHandler.prototype.GetReward = function (msg) {
            Game.moduleModel.meeting.meetingCompanyName = "";
            Game.moduleModel.meeting.companyDelegateAvatarId = 0;
            Game.menu.close(Games.MenuId.Meeting);
            var rewardItems = Game.moduleModel.meeting.rewardItems;
            function next() {
                var data = Game.moduleModel.meeting.getMeetingData();
                if (data) {
                    var num = data.nextMeetingNum;
                    if (num > 0) {
                        Game.system.confirmText(format(Games.TEXT.MeetingNext, Game.moduleModel.meeting.meetingCompanyName), Games.TEXT.MeetingNextMeet, null, function () {
                            var unlock = Games.MenuValidateUnlock.getInstance().validate(Games.MenuId.Meeting);
                            if (!unlock) {
                                Game.system.toastText(Games.TEXT.Lock);
                                return;
                            }
                            var enableOpen = Games.MenuValidateEnableOpen.getInstance().validate(Games.MenuId.Meeting);
                            if (enableOpen) {
                                Game.menu.open(Games.MenuId.Meeting, Games.MeetingPanelType.AskPirce);
                            }
                        });
                    }
                }
            }
            if (msg.type == 0) {
                if (rewardItems) {
                    Game.system.openAwardsAlert(rewardItems, Games.TEXT.MeetingRewardTitle, function () {
                        next();
                    });
                }
                else {
                    next();
                }
            }
            else {
                next();
            }
        };
        /**
         * 加价
         */
        manageMeetingHandler.prototype.Markup = function (msg) {
        };
        return manageMeetingHandler;
    }(Games.ProtoHandler));
    Games.manageMeetingHandler = manageMeetingHandler;
})(Games || (Games = {}));
//# sourceMappingURL=manageMeetingHandler.js.map