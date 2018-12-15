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
    var Guide;
    (function (Guide) {
        var GuideDialogType = Games.GuideDialogType;
        /**
         * 引导界面
         */
        var GuideUI = /** @class */ (function (_super) {
            __extends(GuideUI, _super);
            function GuideUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.crossIndexs = [3, 6, 8];
                _this.crossIndex = -1;
                return _this;
            }
            GuideUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                //隐藏所有
                this.hideAll();
                this.hideHand();
                this.m_hand.m_c_circle_visible.selectedIndex = 1;
            };
            Object.defineProperty(GuideUI.prototype, "alphaMask", {
                set: function (value) {
                    // this.maskArea.alpha = value;
                },
                enumerable: true,
                configurable: true
            });
            //回收手指
            GuideUI.prototype.recyclingHand = function () {
                this.m_hand.recyclingHand();
                this.hideHand();
            };
            //隐藏
            GuideUI.prototype.hideAll = function () {
                this.m_visible.selectedIndex = GuideDialogType.Hide;
                this.recyclingHand();
            };
            //显示手指
            GuideUI.prototype.showFinger = function (btn, config) {
                this.clearBtnUpdatePosition();
                this.preListIndex = -1;
                this.targetBtn = btn;
                var fingerDirction = config.f_direction;
                var radius = config.radius;
                var showCircle = config.halo;
                this.guidesystemConfig = config;
                if (this.m_hand.displayObject.destroyed) {
                    this.m_hand = Guide.GuideClickHand.createInstance();
                }
                //显示
                this.m_hand.visible = true;
                Game.event.dispatch(GameEventKey.GameEventKey_VisibleTaskArrowUI, false);
                //方向
                this.m_hand.m_c_hand_dir.selectedIndex = fingerDirction;
                this.m_hand.m_hand.m_t0.play(null, -1);
                this.m_hand.m_tcircle.stop();
                var guidePathConfig = Game.config.guidePath.getConfig(config.path_id);
                this.pathConfig = guidePathConfig;
                if (guidePathConfig && GuideHelp.getIsOpenMenuByMenuId(guidePathConfig.menuid) == false) {
                    return;
                }
                if (showCircle) {
                    this.m_hand.m_c_circle_visible.selectedIndex = 0;
                    this.m_hand.m_tcircle.play(null, -1);
                }
                else {
                    this.m_hand.m_c_circle_visible.selectedIndex = 1;
                    this.m_hand.m_tcircle.stop();
                }
                var x = 0;
                var y = 0;
                //强制引导
                if (this.isForce) {
                    var globalPos = btn.localToGlobal(btn.width >> 1, btn.height >> 1);
                    x = globalPos.x;
                    y = globalPos.y;
                    this.m_hand.setXY(x, y);
                    this.addChild(this.m_hand);
                }
                else {
                    var guidePathConfig_1 = Game.config.guidePath.getConfig(config.path_id);
                    if (guidePathConfig_1 && GuideHelp.getIsOpenMenuByMenuId(guidePathConfig_1.menuid)) {
                        this.fingerParent = GuideHelp.getGuideMenuWindow(guidePathConfig_1, config);
                        var addToBtn = false;
                        if (guidePathConfig_1.add_btn == 1 || this.fingerParent == null) {
                            this.fingerParent = btn;
                            addToBtn = true;
                        }
                        if (guidePathConfig_1.add_btn == 2) {
                            this.preListIndex = this.getFristChildIndex(config);
                        }
                        // this.m_hand.setScale(1 / this.fingerParent.scaleX, 1 / this.fingerParent.scaleY);
                        if (this.fingerParent instanceof Games.UnitAgent) {
                            var unitScale = this.fingerParent.unit.unitData.scaleFactor;
                            var scale = 1 / unitScale * 0.8;
                            this.m_hand.setScale(scale, scale);
                            var dir = (this.fingerParent.direction == Games.DirtionType.Right) ? 1 : -1;
                            this.m_hand.skewY = (this.fingerParent.direction == Games.DirtionType.Right) ? 0 : 180;
                            var bound = this.fingerParent.getBounds();
                            var centerX = -(bound.width / 4 + dir * this.m_hand.width * scale / 2);
                            var centerY = -(bound.height) * scale - this.m_hand.width / 2;
                            this.m_hand.displayObject.pos(centerX, centerY);
                            this.fingerParent.unit.unitView.addGuidUI(this.m_hand);
                        }
                        else {
                            // this.fingerParent.addChild(this.m_hand);
                            this.fingerParent.displayObject.addChild(this.m_hand.displayObject);
                            this.m_hand.setScale(1, 1);
                            this.m_hand.skewY = 0;
                            this.m_hand.setXY(0, 0);
                            this.setHandPosition();
                            Laya.timer.frameLoop(2, this, this.updatePosition, [guidePathConfig_1], true);
                        }
                    }
                }
            };
            /**
             * 更新位置
             * @param guidePathConfig
             */
            GuideUI.prototype.updatePosition = function (guidePathConfig) {
                if (GuideHelp.getIsOpenMenuByMenuId(guidePathConfig.menuid)) {
                    this.setHandPosition();
                }
                else {
                    this.clearBtnUpdatePosition();
                }
            };
            GuideUI.prototype.clearBtnUpdatePosition = function () {
                Laya.timer.clear(this, this.updatePosition);
            };
            GuideUI.prototype.getFristChildIndex = function (systemConfig) {
                var index = GuideHelp.getFristChildIndex(systemConfig);
                return index;
            };
            GuideUI.prototype.setHandPosition = function () {
                if (this.targetBtn && this.fingerParent) {
                    this.m_hand.visible = this.targetBtn.visible;
                    var globalPos = this.targetBtn.localToGlobal(this.targetBtn.width >> 1, this.targetBtn.height >> 1);
                    var x = globalPos.x;
                    var y = globalPos.y;
                    this.fingerParent.globalToLocal(x, y, globalPos);
                    this.m_hand.setXY(globalPos.x, globalPos.y);
                    if (this.pathConfig.add_btn == 2 && this.preListIndex != this.getFristChildIndex(this.guidesystemConfig)) {
                        this.clearBtnUpdatePosition();
                        this.recyclingHand();
                    }
                }
            };
            //隐藏手指
            GuideUI.prototype.hideHand = function () {
                this.clearBtnUpdatePosition();
                this.m_hand.visible = false;
                this.m_hand.m_hand.m_t0.stop();
                this.m_hand.m_c_circle_visible.selectedIndex = 1;
                this.m_hand.m_tcircle.stop();
                Game.event.dispatch(GameEventKey.GameEventKey_VisibleTaskArrowUI, true);
            };
            /**
             *
             * @param msg 内容信息
             * @param position 位置
             */
            GuideUI.prototype.showDialog = function (msg, position) {
                //
                this.m_visible.selectedIndex = GuideDialogType.Dialog;
                this.m_dialog.visible = true;
                //内容
                this.m_dialog.m_dialog.text = msg;
                //设置位置
                this.m_dialog.setXY(position.x, position.y);
            };
            GuideUI.prototype.hideDialog = function () {
                this.m_dialog.visible = false;
            };
            /**
             * 显示左边半身像
             * @param url
             * @param name
             * @param msg
             */
            GuideUI.prototype.showLeftDialog = function (url, name, msg, caller, tweenComplete, complete) {
                var _this = this;
                this.hideHand();
                this.caller = caller;
                this.complete = complete;
                this.m_visible.selectedIndex = GuideDialogType.Left;
                this.m_left.m_dialog.text = "";
                this.m_left.m_name.text = name;
                this.m_left.m_icon.icon = url;
                this.m_left.m_t0.play(Handler.create(null, function () {
                    if (tweenComplete) {
                        tweenComplete();
                    }
                    _this.startTypeWrite(_this.m_left.m_dialog.m_title, msg);
                }));
            };
            /**
             * 显示右边半身像
             * @param url
             * @param name
             * @param msg
             */
            GuideUI.prototype.showRightDialog = function (url, name, msg, caller, tweenComplete, complete) {
                var _this = this;
                this.hideHand();
                this.caller = caller;
                this.complete = complete;
                this.m_visible.selectedIndex = GuideDialogType.Right;
                this.m_right.m_dialog.m_title.text = "";
                this.m_right.m_name.text = name;
                this.m_right.m_icon.icon = url;
                this.m_right.m_t0.play(Handler.create(null, function () {
                    if (tweenComplete) {
                        tweenComplete();
                    }
                    _this.startTypeWrite(_this.m_right.m_dialog.m_title, msg);
                }));
            };
            /**
             *
             * @param config 配置
             * @param caller
             * @param complete
             */
            GuideUI.prototype.showNpcUI = function (config, caller, complete) {
                if (caller === void 0) { caller = null; }
                if (complete === void 0) { complete = null; }
                var url = config.bodyIconUrl;
                var desc = config.ui_content;
                this.hideHand();
                this.caller = caller;
                this.complete = complete;
                this.m_visible.selectedIndex = GuideDialogType.Npc;
                this.m_npcIntroPanel.m_desc.text = desc;
                this.m_npcIntroPanel.m_name.text = config.name;
                this.m_npcIntroPanel.m_icon.icon = url;
                this.m_npcIntroPanel.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            /**
             *
             * @param msg
             * @param caller
             * @param complete
             */
            GuideUI.prototype.showHaiBao = function (msg, msg2, caller, complete) {
                if (caller === void 0) { caller = null; }
                if (complete === void 0) { complete = null; }
                Game.sound.playSound(SoundKey.MM11_NewsPaperTop);
                this.alphaMask = 0.5;
                this.caller = caller;
                this.complete = complete;
                this.m_visible.selectedIndex = GuideDialogType.HaiBao;
                this.m_haibao.m_icon.icon = Game.config.avatar.getConfig(contentFormatCustomId("{name}")).bodyIconUrl;
                this.m_haibao.m_title.text = msg;
                this.m_haibao.m_title2.text = msg2;
                this.m_haibao.onClick(this, this.onClickHaibaoCloseBtn);
            };
            //	点击关闭	
            GuideUI.prototype.onClickHaibaoCloseBtn = function () {
                this.m_haibao.offClick(this, this.onClickHaibaoCloseBtn);
                this.doComplete();
            };
            //	点击关闭	
            GuideUI.prototype.onClickCloseBtn = function () {
                this.m_npcIntroPanel.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.doComplete();
            };
            //开始打字机效果
            GuideUI.prototype.startTypeWrite = function (target, msg) {
                var _this = this;
                if (this.typeWriteData == null) {
                    this.typeWriteData = Game.typeWrite.createTypeWrite();
                }
                this.typeWriteData.startTypeWrite(50, msg, target, function () {
                    _this.doComplete();
                });
            };
            //完成回调
            GuideUI.prototype.doComplete = function () {
                if (this.complete) {
                    if (this.caller) {
                        this.complete.apply(this.caller);
                    }
                    else {
                        this.complete();
                    }
                }
            };
            //是否强制引导
            GuideUI.prototype.setForce = function (value) {
                this.isForce = value;
                // this.maskArea.visible = value;
                // this.interactionArea.visible = value;
            };
            //直接完成打字效果
            GuideUI.prototype.completeTypeWrite = function () {
                if (this.typeWriteData) {
                    this.typeWriteData.completeTypeWrite();
                }
            };
            //
            GuideUI.prototype.clearTypeWrite = function () {
                if (this.typeWriteData) {
                    this.typeWriteData.stopTypeWrite();
                }
            };
            //直接完成打字效果
            GuideUI.prototype.directComplete = function () {
                if (this.typeWriteData) {
                    this.typeWriteData.completeTypeWrite();
                }
            };
            /**
             * 播放汽车动画
             * @param callBack 播放
             */
            GuideUI.prototype.playStartCar = function () {
                var _this = this;
                this.anima.m_c_anima.selectedIndex = 9;
                // this.anima.m_anima9.m_c_visible_bg.selectedIndex = 1;
                this.m_bg.visible = true;
                this.anima.m_anima9.m_t0.setHook("speak", Handler.create(null, function () {
                    _this.anima.m_anima9.m_c_visible_bg.selectedIndex = 0;
                    //完成时播放
                    Game.story.triggerPlayStoryByType(Games.StoryTriggerType.Create, 0, null, false, true);
                }));
                Game.guide.isPlayCar = true;
                Game.event.dispatch(GameEventKey.GameEventKey_VisibleMainUI, false);
                Game.sound.playSound(SoundKey.MM36_CarAcross);
                this.anima.m_anima9.m_t0.play(Handler.create(null, function () {
                    Game.guide.isPlayCar = false;
                    _this.m_c_anima.selectedIndex = 0;
                    _this.anima.removeFromParent();
                    _this.anima.dispose();
                    _this.anima = null;
                    _this.unLoadAnimation();
                    Game.event.dispatch(GameEventKey.GameEventKey_VisibleMainUI, true);
                }), 1);
            };
            /**
             * 播放剧情动画
             * @param callBack
             */
            GuideUI.prototype.playOpenAnima = function () {
                var _this = this;
                this.alphaMask = 0;
                this.hideAll();
                this.crossIndex = -1;
                this.m_c_anima.selectedIndex = 1;
                this.m_container.m_skipBtn.visible = false;
                this.loadAnimation(function () {
                    if (_this.anima == null) {
                        _this.anima = fgui.OpenAnima.OpenAnima.createInstance();
                    }
                    _this.m_container.addChildAt(_this.anima, 0);
                    _this.m_container.m_skipBtn.onClick(_this, _this.onClickNextBtn);
                    _this.anima.addRelation(_this.m_container, fairygui.RelationType.Center_Center);
                    _this.anima.setXY(0, 0);
                    var index = 1;
                    _this.nextAnima(index);
                });
            };
            //下一步
            GuideUI.prototype.onClickNextBtn = function () {
                if (this.curTrans) {
                    this.curTrans.stop();
                }
                Game.sound.stopAllSound();
                this.m_container.m_skipBtn.visible = false;
                if (this.index >= 8) {
                    this.returnToHome();
                }
                else {
                    this.index = this.crossIndexs[this.crossIndex + 1];
                    this.nextAnima(this.index);
                }
            };
            GuideUI.prototype.returnToHome = function () {
                Game.sound.musicVolume = 1;
                this.m_container.m_skipBtn.visible = false;
                Game.sound.stopSound(this.sounds[this.crossIndex + 1]);
                clearTimeout(this.showSkilBtnHandler);
                Game.guide.openHome();
            };
            //播放一下动画		
            GuideUI.prototype.playNextAnima = function () {
                console.log("动画", this.index, "播放完毕");
                if (this.index >= 8) {
                    this.returnToHome();
                }
                else {
                    this.index++;
                    this.nextAnima(this.index);
                }
            };
            //
            GuideUI.prototype.nextAnima = function (index) {
                var _this = this;
                console.log("正在播放动画", index);
                this.index = index;
                clearTimeout(this.showSkilBtnHandler);
                this.anima.m_c_anima.selectedIndex = index;
                var com = this.anima.getChild("anima" + index);
                this.curTrans = com.getTransition("t0");
                if (this.crossIndexs.indexOf(index) >= 0) {
                    this.m_container.m_skipBtn.visible = false;
                    this.crossIndex = this.crossIndexs.indexOf(index);
                    var com1 = this.anima.getChild("anima" + index + "_1");
                    var trans1 = com1.getTransition("t0");
                    trans1.setHook("end", Handler.create(null, function () {
                        _this.showSkilBtnHandler = setTimeout(function () {
                            _this.m_container.m_skipBtn.visible = true;
                        }, 1000);
                    }));
                    trans1.play(Handler.create(null, function () {
                        console.log("过场动画", index, "播放完毕");
                        _this.showSkilBtnHandler = setTimeout(function () {
                            _this.m_container.m_skipBtn.visible = true;
                        }, 1000);
                    }), 1);
                    console.log("播放过场音效");
                    Game.sound.playMusic(SoundKey.MM50_FilmChangge);
                    setTimeout(function () {
                        _this.playMusic(_this.crossIndex + 1);
                    }, 1000);
                    // if (this.crossIndex == 0)
                    // {
                    // }
                    // else
                    // {
                    // 	this.playSound(this.crossIndex + 1);
                    // }
                }
                if (this.curTrans) {
                    this.curTrans.play(Handler.create(null, function () {
                        _this.playNextAnima();
                    }), 1);
                    if (index == 1) {
                        this.playMusic(0);
                        this.showSkilBtnHandler = setTimeout(function () {
                            _this.m_container.m_skipBtn.visible = true;
                        }, 1000);
                    }
                }
                else {
                    console.log("t0f======================================================", index);
                }
            };
            /**
             *
             * @param soundKey
             * @param isStopSound
             */
            GuideUI.prototype.playMusic = function (index) {
                if (this.sounds == null) {
                    if (User.info.sex == Proto.SE.EUserSex.boy) {
                        this.sounds = [SoundKey.MM46_FilmMale01, SoundKey.MM47_FilmMale02, SoundKey.MM48_FilmMale03, SoundKey.MM49_FilmMale04];
                    }
                    else {
                        this.sounds = [SoundKey.MM42_FilmFemale01, SoundKey.MM43_FilmFemale02, SoundKey.MM44_FilmFemale03, SoundKey.MM45_FilmFemale04];
                    }
                }
                Game.sound.playMusic(this.sounds[index], 1);
            };
            /**
             * 加载动画
             * @param callback
             */
            GuideUI.prototype.loadAnimation = function (callback) {
                GlobalModalWaiting.show(0, 0);
                //加载
                Game.asset.loadFguiByPackagename(Games.GuiPackageNames.OpenAnima, null, function () {
                    //
                    callback && callback();
                    GlobalModalWaiting.hide();
                });
            };
            GuideUI.prototype.unLoadAnimation = function () {
                Game.asset.unloadFgui(Games.GuiPackageNames.OpenAnima);
            };
            return GuideUI;
        }(Guide.GuideUIStruct));
        Guide.GuideUI = GuideUI;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideUI.js.map