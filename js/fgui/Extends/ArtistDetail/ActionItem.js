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
        var ActionItem = /** @class */ (function (_super) {
            __extends(ActionItem, _super);
            function ActionItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             * 更新
             */
            ActionItem.prototype.updateView = function (data) {
                var shootId = data.type - 400;
                var config = Game.config.movieShootType.getConfig(shootId);
                if (config) {
                    //图标
                    this.m_icon.icon = Game.config.avatar.getConfig(config.pic).iconUrl;
                }
                var propConfig = Game.config.property.getConfig(shootId);
                if (propConfig) {
                    //名称
                    this.m_type.text = propConfig.name;
                }
                this.m_level.text = data.proficiencyLevel + "";
            };
            return ActionItem;
        }(ArtistDetail.ActionItemStruct));
        ArtistDetail.ActionItem = ActionItem;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActionItem.js.map