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
    //=========================
    // 验证基类
    //-------------------------
    var MenuValidate = /** @class */ (function () {
        function MenuValidate() {
            this.dict = new Dictionary();
        }
        /**
         * 获取单例实例
         */
        MenuValidate.getInstance = function () {
            var Class = this;
            if (Class.__instance == null) {
                Class.__instance = new Class();
                Class.__instance.install();
            }
            return Class.__instance;
        };
        MenuValidate.prototype.validate = function (menuId) {
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            return true;
        };
        MenuValidate.prototype.add = function (menuId, fun) {
            this.dict.add(menuId, fun);
        };
        MenuValidate.prototype.install = function () {
        };
        return MenuValidate;
    }());
    Games.MenuValidate = MenuValidate;
    //=========================
    // 验证是否开放
    //-------------------------
    var MenuValidateOpening = /** @class */ (function (_super) {
        __extends(MenuValidateOpening, _super);
        function MenuValidateOpening() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuValidateOpening.prototype.install = function () {
        };
        MenuValidateOpening.prototype.validate = function (menuId) {
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            var unlockConfig = Game.config.unlock.getConfig(menuId);
            if (unlockConfig) {
                switch (unlockConfig.open_type) {
                    case Games.UnlockType.None:
                        return true;
                    case Games.UnlockType.Level:
                        return User.info.level >= unlockConfig.open_data;
                    case Games.UnlockType.BuildingLevel:
                        return Game.moduleModel.building.validataBuildLevel(unlockConfig.open_data);
                    case Games.UnlockType.BlockLevel:
                        return Game.moduleModel.street.validataBlockLevelId(unlockConfig.open_data);
                }
            }
            return _super.prototype.validate.call(this, menuId);
        };
        return MenuValidateOpening;
    }(MenuValidate));
    Games.MenuValidateOpening = MenuValidateOpening;
    //=========================
    // 验证是否解锁
    //-------------------------
    var MenuValidateUnlock = /** @class */ (function (_super) {
        __extends(MenuValidateUnlock, _super);
        function MenuValidateUnlock() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuValidateUnlock.prototype.install = function () {
        };
        MenuValidateUnlock.prototype.validate = function (menuId) {
            return MenuValidateOpening.getInstance().validate(menuId);
        };
        return MenuValidateUnlock;
    }(MenuValidate));
    Games.MenuValidateUnlock = MenuValidateUnlock;
    //=========================
    // 验证是否可以打开
    //-------------------------
    var MenuValidateEnableOpen = /** @class */ (function (_super) {
        __extends(MenuValidateEnableOpen, _super);
        function MenuValidateEnableOpen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuValidateEnableOpen.prototype.install = function () {
            this.dict.add(Games.MenuId.Fans, this.fansEnableOpen);
            this.dict.add(Games.MenuId.Official, this.officialEnableOpen);
            this.dict.add(Games.MenuId.Meeting, this.meetingEnableOpen);
            this.dict.add(Games.MenuId.Order, this.orderEnableOpen);
        };
        MenuValidateEnableOpen.prototype.validate = function (menuId) {
            switch (menuId) {
                case Games.MenuId.War:
                    if (Game.moduleModel.street.canSign) {
                        Game.system.toastText(Games.TEXT.CinemaSignTip);
                    }
                    return !Game.moduleModel.street.canSign;
            }
            return _super.prototype.validate.call(this, menuId);
        };
        //会议是否可以打开
        MenuValidateEnableOpen.prototype.meetingEnableOpen = function () {
            var b = false;
            var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Meeting);
            if (isBuild) {
                var meetingData = Game.moduleModel.meeting.getMeetingData();
                if (meetingData) {
                    //会议数量
                    var nextNum = meetingData.nextMeetingNum;
                    if (nextNum <= 0) {
                        //提示下一个会议到来的时间
                        Game.system.toastMsg(MsgKey.meeting_time, Games.TimeHelper.TimeFormat4(meetingData.nextMeetingComeTime));
                    }
                    else {
                        b = true;
                    }
                }
            }
            else {
                Game.system.toastText(Games.TEXT.Lock);
            }
            return b;
        };
        //公务是否可以打开
        MenuValidateEnableOpen.prototype.officialEnableOpen = function () {
            var b = false;
            var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Office);
            if (isBuild) {
                var businessData = Game.moduleModel.business.getBusinessData();
                if (businessData) {
                    if (businessData.isMaxDaily) {
                        //提示阅读到最大次数
                        Game.system.toastMsg(MsgKey.business_down);
                    }
                    else {
                        //公务数量
                        var nextBusinessNum = businessData.nextBusinessNum;
                        if (nextBusinessNum <= 0) {
                            //提示下一个公务到来的时间
                            Game.system.toastMsg(MsgKey.business_countdown, Games.TimeHelper.TimeFormat4(businessData.nextBusinessComeTime));
                        }
                        else {
                            b = true;
                        }
                    }
                }
            }
            else {
                Game.system.toastText(Games.TEXT.Lock);
            }
            return b;
        };
        //粉丝是否可以打开
        MenuValidateEnableOpen.prototype.fansEnableOpen = function () {
            var b = false;
            var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Reception);
            if (isBuild) {
                var visitData = Game.moduleModel.visit.getVisitData();
                if (visitData) {
                    //探班数量
                    var nextFans = visitData.nextFansNum;
                    if (nextFans <= 0) {
                        Game.system.toastMsg(MsgKey.visit_countdown, Games.TimeHelper.TimeFormat4(visitData.nextFansComeTime));
                    }
                    else if (visitData.isWaiting) {
                        Game.system.toastText(Games.TEXT.VisitHaveOtherFansWaiting);
                    }
                    else {
                        if (Game.moduleModel.actor.hasCanVisitActor) {
                            if (Game.moduleModel.secretary.isAutoVisit == false) {
                                b = true;
                            }
                            else {
                                Game.system.toastText(Games.TEXT.ActorAutoVisit);
                            }
                            Game.protosender.manageVisit.StartVisit();
                        }
                        else {
                            Game.system.toastMsg(MsgKey.visit_noone);
                        }
                    }
                }
            }
            else {
                Game.system.toastText(Games.TEXT.Lock);
            }
            return b;
        };
        //订单是否
        MenuValidateEnableOpen.prototype.orderEnableOpen = function () {
            var b = false;
            var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
            if (isBuild) {
                b = true;
            }
            else {
                Game.system.toastText(Games.TEXT.Lock);
            }
            return b;
        };
        return MenuValidateEnableOpen;
    }(MenuValidate));
    Games.MenuValidateEnableOpen = MenuValidateEnableOpen;
    //=========================
    // 验证红点
    //-------------------------
    var MenuValidateRed = /** @class */ (function (_super) {
        __extends(MenuValidateRed, _super);
        function MenuValidateRed() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MenuValidateRed.prototype.install = function () {
            // this.add(MenuId.ArtistList, this.ArtistList);
            this.add(Games.MenuId.Manage, this.getManageRed);
            this.add(Games.MenuId.Run, this.getRunRed);
        };
        // ArtistList(): boolean
        // {
        // 	return Game.moduleModel.actor.isCanNoseActor;
        // }
        //管理
        MenuValidateRed.prototype.getManageRed = function () {
            return Game.moduleModel.story.isRed;
        };
        //经营
        MenuValidateRed.prototype.getRunRed = function () {
            return Game.moduleModel.order.redNum > 0 || Game.moduleModel.visit.isRed || Game.moduleModel.meeting.isRed || Game.moduleModel.business.isRed || Game.moduleModel.business.isRed;
        };
        MenuValidateRed.prototype.validate = function (menuId) {
            switch (menuId) {
                // 艺人
                case Games.MenuId.ArtistList:
                    return Game.moduleModel.actor.isCanNoseActor;
                // 拍摄
                case Games.MenuId.War:
                    return Game.moduleModel.warData.realLicenceNum;
                //生产
                case Games.MenuId.Produce:
                    return Game.moduleModel.produce.hasLineOutputFull;
                // 剧本
                case Games.MenuId.StoryLibrary:
                    return Game.moduleModel.story.isRed;
                // 订单
                case Games.MenuId.Order:
                    return Game.moduleModel.order.redNum;
                // 粉丝
                case Games.MenuId.Fans:
                    return Game.moduleModel.visit.isRed;
                // 会议
                case Games.MenuId.Meeting:
                    return Game.moduleModel.meeting.isRed;
                // 公务
                case Games.MenuId.Official:
                    return Game.moduleModel.business.isRed;
                // 日常任务
                case Games.MenuId.Mission:
                    return Game.moduleModel.mission.getRead();
                case Games.MenuId.Bag:
                    return Game.moduleModel.bag.RedNum;
                // 七日活动
                case Games.MenuId.Event:
                    return Game.moduleModel.activity.waitForGetNum > 0;
                // 签到福利
                case Games.MenuId.Weal:
                    return !Game.moduleModel.activity.curIsSign || Game.moduleModel.secretary.isCanGetWelf;
                // 合作任务红点提示
                case Games.MenuId.Cooperation:
                    return Game.moduleModel.cooperation.isHaveRedTip || Game.moduleModel.cooperation.isRewardBoxRedTip || Game.moduleModel.cooperation.isRewardTaskRedTip;
                case Games.MenuId.Mail:
                    return Game.moduleModel.mail.RedNum;
                case Games.MenuId.Shop:
                    return Game.moduleModel.shop.RedNum;
                case Games.MenuId.Rank:
                    return Game.moduleModel.rank.RedNum;
                case Games.MenuId.Street:
                    return Game.moduleModel.street.RedNum;
                case Games.MenuId.Market:
                    return Game.moduleModel.market.RedNum;
            }
            if (this.dict.hasKey(menuId)) {
                return this.dict.getValue(menuId).apply(this);
            }
            return false;
        };
        return MenuValidateRed;
    }(MenuValidate));
    Games.MenuValidateRed = MenuValidateRed;
})(Games || (Games = {}));
//# sourceMappingURL=MenuValidate.js.map