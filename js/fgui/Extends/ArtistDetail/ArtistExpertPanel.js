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
    var ArtistDetail;
    (function (ArtistDetail) {
        var ArtistExpertPanel = /** @class */ (function (_super) {
            __extends(ArtistExpertPanel, _super);
            function ArtistExpertPanel() {
                var _this = _super.call(this) || this;
                _this.on(Laya.Event.ADDED, _this, _this.onAddToStage);
                _this.on(Laya.Event.REMOVED, _this, _this.onRemoveFromStage);
                return _this;
            }
            ArtistExpertPanel.prototype.onAddToStage = function () {
                this.m_list.scrollItemToViewOnClick = false;
                this.tagtip = ArtistDetail.ArtistTagTip.createInstance();
                this.addChild(this.tagtip);
                this.tagtip.visible = false;
                Laya.stage.on(Laya.Event.CLICK, this, this.onClickStage);
            };
            ArtistExpertPanel.prototype.onRemoveFromStage = function () {
                this.off(Laya.Event.ADDED, this, this.onAddToStage);
                this.off(Laya.Event.REMOVED, this, this.onRemoveFromStage);
                Laya.stage.off(Laya.Event.CLICK, this, this.onClickStage);
            };
            ArtistExpertPanel.prototype.refreshView = function () {
            };
            ArtistExpertPanel.prototype.updateView = function (data) {
                this.actorData = data;
                this.tagtip.visible = false;
                this.m_list.removeChildrenToPool();
                var characterNum = this.actorData.config.character.length;
                var storyNum = this.actorData.config.story_type.length + this.actorData.config.story_feature.length;
                this.shootTypeList = this.actorData.getShootListLvGreater0();
                var movieNum = this.shootTypeList.length;
                var line = 0;
                if (storyNum > 0) {
                    this.storyList = this.m_list.addItemFromPool(ArtistDetail.ArtistExpertItem1.URL);
                    this.storyList.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickStoryItem);
                    this.storyList.m_list.itemRenderer = Handler.create(this, this.onUpdateStory, null, false);
                    this.storyList.m_list.numItems = storyNum;
                    //设置剧本 风格
                    line = Math.ceil(storyNum / this.storyList.m_list.columnCount);
                    //重新设置高度
                    this.storyList.m_list.viewHeight = (this.storyList.m_list.lineGap + 70) * line;
                    this.storyList.m_title.text = Games.TEXT.ExpertStory;
                }
                if (characterNum > 0) {
                    this.characterList = this.m_list.addItemFromPool(ArtistDetail.ArtistExpertItem1.URL);
                    this.characterList.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickCharacterItem);
                    this.characterList.m_list.itemRenderer = Handler.create(this, this.onUpdateCharacter, null, false);
                    this.characterList.m_list.numItems = characterNum;
                    //设置
                    line = Math.ceil(characterNum / this.characterList.m_list.columnCount);
                    //重新设置高度
                    this.characterList.m_list.viewHeight = (this.characterList.m_list.lineGap + 70) * line;
                    this.characterList.m_title.text = Games.TEXT.ExpertCharacter;
                }
                if (movieNum > 0) {
                    this.movieList = this.m_list.addItemFromPool(ArtistDetail.ArtistExpertItem2.URL);
                    this.movieList.m_list.itemRenderer = Handler.create(this, this.onUpdateMoveShootRender, null, false);
                    this.movieList.m_list.numItems = movieNum;
                    //设置擅长电影
                    line = Math.ceil(movieNum / this.movieList.m_list.columnCount);
                    //重新设置高度
                    this.movieList.m_list.viewHeight = (this.movieList.m_list.lineGap + 135) * line;
                    this.movieList.m_title.text = Games.TEXT.ExpertType;
                }
            };
            //更新标签
            ArtistExpertPanel.prototype.onUpdateCharacter = function (index, charItem) {
                charItem.updateViewByTagData(this.actorData.actorCharactersTags[index]);
            };
            //更新标签
            ArtistExpertPanel.prototype.onUpdateStory = function (index, charItem) {
                var storyTagLength = this.actorData.actorStoryTags.length;
                if (index >= storyTagLength) {
                    charItem.updateViewByTagData(this.actorData.actorFeaturesTags[index - storyTagLength]);
                }
                else {
                    charItem.updateViewByTagData(this.actorData.actorStoryTags[index]);
                }
            };
            //更新擅长类型
            ArtistExpertPanel.prototype.onUpdateMoveShootRender = function (index, movieItem) {
                movieItem.updateView(this.shootTypeList[index]);
            };
            ArtistExpertPanel.prototype.onClickStage = function (evt) {
                if (this.isClickItem == false) {
                    this.tagtip.visible = false;
                }
                this.isClickItem = false;
            };
            ArtistExpertPanel.prototype.onClickStoryItem = function (charItem) {
                var index = this.storyList.m_list.getChildIndex(charItem);
                var realIndex = this.storyList.m_list.childIndexToItemIndex(index);
                var globalPos = charItem.localToGlobal(0, 0);
                var localPos = this.globalToLocal(globalPos.x, globalPos.y + charItem.height);
                this.tagtip.visible = true;
                this.tagtip.setXY(localPos.x, localPos.y);
                this.isClickItem = true;
                this.tagtip.text = charItem.tip;
            };
            ArtistExpertPanel.prototype.onClickCharacterItem = function (charItem) {
                var index = this.characterList.m_list.getChildIndex(charItem);
                var realIndex = this.characterList.m_list.childIndexToItemIndex(index);
                var globalPos = charItem.localToGlobal(0, 0);
                var localPos = this.globalToLocal(globalPos.x, globalPos.y + charItem.height);
                this.tagtip.visible = true;
                this.tagtip.setXY(localPos.x, localPos.y);
                this.isClickItem = true;
                this.tagtip.text = charItem.tip;
            };
            return ArtistExpertPanel;
        }(ArtistDetail.ArtistExpertPanelStruct));
        ArtistDetail.ArtistExpertPanel = ArtistExpertPanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistExpertPanel.js.map