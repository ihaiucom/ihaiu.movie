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
        var StoryItem = /** @class */ (function (_super) {
            __extends(StoryItem, _super);
            function StoryItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_infoBtn.onClick(this, this.onClickInfoBtn);
                this.m_achieveBtn.onClick(this, this.onClickAchieveBtn);
                setDark(this.m_mask);
            };
            /**
             *
             * @param storyId
             */
            StoryItem.prototype.updateView = function (storyId, storylibUI) {
                var _this = this;
                this.storylibUI = storylibUI;
                //
                this.config = Game.config.story.getConfig(storyId);
                //剧本数据
                this.storyData = Game.moduleModel.story.getStoryData(storyId);
                //电影海报
                this.m_icon.icon = Game.config.avatar.getConfig(this.config.poster_name).iconUrl;
                //海报上显示的剧本星级
                var starNum = Game.config.story.getConfig(storyId).starNumber;
                this.m_starList.numItems = starNum;
                //是否有此剧本
                var has = Game.moduleModel.story.hasStoryData(this.config.id);
                var isGold = true;
                if (this.storyData && this.storyData.storyProgressInfo.length > 0) {
                    for (var index = 0; index < this.storyData.storyProgressInfo.length; index++) {
                        var element = this.storyData.storyProgressInfo[index];
                        //是否需要打钩
                        this["m_mark" + (index + 1)].m_c1.selectedIndex = element.status == EStoryModule.finish ? 1 : 0;
                        //
                        if (element.status != EStoryModule.finish) {
                            isGold = false;
                        }
                    }
                }
                else {
                    isGold = false;
                    //
                    this.m_mark1.m_c1.selectedIndex = 0;
                    this.m_mark2.m_c1.selectedIndex = 0;
                    this.m_mark3.m_c1.selectedIndex = 0;
                }
                if (this.storyData && this.storyData.isUnlock) {
                    this.unlockStory(function () {
                        _this.storyData.isUnlock = false;
                        _this.updateView(storyId, _this.storylibUI);
                    });
                }
                else {
                    if (has) {
                        if (isGold) {
                            this.m_story_enable.selectedIndex = 2;
                        }
                        else {
                            this.m_story_enable.selectedIndex = 1;
                        }
                    }
                    else {
                        this.m_story_enable.selectedIndex = 0;
                    }
                }
            };
            StoryItem.prototype.onClickInfoBtn = function () {
                Game.menu.open(MenuId.StoryInfo, this.config.id);
            };
            StoryItem.prototype.onClickAchieveBtn = function () {
                if (this.storyData) {
                    this.storylibUI.showAchieve(this.storyData);
                }
            };
            StoryItem.prototype.unlockStory = function (callback) {
                var _this = this;
                this.m_c_visible_effect.selectedIndex = 1;
                this.m_effect.m_t0.play(Handler.create(null, function () {
                    _this.m_c_visible_effect.selectedIndex = 0;
                    callback && callback();
                }));
            };
            return StoryItem;
        }(PfSkin.StoryItemStruct));
        PfSkin.StoryItem = StoryItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryItem.js.map