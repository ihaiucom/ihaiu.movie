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
     *  小秘书

     */
    var secretaryHandler = /** @class */ (function (_super) {
        __extends(secretaryHandler, _super);
        function secretaryHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.secretary;
            return _this;
        }
        /**
         *  领取奖励
         */
        secretaryHandler.prototype.GetDailyReward = function (msg) {
            var config = Game.config.secretaryGift.getConfig(1001);
            if (config) {
                Game.system.getItemText(config.items);
            }
        };
        /**
         *
         */
        secretaryHandler.prototype.OpenSecretary = function (msg) {
        };
        /**
         *  申请拍摄许可证
         */
        secretaryHandler.prototype.ApplyMovieLicence = function (msg) {
        };
        /**
         *  领取拍摄许可证
         */
        secretaryHandler.prototype.RewardMovieLicence = function (msg) {
        };
        return secretaryHandler;
    }(Games.ProtoHandler));
    Games.secretaryHandler = secretaryHandler;
})(Games || (Games = {}));
//# sourceMappingURL=secretaryHandler.js.map