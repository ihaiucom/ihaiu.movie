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
        var ManagerOrderNeedItem = /** @class */ (function (_super) {
            __extends(ManagerOrderNeedItem, _super);
            function ManagerOrderNeedItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isClick = false;
                _this.clickHandler = 0;
                return _this;
            }
            ManagerOrderNeedItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.onClick(this, this.onClickItem);
            };
            /**
             * 点击装箱
             */
            ManagerOrderNeedItem.prototype.onClickItem = function () {
                var _this = this;
                if (this.isClick) {
                    return;
                }
                else {
                    this.isClick = true;
                    this.clickHandler = setTimeout(function () { _this.isClick = false; }, 500);
                }
                if (this.isPut) {
                    //提示已经装箱
                    Game.system.toastText(TEXT.OrderTheBoxHasPut);
                }
                else {
                    if (this.isCooperation && this.orderData.isCooperationOrder) {
                        //重复
                        Game.system.toastMsg(MsgKey.cooperative_order_repeat);
                    }
                    else {
                        if (this.curItemNum >= this.maxItemNum) {
                            //放入自己箱子内
                            var item_1 = Game.moduleModel.item.getItem(this.dtItem.itemId);
                            if (item_1) {
                                if (this.isCooperation) {
                                    //合作订单
                                    Game.system.confirmMsg(MsgKey.order_give, [this.maxItemNum, this.dtItem.itemName, this.curItemNum], TEXT.OrderCooperationComfirmTitle, null, function () {
                                        //放入箱子中
                                        Game.protosender.manageOrder.PutItem(_this.orderData.uuid, _this.orderData.entityId, item_1.itemId, 1, true, true);
                                    });
                                }
                                else {
                                    //放入箱子中
                                    Game.protosender.manageOrder.PutItem(this.orderData.uuid, 0, item_1.itemId, 0, false, false);
                                }
                            }
                        }
                        else {
                            //道具获取途径
                            Game.system.openItemWay(this.dtItem.itemId, this.maxItemNum - this.curItemNum);
                        }
                    }
                }
            };
            /**
             *
             * @param data 订单数据
             * @param dtItem
             */
            ManagerOrderNeedItem.prototype.updateView = function (data, dtItem, isCooperation) {
                this.isClick = false;
                clearTimeout(this.clickHandler);
                this.dtItem = dtItem;
                this.orderData = data;
                this.isCooperation = isCooperation;
                var cur = Game.moduleModel.item.getItemNum(dtItem.itemId);
                var max = dtItem.itemNum;
                this.m_lv.text = format("{0}/{1}", cur, max);
                this.curItemNum = cur;
                this.maxItemNum = max;
                this.isPut = data.isPut(dtItem.itemId);
                if (this.isPut) {
                    this.m_canComplete.selectedIndex = 0;
                    var orderItem = this.orderData.getOrderItem(dtItem.itemId);
                    this.m_lv.text = max + "";
                    this.m_lv.color = "#BDFF54";
                    if (orderItem.portrait == -1) {
                        //自己
                        this.m_complete.selectedIndex = 1;
                    }
                    else {
                        //合作订单
                        this.m_complete.selectedIndex = 2;
                        //头像
                        this.m_head.m_icon.icon = Game.config.headPortrait.GetPlayerIconUrl(Game.moduleModel.cooperation.partnerInfData.portrait, Game.moduleModel.cooperation.partnerInfData.sex);
                    }
                }
                else {
                    this.m_icon.icon = Game.config.item.getConfig(dtItem.itemId).iconUrl;
                    this.m_complete.selectedIndex = 0;
                    if (cur >= max) {
                        //足够
                        this.m_lv.color = "#BDFF54";
                        this.m_canComplete.selectedIndex = 1;
                    }
                    else {
                        this.m_lv.color = "#FF7676";
                        this.m_canComplete.selectedIndex = 0;
                    }
                }
            };
            return ManagerOrderNeedItem;
        }(Manage.ManagerOrderNeedItemStruct));
        Manage.ManagerOrderNeedItem = ManagerOrderNeedItem;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ManagerOrderNeedItem.js.map