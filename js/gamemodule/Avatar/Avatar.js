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
    var Sprite = laya.display.Sprite;
    var Rectangle = laya.maths.Rectangle;
    var Event = laya.events.Event;
    var Avatar = /** @class */ (function (_super) {
        __extends(Avatar, _super);
        function Avatar() {
            var _this = _super.call(this) || this;
            _this.scaleFactor = 1; //缩放比
            _this.DEFAULT_TALK_TIME = 5; //默认说话时长-秒
            _this.currentAnimName = ""; //当前播放动画名
            _this.currentAnimLoop = false; //当前播放动画循环状态
            //执行事件
            _this.DELTA_TIME = 0.02; //秒
            _this.animSequence = []; //分段动画序列
            _this.eventList = []; //事件列表
            _this.performType = Games.PerformType.FreeWalk; //表演类型
            _this.currEventId = 0; //当前事件Id
            _this.speed = 100;
            _this.speed2 = 0.1; // run = walk*2;
            _this.elapseTime = 0;
            _this.elapseTalkTime = 0;
            _this.isAllwaysTalkShow = false; //是否始终显示对话
            _this.slotName = ""; //当前装备部件的槽位名
            _this.isOnPointEvent = false; //是否正在执行位移事件
            _this.isInScreen = true;
            _this.isDestoryed = false;
            //是否暂停事件
            _this._isPause = false;
            //设置avatar行为结束
            _this._isBehaviorFinish = true;
            //-----------------------------------------------
            // 对话框
            //-----------------------------------------------        
            _this._isSetTalkBoxPos = true;
            _this.hasTalk = true;
            //方向
            _this._direction = Games.DirtionType.Right;
            _this.animator = new Games.CAnimation();
            _this.talkBoxSprite = new Sprite();
            _this.addChildAt(_this.talkBoxSprite, 0);
            _this.talkBox = fgui.Common.TalkBox.createInstance();
            _this.talkBoxSprite.addChild(_this.talkBox.displayObject);
            return _this;
        }
        /** 进入屏幕范围 */
        Avatar.prototype.inScreen = function () {
            if (!this.isInScreen) {
                this.isInScreen = true;
                this.onInScreen();
            }
        };
        /** 离开屏幕范围 */
        Avatar.prototype.outScreen = function () {
            if (this.isInScreen) {
                this.isInScreen = false;
                this.onOutScreen();
            }
        };
        Avatar.prototype.onInScreen = function () {
            // console.log("onInScreen:" + this.animator.texturePath);
            this.startAnimator();
        };
        Avatar.prototype.onOutScreen = function () {
            // console.log("onOutScreen:" + this.animator.texturePath);
            this.pauseAnimator();
        };
        Object.defineProperty(Avatar.prototype, "isPause", {
            get: function () {
                return this._isPause;
            },
            set: function (val) {
                if (val) {
                    if (!this._isPause) {
                        if (this.tween) {
                            this.tween.pause();
                        }
                        this.pauseMoveAnim();
                    }
                }
                else {
                    if (this._isPause) {
                        if (this.tween) {
                            this.tween.resume();
                        }
                        this.resumeMoveAnim();
                    }
                }
                this._isPause = val;
            },
            enumerable: true,
            configurable: true
        });
        //销毁
        Avatar.prototype.dispose = function () {
            if (!this.isDestoryed) {
                this.animator.dispose();
                this.off(Event.CLICK, this, this.onAvatarClick);
                this.animator.sPlayEnd.remove(this.onAnimPlayEnd, this);
                Laya.timer.clear(this, this.onTimeLoop);
                this.clearTween();
                if (this.headIcon) {
                    this.headIcon.removeFromParent();
                    this.headIcon = null;
                }
                this.creatComplete = null;
                this.isDestoryed = true;
                this._isSetTalkBoxPos = false;
                this.destroy();
            }
        };
        Avatar.prototype.creatGraph = function (x, y, w, h) {
            var sp = new Sprite();
            //画矩形
            sp.graphics.drawRect(x, y, w, h, "#ff9900");
            sp.mouseEnabled = false;
            sp.size(w, h);
            sp.on(Event.CLICK, this, this.onAvatarClick);
            this.addChild(sp);
        };
        Avatar.prototype.init = function (info, creatComplete, isInScreen) {
            // if (info.config)
            //     console.log(`@@@@@@@@@@@@@@@@@@ Avatar init 艺人: ${Avatar.__index++}    ${info.config.id}   ${info.config.cn_name}   ${info.texturePath}`);
            var _this = this;
            if (isInScreen === void 0) { isInScreen = true; }
            // else if (info.npcConfig)
            //     console.log(`@@@@@@@@@@@@@@@@@@ Avatar init NPC: ${Avatar.__index++}    ${info.npcConfig.id}   ${info.npcConfig.cn_name}   ${info.texturePath}`);
            // else
            //     console.log(`@@@@@@@@@@@@@@@@@@ Avatar init Other: ${Avatar.__index++}    ${info.texturePath}`);
            this.info = info;
            this.creatComplete = creatComplete;
            this.uid = ++Avatar.incrementId;
            this.info.uid = this.uid;
            this.direction = info.direction;
            this.setBounds(new Rectangle(-this.width / 2, -this.height, this.width, this.height));
            this.hitArea = new Rectangle(-this.width / 2, -this.height - this.talkBox.height, this.width, this.height);
            this.initTalkBox();
            this.hideTalk();
            Laya.timer.loop(this.DELTA_TIME * 1000, this, this.onTimeLoop, null, true, true);
            this.on(Event.CLICK, this, this.onAvatarClick);
            this.animator.sPlayEnd.add(this.onAnimPlayEnd, this);
            this.animator.crossFade(info.idleName, true); //idle
            if (this.creatComplete) {
                setTimeout(function () {
                    if (_this.creatComplete) {
                        _this.creatComplete(info);
                    }
                }, 20);
            }
            this.animator.loadAnim(info.texturePath, info.skeletonPath, this, false);
            this.isInScreen = isInScreen;
            if (isInScreen)
                this.startAnimator();
        };
        /**
         * 暂停动画
         */
        Avatar.prototype.pauseAnimator = function () {
            this.animator.recoverSkeleton();
        };
        /**
         * 启动动画
         */
        Avatar.prototype.startAnimator = function () {
            this.animator.getSkeleton();
        };
        // 创建阴影        
        Avatar.prototype.createShadow = function () {
            //creat shadow
            this.shadow = fgui.Common.AvatarShadow.createInstance();
            var shadowScale = 1 / this.scaleFactor;
            this.shadow.setScale(shadowScale, shadowScale);
            this.shadow.setXY(-this.shadow.sourceWidth * shadowScale / 2, -this.shadow.sourceHeight * shadowScale / 3);
            this.addChildAt(this.shadow.displayObject, 0);
        };
        //设置点击区域
        Avatar.prototype.setHitArea = function (width, height, offsetX, offsetY) {
            if (offsetX === void 0) { offsetX = 0; }
            if (offsetY === void 0) { offsetY = 0; }
            var _x = -width / 2;
            var _y = -height - this.talkBox.height;
            var dir = (this.direction == Games.DirtionType.Left) ? -1 : 1;
            this.hitArea = new Rectangle(_x + offsetX * dir, _y + offsetY, width, height);
            // this.creatGraph(_x + offsetX * dir, _y + offsetY, width, height);
        };
        Avatar.prototype.setRoomInfo = function (roomInfo) {
            this.roomInfo = roomInfo;
            this.info.roomInfo = roomInfo;
        };
        //开启关闭阴影
        Avatar.prototype.openShadow = function () {
            if (this.shadow) {
                this.shadow.visible = true;
            }
            else {
                this.createShadow();
            }
        };
        Avatar.prototype.closeShadow = function () {
            if (this.shadow) {
                this.shadow.visible = false;
            }
        };
        //执行事件列表
        Avatar.prototype.executeActionEvents = function (events, performType) {
            this.eventList = events;
            if (performType) {
                this.performType = performType;
            }
            this.behaviorFinish = false;
        };
        Avatar.prototype.onAnimPlayEnd = function () {
            this.playNextAnim();
        };
        Avatar.prototype.onAvatarClick = function () {
            Games.AvatarManager.sAvatarClick.dispatch(this.getDispatchInfo());
        };
        Object.defineProperty(Avatar.prototype, "behaviorFinish", {
            get: function () {
                return this._isBehaviorFinish;
            },
            set: function (value) {
                this._isBehaviorFinish = value;
            },
            enumerable: true,
            configurable: true
        });
        //time update
        Avatar.prototype.onTimeLoop = function () {
            var _this = this;
            if (this.isPause) {
                return;
            }
            //是否始终显示对话
            if (!this.isAllwaysTalkShow) {
                this.elapseTalkTime += this.DELTA_TIME * 1000;
                if (this.elapseTalkTime > this.DEFAULT_TALK_TIME * 1000) {
                    this.hideTalk();
                }
            }
            //执行事件
            if (!this.behaviorFinish) {
                if (this.currAction != null) {
                    if (this.elapseTalkTime >= this.currAction.talkActionTime) {
                        this.hideTalk();
                        // this.currAction.getTalk();
                        this.elapseTalkTime = 0;
                    }
                    //时间动作
                    if (this.currAction.actionType == Games.ActionType.Time) {
                        this.elapseTime += this.DELTA_TIME * 1000;
                        this.frameAction();
                        if (this.elapseTime >= this.currAction.actionTime) {
                            this.nextEvent();
                        }
                    }
                    //位移动作
                    else if (this.currAction.actionType == Games.ActionType.Point) {
                        if (!this.isOnPointEvent) {
                            this.isOnPointEvent = true;
                            this.moveTo(this.currAction.actionPointX, false, Handler.create(this, function () {
                                _this.nextEvent();
                            }, null, true));
                        }
                    }
                }
                else {
                    this.nextEvent();
                }
            }
        };
        //-----------------------------------------------
        // 事件处理
        //-----------------------------------------------    
        Avatar.prototype.nextEvent = function () {
            if (this.eventList.length == 0) {
                this.endEvent(true);
                return;
            }
            if (this.currAction != null) {
                Games.AvatarManager.sEventFinish.dispatch(this.getDispatchInfo());
            }
            this.elapseTime = 0;
            this.elapseTalkTime = 0;
            this.isOnPointEvent = false;
            var event = this.eventList.splice(0, 1)[0];
            this.currEventId = event.evtId;
            this.currAction = event.actionInfo;
            if (this.currAction.actionId > 0) {
                if (!this.isMoveActionId(this.currAction.actionId)) {
                    this.clearTween();
                }
                var actionCfg = Game.config.action.getConfig(this.currAction.actionId);
                var actionName = actionCfg.action;
                this.playAction(this.currAction.actionId);
            }
            // console.log(`eventId=${event.evtId} actionId=${this.currAction.actionId} ${actionName}|${this.currAction.actionTime} talkId=${this.currAction.talkActionId}|${this.currAction.talkActionTime}`);
            //speak
            if (this.currAction.talkActionId != 0) {
                var speakCfg = Game.config.speak.getConfig(this.currAction.talkActionId);
                if (speakCfg) {
                    this.setTalk(format(speakCfg.speak, this.currAction.talkParams));
                }
            }
        };
        Avatar.prototype.endEvent = function (onEvent) {
            this.stand();
            this.hideTalk();
            if (this.currEventId != 0) {
                Games.AvatarManager.sEventFinish.dispatch(this.getDispatchInfo());
            }
            this.resetSlotSkin(this.slotName);
            this.currEventId = 0;
            this.currAction = null;
            this.behaviorFinish = true;
            this.isOnPointEvent = false;
            if (onEvent) {
                Games.AvatarManager.sBehaviorFinish.dispatch(this.getDispatchInfo());
            }
        };
        Avatar.prototype.frameAction = function () {
            this.parseAction();
        };
        Avatar.prototype.parseAction = function () {
            switch (this.currAction.actionId) {
                //walk
                case 1004:
                    this.frameWalk();
                    break;
                //run
                case 1005:
                    this.frameRun();
                    break;
            }
        };
        Avatar.prototype.isMoveActionId = function (actionId) {
            return actionId == 1004 || actionId == 1005;
        };
        Avatar.prototype.frameWalk = function () {
            var sceneWidth = this.roomInfo ? this.roomInfo.sceneWidth : Laya.stage.width;
            if (this.x >= sceneWidth - Avatar.STAGE_OFFSET_ENTER) {
                this.x = sceneWidth - Avatar.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Left;
            }
            if (this.x <= Avatar.STAGE_OFFSET_ENTER) {
                this.x = Avatar.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Right;
            }
            var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
            this.x += this.speed * this.DELTA_TIME * dir;
        };
        Avatar.prototype.frameRun = function () {
            var sceneWidth = this.roomInfo ? this.roomInfo.sceneWidth : Laya.stage.width;
            if (this.x >= sceneWidth - Avatar.STAGE_OFFSET_ENTER) {
                this.x = sceneWidth - Avatar.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Left;
            }
            if (this.x <= Avatar.STAGE_OFFSET_ENTER) {
                this.x = Avatar.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Right;
            }
            var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
            this.x += this.speed * 2 * this.DELTA_TIME * dir;
        };
        Avatar.prototype.getDispatchInfo = function () {
            var dispatchInfo = new Games.RoomAvatarData();
            dispatchInfo.onEvent = true;
            dispatchInfo.performType = this.performType;
            dispatchInfo.avatarUid = this.info.uid;
            dispatchInfo.avatarId = this.info.id;
            if (this.roomInfo) {
                dispatchInfo.roomId = this.roomInfo.id;
                dispatchInfo.roomType = this.roomInfo.type;
            }
            if (this.currAction != null) {
                dispatchInfo.eventId = this.currEventId;
            }
            return dispatchInfo;
        };
        Avatar.prototype.setTopHeadIcon = function (headIcon, onFront) {
            if (onFront === void 0) { onFront = false; }
            if (this.headIcon) {
                this.headIcon.removeFromParent();
                this.headIcon = null;
            }
            if (headIcon) {
                this.headIcon = headIcon;
                var bound = this.getBounds();
                this.headIcon.x = -(bound.width / 4 + headIcon.width / 2);
                this.headIcon.y = -bound.height - headIcon.height;
                this.talkBoxSprite.addChild(headIcon.displayObject);
                if (onFront) {
                    this.setChildIndex(this.talkBoxSprite, this.numChildren - 1);
                }
            }
        };
        Object.defineProperty(Avatar.prototype, "isSetTalkBoxPos", {
            get: function () {
                return this._isSetTalkBoxPos;
            },
            set: function (value) {
                this._isSetTalkBoxPos = value;
            },
            enumerable: true,
            configurable: true
        });
        Avatar.prototype.initTalkBox = function () {
            this.talkBoxSprite.scale(1 / Games.CAnimation.SCALE_DEFAULT, 1 / Games.CAnimation.SCALE_DEFAULT);
            var x = -this.talkBox.width / 2;
            var y = -this.getBounds().height - this.talkBox.height;
            this.talkBox.setXY(x, y);
        };
        Avatar.prototype.scaleTalkBox = function (scale, talkBoxOffsetY, talkBoxOffsetX) {
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            var sourceScale = this.talkBoxSprite.scaleX;
            var newScale = sourceScale * scale;
            this.talkBoxSprite.scale(newScale, newScale);
            var ds = (1 - 1 / scale) * Games.CAnimation.SCALE_DEFAULT;
            var dx = this.height * ds;
            this.talkBox.y += dx;
            this.talkBox.y += talkBoxOffsetY;
            this.talkBox.x -= talkBoxOffsetX * (1 / scale);
        };
        Avatar.prototype.setTalk = function (text, allwaysShow) {
            if (!this.isInScreen)
                return;
            if (this.isDestoryed) {
                console.log("Avatar.setTalk: " + text);
                return;
            }
            if (this.headIcon) {
                this.headIcon.removeFromParent();
                this.headIcon = null;
            }
            this.isAllwaysTalkShow = allwaysShow;
            this.elapseTalkTime = 0;
            this.hasTalk = true;
            this.talkBox.setText(text);
            if (this.isSetTalkBoxPos) {
                var x = -this.talkBox.width / 2;
                var y = -this.getBounds().height - this.talkBox.height;
                this.talkBox.setXY(x, y);
            }
            this.talkBox.visible = true;
        };
        Avatar.prototype.hideTalk = function () {
            if (this.hasTalk) {
                this.hasTalk = false;
                this.talkBox.visible = false;
            }
        };
        Avatar.prototype.hideTalkDirectly = function () {
            this.talkBox.visible = false;
        };
        //-----------------------------------------------
        // 动作
        //-----------------------------------------------    
        /**
         * 直接进来移动到目标
         * @param x  x值
         * @param y  y值
         */
        Avatar.prototype.enterTo = function (x, y, direction, handler) {
            this.x = x;
            if (y) {
                this.y = y;
            }
            if (direction) {
                this.direction = direction;
            }
            if (handler) {
                handler.run();
            }
        };
        Avatar.prototype.enter = function (onEvent, isBornFixedPos) {
            var _this = this;
            var sceneWidth = this.roomInfo ? this.roomInfo.sceneWidth : Laya.stage.width;
            var dx = 0;
            if (isBornFixedPos) {
                dx = Avatar.STAGE_OFFSET_ENTER;
                if (this.x > 0) {
                    dx = sceneWidth - Avatar.STAGE_OFFSET_ENTER;
                }
            }
            else {
                dx = Random.rangeBoth(Avatar.STAGE_OFFSET_ENTER, sceneWidth / 2); //随机区间;
                if (this.x > 0) {
                    dx = Random.rangeBoth(sceneWidth / 2, sceneWidth - Avatar.STAGE_OFFSET_ENTER); //随机区间
                }
            }
            this.moveTo(dx, false, Handler.create(this, function () {
                var dispathData = _this.getDispatchInfo();
                dispathData.onEvent = onEvent;
                Games.AvatarManager.sAvatarEnter.dispatch(dispathData);
            }, null, true));
        };
        Avatar.prototype.leave = function (onEvent, isRun, moveActionId) {
            var _this = this;
            var sceneWidth = this.roomInfo ? this.roomInfo.sceneWidth : Laya.stage.width;
            var dx = sceneWidth + Avatar.STAGE_OFFSET_LEAVE;
            if (this.x < sceneWidth / 2) {
                dx = -Avatar.STAGE_OFFSET_LEAVE;
            }
            this.moveTo(dx, isRun, Handler.create(this, function () {
                var dispathData = _this.getDispatchInfo();
                dispathData.onEvent = onEvent;
                Games.AvatarManager.sAvatarLeave.dispatch(dispathData);
            }, null, true), null, true, moveActionId);
        };
        //移动
        Avatar.prototype.moveTo = function (xValue, isRun, complete, endAnim, loop, moveActionId) {
            var _this = this;
            var walkActionId = 1004;
            var runActionId = 1005;
            var animActionId = isRun ? runActionId : walkActionId;
            if (moveActionId) {
                animActionId = moveActionId;
            }
            this.playAction(animActionId);
            var distance = Math.abs(this.x - xValue);
            var speedRate = isRun ? 1.5 : 1;
            var duration = distance / (this.speed2 * speedRate); //持续时间
            this.direction = this.x > xValue ? Games.DirtionType.Left : Games.DirtionType.Right;
            if (!endAnim) {
                endAnim = this.info.idleName;
                loop = true;
            }
            this.tween = Laya.Tween.to(this, { x: xValue }, duration, Laya.Ease.linearIn, Handler.create(null, function () {
                _this.play(endAnim, loop);
                _this.tween = null;
                if (complete) {
                    complete.run();
                }
            }), 0, true, true);
            return this.tween;
        };
        Avatar.prototype.clearTween = function () {
            if (this.tween != null) {
                Laya.Tween.clear(this.tween);
                this.tween = null;
            }
        };
        //瞬移
        Avatar.prototype.teleport = function (x, y, direction, anim, loop) {
            this.x = x;
            this.x = y;
            if (direction) {
                this.direction = direction;
            }
            if (anim) {
                this.play(anim, loop);
            }
        };
        //坐下
        Avatar.prototype.sitDown = function (x, y, anim) {
            this.x = x;
            this.y = y;
            if (anim) {
                this.play(anim, true);
            }
            else {
                this.play("zuoxia1", true);
            }
        };
        //坐上椅子
        Avatar.prototype.sitChairDown = function (x, y, anim) {
            this.x = x;
            this.y = y;
            if (anim) {
                this.play(anim, false);
            }
            else {
                this.play("zuoshangyizi1", false);
            }
        };
        //跳下椅子
        Avatar.prototype.sitChairUp = function (anim) {
            if (anim) {
                this.play(anim, false);
            }
            else {
                this.play("tiaoxiayizi1", false);
            }
        };
        //站立
        Avatar.prototype.stand = function (name, x, y) {
            if (x) {
                this.x = x;
            }
            if (y) {
                this.y = y;
            }
            if (name) {
                if (isNumber(name)) {
                    this.playAction(name);
                }
                else {
                    this.play(name, true);
                }
                return;
            }
            this.play(this.info.idleName, true);
        };
        Object.defineProperty(Avatar.prototype, "direction", {
            get: function () {
                return this._direction;
            },
            set: function (value) {
                if (value == Games.DirtionType.Right) {
                    this.skewY = 0;
                    this.talkBoxSprite.skewY = 0;
                }
                if (value == Games.DirtionType.Left) {
                    this.skewY = 180;
                    this.talkBoxSprite.skewY = 180;
                }
                this._direction = value;
            },
            enumerable: true,
            configurable: true
        });
        //重置骨骼槽位名
        Avatar.prototype.resetSlotSkin = function (slotName) {
            if (this.slotName != "") {
                this.animator.resetSlotSkin(this.slotName);
                this.slotName = "";
            }
        };
        Avatar.prototype.setScale = function (scaleFactor, speedMode) {
            this.scaleFactor = scaleFactor;
            this.scale(scaleFactor, scaleFactor, speedMode);
        };
        Avatar.prototype.resetScale = function (scaleFactor, speedMode) {
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            this.scaleFactor = scaleFactor;
            this.scale(this.scaleFactor, this.scaleFactor, speedMode);
        };
        //播放动作id
        Avatar.prototype.playAction = function (actionId) {
            var actionCfg = Game.config.action.getConfig(actionId);
            if (actionCfg) {
                //单项循环动作
                if (actionCfg.loop == 1) {
                    this.animSequence.length = 0;
                    // this.resetSlotSkin(this.slotName);
                    // if (actionCfg.parts.v2 != null) //是否需要装备部件
                    // {
                    //     this.slotName = actionCfg.parts.v1;
                    //     let slotTexturePath = Res.getSpineSoltPartPath(actionCfg.parts.v2);
                    //     this.animator.setSlotSkinPath(this.slotName, slotTexturePath);
                    // }
                    this.play(actionCfg.action, true);
                }
                //组动作
                else {
                    this.playList(actionCfg.actionSequence);
                }
            }
            else {
                console.error("error: playAction -> " + actionId);
            }
        };
        //播放动作名
        Avatar.prototype.play = function (anim, loop) {
            if (this.isDestoryed) {
                console.log("Avatar.play: " + anim);
                return;
            }
            if (anim != "" && this.currentAnimName != anim) {
                this.currentAnimName = anim;
                this.currentAnimLoop = loop;
                this.animator.play(anim, loop);
            }
        };
        Avatar.prototype.playList = function (animSequence) {
            this.animSequence = animSequence;
            this.playNextAnim();
        };
        Avatar.prototype.playNextAnim = function () {
            if (this.animSequence.length > 0) {
                var animId = this.animSequence.splice(0, 1)[0];
                var anim = this.getAnimConfgName(animId);
                var isEndAnim = (this.animSequence.length == 0);
                this.play(anim, isEndAnim);
            }
        };
        Avatar.prototype.getAnimConfgName = function (animId) {
            var cfg = Game.config.action.getConfig(animId);
            return cfg.action || "";
        };
        Avatar.prototype.pauseMoveAnim = function () {
            if (this.isMoveAnim) {
                this.animator.play(this.info.idleName, true);
            }
        };
        Avatar.prototype.resumeMoveAnim = function () {
            if (this.isDestoryed) {
                return;
            }
            if (this.isMoveAnim) {
                this.animator.play(this.currentAnimName, this.currentAnimLoop);
            }
        };
        Object.defineProperty(Avatar.prototype, "isMoveAnim", {
            get: function () {
                return this.currentAnimName == "zoulu1" || this.currentAnimName == "paodong1";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建Avatar
         * @param info
         * @param boundWidth    设置bound宽度
         * @param boundHeight   设置bound高度
         * @param scaleFactor   设置缩放比
         */
        Avatar.Creat = function (info, creatComplete, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            var avatar = new Avatar();
            avatar.id = info.id;
            avatar.setScale(scaleFactor, true);
            avatar.size(boundWidth, boundHeight);
            avatar.init(info, creatComplete, true);
            return avatar;
        };
        /**
         *
         * @param info 主界面楼层创建单位
         * @param creatComplete
         */
        Avatar.RoomCreate = function (info, creatComplete) {
            var boundWidth = 190;
            var boundHeight = 620;
            var scaleFactor = 0.26;
            var avatar = new Avatar();
            avatar.id = info.id;
            avatar.setScale(scaleFactor, true);
            avatar.size(boundWidth, boundHeight);
            avatar.init(info, creatComplete, false);
            return avatar;
        };
        Avatar.incrementId = 10000;
        Avatar.STAGE_OFFSET_ENTER = 180; //avatar进入
        Avatar.STAGE_OFFSET_LEAVE = 50; //avatar离开
        Avatar.__index = 0;
        return Avatar;
    }(Sprite));
    Games.Avatar = Avatar;
})(Games || (Games = {}));
//# sourceMappingURL=Avatar.js.map