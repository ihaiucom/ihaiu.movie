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
    var GoldExchange;
    (function (GoldExchange) {
        var GoldExchangePanel = /** @class */ (function (_super) {
            __extends(GoldExchangePanel, _super);
            function GoldExchangePanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dtItem = new DTItemNum();
                _this.startPos = new Point();
                _this.endPos = new Point();
                _this.rewardItems = [];
                return _this;
            }
            GoldExchangePanel.prototype.onWindowShow = function () {
                this.m_oneBtn.onClick(this, this.onOneClickBtn);
                this.m_mulBtn.onClick(this, this.onMulClickBtn);
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateItemHandler, this);
                Game.protoOkEvent.add(ProtoEventKey.CinemaBuild_goldExchange, this.onGoldExchangeHandler, this);
                this.updateView();
            };
            GoldExchangePanel.prototype.onWindowHide = function () {
                this.m_oneBtn.offClick(this, this.onOneClickBtn);
                this.m_mulBtn.offClick(this, this.onMulClickBtn);
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateItemHandler, this);
                Game.protoOkEvent.remove(ProtoEventKey.CinemaBuild_goldExchange, this.onGoldExchangeHandler, this);
            };
            GoldExchangePanel.prototype.onGoldExchangeHandler = function (msg) {
                if (msg.result === 0) {
                    User.goldExchangeCount = msg.totalCount;
                    this.startEffect(msg.count);
                    Game.system.toastText(TEXT.GoldExchangeOk);
                    this.updateView();
                }
            };
            //更新金币
            GoldExchangePanel.prototype.updateItemHandler = function () {
                //数量
                this.curCostItem = User.goldExchangeCost;
                this.m_exchangeItem.updateViewByDTNum(this.curCostItem);
                this.curRewardItem = User.goldExchangeReward;
                this.m_targetItem.updateViewByDTNum(this.curRewardItem);
                //
                var enough = ItemHelper.checkItemEnough(this.curCostItem);
                if (enough) {
                    this.m_exchangeItem.m_title.color = "#FFFFFF";
                }
                else {
                    this.m_exchangeItem.m_title.color = "#FF0000";
                }
            };
            //
            GoldExchangePanel.prototype.updateView = function () {
                this.updateItemHandler();
                //
                var total = User.goldExchangeTotal;
                var remain = User.goldExchangeRemain;
                //
                this.curCostNum = Math.min(remain, 10);
                // if (this.curCostNum > 1)
                // {
                // 	this.m_c_btn_visible.selectedIndex = 0;
                // }
                // else
                // {
                // 	//剩余次数不足1
                // 	this.m_c_btn_visible.selectedIndex = 1;
                // }
                //剩余次数
                this.m_remain.text = format(TEXT.GoldExchangeRemainNum, remain);
                //兑换一次
                this.m_oneBtn.text = TEXT.GoldExchangeOne;
                //兑换多次
                this.m_mulBtn.text = TEXT.GoldExchangeTen;
            };
            //点击一次
            GoldExchangePanel.prototype.onOneClickBtn = function () {
                if (this.curCostNum > 0) {
                    this.sendToServer(1);
                }
                else {
                    Game.system.toastFormatText(TEXT.GoldExchangeTimesNoEnough);
                }
            };
            //点击多次
            GoldExchangePanel.prototype.onMulClickBtn = function () {
                if (this.curCostNum > 0) {
                    // Game.protosender.CinemaBuild.goldExchange(1);
                    this.sendToServer(this.curCostNum);
                }
                else {
                    Game.system.toastFormatText(TEXT.GoldExchangeTimesNoEnough);
                }
                // this.startEffect(1);
            };
            //发送到服务器
            GoldExchangePanel.prototype.sendToServer = function (num) {
                var costNum = this.curCostItem.itemNum * num;
                var costId = this.curCostItem.itemId;
                var enough = ItemHelper.checkItemEnough2(costId, this.curCostItem.itemNum * num);
                if (enough) {
                    Game.protosender.CinemaBuild.goldExchange(num);
                }
                else {
                    Game.system.openItemWay(costId, costNum);
                }
            };
            GoldExchangePanel.prototype.startEffect = function (num) {
                var _this = this;
                if (num === void 0) { num = 1; }
                this.startPos.x = this.m_targetItem.x;
                this.startPos.y = this.m_targetItem.y;
                var item;
                if (this.rewardItems.length <= 0) {
                    item = fgui.Common.CommonItem.createInstance();
                    item.hideBg();
                }
                else {
                    item = this.rewardItems.pop();
                    item.alpha = 1;
                }
                this.addChild(item);
                this.dtItem.itemId = this.curRewardItem.itemId;
                this.dtItem.itemNum = this.curRewardItem.itemNum * num;
                item.updateViewByDTNum(this.dtItem);
                item.setXY(this.startPos.x, this.startPos.y);
                Laya.Tween.to(item, { y: this.startPos.y - 150, alpha: 0.3 }, 1500, Laya.Ease.quadOut, Handler.create(null, function () {
                    item.removeFromParent();
                    _this.rewardItems.push(item);
                }));
            };
            return GoldExchangePanel;
        }(GoldExchange.GoldExchangePanelStruct));
        GoldExchange.GoldExchangePanel = GoldExchangePanel;
    })(GoldExchange = fgui.GoldExchange || (fgui.GoldExchange = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoldExchangePanel.js.map