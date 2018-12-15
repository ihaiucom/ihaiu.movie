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
    var ArtistDic;
    (function (ArtistDic) {
        var ArtistDicUI = /** @class */ (function (_super) {
            __extends(ArtistDicUI, _super);
            function ArtistDicUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 是否手动关闭，默认手动关闭，需重新初始化
                _this.userCloseUI = true;
                // 当前滚动位置，跳转到艺人详情界面返回后的需求
                _this.scrollPanelPosy = 0;
                // 是否开始依据条件筛选
                _this.haveScreen = false;
                // 星级
                _this.screenStar = [false, false, false, false, false];
                // 国籍
                _this.screenCountry = [false, false, false];
                // 性别
                _this.screenSex = [false, false];
                // 年龄
                _this.screenAge = [false, false];
                // 表演
                _this.screenShow = [false, false];
                _this.isInit = true;
                _this.initListNum = -1;
                _this.initListNum1 = -1;
                _this.initListNum2 = -1;
                return _this;
            }
            ArtistDicUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.ArtistDicUITitle;
                this.m_shwoDetail.m_notHired.text = TEXT.ArtistDicUInotHired;
                this.m_type1.text = TEXT.ArtistDicUIStar;
                this.m_type2.text = TEXT.ArtistDicUICountry;
                this.m_type3.text = TEXT.ArtistDicUISex;
                this.m_type4.text = TEXT.ArtistDicUIAge;
                this.m_type5.text = TEXT.ArtistDicUIShow;
                this.m_artistList.m_noTip.text = TEXT.ArtistDicUINoActor;
                this.m_shwoDetail.m_noTip.text = TEXT.ArtistDicUINoPinglun;
                this.m_shwoDetail.m_tip3.text = TEXT.ArtistDicUIPinglunTitle;
                this.m_screenList.itemRenderer = Laya.Handler.create(this, this.initScreenListItem, null, false);
                this.m_artistList.m_fiveList.setVirtual();
                this.m_artistList.m_fourList.setVirtual();
                this.m_artistList.m_otherList.setVirtual();
                this.m_artistList.m_fiveList.itemRenderer = Laya.Handler.create(this, this.fiveItem, null, false);
                this.m_artistList.m_fourList.itemRenderer = Laya.Handler.create(this, this.fourItem, null, false);
                this.m_artistList.m_otherList.itemRenderer = Laya.Handler.create(this, this.otherItem, null, false);
                this.m_typeList1.itemRenderer = Laya.Handler.create(this, this.typeItem1, null, false);
                this.m_typeList2.itemRenderer = Laya.Handler.create(this, this.typeItem2, null, false);
                this.m_typeList3.itemRenderer = Laya.Handler.create(this, this.typeItem3, null, false);
                this.m_typeList4.itemRenderer = Laya.Handler.create(this, this.typeItem4, null, false);
                this.m_typeList5.itemRenderer = Laya.Handler.create(this, this.typeItem5, null, false);
                this.m_typeList1.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectType1);
                this.m_typeList2.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectType2);
                this.m_typeList3.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectType3);
                this.m_typeList4.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectType4);
                this.m_typeList5.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectType5);
                this.m_artistList.m_fiveList.on(fairygui.Events.CLICK_ITEM, this, this.OnClickFive);
                this.m_artistList.m_fourList.on(fairygui.Events.CLICK_ITEM, this, this.OnClickFour);
                this.m_artistList.m_otherList.on(fairygui.Events.CLICK_ITEM, this, this.OnClickOther);
                this.m_screenList.on(fairygui.Events.CLICK_ITEM, this, this.OnSelectTypeList);
                // 搜索面板
                this.m_ScreenBtn.onClick(this, this.onScreenBtne);
                // 关闭搜索面板
                this.m_closeSearchBtn.onClick(this, this.onCloseScreenBtne);
                // 取消关闭搜索面板按钮上的声音
                this.m_closeSearchBtn.sound = "";
                this.m_closeSearchBtn.soundVolumeScale = 0;
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
                this.m_shwoDetail.m_input.promptText = TEXT.ArtistDicUIPinglun;
                // 留言列表
                this.m_shwoDetail.m_talkList.itemRenderer = Laya.Handler.create(this.m_shwoDetail, this.m_shwoDetail.initItem, null, false);
                // 详情界面
                this.m_shwoDetail.m_detailsBtn.onClick(this.m_shwoDetail, this.m_shwoDetail.onShowDetailsBtn);
                // 发送留言
                this.m_shwoDetail.m_sendBtn.onClick(this.m_shwoDetail, this.m_shwoDetail.onSendBtn);
                // 关闭面板
                this.m_shwoDetail.m_closeBtn.onClick(this, this.onClicCloseDetails);
            };
            ArtistDicUI.prototype.onClicCloseDetails = function () {
                this.m_showDetails.setSelectedIndex(0);
            };
            ArtistDicUI.prototype.onClicClose = function () {
                this.userCloseUI = true;
                this.scrollPanelPosy = 0;
                this.moduleWindow.menuClose();
            };
            ArtistDicUI.prototype.onCloseScreenBtne = function () {
                this.m_screen.setSelectedIndex(0);
            };
            ArtistDicUI.prototype.onScreenBtne = function () {
                if (this.m_screen.selectedIndex === 1) {
                    // 关闭搜索
                    this.m_screen.setSelectedIndex(0);
                }
                else if (this.m_screen.selectedIndex === 0) {
                    this.m_typeList1.numItems = 5;
                    this.m_typeList2.numItems = 3;
                    this.m_typeList3.numItems = 2;
                    this.m_typeList4.numItems = 2;
                    this.m_typeList5.numItems = 2;
                    this.m_screen.setSelectedIndex(1);
                }
            };
            ArtistDicUI.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.story_GetMessage, this.updateMsgBoard, this);
                Game.protoOkEvent.add(ProtoEventKey.story_SetMessage, this.setMessage, this);
                this.setData();
            };
            ArtistDicUI.prototype.onWindowHide = function () {
                if (this.initListNum > -1) {
                    clearTimeout(this.initListNum);
                    this.initListNum = -1;
                }
                if (this.initListNum1 > -1) {
                    clearTimeout(this.initListNum1);
                    this.initListNum = -1;
                }
                if (this.initListNum2 > -1) {
                    clearTimeout(this.initListNum2);
                    this.initListNum = -1;
                }
                Game.protoOkEvent.remove(ProtoEventKey.story_GetMessage, this.updateMsgBoard, this);
                Game.protoOkEvent.remove(ProtoEventKey.story_SetMessage, this.setMessage, this);
            };
            ArtistDicUI.prototype.setMessage = function () {
                if (this.m_showDetails.selectedIndex === 1 && this.m_shwoDetail.actorData !== null) {
                    Game.protosender.story.getMessage(this.m_shwoDetail.actorData.id);
                }
            };
            //更新留言板
            ArtistDicUI.prototype.updateMsgBoard = function (msg) {
                if (this.m_showDetails.selectedIndex === 1 && this.m_shwoDetail.actorData !== null) {
                    if (msg) {
                        this.m_shwoDetail.talkMsg = msg.message;
                        this.m_shwoDetail.m_talkList.numItems = this.m_shwoDetail.talkMsg.length;
                        this.m_shwoDetail.m_talkList.scrollPane.scrollBottom();
                        this.m_shwoDetail.m_haveNoBoard.setSelectedIndex(this.m_shwoDetail.talkMsg.length > 0 ? 0 : 1);
                    }
                    else {
                        this.m_shwoDetail.m_talkList.numItems = 0;
                        this.m_shwoDetail.m_haveNoBoard.setSelectedIndex(1);
                    }
                }
            };
            ArtistDicUI.prototype.setData = function () {
                if (this.userCloseUI) {
                    this.userCloseUI = false;
                    this.initBase();
                }
                this.showSearchResult();
                this.m_artistList.scrollPane.percY = this.scrollPanelPosy;
            };
            ArtistDicUI.prototype.initBase = function () {
                this.isInit = true;
                this.m_showDetails.setSelectedIndex(0);
                this.m_typeList1.numItems = 5;
                this.m_typeList2.numItems = 3;
                this.m_typeList3.numItems = 2;
                this.m_typeList4.numItems = 2;
                this.m_typeList5.numItems = 2;
                this.screenStar = [false, false, false, false, false];
                this.screenCountry = [false, false, false];
                this.screenSex = [false, false];
                this.screenAge = [false, false];
                this.screenShow = [false, false];
                this.haveScreen = false;
                this.haveSelectTypeList = new Array();
                this.haveSelectTypeDic = new Dictionary();
                this.m_screen.setSelectedIndex(0);
            };
            // 搜索结果
            ArtistDicUI.prototype.showSearchResult = function () {
                var _this = this;
                this.fiveActorData = new Array();
                this.fourActorData = new Array();
                this.otherActorData = new Array();
                var actorList = Game.config.actor.getConfigList();
                this.setHaveSelectList();
                var starSelect = this.screenStar[0] || this.screenStar[1] || this.screenStar[2] || this.screenStar[3] || this.screenStar[4];
                var countrySelect = this.screenCountry[0] || this.screenCountry[1] || this.screenCountry[2];
                var sexSelect = this.screenSex[0] || this.screenSex[1];
                var ageSelect = this.screenAge[0] || this.screenAge[1];
                var showSelect = this.screenShow[0] || this.screenShow[1];
                this.haveScreen = starSelect || countrySelect || sexSelect || ageSelect || showSelect;
                for (var i = 0; i < actorList.length; i++) {
                    if (actorList[i].star === 1306 || actorList[i].id > 7000) {
                    }
                    else if (actorList[i].star === 1305) {
                        if (this.haveScreen) {
                            if (this.checkScreen(starSelect, countrySelect, sexSelect, ageSelect, showSelect, actorList[i], 4)) {
                                this.fiveActorData.push(actorList[i]);
                            }
                        }
                        else {
                            this.fiveActorData.push(actorList[i]);
                        }
                    }
                    else if (actorList[i].star === 1304) {
                        if (this.haveScreen) {
                            if (this.checkScreen(starSelect, countrySelect, sexSelect, ageSelect, showSelect, actorList[i], 3)) {
                                this.fourActorData.push(actorList[i]);
                            }
                        }
                        else {
                            this.fourActorData.push(actorList[i]);
                        }
                    }
                    else if (actorList[i].star !== 0) {
                        if (this.haveScreen) {
                            if (!starSelect || (starSelect && (this.screenStar[2] && actorList[i].starNum === 3)
                                || (this.screenStar[1] && actorList[i].starNum === 2)
                                || (this.screenStar[0] && actorList[i].starNum === 1))) {
                                if (this.checkScreen(false, countrySelect, sexSelect, ageSelect, showSelect, actorList[i], 0)) {
                                    this.otherActorData.push(actorList[i]);
                                }
                            }
                        }
                        else {
                            this.otherActorData.push(actorList[i]);
                        }
                    }
                }
                this.sortList();
                var haveActorList = 1;
                if (this.fiveActorData.length > 0) {
                    this.m_artistList.m_five.height = 71;
                    this.m_artistList.m_five.visible = true;
                    if (this.isInit) {
                        this.m_artistList.m_fiveList.numItems = 0;
                    }
                    else {
                        this.m_artistList.m_fiveList.numItems = this.fiveActorData.length;
                    }
                    var ht = this.fiveActorData.length / 3 + (this.fiveActorData.length % 3 > 0 ? 1 : 0);
                    this.m_artistList.m_fiveList.height = ht * (274 + 12) - 12;
                    haveActorList = 0;
                }
                else {
                    this.m_artistList.m_five.height = 0;
                    this.m_artistList.m_five.visible = false;
                    this.m_artistList.m_fiveList.numItems = 0;
                    this.m_artistList.m_fiveList.height = 0;
                }
                if (this.fourActorData.length > 0) {
                    this.m_artistList.m_four.height = 71;
                    this.m_artistList.m_four.visible = true;
                    if (this.isInit) {
                        this.m_artistList.m_fourList.numItems = 0;
                    }
                    else {
                        this.m_artistList.m_fourList.numItems = this.fourActorData.length;
                    }
                    var ht = this.fourActorData.length / 3 + (this.fourActorData.length % 3 > 0 ? 1 : 0);
                    this.m_artistList.m_fourList.height = ht * (274 + 12) - 12;
                    haveActorList = 0;
                }
                else {
                    this.m_artistList.m_four.height = 0;
                    this.m_artistList.m_four.visible = false;
                    this.m_artistList.m_fourList.numItems = 0;
                    this.m_artistList.m_fourList.height = 0;
                }
                if (this.otherActorData.length > 0) {
                    this.m_artistList.m_other.height = 71;
                    this.m_artistList.m_other.visible = true;
                    if (this.isInit) {
                        this.m_artistList.m_otherList.numItems = 0;
                    }
                    else {
                        this.m_artistList.m_otherList.numItems = this.otherActorData.length;
                    }
                    var ht = this.otherActorData.length / 3 + (this.otherActorData.length % 3 > 0 ? 1 : 0);
                    this.m_artistList.m_otherList.height = ht * (274 + 12) - 12;
                    haveActorList = 0;
                }
                else {
                    this.m_artistList.m_other.height = 0;
                    this.m_artistList.m_other.visible = false;
                    this.m_artistList.m_otherList.numItems = 0;
                    this.m_artistList.m_otherList.height = 0;
                }
                if (this.isInit) {
                    this.isInit = false;
                    this.initListNum = setTimeout(function () { _this.delayShowList(1); }, 100);
                    this.initListNum1 = setTimeout(function () { _this.delayShowList(2); }, 200);
                    this.initListNum2 = setTimeout(function () { _this.delayShowList(3); }, 300);
                }
                this.m_artistList.m_c1.setSelectedIndex(haveActorList);
                this.m_artistList.scrollPane.setPercY(0, true);
            };
            ArtistDicUI.prototype.delayShowList = function (index) {
                if (index === 1) {
                    this.m_artistList.m_fiveList.numItems = this.fiveActorData.length;
                }
                else if (index === 2) {
                    this.m_artistList.m_fourList.numItems = this.fourActorData.length;
                }
                else {
                    this.m_artistList.m_otherList.numItems = this.otherActorData.length;
                }
            };
            // 已选择列表赋值
            ArtistDicUI.prototype.setHaveSelectList = function () {
                this.haveSelectTypeList = new Array();
                this.haveSelectTypeDic.clear();
                for (var i = 0; i < 5; i++) {
                    if (this.screenStar[i]) {
                        this.haveSelectTypeDic.add(this.haveSelectTypeList.length, [1, i]);
                        this.haveSelectTypeList.push(i + 1);
                    }
                }
                for (var i = 0; i < 3; i++) {
                    if (this.screenCountry[i]) {
                        this.haveSelectTypeDic.add(this.haveSelectTypeList.length, [2, i]);
                        this.haveSelectTypeList.push(1201 + i);
                    }
                }
                for (var i = 0; i < 2; i++) {
                    if (this.screenSex[i]) {
                        this.haveSelectTypeDic.add(this.haveSelectTypeList.length, [3, i]);
                        this.haveSelectTypeList.push(1101 + i);
                    }
                }
                for (var i = 0; i < 2; i++) {
                    if (this.screenAge[i]) {
                        this.haveSelectTypeDic.add(this.haveSelectTypeList.length, [4, i]);
                        this.haveSelectTypeList.push(1501 + i);
                    }
                }
                for (var i = 0; i < 2; i++) {
                    if (this.screenShow[i]) {
                        this.haveSelectTypeDic.add(this.haveSelectTypeList.length, [5, i]);
                        this.haveSelectTypeList.push(1401 + i);
                    }
                }
                this.m_screenList.numItems = this.haveSelectTypeList.length;
            };
            // 判断是否符合搜索条件
            ArtistDicUI.prototype.checkScreen = function (starSelect, countrySelect, sexSelect, ageSelect, showSelect, data, star) {
                // 星级
                if (!starSelect || (starSelect && this.screenStar[star])) {
                    // 国籍
                    if (!countrySelect || (countrySelect &&
                        ((data.country === 1201 && this.screenCountry[0])
                            || (data.country === 1202 && this.screenCountry[1])
                            || (data.country === 1203 && this.screenCountry[2])))) {
                        // 性别
                        if (!sexSelect
                            || (sexSelect
                                && ((this.screenSex[0] && data.sex === 1101)
                                    || (this.screenSex[1] && data.sex === 1102)))) {
                            // 年龄
                            if (!ageSelect || (ageSelect
                                && ((this.screenAge[0] && data.age_type === 1501)
                                    || (this.screenAge[1] && data.age_type === 1502)))) {
                                // 表演
                                if (!showSelect || (showSelect
                                    && ((this.screenShow[0] && data.show_type === 1401)
                                        || (this.screenShow[1] && data.show_type === 1402)))) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
            // 排序
            ArtistDicUI.prototype.sortList = function () {
                this.fiveActorData = this.fiveActorData.sort(function (valA, valB) {
                    var haveA = Game.moduleModel.actor.hasActor(valA.id);
                    var haveB = Game.moduleModel.actor.hasActor(valB.id);
                    if (haveA && !haveB) {
                        return -1;
                    }
                    else if (haveB && !haveA) {
                        return 1;
                    }
                    else if ((haveA && haveA) || (!haveA && !haveA)) {
                        return valA.id - valB.id;
                    }
                });
                this.fourActorData = this.fourActorData.sort(function (valA, valB) {
                    var haveA = Game.moduleModel.actor.hasActor(valA.id);
                    var haveB = Game.moduleModel.actor.hasActor(valB.id);
                    if (haveA && !haveB) {
                        return -1;
                    }
                    else if (haveB && !haveA) {
                        return 1;
                    }
                    else if ((haveA && haveA) || (!haveA && !haveA)) {
                        return valA.id - valB.id;
                    }
                });
                this.otherActorData = this.otherActorData.sort(function (valA, valB) {
                    var haveA = Game.moduleModel.actor.hasActor(valA.id);
                    var haveB = Game.moduleModel.actor.hasActor(valB.id);
                    if (haveA && !haveB) {
                        return -1;
                    }
                    else if (haveB && !haveA) {
                        return 1;
                    }
                    else if ((haveA && haveA) || (!haveA && !haveA)) {
                        if (valA.star === valB.star) {
                            return valA.id - valB.id;
                        }
                        else {
                            return valB.star - valA.star;
                        }
                    }
                });
            };
            //已选择类型item赋值
            ArtistDicUI.prototype.initScreenListItem = function (index, obj) {
                var item = obj;
                item.setData(this.haveSelectTypeList[index]);
            };
            //五星艺人item赋值
            ArtistDicUI.prototype.fiveItem = function (index, obj) {
                var item = obj;
                item.setData(this.fiveActorData[index]);
            };
            //四星艺人item赋值
            ArtistDicUI.prototype.fourItem = function (index, obj) {
                var item = obj;
                item.setData(this.fourActorData[index]);
            };
            //其他星艺人item赋值
            ArtistDicUI.prototype.otherItem = function (index, obj) {
                var item = obj;
                item.setData(this.otherActorData[index]);
            };
            //item赋值
            ArtistDicUI.prototype.typeItem1 = function (index, obj) {
                obj.selected = this.screenStar[index];
            };
            //item赋值
            ArtistDicUI.prototype.typeItem2 = function (index, obj) {
                var item = obj;
                item.setData(1201 + index);
                obj.selected = this.screenCountry[index];
            };
            //item赋值
            ArtistDicUI.prototype.typeItem3 = function (index, obj) {
                var item = obj;
                item.setData(1101 + index);
                obj.selected = this.screenSex[index];
            };
            //item赋值
            ArtistDicUI.prototype.typeItem4 = function (index, obj) {
                var item = obj;
                item.setData(1501 + index);
                obj.selected = this.screenAge[index];
            };
            //item赋值
            ArtistDicUI.prototype.typeItem5 = function (index, obj) {
                var item = obj;
                item.setData(1401 + index);
                obj.selected = this.screenShow[index];
            };
            // 星级
            ArtistDicUI.prototype.OnSelectType1 = function (obj) {
                var index = this.m_typeList1.getChildIndex(obj);
                var status = obj.selected;
                this.screenStar[index] = status;
                this.showSearchResult();
            };
            // 国籍
            ArtistDicUI.prototype.OnSelectType2 = function (obj) {
                var index = this.m_typeList2.getChildIndex(obj);
                var status = obj.selected;
                this.screenCountry[index] = status;
                this.showSearchResult();
            };
            // 性别
            ArtistDicUI.prototype.OnSelectType3 = function (obj) {
                var index = this.m_typeList3.getChildIndex(obj);
                var status = obj.selected;
                this.screenSex[index] = status;
                this.showSearchResult();
            };
            // 年龄
            ArtistDicUI.prototype.OnSelectType4 = function (obj) {
                var index = this.m_typeList4.getChildIndex(obj);
                var status = obj.selected;
                this.screenAge[index] = status;
                this.showSearchResult();
            };
            // 表演
            ArtistDicUI.prototype.OnSelectType5 = function (obj) {
                var index = this.m_typeList5.getChildIndex(obj);
                var status = obj.selected;
                this.screenShow[index] = status;
                this.showSearchResult();
            };
            // 下方列表选择
            ArtistDicUI.prototype.OnSelectTypeList = function (obj) {
                var index = this.m_screenList.getChildIndex(obj);
                var DicVal = this.haveSelectTypeDic.getValue(index);
                switch (DicVal[0]) {
                    case 1:
                        {
                            this.screenStar[DicVal[1]] = false;
                        }
                        break;
                    case 2:
                        {
                            this.screenCountry[DicVal[1]] = false;
                        }
                        break;
                    case 3:
                        {
                            this.screenSex[DicVal[1]] = false;
                        }
                        break;
                    case 4:
                        {
                            this.screenAge[DicVal[1]] = false;
                        }
                        break;
                    case 5:
                        {
                            this.screenShow[DicVal[1]] = false;
                        }
                        break;
                }
                this.showSearchResult();
            };
            // 点击5星艺人
            ArtistDicUI.prototype.OnClickFive = function (obj) {
                var index = this.m_artistList.m_fiveList.getChildIndex(obj);
                this.m_shwoDetail.setData(this.fiveActorData[index]);
                this.m_showDetails.setSelectedIndex(1);
                this.scrollPanelPosy = this.m_artistList.scrollPane.percY;
            };
            // 点击4星艺人
            ArtistDicUI.prototype.OnClickFour = function (obj) {
                var index = this.m_artistList.m_fourList.getChildIndex(obj);
                this.m_shwoDetail.setData(this.fourActorData[index]);
                this.m_showDetails.setSelectedIndex(1);
                this.scrollPanelPosy = this.m_artistList.scrollPane.percY;
            };
            // 点击其他星艺人
            ArtistDicUI.prototype.OnClickOther = function (obj) {
                var index = this.m_artistList.m_otherList.getChildIndex(obj);
                this.m_shwoDetail.setData(this.otherActorData[index]);
                this.m_showDetails.setSelectedIndex(1);
                this.scrollPanelPosy = this.m_artistList.scrollPane.percY;
            };
            return ArtistDicUI;
        }(ArtistDic.ArtistDicUIStruct));
        ArtistDic.ArtistDicUI = ArtistDicUI;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDicUI.js.map