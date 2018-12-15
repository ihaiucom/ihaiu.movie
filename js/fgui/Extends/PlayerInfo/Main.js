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
    var PlayerInfo;
    (function (PlayerInfo) {
        var Event = laya.events.Event;
        var Main = /** @class */ (function (_super) {
            __extends(Main, _super);
            function Main() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.ITEM_RENAME_ID = 5008;
                _this.tabNameList = [
                    Games.TEXT.PlayerInfoTab0,
                    Games.TEXT.PlayerInfoTab1,
                    Games.TEXT.PlayerInfoTab2,
                    Games.TEXT.PlayerInfoTab3,
                    Games.TEXT.PlayerInfoTab4,
                ];
                return _this;
            }
            Main.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.init();
            };
            Main.prototype.onWindowShowCall = function () {
                this.setTopAsset();
                this.setPersonInfo();
                this.openTab(0);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateAssets, this);
                Game.protoOkEvent.add(ProtoEventKey.GameInfo, this.updateAssets, this);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RenameGameData, this.onServerRename, this);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RePerSignatureGameData, this.onServerRenameSignature, this);
                Game.protoOkEvent.add(ProtoEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
            };
            Main.prototype.onWindowHide = function () {
                this.hideChooseAvatar();
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateAssets, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameInfo, this.updateAssets, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RenameGameData, this.onServerRename, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RePerSignatureGameData, this.onServerRenameSignature, this);
                Game.protoOkEvent.remove(ProtoEventKey.GameData_RePortraitGameData, this.onServerChangeHeadAvatar, this);
            };
            Main.prototype.updateAssets = function () {
                this.setTopAsset();
                this.setPersonInfo();
            };
            //服务器通知改头像
            Main.prototype.onServerChangeHeadAvatar = function (proto) {
                if (proto.result == 0) {
                    if (Game.moduleModel.playerInfo.portraitType == Games.PortraitType.Dress) {
                        User.info.portrait = Game.moduleModel.playerInfo.portraitId;
                        this.updatePortrait();
                    }
                    else if (Game.moduleModel.playerInfo.portraitType == Games.PortraitType.Buy) {
                        this.setTopAsset();
                    }
                }
            };
            //服务器通知改名
            Main.prototype.onServerRename = function (proto) {
                if (proto.result == 0) {
                    User.info.name = Game.moduleModel.playerInfo.playerName;
                    this.m_PersonInfo.m_headName.text = User.info.name;
                    Games.Static.Instance.onUserorbit("name", "1", "change");
                }
            };
            //服务器通知改签名
            Main.prototype.onServerRenameSignature = function (proto) {
                if (proto.result == 0) {
                    Game.moduleModel.playerInfo.lastTimeRenameSignature = Game.time.serverSeconds;
                    this.m_PersonInfo.m_btn_touch_desc.visible = true;
                    this.m_PersonInfo.m_self_introduction.visible = true;
                    this.m_PersonInfo.m_self_introduction_input.visible = false;
                    User.infoExt.perSignature = Game.moduleModel.playerInfo.playerSign;
                    this.m_PersonInfo.m_self_introduction.text = User.infoExt.perSignature;
                    if (User.infoExt.perSignature == "") {
                        this.m_PersonInfo.m_self_introduction.text = "Edit Self-Introduction";
                    }
                    Games.Static.Instance.onUserorbit("name", "2", "change");
                }
            };
            //更新头像
            Main.prototype.updatePortrait = function () {
                var portraitId = User.info.portrait;
                if (portraitId == 0) {
                    portraitId = this.getDefaultPortrait();
                }
                var portraitCfg = Game.config.headPortrait.getConfig(portraitId);
                if (portraitCfg) {
                    portraitId = portraitCfg.icon;
                    var avatarConfig = Game.config.avatar.getConfig(portraitCfg.icon);
                    if (avatarConfig) {
                        this.m_PersonInfo.m_headCircleIcon.m_headIcon.url = avatarConfig.iconUrl;
                    }
                }
            };
            //获取默认头像
            Main.prototype.getDefaultPortrait = function () {
                var portraitCfgList = Game.config.headPortrait.getConfigList();
                var portraitSexList = portraitCfgList.filter(function (value, index, array) {
                    return value.sex == User.info.sex;
                });
                for (var _i = 0, portraitSexList_1 = portraitSexList; _i < portraitSexList_1.length; _i++) {
                    var portrait = portraitSexList_1[_i];
                    if (portrait.unlock.itemId == 0 && portrait.unlock.itemNum == 0) {
                        return portrait.id;
                    }
                }
                return 0;
            };
            Main.prototype.init = function () {
                var index = 0;
                for (var _i = 0, _a = this.tabNameList; _i < _a.length; _i++) {
                    var tabName = _a[_i];
                    index++;
                    var tab = this.m_tabPanel.getChild("tab" + index);
                    var txtTitle = tab.getChild("title");
                    var txtSelectTitle = tab.getChild("select_title");
                    txtTitle.y += 12;
                    txtSelectTitle.y += 12;
                    txtTitle.text = tabName;
                    txtSelectTitle.text = tabName;
                    tab.onClick(this, this.onTabChange);
                }
                this.recordRankListPosition();
                this.m_topAssetList.m_btn_topClose.onClick(this, this.onCloseWindow);
            };
            Main.prototype.setTopAsset = function () {
                this.m_topAssetList.m_assetList.removeChildrenToPool();
                var assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Diamond);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Thumb);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Gold);
                this.m_topAssetList.m_assetList.addChild(assetItem);
                assetItem = this.m_topAssetList.m_assetList.addItemFromPool();
                assetItem.setAsset(Games.AssetType.Dollar);
                this.m_topAssetList.m_assetList.addChild(assetItem);
            };
            Main.prototype.setPersonInfo = function () {
                this.updatePortrait();
                this.m_PersonInfo.m_headName.text = User.info.name;
                this.m_PersonInfo.m_level.text = "LV." + User.info.level;
                this.m_PersonInfo.m_self_introduction_input.input.maxChars = 100;
                this.m_PersonInfo.m_self_introduction.text = User.infoExt.perSignature; //个性签名
                this.m_PersonInfo.m_self_introduction_input.input.on(Event.BLUR, this, this.onSignatureInputBlur);
                if (User.infoExt.perSignature == "") {
                    this.m_PersonInfo.m_self_introduction.text = "Edit Self-Introduction";
                }
                //exp
                var prevExp = 0;
                for (var i = 0; i < User.info.level; i++) {
                    var cfg = Game.config.playerLevel.getConfig(i);
                    if (cfg != null) {
                        prevExp += cfg.fans;
                    }
                }
                var a = User.info;
                var curExp = Math.round(User.info.fans); // - prevExp;
                var upgradeExp = Game.config.playerLevel.getConfig(User.info.level).fans;
                this.m_PersonInfo.m_progressBarText.text = formatNumberUnit(curExp) + "/" + formatNumberUnit(upgradeExp);
                this.m_PersonInfo.m_progressBar.value = ((curExp * 100) / upgradeExp);
                this.m_PersonInfo.m_headCircleIcon.m_headIcon.onClick(this, this.onChooseAvatarClick);
                this.m_PersonInfo.m_btn_editor_name.onClick(this, this.onEditorNameClick);
                this.m_PersonInfo.m_btn_editor_desc.onClick(this, this.onEditorSignClick);
                this.m_PersonInfo.m_btn_touch_desc.onClick(this, this.onEditorSignClick);
            };
            Main.prototype.recordRankListPosition = function () {
                this.orignalY = this.m_rankList.y;
                this.orignalHeight = this.m_rankList.height;
            };
            Main.prototype.onChooseAvatarClick = function () {
                //Sound
                Game.sound.playSound(SoundKey.MM01_Button);
                var lockLevel = Game.config.global.getConfig(GlobalKey.account_lock).value;
                if (User.info.level < lockLevel) {
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.account_unlock, lockLevel));
                    return;
                }
                this.chooseAvatar = PlayerInfo.ChooseAvatar.createInstance();
                this.chooseAvatar.showForParent(this.parent);
                this.chooseAvatar.setInfo();
            };
            Main.prototype.hideChooseAvatar = function () {
                if (this.chooseAvatar) {
                    if (!this.chooseAvatar.isRemoveFromParent) {
                        this.chooseAvatar.onClose();
                    }
                    this.chooseAvatar = null;
                }
            };
            //修改公司名
            Main.prototype.onEditorNameClick = function () {
                Game.sound.playSound(SoundKey.MM02_Popup);
                if (Game.moduleModel.item.getItemNum(this.ITEM_RENAME_ID) == 0) {
                    Game.system.openItemWay(this.ITEM_RENAME_ID, 1);
                    return;
                }
                var renameCompany = PlayerInfo.RenameCompany.createInstance();
                renameCompany.showForParent(this.parent);
                renameCompany.setInfo();
            };
            //修改签名
            Main.prototype.onEditorSignClick = function () {
                if (!Game.moduleModel.playerInfo.checkRenameSignatureTime()) {
                    Game.system.toastText(Game.config.msg.getTxt(MsgKey.account_name_often));
                    return;
                }
                this.m_PersonInfo.m_btn_touch_desc.visible = false;
                this.m_PersonInfo.m_self_introduction.visible = false;
                var editorName = this.m_PersonInfo.m_self_introduction.text;
                this.m_PersonInfo.m_self_introduction_input.text = editorName;
                this.m_PersonInfo.m_self_introduction_input.visible = true;
                this.m_PersonInfo.m_self_introduction_input.input.focus = true;
                if (User.infoExt.perSignature == "") {
                    this.m_PersonInfo.m_self_introduction_input.text = "";
                }
            };
            //签名输入文本失去焦点		
            Main.prototype.onSignatureInputBlur = function () {
                this.m_PersonInfo.m_self_introduction_input.input.focus = false;
                var editorName = this.m_PersonInfo.m_self_introduction_input.text;
                if (this.checkRenameSignature(editorName)) {
                    Game.moduleModel.playerInfo.playerSign = editorName;
                    Game.protosender.GameData.RePerSignatureGameData(editorName);
                }
                else {
                    this.m_PersonInfo.m_btn_touch_desc.visible = true;
                    this.m_PersonInfo.m_self_introduction.visible = true;
                    this.m_PersonInfo.m_self_introduction_input.visible = false;
                }
            };
            //验证修改签名是否合法
            Main.prototype.checkRenameSignature = function (name) {
                var oldName = this.m_PersonInfo.m_self_introduction.text;
                if (name == oldName) {
                    return false;
                }
                if (!validateBlockWords(name, true)) {
                    return false;
                }
                return true;
            };
            Main.prototype.onTabChange = function () {
                this.showContent(this.tabIndex - 1);
            };
            //0 start
            Main.prototype.openTab = function (index) {
                this.showContent(index);
                this.tabIndex = index + 1;
            };
            /**
             * 显示对应标签内容
             * @param tab
             */
            Main.prototype.showContent = function (tab) {
                this.m_rankList.removeChildrenToPool();
                this.m_underLine.visible = (tab == 0);
                switch (tab) {
                    case 0:
                        this.showTabHome();
                        break;
                    case 1:
                        this.showTabCareer();
                        break;
                    case 2:
                        this.showTabTrophy();
                        break;
                    case 3:
                        this.showTabFilms();
                        break;
                    case 4:
                        this.showTabActors();
                        break;
                }
            };
            Object.defineProperty(Main.prototype, "tabIndex", {
                get: function () {
                    return this.m_tabPanel.m_tabctrl.selectedIndex + 1;
                },
                set: function (value) {
                    this.m_tabPanel.m_tabctrl.setSelectedIndex(value - 1);
                },
                enumerable: true,
                configurable: true
            });
            //首页
            Main.prototype.showTabHome = function () {
                var blockCfg = Game.config.blockLevel.getConfig(User.info.stall);
                this.m_homeRankTop.m_stLevel.text = "ST." + User.info.stall % 1000;
                this.m_homeRankTop.m_stRankValue.text = blockCfg.name;
                this.m_homeRankTop.m_companyValue.text = formatNumberUnit(2546789);
                this.m_homeRankTop.visible = true;
                this.m_rankList.y = this.orignalY;
                this.m_rankList.height = this.orignalHeight;
                var rankInfoList = [];
                var info = { title: Games.TEXT.PlayerInfoTabHome_Rank0, value: User.info.extendFloor, nameTitle: null, iconId: 5041 };
                rankInfoList.push(info);
                //
                info = { title: Games.TEXT.PlayerInfoTabHome_Rank1, value: Game.moduleModel.actor.getAllActorLen(), nameTitle: null, iconId: 5011 };
                rankInfoList.push(info);
                // info = { title: Games.TEXT.PlayerInfoTabHome_Rank2, value: 0 };
                // rankInfoList.push(info);
                var maxMarket = Game.moduleModel.market.GetMaxCity();
                var kvalue = "0";
                if (maxMarket) {
                    kvalue = maxMarket.num + "." + maxMarket.name;
                }
                info = { title: Games.TEXT.PlayerInfoTabHome_Rank3, value: kvalue, nameTitle: null, iconId: 5008 };
                rankInfoList.push(info);
                // info = { title: Games.TEXT.PlayerInfoTabHome_Rank4, value: 0 };
                // rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabHome_Rank5, value: Game.moduleModel.bag.GetBagVolume(), nameTitle: null, iconId: 5001 };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_1 = rankInfoList; _i < rankInfoList_1.length; _i++) {
                    var rankInfo = rankInfoList_1[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //职业生涯
            Main.prototype.showTabCareer = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: Games.TEXT.PlayerInfoTabCareer_Rank0, value: User.infoExt.totalFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank1, value: User.infoExt.totalFilm }; //add
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank2, value: User.infoExt.numBoxOffice };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank3, value: User.infoExt.numOrders };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank4, value: User.infoExt.numProductionLine };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank5, value: User.infoExt.numOfficialBusiness };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank6, value: User.infoExt.numMeeting };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank7, value: User.infoExt.numVisit };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabCareer_Rank8, value: User.infoExt.numGroupBest };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_2 = rankInfoList; _i < rankInfoList_2.length; _i++) {
                    var rankInfo = rankInfoList_2[_i];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //奖杯统计
            Main.prototype.showTabTrophy = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info;
                if (User.info.sex == EUserSex.boy) {
                    info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank00, value: Game.moduleModel.actor.bestActorCupCount };
                    rankInfoList.push(info);
                }
                else {
                    info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank11, value: Game.moduleModel.actor.bestActorCupCount };
                    rankInfoList.push(info);
                }
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank22, value: User.infoExt.numBestPerformer };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank3, value: User.infoExt.numBestArtDirection };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank4, value: User.infoExt.numBestPublicPraise };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank5, value: 0 };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank6, value: 0 };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank7, value: 0 };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabTrophy_Rank8, value: 0 };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_3 = rankInfoList; _i < rankInfoList_3.length; _i++) {
                    var rankInfo = rankInfoList_3[_i];
                    if (rankInfo.value == 0 || rankInfo.value == null)
                        continue;
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //电影统计
            Main.prototype.showTabFilms = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info = { title: Games.TEXT.PlayerInfoTabFilm_Rank0, value: User.infoExt.bestWordOfMouth, nameTitle: User.infoExt.bestWordOfMouthFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank1, value: User.infoExt.bestBoxOffice, nameTitle: User.infoExt.bestBoxOfficeFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank2, value: User.infoExt.numHorrorFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank3, value: User.infoExt.numSuspense };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank4, value: User.infoExt.numMusicalFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank5, value: User.infoExt.numComedyFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank6, value: User.infoExt.numCartoonFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank7, value: User.infoExt.numNarrativeFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank8, value: User.infoExt.numAffectionalFilm };
                rankInfoList.push(info);
                info = { title: Games.TEXT.PlayerInfoTabFilm_Rank9, value: User.infoExt.numActionFilm };
                rankInfoList.push(info);
                //set list
                for (var _i = 0, rankInfoList_4 = rankInfoList; _i < rankInfoList_4.length; _i++) {
                    var rankInfo = rankInfoList_4[_i];
                    if (rankInfo.value == null)
                        continue;
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            //艺人统计
            Main.prototype.showTabActors = function () {
                this.rePosRankList();
                var rankInfoList = [];
                var info;
                var topBoxOfficeActor = Game.moduleModel.actor.getTopBoxOfficeCount;
                if (topBoxOfficeActor) {
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank0, value: formatNumberUnit(topBoxOfficeActor.boxOfficeCount), nameTitle: topBoxOfficeActor.name };
                    rankInfoList.push(info);
                }
                var topCupCountActor = Game.moduleModel.actor.getTopCupCount;
                if (topCupCountActor) {
                    var valueText = format(TEXT.PlayerInfoTabActor_Rank1Value, topCupCountActor.cupCount);
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank1, value: valueText, nameTitle: topCupCountActor.name };
                    rankInfoList.push(info);
                }
                var topMovieCountActor = Game.moduleModel.actor.getTopMovieCount;
                if (topMovieCountActor) {
                    var valueText = format(TEXT.PlayerInfoTabActor_Rank2Value, topMovieCountActor.movieCount);
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank2, value: valueText, nameTitle: topMovieCountActor.name };
                    rankInfoList.push(info);
                }
                var topGiveAssetListCountActor = Game.moduleModel.actor.getTopGiveAssetListCount;
                if (topGiveAssetListCountActor) {
                    var totalCount = 0;
                    for (var _i = 0, _a = topGiveAssetListCountActor.giveAssetsList; _i < _a.length; _i++) {
                        var giveAsset = _a[_i];
                        for (var _b = 0, _c = giveAsset.giveItemList; _b < _c.length; _b++) {
                            var item = _c[_b];
                            totalCount += item.amount;
                        }
                    }
                    var valueText = format(TEXT.PlayerInfoTabActor_Rank3Value, totalCount);
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank3, value: valueText, nameTitle: topGiveAssetListCountActor.name };
                    rankInfoList.push(info);
                }
                var topCultivateCountActor = Game.moduleModel.actor.getTopCultivateCount;
                if (topCultivateCountActor) {
                    var valueText = format(TEXT.PlayerInfoTabActor_Rank4Value, topCultivateCountActor.cultivateCount);
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank4, value: valueText, nameTitle: topGiveAssetListCountActor.name };
                    rankInfoList.push(info);
                }
                var topSkillLevelActor = Game.moduleModel.actor.getTopSkillLevel;
                if (topSkillLevelActor) {
                    var totalSkillLevel = 0;
                    for (var _d = 0, _e = topSkillLevelActor.skillList; _d < _e.length; _d++) {
                        var skillInfo = _e[_d];
                        var skillCfg = Game.config.skill.getConfig(skillInfo.skillId);
                        totalSkillLevel += skillCfg.lv;
                    }
                    var valueText = format(TEXT.PlayerInfoTabActor_Rank5Value, totalSkillLevel);
                    info = { title: Games.TEXT.PlayerInfoTabActor_Rank5, value: valueText, nameTitle: topSkillLevelActor.name };
                    rankInfoList.push(info);
                }
                //set list
                for (var _f = 0, rankInfoList_5 = rankInfoList; _f < rankInfoList_5.length; _f++) {
                    var rankInfo = rankInfoList_5[_f];
                    var rankItem = this.m_rankList.addItemFromPool();
                    rankItem.setInfo(rankInfo);
                    this.m_rankList.addChild(rankItem);
                }
            };
            Main.prototype.rePosRankList = function () {
                this.m_homeRankTop.visible = false;
                this.m_rankList.y = this.orignalY - 100;
                this.m_rankList.height = this.orignalHeight + 100;
            };
            //关闭界面
            Main.prototype.onCloseWindow = function () {
                Game.menu.close(MenuId.PlayerInfo);
            };
            Main.DependPackages = ["PlayerInfo", "Common"];
            return Main;
        }(PlayerInfo.MainStruct));
        PlayerInfo.Main = Main;
    })(PlayerInfo = fgui.PlayerInfo || (fgui.PlayerInfo = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Main.js.map