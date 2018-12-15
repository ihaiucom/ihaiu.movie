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
        var ArtistItemView = /** @class */ (function (_super) {
            __extends(ArtistItemView, _super);
            function ArtistItemView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            //更新显示
            ArtistItemView.prototype.updateView = function (data) {
                this.actorData = data;
                this.m_label.text = data.name; //名字
                this.m_level.text = format(Games.TEXT.Lv, data.level); //等级
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = data.config.starUrl;
                }, null, false);
                this.m_starList.numItems = data.star; //星级
                //
                this.m_icon.m_icon.icon = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
                //国家
                this.m_contory.url = Game.config.avatar.getConfig(Game.config.property.getConfig(data.config.country).icon).iconUrl;
                //
                var props = data.getProps();
                for (var index = 0; index < props.length; index++) {
                    var id = props[index];
                    this.attrs[index].updateView(data, id);
                }
            };
            ArtistItemView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.attrs = [this.m_attr1, this.m_attr2, this.m_attr3, this.m_attr4];
            };
            return ArtistItemView;
        }(PfSkin.ArtistItemViewStruct));
        PfSkin.ArtistItemView = ArtistItemView;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistItemView.js.map