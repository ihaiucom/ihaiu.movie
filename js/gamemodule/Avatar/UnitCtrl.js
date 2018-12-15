var Games;
(function (Games) {
    var Event = laya.events.Event;
    var UnitCtrl = /** @class */ (function () {
        function UnitCtrl() {
            //单位显示索引
            this.displayIndex = -1;
            //是否在屏幕中
            this.isInScreen = true;
            //设置销毁状态
            this.isDestroyed = false;
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
            //是否暂停事件
            this._isPause = false;
            //设置事件行为结束
            this._eventFinish = true;
            //--------------------------------------
            // 对话框
            //--------------------------------------
            /** 是否始终显示对话 */
            this.isAllwaysShowTalk = false;
            this.talkBoxOffsetY = 0;
            this.talkBoxOffsetX = 0;
        }
        /** 销毁 */
        UnitCtrl.prototype.dispose = function () {
            var _this = this;
            if (this.isDestroyed)
                return;
            this.isDestroyed = true;
            Laya.timer.clear(this, this.onTimeLoop);
            setTimeout(function () {
                _this.__dispose();
            }, this.DELTA_TIME * 1000); //延迟一帧销毁
        };
        UnitCtrl.prototype.__dispose = function () {
            if (this.talkBoxCtrl) {
                this.talkBoxCtrl.close(true);
                this.talkBoxCtrl = null;
            }
            if (this.unitModel) {
                this.unitModel.dispose();
                this.unitModel = null;
            }
            if (this.unit) {
                this.unit.dispose();
                this.unit = null;
            }
        };
        /** 其他单位创建 */
        UnitCtrl.prototype.creat = function (info, onComplete, caller, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            this.unitModel = new Games.UnitModel();
            this.unitModel.setInfo(info);
            (this.unit == undefined) && (this.unit = new Games.Unit(this.unitModel));
            this.unit.setScale(scaleFactor, true);
            this.unit.size(boundWidth, boundHeight);
            this.unit.creat(info, this, this.onCreatComplete);
            this.unit.on(Event.CLICK, this, this.onUnitClick);
            this.unitModel.bounds = this.unit.getBounds();
            this.unitModel.width = this.unit.width;
            this.unitModel.height = this.unit.height;
            this.unitModel.scaleFactor = scaleFactor;
            //talkBox
            this.talkBoxCtrl = new Games.TalkBoxCtrl();
            //handler
            onComplete && onComplete.apply(caller, [this]);
            //timeLoop
            Laya.timer.loop(this.DELTA_TIME * 1000, this, this.onTimeLoop, null, true, true);
        };
        /** request单位完成 */
        UnitCtrl.prototype.onCreatComplete = function (skeleton) {
            this.playAction(this.unitModel.currentAnimId);
        };
        /** 单位点击 */
        UnitCtrl.prototype.onUnitClick = function () {
            Games.AvatarManager.sAvatarClick.dispatch(this.getEventData());
        };
        /** 进入屏幕范围 */
        UnitCtrl.prototype.inScreen = function () {
            if (!this.isInScreen) {
                this.isInScreen = true;
                this.onInScreen();
            }
        };
        /** 离开屏幕范围 */
        UnitCtrl.prototype.outScreen = function () {
            if (this.isInScreen) {
                this.isInScreen = false;
                this.onOutScreen();
            }
        };
        UnitCtrl.prototype.onInScreen = function () {
            this.unit && this.unit.startAnimator();
        };
        UnitCtrl.prototype.onOutScreen = function () {
            this.unit && this.unit.pauseAnimator();
        };
        Object.defineProperty(UnitCtrl.prototype, "isPause", {
            get: function () {
                return this._isPause;
            },
            set: function (val) {
                if (val) {
                    if (!this._isPause) {
                        this.unit && this.unit.pauseMoveAnim();
                    }
                }
                else {
                    if (this._isPause) {
                        this.unit && this.unit.resumeMoveAnim();
                    }
                }
                this._isPause = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitCtrl.prototype, "visible", {
            /** 设置单位是否可见 */
            set: function (val) {
                this.unit && !this.unit.isDestoryed && (this.unit.visible = val);
                if (val) {
                    if (this.talkBoxCtrl.hasTalk) {
                        this.setTalk(this.talkBoxCtrl.content, this.isAllwaysShowTalk);
                    }
                }
                else {
                    this.hideTalk();
                }
            },
            enumerable: true,
            configurable: true
        });
        //开启关闭阴影
        UnitCtrl.prototype.openShadow = function () {
            this.unitModel.isOpenShadow = true;
            this.unit && this.unit.openShadow(true);
        };
        UnitCtrl.prototype.closeShadow = function () {
            this.unitModel.isOpenShadow = false;
            this.unit && this.unit.openShadow(false);
        };
        /** 设置房间信息 */
        UnitCtrl.prototype.setRoomInfo = function (roomInfo) {
            this.unitModel.roomInfo = roomInfo;
        };
        /** 设置单位缩放比 */
        UnitCtrl.prototype.setScale = function (scaleFactor) {
            this.unitModel.scaleFactor = scaleFactor;
            this.talkBoxCtrl.setScale(scaleFactor / this.UNIT_DEFAULT_SCALE, scaleFactor / this.UNIT_DEFAULT_SCALE);
            this.unit && this.unit.setScale(scaleFactor, true);
        };
        UnitCtrl.prototype.resetScale = function (scaleFactor) {
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            this.setScale(scaleFactor);
        };
        Object.defineProperty(UnitCtrl.prototype, "x", {
            get: function () {
                return this.unitModel.x;
            },
            /** 设置坐标值 */
            set: function (val) {
                this.unitModel.x = val;
                this.unit && (this.unit.x = val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitCtrl.prototype, "y", {
            get: function () {
                return this.unitModel.y;
            },
            set: function (val) {
                this.unitModel.y = val;
                this.unit && (this.unit.y = val);
            },
            enumerable: true,
            configurable: true
        });
        //设置位置
        UnitCtrl.prototype.pos = function (x, y) {
            this.unitModel.x = x;
            this.unitModel.y = y;
            this.unit && this.unit.pos(x, y, true);
        };
        Object.defineProperty(UnitCtrl.prototype, "direction", {
            get: function () {
                return this.unitModel.info.direction;
            },
            //方向
            set: function (val) {
                this.unitModel.info.direction = val;
                this.unit && (this.unit.direction = val);
            },
            enumerable: true,
            configurable: true
        });
        UnitCtrl.prototype.reverseDirection = function () {
            if (this.unitModel.info.direction == Games.DirtionType.Right) {
                this.direction = Games.DirtionType.Left;
            }
            else if (this.unitModel.info.direction == Games.DirtionType.Left) {
                this.direction = Games.DirtionType.Right;
            }
        };
        UnitCtrl.prototype.getBounds = function () {
            if (this.unitModel.bounds)
                return this.unitModel.bounds;
            return new Rectangle(0, 0, 0, 0);
        };
        UnitCtrl.prototype.setHitArea = function (width, height, offsetX, offsetY) {
            if (offsetX === void 0) { offsetX = 0; }
            if (offsetY === void 0) { offsetY = 0; }
            var _x = -width / 2;
            var _y = -height - this.talkBoxCtrl.height;
            var dir = (this.direction == Games.DirtionType.Left) ? -1 : 1;
            if (this.unit) {
                this.unit.hitArea = new Rectangle(_x + offsetX * dir, _y + offsetY, width, height);
            }
        };
        UnitCtrl.prototype.setChildIndex = function (index) {
            this.unit && this.parent.setChildIndex(this.unit, index);
            this.talkBoxCtrl.setChildIndex(index);
        };
        /** 显示容器 */
        UnitCtrl.prototype.showOn = function (parent, displayIndex) {
            if (displayIndex === void 0) { displayIndex = -1; }
            if (parent instanceof laya.display.Sprite) {
                this.parent = parent;
            }
            else {
                this.parent = parent.displayObject;
            }
            this.displayIndex = displayIndex;
            this.checkShow();
        };
        UnitCtrl.prototype.checkShow = function () {
            if (this.parent && this.unit) {
                if (this.displayIndex >= 0) {
                    this.parent.addChildAt(this.unit, this.displayIndex);
                }
                else {
                    this.parent.addChild(this.unit);
                }
            }
        };
        //time update
        UnitCtrl.prototype.onTimeLoop = function () {
            var _this = this;
            if (this.isDestroyed || this.isPause)
                return;
            this.moveUpdate();
            //是否始终显示对话
            if (!this.isAllwaysShowTalk) {
                this.elapseTalkTime += this.DELTA_TIME * 1000;
                if (this.elapseTalkTime > this.talkBoxCtrl.DEFAULT_TALK_TIME * 1000) {
                    this.hideTalk();
                }
            }
            //执行事件
            if (!this.eventFinish) {
                if (this.unitModel.currAction != null) {
                    if (this.elapseTalkTime >= this.unitModel.currAction.talkActionTime) {
                        this.hideTalk();
                        // this.currAction.getTalk();
                        this.elapseTalkTime = 0;
                    }
                    //时间动作
                    if (this.unitModel.currAction.actionType == Games.ActionType.Time) {
                        this.elapseTime += this.DELTA_TIME * 1000;
                        // this.parseAction();
                        // if (this.elapseTime >= this.unitModel.currAction.actionTime)
                        // {
                        // 	this.nextEvent();
                        // }
                        if (this.unitModel.currAction.actionId == 1004 || this.unitModel.currAction.actionId == 1005) {
                            if (!this.isExecuteMoveToPoint) {
                                this.isExecuteMoveToPoint = true;
                                var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
                                var rdPointX = Random.rangeBetween(this.STAGE_OFFSET_ENTER, sceneWidth - this.STAGE_OFFSET_ENTER);
                                this.moveTo(rdPointX, false, Handler.create(this, function () {
                                    // this.nextEvent();
                                    Games.AvatarManager.sAvatarMoveEnd.dispatch(_this.getEventData());
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
                                _this.nextEvent();
                                // AvatarManager.sAvatarMoveEnd.dispatch(this.getDispatchInfo());
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
        UnitCtrl.prototype.executeActionEvents = function (events, performType) {
            this.unitModel.eventList = events;
            if (performType) {
                this.unitModel.performType = performType;
            }
            this.eventFinish = false;
        };
        Object.defineProperty(UnitCtrl.prototype, "eventFinish", {
            get: function () {
                return this._eventFinish;
            },
            set: function (value) {
                this._eventFinish = value;
            },
            enumerable: true,
            configurable: true
        });
        UnitCtrl.prototype.nextEvent = function () {
            if (!this.eventFinish) {
                if (this.unitModel.eventList.length == 0) {
                    this.endEvent(true);
                    return;
                }
            }
            if (this.unitModel.currAction != null) {
                Games.AvatarManager.sEventFinish.dispatch(this.getEventData());
            }
            this.hideTalk();
            this.elapseTime = 0;
            this.elapseTalkTime = 0;
            this.isOnPointEvent = false;
            this.isExecuteMoveToPoint = false;
            var event = this.unitModel.eventList.splice(0, 1)[0];
            this.unitModel.currEventId = event.evtId;
            this.unitModel.currAction = event.actionInfo;
            if (this.unitModel.currAction.actionId > 0) {
                var actionCfg = Game.config.action.getConfig(this.unitModel.currAction.actionId);
                var actionName = actionCfg.action;
                this.unit.playAction(this.unitModel.currAction.actionId);
            }
            //speak
            if (this.unitModel.currAction.talkActionId != 0) {
                var speakCfg = Game.config.speak.getConfig(this.unitModel.currAction.talkActionId);
                if (speakCfg) {
                    this.setTalk(format(speakCfg.speak, this.unitModel.currAction.talkParams));
                }
            }
        };
        UnitCtrl.prototype.endEvent = function (onEvent) {
            if (this.isDestroyed)
                return;
            this.stand();
            this.hideTalk();
            if (this.unitModel.currEventId != 0) {
                Games.AvatarManager.sEventFinish.dispatch(this.getEventData());
            }
            this.unitModel.currEventId = 0;
            this.unitModel.currAction = null;
            this.eventFinish = true;
            this.isOnPointEvent = false;
            this.isExecuteMoveToPoint = false;
            if (onEvent) {
                Games.AvatarManager.sBehaviorFinish.dispatch(this.getEventData());
            }
        };
        UnitCtrl.prototype.parseAction = function () {
            switch (this.unitModel.currAction.actionId) {
                //idle
                case 1002:
                case 1003:
                case 1024:
                    break;
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
        UnitCtrl.prototype.frameWalk = function (run) {
            if (run === void 0) { run = false; }
            this.playeMoveAnim();
            var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
            if (this.x >= sceneWidth - this.STAGE_OFFSET_ENTER) {
                this.x = sceneWidth - this.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Left;
            }
            if (this.x <= Games.Avatar.STAGE_OFFSET_ENTER) {
                this.x = Games.Avatar.STAGE_OFFSET_ENTER;
                this.direction = Games.DirtionType.Right;
            }
            var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
            var velocity = run ? this.speedRun : this.speed;
            this.x += velocity * this.DELTA_TIME * dir;
            //talkBox
            if (this.talkBoxCtrl.hasTalk) {
                this.talkBoxCtrl.x += velocity * this.DELTA_TIME * dir;
            }
        };
        UnitCtrl.prototype.frameRun = function () {
            this.frameWalk(true);
        };
        UnitCtrl.prototype.getEventData = function () {
            var eventData = new Games.RoomAvatarData();
            eventData.onEvent = true;
            eventData.performType = this.unitModel.performType;
            eventData.avatarUid = this.unitModel.info.uid;
            eventData.avatarId = this.unitModel.info.id;
            if (this.unitModel.roomInfo) {
                eventData.roomId = this.unitModel.roomInfo.id;
                eventData.roomType = this.unitModel.roomInfo.type;
            }
            if (this.unitModel.currAction != null) {
                eventData.eventId = this.unitModel.currEventId;
            }
            return eventData;
        };
        //移动
        UnitCtrl.prototype.moveTo = function (xValue, isRun, complete, endAnim, loop, moveActionId) {
            var animId = 1004;
            isRun && (animId = 1005);
            moveActionId && (animId = moveActionId);
            this.moveToPoint(xValue, complete, animId, endAnim, loop);
        };
        /**
         * 移动到目标点
         * @param moveToValue 目标点X轴坐标值
         * @param completeHandler 移动结束回调
         * @param moveAnimId 移动动作Id
         * @param endAnimName 移动结束播放动作名
         * @param endAnimLoop 移动结束播放动作是否循环
         */
        UnitCtrl.prototype.moveToPoint = function (moveToValue, completeHandler, moveAnimId, endAnimName, endAnimLoop) {
            this.unitModel.move.recover();
            this.unitModel.move.active = true;
            //set
            this.unitModel.move.pointX = moveToValue;
            if (completeHandler)
                this.unitModel.move.completeHandler = completeHandler;
            if (moveAnimId)
                this.unitModel.move.moveAnimId = moveAnimId;
            this.unitModel.move.endAnimName = this.unitModel.info.idleName;
            if (endAnimName)
                this.unitModel.move.endAnimName = endAnimName;
            if (endAnimLoop)
                this.unitModel.move.endAnimLoop = endAnimLoop;
        };
        UnitCtrl.prototype.moveUpdate = function () {
            if (this.unitModel.move.active) {
                this.playAction(this.unitModel.move.animId);
                var distance = Math.abs(this.x - this.unitModel.move.pointX);
                this.direction = this.x > this.unitModel.move.pointX ? Games.DirtionType.Left : Games.DirtionType.Right;
                var dir = (this.direction == Games.DirtionType.Right) ? 1 : -1;
                var dspeed = this.run ? this.speedRun : this.speed;
                this.x += dspeed * this.DELTA_TIME * dir;
                if (this.talkBoxCtrl.hasTalk) {
                    this.talkBoxCtrl.x += dspeed * this.DELTA_TIME * dir;
                }
                if (this.checkMoveToEnd()) {
                    this.x = this.unitModel.move.pointX;
                    this.play(this.unitModel.move.endAnimName);
                    this.unitModel.move.active = false;
                    this.unitModel.move.complete = true;
                    //todo:去除重叠
                    // AvatarManager.sAvatarMoveEnd.dispatch(this.getDispatchInfo());
                    if (this.unitModel.move.completeHandler) {
                        this.unitModel.move.completeHandler.run();
                    }
                }
            }
        };
        UnitCtrl.prototype.checkMoveToEnd = function () {
            var dspeed = this.run ? this.speedRun : this.speed;
            var deltaLength = dspeed * this.DELTA_TIME;
            var distance = Math.abs(this.x - this.unitModel.move.pointX);
            if (distance <= deltaLength) {
                return true;
            }
            return false;
        };
        Object.defineProperty(UnitCtrl.prototype, "run", {
            get: function () {
                return this.unitModel.move.animId == 1005;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UnitCtrl.prototype, "isMoveToEnd", {
            get: function () {
                return this.unitModel.move.active = false;
            },
            enumerable: true,
            configurable: true
        });
        UnitCtrl.prototype.setTalk = function (text, allwaysShow) {
            if (!this.isInScreen)
                return;
            //移除头顶头像
            this.unit && this.unit.removeHeadIcon();
            this.isAllwaysShowTalk = allwaysShow;
            this.elapseTalkTime = 0;
            this.hideTalk();
            this.talkBoxCtrl.showOn(text, this.parent);
            var dx = -this.talkBoxCtrl.width * this.talkBoxCtrl.scaleFactor / 2;
            var dy = -this.unitModel.height * this.unitModel.scaleFactor - this.talkBoxCtrl.height * this.talkBoxCtrl.scaleFactor;
            this.talkBoxCtrl.pos(this.x + dx, this.y + dy);
            this.talkBoxCtrl.x += this.talkBoxOffsetX;
            this.talkBoxCtrl.y += this.talkBoxOffsetY;
        };
        UnitCtrl.prototype.hideTalk = function () {
            this.talkBoxCtrl && this.talkBoxCtrl.close();
        };
        UnitCtrl.prototype.scaleTalkBox = function (scale, talkBoxOffsetX, talkBoxOffsetY) {
            if (talkBoxOffsetX === void 0) { talkBoxOffsetX = 0; }
            if (talkBoxOffsetY === void 0) { talkBoxOffsetY = 0; }
            this.talkBoxOffsetX = talkBoxOffsetX;
            this.talkBoxOffsetY = talkBoxOffsetY;
            this.talkBoxCtrl.scaleAndOffset(scale);
        };
        /** 设置单位头顶头像 */
        UnitCtrl.prototype.setTopHeadIcon = function (headIcon) {
            this.unit && this.unit.setTopHeadIcon(headIcon);
        };
        //----------------------------------
        // 动作
        //----------------------------------
        /**
         * 直接进入到目标点
         * @param x  x值
         * @param y  y值
         */
        UnitCtrl.prototype.enterTo = function (x, y, direction, handler) {
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
        UnitCtrl.prototype.enter = function (onEvent) {
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
                var dispathData = _this.getEventData();
                dispathData.onEvent = onEvent;
                dispathData.isEnterRoom = true;
                Games.AvatarManager.sAvatarMoveEnd.dispatch(dispathData);
                // AvatarManager.sAvatarEnter.dispatch(dispathData);
            }, null, true));
        };
        UnitCtrl.prototype.leave = function (onEvent, isRun, moveActionId) {
            var _this = this;
            var sceneWidth = this.unitModel.roomInfo ? this.unitModel.roomInfo.sceneWidth : Laya.stage.width;
            var dx = sceneWidth + this.STAGE_OFFSET_LEAVE;
            if (this.x < sceneWidth / 2) {
                dx = -this.STAGE_OFFSET_LEAVE;
            }
            this.moveTo(dx, isRun, Handler.create(this, function () {
                var dispathData = _this.getEventData();
                dispathData.onEvent = onEvent;
                Games.AvatarManager.sAvatarLeave.dispatch(dispathData);
            }, null, true), null, true, moveActionId);
        };
        UnitCtrl.prototype.playAction = function (animId) {
            if (this.unitModel.currentAnimId == animId) {
                return;
            }
            this.unitModel.currentAnimId = animId;
            this.unit && this.unit.playAction(animId);
        };
        UnitCtrl.prototype.play = function (name) {
            var actionId = Game.config.action.getActionId(name);
            this.playAction(actionId);
        };
        //站立
        UnitCtrl.prototype.stand = function (name, x, y) {
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
        UnitCtrl.prototype.sitDown = function (x, y, anim) {
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
        UnitCtrl.prototype.playeMoveAnim = function () {
            if (this.unitModel && this.unitModel.currAction) {
                this.playAction(this.unitModel.currAction.actionId);
            }
        };
        //---------------------------------
        // 事件
        //---------------------------------
        UnitCtrl.prototype.on = function (type, caller, listener, args) {
            this.unit && this.unit.on(type, caller, listener, args);
        };
        UnitCtrl.prototype.off = function (type, caller, listener) {
            this.unit && this.unit.off(type, caller, listener);
        };
        return UnitCtrl;
    }());
    Games.UnitCtrl = UnitCtrl;
})(Games || (Games = {}));
//# sourceMappingURL=UnitCtrl.js.map