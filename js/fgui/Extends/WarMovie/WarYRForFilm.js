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
        /**
         * 艺人契合度信息
         */
        var Agreement = /** @class */ (function () {
            function Agreement() {
            }
            return Agreement;
        }());
        WarMovie.Agreement = Agreement;
        var WarYRForFilm = /** @class */ (function (_super) {
            __extends(WarYRForFilm, _super);
            function WarYRForFilm() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 当前第几个艺人
                _this.currIndexOf = 0;
                // 切合度字典
                _this.agreDic = new Dictionary();
                // 当前第几个属性
                _this.curBulleIndexOf = 0;
                // 属性列表
                _this.agreementList = new Array();
                // 属性列表
                _this.bubbleList = new Array();
                _this.bubbleX = new Array();
                _this.bubbleY = new Array();
                // 速度
                _this.speed = 700;
                _this.isSkipAni = false;
                _this.flyIndexOf = 0;
                _this.overDic = new Dictionary();
                return _this;
            }
            WarYRForFilm.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.ActorForFilmTitle;
                this.bubbleList = [this.m_bubble0, this.m_bubble1, this.m_bubble2, this.m_bubble3, this.m_bubble4, this.m_bubble5, this.m_bubble6, this.m_bubble7];
                this.bubbleX = [this.m_bubble0.x, this.m_bubble1.x, this.m_bubble2.x, this.m_bubble3.x, this.m_bubble4.x, this.m_bubble5.x, this.m_bubble6.x, this.m_bubble7.x];
                this.bubbleY = [this.m_bubble0.y, this.m_bubble1.y, this.m_bubble2.y, this.m_bubble3.y, this.m_bubble4.y, this.m_bubble5.y, this.m_bubble6.y, this.m_bubble7.y];
                // 艺人列表
                this.m_resultList.itemRenderer = Laya.Handler.create(this, this.yrForFilmItem, null, false);
                // 关闭
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_skipBtn.onClick(this, this.onskipAniShowResult);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            WarYRForFilm.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuBack();
            };
            WarYRForFilm.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState(function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            WarYRForFilm.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarYRForFilm.prototype.onWindowShow = function () {
                this.setData();
            };
            WarYRForFilm.prototype.onWindowHide = function () {
                this.hideBubble();
            };
            WarYRForFilm.prototype.setData = function () {
                this.isSkipAni = false;
                this.overDic.clear();
                this.m_okBtn.visible = false;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.currIndexOf = 0;
                this.m_resultList.numItems = 0;
                this.agreDic.clear();
                var list = Game.moduleModel.warData.curYRList;
                var keyList = list.getKeys();
                var counts = 0;
                this.charact = new Dictionary();
                this.actorList = new Dictionary();
                for (var i = 0; i < keyList.length; i++) {
                    var val = list.getValue(keyList[i]);
                    if (val.id !== 9999) {
                        var charactItem = Game.moduleModel.warData.moveStory.characterProperty[i];
                        this.charact.add(counts, charactItem);
                        this.actorList.add(counts, val);
                        counts++;
                    }
                }
                this.showYRNext();
            };
            WarYRForFilm.prototype.showYRNext = function () {
                if (this.currIndexOf <= this.actorList.count) {
                    if (this.currIndexOf < this.actorList.count) {
                        this.hideBubble();
                        Game.sound.playSound(SoundKey.MM21_ArtistAccord);
                        this.m_resultList.numItems = this.currIndexOf;
                        this.m_type.text = this.charact.getValue(this.currIndexOf).getType;
                        this.m_icon.setIcon(Games.WarLoadPic.getActorIcon(this.actorList.getValue(this.currIndexOf).config.avatar));
                        this.curBulleIndexOf = 0;
                        if (this.isSkipAni) {
                            this.m_t0.stop();
                            this.showBubbleList();
                        }
                        else {
                            this.m_t0.play(laya.utils.Handler.create(this, this.showBubbleList), 1);
                        }
                    }
                    else {
                        this.m_resultList.numItems = this.currIndexOf;
                        this.m_okBtn.visible = true;
                    }
                }
            };
            WarYRForFilm.prototype.hideBubble = function () {
                for (var i = 0; i < this.bubbleList.length; i++) {
                    this.bubbleList[i].visible = false;
                }
                if (this.tweenTarget && this.tweenTarget != null) {
                    laya.utils.Tween.clearAll(this.tweenTarget);
                    this.tweenTarget = null;
                }
            };
            // 跳过直接显示结果		
            WarYRForFilm.prototype.onskipAniShowResult = function () {
                if (!this.isSkipAni) {
                    this.isSkipAni = true;
                }
            };
            // 动画结束，显示属性
            WarYRForFilm.prototype.showBubbleList = function () {
                var _this = this;
                if (this.curBulleIndexOf === 0) {
                    this.agreementList = this.checkBubble();
                }
                if (this.curBulleIndexOf < this.agreementList.length) {
                    // 当前操作哪个属性
                    var cur = this.bubbleList[this.curBulleIndexOf];
                    cur.setXY(160, 250);
                    cur.setData(this.agreementList[this.curBulleIndexOf]);
                    cur.visible = true;
                    if (this.isSkipAni) {
                        this.tweenTarget = null;
                        cur.setXY(this.bubbleX[this.curBulleIndexOf], this.bubbleY[this.curBulleIndexOf]);
                        this.curBulleIndexOf++;
                        this.showBubbleList();
                    }
                    else {
                        this.tweenTarget = cur;
                        laya.utils.Tween.to(cur, { x: this.bubbleX[this.curBulleIndexOf], y: this.bubbleY[this.curBulleIndexOf] }, (this.bubbleX[this.curBulleIndexOf] - 160) / this.speed * 1000, Laya.Ease.linearIn, Handler.create(this, function () {
                            _this.tweenTarget = null;
                            _this.showBubbleList();
                        }));
                        this.curBulleIndexOf++;
                    }
                }
                else {
                    this.currIndexOf++;
                    this.overDic.add(this.currIndexOf - 1, false);
                    this.m_resultList.numItems = this.currIndexOf;
                    this.flyIndexOf = 0;
                    if (this.isSkipAni) {
                        this.flyActorList();
                    }
                    else {
                        setTimeout(function () { _this.flyActorList(); }, 700);
                    }
                }
            };
            // 飞属性到下方艺人列表内
            WarYRForFilm.prototype.flyActorList = function () {
                var _this = this;
                if (this.flyIndexOf < this.agreementList.length) {
                    var cur_1 = this.bubbleList[this.flyIndexOf];
                    var target = this.m_resultList.getChildAt(this.currIndexOf - 1);
                    if (this.isSkipAni) {
                        this.tweenTarget = null;
                        var aggList = this.agreDic.getValue(this.currIndexOf - 1);
                        if (!aggList || aggList === null) {
                            aggList = new Array();
                        }
                        aggList.push(this.agreementList[this.flyIndexOf]);
                        this.agreDic.add(this.currIndexOf - 1, aggList);
                        this.flyIndexOf++;
                        this.m_resultList.numItems = this.currIndexOf;
                        cur_1.visible = false;
                        this.flyActorList();
                    }
                    else {
                        var dur = (target.localToGlobal().y - cur_1.y) / (this.speed * 1.3) * 1000;
                        this.tweenTarget = cur_1;
                        laya.utils.Tween.to(cur_1, { y: target.localToGlobal().y }, dur, Laya.Ease.linearIn, Handler.create(this, function () {
                            _this.tweenTarget = null;
                            var aggList = _this.agreDic.getValue(_this.currIndexOf - 1);
                            if (!aggList || aggList === null) {
                                aggList = new Array();
                            }
                            aggList.push(_this.agreementList[_this.flyIndexOf]);
                            _this.agreDic.add(_this.currIndexOf - 1, aggList);
                            _this.flyIndexOf++;
                            _this.m_resultList.numItems = _this.currIndexOf;
                            cur_1.visible = false;
                            _this.flyActorList();
                        }));
                    }
                }
                else {
                    this.overDic.add(this.currIndexOf - 1, true);
                    this.showYRNext();
                }
            };
            // 艺人契合度列表单个赋值
            WarYRForFilm.prototype.yrForFilmItem = function (index, obj) {
                if (index === this.currIndexOf - 1) {
                    var item = obj;
                    item.setData(this.actorList.getValue(index), index, this.agreDic.getValue(index), this.overDic.getValue(index));
                }
            };
            // 判断当前艺人的契合度		
            WarYRForFilm.prototype.checkBubble = function () {
                var agreementList = new Array();
                // 艺人信息
                var actor = this.actorList.getValue(this.currIndexOf);
                var actorType = actor.config.story_type;
                var actorFeature = actor.config.story_feature;
                var actorCharacter = actor.config.character;
                // 剧本信息
                var story = Game.moduleModel.warData.moveStory;
                // 角色信息
                var reqCaracters = this.charact.getValue(this.currIndexOf);
                var cTags = reqCaracters.tags;
                for (var i = 0; i < actorType.length; i++) {
                    if (actorType[i].story === story.type) {
                        var canAdd = true;
                        for (var k = 0; k < agreementList.length; k++) {
                            if (agreementList[k].id === actorType[i].story) {
                                canAdd = false;
                            }
                        }
                        if (canAdd) {
                            var aggree = new Agreement();
                            aggree.type = 1;
                            aggree.id = actorType[i].story;
                            aggree.lv = actorType[i].lv;
                            aggree.strTip = Game.config.property.getConfig(actorType[i].story).name;
                            aggree.attribute = actorType[i].property;
                            agreementList.push(aggree);
                        }
                    }
                }
                for (var i = 0; i < actorFeature.length; i++) {
                    for (var j = 0; j < story.tags.length; j++) {
                        if (story.tags[j] === actorFeature[i].feature) {
                            var canAdd = true;
                            for (var k = 0; k < agreementList.length; k++) {
                                if (agreementList[k].id === actorFeature[i].feature) {
                                    canAdd = false;
                                }
                            }
                            if (canAdd) {
                                var aggree = new Agreement();
                                aggree.type = 2;
                                aggree.id = actorFeature[i].feature;
                                aggree.lv = actorFeature[i].lv;
                                aggree.strTip = Game.config.property.getConfig(actorFeature[i].feature).name;
                                aggree.attribute = actorFeature[i].property;
                                agreementList.push(aggree);
                            }
                        }
                    }
                }
                for (var i = 0; i < actorCharacter.length; i++) {
                    for (var j = 0; j < cTags.length; j++) {
                        if (cTags[j] === actorCharacter[i].character) {
                            var canAdd = true;
                            for (var k = 0; k < agreementList.length; k++) {
                                if (agreementList[k].id === actorCharacter[i].character) {
                                    canAdd = false;
                                }
                            }
                            if (canAdd) {
                                var aggree = new Agreement();
                                aggree.type = 3;
                                aggree.id = actorCharacter[i].character;
                                aggree.lv = actorCharacter[i].lv;
                                aggree.strTip = Game.config.property.getConfig(actorCharacter[i].character).name;
                                aggree.attribute = actorCharacter[i].property;
                                agreementList.push(aggree);
                            }
                        }
                    }
                }
                return agreementList;
            };
            return WarYRForFilm;
        }(WarMovie.WarYRForFilmStruct));
        WarMovie.WarYRForFilm = WarYRForFilm;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRForFilm.js.map