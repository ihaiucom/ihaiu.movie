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
    var WarMovie;
    (function (WarMovie) {
        var WarActorShowItem = /** @class */ (function (_super) {
            __extends(WarActorShowItem, _super);
            function WarActorShowItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 为动画赋值随机艺人
            WarActorShowItem.prototype.setRandomIcon = function (actorId) {
                var config = Game.config.actor.getConfig(actorId);
                this.m_icon.icon = Game.config.avatar.getConfig(config.avatar).bodyIconUrl;
                var list = Game.config.actor.getConfigList();
                this.m_1.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].avatar).bodyIconUrl;
                this.m_2.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].avatar).bodyIconUrl;
                this.m_3.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].avatar).bodyIconUrl;
                this.m_4.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].avatar).bodyIconUrl;
                this.m_5.icon = Game.config.avatar.getConfig(list[Random.range(1, list.length)].avatar).bodyIconUrl;
            };
            return WarActorShowItem;
        }(WarMovie.WarActorShowItemStruct));
        WarMovie.WarActorShowItem = WarActorShowItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActorShowItem.js.map