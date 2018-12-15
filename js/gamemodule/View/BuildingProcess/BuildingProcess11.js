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
    var PerformType = Games.PerformType;
    //-----------------------------
    // 会议室
    //-----------------------------
    var BuildingProcess11 = /** @class */ (function (_super) {
        __extends(BuildingProcess11, _super);
        function BuildingProcess11() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.npcMoveX = 490;
            _this.assistantMoveX = 213;
            _this.npcChairY = 55;
            _this.assitantChairY = 55;
            _this.scaleChair = 0.9;
            _this.npcList = [101, 102, 103, 104];
            _this.isNpcSitdown = false;
            _this.isAssistantSitdown = false;
            _this.dialogIndex = 0;
            return _this;
        }
        //初始化   
        BuildingProcess11.prototype.onInit = function () {
            console.log("RoomProcesser -> " + getClassName(this));
            this.dialogList = this.meetingDialog;
            Game.event.add(GameEventKey.GameEventKey_MeetingStep, this.onMeetingStep, this);
            Game.event.add(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
            //初始npc随机列表
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1051).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1052).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1053).value);
            this.npcList.push(Game.config.global.getConfig(GlobalKey.KEY_1054).value);
        };
        BuildingProcess11.prototype.dispose = function () {
            this.npcList.length = 0;
            Game.event.remove(GameEventKey.GameEventKey_MeetingStep, this.onMeetingStep, this);
            Game.event.remove(GameEventKey.GameEventKey_EnabledScrollMain, this.onEnabledScrollMain, this);
        };
        BuildingProcess11.prototype.start = function () {
            var _this = this;
            setTimeout(function () {
                _this.startMeeting();
            }, 1000);
        };
        BuildingProcess11.prototype.end = function () {
            var _this = this;
            setTimeout(function () {
                _this.endMeeting();
            }, 5000);
        };
        BuildingProcess11.prototype.addEventListener = function () {
            Games.DialogManager.sDialogFinish.add(this.onDialogFinish, this);
        };
        BuildingProcess11.prototype.removeEventListener = function () {
            Games.DialogManager.sDialogFinish.remove(this.onDialogFinish, this);
        };
        //开始会议
        BuildingProcess11.prototype.startMeeting = function () {
            if (!Game.moduleModel.building.isOnMeeting) {
                console.log("startMeeting");
                this.addEventListener();
                Game.moduleModel.building.isOnMeeting = true;
                this.refRoom.executeLeaveRoomForEach(true);
                this.creatNpc();
                this.creatAssistant();
            }
        };
        //结束会议
        BuildingProcess11.prototype.endMeeting = function () {
            if (this.curDialog) {
                this.curDialog.endEvent();
                this.curDialog = null;
            }
            if (this.npc) {
                this.isNpcSitdown = false;
                this.npc.stand(null, this.npc.x, this.npc.y + this.npcChairY);
                this.npc.resetScale();
                this.npc.leave(false);
                this.npc = null;
            }
            if (this.assistant) {
                this.isAssistantSitdown = false;
                this.assistant.stand(null, this.assistant.x, this.assistant.y + this.assitantChairY);
                this.assistant.resetScale();
                this.assistant.leave(false);
                this.assistant = null;
            }
            Game.moduleModel.building.isOnMeeting = false;
            this.removeEventListener();
        };
        BuildingProcess11.prototype.onMeetingStep = function (step) {
            console.log("onMeetingStep= " + step);
            this.dialogIndex = step;
            this.startMeeting();
            if (this.isNpcSitdown && this.isAssistantSitdown) {
                if (this.curDialog) {
                    this.curDialog.endEvent(false);
                    this.curDialog = null;
                }
                this.curDialog = Games.DialogManager.startDialog(this.assistant, this.npc, this.nextMeetingDialog(), PerformType.Meeting);
            }
        };
        BuildingProcess11.prototype.onEnabledScrollMain = function (enable, roomType) {
            if (roomType == Games.RoomType.Meeting) {
                if (enable) {
                    this.endMeeting();
                    console.log("endMeeting");
                }
            }
        };
        BuildingProcess11.prototype.onDialogFinish = function (performType) {
            if (performType == PerformType.Meeting) {
                // this.endMeeting();
                // DialogManager.startDialog(this.npc, this.assistant, this.nextMeetingDialog(), PerformType.Meeting);
            }
        };
        //创建探班NPC
        BuildingProcess11.prototype.creatNpc = function (direction) {
            var _this = this;
            if (direction === void 0) { direction = Games.DirtionType.Left; }
            var npcId = this.npcList[Random.range(0, this.npcList.length)];
            var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
            aInfo.idleName = "zuoxia1";
            this.npc = Game.creator.creatEUnit(aInfo);
            this.refRoom.addAvatar(this.npc, this.refRoom.mainView.m_buildScene.m_avatarContainer0);
            this.npc.enterTo(this.refRoom.roomWidth + 150, this.refRoom.roomHeight - 40, Games.DirtionType.Left);
            this.npc.moveTo(this.npcMoveX, false, Handler.create(this, function () {
                var scale = _this.npc.unitModel.scaleFactor;
                _this.npc.setScale(scale * _this.scaleChair);
                _this.npc.sitDown(_this.npc.x, _this.npc.y - _this.npcChairY);
                //  
                _this.isNpcSitdown = true;
                if (_this.isAssistantSitdown) {
                    if (!_this.curDialog) {
                        _this.curDialog = Games.DialogManager.startDialog(_this.assistant, _this.npc, _this.nextMeetingDialog(), PerformType.Meeting);
                    }
                }
            }));
            // let avatar: Avatar = Games.Avatar.Creat(aInfo, (AvatarInfo) =>
            // {
            //     this.npc = avatar;
            //     this.refRoom.addAvatar(avatar, this.refRoom.m_buildScene.m_avatarContainer0);
            //     this.npc.enterTo(this.refRoom.roomWidth + 150, this.refRoom.roomHeight - 40, DirtionType.Left);
            //     this.npcTween = this.npc.moveTo(this.npcMoveX, false, Handler.create(this, () =>
            //     {
            //         let scale = this.npc.scaleFactor;
            //         this.npc.scale(scale * this.scaleChair, scale * this.scaleChair);
            //         this.npc.sitDown(this.npc.x, this.npc.y - this.npcChairY);
            //         //  
            //         this.isNpcSitdown = true;
            //         if (this.isAssistantSitdown)
            //         {
            //             this.curDialog = DialogManager.startDialog(this.npc, this.assistant, this.nextMeetingDialog(), PerformType.Meeting);
            //         }
            //     }));
            // });
        };
        BuildingProcess11.prototype.creatAssistant = function (direction) {
            var _this = this;
            if (direction === void 0) { direction = Games.DirtionType.Left; }
            var assistantId = Game.config.global.getConfig(GlobalKey.KEY_1055).value;
            var aInfo = Games.AvatarInfo.creatByNpcId(assistantId);
            aInfo.idleName = "zuoxia1";
            this.assistant = Game.creator.creatEUnit(aInfo);
            this.refRoom.addAvatar(this.assistant, this.refRoom.mainView.m_buildScene.m_avatarContainer0);
            this.assistant.enterTo(-150, this.refRoom.roomHeight - 40, Games.DirtionType.Right);
            this.assistant.moveTo(this.assistantMoveX, false, Handler.create(this, function () {
                var scale = _this.assistant.unitModel.scaleFactor;
                _this.assistant.setScale(scale * _this.scaleChair);
                _this.assistant.sitDown(_this.assistant.x, _this.assistant.y - _this.assitantChairY);
                _this.isAssistantSitdown = true;
                if (_this.isNpcSitdown) {
                    if (!_this.curDialog)
                        _this.curDialog = Games.DialogManager.startDialog(_this.assistant, _this.npc, _this.nextMeetingDialog(), PerformType.Meeting);
                }
            }));
            // let avatar: Avatar = Games.Avatar.Creat(aInfo, (AvatarInfo) =>
            // {
            //     this.assistant = avatar;
            //     this.refRoom.addAvatar(avatar, this.refRoom.m_buildScene.m_avatarContainer0);
            //     this.assistant.enterTo(-150, this.refRoom.roomHeight - 40, DirtionType.Right);
            //     this.assistantTween = this.assistant.moveTo(this.assistantMoveX, false, Handler.create(this, () =>
            //     {
            //         let scale = this.assistant.scaleFactor;
            //         this.assistant.scale(scale * this.scaleChair, scale * this.scaleChair);
            //         this.assistant.sitDown(this.assistant.x, this.assistant.y - this.assitantChairY);
            //         this.isAssistantSitdown = true;
            //         if (this.isNpcSitdown)
            //         {
            //             this.curDialog = DialogManager.startDialog(this.npc, this.assistant, this.nextMeetingDialog(), PerformType.Meeting);
            //         }
            //     }));
            // });
        };
        Object.defineProperty(BuildingProcess11.prototype, "meetingDialog", {
            //获取对话列表
            get: function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Meeting;
                });
                return playActList;
            },
            enumerable: true,
            configurable: true
        });
        BuildingProcess11.prototype.nextMeetingDialog = function () {
            if (this.dialogIndex > this.dialogList.length - 1) {
                this.dialogIndex = 0;
            }
            return this.dialogList[this.dialogIndex].eventList;
        };
        BuildingProcess11.prototype.isNpc = function (avatarUid) {
            var avatar = this.refRoom.getAvatar(avatarUid);
            if (avatar) {
                return avatar.unitModel.info.type == Games.AvatarType.Npc;
            }
            return false;
        };
        BuildingProcess11.prototype.isAssistant = function (avatarUid) {
            var avatar = this.refRoom.getAvatar(avatarUid);
            if (avatar) {
                return avatar.unitModel.info.type == Games.AvatarType.Assistant;
            }
            return false;
        };
        return BuildingProcess11;
    }(Games.BaseBuildingProcess));
    Games.BuildingProcess11 = BuildingProcess11;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcess11.js.map