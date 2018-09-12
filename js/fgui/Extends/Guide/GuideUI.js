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
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GuideUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.displayObject.cacheAs = "bitmap";
                this.maskArea = new Laya.Sprite();
                this.maskArea.alpha = 0.5;
                this.maskArea.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
                this.displayObject.addChildAt(this.maskArea, 0);
                //绘制一个圆形区域，利用叠加模式，从遮罩区域抠出可交互区
                this.interactionArea = new Laya.Sprite();
                //设置叠加模式
                this.interactionArea.blendMode = "destination-out";
                this.displayObject.addChildAt(this.interactionArea, 1);
                //点击区域
                this.hitArea = new Laya.HitArea();
                //
                this.hitArea.hit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
                this.displayObject.hitArea = this.hitArea;
                this.displayObject.mouseEnabled = true;
                //禁用手的点击
                this.m_hand.touchable = false;
                //隐藏所有
                this.hideAll();
                this.hideHand();
                this.m_hand.m_c_circle_visible.selectedIndex = 1;
                //
                // Game.asset.loadFx(this.circleFxPath, this, this.onLoadFxComplete);
                // Laya.loader.load(this.circleFxPath, Handler.create(this, this.onLoadFxComplete), null, Loader.JSON);
            };
            // private onLoadFxComplete(setting: Laya.ParticleSetting): void
            // {
            // 	this.circleFx = new Laya.Particle2D(setting);
            // 	this.m_hand.displayObject.addChild(this.circleFx);
            // 	this.circleFx.pos(this.m_hand.width >> 1, this.m_hand.height >> 1);
            // }
            // 菜单管理调的销毁
            GuideUI.prototype.onWindowDestory = function () {
                this.removeFromParent();
                return true;
            };
            //回收手指
            GuideUI.prototype.recyclingHand = function () {
                // this.addChild(this.m_hand);
                this.m_hand.removeFromParent();
                this.hideHand();
            };
            //
            GuideUI.prototype.setMaskIndex = function () {
                this.displayObject.addChildAt(this.maskArea, 0);
                this.displayObject.addChildAt(this.interactionArea, 1);
            };
            //隐藏
            GuideUI.prototype.hideAll = function () {
                this.m_visible.selectedIndex = GuideDialogType.Hide;
            };
            GuideUI.prototype.onRemoved = function () {
                console.log("removed", this.targetBtn);
            };
            //显示手指
            GuideUI.prototype.showFinger = function (btn, config) {
                var _this = this;
                btn.on(Laya.Event.REMOVED, this, this.onRemoved);
                this.targetBtn = btn;
                var fingerDirction = config.f_direction;
                var radius = config.radius;
                var showCircle = config.halo;
                this.m_hand.visible = true;
                this.m_hand.removeFromParent();
                this.m_hand.m_c_hand_dir.selectedIndex = fingerDirction;
                this.m_hand.m_hand.m_t0.play(null, -1);
                this.m_hand.m_tcircle.stop();
                var guidePathConfig = Game.config.guidePath.getConfig(config.path_id);
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
                    this.interactionArea.graphics.clear();
                    this.interactionArea.graphics.drawCircle(0, 0, radius, "#000000");
                    this.interactionArea.pivot(0.5, 0.5);
                    this.interactionArea.pos(x, y);
                    this.hitArea.unHit.clear();
                    this.hitArea.unHit.drawCircle(x, y, radius, "#000000");
                    this.m_hand.setXY(x, y);
                    this.addChild(this.m_hand);
                }
                else {
                    this.hitArea.unHit.clear();
                    this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
                    this.clearBtnIntval();
                    var guidePathConfig_1 = Game.config.guidePath.getConfig(config.path_id);
                    if (guidePathConfig_1) {
                        var globalPos = this.targetBtn.localToGlobal(this.targetBtn.width >> 1, this.targetBtn.height >> 1);
                        var x_1 = globalPos.x;
                        var y_1 = globalPos.y;
                        this.fingerParent = GuideHelp.getGuideMenuWindow(guidePathConfig_1, config);
                        if (this.fingerParent && guidePathConfig_1.add_btn != 1) {
                            this.fingerParent.globalToLocal(x_1, y_1, globalPos);
                            this.m_hand.setXY(globalPos.x, globalPos.y);
                        }
                        else {
                            this.fingerParent = btn;
                        }
                        this.fingerParent.addChild(this.m_hand);
                        for (var index = 0; index < this.fingerParent.numChildren; index++) {
                            var element = this.fingerParent.getChildAt(index);
                        }
                    }
                    this.setHandPosition();
                    this.btnIntvalHandler = setInterval(function () {
                        if (GuideHelp.getIsOpenMenuByMenuId(guidePathConfig_1.menuid)) {
                            _this.setHandPosition();
                        }
                        else {
                            _this.clearBtnIntval();
                        }
                    }, 30);
                }
            };
            GuideUI.prototype.clearBtnIntval = function () {
                clearInterval(this.btnIntvalHandler);
            };
            GuideUI.prototype.setHandPosition = function () {
                if (this.targetBtn && this.targetBtn.parent) {
                    this.m_hand.visible = this.targetBtn.visible;
                    var globalPos = this.targetBtn.localToGlobal(this.targetBtn.width >> 1, this.targetBtn.height >> 1);
                    var x = globalPos.x;
                    var y = globalPos.y;
                    this.fingerParent.globalToLocal(x, y, globalPos);
                    this.m_hand.setXY(globalPos.x, globalPos.y);
                }
                else {
                    this.clearBtnIntval();
                }
            };
            GuideUI.prototype.clearGuide = function () {
                this.interactionArea.graphics.clear();
                this.hitArea.unHit.clear();
            };
            //隐藏手指
            GuideUI.prototype.hideHand = function () {
                this.clearBtnIntval();
                this.clearGuide();
                this.m_hand.visible = false;
                this.m_hand.m_hand.m_t0.stop();
                this.m_hand.m_c_circle_visible.selectedIndex = 1;
                this.m_hand.m_tcircle.stop();
            };
            //显示遮罩
            GuideUI.prototype.showModal = function () {
                this.maskArea.visible = true;
            };
            //隐藏遮罩
            GuideUI.prototype.hideModal = function () {
                this.maskArea.visible = false;
            };
            /**
             *
             * @param msg 内容信息
             * @param position 位置
             */
            GuideUI.prototype.showDialog = function (msg, position) {
                this.hitArea.unHit.clear();
                this.hitArea.unHit.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
                //
                this.m_visible.selectedIndex = GuideDialogType.Dialog;
                //
                this.setMaskIndex();
                //内容
                this.m_dialog.m_dialog.text = msg;
                //设置位置
                this.m_dialog.setXY(position.x, position.y);
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
                this.setMaskIndex();
                this.showModal();
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
                this.setMaskIndex();
                this.showModal();
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
                this.setMaskIndex();
                this.showModal();
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
            GuideUI.prototype.showHaiBao = function (msg, caller, complete) {
                if (caller === void 0) { caller = null; }
                if (complete === void 0) { complete = null; }
                this.caller = caller;
                this.complete = complete;
                this.m_visible.selectedIndex = GuideDialogType.HaiBao;
                this.m_haibao.m_title.text = msg;
                this.m_haibao.onClick(this, this.onClickHaibaoCloseBtn);
            };
            //	点击关闭	
            GuideUI.prototype.onClickHaibaoCloseBtn = function () {
                this.m_haibao.offClick(this, this.onClickHaibaoCloseBtn);
                this.hideAll();
                this.doComplete();
            };
            //	点击关闭	
            GuideUI.prototype.onClickCloseBtn = function () {
                this.m_npcIntroPanel.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.hideAll();
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
                this.maskArea.visible = value;
                this.interactionArea.visible = value;
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
            return GuideUI;
        }(Guide.GuideUIStruct));
        Guide.GuideUI = GuideUI;
    })(Guide = fgui.Guide || (fgui.Guide = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideUI.js.map