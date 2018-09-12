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
/**
* name
*/
var Games;
(function (Games) {
    var OrderModel = /** @class */ (function (_super) {
        __extends(OrderModel, _super);
        function OrderModel() {
            var _this = _super.call(this) || this;
            _this.maxOrderMaking = 9;
            _this.progressBox = [5, 10, 20, 35, 50];
            _this.isOrder = false;
            _this.orderDict = new Dictionary();
            _this.orderUUidDict = new Dictionary();
            _this.cooperateOrderList = new Array();
            _this.cooperateOrderPosDict = new Dictionary();
            _this.orderList = new Array();
            _this.currentOrderList = new Array();
            _this.deleteOrderUUidList = new Dictionary();
            return _this;
        }
        /**
         *
         * @param id 配置id
         */
        OrderModel.prototype.getOrderData = function (id) {
            return this.orderDict.getValue(id);
        };
        /**
         *
         * @param uuid 服务器唯一id
         */
        OrderModel.prototype.getOrderDataByUUid = function (uuid) {
            return this.orderUUidDict.getValue(uuid);
        };
        //获取当前订单
        OrderModel.prototype.getCurrrentOrderList = function () {
            var list = [];
            if (this.isOrder == false) {
                this.isOrder = true;
                this.orderList.sort(this.sortOrderFunc);
            }
            for (var index = 0; index < Math.min(this.maxOrderMaking, this.orderList.length); index++) {
                var element = this.orderList[index];
                list.push(element);
            }
            this.sortOrderMaking = Math.max(0, this.orderList.length - list.length);
            // console.log(Date() + "***************************************************");
            for (var index = 0; index < list.length; index++) {
                var e = list[index];
                // console.log("订单uuid", e.uuid, e.position);
            }
            // console.log("***************************************************");
            return list;
        };
        //获取合作者订单
        OrderModel.prototype.getCooperationOrderList = function () {
            // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
            for (var index = 0; index < this.cooperateOrderList.length; index++) {
                var element = this.cooperateOrderList[index];
                // console.log("订单uuid", element.uuid);
            }
            // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
            return this.cooperateOrderList;
        };
        OrderModel.prototype.sortOrderFunc = function (a, b) {
            if (a.position !== b.position) {
                return b.position - a.position;
            }
            else {
                return a.lastTime - b.lastTime;
            }
        };
        /**
         * 通过服务器唯一id移除
         * @param uuid 服务器唯一id
         */
        OrderModel.prototype.removeOrderData = function (uuid) {
            var data = this.orderUUidDict.getValue(uuid);
            if (data) {
                this.orderDict.remove(data.id);
                this.orderUUidDict.remove(uuid);
                // console.log(format("移除订单uuid={0},id={1}", uuid, data.id));
                this.deleteOrderUUidList.add(data.uuid, data);
            }
            var index = this.orderList.indexOf(data);
            if (index >= 0) {
                this.orderList.splice(index, 1);
            }
            index = this.cooperateOrderList.indexOf(data);
            if (index >= 0) {
                this.cooperateOrderList.splice(index, 1);
            }
            return data;
        };
        /**根据服务器的订单数据格式化本地 */
        OrderModel.prototype.addOrderData = function (msg) {
            var _this = this;
            var data = this.getDeleteDataByUUid(msg.uuid);
            var otherInto = false;
            if (data == null) {
                data = new Games.OrderData();
                // console.log("订单数据", msg.uuid, msg.lastTime, msg.position, msg.delFlag);
            }
            else {
                if (data.isCooperationOrder == false && msg.entityId == User.info.entityId) {
                    data.items = msg.items;
                    if (data.isCooperationOrder) {
                        var item = Game.config.item.getConfig(data.cooperationOrderItem.itemId);
                        Game.system.toastMsg(MsgKey.cooperative_order_notice, Game.moduleModel.cooperation.partnerInfData.name, data.cooperationOrderItem.amount, item.name);
                    }
                }
            }
            data.uuid = msg.uuid;
            data.id = msg.orderId;
            data.items = msg.items;
            data.lastTime = msg.lastTime;
            data.deleteFlag = msg.delFlag;
            data.position = msg.position;
            data.entityId = msg.entityId;
            //添加到集合中
            this.orderDict.add(data.id, data);
            this.orderUUidDict.add(data.uuid, data);
            setTimeout(function () {
                //合作者
                data.isCooperation = msg.entityId != User.info.entityId;
                // console.log("订单entity Id", msg.entityId, "自己的entityId", User.info.entityId);
                //
                if (data.isCooperation) {
                    if (_this.cooperateOrderList.indexOf(data) == -1) {
                        _this.cooperateOrderList.push(data);
                    }
                }
                else {
                    if (_this.orderList.indexOf(data) == -1) {
                        _this.orderList.push(data);
                    }
                }
                _this.isOrder = false;
                data.clearTime();
                if (data.position != -1) {
                    if (data.deleteFlag == true) {
                        data.startDelTime(function (uuid) { _this.endTimeOrder(uuid); });
                    }
                    else {
                        data.startExpiredTime(function (uuid) { _this.endTimeOrder(uuid); });
                    }
                }
            }, 200);
            return data;
        };
        OrderModel.prototype.endTimeOrder = function (uuid) {
            clearTimeout(this.timeOutDealHandler);
            this.timeOutDealHandler = setTimeout(function () { Game.protosender.manageOrder.DealOrder(); }, 2000);
            this.removeOrderData(uuid);
        };
        OrderModel.prototype.getDeleteDataByUUid = function (uuid) {
            var data = this.deleteOrderUUidList.getValue(uuid);
            if (data == null) {
                data = this.getOrderDataByUUid(uuid);
            }
            return data;
        };
        Object.defineProperty(OrderModel.prototype, "cooperateRedNum", {
            get: function () {
                var num = 0;
                var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Spread);
                if (isBuild) {
                    var list = this.getCooperationOrderList();
                    num = list.length;
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderModel.prototype, "oldOrderUUids", {
            //获取老的订单
            get: function () {
                var list = [];
                for (var index = 0; index < this.cooperateOrderList.length; index++) {
                    var element = this.cooperateOrderList[index];
                    list.push(element.uuid);
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OrderModel.prototype, "redNum", {
            //红点数量
            get: function () {
                var num = 0;
                var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Sale);
                if (isBuild) {
                    var list = this.getCurrrentOrderList();
                    for (var index = 0; index < list.length; index++) {
                        var element = list[index];
                        if (element.isRemoved() == false) {
                            if (element.isAllComplete) {
                                num++;
                            }
                            else {
                                if (element.isCanPut) {
                                    num++;
                                }
                            }
                        }
                    }
                    var status_1 = 0;
                    var progress = 0;
                    var data = Game.moduleModel.progressBox.getProgressBoxData(EProgressBoxId.manageOrder);
                    if (data) {
                        status_1 = data.staus;
                        progress = data.progress;
                    }
                    //更新宝箱状态
                    for (var index = 0; index < this.progressBox.length; index++) {
                        var needOrderNum = this.progressBox[index];
                        if (progress >= needOrderNum) {
                            //判断是否已经领取， 5 2进制101 表示1 3宝箱被领取
                            var result = (status_1 >> index) & 1;
                            if (result) {
                                //已经领取
                            }
                            else {
                                //没有领取
                                num++;
                            }
                        }
                        else {
                            //没有到达进度领取条件
                        }
                    }
                }
                return num;
            },
            enumerable: true,
            configurable: true
        });
        //
        OrderModel.prototype.getIsFinishedPutNum = function () {
            var orderDataList = this.getCurrrentOrderList();
            for (var index = 0; index < orderDataList.length; index++) {
                var element = orderDataList[index];
                if (element.isAllComplete) {
                    return element.items.length;
                }
            }
            for (var index = 0; index < orderDataList.length; index++) {
                var element = orderDataList[index];
                if (element.isCanPut) {
                    return element.items.length;
                }
            }
            return 0;
        };
        return OrderModel;
    }(Games.MModel));
    Games.OrderModel = OrderModel;
})(Games || (Games = {}));
//# sourceMappingURL=OrderModel.js.map