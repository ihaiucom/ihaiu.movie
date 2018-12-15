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
    var PfSkin;
    (function (PfSkin) {
        var PerformType = Games.PerformType;
        var AvatarManager = Games.AvatarManager;
        var DialogManager = Games.DialogManager;
        var OscarAwardsType = Games.OscarAwardsType;
        var OscarAnim = /** @class */ (function (_super) {
            __extends(OscarAnim, _super);
            function OscarAnim() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.chairList = [];
                _this.avatarList = [];
                _this.winnerOrignalPos = 0;
                _this.stageActorList = []; //舞台艺人列表
                _this.enterIndex = -1; //艺人进场时间顺序
                _this.bornOffset = 150;
                _this.actorEnterNum = 0; //进入艺人数量
                _this.actorLeaveNum = 0; //离开艺人数量
                _this.speakerFinishIndex = 0; //主持人对话轮数
                _this.actorIndex = -1; //候选人数据index
                //
                _this.actorIdList = [];
                _this.oscarEnd = false;
                //主持人已经进场准备好
                _this.isSpeekerReady = false;
                //是否初始化事件
                _this.isinitEvent = false;
                return _this;
            }
            OscarAnim.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScale(0.67, 0.67);
                this.setPivot(0.5, 0.5);
            };
            OscarAnim.prototype.showFor = function (parent, context) {
                this.context = context;
                this.initAudience();
                parent.addChild(this);
                AvatarManager.sEventFinish.add(this.onAvatarEventFinish, this);
                DialogManager.sDialogFinish.add(this.onDialogFinish, this);
                DialogManager.sDialogEvent.add(this.onDialogEventFinish, this);
                this.isinitEvent = true;
                this.addRelation(parent, fairygui.RelationType.Center_Center);
                this.addRelation(parent, fairygui.RelationType.Middle_Middle);
                this.startShow();
            };
            OscarAnim.prototype.reStartShow = function () {
                var _this = this;
                if (this.stageActorList.length > 0) {
                    this.endTurnShowImmediately();
                }
                if (this.speekerA) {
                    this.speekerA.endEvent(false);
                    this.speekerA.dispose();
                }
                if (this.speekerB) {
                    this.speekerB.endEvent(false);
                    this.speekerB.dispose();
                }
                setTimeout(function () {
                    //reset
                    if (!_this.isinitEvent) {
                        AvatarManager.sEventFinish.add(_this.onAvatarEventFinish, _this);
                        DialogManager.sDialogFinish.add(_this.onDialogFinish, _this);
                        DialogManager.sDialogEvent.add(_this.onDialogEventFinish, _this);
                        _this.isinitEvent = true;
                    }
                    _this.setScale(0.67, 0.67);
                    _this.setPivot(0.5, 0.5);
                    _this.startShow();
                }, 500);
            };
            //整个颁奖开始
            OscarAnim.prototype.startShow = function () {
                var _this = this;
                this.tween = Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, 1500, Laya.Ease.linearIn, Handler.create(null, function () {
                    _this.oscarEnd = false;
                    _this.creatSpeeker();
                    //context
                    _this.context.m_animContainer.m_oscarBg.asCom.addChild(_this.getChildAt(0));
                    _this.context.m_animContainer.m_oscarBg.setPivot(0.5, 0.5);
                    _this.context.m_animContainer.m_oscarBg.setScale(0.8, 0.8);
                    _this.context.AniStart();
                }), 0, true, true);
            };
            //一轮开始
            OscarAnim.prototype.startTurnShow = function (arg) {
                this.curPrizeData = arg;
                //直接点击下一个颁奖
                if (this.stageActorList.length > 0) {
                    this.endTurnShowImmediately();
                }
                //创建候选人列表
                this.initActorList();
                this.creatStageActorList();
                if (this.isSpeekerReady) {
                    //当前颁奖没有获奖人，直接跳过到下一个颁奖
                    if (this.curPrizeData.listCandidate.length == 0) {
                        this.startSpeekerDialog(this.getSpeekerNoWinnerEvent());
                    }
                    else {
                        this.startSpeekerDialog(this.getSpeekerBeginEvent());
                    }
                }
            };
            //一轮结束
            OscarAnim.prototype.endTurnShow = function () {
                console.log("endTurnShow");
                this.actorIndex = -1;
                this.winnerActor = null;
                this.actorLeaveNum = 0;
                this.actorEnterNum = 0;
                this.speakerFinishIndex = 0;
                this.enterIndex = -1;
                this.stageActorList.length = 0;
                this.stopSpeekerDialog();
                //context
                this.context.AniFinishPrize();
            };
            //颁奖结束
            OscarAnim.prototype.endAllPrize = function () {
                console.log("endAllPrize");
                this.startSpeekerDialog(this.getSpeekerAllPrizeEndEvent());
            };
            //整个颁奖结束
            OscarAnim.prototype.endShow = function () {
                if (!this.oscarEnd) {
                    console.log("endShow");
                    this.oscarEnd = true;
                    this.speekerA.stand();
                    this.speekerB.stand();
                    this.__dispose();
                }
            };
            OscarAnim.prototype.__dispose = function () {
                AvatarManager.sEventFinish.remove(this.onAvatarEventFinish, this);
                DialogManager.sDialogFinish.remove(this.onDialogFinish, this);
                DialogManager.sDialogEvent.remove(this.onDialogEventFinish, this);
                this.isinitEvent = false;
                Laya.timer.clear(this, this.onTimeActorEnter);
                if (this.tween != null) {
                    Laya.Tween.clear(this.tween);
                    this.tween = null;
                }
                this.stopSpeekerDialog();
                for (var _i = 0, _a = this.stageActorList; _i < _a.length; _i++) {
                    var actor = _a[_i];
                    actor.dispose();
                }
                this.stageActorList.length = 0;
            };
            OscarAnim.prototype.dispose = function () {
                this.__dispose();
                for (var _i = 0, _a = this.avatarList; _i < _a.length; _i++) {
                    var unit = _a[_i];
                    unit.dispose();
                }
                this.avatarList.length = 0;
                this.context = null;
            };
            OscarAnim.prototype.actorLeaveStage = function () {
                var _this = this;
                if (this.oscarEnd)
                    return;
                for (var i = this.stageActorList.length - 1; i >= 0; i--) {
                    var actor = this.stageActorList[i];
                    var dx = this.width + 100;
                    actor.moveTo(dx, false, Handler.create(this, function (target, idx) {
                        _this.actorLeaveNum++;
                        if (target && !target.unit.isDisposed) {
                            console.log("@endTurn : " + target.unitModel.info.config.id);
                            _this.removeUnit(target);
                            _this.stageActorList.splice(idx, 1);
                            if (_this.isAllActorLeave) {
                                _this.endTurnShow();
                            }
                        }
                    }, [actor, i]));
                }
            };
            OscarAnim.prototype.endTurnShowImmediately = function () {
                this.actorIndex = -1;
                this.winnerActor = null;
                this.actorLeaveNum = 0;
                this.actorEnterNum = 0;
                this.speakerFinishIndex = 0;
                this.stopSpeekerDialog();
                this.enterIndex = -1;
                for (var i = this.stageActorList.length - 1; i >= 0; i--) {
                    var actor = this.stageActorList[i];
                    console.log("@@endTurnImmediately : " + actor.unitModel.info.config.id);
                    this.removeUnit(actor);
                }
                this.stageActorList.length = 0;
            };
            Object.defineProperty(OscarAnim.prototype, "isAllActorLeave", {
                get: function () {
                    return this.actorLeaveNum >= this.stageActorList.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(OscarAnim.prototype, "isAllActorEnter", {
                get: function () {
                    return this.actorEnterNum >= this.stageActorList.length;
                },
                enumerable: true,
                configurable: true
            });
            //-------------------------------------------
            // 接口
            //-------------------------------------------
            OscarAnim.prototype.setWinner = function (arg) {
                console.log("setWinner arg=" + arg);
                this.winnerData = arg;
                var winnerIndex = this.curPrizeData.winnerIndex;
                var winnerId = this.actorIdList[winnerIndex];
                this.winnerActor = this.stageActorList.findOne(function (value) {
                    return value.unitModel.info.id == winnerId;
                });
                if (this.winnerActor == null) {
                    this.winnerActor = this.stageActorList[0];
                }
                if (this.winnerActor.unit) {
                    this.winnerActor.setChildIndex(this.winnerActor.unit.parent.numChildren - 1);
                    this.winnerOrignalPos = this.winnerActor.x;
                    this.winnerActor.executeActionEvents(this.getWinnerActorEvent(), PerformType.Oscar);
                }
                this.startSpeekerDialog(this.getSpeekerWinnerEvent());
            };
            //--------------------------------
            // 事件
            //--------------------------------
            OscarAnim.prototype.onAvatarEventFinish = function (data) {
                var _this = this;
                if (this.oscarEnd)
                    return;
                if (data.performType == PerformType.Oscar) {
                    switch (data.eventId) {
                        case 6001:
                            break;
                        case 6002:
                            this.isSpeekerReady = true;
                            if (!this.oscarEnd) {
                                this.context.ShowNextPrizeUI();
                                if (this.curPrizeData) {
                                    if (this.curPrizeData.listCandidate.length == 0)
                                        this.startSpeekerDialog(this.getSpeekerNoWinnerEvent());
                                    else
                                        this.startSpeekerDialog(this.getSpeekerBeginEvent());
                                }
                            }
                            break;
                        case 6019: //获奖者上台后
                            // this.winnerActor.executeActionEvents(this.getWinnerActorTalkEvent(), PerformType.Oscar);
                            break;
                        case 6020: //获奖者感言结束
                            this.winnerActor.moveTo(this.winnerOrignalPos, false, Handler.create(this, function () {
                                _this.actorLeaveStage();
                            }, null, true));
                            break;
                    }
                }
            };
            //主持人开始说话
            OscarAnim.prototype.startSpeekerDialog = function (dialogs) {
                if (!this.oscarEnd) {
                    if (this.speekerA && this.speekerB) {
                        this.stopSpeekerDialog();
                        this.dialog = DialogManager.startDialog(this.speekerA, this.speekerB, dialogs, PerformType.Oscar);
                    }
                }
            };
            //主持人结束说话
            OscarAnim.prototype.stopSpeekerDialog = function () {
                if (this.dialog) {
                    this.dialog.endEvent(false);
                    this.dialog = null;
                }
            };
            //设置对话参数
            OscarAnim.prototype.setTalkParams = function (events) {
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    var argName = "";
                    switch (event_1.evtId) {
                        case 6003: // 让我们猜猜{0}的获奖者会是谁
                            argName = this.curPrizeData.name;
                            event_1.setTalkParams(argName);
                            break;
                        case 6005: //获奖提名列表
                        case 6006:
                        case 6007:
                        case 6009:
                        case 6010:
                            if (this.curPrizeData.listCandidate.length > 0) {
                                this.actorIndex++;
                                var minIndex = Math.min(this.actorIndex, this.curPrizeData.listCandidate.length - 1);
                                argName = this.curPrizeData.listCandidate[minIndex].name;
                            }
                            event_1.setTalkParams(argName);
                            break;
                        case 6011: //我觉得{0}挺不错的  我认为{0}才是最大的热门
                        case 6012:
                            if (this.curPrizeData.listCandidate.length > 0) {
                                var rdIndex = Random.range(0, this.curPrizeData.listCandidate.length);
                                argName = this.curPrizeData.listCandidate[rdIndex].name;
                            }
                            event_1.setTalkParams(argName);
                            break;
                        case 6015: //获奖艺人名，电影名
                        case 6017: //获奖艺人名，电影名	
                            argName = this.winnerData ? this.winnerData.name : "this.winnerData undefine";
                            if (!argName)
                                argName = "name is undefine";
                            event_1.setTalkParams(argName);
                            break;
                        case 6021: //当前颁奖没有获奖者主持人说话
                            argName = this.curPrizeData.name;
                            event_1.setTalkParams(argName);
                            break;
                    }
                }
            };
            OscarAnim.prototype.onDialogFinish = function (performType) {
                // if (performType == PerformType.Oscar)
                // {
                // 	this.speakerFinishIndex++;
                // 	this.speekerA.stand();
                // 	this.speekerB.stand();
                // 	console.log("onDialogFinish = " + this.speakerFinishIndex);
                // 	switch (this.speakerFinishIndex)
                // 	{
                // 		case 1: //颁奖前主持人讲话
                // 			break;
                // 		case 2: //选取获奖者前主持人说话
                // 			break;
                // 		case 3: //恭贺获奖者
                // 			this.startSpeekerDialog(this.getSpeekerCongratulationEvent());
                // 			break;
                // 		case 4: //恭喜获奖者结束
                // 			this.winnerActor.executeActionEvents(this.getWinnerActorTalkEvent(), PerformType.Oscar);
                // 			break;
                // 	}
                // }
            };
            OscarAnim.prototype.onDialogEventFinish = function (data) {
                if (data.performType == Games.PerformType.Oscar) {
                    console.log("onDialogEventFinish " + data.eventId);
                    switch (data.eventId) {
                        case 6003: //开始提名获奖人，艺人登场
                            this.onActorTimeEnterStage();
                            break;
                        case 6014:
                            //context 主持人选取获奖者前对话结束
                            this.context.AniSelectCandidtate();
                            break;
                        case 6015:
                            //context 主持人选取获奖者对话结束
                            this.startSpeekerDialog(this.getSpeekerCongratulationEvent()); //主持人恭喜获奖者
                            break;
                        case 6018:
                            //主持人恭喜获奖者结束
                            this.winnerActor.executeActionEvents(this.getWinnerActorTalkEvent(), PerformType.Oscar); //获奖者感言
                            break;
                        case 6022: //没有获奖者对话结束
                            this.endTurnShow();
                            break;
                        case 6024: //颁完所有奖后主持人讲话结束
                            this.context.showOscarReward();
                            break;
                    }
                }
            };
            //主持人进场事件
            OscarAnim.prototype.getSpeekerAEnterEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 1;
                });
                var events = playActList[0].eventList;
                return events;
            };
            OscarAnim.prototype.getSpeekerBEnterEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 2;
                });
                var events = playActList[0].eventList;
                return events;
            };
            //主持人开始颁奖
            OscarAnim.prototype.getSpeekerBeginEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 3;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //选取获奖者前主持人说话
            OscarAnim.prototype.getSpeekerSelectWinnerEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 5;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //选取获奖者主持人说话
            OscarAnim.prototype.getSpeekerWinnerEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 6;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //恭贺获奖者主持人说话
            OscarAnim.prototype.getSpeekerCongratulationEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 7;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //没有获奖主持人说话
            OscarAnim.prototype.getSpeekerNoWinnerEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 100 == 10;
                });
                if (playActList.length == 0) {
                    console.error("\u56FA\u5B9A\u8868\u6F14\u8868 \u6CA1\u6709\u67E5\u627E\u5230\u5BF9\u5E94\u7684\u6570\u636E\uFF0C OscarAnim.getSpeekerNoWinnerEvent(),  Game.config.playAct type=" + PerformType.Oscar);
                    return [];
                }
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //所有奖项颁完主持人说话
            OscarAnim.prototype.getSpeekerAllPrizeEndEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 100 == 11;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //获奖者上台
            OscarAnim.prototype.getWinnerActorEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 8;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //获奖者感言
            OscarAnim.prototype.getWinnerActorTalkEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.Oscar && value.data % 10 == 9;
                });
                var events = playActList[0].eventList;
                this.setTalkParams(events);
                return events;
            };
            //------------------------------
            // 创建Avatar
            //------------------------------
            //创建观众
            OscarAnim.prototype.creatAudience = function (index) {
                var aInfo = new Games.AvatarInfo();
                aInfo.type = Games.AvatarType.Npc;
                aInfo.idleName = "audience_idle";
                aInfo.texturePath = Res.getAudienceSkin();
                aInfo.skeletonPath = Res.getAudienceSK();
                var cUnit = Game.creator.creatEUnit(aInfo);
                //setting
                var scale = 0.3;
                var offsetX = 20;
                var offsetY = 60;
                if (index <= 5) {
                    scale = 0.3;
                }
                else if (index <= 10) {
                    scale = 0.4;
                }
                else {
                    scale = 0.5;
                }
                cUnit.setScale(scale);
                cUnit.pos(cUnit.unitModel.boundWidth + offsetX, cUnit.unitModel.boundHeight + offsetY);
                var chairCom = this.chairList[index];
                cUnit.showOn(chairCom, 0);
                this.addUnit(cUnit);
                this.avatarList.push(cUnit);
            };
            /** 添加单位到场景 */
            OscarAnim.prototype.addUnit = function (unit) {
                if (this.mainScene) {
                    this.mainScene.addUnit(unit);
                }
            };
            OscarAnim.prototype.removeUnit = function (unit) {
                this.mainScene && this.mainScene.removeUnit(unit.unit.uid);
            };
            //初始观众列表
            OscarAnim.prototype.initAudience = function () {
                this.chairList.length = 0;
                var chairGroup1 = this.m_ChairGroup1.asList;
                chairGroup1.touchable = false;
                for (var i = 0; i < chairGroup1.numItems; i++) {
                    var chair = chairGroup1.getChildAt(i).asCom;
                    this.chairList.push(chair);
                }
                var chairGroup2 = this.m_ChairGroup2.asList;
                chairGroup2.touchable = false;
                for (var i = 0; i < chairGroup2.numItems; i++) {
                    var chair = chairGroup2.getChildAt(i).asCom;
                    this.chairList.push(chair);
                }
                var chairGroup3 = this.m_ChairGroup3.asList;
                chairGroup3.touchable = false;
                for (var i = 0; i < chairGroup3.numItems; i++) {
                    var chair = chairGroup3.getChildAt(i).asCom;
                    this.chairList.push(chair);
                }
                //初始化npc
                this.avatarList.length = 0;
                for (var i = 0; i < this.chairList.length; i++) {
                    this.creatAudience(i);
                }
            };
            //创建主持人
            OscarAnim.prototype.creatSpeeker = function (npcId) {
                if (npcId === void 0) { npcId = 201; }
                var speekerIdA = 201;
                var speekerIdB = 202;
                var aInfoA = Games.AvatarInfo.creatByNpcId(speekerIdA);
                var aInfoB = Games.AvatarInfo.creatByNpcId(speekerIdB);
                aInfoA.idleName = "zhanli3";
                aInfoB.idleName = "zhanli3";
                this.speekerA = Game.creator.creatEUnit(aInfoA);
                this.speekerA.setScale(0.35);
                var bounds = this.speekerA.getBounds();
                this.speekerA.pos(bounds.width, bounds.height);
                this.speekerA.showOn(this.m_speekerContainner);
                this.addUnit(this.speekerA);
                this.avatarList.push(this.speekerA);
                this.speekerA.enterTo(-this.bornOffset, this.m_speekerContainner.height / 2 - 20);
                this.speekerA.executeActionEvents(this.getSpeekerAEnterEvent(), PerformType.Oscar);
                this.speekerB = Game.creator.creatEUnit(aInfoB);
                this.speekerB.setScale(0.35);
                bounds = this.speekerB.getBounds();
                this.speekerB.pos(bounds.width, bounds.height);
                this.speekerB.showOn(this.m_speekerContainner);
                this.addUnit(this.speekerB);
                this.avatarList.push(this.speekerB);
                this.speekerB.enterTo(this.width + this.bornOffset, this.m_speekerContainner.height / 2 - 20);
                this.speekerB.executeActionEvents(this.getSpeekerBEnterEvent(), PerformType.Oscar);
            };
            OscarAnim.prototype.initActorList = function () {
                this.actorIdList.length = 0;
                for (var i = 0; i < this.curPrizeData.listCandidate.length; i++) {
                    if (this.curPrizeData.type == OscarAwardsType.Man ||
                        this.curPrizeData.type == OscarAwardsType.Woman) {
                        this.actorIdList.push(this.curPrizeData.listCandidate[i].id);
                    }
                    else {
                        var actors = Game.config.actor.getConfigList();
                        actors = actors.filter(function (value, index, array) {
                            return value.id != 9998 && value.id != 9999;
                        });
                        this.actorIdList.push(actors[Random.range(0, actors.length)].id);
                    }
                }
            };
            //创建舞台艺人列表
            OscarAnim.prototype.creatStageActorList = function () {
                for (var i = 0; i < this.actorIdList.length; i++) {
                    var actorId = this.actorIdList[i];
                    var aInfo = Games.AvatarInfo.creatByAvatarId(actorId);
                    var actor = Game.creator.creatEUnit(aInfo);
                    actor.setScale(0.3);
                    actor.showOn(this.m_actorContainner);
                    this.addUnit(actor);
                    this.stageActorList.push(actor);
                    actor.enterTo(-this.bornOffset, this.m_actorContainner.height / 2 - 110, Games.DirtionType.Right);
                }
            };
            //Time Enter
            OscarAnim.prototype.onActorTimeEnterStage = function () {
                Laya.timer.loop(1500, this, this.onTimeActorEnter, null, true, true);
            };
            OscarAnim.prototype.onTimeActorEnter = function () {
                var _this = this;
                this.enterIndex++;
                if (this.enterIndex > this.stageActorList.length - 1) {
                    Laya.timer.clear(this, this.onTimeActorEnter);
                    return;
                }
                var stageLeftOffset = 30;
                var gap = (this.width - stageLeftOffset) / 4; // this.stageActorList.length;
                var actor = this.stageActorList[this.enterIndex];
                var leftPos = (this.width - (this.stageActorList.length - 1) * gap) * 0.5;
                var targetPos = leftPos + this.enterIndex * gap;
                actor.moveTo(targetPos, false, Handler.create(this, function () {
                    _this.actorEnterNum++;
                    if (_this.isAllActorEnter) {
                        //选取获奖者前主持人说话
                        _this.startSpeekerDialog(_this.getSpeekerSelectWinnerEvent());
                    }
                }, null, true));
            };
            return OscarAnim;
        }(PfSkin.OscarAnimStruct));
        PfSkin.OscarAnim = OscarAnim;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarAnim.js.map