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
     * 运营探班
     */
    var manageVisitSender = /** @class */ (function (_super) {
        __extends(manageVisitSender, _super);
        function manageVisitSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageVisit;
            return _this;
        }
        /**
         * 开始探班
         */
        manageVisitSender.prototype.StartVisit = function () {
            var req = new Proto.API.manageVisit.StartVisitRequest();
            this.send(req);
        };
        /**
         * 领取收益
         */
        manageVisitSender.prototype.GetReward = function () {
            var req = new Proto.API.manageVisit.GetRewardRequest();
            this.send(req);
        };
        return manageVisitSender;
    }(Games.ProtoSender));
    Games.manageVisitSender = manageVisitSender;
})(Games || (Games = {}));
//# sourceMappingURL=manageVisitSender.js.map