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
        var LyShow = /** @class */ (function (_super) {
            __extends(LyShow, _super);
            function LyShow() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.chairList = [];
                _this.avatarList = [];
                _this.speekerId = 0; //主持人Id
                _this.isSpeekerBeginTalk = true;
                _this.currActorName = "";
                //检查路演是否结束
                _this.isRoadShowSuccess = false; //路演是否成功
                _this._isRoadShowEnd = false;
                _this.currChairIndex = -1;
                return _this;
            }
            LyShow.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScale(0.67, 0.67);
                this.setPivot(0.5, 0.5);
            };
            LyShow.prototype.showFor = function (parent, context) {
                this.context = context;
                this.initAudience();
                parent.addChild(this);
                AvatarManager.sBehaviorFinish.add(this.onAvatarBehaviorFinish, this);
                AvatarManager.sEventFinish.add(this.onAvatarEventFinish, this);
                this.startShow();
            };
            LyShow.prototype.startShow = function () {
                var _this = this;
                this.tween = Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, 1500, Laya.Ease.linearIn, Handler.create(null, function () {
                    if (!_this.speeker) {
                        _this.creatSpeeker();
                        _this.curActorData = _this.context.currentActorData();
                        _this.currActorName = Game.config.actor.getConfig(_this.curActorData.id).name;
                    }
                }), 0, true, true);
            };
            LyShow.prototype.endShow = function () {
                this.context.OnAnimFinish();
                this.dispose();
            };
            LyShow.prototype.dispose = function () {
                AvatarManager.sBehaviorFinish.remove(this.onAvatarBehaviorFinish, this);
                AvatarManager.sEventFinish.remove(this.onAvatarEventFinish, this);
                if (this.tween != null) {
                    Laya.Tween.clear(this.tween);
                    this.tween = null;
                }
                if (this.speeker) {
                    this.speeker.endEvent(false);
                    this.speeker.dispose();
                    this.speeker = null;
                }
                if (this.curActor) {
                    this.curActor.endEvent(false);
                    this.curActor.dispose();
                    this.curActor = null;
                }
                this.avatarList.forEach(function (value, index, array) {
                    value.dispose();
                });
                this.avatarList.length = 0;
                this.context = null;
            };
            Object.defineProperty(LyShow.prototype, "isRoadShowEnd", {
                get: function () {
                    return this._isRoadShowEnd;
                },
                set: function (value) {
                    if (value) {
                        this.isRoadShowSuccess = Game.moduleModel.market.Info.roadShowFlag;
                    }
                    this._isRoadShowEnd = value;
                },
                enumerable: true,
                configurable: true
            });
            //设置对话参数
            LyShow.prototype.setTalkParams = function (events) {
                for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                    var event_1 = events_1[_i];
                    var argName = "";
                    switch (event_1.evtId) {
                        case 7102: //主持人开场
                            event_1.setTalkParams(User.info.name, this.currActorName);
                            break;
                        case 7105: //艺人表演后主持人小结
                            var popularvalue = this.context.curActorPopularValue(this.curActorData);
                            event_1.setTalkParams(this.currActorName, popularvalue);
                            break;
                        case 7108: //主持人宣布路演成功,路演失败//城市名
                        case 7109:
                            argName = Game.moduleModel.market.GetLastCity().name;
                            event_1.setTalkParams(argName);
                            break;
                        case 7113: //艺人上台说话
                            switch (event_1.actionInfo.talkActionId) {
                                case 7105: //城市名
                                case 7107:
                                case 7109:
                                case 7110:
                                case 7112:
                                    argName = Game.moduleModel.market.GetLastCity().name;
                                    break;
                                case 7106: //公司名
                                    argName = User.info.name;
                                    break;
                                case 7108: //艺人名
                                    argName = this.currActorName;
                                    break;
                            }
                            event_1.setTalkParams(argName);
                            break;
                    }
                }
            };
            LyShow.prototype.onAvatarEventFinish = function (data) {
                if (data.performType == PerformType.RoadShow) {
                    if (data.eventId == 7102 || data.eventId == 7103 || data.eventId == 7113) //观众欢呼
                     {
                        this.cheer();
                    }
                }
            };
            //观众执行事件
            LyShow.prototype.onAvatarBehaviorFinish = function (data) {
                if (data.performType == PerformType.RoadShow) {
                    if (data.avatarId == 0) //观众
                     {
                        // let avatar = this.getAvatar(data.avatarUid);
                        // avatar.executeActionEvents(this.getRDEvent(), PerformType.RoadShow);
                    }
                    else if (data.avatarId == this.speekerId) //主持人
                     {
                        this.speeker.direction = Games.DirtionType.Right;
                        if (this.speeker.x > Laya.stage.width / 2) {
                            this.speeker.direction = Games.DirtionType.Left;
                        }
                        if (!this.isRoadShowEnd) {
                            this.curActorData = this.context.currentActorData();
                            this.creatActor(this.curActorData.id);
                        }
                        else {
                            this.endShow();
                        }
                    }
                    else //艺人
                     {
                        //回调艺人路演结束
                        var actorData = Game.moduleModel.actor.getActor(data.avatarId);
                        this.isRoadShowEnd = this.context.UpdateProgress(actorData);
                        if (this.curActor != null) {
                            this.curActor.dispose();
                        }
                        if (!this.isRoadShowEnd) {
                            this.speeker.executeActionEvents(this.getSpeekerEventSummary(), PerformType.RoadShow);
                        }
                        else {
                            if (this.isRoadShowSuccess) {
                                this.speeker.executeActionEvents(this.getSpeekerEventSucc(), PerformType.RoadShow);
                            }
                            else {
                                this.speeker.executeActionEvents(this.getSpeekerEventFail(), PerformType.RoadShow);
                            }
                        }
                    }
                }
            };
            //创建主持人
            LyShow.prototype.creatSpeeker = function (npcId) {
                var _this = this;
                if (npcId === void 0) { npcId = 201; }
                this.speekerId = npcId;
                var aInfo = Games.AvatarInfo.creatByNpcId(npcId);
                this.speeker = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    _this.speeker.setScale(0.35, true);
                    var bounds = _this.speeker.getBounds();
                    _this.speeker.pos(bounds.width, bounds.height);
                    _this.m_avatarContainner.displayObject.addChild(_this.speeker);
                    _this.speeker.enterTo(-100, Laya.stage.height / 2 + 230);
                    _this.speeker.executeActionEvents(_this.getSpeekerEventBegin(), PerformType.RoadShow);
                    _this.speeker.openShadow();
                    _this.isSpeekerBeginTalk = true;
                });
            };
            //创建艺人
            LyShow.prototype.creatActor = function (actorId) {
                var _this = this;
                var aInfo = Games.AvatarInfo.creatByAvatarId(actorId);
                this.curActor = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    _this.curActor.setScale(0.35, true);
                    var bounds = _this.curActor.getBounds();
                    _this.curActor.pos(bounds.width, bounds.height);
                    _this.m_avatarContainner.displayObject.addChild(_this.curActor);
                    _this.curActor.enterTo(-100, Laya.stage.height / 2 + 230);
                    _this.curActor.openShadow();
                    _this.curActor.executeActionEvents(_this.getActorEvent(), PerformType.RoadShow);
                });
            };
            //创建观众
            LyShow.prototype.creatAudience = function () {
                var _this = this;
                var aInfo = new Games.AvatarInfo();
                aInfo.type = Games.AvatarType.Npc;
                aInfo.idleName = "audience_idle";
                aInfo.texturePath = Res.getAudienceSkin();
                aInfo.skeletonPath = Res.getAudienceSK();
                var avatar = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                    //setting
                    var scale = 0.3;
                    var offsetX = 20;
                    var offsetY = 60;
                    if (_this.currChairIndex < 5) {
                        scale = 0.3;
                    }
                    else if (_this.currChairIndex < 10) {
                        scale = 0.45;
                    }
                    else if (_this.currChairIndex < 15) {
                        scale = 0.5;
                    }
                    avatar.setScale(scale);
                    var bounds = avatar.getBounds();
                    avatar.pos(bounds.width + offsetX, bounds.height + offsetY);
                    var chairCom = _this.getChairCom();
                    chairCom.displayObject.addChildAt(avatar, 0);
                    // avatar.executeActionEvents(this.getRDEvent(), PerformType.RoadShow);
                    _this.avatarList.push(avatar);
                });
            };
            //初始观众列表
            LyShow.prototype.initAudience = function () {
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
                this.currChairIndex = -1;
                for (var i = 0; i < this.chairList.length; i++) {
                    this.creatAudience();
                }
            };
            LyShow.prototype.getChairCom = function () {
                this.currChairIndex++;
                var chairCom = this.chairList.splice(0, 1)[0];
                return chairCom;
            };
            //根据观众动作
            LyShow.prototype.getRDEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 4;
                });
                var index = Random.range(0, playActList.length);
                return playActList[index].eventList;
            };
            //获取艺人欢呼动作
            LyShow.prototype.getCheerEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 7;
                });
                var index = Random.range(0, playActList.length);
                return playActList[index].eventList;
            };
            //获取主持人开场
            LyShow.prototype.getSpeekerEventBegin = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 1;
                });
                var index = Random.range(0, playActList.length);
                var events = playActList[index].eventList;
                this.setTalkParams(events);
                return events;
            };
            //艺人表演
            LyShow.prototype.getActorEvent = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 3;
                });
                var index = Random.range(0, playActList.length);
                var events = playActList[index].eventList;
                this.setTalkParams(events);
                return events;
            };
            //艺人表演后主持人小结
            LyShow.prototype.getSpeekerEventSummary = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && (value.data % 10 == 2);
                });
                var index = Random.range(0, playActList.length);
                var events = playActList[index].eventList;
                this.setTalkParams(events);
                return events;
            };
            //主持人宣布路演成功
            LyShow.prototype.getSpeekerEventSucc = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 5;
                });
                var index = Random.range(0, playActList.length);
                var events = playActList[index].eventList;
                this.setTalkParams(events);
                return events;
            };
            //主持人宣布路演失败
            LyShow.prototype.getSpeekerEventFail = function () {
                var playActList = Game.config.playAct.getConfigList();
                playActList = playActList.filter(function (value, index, array) {
                    return value.type == PerformType.RoadShow && value.data % 10 == 6;
                });
                var index = Random.range(0, playActList.length);
                var events = playActList[index].eventList;
                this.setTalkParams(events);
                return events;
            };
            LyShow.prototype.getAvatar = function (avatarUid) {
                return this.avatarList.findOne(function (value) {
                    return value.uid == avatarUid;
                });
            };
            //观众欢呼
            LyShow.prototype.cheer = function () {
                var _this = this;
                console.log("Audience->cheer");
                this.avatarList.forEach(function (value, index, array) {
                    value.endEvent(false);
                    value.executeActionEvents(_this.getCheerEvent(), PerformType.RoadShow);
                });
            };
            return LyShow;
        }(PfSkin.LyShowStruct));
        PfSkin.LyShow = LyShow;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyShow.js.map