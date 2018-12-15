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
    var Manage;
    (function (Manage) {
        var ManagerOrderNeedPanel = /** @class */ (function (_super) {
            __extends(ManagerOrderNeedPanel, _super);
            function ManagerOrderNeedPanel() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.preOpTime = 0;
                return _this;
            }
            ManagerOrderNeedPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.OrderNeedTitle;
                this.m_orderLabel.text = TEXT.OrderNeed;
                this.m_completeLabel.text = TEXT.OrderCompleteReward;
                this.m_needlist.itemRenderer = Handler.create(this, this.updateNeedItemRender, null, false);
                this.m_rewardList.itemRenderer = Handler.create(this, this.updateRwardItemRender, null, false);
                this.m_okBtn.text = TEXT.Complete;
            };
            ManagerOrderNeedPanel.prototype.onWindowHide = function () {
                this.m_deleteBtn.offClick(this, this.onClickDeleteBtn);
                this.m_okBtn.offClick(this, this.onClickOkBtn);
            };
            ManagerOrderNeedPanel.prototype.onWindowShow = function () {
                this.m_deleteBtn.onClick(this, this.onClickDeleteBtn);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            ManagerOrderNeedPanel.prototype.enableOp = function () {
                if (Game.time.localTime - this.preOpTime < 1000) {
                    return false;
                }
                this.preOpTime = Game.time.localTime;
                return true;
            };
            //完成
            ManagerOrderNeedPanel.prototype.onClickOkBtn = function () {
                if (this.orderData.isAllComplete) {
                    if (!this.enableOp()) {
                        return;
                    }
                    Game.protosender.manageOrder.FinishOrder(this.orderData.uuid);
                }
                else {
                    Game.system.toastText(Game.config.msg.getConfig(MsgKey.order_fail).notice);
                }
            };
            //删除
            ManagerOrderNeedPanel.prototype.onClickDeleteBtn = function () {
                var _this = this;
                if (!this.enableOp()) {
                    return;
                }
                Game.system.confirmText(TEXT.OrderSureDeleteOrder, TEXT.OrderRefuseOrder, null, function () {
                    Game.protosender.manageOrder.DelOrder(_this.orderData.uuid);
                    _this.enableOp();
                });
            };
            /**
             *
             * @param index
             * @param item
             */
            ManagerOrderNeedPanel.prototype.updateNeedItemRender = function (index, item) {
                var item1 = item;
                item1.updateView(this.orderData, this.config.need[index], this.isCooperation);
            };
            /**
             * 奖励
             * @param index
             * @param item
             */
            ManagerOrderNeedPanel.prototype.updateRwardItemRender = function (index, item) {
                item.updateViewByDTNum(this.orderData.rewardItems[index]);
            };
            /**
             *
             * @param data
             */
            ManagerOrderNeedPanel.prototype.updateView = function (data, isCooperation) {
                this.orderData = data;
                this.config = data.config;
                //合作订单
                this.isCooperation = isCooperation;
                //需要
                this.m_needlist.numItems = this.config.need.length;
                //合作订单奖励
                if (this.isCooperation == false) {
                    //奖励
                    this.m_rewardList.numItems = this.orderData.rewardItems.length;
                }
            };
            //
            ManagerOrderNeedPanel.prototype.guideBoxItem = function (index) {
                if (index < this.m_needlist.numItems) {
                    for (var j = 0; j < this.config.need.length; j++) {
                        var element = this.config.need[j];
                        if (this.orderData.isPut(element.itemId) == false) {
                            return this.m_needlist.getChildAt(j);
                        }
                    }
                }
                return null;
            };
            return ManagerOrderNeedPanel;
        }(Manage.ManagerOrderNeedPanelStruct));
        Manage.ManagerOrderNeedPanel = ManagerOrderNeedPanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderNeedPanel.js.map