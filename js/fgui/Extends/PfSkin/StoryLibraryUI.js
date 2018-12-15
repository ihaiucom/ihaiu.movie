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
    var PfSkin;
    (function (PfSkin) {
        var StoryLibraryUI = /** @class */ (function (_super) {
            __extends(StoryLibraryUI, _super);
            function StoryLibraryUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isFinding = false;
                return _this;
            }
            StoryLibraryUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list.setVirtual();
                this.m_list.scrollItemToViewOnClick = false;
                this.m_achevementUI.visible = false;
                this.m_achevementTargetUI.visible = false;
                this.m_name.text = Games.TEXT.StoryTitle;
                this.m_achevementUI.moduleWindow = this;
                this.m_findResultUI.visible = false;
                this.resetCost = GlobalConfig.getValue2(GlobalKey.story_stack_cd_stage_cost)[0];
                var url = Game.config.item.getConfig(this.resetCost.v1).iconUrl;
                this.m_speed.m_costIcon.icon = url;
                this.m_achieveBtn.m_red.visible = false;
            };
            //更新搜罗消耗
            StoryLibraryUI.prototype.updateSearchCost = function () {
                this.souCost = Game.config.blockLevel.getConfig(User.info.stall).storysearchcost;
                var url = Game.config.item.getConfig(this.souCost.itemId).iconUrl;
                this.m_souBtn.m_icon.icon = url;
                this.m_souBtn.text = Games.TEXT.StorySou;
                this.m_souBtn.m_number.text = this.souCost.itemNum + "";
                //设置数量
                this.m_gold.m_showBg.setSelectedIndex(1);
                this.m_gold.setItemId(this.souCost.itemId);
                //设置水晶
                this.m_diamand.setItemId(EItemId.diamond);
                this.m_diamand.m_showBg.setSelectedIndex(1);
                //
                this.resetTime = 0;
                //
                var preTime = User.info.lastTimeFindStory;
                var nowTime = Game.time.serverSeconds;
                var cd = GlobalConfig.getValue(GlobalKey.story_stack_cd);
                var nextTime = preTime + cd;
                if (nowTime < nextTime) {
                    this.resetTime = Math.min(cd, nextTime - nowTime);
                }
                //搜罗按钮灰态
                this.m_souBtn.grayed = Game.moduleModel.story.isFindMax;
                //加速
                this.m_speed.grayed = Game.moduleModel.story.isClearCdUnlock == false;
                Laya.timer.clear(this, this.updateTime);
                if (this.resetTime > 0) {
                    Laya.timer.loop(1000, this, this.updateTime);
                }
                this.updateTimeView();
            };
            //加速
            StoryLibraryUI.prototype.onClickSpeed = function () {
                if (Game.moduleModel.story.isClearCdUnlock == false) {
                    Game.system.toastMsg(MsgKey.block_level_less);
                }
                else {
                    if (this.resetTime > 0) {
                        var enough = Games.ItemHelper.checkItemEnough2(this.resetCost.v1, this.costNum);
                        if (enough) {
                            Game.protosender.story.cleanFindStory();
                            // 埋点 搜罗清除CD消耗钻石数量
                            Games.Static.Instance.onUseGold("script&clearCD", this.costNum, "");
                        }
                        else {
                            // Game.system.toastItemNotEnough(this.resetCost.v1);
                            Game.system.openItemWay(this.resetCost.v1, this.costNum);
                        }
                    }
                }
            };
            //搜罗剧本
            StoryLibraryUI.prototype.onClickSouBtn = function () {
                if (Game.moduleModel.story.isFindMax) {
                    Game.system.toastText(Games.TEXT.StoryRemainNotEnough);
                }
                else {
                    var enough = Games.ItemHelper.checkItemEnough(this.souCost);
                    if (enough) {
                        Game.protosender.story.findStory();
                    }
                    else {
                        // Game.system.toastItemNotEnough(this.souCost.v1);
                        Game.system.openItemWay(this.souCost.itemId, this.souCost.itemNum);
                    }
                }
            };
            /**
             * 刷新界面
             */
            StoryLibraryUI.prototype.updateView = function () {
                //更新搜罗消耗
                this.updateSearchCost();
                //每日剩余次数
                this.m_souluotimes.text = Games.TEXT.StoryFindTime;
                //剩余次数
                this.m_times.text = format("{0}/{1}", User.info.findStoryTime, GlobalConfig.getValue(GlobalKey.story_stack_daily_times));
                //组的数据条目
                this.suits = Game.moduleModel.story.getStorySuitList();
                //组数量
                this.m_list.numItems = this.suits.length;
            };
            //		
            StoryLibraryUI.prototype.updateTime = function () {
                this.resetTime--;
                if (this.resetTime < 0) {
                    this.resetTime = 0;
                }
                this.updateTimeView();
            };
            Object.defineProperty(StoryLibraryUI.prototype, "costNum", {
                get: function () {
                    var lv = Math.ceil(this.resetTime / GlobalConfig.getValue(GlobalKey.story_stack_cd_stage_length));
                    var costnum = this.resetCost.v2 * lv;
                    return costnum;
                },
                enumerable: true,
                configurable: true
            });
            //更新
            StoryLibraryUI.prototype.updateAchieveView = function () {
                this.updateAchieveRedPoint();
                this.m_achevementUI.updateView();
            };
            StoryLibraryUI.prototype.updateAchieveRedPoint = function () {
                this.m_achieveBtn.m_red.visible = Game.moduleModel.task.isRedStoryAchievement;
            };
            StoryLibraryUI.prototype.updateTimeView = function () {
                if (Game.moduleModel.story.isFindMax || this.resetTime <= 0) {
                    this.m_speed.visible = false;
                    this.m_souBtn.visible = true;
                    var enough = Games.ItemHelper.checkItemEnough(this.souCost);
                    this.m_souBtn.m_red.visible = enough && (Game.moduleModel.story.isFindMax == false);
                }
                else {
                    this.m_speed.text = Games.TimeHelper.TimeFormat(this.resetTime);
                    this.m_speed.m_title2.text = this.costNum + "";
                    this.m_speed.visible = true;
                    this.m_souBtn.visible = false;
                }
            };
            StoryLibraryUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_achieveBtn.offClick(this, this.onClickAchieveBtn);
                this.m_achevementUI.m_closeBtn.offClick(this, this.onClickAchieveCloseBtn);
                this.m_achevementTargetUI.m_close.offClick(this, this.hideAchieve);
                this.m_speed.offClick(this, this.onClickSpeed);
                this.m_souBtn.offClick(this, this.onClickSouBtn);
                Laya.timer.clear(this, this.updateTime);
                this.m_findResultUI.hide();
                // Game.protoOkEvent.remove(ProtoEventKey.StoryData, this.updateStoryDataHander, this);
                // Game.protoOkEvent.remove(ProtoEventKey.StorySuitData, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.story_getReward, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.TaskData, this.updateAchieveView, this);
                Game.protoOkEvent.remove(ProtoEventKey.story_cleanFindStory, this.updateView, this);
                Game.protoOkEvent.remove(ProtoEventKey.story_findStory, this.findStoryHandler, this);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateView, this);
                this.m_list.off(fairygui.Events.SCROLL_END, this, this.scrollEnd);
                Game.event.remove(GameEventKey.GameEventKey_ResetFindStoryTime, this.updateView, this);
            };
            StoryLibraryUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_achevementUI.m_closeBtn.onClick(this, this.onClickAchieveCloseBtn);
                this.m_achieveBtn.onClick(this, this.onClickAchieveBtn);
                this.m_achevementTargetUI.m_close.onClick(this, this.hideAchieve);
                this.m_list.itemRenderer = Handler.create(this, this.updateItemRenderer, null, false);
                this.m_speed.onClick(this, this.onClickSpeed);
                this.m_souBtn.onClick(this, this.onClickSouBtn);
                // Game.protoOkEvent.add(ProtoEventKey.StoryData, this.updateStoryDataHander, this);
                // Game.protoOkEvent.add(ProtoEventKey.StorySuitData, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.story_getReward, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.story_cleanFindStory, this.updateView, this);
                Game.protoOkEvent.add(ProtoEventKey.story_findStory, this.findStoryHandler, this);
                Game.protoOkEvent.add(ProtoEventKey.TaskData, this.updateAchieveView, this);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateView, this);
                this.m_list.on(fairygui.Events.SCROLL_END, this, this.scrollEnd);
                this.findId = 0;
                this.m_list.touchable = true;
                Game.event.add(GameEventKey.GameEventKey_ResetFindStoryTime, this.updateView, this);
                // Game.protoOkEvent
                this.updateAchieveRedPoint();
                this.updateView();
            };
            StoryLibraryUI.prototype.scrollEnd = function () {
                // console.log("scrollend")
                if (this.findId > 0) {
                    this.findId = 0;
                    this.updateView();
                }
                this.m_list.touchable = true;
            };
            StoryLibraryUI.prototype.updateStoryDataHander = function () {
                this.updateView();
            };
            //滚动到指定位置
            StoryLibraryUI.prototype.scrollToStory = function (id) {
                for (var index = 0; index < this.suits.length; index++) {
                    var element = this.suits[index];
                    var storyConfig = Game.config.story.getConfig(id);
                    if (storyConfig && storyConfig.stack_sort == element.id) {
                        this.m_list.scrollPane.snapToItem = true;
                        this.m_list.touchable = false;
                        this.m_list.scrollToView(index, true);
                        // let groupItem = <StoryGroupItem>this.m_list.getChildAt(this.m_list.itemIndexToChildIndex(index));
                        // if (groupItem)
                        // {
                        // 	groupItem.unlockStory(id, callback);
                        // }
                        break;
                    }
                }
            };
            StoryLibraryUI.prototype.findStoryHandler = function (msg) {
                var _this = this;
                if (msg.type == 1) {
                    // Game.system.openRewardStory(msg.id, msg.num, TEXT.StoryRewardTitle);
                    // 埋点 搜罗剧本
                    Games.Static.Instance.onUserorbit("script", "scriptFind", "find");
                    this.findId = msg.id;
                    var data = Game.moduleModel.story.getStoryData(msg.id);
                    if (data) {
                        data.isUnlock = true;
                    }
                    this.m_findResultUI.showStory(msg.id, function () {
                        _this.updateView();
                        //
                        _this.scrollToStory(msg.id);
                    });
                }
                else {
                    this.m_list.touchable = true;
                    this.m_findResultUI.showItem(msg.id, msg.num);
                    // let item: DTItemNum = new DTItemNum();
                    // item.itemId = msg.id;
                    // item.itemNum = msg.num;
                    // Game.system.openAwardsAlert([item], TEXT.StoryRewardTitle);
                }
            };
            //剧本成就关闭界面
            StoryLibraryUI.prototype.onClickAchieveCloseBtn = function () {
                this.m_achevementUI.visible = false;
            };
            //点击剧本成就
            StoryLibraryUI.prototype.onClickAchieveBtn = function () {
                this.m_achevementUI.visible = true;
                this.updateAchieveView();
            };
            //点击关闭
            StoryLibraryUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            //显示
            StoryLibraryUI.prototype.showAchieve = function (data) {
                this.m_achevementTargetUI.visible = true;
                this.m_achevementTargetUI.updateView(data);
            };
            //隐藏
            StoryLibraryUI.prototype.hideAchieve = function () {
                this.m_achevementTargetUI.visible = false;
            };
            //更新单个条目
            StoryLibraryUI.prototype.updateItemRenderer = function (index, item) {
                var item1 = item;
                item1.updateView(this.suits[index], this);
            };
            return StoryLibraryUI;
        }(PfSkin.StoryLibraryUIStruct));
        PfSkin.StoryLibraryUI = StoryLibraryUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryLibraryUI.js.map