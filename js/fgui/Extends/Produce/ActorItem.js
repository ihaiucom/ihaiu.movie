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
    var Produce;
    (function (Produce) {
        var ActorItem = /** @class */ (function (_super) {
            __extends(ActorItem, _super);
            function ActorItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ActorItem.prototype.setInfo = function (data) {
                this.data = data;
                this.m_title.text = data.name;
                this.m_starList.touchable = false;
                this.m_starList.removeChildrenToPool();
                for (var i = 0; i < data.star; i++) {
                    var star = this.m_starList.addItemFromPool();
                    this.m_starList.addChild(star);
                }
                this.m_icon.url = Game.config.avatar.getConfig(data.config.avatar).bodyIconUrl;
            };
            Object.defineProperty(ActorItem.prototype, "isOnProduce", {
                get: function () {
                    return this._isOnProduce;
                },
                set: function (val) {
                    this._isOnProduce = val;
                    if (val) {
                        this.m_state.selectedIndex = 1;
                    }
                    else {
                        this.m_state.selectedIndex = 0;
                    }
                },
                enumerable: true,
                configurable: true
            });
            return ActorItem;
        }(Produce.ActorItemStruct));
        Produce.ActorItem = ActorItem;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActorItem.js.map