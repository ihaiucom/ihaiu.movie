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
    //====================
    // 消息处理器 -- 生产
    //--------------------
    var manageProduceHandler = /** @class */ (function (_super) {
        __extends(manageProduceHandler, _super);
        function manageProduceHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageProduce;
            return _this;
        }
        /**
        * 生产返回
        * @param resData
        */
        manageProduceHandler.prototype.Produce = function (resData) {
            console.log("[" + this.moduleName + "] Produce " + resData + " ");
        };
        /**
        * 领取物品返回
        * @param resData
        */
        manageProduceHandler.prototype.GetReward = function (resData) {
            console.log("[" + this.moduleName + "] GetReward  " + resData + " ");
        };
        /**
        * 生产升级返回
        * @param resData
        */
        manageProduceHandler.prototype.Uplevel = function (resData) {
            console.log("[" + this.moduleName + "] Uplevel " + resData + " ");
        };
        /**
        * 派遣艺人返回
        * @param resData
        */
        manageProduceHandler.prototype.SendActor = function (resData) {
            console.log("[" + this.moduleName + "] SendActor  " + resData + " ");
        };
        /**
        * 解锁生产返回
        * @param resData
        */
        manageProduceHandler.prototype.Deblocking = function (resData) {
            console.log("[" + this.moduleName + "] Deblocking  " + resData + " ");
        };
        /**
        * 一键领取
        * @param resData
        */
        manageProduceHandler.prototype.QuickGetReward = function (resData) {
            console.log("[" + this.moduleName + "] QuickGetReward  " + resData + " ");
        };
        /**
        * 一键生产
        * @param resData
        */
        manageProduceHandler.prototype.QuickProduce = function (resData) {
            console.log("[" + this.moduleName + "] QuickProduce  " + resData + " ");
        };
        /**
        * 清除倒计时
        * @param resData
        */
        manageProduceHandler.prototype.cleanTime = function (resData) {
            console.log("[" + this.moduleName + "] cleanTime  " + resData + " ");
        };
        return manageProduceHandler;
    }(Games.ProtoHandler));
    Games.manageProduceHandler = manageProduceHandler;
})(Games || (Games = {}));
//# sourceMappingURL=manageProduceHandler.js.map