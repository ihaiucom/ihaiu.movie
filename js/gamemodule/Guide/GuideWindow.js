var Games;
(function (Games) {
    var GuideWindow = /** @class */ (function () {
        function GuideWindow() {
            //检查按钮是否存在定时handler
            this.checkBtnExistHandler = 0;
            //加载完成
            this.isLoadComplete = false;
            //是否有引导待触发
            this.hasPlayGuide = false;
            //
            this.isLoading = false;
        }
        GuideWindow.prototype.loadAsset = function () {
            // 加载系统UI
            Laya.loader.load([
                { url: "res/fgui/Guide.bin", type: Laya.Loader.BUFFER },
                { url: "res/fgui/Guide@atlas0.png", type: Laya.Loader.IMAGE }
            ], Laya.Handler.create(this, this.onLoadedComplete));
        };
        //加载完成
        GuideWindow.prototype.onLoadedComplete = function () {
            this.isLoadComplete = true;
            fairygui.UIPackage.addPackage("res/fgui/Guide");
            if (this.hasPlayGuide) {
                this.play(this.currentId, this.currentType);
            }
        };
        //显示
        GuideWindow.prototype.show = function () {
            if (this._guideUI) {
                this._guideUI.visible = true;
            }
        };
        //隐藏		
        GuideWindow.prototype.hide = function () {
            if (this._guideUI) {
                this._guideUI.recyclingHand();
                this._guideUI.visible = false;
            }
        };
        Object.defineProperty(GuideWindow.prototype, "guideUI", {
            //引导UI
            get: function () {
                if (this._guideUI == null) {
                    this._guideUI = fgui.Guide.GuideUI.createInstance();
                    this._guideUI.onClick(this, this.onClickToNext);
                    Games.MenuLayer.guide.addChild(this._guideUI);
                }
                return this._guideUI;
            },
            enumerable: true,
            configurable: true
        });
        //点击进入下一步
        GuideWindow.prototype.onClickToNext = function () {
            switch (this.clickFullType) {
                case Games.GuideFullClickType.NextGuide:
                    this.playNext();
                    break;
                case Games.GuideFullClickType.CompleteWrite:
                    this.guideUI.directComplete();
                    break;
                case Games.GuideFullClickType.NextStory:
                    this.playNext();
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
            // if (this.isLoading)
            // {
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
                    default:
                        break;
                }
            }
            // }
            // else
            // {
            // 	this.loadAsset();
            // }
        };
        //播放下一个
        GuideWindow.prototype.playNext = function () {
            switch (this.currentType) {
                //当前是引导
                case Games.GuideType.Guide:
                    this.playNextGuide();
                    break;
                //当前是剧情
                case Games.GuideType.Story:
                    this.playNextStory();
                    break;
                default:
                    break;
            }
        };
        //下一步从引导判断
        GuideWindow.prototype.playNextGuide = function () {
            Game.guide.playNextGuide();
        };
        //下一步从剧情判断
        GuideWindow.prototype.playNextStory = function () {
            Game.guide.playNextStory();
        };
        //结束剧情
        GuideWindow.prototype.endStory = function () {
            console.log("结束剧情");
            Game.guide.endStory();
        };
        //结束引导
        GuideWindow.prototype.endGuide = function () {
            console.log("结束引导");
            clearInterval(this.checkBtnExistHandler);
            Game.guide.endGuide();
        };
        //暂停引导
        GuideWindow.prototype.pauseGuide = function () {
            console.log("暂停引导");
            // this.guideUI.hideHand();
            this.hide();
        };
        //暂停剧情
        GuideWindow.prototype.pauseStory = function () {
            console.log("暂停剧情");
            this.hide();
        };
        //点击按钮
        GuideWindow.prototype.onClickBtn = function (btn, config) {
            clearInterval(this.checkBtnExistHandler);
            this.hide();
            if (config.finish_type == Games.GuideFinishType.GuideFinishType_20_ClickTarget) {
                Game.guide.finishId(this.guideSystemConfig.id);
            }
            Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToNext);
            btn.offClick(this, this.onClickBtn);
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
            this.guideUI.showNpcUI(config, this, this.dialogClickComplete);
            setTimeout(function () {
                _this.clickFullType = Games.GuideFullClickType.NextStory;
            }, 500);
        };
        //npc介绍界面
        GuideWindow.prototype.playHaiBao = function (id) {
            var config = Game.config.storyline.getConfig(id);
            this.guideUI.showHaiBao(contentFormatCustom(config.ui_content), this, this.dialogClickComplete);
        };
        //播放剧情对话
        GuideWindow.prototype.playStoryDialog = function (id) {
            var _this = this;
            var config = Game.config.storyline.getConfig(id);
            var url = config.bodyIconUrl;
            var name = config.nName;
            var msg = config.contentFormatCustom;
            if (config) {
                console.log("id", id, "msg", config.contentFormatCustom, url);
                if (config.anchor == Games.GuideAnchor.Left) {
                    this.guideUI.showLeftDialog(url, name, msg, this, function () {
                        _this.clickFullType = Games.GuideFullClickType.CompleteWrite;
                    }, this.dialogShowComplete);
                }
                else {
                    this.guideUI.showRightDialog(url, name, msg, this, function () {
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
                this.guideUI.setForce(config.force);
                Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToNext);
                if (config.assistant) {
                    this.showDialog = true;
                    this.guideUI.showDialog(config.content, config.position);
                    this.guideUI.m_dialog.m_t0.play(Handler.create(null, function () {
                        Laya.stage.on(Laya.Event.CLICK, _this, _this.onClickStageToHideDialog);
                    }), 1);
                }
                else {
                    this.guideUI.hideAll();
                }
                clearInterval(this.checkBtnExistHandler);
                //循环获取
                this.checkBtnExistHandler = setInterval(function () {
                    _this.checkBtn(config);
                }, 1000);
                this.checkBtn(config);
            }
            else {
                console.error("没有找到配置Guidesystem id=", id);
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
                    console.log("按钮:", btn_1);
                    clearInterval(this.checkBtnExistHandler);
                    this.guideUI.showFinger(btn_1, config);
                    if (config.force) {
                        btn_1.onClick(this, this.onClickBtn, [btn_1, config]);
                    }
                    else {
                        setTimeout(function () {
                            btn_1.onClick(_this, _this.onClickBtn, [btn_1, config]);
                        }, 200);
                    }
                }
            }
        };
        GuideWindow.prototype.onClickStageToHideDialog = function () {
            Laya.stage.off(Laya.Event.CLICK, this, this.onClickStageToHideDialog);
            if (this.showDialog) {
                this.guideUI.m_dialog.m_t1.play(null, 1);
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
        return GuideWindow;
    }());
    Games.GuideWindow = GuideWindow;
})(Games || (Games = {}));
//# sourceMappingURL=GuideWindow.js.map