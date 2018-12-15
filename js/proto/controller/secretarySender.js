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
    var secretarySender = /** @class */ (function (_super) {
        __extends(secretarySender, _super);
        function secretarySender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.secretary;
            return _this;
        }
        /**
         *  领取奖励
         */
        secretarySender.prototype.GetDailyReward = function () {
            var req = new Proto.API.secretary.GetDailyRewardRequest();
            this.send(req);
        };
        /**
         *
         * @param key   操作哪一个模块小秘书
         * @param type   0关闭 1开启
         */
        secretarySender.prototype.OpenSecretary = function (key, type) {
            var req = new Proto.API.secretary.OpenSecretaryRequest();
            req.key = key;
            req.type = type;
            this.send(req);
        };
        /**
         *  申请拍摄许可证
         */
        secretarySender.prototype.ApplyMovieLicence = function () {
            var req = new Proto.API.secretary.ApplyMovieLicenceRequest();
            this.send(req);
        };
        /**
         *  领取拍摄许可证
         */
        secretarySender.prototype.RewardMovieLicence = function () {
            var req = new Proto.API.secretary.RewardMovieLicenceRequest();
            this.send(req);
        };
        return secretarySender;
    }(Games.ProtoSender));
    Games.secretarySender = secretarySender;
})(Games || (Games = {}));
//# sourceMappingURL=secretarySender.js.map