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
        var PactItem = /** @class */ (function (_super) {
            __extends(PactItem, _super);
            function PactItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PactItem.prototype.RenderItem = function (data) {
                this.m_actor.m_icon.url = data.itemBodyIconUrl;
                this.title = data.itemNumTxt; //Math.min(data.itemNum, 9999).toString();
                this.star = data.itemStar;
                var actorId = data.itemConfig.actor_id;
                var actorNum = data.itemConfig.actor_num;
                var actor = Game.moduleModel.actor.getActor(actorId);
                if (actor) {
                    this.m_state.setSelectedIndex(1);
                }
                else {
                    if (actorNum <= data.itemNum) {
                        this.m_state.setSelectedIndex(2);
                    }
                    else {
                        this.m_state.setSelectedIndex(0);
                    }
                }
            };
            Object.defineProperty(PactItem.prototype, "star", {
                set: function (num) {
                    this.m_star.starNum = num;
                },
                enumerable: true,
                configurable: true
            });
            return PactItem;
        }(Bag.PactItemStruct));
        Bag.PactItem = PactItem;
    })(Bag = fgui.Bag || (fgui.Bag = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactItem.js.map