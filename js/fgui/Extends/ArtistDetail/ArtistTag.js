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
        var ArtistTag = /** @class */ (function (_super) {
            __extends(ArtistTag, _super);
            function ArtistTag() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 更新标签
             * @param tagData 标签数据
             */
            ArtistTag.prototype.updateViewByTagData = function (tagData) {
                this.title = Game.config.property.getConfig(tagData.id).name;
                this.tip = Game.config.msg.getConfig(3000 + tagData.lv).notice;
                this.m_c1.selectedIndex = tagData.lv - 1;
            };
            /**
             * 更新标签
             * @param id 标签id
             * @param lv 标签等级
             */
            ArtistTag.prototype.updateViewByIdLv = function (id, lv) {
                this.title = Game.config.property.getConfig(id).name;
                this.tip = Game.config.msg.getConfig(3000 + lv).notice;
                this.m_c1.selectedIndex = lv - 1;
            };
            /**
             *
             * @param char 更新擅长角色类型
             */
            ArtistTag.prototype.updateViewByCharacter = function (mchar) {
                this.title = Game.config.property.getConfig(mchar.character).name;
                this.tip = Game.config.msg.getConfig(3000 + mchar.lv).notice;
                this.m_c1.selectedIndex = mchar.lv - 1;
            };
            /**
             *
             * @param feature 更新擅长剧本元素
             */
            ArtistTag.prototype.updateViewByFeatureType = function (feature) {
                this.title = Game.config.property.getConfig(feature.feature).name;
                this.tip = Game.config.msg.getConfig(3000 + feature.lv).notice;
                this.m_c1.selectedIndex = feature.lv - 1;
            };
            /**
             *
             * @param story 更新擅长剧本风格
             */
            ArtistTag.prototype.updateViewByStoryType = function (story) {
                this.title = Game.config.property.getConfig(story.story).name;
                this.tip = Game.config.msg.getConfig(3000 + story.lv).notice;
                this.m_c1.selectedIndex = story.lv - 1;
            };
            return ArtistTag;
        }(ArtistDetail.ArtistTagStruct));
        ArtistDetail.ArtistTag = ArtistTag;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTag.js.map