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
        var ArtistGetUI = /** @class */ (function (_super) {
            __extends(ArtistGetUI, _super);
            function ArtistGetUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param data
             */
            ArtistGetUI.prototype.updateView = function (data) {
                this.actorData = data;
                this.m_icon.icon = data.config.avatarConfig.bodyIconUrl;
                this.m_name.text = data.name;
                this.m_shareBtn.visible = false;
                this.m_tipMsg.text = Games.TEXT.ClickAnyWhereToClose;
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = data.config.starNum;
            };
            //关闭界面
            ArtistGetUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
                Game.guide.checkPlayStoryByType(Games.StoryTriggerType.SelectActor);
            };
            //分享
            ArtistGetUI.prototype.onClickShareBtn = function () {
                Game.menu.open(MenuId.ArtistShare, this.actorData);
            };
            ArtistGetUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_shareBtn.onClick(this, this.onClickShareBtn);
                this.m_clickclose.onClick(this, this.onClickCloseBtn);
                //音效
                Game.sound.playSound(SoundKey.MM13_GetArtist);
            };
            ArtistGetUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_shareBtn.offClick(this, this.onClickShareBtn);
            };
            return ArtistGetUI;
        }(PfSkin.ArtistGetUIStruct));
        PfSkin.ArtistGetUI = ArtistGetUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistGetUI.js.map