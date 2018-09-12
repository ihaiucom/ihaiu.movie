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
        var ArtistTag = /** @class */ (function (_super) {
            __extends(ArtistTag, _super);
            function ArtistTag() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
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
                // this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "biaoqian" + feature.lv);
            };
            /**
             *
             * @param story 更新擅长剧本风格
             */
            ArtistTag.prototype.updateViewByStoryType = function (story) {
                this.title = Game.config.property.getConfig(story.story).name;
                this.tip = Game.config.msg.getConfig(3000 + story.lv).notice;
                this.m_c1.selectedIndex = story.lv - 1;
                // this.m_icon.icon = fairygui.UIPackage.getItemURL(Games.GuiPackageNames.PfSkin, "biaoqian" + story.lv);
            };
            return ArtistTag;
        }(PfSkin.ArtistTagStruct));
        PfSkin.ArtistTag = ArtistTag;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTag.js.map