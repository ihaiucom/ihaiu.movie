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
    var WarMovie;
    (function (WarMovie) {
        var WarSelectActor = /** @class */ (function (_super) {
            __extends(WarSelectActor, _super);
            function WarSelectActor() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarSelectActor.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmSelectActorTitle;
                this.m_selectTip.text = TEXT.PleaseSelectActor;
                // 艺人需求列表
                this.m_reqList.itemRenderer = Laya.Handler.create(this, this.YRReqItem, null, false);
                //确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 关闭界面
                this.m_closeBtn.onClick(this, this.onCloseUI);
            };
            // 关闭UI
            WarSelectActor.prototype.onCloseUI = function () {
                this.onBackSelect(-1);
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            // 提交选择的艺人
            WarSelectActor.prototype.onClickOkBtn = function () {
                var _this = this;
                var myHaveDollar = Game.moduleModel.item.getItemNum(EItemId.dollar);
                var list = Game.moduleModel.warData.getRealYRList;
                var cost = 0;
                if (list.count > 0) {
                    var keyList = list.getKeys();
                    for (var i = 0; i < keyList.length; i++) {
                        var val = list.getValue(keyList[i]);
                        if (val.id !== 9999) {
                            cost += val.PayForFilming(Game.moduleModel.warData.moveStory.characterProperty[i].type);
                        }
                    }
                }
                if (cost <= 0) {
                    Game.system.toastText(TEXT.AllTempTip);
                }
                else {
                    if (cost <= myHaveDollar) {
                        this.moduleWindow.closeSelf();
                        // 艺人全部确认
                        Game.moduleModel.warData.ConfirmSetActor(function () {
                            _this.moduleMain.conent.subWindowToMain();
                        });
                    }
                    else {
                        var isplay = Game.guide.checkPlayStorySelectStoryOrActor();
                        if (isplay == false) {
                            Game.system.openItemWay(EItemId.dollar, cost);
                        }
                    }
                }
            };
            WarSelectActor.prototype.onWindowShow = function () {
                this.setData();
            };
            WarSelectActor.prototype.onWindowHide = function () {
            };
            WarSelectActor.prototype.setData = function () {
                var _this = this;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.temActor = Game.moduleModel.warData.temActor;
                this.curData = Game.moduleModel.warData.moveStory;
                // 显示电影详情子窗口
                this.m_filmInfBtn.onClick(this, function () {
                    _this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
                });
                // 提交按钮先隐藏
                this.m_okBtnContorl.setSelectedIndex(0);
                this.m_reqList.numItems = this.curData.characterProperty.length;
                this.setSelectTip();
                // 点击艺人列表item
                this.m_reqList.on(fairygui.Events.CLICK_ITEM, this, this.reqClickItem);
                // 取消艺人选择
                this.m_backBtn.onClick(this, this.onBackSelect, [-1]);
            };
            WarSelectActor.prototype.setSelectTip = function () {
                var pos = -1;
                for (var i = 0; i < this.curData.characterProperty.length; i++) {
                    if (Game.moduleModel.warData.curYRList.hasKey(i)) {
                        if (pos === -1) {
                            pos = this.curData.characterProperty.length;
                        }
                    }
                    else {
                        pos = i;
                        break;
                    }
                }
                if (pos === this.curData.characterProperty.length) {
                    if (this.m_selectTip.visible) {
                        this.m_selectTip.visible = false;
                    }
                }
                else {
                    if (!this.m_selectTip.visible) {
                        this.m_selectTip.visible = true;
                    }
                    this.m_selectTip.x = pos * 140 + (5 - this.curData.characterProperty.length) * 70;
                }
            };
            // 艺人需求item赋值
            // 需要选择的艺人和已经选择的艺人展示在这里
            WarSelectActor.prototype.YRReqItem = function (index, obj) {
                var item = obj;
                var actor;
                if (Game.moduleModel.warData.curYRList.hasKey(index)) {
                    actor = Game.moduleModel.warData.curYRList.getValue(index);
                }
                else {
                    actor = null;
                }
                item.setData(this.curData.characterProperty[index], actor);
                // 已经全部选择完毕后，确认按钮显示
                if (Game.moduleModel.warData.curYRList.count === this.curData.characterProperty.length) {
                    this.m_okBtnContorl.setSelectedIndex(1);
                    if (this.m_select.selectedIndex === 1) {
                        this.m_select.setSelectedIndex(0);
                    }
                    this.m_searchTip.visible = false;
                }
                else {
                    this.m_okBtnContorl.setSelectedIndex(0);
                }
            };
            // 艺人需求被点击
            WarSelectActor.prototype.reqClickItem = function (obj) {
                Game.sound.playSound(SoundKey.MM19_ArtistShow);
                this.m_select.setSelectedIndex(1);
                // 显示可用艺人列表
                this.onShowYRList(this.m_reqList.getChildIndex(obj));
            };
            // 取消艺人点击
            WarSelectActor.prototype.onBackSelect = function (index, reqIndex) {
                var _this = this;
                this.m_reqList.clearSelection();
                this.m_searchTip.visible = false;
                this.m_select.setSelectedIndex(0);
                this.m_zhongTip.text = "";
                if (index >= 0) {
                    var actor = this.temActor;
                    if (this.actorData.length > index) {
                        actor = this.actorData[index];
                    }
                    Game.moduleModel.warData.sendSetActor(reqIndex, actor.id, function () {
                        _this.m_reqList.numItems = _this.curData.characterProperty.length;
                        _this.setSelectTip();
                    });
                }
                else {
                    if (Game.moduleModel.warData.curYRList.count === this.curData.characterProperty.length) {
                        this.m_okBtnContorl.setSelectedIndex(1);
                        if (this.m_select.selectedIndex === 1) {
                            this.m_select.setSelectedIndex(0);
                        }
                        this.m_searchTip.visible = false;
                    }
                    else {
                        this.m_okBtnContorl.setSelectedIndex(0);
                    }
                }
                this.setSelectTip();
            };
            // 显示艺人列表
            WarSelectActor.prototype.onShowYRList = function (index) {
                this.m_okBtnContorl.setSelectedIndex(0);
                var characterConfig = this.curData.characterProperty[index];
                this.actorData = Game.moduleModel.warData.getListForFilmYR(characterConfig);
                var count = this.actorData.length;
                this.m_zhongTip.setData(characterConfig.getDes);
                this.m_yrList.numItems = 0;
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.YRListItem, [index, characterConfig], false);
                if (count == 0) {
                    // 无人可用
                    count = 1;
                    this.m_emtpyTip2.text = Game.config.msg.getConfig(MsgKey.movie_actor_recruit).notice;
                    this.m_emtpyTip.text = Game.config.msg.getConfig(MsgKey.movie_non_suitable_actor).notice;
                    this.m_searchTip.visible = true;
                }
                else {
                    this.m_searchTip.visible = false;
                    if (this.isUseTemActor(index)) {
                        this.m_emtpyTip2.text = Game.config.msg.getConfig(MsgKey.movie_actor_recruit).notice;
                        this.m_emtpyTip.text = Game.config.msg.getConfig(MsgKey.movie_non_enough_actor).notice;
                        this.m_searchTip.visible = true;
                        count++;
                    }
                }
                this.m_yrList.numItems = count;
            };
            // 是否使用临时艺人判断
            WarSelectActor.prototype.isUseTemActor = function (index) {
                var result = false;
                if (Game.moduleModel.warData.getRealYRList.count > 0) {
                    var keyList = Game.moduleModel.warData.getRealYRList.getKeys();
                    var haveInde = 0;
                    for (var i = 0; i < keyList.length; i++) {
                        for (var index_1 = 0; index_1 < this.actorData.length; index_1++) {
                            if (Game.moduleModel.warData.getRealYRList.getValue(keyList[i]).id == this.actorData[index_1].id) {
                                haveInde++;
                            }
                        }
                    }
                    if (haveInde == this.actorData.length) {
                        result = true;
                        var cur = Game.moduleModel.warData.curYRList.getValue(index);
                        if (cur && cur.id > 0 && cur.id !== 9999) {
                            for (var index_2 = 0; index_2 < this.actorData.length; index_2++) {
                                if (cur.id == this.actorData[index_2].id) {
                                    result = false;
                                }
                            }
                        }
                    }
                }
                return result;
            };
            // 艺人可用列表item赋值
            WarSelectActor.prototype.YRListItem = function (reqIndex, characterConfig, index, obj) {
                var item = obj;
                item.m_infBtn.offClick(this, this.onClickInfoBtn);
                if (this.actorData.length > 0) {
                    if (index === this.actorData.length) {
                        item.setDataEmpty();
                    }
                    else {
                        item.setData(this.actorData[index], characterConfig);
                        // 是否已经饰演角色
                        item.m_isUse.setSelectedIndex(0);
                        if (Game.moduleModel.warData.curYRList.count > 0) {
                            var keyList = Game.moduleModel.warData.curYRList.getKeys();
                            for (var i = 0; i < keyList.length; i++) {
                                if (Game.moduleModel.warData.curYRList.getValue(keyList[i]).id == this.actorData[index].id) {
                                    item.m_isUse.setSelectedIndex(1);
                                    item.m_tip1.text = TEXT.Play;
                                    item.m_tip2.text = this.curData.characterProperty[keyList[i]].getType;
                                }
                            }
                        }
                        item.m_infBtn.onClick(this, this.onClickInfoBtn, [this.actorData[index]]);
                    }
                }
                else {
                    item.setDataEmpty();
                }
                item.m_okBtn.onClick(this, this.onBackSelect, [index, reqIndex]);
            };
            // 显示艺人详情		
            WarSelectActor.prototype.onClickInfoBtn = function (data) {
                Game.menu.open(MenuId.ArtistDetail, data.id, Games.ArtistDetailTabType.Expert);
            };
            return WarSelectActor;
        }(WarMovie.WarSelectActorStruct));
        WarMovie.WarSelectActor = WarSelectActor;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectActor.js.map