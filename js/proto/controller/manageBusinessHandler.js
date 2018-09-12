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
     * 运营公务
     */
    var manageBusinessHandler = /** @class */ (function (_super) {
        __extends(manageBusinessHandler, _super);
        function manageBusinessHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageBusiness;
            return _this;
        }
        /**
         * 领取收益
         */
        manageBusinessHandler.prototype.GetReward = function (msg) {
            if (Game.moduleModel.business.rewardId > 0) {
                var config = Game.config.business.getConfig(Game.moduleModel.business.rewardId);
                if (config) {
                    var otherItem = new DTItemNum();
                    otherItem.itemId = EItemId.expect;
                    otherItem.itemNum = config.expect;
                    var items = config.reward.concat();
                    items.push(otherItem);
                    Game.system.playEffects(items);
                }
            }
        };
        return manageBusinessHandler;
    }(Games.ProtoHandler));
    Games.manageBusinessHandler = manageBusinessHandler;
})(Games || (Games = {}));
//# sourceMappingURL=manageBusinessHandler.js.map