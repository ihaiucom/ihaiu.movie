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
    var BusinessModel = /** @class */ (function (_super) {
        __extends(BusinessModel, _super);
        function BusinessModel() {
            return _super.call(this) || this;
        }
        BusinessModel.prototype.getBusinessData = function () {
            return this.businessData;
        };
        /**
         * 根据服务器传的信息解析
         * @param msg 数据
         */
        BusinessModel.prototype.addBusinessData = function (msg) {
            if (this.businessData == null) {
                this.businessData = new Games.BusinessData();
            }
            this.businessData.uuid = msg.uuid;
            this.businessData.id = msg.businessId;
            this.businessData.dailyCount = msg.dailyCount;
            this.businessData.lineLimit = msg.lineLimit;
            this.businessData.lastResetTime = msg.lastResetTime;
            this.businessData.lastUpdateTime = msg.lastUpdateTime;
            this.businessData.startToMaxTime();
            this.businessData.startResetDailyCountTime();
            return this.businessData;
        };
        Object.defineProperty(BusinessModel.prototype, "isRed", {
            get: function () {
                var b = false;
                var isBuild = Game.moduleModel.building.hasBuildByType(Games.RoomType.Office);
                if (isBuild) {
                    if (this.businessData) {
                        b = this.businessData.isMax;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        return BusinessModel;
    }(Games.MModel));
    Games.BusinessModel = BusinessModel;
})(Games || (Games = {}));
//# sourceMappingURL=BusinessModel.js.map