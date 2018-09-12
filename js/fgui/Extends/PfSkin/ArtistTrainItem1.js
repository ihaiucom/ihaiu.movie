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
        var ArtistTrainItem1 = /** @class */ (function (_super) {
            __extends(ArtistTrainItem1, _super);
            function ArtistTrainItem1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistTrainItem1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            /**
             *
             * @param data
             */
            ArtistTrainItem1.prototype.updateView = function (data) {
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = data.star;
                this.m_level.text = Games.TEXT.Level + data.level;
                this.m_expBar.visible = false;
                // this.m_expBar.value = 0.1;
                // this.m_expBar.visible = false;
                this.m_name.text = data.name;
                // let avatarInfo = new Games.AvatarInfo();
                // let avatarConfig = Game.config.avatar.getConfig(data.config.avatar);
                // avatarInfo.skeletonPath = avatarConfig.modelBoneUrl;
                // avatarInfo.texturePath = avatarConfig.modelSkinUrl;
                // if (this.avatar)
                // {
                // 	this.displayObject.removeChild(this.avatar);
                // 	this.avatar.dispose();
                // 	this.avatar = null;
                // }
                // this.avatar = Games.Avatar.Creat(avatarInfo);
                // this.avatar.setBounds(new Rectangle(0, 0, 190, 620));
                // let bounds = this.avatar.getBounds();
                // this.avatar.scale(0.5, 0.5, true);
                // this.displayObject.addChild(this.avatar);
                // this.avatar.pos(bounds.width >> 1, 300);
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
            };
            return ArtistTrainItem1;
        }(PfSkin.ArtistTrainItem1Struct));
        PfSkin.ArtistTrainItem1 = ArtistTrainItem1;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistTrainItem1.js.map