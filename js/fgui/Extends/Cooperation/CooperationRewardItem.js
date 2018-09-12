/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
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
var fgui;
(function (fgui) {
    var Cooperation;
    (function (Cooperation) {
        var CooperationRewardItem = /** @class */ (function (_super) {
            __extends(CooperationRewardItem, _super);
            function CooperationRewardItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CooperationRewardItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                this.m_receiveBtn.m_title.text = TEXT.CooperateReceiveBtn;
                this.m_assistBtn.m_title.text = TEXT.CooperateassistBtn;
                this.m_getBtn.m_title.text = TEXT.CooperategetBtn;
                this.m_assitingText.text = TEXT.CooperateassitingText;
                this.m_receiveBtn.onClick(this, this.clickReceiveBtn);
                this.m_getBtn.onClick(this, this.clickGetBtn);
                this.m_assistBtn.onClick(this, this.clickAssistBtn);
            };
            // 接受任务
            CooperationRewardItem.prototype.clickReceiveBtn = function () {
                if (!Game.moduleModel.cooperation.taskIsHaveGetOne) {
                    Game.moduleModel.cooperation.sendTaskOperate(0, this.cooperateTask.id, this.cooperateTask.task_star);
                }
                else {
                    Game.system.toastText(TEXT.CooperateHaveTaskText);
                }
            };
            // 领取		
            CooperationRewardItem.prototype.clickGetBtn = function () {
                Game.moduleModel.cooperation.sRewardGetCall.add(this.getReward, this);
                Game.moduleModel.cooperation.sendGetTaskReward(this.cooperateTask.id, this.cooperateTask.task_star);
            };
            CooperationRewardItem.prototype.getReward = function (msg) {
                if (this.cooperateTask.id === msg.taskId && this.cooperateTask.task_star === msg.star) {
                    Game.system.getRewardText(this.dtList, TEXT.StoryGetReward, 0);
                    Game.moduleModel.cooperation.sRewardGetCall.remove(this.getReward, this);
                }
            };
            // 协助
            CooperationRewardItem.prototype.clickAssistBtn = function () {
                Game.moduleModel.cooperation.sendTaskOperate(1, this.cooperateTask.id, this.cooperateTask.task_star);
            };
            CooperationRewardItem.prototype.setData = function (msg) {
                this.dtList = new Array();
                if (!msg.needParam || msg.needParam === null || msg.needParam.length < 1) {
                    console.error("服务器数据出错");
                }
                else {
                    var cooperateTask = Game.config.cooperateTask.getConfig(msg.taskid);
                    this.cooperateTask = cooperateTask;
                    this.coopTaskReward = new DTItemNum();
                    this.coopTaskReward.itemId = msg.itemId;
                    if (Game.moduleModel.cooperation.cooperData.isCaptain) {
                        this.coopTaskReward.itemNum = msg.captainItemNum;
                    }
                    else {
                        this.coopTaskReward.itemNum = msg.itemNum;
                    }
                    if (this.coopTaskReward.itemId > 0 && this.coopTaskReward.itemNum > 0) {
                        this.m_list.numItems = 1;
                    }
                    else {
                        this.m_list.numItems = 0;
                    }
                    var otherInf = Game.moduleModel.cooperation.partnerInfData;
                    this.m_icon.icon = Game.config.headPortrait.GetPlayerIconUrl(otherInf.portrait, otherInf.sex);
                    var maxPress = 0;
                    switch (msg.taskType) {
                        case 1:
                            {
                                this.m_des.text = TEXT.CooperateTaskType10;
                                if (msg.needParam.length === 5) {
                                    if (msg.needParam[0] > 0) {
                                        var type = Game.config.property.getConfig(msg.needParam[0]);
                                        this.m_des.text += format(TEXT.CooperateTaskType11, type.name);
                                    }
                                    if (msg.needParam[1] > 0) {
                                        this.m_des.text += format(TEXT.CooperateTaskType12, msg.needParam[1]);
                                    }
                                    if (msg.needParam[2] > 0) {
                                        this.m_des.text += format(TEXT.CooperateTaskType13, msg.needParam[2]);
                                    }
                                    if (msg.needParam[3] > 0) {
                                        var type = Game.config.property.getConfig(msg.needParam[3]);
                                        this.m_des.text += format(TEXT.CooperateTaskType14, type.name);
                                    }
                                    if (msg.needParam[4] > 0) {
                                        var type = Game.config.property.getConfig(msg.needParam[4]);
                                        this.m_des.text += format(TEXT.CooperateTaskType15, type.name);
                                    }
                                }
                                else {
                                    console.error("服务器数据出错");
                                }
                                maxPress = 1;
                            }
                            break;
                        case 2:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType20, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 3:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType30, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 4:
                            {
                                if (msg.needParam.length === 2) {
                                    var goodsItem = Game.config.item.getConfig(msg.needParam[0]);
                                    this.m_des.text = format(TEXT.CooperateTaskType40, msg.needParam[1], goodsItem.name);
                                    maxPress = msg.needParam[1];
                                }
                                else {
                                    console.error("服务器数据出错");
                                }
                            }
                            break;
                        case 5:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType50, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 6:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType60, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 7:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType70, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 8:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType80, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 9:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType90, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                        case 10:
                            {
                                this.m_des.text = format(TEXT.CooperateTaskType100, msg.needParam[0]);
                                maxPress = msg.needParam[0];
                            }
                            break;
                    }
                    var curPress = msg.progress > maxPress ? maxPress : msg.progress;
                    this.m_des.text += format(TEXT.CooperateTaskProgress, curPress, maxPress);
                    switch (msg.status) {
                        case 0:
                            {
                                // 有人接受任务
                                if (msg.receiveUuid.length > 0) {
                                    if (parseInt(msg.receiveUuid) === User.info.entityId) {
                                        Game.moduleModel.cooperation.taskIsHaveGetOne = true;
                                        // 自己接受任务，是否小伙伴协助了
                                        if (msg.helpUuid.length > 0 && parseInt(msg.helpUuid) === Game.moduleModel.cooperation.partnerInfData.userId) {
                                            this.m_status.setSelectedIndex(3);
                                        }
                                        else {
                                            this.m_status.setSelectedIndex(5);
                                        }
                                    }
                                    else if (parseInt(msg.receiveUuid) === Game.moduleModel.cooperation.partnerInfData.userId) {
                                        // 小伙伴接受了任务，我是否协助
                                        if (msg.helpUuid.length > 0 && parseInt(msg.helpUuid) === User.info.entityId) {
                                            this.m_status.setSelectedIndex(3);
                                        }
                                        else {
                                            this.m_status.setSelectedIndex(1);
                                        }
                                    }
                                    else {
                                        console.error("服务器出错，第三人接受了我们的任务");
                                    }
                                }
                                else {
                                    // 无人接的任务
                                    this.m_status.setSelectedIndex(0);
                                }
                            }
                            break;
                        case 1:
                            {
                                if (parseInt(msg.receiveUuid) === User.info.entityId) {
                                    // 可领取奖励
                                    this.m_status.setSelectedIndex(2);
                                }
                                else {
                                    // 等待对方领取奖励
                                    this.m_status.setSelectedIndex(4);
                                }
                            }
                            break;
                        case 2:
                            {
                                // 已领取奖励
                                this.m_status.setSelectedIndex(4);
                            }
                            break;
                    }
                }
            };
            CooperationRewardItem.prototype.initItem = function (index, obj) {
                var item = obj;
                item.m_icon.icon = Games.WarLoadPic.getItemIcon(this.coopTaskReward.itemId);
                item.m_title.text = formatNumberUnit(this.coopTaskReward.itemNum, 0);
                var dtItem = new DTItemNum();
                dtItem.itemId = this.coopTaskReward.itemId;
                dtItem.itemNum = this.coopTaskReward.itemNum;
                this.dtList.push(dtItem);
            };
            return CooperationRewardItem;
        }(Cooperation.CooperationRewardItemStruct));
        Cooperation.CooperationRewardItem = CooperationRewardItem;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationRewardItem.js.map