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
     * 合作 数据模型
     */
    var CooperationModel = /** @class */ (function (_super) {
        __extends(CooperationModel, _super);
        function CooperationModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 玩家合作任务数据，服务器更新
            _this.cooperTaskData = null;
            // 公共邀请合作数据
            _this.cooperateData = null;
            // 
            _this.sAccountCooperateDataUpdate = new Signal();
            // 合作任务回调
            _this.sCooperateTaskDataUpdate = new Signal();
            // 是否存在已接受的任务，屏蔽多次接任务的操作
            _this.taskIsHaveGetOne = false;
            // 是否有合作者联系需要红点提示
            _this.isHaveRedTip = false;
            // 是否有未领取的宝箱需要红点提示
            _this.isRewardBoxRedTip = false;
            // 是否有未领取的宝箱需要红点提示
            _this.isRewardTaskRedTip = false;
            _this.sReqTimeUpdate = new Signal();
            _this.lastReqTimeNum = 0;
            _this._inviteCD = 0;
            // 是否延迟时间到
            _this.btnDelayTime = 0;
            _this.sReqTimeAutoUpdate = new Signal();
            _this.lastReqTimeAutoNum = 0;
            _this._inviteCDAuto = 0;
            // 刚刚获取小伙伴？0，初始化 1，发送申请 2，刚刚获取  3，UI表现完成   4，解除合作
            _this.firstGetPartner = 0;
            // 小伙伴信息
            _this.partnerInfData = null;
            // 获取其他玩家信息的回调		
            _this.sReqOtherInf = new TypedSignal();
            _this.searId = 0;
            // 通知获得小伙伴
            _this.sCallHavePartner = new Signal();
            _this.sRewardGetCall = new TypedSignal();
            // 面板内调用的回调
            _this.sRewardHideCall = new Signal();
            return _this;
        }
        // 合作数据更新
        CooperationModel.prototype.updateAccountCooperateData = function (msg, ops, uuid) {
            if (ops === EGameDataOps.remove) {
                // 删除
                console.error("================================删除");
                this.isHaveRedTip = false;
            }
            else {
                // 合作信息
                this.cooperData = msg;
                if (this.havePartner) {
                    // 已有合作伙伴
                    if (this.partnerInfData && this.partnerInfData !== null && this.partnerInfData.userId === parseInt(this.cooperData.friendEntityId)) {
                    }
                    else {
                        this.partnerInfData = null;
                        this.sendGetOtherInf(parseInt(this.cooperData.friendEntityId));
                    }
                    if (this.cooperData.isRead) {
                        this.isHaveRedTip = true;
                    }
                    else {
                        this.isHaveRedTip = false;
                    }
                }
                else {
                    this.isHaveRedTip = false;
                    if (this.cooperData.appList && this.cooperData.appList !== null && this.cooperData.appList.length > 0) {
                        // 没有合作伙伴，获取请求的伙伴信息
                        if (this.partnerInfData && this.partnerInfData !== null && this.partnerInfData.userId === parseInt(this.cooperData.appList[0].entityId)) {
                            // 有小伙伴请求合作
                            this.isHaveRedTip = true;
                        }
                        else {
                            this.sendGetOtherInf(parseInt(this.cooperData.appList[0].entityId));
                        }
                    }
                }
                this.sCallHavePartner.dispatch();
            }
            this.sAccountCooperateDataUpdate.dispatch();
        };
        // 公共邀请合作数据
        CooperationModel.prototype.updateAutoCooperateData = function (msg, ops, uuid) {
            if (ops === EGameDataOps.remove) {
                this.cooperateData = null;
            }
            else {
                this.cooperateData = msg;
            }
            this.lastReqAutoTime();
        };
        // 合作请求时间更新
        CooperationModel.prototype.updatePlayerCooperateData = function (msg, ops, uuid) {
            // 上次请求时间
            this.cooperPlayerData = msg;
            this.lastReqTime();
            this.lastReqAutoTime();
        };
        // 合作任务信息更新
        CooperationModel.prototype.updateCooperateTaskData = function (msg, ops, uuid) {
            this.cooperTaskData = msg;
            if (ops === EGameDataOps.remove) {
                // 删除
                this.isRewardBoxRedTip = false;
            }
            else {
                this.sCooperateTaskDataUpdate.dispatch();
                // 宝箱奖励通知
                this.isRewardBoxRedTip = false;
                for (var i = 1; i < 7; i++) {
                    var status_1 = 0;
                    if (this.cooperData.isCaptain) {
                        status_1 = (this.cooperTaskData.captainRewardStatus >> i) & 1;
                    }
                    else {
                        status_1 = (this.cooperTaskData.rewardStatus >> i) & 1;
                    }
                    var canGetReward = Game.moduleModel.cooperation.cooperTaskData.progree > i;
                    if (status_1 !== 1) {
                        if (canGetReward) {
                            this.isRewardBoxRedTip = true;
                        }
                    }
                }
                // 有可领取任务红点提示
                this.isRewardTaskRedTip = false;
                for (var i = 0; i < this.cooperTaskData.tasks.length; i++) {
                    var task = this.cooperTaskData.tasks[i].starTasks;
                    for (var j = 0; j < task.length; j++) {
                        if (task[j].status === 1) {
                            if (parseInt(task[j].receiveUuid) === User.info.entityId) {
                                this.isRewardTaskRedTip = true;
                            }
                        }
                    }
                }
            }
        };
        // 上次请求时间
        CooperationModel.prototype.lastReqTime = function () {
            if (this.cooperPlayerData && this.cooperPlayerData !== null) {
                if (!this.lastReqTimeTick || this.lastReqTimeTick === null) {
                    this.lastReqTimeTick = Game.tick.AddTick(1, -1, Handler.create(this, this.UpdatelastReqTime, null, false), null);
                }
                this.lastReqTimeTick.Restart();
            }
        };
        Object.defineProperty(CooperationModel.prototype, "inviteCD", {
            get: function () {
                if (this._inviteCD === 0) {
                    this._inviteCD = Game.config.global.getConfig(GlobalKey.Cooperate_Invited_CD).value;
                }
                return this._inviteCD;
            },
            enumerable: true,
            configurable: true
        });
        CooperationModel.prototype.UpdatelastReqTime = function () {
            this.lastReqTimeNum = this.inviteCD - Game.time.getSubSecondsPre(this.cooperPlayerData.lastReqTime);
            if (this.lastReqTimeNum <= 0) {
                this.lastReqTimeNum = 0;
                this.lastReqTimeTick.Stop();
            }
            this.sReqTimeUpdate.dispatch();
        };
        CooperationModel.prototype.setDealyCanUse = function (callFun) {
            var _this = this;
            if (this.btnDelayTime <= 0) {
                this.btnDelayTime = this.inviteCD * 1000;
                setTimeout(function () {
                    _this.btnDelayTime = 0;
                    if (callFun && callFun !== null) {
                        callFun();
                    }
                }, this.inviteCD * 1000);
            }
        };
        // 上次公开请求时间
        CooperationModel.prototype.lastReqAutoTime = function () {
            if (this.cooperPlayerData && this.cooperPlayerData !== null) {
                if (!this.lastReqTimeAutoTick || this.lastReqTimeAutoTick === null) {
                    this.lastReqTimeAutoTick = Game.tick.AddTick(1, -1, Handler.create(this, this.UpdatelastReqAutoTime, null, false), null);
                }
                this.lastReqTimeAutoTick.Restart();
            }
        };
        Object.defineProperty(CooperationModel.prototype, "inviteCDAuto", {
            get: function () {
                if (this._inviteCDAuto === 0) {
                    this._inviteCDAuto = Game.config.global.getConfig(GlobalKey.Cooperate_Public_Invited_Time).value;
                }
                return this._inviteCDAuto;
            },
            enumerable: true,
            configurable: true
        });
        CooperationModel.prototype.UpdatelastReqAutoTime = function () {
            if (this.cooperateData && this.cooperateData !== null) {
                this.lastReqTimeAutoNum = this.inviteCDAuto - Game.time.getSubSecondsPre(this.cooperPlayerData.lastAutoReqTime);
                if (this.lastReqTimeAutoNum <= 0) {
                    this.lastReqTimeAutoNum = 0;
                    this.lastReqTimeAutoTick.Stop();
                }
                if (this.havePartner) {
                    this.cooperateData = null;
                }
            }
            else {
                this.lastReqTimeAutoNum = 0;
                if (this.lastReqTimeAutoTick && this.lastReqTimeAutoTick !== null) {
                    this.lastReqTimeAutoTick.Stop();
                }
            }
            this.sReqTimeAutoUpdate.dispatch();
        };
        Object.defineProperty(CooperationModel.prototype, "havePartner", {
            // 是否存在小伙伴
            get: function () {
                if (this.cooperData && this.cooperData.friendEntityId && this.cooperData.friendEntityId.length > 0) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        //获取对方信息
        CooperationModel.prototype.sendGetOtherInf = function (entityId) {
            this.searId = entityId;
            this.sReqOtherInf.add(this.handleGetOtherInf, this);
            Game.protosender.rank.GetPlayerShortData(entityId);
        };
        CooperationModel.prototype.handleGetOtherInf = function (msg) {
            if (this.searId === msg.data.userId) {
                this.partnerInfData = msg.data;
                this.sReqOtherInf.remove(this.handleGetOtherInf, this);
            }
        };
        //==============================
        // 发送协议到服务器
        //==============================
        /**
         *  寻求合作
         * @param entityId   合作者ID 为0时，为公开邀请
         */
        CooperationModel.prototype.sendApply = function (entityId) {
            Game.protosender.cooperate.Apply(entityId);
        };
        /**
         *  解除合作
         */
        CooperationModel.prototype.sendRelieve = function () {
            Game.protosender.cooperate.Relieve();
        };
        /**
         *  审批
         * @param type   审批类型 0同意 1拒绝
         * @param entityId   审批的哪个玩家
         */
        CooperationModel.prototype.sendApprove = function (type, entityId) {
            Game.protosender.cooperate.Approve(type, entityId);
        };
        /**
         *  获取合作任务信息
         */
        CooperationModel.prototype.sendGetInfo = function () {
            Game.protosender.cooperate.GetInfo();
        };
        /**
         *
         * @param type   任务操作 0接取 1协作
         * @param taskId   哪个任务
         * @param star   星级
         */
        CooperationModel.prototype.sendTaskOperate = function (type, taskId, star) {
            Game.protosender.cooperate.TaskOperate(type, taskId, star);
        };
        /**
         *
         * @param taskId   哪个任务
         * @param star   星级
         */
        CooperationModel.prototype.sendGetTaskReward = function (taskId, star) {
            Game.protosender.cooperate.GetTaskReward(taskId, star);
        };
        /**
         *  赠送物品
         * @param itemId   赠送物品ID
         */
        CooperationModel.prototype.sendGiveReward = function (itemId) {
            Game.protosender.cooperate.GiveReward(itemId);
        };
        /**
         *  领取进度奖励
         * @param index   领取哪一个
         */
        CooperationModel.prototype.sendGetProgressTask = function (index) {
            Game.protosender.cooperate.GetProgressTask(index);
        };
        /**
         *
         */
        CooperationModel.prototype.sendCancelCooperate = function () {
            Game.protosender.cooperate.CancelCooperate();
        };
        /**
         *  查看合作信息
         */
        CooperationModel.prototype.sendReadCooperate = function () {
            Game.protosender.cooperate.ReadCooperate();
        };
        //==============================
        // 接收协议从服务器
        //==============================
        /**
         *  寻求合作
         */
        CooperationModel.prototype.Apply = function (msg) {
            // console.log("寻求合作");
        };
        /**
         *  解除合作
         */
        CooperationModel.prototype.Relieve = function (msg) {
            // console.log("解除合作");
        };
        /**
         *  审批
         */
        CooperationModel.prototype.Approve = function (msg) {
            if (msg.type === 1) {
                this.partnerInfData = null;
            }
        };
        /**
         *  获取合作任务信息
         */
        CooperationModel.prototype.GetInfo = function (msg) {
            // console.log("获取合作任务信息");
        };
        /**
         *
         */
        CooperationModel.prototype.TaskOperate = function (msg) {
            // console.log("TaskOperate");
        };
        /**
         *
         */
        CooperationModel.prototype.GetTaskReward = function (msg) {
            // console.log("GetTaskReward");
            this.sRewardGetCall.dispatch(msg);
        };
        /**
         *  赠送物品
         */
        CooperationModel.prototype.GiveReward = function (msg) {
        };
        /**
         *  领取进度奖励
         */
        CooperationModel.prototype.GetProgressTask = function (msg) {
            // console.log("GetProgressTask");
            this.sRewardGetCall.dispatch(msg);
        };
        /**
         *
         */
        CooperationModel.prototype.CancelCooperate = function (msg) {
            // console.log("CancelCooperate");
        };
        return CooperationModel;
    }(Games.MModel));
    Games.CooperationModel = CooperationModel;
})(Games || (Games = {}));
//# sourceMappingURL=CooperationModel.js.map