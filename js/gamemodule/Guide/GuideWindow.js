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
    var GuideWindow = /** @class */ (function (_super) {
        __extends(GuideWindow, _super);
        function GuideWindow() {
            var _this = _super.call(this) || this;
            //检查按钮是否存在定时handler
            _this.checkBtnExistHandler = 0;
            //加载完成
            _this.isLoadComplete = false;
            //是否有引导待触发
            _this.hasPlayGuide = false;
            //
            _this.isLoading = false;
            //
            _this.isShowDialog = false;
            _this.menuParameter = { openType: Games.MenuOpenType.None, openIndex: 0, args: [] };
            return _this;
        }
        GuideWindow.prototype.loadAsset = function () {
            // 加载系统UI
            Game.asset.loadFguiByPackagename(Games.GuiPackageNames.Guide, this, this.onLoadedComplete);
        };
        //加载完成
        GuideWindow.prototype.onLoadedComplete = function () {
            this.isLoadComplete = true;
            this.showOn(Games.MenuLayer.guide);
            if (this.hasPlayGuide) {
                this.play(this.currentId, this.currentType);
            }
        };
        //显示
        GuideWindow.prototype.show = function () {
            console.log("显示所有");
            if (this.conent) {
                this.conent.visible = true;
            }
        };
        GuideWindow.prototype.hideAll = function () {
            console.log("hideAll");
            if (this.conent) {
                this.conent.hideAll();
            }
            this.hide();
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        GuideWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        GuideWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        // 菜单创建
        GuideWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Guide.GuideUI.createInstance();
            this.contentPane = this.conent;
            this.contentPane.onClick(this, this.onClickToNext);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        GuideWindow.prototype.onMenuOpen = function (parameter) {
        };
        /**
         * 回收手指
         */
        GuideWindow.prototype.recyclingHand = function () {
            if (this.conent) {
                this.conent.recyclingHand();
            }
            this.guideBtn = null;
        };
        /**
         * 关闭引导对话
         */
        GuideWindow.prototype.closeDialog = function () {
            if (this.conent && this.isShowDialog) {
                this.isShowDialog = false;
                this.conent.m_dialog.m_t1.play(null, 1);
            }
        };
        //隐藏		
        GuideWindow.prototype.hide = function () {
            this.recyclingHand();
            this.closeDialog();
            if (this.conent) {
                this.conent.visible = false;
            }
        };
        //点击进入下一步
        GuideWindow.prototype.onClickToNext = function () {
            switch (this.clickFullType) {
                case Games.GuideFullClickType.NextGuide:
                case Games.GuideFullClickType.NextStory:
                    this.playNext();
                    break;
                case Games.GuideFullClickType.CompleteWrite:
                    this.conent.directComplete();
                    break;
                default:
                    break;
            }
        };
        //播放下一个
        GuideWindow.prototype.playNext = function () {
            switch (this.currentType) {
                //当前是引导
                case Games.GuideType.Guide:
                    Game.guide.playNextGuide();
                    break;
                //当前是剧情
                case Games.GuideType.Story:
                    Game.story.playNextStory();
                    break;
                default:
                    break;
            }
        };
        /**
         * 播放引导
         * @param id
         * @param type
         */
        GuideWindow.prototype.play = function (id, type) {
            this.show();
            this.currentId = id;
            this.currentType = type;
            this.clickFullType = Games.GuideFullClickType.None;
            if (this.isLoadComplete == false) {
                this.hasPlayGuide = true;
                this.loadAsset();
            }
            else {
                switch (type) {
                    case Games.GuideType.Story: //剧情
                        this.playStory(id);
                        break;
                    case Games.GuideType.Guide: //引导
                        this.playGuide(id);
                        break;
                    case Games.GuideType.Anima: //动画
                        this.playOpeningAnima();
                        break;
                    case Games.GuideType.Car: //开车动画
                        this.playStartCar();
                        break;
                    default:
                        break;
                }
            }
        };
        //点击按钮
        GuideWindow.prototype.onClickBtn = function (btn, config) {
            this.recyclingHand();
            if (config.finish_type == Games.GuideFinishType.GuideFinishType_20_ClickTarget
                || config.finish_type == Games.GuideFinishType.GuideFinishType_29_Secretary
                || config.finish_type == Games.GuideFinishType.GuideFinishType_30_MarketSelectActor) {
                Game.guide.finishId(this.guideSystemConfig.id);
            }
            else {
                Game.moduleModel.guide.addFinishGuideId(this.guideSystemConfig.id);
            }
            Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToNext);
            btn.off("click", this, this.onClickBtn);
        };
        /**
         * 获取引导按钮
         * @param id
         */
        GuideWindow.prototype.getGuideBtn = function (config) {
            var btn = GuideHelp.getGuideUIByConfig(config);
            return btn;
        };
        /**
         * 播放剧情 不要直接调用 用play 传type
         * @param id 剧情id
         */
        GuideWindow.prototype.playStory = function (id) {
            this.clickFullType = Games.GuideFullClickType.None;
            var config = Game.config.storyline.getConfig(id);
            if (config) {
                switch (config.ui_type) {
                    case Games.GuideUIType.NpcIntro: //npc介绍
                        this.playNpcIntro(id);
                        break;
                    case Games.GuideUIType.HaiBao: //npc介绍
                        this.playHaiBao(id);
                        break;
                    default:
                        this.playStoryDialog(id);
                        break;
                }
            }
            this.storylineConfig = config;
        };
        //npc介绍界面
        GuideWindow.prototype.playNpcIntro = function (id) {
            var _this = this;
            var config = Game.config.storyline.getConfig(id);
            this.conent.showNpcUI(config, this, this.dialogClickComplete);
            setTimeout(function () {
                _this.clickFullType = Games.GuideFullClickType.NextStory;
            }, 500);
        };
        //npc介绍界面
        GuideWindow.prototype.playHaiBao = function (id) {
            var config = Game.config.storyline.getConfig(id);
            this.conent.showHaiBao(contentFormatCustom(config.name), contentFormatCustom(config.ui_content), this, this.dialogClickComplete);
        };
        //播放剧情对话
        GuideWindow.prototype.playStoryDialog = function (id) {
            var _this = this;
            var config = Game.config.storyline.getConfig(id);
            var url = config.bodyIconUrl;
            var name = config.nName;
            var msg = config.contentFormatCustom;
            if (config) {
                if (config.anchor == Games.GuideAnchor.Left) {
                    this.conent.showLeftDialog(url, name, msg, this, function () {
                        _this.clickFullType = Games.GuideFullClickType.CompleteWrite;
                    }, this.dialogShowComplete);
                }
                else {
                    this.conent.showRightDialog(url, name, msg, this, function () {
                        _this.clickFullType = Games.GuideFullClickType.CompleteWrite;
                    }, this.dialogShowComplete);
                }
            }
        };
        /**
         * 播放引导 不要直接调用 用play 传type
         * @param id 引导id
         */
        GuideWindow.prototype.playGuide = function (id) {
            var _this = this;
            this.clickFullType = Games.GuideFullClickType.None;
            var config = Game.config.guidesystem.getConfig(id);
            if (config) {
                config.force = false;
                this.conent.setForce(config.force);
                Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToNext);
                if (config.assistant) {
                    this.conent.showDialog(config.content, config.position);
                    if (this.guideSystemConfig != config) {
                        this.isShowDialog = true;
                        this.conent.m_dialog.m_t0.play(Handler.create(null, function () {
                            Laya.stage.on(Laya.Event.CLICK, _this, _this.onClickStageToHideDialog);
                        }), 1);
                    }
                }
                else {
                    this.conent.hideDialog();
                }
                clearInterval(this.checkBtnExistHandler);
                //循环获取
                this.checkBtnExistHandler = setInterval(function () {
                    _this.checkBtn(config);
                }, 1000);
                this.checkBtn(config);
            }
            this.guideSystemConfig = config;
        };
        GuideWindow.prototype.checkBtn = function (config) {
            var _this = this;
            if (config.finish_type == Games.GuideFinishType.GuideFinishType_24_ClickAnyWhere) {
                clearInterval(this.checkBtnExistHandler);
                Laya.stage.on(Laya.Event.CLICK, this, this.onClickStageToNext);
            }
            else {
                var btn_1 = this.getGuideBtn(config);
                if (btn_1) {
                    clearInterval(this.checkBtnExistHandler);
                    this.conent.showFinger(btn_1, config);
                    if (config.force) {
                        btn_1.on("click", this, this.onClickBtn, [btn_1, config]);
                    }
                    else {
                        setTimeout(function () {
                            btn_1.on("click", _this, _this.onClickBtn, [btn_1, config]);
                        }, 200);
                    }
                }
                this.guideBtn = btn_1;
            }
        };
        GuideWindow.prototype.onClickStageToHideDialog = function () {
            Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToHideDialog);
            if (this.guideSystemConfig && this.guideSystemConfig.stay == false) {
                this.closeDialog();
            }
        };
        //点击下一个
        GuideWindow.prototype.onClickStageToNext = function (event) {
            Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToNext);
            clearInterval(this.checkBtnExistHandler);
            Game.guide.finishId(this.guideSystemConfig.id);
        };
        //可以点击
        GuideWindow.prototype.dialogShowComplete = function () {
            this.clickFullType = Games.GuideFullClickType.NextGuide;
        };
        //点击npc
        GuideWindow.prototype.dialogClickComplete = function () {
            this.playNext();
        };
        //播放动画
        GuideWindow.prototype.playOpeningAnima = function () {
            this.conent.playOpenAnima();
        };
        //播放开始车场景动画
        GuideWindow.prototype.playStartCar = function () {
            this.conent.playStartCar();
        };
        return GuideWindow;
    }(Games.MWindow));
    Games.GuideWindow = GuideWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GuideWindow.js.map