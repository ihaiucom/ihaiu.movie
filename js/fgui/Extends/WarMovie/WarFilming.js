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
        var ShootingStage;
        (function (ShootingStage) {
            // 开始
            ShootingStage[ShootingStage["Start"] = 1] = "Start";
            // 选择类型
            ShootingStage[ShootingStage["SelectType"] = 2] = "SelectType";
            ShootingStage[ShootingStage["SelectTypeWait"] = 3] = "SelectTypeWait";
            // 选择通告
            ShootingStage[ShootingStage["SelectNotice"] = 4] = "SelectNotice";
            ShootingStage[ShootingStage["SelectNoticeWait"] = 5] = "SelectNoticeWait";
            // 杀青
            ShootingStage[ShootingStage["Fixing"] = 6] = "Fixing";
            ShootingStage[ShootingStage["FixingWait"] = 7] = "FixingWait";
        })(ShootingStage = WarMovie.ShootingStage || (WarMovie.ShootingStage = {}));
        var WarFilming = /** @class */ (function (_super) {
            __extends(WarFilming, _super);
            function WarFilming() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                // 当前界面是否开启中
                _this.curWinStateShow = false;
                // 属性飞行时间参数
                _this.flyToScallBig = 500;
                _this.flyToScallSmall = 300;
                _this.flyToScallSmallDelay = 200;
                _this.flyToHead = 500;
                _this.flyHeadDelay = 600;
                _this.flyToEndFromHead = 800;
                _this.flyBigScall = 1.2;
                //显示隐藏房间		
                _this.buildIndex = -1;
                _this.isRoomAddToUI = false;
                // 是否关闭filming窗口了
                _this.isOnWindowHide = true;
                // 是否开始拍摄
                _this.onFilming = false;
                // 不存在通告的延后时间序号
                _this.noticeTipNum = -1;
                _this.noticeShowTipNum = -1;
                // 金本增加属性列表
                _this.goldCurIndex = 0;
                _this.oldExpected = 0;
                _this.property1 = 0;
                _this.property2 = 0;
                _this.attupTweenList = new Array();
                _this.attIconList = new Array();
                _this.rewardTipOk = false;
                _this.isOverToSQ = false;
                _this.curNoticeIndex = 0;
                _this.noticeDelayTime = 1000;
                return _this;
            }
            WarFilming.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.State = ShootingStage.Start;
                var globalconfig = Game.config.global.getConfig(GlobalKey.Movie_Shoot_Time);
                this.selectType = 25;
                this.selectNotice = 65;
                this.m_filmProgress.valu = 0;
                this.m_goldProgress.max = 100;
                this.m_expectingIcon.icon = Games.WarLoadPic.getItemIcon(EItemId.expect);
                this.m_filmTypeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
                // 参演艺人列表初始化
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.initYRListItem, null, false);
                // 选择类型列表初始化
                this.m_xuanzeList.itemRenderer = Laya.Handler.create(this, this.initXZListItem, null, false);
                // 关闭
                this.m_closeBtn.onClick(this, this.onClickClose);
                this.isOnWindowHide = true;
            };
            WarFilming.prototype.showBuildRoom = function () {
                if (!this.isRoomAddToUI) {
                    if (!this.buildRoom) {
                        this.buildRoom = Games.AvatarManager.context.getRoomByType(Games.RoomType.Shoot);
                    }
                    if (this.buildRoom != null) {
                        this.buildRoom.onRoomInScreen();
                        this.buildRoom.setRoomFrameVisible(false);
                        this.buildRoom.setXY(-20, -15);
                        this.buildRoom.setScale(1.05, 1.05);
                        this.buildIndex = Games.AvatarManager.context.getRoomIndexByType(Games.RoomType.Shoot);
                        this.m_roomContainer.addChild(this.buildRoom.mainView);
                        this.isRoomAddToUI = true;
                        //center
                        // let centerX = (this.m_roomContainer.width - this.buildRoom.width) * 0.5;
                        // this.buildRoom.setXY(centerX - 20, -15);
                        //scaleX
                        var scale = ScreenSetting.screenWidth / this.buildRoom.mainView.sourceWidth;
                        this.buildRoom.setScale(scale * 1.05, 1.05);
                    }
                }
            };
            WarFilming.prototype.hideBuildRoom = function () {
                if (this.buildRoom) {
                    this.buildRoom.setXY(0, 0);
                    this.buildRoom.setScale(1, 1);
                    this.buildRoom.setRoomFrameVisible(true);
                    Games.AvatarManager.context.addRoomAt(this.buildRoom, this.buildIndex);
                    this.isRoomAddToUI = false;
                }
            };
            // 关闭按钮
            WarFilming.prototype.onClickClose = function () {
                this.curWinStateShow = false;
                Game.moduleModel.warData.pauseWarFilmingProgress(true);
                Laya.timer.clearAll(this);
                laya.utils.Tween.clearAll(this.m_filmProgress);
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarFilming.prototype.onWindowShow = function () {
                this.curWinStateShow = true;
                this.attupTweenList = new Array();
                //显示UI中建造房间
                this.showBuildRoom();
                if (this.isOnWindowHide) {
                    Game.sound.playSound(SoundKey.MM40_FilmScreen);
                    if (Game.moduleModel.story.getStoryData(Game.moduleModel.warData.moveData.movieId).isGold) {
                        this.m_gold.setSelectedIndex(1);
                    }
                    else {
                        this.m_gold.setSelectedIndex(0);
                    }
                    if (!this.onFilming) {
                        Game.event.dispatch(GameEventKey.GameEventKey_ShootStart, this.onFilming);
                        this.onFilming = true;
                    }
                    else {
                        Game.event.dispatch(GameEventKey.GameEventKey_ShootStart, this.onFilming);
                    }
                    Game.event.dispatch(GameEventKey.GameEventKey_ScrollMainRoom, Games.RoomType.Shoot);
                }
                if (this.State !== ShootingStage.Start) {
                    this.subCallBack();
                }
                else {
                    this.m_goldProgress.value = 0;
                    this.setData();
                }
                if (this.isOnWindowHide) {
                    Laya.timer.loop(10, this, this.updateFilmingProgress);
                    if (Game.moduleModel.story.getStoryData(Game.moduleModel.warData.moveData.movieId).isGold) {
                        Laya.timer.loop(10, this, this.updateTime);
                    }
                    Game.event.add(GameEventKey.GameEventKey_MakeFilmGetStoryGoals, this.showStoryGoalsTip, this);
                }
                this.isOnWindowHide = false;
            };
            WarFilming.prototype.updateTime = function () {
                var val = this.m_filmProgress.value * 3.3;
                if (this.goldCurIndex !== this.parseIntComple(val) && Game.moduleModel.warData.moveData.battleDataEx && Game.moduleModel.warData.moveData.battleDataEx.length > 0) {
                    this.goldCurIndex = this.parseIntComple(val);
                    var increase = this.eachTimeAdd(this.goldCurIndex);
                    if (increase >= 0 && increase + 1 < Game.moduleModel.warData.moveData.battleDataEx.length) {
                        var item1 = Game.moduleModel.warData.moveData.battleDataEx[increase];
                        var item2 = Game.moduleModel.warData.moveData.battleDataEx[increase + 1];
                        if (item1.actorId === item2.actorId) {
                            this.m_goldEffect.setData(item1, item2);
                        }
                        for (var i = 0; i < 5; i++) {
                            if (item1.propertyId === this.attList[i]) {
                                this.flyAttribute(i, item1);
                            }
                            if (item2.propertyId === this.attList[i]) {
                                this.flyAttribute(i, item2);
                            }
                        }
                    }
                }
                if (val >= 300) {
                    val = 100;
                }
                else if (val >= 200) {
                    val -= 200;
                }
                else if (val >= 100) {
                    val -= 100;
                }
                this.m_gold.setSelectedIndex(1);
                this.m_goldProgress.value = val;
            };
            WarFilming.prototype.eachTimeAdd = function (curNum) {
                if (Game.moduleModel.warData.moveData.battleDataEx.length >= 6) {
                    switch (curNum) {
                        case 1:
                            return 0;
                        case 2:
                            return 2;
                        case 3:
                            return 4;
                        default:
                            return curNum - 1;
                    }
                }
                return curNum - 1;
            };
            WarFilming.prototype.parseIntComple = function (innt) {
                if (innt > 299) {
                    return 3;
                }
                else if (innt > 199) {
                    return 2;
                }
                else if (innt > 99) {
                    return 1;
                }
                return 0;
            };
            WarFilming.prototype.onWindowHide = function () {
                this.isOnWindowHide = true;
                this.curWinStateShow = false;
                if (this.mindDialog && this.mindDialog !== null) {
                    this.mindDialog.close();
                }
                //隐藏UI中建造房间
                this.hideBuildRoom();
                if (this.noticeTipNum > -1) {
                    clearTimeout(this.noticeTipNum);
                    this.noticeTipNum = -1;
                }
                if (this.noticeShowTipNum > -1) {
                    clearTimeout(this.noticeShowTipNum);
                    this.noticeShowTipNum = -1;
                }
                if (this.mindDialog && this.mindDialog !== null) {
                    this.mindDialog.close();
                }
                Laya.timer.clearAll(this);
                if (this.attupTweenList.length > 0) {
                    for (var i = 0; i < this.attupTweenList.length; i++) {
                        this.attupTweenList[i].clear();
                    }
                    this.attupTweenList = new Array();
                }
                if (this.attIconList.length > 0) {
                    for (var i = 0; i < this.attIconList.length; i++) {
                        if (this.attIconList[i] && this.attIconList[i].visible) {
                            this.attIconList[i].visible = false;
                        }
                    }
                    this.attIconList = new Array();
                }
                Laya.timer.clear(this, this.updateFilmingProgress);
                Laya.timer.clear(this, this.updateTime);
                Game.event.remove(GameEventKey.GameEventKey_MakeFilmGetStoryGoals, this.showStoryGoalsTip, this);
            };
            // 更新进度条
            WarFilming.prototype.updateFilmingProgress = function () {
                switch (this.State) {
                    case ShootingStage.SelectType:
                        {
                            if (Game.moduleModel.warData.warFilmingTSprogerss.value >= this.selectType) {
                                this.State = ShootingStage.SelectTypeWait;
                                Game.moduleModel.warData.pauseWarFilmingProgress(true);
                                Game.moduleModel.warData.warFilmingTSprogerss.value = this.selectType;
                                this.compleProgress();
                            }
                        }
                        break;
                    case ShootingStage.SelectNotice:
                        {
                            if (Game.moduleModel.warData.warFilmingTSprogerss.value >= this.selectNotice) {
                                this.State = ShootingStage.SelectNoticeWait;
                                Game.moduleModel.warData.pauseWarFilmingProgress(true);
                                Game.moduleModel.warData.warFilmingTSprogerss.value = this.selectNotice;
                                this.compleProgress();
                            }
                        }
                        break;
                    case ShootingStage.Fixing:
                        {
                            if (Game.moduleModel.warData.warFilmingTSprogerss.value >= 100) {
                                this.State = ShootingStage.FixingWait;
                                Game.moduleModel.warData.clearWarFilmingProgress();
                                Game.moduleModel.warData.warFilmingTSprogerss.value = 100;
                                this.compleProgress();
                            }
                        }
                        break;
                }
                this.m_filmProgress.valu = Game.moduleModel.warData.warFilmingTSprogerss.value;
            };
            WarFilming.prototype.setData = function () {
                if (this.m_notice) {
                    this.m_notice.setScale(0, 0);
                }
                // 服务器数据
                var data = Game.moduleModel.warData.moveData;
                // 剧本数据（配置表）
                this.confData = Game.moduleModel.warData.moveStory;
                this.moduleMain = this.moduleWindow.mainWindow;
                this.updateIndex = 0;
                this.UpdateAttributeList = data.battleData;
                this.starUpdate = false;
                this.oldExpected = User.info.expected;
                this.m_expectingVal.text = formatNumberUnit(User.info.expected);
                this.m_psAim.visible = this.confData.target_mark;
                this.m_goldProgress.value = 0;
                this.sortAttribute();
                this.InitAttNum();
                this.attText = [this.m_att1, this.m_att2, this.m_att3, this.m_att4, this.m_att5];
                for (var i = 0; i < 5; i++) {
                    if (i === 0 && this.property1 > 0) {
                        this.attText[i].text = this.attNum[i] + "/" + this.property1;
                    }
                    else if (i === 1 && this.property2 > 0) {
                        this.attText[i].text = this.attNum[i] + "/" + this.property2;
                    }
                    else {
                        this.attText[i].text = this.attNum[i].toString();
                    }
                }
                Games.WarLoadPic.setIcon(this.m_attIcon1, this.attList[0]);
                Games.WarLoadPic.setIcon(this.m_attIcon2, this.attList[1]);
                Games.WarLoadPic.setIcon(this.m_attIcon3, this.attList[2]);
                Games.WarLoadPic.setIcon(this.m_attIcon4, this.attList[3]);
                Games.WarLoadPic.setIcon(this.m_attIcon5, this.attList[4]);
                this.m_xuanzeList.numItems = 0;
                this.m_filmName.text = data.name;
                this.m_filmTime.text = format(TEXT.FilmLongTime, this.confData.length);
                this.m_filmDes.setData(this.confData.filmDes);
                this.m_filmTypeList.numItems = this.confData.filmTags.length + 1;
                this.m_filmIcon.setData(this.confData);
                // 美元
                this.m_sliver.setData(EItemId.dollar, formatNumberUnit(Game.moduleModel.item.getItemNum(EItemId.dollar)));
                // 电影票
                this.m_xukezheng.setData(EItemId.licence, Game.moduleModel.warData.licenceNumInFilming.toString());
                switch (Game.moduleModel.warData.getRealYRList.count) {
                    case 1:
                        {
                            this.m_yrList.columnGap = 0;
                        }
                        break;
                    case 2:
                        {
                            this.m_yrList.columnGap = 100;
                        }
                        break;
                    case 3:
                        {
                            this.m_yrList.columnGap = 50;
                        }
                        break;
                    case 4:
                        {
                            this.m_yrList.columnGap = 8;
                        }
                        break;
                    case 5:
                        {
                            this.m_yrList.columnGap = -26;
                        }
                        break;
                }
                this.m_yrList.numItems = Game.moduleModel.warData.getRealYRList.count;
                this.haveFailShow = false;
                this.haveWinShow = false;
                if (Game.moduleModel.warData.moveData.type > 0) {
                    // 已选择过类型，进入其他判断
                    if (Game.moduleModel.warData.warFilmingTSprogerss && Game.moduleModel.warData.warFilmingTSprogerss !== null) {
                        this.m_filmProgress.valu = Game.moduleModel.warData.warFilmingTSprogerss.value;
                    }
                    else {
                        this.m_filmProgress.valu = this.selectType;
                    }
                    if (Game.moduleModel.warData.moveData.mediaVisit.length > 0) {
                        if (Game.moduleModel.warData.moveData.state == EMovieState.propaganda) {
                            this.State = ShootingStage.SelectNotice;
                            Game.moduleModel.warData.startWarFilming(this.selectType);
                            this.currentCaozuoTip(this.selectNotice, Game.config.msg.getConfig(MsgKey.movie_state_tips2).notice);
                        }
                        else {
                            this.State = ShootingStage.Fixing;
                            Game.moduleModel.warData.startWarFilming(this.selectNotice);
                            this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                        }
                    }
                    else {
                        this.State = ShootingStage.Fixing;
                        Game.moduleModel.warData.startWarFilming(this.selectNotice);
                        this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                    }
                }
                else {
                    // 选择类型
                    // 时间差
                    var subTimePre = Game.time.getSubSecondsPre(Game.moduleModel.warData.moveData.startTime);
                    if (subTimePre < 0)
                        subTimePre = 0;
                    // 剩余时间
                    var lastTime = this.selectType - subTimePre;
                    if (lastTime <= 0) {
                        this.m_filmProgress.valu = this.selectType;
                    }
                    else {
                        this.m_filmProgress.valu = subTimePre;
                    }
                    this.State = ShootingStage.SelectType;
                    Game.moduleModel.warData.startWarFilming(subTimePre);
                    this.currentCaozuoTip(this.selectType, Game.config.msg.getConfig(MsgKey.movie_state_tips1).notice);
                }
                this.rewardTipOk = false;
                Laya.timer.clear(this, this.updateAttribute);
                var delayTime = this.selectType * Game.moduleModel.warData.filmingSpeed / this.UpdateAttributeList.length * 0.9;
                Laya.timer.loop(delayTime, this, this.updateAttribute);
            };
            // 剧本元素item赋值
            WarFilming.prototype.initTagsItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    item.m_title.text = this.confData.filmType;
                    item.m_typeLabel.setSelectedIndex(1);
                }
                else {
                    item.m_title.text = this.confData.filmTags[index - 1];
                    item.m_typeLabel.setSelectedIndex(0);
                }
            };
            // 拍摄进度条变化赋值
            WarFilming.prototype.currentCaozuoTip = function (pross, str) {
                this.m_caozuo.x = -130 + (646 * pross * 0.01) + this.m_filmProgress.x - 38;
                this.m_caozuo.m_title.text = str;
                this.starUpdate = true;
                if (Game.moduleModel.warData.warFilmingTSPause) {
                    Game.moduleModel.warData.pauseWarFilmingProgress(false);
                }
            };
            // 当前进度结束
            WarFilming.prototype.compleProgress = function () {
                this.starUpdate = false;
                switch (this.State) {
                    case ShootingStage.SelectTypeWait:
                        {
                            // this.moduleWindow.closeSelf();
                            this.moduleMain.conent.startShowWaiting();
                            this.curWinStateShow = false;
                            Game.moduleModel.warData.sendUpdateMovieState();
                        }
                        break;
                    case ShootingStage.SelectNoticeWait:
                        {
                            this.curWinStateShow = false;
                            if (Game.moduleModel.warData.moveData.state == EMovieState.propaganda) {
                                this.moduleWindow.closeSelf();
                                // 服务器进入通告状态 切换为选择通告界面
                                this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.SelectNotice, true);
                            }
                            else {
                                this.moduleMain.conent.startShowWaiting();
                                Game.moduleModel.warData.sendUpdateMovieState();
                            }
                        }
                        break;
                    case ShootingStage.FixingWait:
                        {
                            this.starUpdate = false;
                            this.showTargetFail();
                        }
                        break;
                }
            };
            //排序属性		
            WarFilming.prototype.sortAttribute = function () {
                var propertyConfig = Game.config.property.getPropertyList();
                this.attList = propertyConfig;
                this.property1 = 0;
                this.property2 = 0;
                if (this.confData.target_mark) {
                    var storyGoal = Game.config.storyGoals.getGoalTarget(this.confData.id, User.info.stall);
                    this.property1 = storyGoal.value1;
                    this.property2 = storyGoal.value2;
                    this.propertyReward = storyGoal.reward;
                    for (var i = 0; i < propertyConfig.length; i++) {
                        if (i !== 0 && propertyConfig[i] === storyGoal.property1) {
                            var tem = propertyConfig[0];
                            this.attList[0] = propertyConfig[i];
                            this.attList[i] = tem;
                        }
                        else if (i !== 1 && propertyConfig[i] === storyGoal.property2) {
                            var tem = propertyConfig[1];
                            this.attList[1] = propertyConfig[i];
                            this.attList[i] = tem;
                        }
                    }
                }
            };
            // 初始化当前属性值
            WarFilming.prototype.InitAttNum = function () {
                this.attNum = [0, 0, 0, 0, 0];
                this.goldCurIndex = 0;
                // 取值 转换为当前顺序
                for (var j = 0; j < 5; j++) {
                    this.attNum[j] = Game.moduleModel.warData.moveData.attribute[this.attList[j] - 1601];
                }
                for (var i = 0; i < this.UpdateAttributeList.length; i++) {
                    var item = this.UpdateAttributeList[i];
                    for (var j = 0; j < 5; j++) {
                        if (item.propertyId === this.attList[j]) {
                            this.attNum[j] -= item.value;
                            break;
                        }
                    }
                }
            };
            WarFilming.prototype.updateAttribute = function () {
                if (this.starUpdate) {
                    if (this.UpdateAttributeList && this.UpdateAttributeList.length > this.updateIndex) {
                        var curAtt = this.UpdateAttributeList[this.updateIndex];
                        for (var i = 0; i < 5; i++) {
                            if (curAtt.propertyId === this.attList[i]) {
                                this.flyAttribute(i, curAtt);
                                this.updateIndex++;
                                break;
                            }
                        }
                    }
                }
            };
            WarFilming.prototype.getIcon = function (url) {
                if (this.attIconList.length > 0) {
                    for (var i = 0; i < this.attIconList.length; i++) {
                        var element = this.attIconList[i];
                        if (!element.visible) {
                            element.visible = true;
                            var result = element;
                            result.icon = url;
                            return result;
                        }
                    }
                }
                var attIcon = fgui.Common.AttrUpView.createInstance();
                attIcon.icon = url;
                this.addChildAt(attIcon, this.numChildren - 2);
                this.attIconList.push(attIcon);
                return attIcon;
            };
            // 飞属性
            WarFilming.prototype.flyAttribute = function (i, curAtt) {
                var _this = this;
                var iconConfig = Game.config.property.getConfig(curAtt.propertyId);
                var url = Game.config.avatar.getConfig(iconConfig.icon).iconUrl;
                var attIcon = this.getIcon(url);
                var pos = this.attText[i].y - 10;
                var posx = this.attText[i].x - 50;
                attIcon.text = format("+{0}", curAtt.value);
                attIcon.m_titleColor.setSelectedIndex(1);
                var indexOf = this.m_yrList.itemIndexToChildIndex(this.getYRIndexOf(curAtt.actorId));
                var gObj = this.m_yrList.getChildAt(indexOf);
                attIcon.setXY(gObj.localToGlobal().x + 20, gObj.localToGlobal().y - 50);
                attIcon.setScale(1, 1);
                Game.sound.playSound(SoundKey.MM20_ArtistData);
                var yrObj = gObj;
                if (!yrObj.m_t0.playing) {
                    yrObj.m_t0.play(null, 1);
                }
                var pos0 = attIcon.y - 70;
                var posx0 = attIcon.x + Random.rangeBoth(-3, 3) * 10;
                var tw1 = laya.utils.Tween.to(attIcon, { scaleX: this.flyBigScall, scaleY: this.flyBigScall }, this.flyToScallBig);
                this.attupTweenList.push(tw1);
                var tw2 = laya.utils.Tween.to(attIcon, { scaleX: 1, scaleY: 1 }, this.flyToScallSmall, Laya.Ease.quadInOut, null, this.flyToScallSmallDelay);
                this.attupTweenList.push(tw2);
                var tw3 = laya.utils.Tween.to(attIcon, { y: pos0, x: posx0 }, this.flyToHead, Laya.Ease.quadInOut, Handler.create(this, function () {
                    var tw4 = laya.utils.Tween.to(attIcon, { y: pos, x: posx }, _this.flyToEndFromHead, Laya.Ease.quadInOut, Handler.create(_this, function () {
                        _this.attNum[i] += curAtt.value;
                        if (i === 0 && _this.property1 > 0) {
                            _this.attText[i].text = _this.attNum[i].toFixed(0) + "/" + _this.property1;
                        }
                        else if (i === 1 && _this.property2 > 0) {
                            _this.attText[i].text = _this.attNum[i].toFixed(0) + "/" + _this.property2;
                        }
                        else {
                            _this.attText[i].text = _this.attNum[i].toFixed(0);
                        }
                        if (_this.property1 > 0 && _this.property2 > 0 && !_this.rewardTipOk && _this.property1 <= _this.attNum[0] && _this.property2 <= _this.attNum[1]) {
                            _this.rewardTipOk = true;
                            if (!Game.moduleModel.warData.moveData.isGetStoryGoals) {
                                _this.isOverToSQ = false;
                                // 目标完成
                                Game.moduleModel.warData.reqGetStoryGoals();
                            }
                        }
                        attIcon.visible = false;
                    }), _this.flyHeadDelay);
                    _this.attupTweenList.push(tw4);
                }));
                this.attupTweenList.push(tw3);
            };
            // 显示剧本目标奖励
            WarFilming.prototype.showStoryGoalsTip = function (calFun) {
                var _this = this;
                if (calFun === void 0) { calFun = null; }
                if (!this.haveFailShow && !this.haveWinShow && this.propertyReward && this.propertyReward !== null) {
                    Game.sound.playSound(SoundKey.MM03_ReachGoal);
                    if (!this.rewardTip || this.rewardTip === null) {
                        this.rewardTip = fgui.WarMovie.WarTargetSucces.createInstance();
                        this.addChild(this.rewardTip);
                        this.rewardTip.setSize(Games.MenuLayer.root.width, Games.MenuLayer.root.height);
                    }
                    this.starUpdate = false;
                    this.rewardTip.setData(this.propertyReward, function () {
                        if (_this.isOverToSQ) {
                            _this.goToSQ();
                        }
                        else {
                            _this.starUpdate = true;
                        }
                    });
                    this.haveWinShow = true;
                }
            };
            WarFilming.prototype.targetResult = function () {
                var result = [0, 0, 0];
                if (this.confData.target_mark) {
                    var serverAttribute = Game.moduleModel.warData.moveData.attribute;
                    var storyGoal = Game.config.storyGoals.getGoalTarget(this.confData.id, User.info.stall);
                    this.propertyReward = storyGoal.reward;
                    for (var i = 0; i < serverAttribute.length; i++) {
                        if (i + 1601 === storyGoal.property1) {
                            result[0] = serverAttribute[i];
                            if (serverAttribute[i] >= storyGoal.value1) {
                                // 目标一完成
                                result[2]++;
                            }
                        }
                        else if (i + 1601 === storyGoal.property2) {
                            result[1] = serverAttribute[i];
                            if (serverAttribute[i] >= storyGoal.value2) {
                                // 目标二完成
                                result[2]++;
                            }
                        }
                    }
                }
                return result;
            };
            // 失败提示
            WarFilming.prototype.showTargetFail = function () {
                var _this = this;
                if (this.attupTweenList.length > 0) {
                    for (var i = 0; i < this.attupTweenList.length; i++) {
                        this.attupTweenList[i].clear();
                    }
                    this.attupTweenList = new Array();
                }
                if (this.attIconList.length > 0) {
                    for (var i = 0; i < this.attIconList.length; i++) {
                        if (this.attIconList[i] && this.attIconList[i].visible) {
                            this.attIconList[i].visible = false;
                        }
                    }
                    this.attIconList = new Array();
                }
                this.starUpdate = false;
                this.m_filmProgress.valu = 100;
                if (this.confData.target_mark) {
                    var tarRes = this.targetResult();
                    if (tarRes[2] === 2) {
                        if (!Game.moduleModel.warData.moveData.isGetStoryGoals) {
                            this.isOverToSQ = true;
                            // 目标完成
                            Game.moduleModel.warData.reqGetStoryGoals();
                        }
                        else {
                            this.goToSQ();
                        }
                    }
                    else {
                        if (!this.haveFailShow && !this.haveWinShow) {
                            Game.sound.playSound(SoundKey.MM04_Lose);
                            if (!this.targetFailTip || this.targetFailTip === null) {
                                this.targetFailTip = fgui.WarMovie.WarTargetFailed.createInstance();
                                this.addChild(this.targetFailTip);
                                this.targetFailTip.setSize(Games.MenuLayer.root.width, Games.MenuLayer.root.height);
                            }
                            this.targetFailTip.setData(this.attList, this.attNum, [this.property1, this.property2], function () { _this.goToSQ(); });
                            this.haveFailShow = true;
                        }
                        else {
                            this.goToSQ();
                        }
                    }
                }
                else {
                    this.goToSQ();
                }
            };
            WarFilming.prototype.goToSQ = function () {
                this.goldCurIndex = 0;
                this.State = ShootingStage.Start;
                this.moduleWindow.closeSelf();
                this.curWinStateShow = false;
                this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.FilmSQ, true);
            };
            WarFilming.prototype.getYRIndexOf = function (yrId) {
                var result = 0;
                var keys = Game.moduleModel.warData.getRealYRList.getKeys();
                for (var i = 0; i < keys.length; i++) {
                    if (Game.moduleModel.warData.getRealYRList.getValue(keys[i]).id == yrId) {
                        result = i;
                        break;
                    }
                }
                return result;
            };
            WarFilming.prototype.typeContinueGoNext = function () {
                var _this = this;
                this.m_filmProgress.valu = this.selectType;
                this.xuanzeList();
                this.UpdateAttributeList = Game.moduleModel.warData.moveData.battleData;
                this.updateIndex = 0;
                Game.moduleModel.warData.startWarFilming(this.selectType);
                if (Game.moduleModel.warData.moveData.mediaVisit.length > 0) {
                    this.State = ShootingStage.SelectNotice;
                    this.currentCaozuoTip(this.selectNotice, Game.config.msg.getConfig(MsgKey.movie_state_tips2).notice);
                }
                else {
                    if (this.noticeTipNum === -1) {
                        this.noticeTipNum = setTimeout(function () { _this.noticeCantTip(); }, 3000);
                    }
                    this.State = ShootingStage.Fixing;
                    this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                }
                Laya.timer.clear(this, this.updateAttribute);
                var delayTime = (100 - this.selectType) * Game.moduleModel.warData.filmingSpeed / this.UpdateAttributeList.length;
                Laya.timer.loop(delayTime, this, this.updateAttribute);
            };
            // 其他界面返回结果
            WarFilming.prototype.subCallBack = function () {
                var _this = this;
                switch (this.State) {
                    case ShootingStage.SelectTypeWait:
                        {
                            if (Game.moduleModel.warData.moveData.type > 0) {
                                if (!this.warTip || this.warTip === null) {
                                    this.warTip = fgui.WarMovie.WarTip.createInstance();
                                    this.addChild(this.warTip);
                                    this.warTip.setSize(Games.MenuLayer.root.width, Games.MenuLayer.root.height);
                                }
                                var tipstr_1 = Game.config.movieAdaptationMsg.getStoryShootTypeTip(Game.moduleModel.warData.storyShootType);
                                if (Game.moduleModel.warData.moveData.isTired) {
                                    this.warTip.setData(Game.config.msg.getConfig(MsgKey.movie_too_much).notice, function () {
                                        _this.warTip.setData(tipstr_1, function () { _this.typeContinueGoNext(); });
                                    });
                                }
                                else {
                                    // 类型提示
                                    this.warTip.setData(tipstr_1, function () { _this.typeContinueGoNext(); });
                                }
                            }
                            else {
                                if (Game.moduleModel.warData.moveData.state == EMovieState.chooseType) {
                                    this.moduleWindow.closeSelf();
                                    // fairygui.GRoot.inst.showModalWait();
                                    this.curWinStateShow = false;
                                    // 服务器进入选择状态 切换为选择类型状态
                                    this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.SelectFilmType, true);
                                }
                                else {
                                    var subTimePre = Game.time.getSubSecondsPre(Game.moduleModel.warData.moveData.startTime);
                                    if (subTimePre < 0)
                                        subTimePre = 0;
                                    // 剩余时间
                                    var lastTime = this.selectType - subTimePre;
                                    if (lastTime <= 0) {
                                        // this.moduleWindow.closeSelf();
                                        this.moduleMain.conent.startShowWaiting();
                                        this.curWinStateShow = false;
                                        Game.moduleModel.warData.sendUpdateMovieState();
                                    }
                                    else {
                                        this.State = ShootingStage.SelectType;
                                        Game.moduleModel.warData.startWarFilming(lastTime);
                                        this.currentCaozuoTip(this.selectType, Game.config.msg.getConfig(MsgKey.movie_state_tips1).notice);
                                    }
                                }
                            }
                        }
                        break;
                    case ShootingStage.SelectNoticeWait:
                        {
                            if (Game.moduleModel.warData.moveData.state == EMovieState.propaganda) {
                                this.moduleWindow.closeSelf();
                                // fairygui.GRoot.inst.showModalWait();
                                this.curWinStateShow = false;
                                // 服务器进入通告状态 切换为选择通告界面
                                this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.SelectNotice, true);
                            }
                            else {
                                this.xuanzeList();
                                this.State = ShootingStage.Fixing;
                                Game.moduleModel.warData.startWarFilming(this.selectNotice);
                                this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                                if (this.mediaList && this.mediaList.length > 0) {
                                    this.noticeDelayTime = (100 - this.selectNotice) * Game.moduleModel.warData.filmingSpeed / this.mediaList.length * 0.7;
                                    this.curNoticeIndex = 0;
                                    this.showNotice();
                                }
                                var curLength = this.UpdateAttributeList.length - this.updateIndex;
                                if (curLength > 0) {
                                    Laya.timer.clear(this, this.updateAttribute);
                                    var delayTime = (100 - this.selectNotice) * Game.moduleModel.warData.filmingSpeed / curLength;
                                    Laya.timer.loop(delayTime, this, this.updateAttribute);
                                }
                            }
                        }
                        break;
                    case ShootingStage.FixingWait:
                        {
                            this.State = ShootingStage.Fixing;
                            Game.moduleModel.warData.startWarFilming(this.selectNotice);
                            this.currentCaozuoTip(100, Game.config.msg.getConfig(MsgKey.movie_state_tips3).notice);
                        }
                        break;
                    default:
                        {
                            this.setData();
                        }
                        break;
                }
            };
            // 显示通告效果
            WarFilming.prototype.showNotice = function () {
                var _this = this;
                if (this.curWinStateShow) {
                    if (this.noticeShowTipNum > -1) {
                        clearTimeout(this.noticeShowTipNum);
                        this.noticeShowTipNum = -1;
                    }
                    if (this.curNoticeIndex > 0 && this.curNoticeIndex <= this.mediaList.length) {
                        var attIcon_1 = this.getIcon(Games.WarLoadPic.getItemIcon(EItemId.expect));
                        var addVal_1 = Game.moduleModel.warData.filmExpectations.getValue(this.mediaList[this.curNoticeIndex - 1]);
                        attIcon_1.text = format("+{0}", addVal_1);
                        attIcon_1.setXY(this.m_notice.x, this.m_notice.y);
                        attIcon_1.setScale(1, 1);
                        // Game.sound.playSound(SoundKey.MM20_ArtistData);
                        laya.utils.Tween.to(attIcon_1, { y: this.m_expectingVal.y, x: this.m_expectingVal.x }, 1000, Laya.Ease.quadInOut, Handler.create(this, function () {
                            _this.oldExpected += addVal_1;
                            _this.m_expectingVal.text = formatNumberUnit(_this.oldExpected);
                            attIcon_1.visible = false;
                        }));
                    }
                    if (this.curNoticeIndex < this.mediaList.length) {
                        var medaConfig = Game.config.movieMediaVisit.getConfig(this.mediaList[this.curNoticeIndex]);
                        this.m_notice.setScale(0, 0);
                        this.m_notice.m_noticeIcon.icon = Games.WarLoadPic.getAvatarIcon(medaConfig.pic);
                        Game.sound.playSound(SoundKey.MM41_ExpectNotices);
                        this.m_t0.play(laya.utils.Handler.create(this, function () {
                            _this.noticeShowTipNum = setTimeout(function () { _this.showNotice(); }, _this.noticeDelayTime);
                        }), 1);
                        this.curNoticeIndex++;
                    }
                    else {
                        this.m_notice.setScale(0, 0);
                    }
                }
            };
            WarFilming.prototype.noticeCantTip = function () {
                if (this.curWinStateShow) {
                    // 无通告提示
                    if (!this.mindDialog || this.mindDialog === null) {
                        this.mindDialog = fgui.WarMovie.ShwoMinDialog.createInstance();
                        this.addChild(this.mindDialog);
                        this.mindDialog.setXY(0, 0);
                    }
                    this.mindDialog.setData(Game.config.msg.getConfig(MsgKey.non_midia_visit).notice);
                }
            };
            // 单个艺人item赋值
            WarFilming.prototype.initYRListItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index);
            };
            // 玩家选择类型结果及期待值加成列表
            WarFilming.prototype.xuanzeList = function () {
                if (this.State == ShootingStage.SelectNotice && Game.moduleModel.warData.filmExpectations.count == 0) {
                    return;
                }
                switch (this.State) {
                    case ShootingStage.SelectTypeWait:
                        {
                            this.m_xuanzeList.numItems = 1;
                        }
                        break;
                    case ShootingStage.SelectNoticeWait:
                        {
                            this.Mediatips = Game.config.msg.getConfig(MsgKey.movie_mediavisit_tips).notice;
                            this.mediaList = Game.moduleModel.warData.filmExpectations.getKeys();
                            this.m_xuanzeList.numItems = Game.moduleModel.warData.filmExpectations.count + 1;
                        }
                        break;
                }
            };
            // 单个选择类型item赋值
            WarFilming.prototype.initXZListItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    var types = Game.config.movieShootType.getConfigList();
                    var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                    for (var i = 0; i < types.length; i++) {
                        if (types[i].id == Game.moduleModel.warData.moveData.type) {
                            item.m_title.text = format(tips, types[i].getName);
                            break;
                        }
                    }
                }
                else {
                    var mediaConfig = Game.config.movieMediaVisit.getConfig(this.mediaList[index - 1]);
                    var actorList = Game.moduleModel.warData.filmExpecteActor.getValue(this.mediaList[index - 1]);
                    var tipActor = "";
                    for (var ll = 0; ll < actorList.length; ll++) {
                        tipActor += " ";
                        tipActor += actorList[ll].name;
                    }
                    item.m_title.text = format(this.Mediatips, tipActor, mediaConfig.name, Game.moduleModel.warData.filmExpectations.getValue(this.mediaList[index - 1]));
                }
            };
            return WarFilming;
        }(WarMovie.WarFilmingStruct));
        WarMovie.WarFilming = WarFilming;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilming.js.map