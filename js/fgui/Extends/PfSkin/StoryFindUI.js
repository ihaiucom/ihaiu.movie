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
        var StoryFindUI = /** @class */ (function (_super) {
            __extends(StoryFindUI, _super);
            function StoryFindUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryFindUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickClose);
            };
            StoryFindUI.prototype.onClickClose = function () {
                if (this.isClickClose) {
                    if (this.callBackFunc) {
                        this.callBackFunc();
                        this.callBackFunc = null;
                    }
                    this.visible = false;
                }
            };
            StoryFindUI.prototype.hide = function () {
                this.isClickClose = false;
                this.visible = false;
            };
            StoryFindUI.prototype.showStory = function (id, callBack) {
                if (callBack === void 0) { callBack = null; }
                this.callBackFunc = callBack;
                this.visible = true;
                this.isClickClose = false;
                this.m_itemOrStory.selectedIndex = 1;
                var cfg = Game.config.story.getConfig(id);
                if (cfg) {
                    // this.m_.url = Game.config.avatar.getConfig(cfg.poster_name).iconUrl;
                    this.m_storyItem.m_filmStar.m_starList.numItems = cfg.starNumber;
                    this.m_storyItem.text = cfg.filmName;
                    this.m_storyItem.icon = Game.config.avatar.getConfig(cfg.poster_name).iconUrl;
                }
                this.m_t0.setHook("playStar", Handler.create(null, function () {
                    Game.sound.playSound(SoundKey.MM13_GetArtist);
                }));
                this.m_t0.play(Handler.create(this, this.canClickClose), 1);
            };
            StoryFindUI.prototype.showItem = function (id, num) {
                this.m_itemOrStory.selectedIndex = 0;
                this.visible = true;
                this.isClickClose = false;
                var cfg = Game.config.item.getConfig(id);
                if (cfg) {
                    this.m_item.icon = cfg.iconUrl;
                }
                this.m_item.text = formatNumberUnit(num);
                this.m_t0.setHook("playStar", Handler.create(null, function () {
                    Game.sound.playSound(SoundKey.MM09_GoldReward);
                }));
                this.m_t0.play(Handler.create(this, this.canClickClose), 1);
            };
            StoryFindUI.prototype.canClickClose = function () {
                this.isClickClose = true;
            };
            return StoryFindUI;
        }(PfSkin.StoryFindUIStruct));
        PfSkin.StoryFindUI = StoryFindUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryFindUI.js.map