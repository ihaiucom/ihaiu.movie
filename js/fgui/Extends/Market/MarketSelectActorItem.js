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
        var MarketSelectActorItem = /** @class */ (function (_super) {
            __extends(MarketSelectActorItem, _super);
            function MarketSelectActorItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MarketSelectActorItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnPromotion.onClick(this, this.OnBtnPromotionClick);
            };
            MarketSelectActorItem.prototype.UpdateView = function (actorData, demandList, dispatchList) {
                this.actorData = actorData;
                this.demandList = demandList;
                this.dispatchList = dispatchList;
                this.title = actorData.name;
                this.m_state.setSelectedIndex(this.IsDispatch(actorData.id) ? 1 : 0);
                var demand = this.demandList[0];
                var actDemand = Game.moduleModel.market.GetActorRequire(actorData.id);
                if (demand != null) {
                    this.m_labDemand1.visible = true;
                    this.m_labDemand1.title = Game.moduleModel.market.GetDemandTypeName(demand.type) + ":";
                    this.m_labDemand1.m_value.text = Game.moduleModel.market.GetActorDemandValueText(demand, actDemand[demand.type]);
                    this.m_labDemand1.m_color.setSelectedIndex(Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type]) ? 1 : 0);
                    // let icon = Game.moduleModel.market.GetDemandTypeIcon(demand.type);
                    // this.m_labDemand1.icon = icon;
                    this.m_labDemand1.m_hasIcon.setSelectedIndex(0);
                    // this.m_labDemand1.m_hasIcon.setSelectedIndex(icon == "" ? 0 : 1);
                }
                else {
                    this.m_labDemand1.visible = false;
                }
                demand = this.demandList[1];
                if (demand != null) {
                    this.m_labDemand2.visible = true;
                    this.m_labDemand2.title = Game.moduleModel.market.GetDemandTypeName(demand.type) + ":";
                    this.m_labDemand2.m_value.text = Game.moduleModel.market.GetActorDemandValueText(demand, actDemand[demand.type]);
                    this.m_labDemand2.m_color.setSelectedIndex(Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type]) ? 1 : 0);
                    // let icon = Game.moduleModel.market.GetDemandTypeIcon(demand.type);
                    // this.m_labDemand2.icon = icon;
                    this.m_labDemand1.m_hasIcon.setSelectedIndex(0);
                    // this.m_labDemand2.m_hasIcon.setSelectedIndex(icon == "" ? 0 : 1);
                }
                else {
                    this.m_labDemand2.visible = false;
                }
                this.m_icon.url = Game.moduleModel.market.GetActorIcon(actorData.id);
                this.UpdateState();
            };
            MarketSelectActorItem.prototype.UpdateState = function () {
                var actDemand = Game.moduleModel.market.GetActorRequire(this.actorData.id);
                var isFinish = true;
                var selectType = 0;
                for (var index = 0; index < this.demandList.length; index++) {
                    var demand = this.demandList[index];
                    if (!Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type])) {
                        switch (demand.type) {
                            case Games.ActorRequireEnum.age:
                                this.m_talkBox.title = Game.config.msg.getTxt(MsgKey.market_envoy_wrong3);
                                selectType = 1;
                                break;
                            case Games.ActorRequireEnum.Continents:
                                this.m_talkBox.title = Game.config.msg.getTxt(MsgKey.market_envoy_wrong1);
                                selectType = 1;
                                break;
                            case Games.ActorRequireEnum.type:
                                this.m_talkBox.title = Game.config.msg.getTxt(MsgKey.market_envoy_wrong2);
                                selectType = 1;
                                break;
                            case Games.ActorRequireEnum.sex:
                                this.m_talkBox.title = Game.config.msg.getTxt(MsgKey.market_envoy_wrong5);
                                selectType = 1;
                                break;
                            default:
                                break;
                        }
                        isFinish = false;
                    }
                }
                this.m_selectType.setSelectedIndex(selectType);
                // this.m_selectType.setSelectedIndex(1);
                return isFinish;
            };
            MarketSelectActorItem.prototype.onselect = function () {
                // return this.UpdateState();
                var actDemand = Game.moduleModel.market.GetActorRequire(this.actorData.id);
                for (var index = 0; index < this.demandList.length; index++) {
                    var demand = this.demandList[index];
                    if (!Game.moduleModel.market.IsDemandConform(demand, actDemand[demand.type])) {
                        return false;
                    }
                }
                return true;
            };
            MarketSelectActorItem.prototype.OnBtnPromotionClick = function () {
                Game.menu.open(MenuId.ArtistDetail, this.actorData.id);
            };
            MarketSelectActorItem.prototype.IsDispatch = function (id) {
                for (var index = 0; index < this.dispatchList.length; index++) {
                    var dispatch = this.dispatchList[index];
                    if (dispatch == id) {
                        return true;
                    }
                }
                return false;
            };
            return MarketSelectActorItem;
        }(Market.MarketSelectActorItemStruct));
        Market.MarketSelectActorItem = MarketSelectActorItem;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarketSelectActorItem.js.map