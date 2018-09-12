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
        var OrderTargetItem = /** @class */ (function (_super) {
            __extends(OrderTargetItem, _super);
            function OrderTargetItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                //
                _this.preOrderUUid = "";
                //
                _this.duration = 0;
                return _this;
            }
            OrderTargetItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            /**
             *
             * @param data
             */
            OrderTargetItem.prototype.updateView = function (data) {
                this.orderData = data;
                this.clearTime();
                if (this.orderData) {
                    this.m_c2.selectedIndex = 1;
                    //已经删除
                    if (this.orderData.deleteFlag) {
                        this.m_c1.selectedIndex = 1;
                        this.m_c2.selectedIndex = 0;
                        this.m_c4.selectedIndex = 0;
                        this.duration = Game.time.getSubSecondsAfter(this.orderData.delTime);
                    }
                    else {
                        this.m_headIcon.m_icon.icon = Game.config.avatar.getConfig(this.orderData.config.icon).iconUrl;
                        var isFirst = isNullOrEmpty(this.preOrderUUid);
                        if (this.preOrderUUid != this.orderData.uuid && isFirst == false) {
                            this.m_c1.selectedIndex = 1;
                            this.m_c2.selectedIndex = 0;
                            this.m_c4.selectedIndex = 0;
                            this.duration = 2;
                        }
                        else {
                            if (this.orderData.isCooperation) {
                                //合作订单
                                if (this.orderData.isCooperationOrder) {
                                    this.m_c2.selectedIndex = 1;
                                }
                                else {
                                    this.m_c2.selectedIndex = 0;
                                }
                            }
                            else {
                                //非合作订单
                                if (this.orderData.isAllComplete) {
                                    this.m_c2.selectedIndex = 1;
                                }
                                else {
                                    if (this.orderData.isCanPut) {
                                        this.m_c2.selectedIndex = 1;
                                    }
                                    else {
                                        this.m_c2.selectedIndex = 0;
                                    }
                                }
                            }
                            this.m_c1.selectedIndex = this.orderData.config.quality;
                            this.m_c4.selectedIndex = 1;
                            this.duration = Game.time.getSubSecondsAfter(this.orderData.expiredTime);
                        }
                    }
                    if (this.duration > 0) {
                        Laya.timer.loop(1000, this, this.updateTime, null, false);
                        this.visible = true;
                        this.preOrderUUid = this.orderData.uuid;
                    }
                    else {
                        this.preOrderUUid = "";
                        this.visible = false;
                        this.duration = 0;
                    }
                    this.updateTimeView(this.duration);
                }
                else {
                    this.preOrderUUid = "";
                    this.visible = false;
                }
            };
            /**
             * 更新时间
             */
            OrderTargetItem.prototype.updateTime = function () {
                if (this.duration > 0) {
                    this.duration--;
                    this.updateTimeView(this.duration);
                }
                else {
                    if (this.orderData.deleteFlag) {
                        this.preOrderUUid = "";
                        this.visible = false;
                        this.clearTime();
                    }
                    else {
                        this.updateView(this.orderData);
                    }
                }
            };
            /**
             * 更新倒计时
             * @param duration
             */
            OrderTargetItem.prototype.updateTimeView = function (duration) {
                this.m_time.text = Games.TimeHelper.TimeFormat3(duration);
            };
            OrderTargetItem.prototype.clearTime = function () {
                Laya.timer.clear(this, this.updateTime);
            };
            OrderTargetItem.prototype.clearFlag = function () {
                this.preOrderUUid = "";
                this.clearTime();
            };
            return OrderTargetItem;
        }(Manage.OrderTargetItemStruct));
        Manage.OrderTargetItem = OrderTargetItem;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OrderTargetItem.js.map