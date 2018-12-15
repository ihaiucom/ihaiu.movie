var Games;
(function (Games) {
    /** 单位代理 */
    var UnitAgent = /** @class */ (function () {
        function UnitAgent() {
            //是否在屏幕中
            this.isInScreen = true;
            //是否暂停事件
            this._isPause = false;
            //------------------------------------------------
            // 执行事件
            //------------------------------------------------
            //单位默认缩放比
            this.UNIT_DEFAULT_SCALE = 0.26;
            /** 执行事件 */
            this.STAGE_OFFSET_ENTER = 180; //avatar进入
            this.STAGE_OFFSET_LEAVE = 50; //avatar离开
            this.DELTA_TIME = 0.02; //秒
            this.speed = 100; //行走速度
            this.speedRun = 150; //跑步速度
            this.elapseTime = 0;
            this.elapseTalkTime = 0;
            this.isExecuteMoveToPoint = false; //时间事件位移动作改为随机点
            this.isOnPointEvent = false; //是否正在执行位移事件
            //设置事件行为结束
            this._eventFinish = true;
            this.unit = new Games.EUnit();
            this.unitModel = new Games.UnitModel();
            this.unit.unitData = this.unitModel;
        }
        UnitAgent.prototype.dispose = function () {
            if (this.isDisposed)
                return;
            if (this.unit) {
                this.unit.dispose();
                this.unit = null;
                this.unitModel = null;
            }
        };
        Object.defineProperty(UnitAgent.prototype, "isDisposed", {
            get: function () {
                if (this.unit) {
                    return this.unit.isDisposed;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        /** 初始化 */
        UnitAgent.prototype.init = function (info, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            this.unitModel = new Games.UnitModel();
            this.unitModel.setInfo(info);
            this.unit.unitData = this.unitModel;
            var moveComponent = Games.ComponentHelper.requestItem(Games.UnitMoveComponent);
            moveComponent.unit = this.unit;
            var viewComponent = Games.ComponentHelper.requestItem(Games.UnitSkeletonViewCompoent);
            viewComponent.unit = this.unit;
            var animatorComponent = Games.ComponentHelper.requestItem(Games.UnitAnimatorComponent);
            animatorComponent.unit = this.unit;
            var talkComponent = Games.ComponentHelper.requestItem(Games.UnitTalkComponent);
            talkComponent.unit = this.unit;
            this.unit.addComponent(moveComponent);
            this.unit.addComponent(viewComponent);
            this.unit.addComponent(animatorComponent);
            this.unit.addComponent(talkComponent);
            this.setScale(scaleFactor, true);
            this.size(boundWidth, boundHeight);
            this.unit.creat(info, this, this.onCreatComplete);
        };
        /** request单位完成 */
        UnitAgent.prototype.onCreatComplete = function (skeleton) {
            this.playAction(this.unitModel.currentAnimId);
        };
        /** 显示容器 */
        UnitAgent.prototype.showOn = function (parent, displayIndex) {
            if (displayIndex === void 0) { displayIndex = -1; }
            this.unit.showOn(parent, displayIndex);
        };
        /** 进入屏幕范围 */
        UnitAgent.prototype.inScreen = function () {
            if (!this.isInScreen) {
                this.isInScreen = true;
                this.onInScreen();
            }
        };
        /** 离开屏幕范围 */
        UnitAgent.prototype.outScreen = function () {
            if (this.isInScreen) {
                this.isInScreen = false;
                this.onOutScreen();
            }
        };
        UnitAgent.prototype.onInScreen = function () {
            this.unit && this.unit.startAnimator();
        };
        UnitAgent.prototype.onOutScreen = function () {
            this.unit && this.unit.pauseAnimator();
        };
        Object.defineProperty(UnitAgent.prototype, "isPause", {
            get: function () {
                return this._isPause;
            },
            set: function (val) {
                if (val) {
                    if (!this._isPause) {
                        // this.unit && this.unit.pauseMoveAnim();
                    }
                }
                else {
                    if (this._isPause) {
                        // this.unit && this.unit.resumeMoveAnim();
                    }
                }
                this._isPause = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitAgent.prototype, "visible", {
            /** 设置单位是否可见 */
            set: function (val) {
                this.unitModel.visible = val;
                if (val) {
                    this.unit && this.unit.unitView.Show();
                }
                else
                    this.unit && this.unit.unitView.Hide();
            },
            enumerable: true,
            configurable: true
        });
        /** 开启关闭阴影 */
        UnitAgent.prototype.openShadow = function () {
            this.unitModel.isOpenShadow = true;
            this.unit && this.unit.unitView.openShadow();
        };
        UnitAgent.prototype.closeShadow = function () {
            this.unitModel.isOpenShadow = false;
            this.unit && this.unit.unitView.openShadow(false);
        };
        /** 设置房间信息 */
        UnitAgent.prototype.setRoomInfo = function (roomInfo) {
            this.unitModel.roomInfo = roomInfo;
            // console.log("setRoomInfo -- " + this.unit.unitData.roomInfo.type);
        };
        /** 设置单位缩放比 */
        UnitAgent.prototype.setScale = function (scaleFactor, speedMode) {
            this.unitModel.scaleFactor = scaleFactor;
        };
        UnitAgent.prototype.resetScale = function (scaleFactor) {
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            this.setScale(scaleFactor);
        };
        Object.defineProperty(UnitAgent.prototype, "x", {
            get: function () {
                return this.unitModel.x;
            },
            /** 设置坐标值 */
            set: function (val) {
                this.unitModel.x = val;
                this.unit.unitView.x = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitAgent.prototype, "y", {
            get: function () {
                return this.unitModel.y;
            },
            set: function (val) {
                this.unitModel.y = val;
                this.unit.unitView.y = val;
            },
            enumerable: true,
            configurable: true
        });
        /** 设置位置 */
        UnitAgent.prototype.pos = function (x, y) {
            this.x = x;
            this.y = y;
        };
        //设置宽高
        UnitAgent.prototype.size = function (width, height) {
            this.unitModel.width = width;
            this.unitModel.height = height;
        };
        Object.defineProperty(UnitAgent.prototype, "direction", {
            get: function () {
                return this.unitModel.info.direction;
            },
            //方向
            set: function (val) {
                this.unitModel.info.direction = val;
                this.unit.unitView.direction = val;
            },
            enumerable: true,
            configurable: true
        });
        UnitAgent.prototype.reverseDirection = function () {
            if (this.unitModel.info.direction == Games.DirtionType.Right) {
                this.direction = Games.DirtionType.Left;
            }
            else if (this.unitModel.info.direction == Games.DirtionType.Left) {
                this.direction = Games.DirtionType.Right;
            }
        };
        UnitAgent.prototype.getBounds = function () {
            var rect = new Rectangle(0, 0, 0, 0);
            if (this.unitModel.bounds) {
                rect.x = 0;
                rect.y = 0;
                rect.width = this.unitModel.boundWidth;
                rect.height = this.unitModel.boundHeight;
            }
            return rect;
        };
        UnitAgent.prototype.setHitArea = function (width, height, offsetX, offsetY) {
            if (offsetX === void 0) { offsetX = 0; }
            if (offsetY === void 0) { offsetY = 0; }
            var _x = -width / 2;
            var _y = -height; // - this.talkBoxCtrl.height;
            var dir = (this.direction == Games.DirtionType.Left) ? -1 : 1;
            if (this.unit) {
                this.unit.unitView.hitArea = new Rectangle(_x + offsetX * dir, _y + offsetY, width, height);
            }
        };
        UnitAgent.prototype.setChildIndex = function (index) {
            if (this.unit.unitView.displayObject) {
                this.unit.unitView.displayObject.parent.setChildIndex(this.unit.unitView.displayObject, index);
            }
            if (this.unit.talk.hasTalk) {
                this.unit.unitView.talkBox.parent.setChildIndex(this.unit.unitView.talkBox, index);
            }
        };
        //站立
        UnitAgent.prototype.stand = function (name, x, y) {
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
                    this.play(name);
                }
                return;
            }
            this.play(this.unitModel.info.idleName);
        };
        //坐下
        UnitAgent.prototype.sitDown = function (x, y, anim) {
            this.x = x;
            this.y = y;
            if (anim) {
                this.play(anim);
            }
            else {
                this.play("zuoxia1");
            }
        };
        /** 播放移动动画 */
        UnitAgent.prototype.playeMoveAnim = function () {
            if (this.unitModel && this.unitModel.currAction) {
                this.playAction(this.unitModel.currAction.actionId);
            }
        };
        UnitAgent.prototype.playAction = function (animId) {
            if (this.unitModel.currentAnimId == animId) {
                return;
            }
            this.unitModel.currentAnimId = animId;
            this.unit.animator.playAction(animId);
        };
        UnitAgent.prototype.play = function (name) {
            var actionId = Game.config.action.getActionId(name);
            this.playAction(actionId);
        };
        //----------------------------------
        // 动作
        //----------------------------------
        /**
         * 直接进入到目标点
         * @param x  x值
         * @param y  y值
         */
        UnitAgent.prototype.enterTo = function (x, y, direction, handler) {
            this.x = x;
            if (y)
                this.y = y;
            if (direction)
                this.direction = direction;
            if (handler)
                handler.run();
        };
        UnitAgent.prototype.enter = function (onEvent) {
            var _this = this;
            var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
            var dx = 0;
            {
                dx = this.STAGE_OFFSET_ENTER;
                if (this.x > 0) {
                    dx = sceneWidth - this.STAGE_OFFSET_ENTER;
                }
            }
            this.moveTo(dx, false, Handler.create(this, function () {
                var dispathData = _this.unit.getEventData();
                dispathData.onEvent = onEvent;
                dispathData.isEnterRoom = true;
                Games.AvatarManager.sAvatarMoveEnd.dispatch(dispathData);
                // AvatarManager.sAvatarEnter.dispatch(dispathData);
            }, null, true));
        };
        UnitAgent.prototype.leave = function (onEvent, isRun, moveActionId) {
            var _this = this;
            var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
            var dx = sceneWidth + this.STAGE_OFFSET_LEAVE;
            if (this.x < sceneWidth / 2) {
                dx = -this.STAGE_OFFSET_LEAVE;
            }
            this.moveTo(dx, isRun, Handler.create(this, function () {
                var dispathData = _this.unit.getEventData();
                dispathData.onEvent = onEvent;
                Games.AvatarManager.sAvatarLeave.dispatch(dispathData);
            }, null, true), null, true, moveActionId);
        };
        //移动
        UnitAgent.prototype.moveTo = function (xValue, isRun, complete, endAnim, loop, moveActionId) {
            var animId = 1004;
            isRun && (animId = 1005);
            moveActionId && (animId = moveActionId);
            //创建顺序序列
            var sequenceMove = Pool.getItem(Games.SequenceMove);
            sequenceMove.initAgent(this);
            var moveAction = Pool.getItem(Games.MoveAction);
            moveAction.pointX = xValue;
            moveAction.animId = animId;
            if (complete)
                moveAction.completeHandler = complete;
            if (endAnim)
                moveAction.endAnimName = this.unitModel.info.idleName;
            if (loop)
                moveAction.endAnimLoop = loop;
            sequenceMove.addNode(moveAction);
            this.unit.move.setSequenceMove(sequenceMove);
        };
        /** 设置单位头顶头像 */
        UnitAgent.prototype.setTopHeadIcon = function (headIcon, sourceScale) {
            if (sourceScale === void 0) { sourceScale = 0.26; }
            this.unit.unitView.setTopHeadIcon(headIcon, sourceScale);
        };
        //-----------------------------------------------
        // 对话
        //-----------------------------------------------
        UnitAgent.prototype.setTalk = function (text, allwaysShow) {
            if (!this.isInScreen)
                return;
            this.elapseTalkTime = 0;
            this.unit.talk.setTalk(text, allwaysShow);
        };
        UnitAgent.prototype.hideTalk = function () {
            this.unit.talk && this.unit.talk.hideTalk();
        };
        UnitAgent.prototype.scaleTalkBox = function (scale, talkBoxOffsetX, talkBoxOffsetY) {
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            this.unit.talk.scaleTalkBox(scale, talkBoxOffsetX, talkBoxOffsetY);
        };
        Object.defineProperty(UnitAgent.prototype, "eventFinish", {
            get: function () {
                return this._eventFinish;
            },
            set: function (value) {
                this._eventFinish = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 执行事件
         * @param events
         * @param performType
         */
        UnitAgent.prototype.executeActionEvents = function (events, performType) {
            this.unit.unitData.eventList = events;
            if (performType) {
                this.unit.unitData.performType = performType;
            }
            this.eventFinish = false;
        };
        UnitAgent.prototype.nextEvent = function () {
            if (this.eventFinish)
                return;
            if (this.unit.unitData.eventList.length == 0) {
                this.endEvent(true);
                return;
            }
            if (this.unit.unitData.currAction != null) {
                Games.AvatarManager.sEventFinish.dispatch(this.unit.getEventData());
            }
            this.hideTalk();
            this.elapseTime = 0;
            this.elapseTalkTime = 0;
            this.isOnPointEvent = false;
            this.isExecuteMoveToPoint = false;
            var event = this.unit.unitData.eventList.splice(0, 1)[0];
            this.unit.unitData.currEventId = event.evtId;
            this.unit.unitData.currAction = event.actionInfo;
            if (this.unit.unitData.currAction.actionId > 0) {
                var actionCfg = Game.config.action.getConfig(this.unit.unitData.currAction.actionId);
                var actionName = actionCfg.action;
                this.unit.animator.playAction(this.unit.unitData.currAction.actionId);
            }
            //speak
            if (this.unit.unitData.currAction.talkActionId != 0) {
                var speakCfg = Game.config.speak.getConfig(this.unit.unitData.currAction.talkActionId);
                if (speakCfg) {
                    this.unit.talk.setTalk(format(speakCfg.speak, this.unit.unitData.currAction.talkParams));
                }
            }
        };
        UnitAgent.prototype.endEvent = function (onEvent) {
            this.stand();
            this.hideTalk();
            if (this.unitModel.currEventId != 0) {
                Games.AvatarManager.sEventFinish.dispatch(this.unit.getEventData());
            }
            this.unitModel.eventList.length = 0;
            this.unitModel.currEventId = 0;
            this.unitModel.currAction = null;
            this.eventFinish = true;
            this.isOnPointEvent = false;
            this.isExecuteMoveToPoint = false;
            if (onEvent) {
                var eventData = this.unit.getEventData();
                this.unitModel.performType = Games.PerformType.FreeWalk;
                Games.AvatarManager.sBehaviorFinish.dispatch(eventData);
            }
            else {
                this.unitModel.performType = Games.PerformType.FreeWalk;
            }
        };
        //------------------------------------------------
        // 帧更新
        //------------------------------------------------
        /** 逻辑更新 */
        UnitAgent.prototype.onUpdate = function () {
            var _this = this;
            if (this.isPause)
                return;
            if (this.isDisposed)
                return;
            this.unit.onUpdate();
            //执行事件
            if (!this.eventFinish) {
                if (this.unitModel.currAction != null) {
                    if (this.elapseTalkTime >= this.unitModel.currAction.talkActionTime) {
                        console.log("时间到隐藏对话 -- " + this.unitModel.info.id);
                        this.hideTalk();
                        this.elapseTalkTime = 0;
                    }
                    //时间动作
                    if (this.unitModel.currAction.actionType == Games.ActionType.Time) {
                        this.elapseTime += Games.GameDriver.time.updateTime.deltaTime * 1000;
                        if (this.unitModel.currAction.actionId == 1004 || this.unitModel.currAction.actionId == 1005) {
                            if (!this.isExecuteMoveToPoint) {
                                this.isExecuteMoveToPoint = true;
                                var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
                                var rdPointX = Random.rangeBetween(this.STAGE_OFFSET_ENTER, sceneWidth - this.STAGE_OFFSET_ENTER);
                                this.moveTo(rdPointX, false, Handler.create(this, function () {
                                    if (_this.unitModel.performType == Games.PerformType.FreeWalk)
                                        Games.AvatarManager.sAvatarMoveEnd.dispatch(_this.unit.getEventData());
                                    else
                                        _this.nextEvent();
                                }, null, true));
                            }
                        }
                        else {
                            if (this.elapseTime >= this.unitModel.currAction.actionTime) {
                                this.nextEvent();
                            }
                        }
                    }
                    //位移动作
                    else if (this.unitModel.currAction.actionType == Games.ActionType.Point) {
                        if (!this.isOnPointEvent) {
                            this.isOnPointEvent = true;
                            this.moveTo(this.unitModel.currAction.actionPointX, false, Handler.create(this, function () {
                                if (_this.unitModel.performType == Games.PerformType.FreeWalk)
                                    Games.AvatarManager.sAvatarMoveEnd.dispatch(_this.unit.getEventData());
                                else
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
        //---------------------------------
        // 事件
        //---------------------------------
        UnitAgent.prototype.on = function (type, caller, listener, args) {
            this.unit.unitView.on(type, caller, listener, args);
        };
        UnitAgent.prototype.off = function (type, caller, listener) {
            this.unit.unitView.off(type, caller, listener);
        };
        UnitAgent.prototype.hasListener = function (type) {
            return this.unit.unitView.hasListener(type);
        };
        /** 渲染更新 */
        UnitAgent.prototype.onRender = function () {
            this.unit && this.unit.onRender();
        };
        /** 指定秒更新 */
        UnitAgent.prototype.onSeconds = function () {
        };
        return UnitAgent;
    }());
    Games.UnitAgent = UnitAgent;
})(Games || (Games = {}));
//# sourceMappingURL=UnitAgent.js.map