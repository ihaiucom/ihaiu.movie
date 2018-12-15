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
        var StoryGroupItem = /** @class */ (function (_super) {
            __extends(StoryGroupItem, _super);
            function StoryGroupItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isShowReward = false;
                return _this;
            }
            StoryGroupItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_rewardItem.m_name.text = Games.TEXT.StoryCollect;
                this.m_rewardItem.onClick(this, this.onClickRewardItem);
                this.m_list.itemRenderer = Handler.create(this, this.onUpdateItemRender, null, false);
            };
            StoryGroupItem.prototype.showReward = function () {
                var _this = this;
                if (this.isShowReward == false) {
                    this.isShowReward = true;
                    this.m_rewardDialog.visible = true;
                    this.m_t0.play(Handler.create(null, function () {
                        _this.isShowReward = false;
                        _this.m_rewardDialog.visible = false;
                    }));
                }
            };
            //点击集齐物品奖励
            StoryGroupItem.prototype.onClickRewardItem = function () {
                if (this.hasRewardCanGet) {
                    Game.protosender.story.getReward(this.config.id);
                }
                else {
                    this.showReward();
                }
            };
            StoryGroupItem.prototype.onUpdateItemRender = function (index, item) {
                //
                var item1 = item;
                item1.updateView(this.config.scripts[index], this.storylibUI);
            };
            StoryGroupItem.prototype.unlockStory = function (id, callback) {
                for (var index = 0; index < this.config.scripts.length; index++) {
                    var element = this.config.scripts[index];
                    if (element == id) {
                        var item = this.m_list.getChildAt(index);
                        if (item) {
                            item.unlockStory(callback);
                        }
                    }
                }
            };
            /**
             *
             * @param config
             * @param p
             */
            StoryGroupItem.prototype.updateView = function (suitData, p) {
                this.storylibUI = p;
                this.config = suitData.config;
                this.m_list.numItems = this.config.scripts.length;
                this.m_name.text = this.config.name;
                this.m_rewardDialog.visible = false;
                var cur = 0;
                var max = this.config.scripts.length * 3;
                this.hasRewardCanGet = false;
                if (suitData) {
                    cur = suitData.progress2;
                    if (suitData.isHasRewardCanGet) {
                        this.hasRewardCanGet = true;
                    }
                }
                if (cur >= max) {
                    this.m_c1.selectedIndex = 1;
                }
                else {
                    this.m_c1.selectedIndex = 0;
                }
                this.suitData = suitData;
                this.m_progress.text = format("{0}/{1}", cur, max);
                if (this.hasRewardCanGet) {
                    //
                    this.m_rewardItem.playEffect();
                }
                else {
                    if (suitData.status == EStoryModule.hadGet) {
                        this.m_rewardItem.getEffect();
                    }
                    else {
                        this.m_rewardItem.stopEffect();
                    }
                }
                //
                var str = Games.TEXT.StoryDesc1;
                var str1 = "";
                for (var index = 0; index < this.config.addition_scene.length; index++) {
                    var element = this.config.addition_scene[index];
                    var s = "";
                    if (index != 0) {
                        s = ",";
                    }
                    s += format(Games.TEXT.StoryDesc2, Game.config.property.getConfig(element.storyeffect).name, element.rate);
                    str1 += s;
                }
                str = format(str, str1);
                this.m_desc.text = str;
                //奖励
                this.m_rewardDialog.updateView(this.config.rewards);
            };
            return StoryGroupItem;
        }(PfSkin.StoryGroupItemStruct));
        PfSkin.StoryGroupItem = StoryGroupItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryGroupItem.js.map