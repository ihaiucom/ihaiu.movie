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
        var ManagerOrderUI = /** @class */ (function (_super) {
            __extends(ManagerOrderUI, _super);
            function ManagerOrderUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.delayUpdateTimeOutHandler = 0;
                return _this;
            }
            ManagerOrderUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_noneOrder.text = TEXT.OrderNoneOrder;
                this.m_newOrderWay.text = TEXT.OrderNewOrderWay;
                this.orderItemList = [];
                for (var index = 0; index < Game.moduleModel.order.maxOrderMaking; index++) {
                    var orderItem = (this.getChild("order" + (index + 1)));
                    this.orderItemList.push(orderItem);
                    orderItem.visible = false;
                    orderItem.onClick(this, this.onClickOrderItem, [index]);
                }
                //合作者
                this.m_cooperator.text = TEXT.OrderCooperation;
            };
            /**
             *
             * @param select 点击
             */
            ManagerOrderUI.prototype.onClickOrderItem = function (select) {
                var item = this.orderItemList[select];
                var data = item.orderData;
                if (data && data.deleteFlag || item.isRemove) {
                    return;
                }
                this.currentSelectUUid = data.uuid;
                this.currentSelect = select;
                this.updateNeedPanel();
            };
            //更新订单需求
            ManagerOrderUI.prototype.updateNeedPanel = function () {
                var select;
                for (var index = 0; index < this.orderItemList.length; index++) {
                    var element = this.orderItemList[index];
                    if (index == this.currentSelect) {
                        select = element;
                        element.m_c3.selectedIndex = 1;
                    }
                    else {
                        element.m_c3.selectedIndex = 0;
                    }
                }
                var data;
                if (this.currentSelect >= 0) {
                    this.m_needPanel.visible = true;
                    this.moduleWindow.openTab(Games.OrderPanelType.NeedPanel);
                    if (isNullOrEmpty(this.currentSelectUUid)) {
                        data = this.getOrderDataByPos(this.currentSelect + 1);
                    }
                    else {
                        data = Game.moduleModel.order.getOrderDataByUUid(this.currentSelectUUid);
                    }
                    Game.moduleModel.order.curData = data;
                    if (data == null || data.deleteFlag) {
                        this.currentSelect = -1;
                        this.currentSelectUUid = "";
                        Game.moduleModel.order.curData = null;
                        this.updateNeedPanel();
                    }
                    else {
                        this.currentSelectUUid = data.uuid;
                        this.m_needPanel.updateView(data, this.isCooperation);
                    }
                }
                else {
                    this.currentSelectUUid = "";
                    Game.moduleModel.order.curData = null;
                    this.m_needPanel.visible = false;
                    this.moduleWindow.openTab(Games.OrderPanelType.NonePanel);
                }
            };
            /**
             * 更新界面
             */
            ManagerOrderUI.prototype.updateDelayView = function () {
                var _this = this;
                if (this.delayUpdateTimeOutHandler > 0) {
                    clearTimeout(this.delayUpdateTimeOutHandler);
                }
                this.delayUpdateTimeOutHandler = setTimeout(function () {
                    _this.updateViewNow();
                }, 500);
            };
            /**
             *立即刷新
             **/
            ManagerOrderUI.prototype.updateViewNow = function () {
                this.updateOrderView();
                this.updateNeedPanel();
            };
            /**
             *
             */
            ManagerOrderUI.prototype.getOrderDataByPos = function (pos) {
                for (var index = 0; index < this.orderDataList.length; index++) {
                    var element = this.orderDataList[index];
                    if (element.position == pos) {
                        return element;
                    }
                }
                return null;
            };
            /**
             * 更新订单状态
             */
            ManagerOrderUI.prototype.updateOrderView = function () {
                var startIndex = 0;
                if (this.isCooperation) {
                    this.orderDataList = Game.moduleModel.order.getCooperationOrderList();
                }
                else {
                    this.orderDataList = Game.moduleModel.order.getCurrrentOrderList();
                }
                for (var index = 0; index < this.orderItemList.length; index++) {
                    var item = this.orderItemList[index];
                    var data = this.getOrderDataByPos(index + 1);
                    item.updateView(data);
                }
                //排队订单
                this.m_sortOrder.text = format(TEXT.OrderSortOrder, Game.moduleModel.order.sortOrderMaking);
                //队列
                if (this.orderDataList.length > 0) {
                    this.m_c_haveorder.selectedIndex = 0;
                }
                else {
                    if (this.isCooperation) {
                        this.onClickCloseBtn();
                    }
                    this.m_c_haveorder.selectedIndex = 1;
                }
            };
            //隐藏
            ManagerOrderUI.prototype.onWindowHide = function () {
                if (this.isCooperation) {
                    //合作订单
                    Game.event.remove(GameEventKey.GameEventKey_UpdateCoopreationOrderView, this.updateDelayView, this);
                }
                else {
                    Game.event.remove(GameEventKey.GameEventKey_UpdateOrderView, this.updateDelayView, this);
                }
                Game.protoOkEvent.remove(ProtoEventKey.ItemData, this.updateDelayView, this);
                Game.protoOkEvent.remove(ProtoEventKey.ManageOrderData, this.updateDelayView, this);
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.clearFlags();
                Game.moduleModel.order.curData = null;
            };
            //显示
            ManagerOrderUI.prototype.onWindowShow = function () {
                this.isCooperation = false;
                if (this.moduleWindow.menuParameter.args && this.moduleWindow.menuParameter.args.length > 0) {
                    this.isCooperation = this.moduleWindow.menuParameter.args[0];
                }
                if (this.isCooperation) {
                    //合作订单
                    this.m_progressTotalBar.visible = false;
                    this.m_needPanel.m_c_cooperation.selectedIndex = 1;
                    this.m_c_cooperation.selectedIndex = 1;
                    this.m_head.m_icon.icon = Game.config.headPortrait.GetPlayerIconUrl(Game.moduleModel.cooperation.partnerInfData.portrait, Game.moduleModel.cooperation.partnerInfData.sex);
                    this.m_cooperatorName.text = Game.moduleModel.cooperation.partnerInfData.name;
                    Game.event.add(GameEventKey.GameEventKey_UpdateCoopreationOrderView, this.updateDelayView, this);
                }
                else {
                    this.m_progressTotalBar.visible = true;
                    this.m_needPanel.m_c_cooperation.selectedIndex = 0;
                    this.m_c_cooperation.selectedIndex = 0;
                    Game.event.add(GameEventKey.GameEventKey_UpdateOrderView, this.updateDelayView, this);
                    this.m_progressTotalBar.setProgressId(EProgressBoxId.manageOrder, this.onClickBox);
                    this.currentSelect = -1;
                }
                Game.protoOkEvent.add(ProtoEventKey.ItemData, this.updateDelayView, this);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.updateViewNow();
                Game.protoOkEvent.add(ProtoEventKey.ManageOrderData, this.updateDelayView, this);
            };
            ManagerOrderUI.prototype.onClickBox = function (index, needOrderNum, isCollect) {
                if (isCollect == false) {
                    Game.system.toastText(Game.config.msg.getTxtFormat(MsgKey.order_complete, needOrderNum));
                }
            };
            /**
             * 清除订单标记 倒计时
             */
            ManagerOrderUI.prototype.clearFlags = function () {
                for (var index = 0; index < this.orderItemList.length; index++) {
                    var element = this.orderItemList[index];
                    element.clearTime();
                    element.clearFlag();
                }
                this.currentSelectUUid = "";
                this.currentSelect = -1;
            };
            //关闭
            ManagerOrderUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            ManagerOrderUI.prototype.guideSelectOrder = function () {
                var orderDataList = Game.moduleModel.order.getCurrrentOrderList();
                for (var index = 0; index < orderDataList.length; index++) {
                    var element = orderDataList[index];
                    if (element.isAllComplete) {
                        return this.orderItemList[element.position - 1];
                    }
                }
                for (var index = 0; index < orderDataList.length; index++) {
                    var element = orderDataList[index];
                    if (element.isCanPut) {
                        return this.orderItemList[element.position - 1];
                    }
                }
                if (orderDataList.length > 0) {
                    return this.orderItemList[orderDataList[0].position - 1];
                }
                return null;
            };
            ManagerOrderUI.prototype.guideBoxItem = function (index) {
                return this.m_needPanel.guideBoxItem(index - 1);
            };
            return ManagerOrderUI;
        }(Manage.ManagerOrderUIStruct));
        Manage.ManagerOrderUI = ManagerOrderUI;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderUI.js.map