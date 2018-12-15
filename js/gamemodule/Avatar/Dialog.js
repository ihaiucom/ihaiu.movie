var Games;
(function (Games) {
    var DialogEvent = /** @class */ (function () {
        function DialogEvent() {
            this.dialogId = 0;
            this.eventId = 0;
        }
        return DialogEvent;
    }());
    Games.DialogEvent = DialogEvent;
    var Dialog = /** @class */ (function () {
        function Dialog() {
            this.dialogId = 0;
            this.DELTA_TIME = 0.02; //秒
            this.elapseTime = 0;
            this.elapseTalkTime = 0;
            this.eventList = []; //事件列表
            this.currEventId = 0; //当前执行事件Id
            this.avatarList = [];
            this.currentIndex = -1;
            this.isDestroy = false;
        }
        Dialog.prototype.start = function (avatarA, avatarB, dialogs, performType) {
            this.performType = performType;
            this.eventList = dialogs;
            this.avatarList.length = 0;
            this.avatarList.push(avatarA);
            this.avatarList.push(avatarB);
            Laya.timer.clear(this, this.onTimeLoop);
            Laya.timer.loop(this.DELTA_TIME * 1000, this, this.onTimeLoop, null, true, true);
        };
        Dialog.prototype.onTimeLoop = function () {
            this.elapseTime += this.DELTA_TIME * 1000;
            if (this.currAction != null) {
                if (this.elapseTalkTime >= this.currAction.talkActionTime) {
                    this.curAvatar.hideTalk();
                    this.elapseTalkTime = 0;
                }
                if (this.elapseTime >= this.currAction.actionTime) {
                    this.nextEvent();
                }
            }
            else {
                this.nextEvent();
            }
        };
        Dialog.prototype.nextEvent = function () {
            if (this.eventList.length == 0) {
                this.endEvent(true);
                return;
            }
            if (this.currAction != null) {
                Games.DialogManager.sDialogEvent.dispatch(this.getDialogEvent());
            }
            this.currentIndex++;
            this.curAvatar = this.avatarList[this.currentIndex % 2];
            var target = this.avatarList[(this.currentIndex + 1) % 2];
            target.hideTalk();
            target.stand();
            this.elapseTime = 0;
            var event = this.eventList.splice(0, 1)[0];
            this.currEventId = event.evtId;
            this.currAction = event.actionInfo;
            this.curAvatar.playAction(this.currAction.actionId);
            //speak
            if (this.currAction.talkActionId != 0) {
                var speakCfg = Game.config.speak.getConfig(this.currAction.talkActionId);
                if (speakCfg) {
                    // let actorCfg = Game.config.actor.getConfig(target.id);
                    // let targetName = actorCfg == null ? "" : actorCfg.name;
                    this.curAvatar.setTalk(format(speakCfg.speak, this.currAction.talkParams));
                }
            }
        };
        Dialog.prototype.endEvent = function (emitEvent) {
            if (emitEvent === void 0) { emitEvent = true; }
            if (emitEvent) {
                Games.DialogManager.sDialogFinish.dispatch(this.performType);
                Games.DialogManager.sDialogEvent.dispatch(this.getDialogEvent());
            }
            this.dispose();
        };
        Dialog.prototype.dispose = function () {
            var _this = this;
            if (this.isDestroy)
                return;
            this.isDestroy = true;
            Laya.timer.clear(this, this.onTimeLoop);
            setTimeout(function () {
                _this.__dispose();
            }, this.DELTA_TIME * 1000); //延迟一帧销毁
        };
        Dialog.prototype.__dispose = function () {
            this.currAction = null;
            if (this.curAvatar) {
                this.curAvatar.stand();
                this.curAvatar = null;
            }
            this.avatarList.forEach(function (value, index, array) {
                value.hideTalk();
            });
            this.avatarList.length = 0;
        };
        //Dispatch data
        Dialog.prototype.getDialogEvent = function () {
            var data = new DialogEvent();
            data.dialogId = this.dialogId;
            data.eventId = this.currEventId;
            data.performType = this.performType;
            return data;
        };
        return Dialog;
    }());
    Games.Dialog = Dialog;
})(Games || (Games = {}));
//# sourceMappingURL=Dialog.js.map