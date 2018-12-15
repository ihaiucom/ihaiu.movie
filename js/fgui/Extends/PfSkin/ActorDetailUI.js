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
        var ActorDetailUI = /** @class */ (function (_super) {
            __extends(ActorDetailUI, _super);
            function ActorDetailUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorDetailUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            /**
             *
             * @param data 艺人数据
             */
            ActorDetailUI.prototype.updateView = function (id) {
                var _this = this;
                this.config = Game.config.actor.getConfig(id);
                if (Game.moduleModel.actor.hasActor(id)) {
                    this.m_aName.text = Game.moduleModel.actor.getActor(id).name;
                }
                else {
                    this.m_aName.text = this.config.name;
                }
                this.m_starlist.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = _this.config.starUrl;
                }, null, false);
                this.m_starlist.numItems = this.config.starNum;
                this.m_icon.url = Game.config.avatar.getConfig(this.config.avatar).bodyIconUrl;
                this.m_sex.url = Game.config.avatar.getConfig(Game.config.property.getConfig(this.config.sex).icon).iconUrl;
                this.m_contory.url = Game.config.avatar.getConfig(Game.config.property.getConfig(this.config.country).icon).iconUrl;
                this.m_biaoqian1.icon = Game.config.property.getConfig(this.config.age_type).iconUrl;
                this.m_biaoqian2.icon = Game.config.property.getConfig(this.config.show_type).iconUrl;
                this.m_content.text = this.config.tips;
                // this.m_desc.text = ""
            };
            return ActorDetailUI;
        }(PfSkin.ActorDetailUIStruct));
        PfSkin.ActorDetailUI = ActorDetailUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorDetailUI.js.map