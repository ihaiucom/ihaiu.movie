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
        var ArtistForzenItem = /** @class */ (function (_super) {
            __extends(ArtistForzenItem, _super);
            function ArtistForzenItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistForzenItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_aliveBtn2.onClick(this, this.onClickAliveBtn);
                this.attrLabels = [this.m_attrLabel1, this.m_attrLabel2, this.m_attrLabel3, this.m_attrLabel4];
                this.attrIcons = [this.m_attrIcon1, this.m_attrIcon2, this.m_attrIcon3, this.m_attrIcon4];
                this.displayObject.cacheAs = "bitmap";
                this.displayObject.staticCache = true;
            };
            /**
             * 点击复活
             */
            ArtistForzenItem.prototype.onClickAliveBtn = function () {
                var _this = this;
                if (Game.moduleModel.actor.actorIsMax) {
                    Game.system.toastText(Games.TEXT.ActorMax);
                }
                else {
                    var itemId = this.actorData.config.enable_cost.itemId;
                    var itemNum = this.actorData.config.enable_cost.itemNum;
                    Game.system.confirmBuyText(Games.TEXT.AliveAcotr, [itemId, itemNum], null, function () {
                        Game.protosender.Actor.hideActor(_this.actorData.uuid, false);
                    });
                }
            };
            /**
             *
             * @param data
             */
            ArtistForzenItem.prototype.updateView = function (data) {
                this.actorData = data;
                this.m_name.text = data.name;
                this.m_level.text = format(Games.TEXT.Lv, data.level);
                this.m_name.text = data.name;
                this.m_starlist.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starlist.numItems = data.star;
                this.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                this.m_country.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(data.config.country).icon).iconUrl;
                this.m_sex.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(data.config.sex).icon).iconUrl;
                this.m_aliveBtn2.m_num.text = formatNumberUnit(data.config.enable_cost.itemNum);
                this.m_age.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(data.config.age_type).icon).iconUrl;
                this.m_show.icon = Game.config.avatar.getConfig(Game.config.property.getConfig(data.config.show_type).icon).iconUrl;
                this.m_aliveBtn2.m_icon.url = Game.config.avatar.getConfig(Game.config.item.getConfig(data.config.enable_cost.itemId).icon).iconUrl;
                this.m_aliveBtn2.m_title.text = Games.TEXT.RelieveArtist;
                var props = data.getProps();
                for (var index = 0; index < props.length; index++) {
                    var id = props[index];
                    var config = Game.config.property.getConfig(id);
                    var field = config.field;
                    var value = data[field];
                    this.attrLabels[index].text = formatNumberUnit(value);
                    this.attrIcons[index].icon = Game.config.avatar.getConfig(config.icon).iconUrl;
                }
                this.displayObject.reCache();
            };
            return ArtistForzenItem;
        }(PfSkin.ArtistForzenItemStruct));
        PfSkin.ArtistForzenItem = ArtistForzenItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistForzenItem.js.map