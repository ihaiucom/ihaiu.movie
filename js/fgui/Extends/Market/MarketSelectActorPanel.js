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
    var Market;
    (function (Market) {
        var MarketSelectActorPanel = /** @class */ (function (_super) {
            __extends(MarketSelectActorPanel, _super);
            function MarketSelectActorPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dispatchList = [];
                _this.NAME_ITEM = "MarketActorItem";
                _this.lastSelect = -1;
                return _this;
            }
            MarketSelectActorPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_list.setVirtual();
                this.m_list.itemRenderer = Handler.create(this, this.RenderListItem, null, false);
                this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.OnSelect);
            };
            MarketSelectActorPanel.prototype.onWindowDestory = function () {
                this.m_btnClose.onClick(null, null);
                this.m_list.itemRenderer = null;
            };
            MarketSelectActorPanel.prototype.onWindowShow = function () {
                Game.protoOkEvent.add(ProtoEventKey.ActorData, this.UpdateActors, this);
                this.UpdateView();
            };
            MarketSelectActorPanel.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.ActorData, this.UpdateActors, this);
            };
            MarketSelectActorPanel.prototype.UpdateView = function () {
                var args = this.moduleWindow.menuParameter.args;
                this.onSelect = args[0];
                this.demandList = args[1];
                this.dispatchList = args[2];
                this.m_txtTip.text = args[3];
                this.m_txtTip2.text = Game.moduleModel.market.GetDemandListText(this.demandList);
                this.lastSelect = -1;
                this.m_list.selectNone();
                this.m_list.refreshVirtualList();
                this.UpdateList();
            };
            MarketSelectActorPanel.prototype.UpdateList = function () {
                var _this = this;
                this.actorList = Game.moduleModel.market.GetActorList().sort(function (a, b) {
                    return _this.sort(a, b, _this.demandList);
                });
                this.m_list.numItems = this.actorList.length;
            };
            MarketSelectActorPanel.prototype.sort = function (a, b, demandList) {
                if (this.demandList == null) {
                    return;
                }
                var demand = this.demandList[0];
                if (demand == null) {
                    return;
                }
                switch (demand.type) {
                    case Games.ActorRequireEnum.age:
                    case Games.ActorRequireEnum.Continents:
                    case Games.ActorRequireEnum.type:
                    case Games.ActorRequireEnum.sex:
                        return b.level - a.level;
                    default:
                        break;
                }
                var aDemand = Game.moduleModel.market.GetActorRequire(a.id);
                var bDemand = Game.moduleModel.market.GetActorRequire(b.id);
                var aValue = aDemand[demand.type];
                var bValue = bDemand[demand.type];
                return bValue - aValue;
            };
            MarketSelectActorPanel.prototype.UpdateActors = function () {
                if (this.visible) {
                    this.UpdateList();
                    if (this.m_list.selectedIndex >= 0) {
                        var item = this.m_list.getVisibleChild(this.NAME_ITEM + this.m_list.selectedIndex);
                        if (item.UpdateState()) {
                            this.lastSelect = -1;
                        }
                    }
                }
            };
            MarketSelectActorPanel.prototype.OnSelect = function (obj) {
                var item = obj;
                var itemIndex = Number(item.name.substr(this.NAME_ITEM.length));
                if (this.lastSelect == itemIndex) {
                    return;
                }
                var data = this.actorList[itemIndex];
                if (item.onselect()) {
                    var rect = this.localToGlobalRect(item.x, item.y, item.width, item.height);
                    this.moduleWindow.backPreWindow();
                    this.onSelect(data.id, rect);
                }
                this.lastSelect = itemIndex;
            };
            MarketSelectActorPanel.prototype.RenderListItem = function (index, obj) {
                var item = obj;
                var actorData = this.actorList[index];
                item.name = this.NAME_ITEM + index;
                item.setPivot(0.5, 0.5);
                item.UpdateView(actorData, this.demandList, this.dispatchList);
            };
            MarketSelectActorPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.backPreWindow();
                this.onSelect();
            };
            MarketSelectActorPanel.prototype.Show = function () {
                this.visible = true;
            };
            MarketSelectActorPanel.prototype.Hide = function () {
                this.visible = false;
            };
            return MarketSelectActorPanel;
        }(Market.MarketSelectActorPanelStruct));
        Market.MarketSelectActorPanel = MarketSelectActorPanel;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketSelectActorPanel.js.map