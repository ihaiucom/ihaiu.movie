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
    var Bag;
    (function (Bag) {
        var ActorItem = /** @class */ (function (_super) {
            __extends(ActorItem, _super);
            function ActorItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorItem.prototype.UpdateView = function (actorData) {
                this.actorData = actorData;
                this.title = actorData.name;
                this.m_star.starNum = actorData.star;
                var actDemand = Game.moduleModel.market.GetActorRequire(actorData.id);
                this.m_actor.m_icon.url = Game.moduleModel.market.GetActorIcon(actorData.id);
                this.m_txtLv.text = Games.TEXT.Lv.format(actorData.level);
            };
            return ActorItem;
        }(Bag.ActorItemStruct));
        Bag.ActorItem = ActorItem;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorItem.js.map