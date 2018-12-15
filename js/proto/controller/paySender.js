/////////////////////////////////////
// ihaiu.ExportProto生成
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
var Games;
(function (Games) {
    /**
     *
     */
    var paySender = /** @class */ (function (_super) {
        __extends(paySender, _super);
        function paySender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.pay;
            _this.holdOrderTime = 0;
            _this.isLoginOver = false;
            _this.finishList = new Array();
            return _this;
        }
        /**
         *
         * @param id   商品id
         * @param amount   数量
         */
        paySender.prototype.StartOrder = function (id, amount) {
            if (Game.time.localTime - this.holdOrderTime < 500) {
                return;
            }
            this.holdOrderTime = Game.time.localTime;
            if (Game.localStorage.isGuest) {
                Game.system.alrtTextFull(Games.TEXT.cannotRecharge, Games.TEXT.systemTip);
                return;
            }
            if (!BrowserDetect.isIOS) {
                Game.system.alrtTextFull(Games.TEXT.cannotRechargeNoIos, Games.TEXT.systemTip);
                return;
            }
            fairygui.GRoot.inst.showModalWait();
            var req = new Proto.API.pay.StartOrderRequest();
            req.id = id;
            req.amount = amount;
            this.send(req);
        };
        /**
         *  完成订单
         * @param orderId
         * @param result
         */
        paySender.prototype.FinishOrder = function (orderId, result) {
            if (!this.isLoginOver) {
                var item = new lastOrderForFinish();
                item.orderId = orderId;
                item.result = result;
                this.finishList.push(item);
                return;
            }
            var req = new Proto.API.pay.FinishOrderRequest();
            req.orderId = orderId;
            req.result = result;
            this.send(req);
        };
        paySender.prototype.FinishOrderForLast = function () {
            this.isLoginOver = true;
            if (this.finishList.length > 0) {
                for (var index = 0; index < this.finishList.length; index++) {
                    this.FinishOrder(this.finishList[index].orderId, this.finishList[index].result);
                }
                this.finishList = new Array();
            }
        };
        return paySender;
    }(Games.ProtoSender));
    Games.paySender = paySender;
    var lastOrderForFinish = /** @class */ (function () {
        function lastOrderForFinish() {
        }
        return lastOrderForFinish;
    }());
    Games.lastOrderForFinish = lastOrderForFinish;
})(Games || (Games = {}));
//# sourceMappingURL=paySender.js.map