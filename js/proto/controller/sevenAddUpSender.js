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
     *  七日礼包

     */
    var sevenAddUpSender = /** @class */ (function (_super) {
        __extends(sevenAddUpSender, _super);
        function sevenAddUpSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.sevenAddUp;
            return _this;
        }
        /**
         * 领取收益
         * @param uuid  唯一编号
         * @param gear
         */
        sevenAddUpSender.prototype.GetReward = function (uuid, gear) {
            var req = new Proto.API.sevenAddUp.GetRewardRequest();
            req.uuid = uuid;
            req.gear = gear;
            this.send(req);
        };
        /**
         *  跨天触发
         */
        sevenAddUpSender.prototype.Touch = function () {
            var req = new Proto.API.sevenAddUp.TouchRequest();
            this.send(req);
        };
        return sevenAddUpSender;
    }(Games.ProtoSender));
    Games.sevenAddUpSender = sevenAddUpSender;
})(Games || (Games = {}));
//# sourceMappingURL=sevenAddUpSender.js.map