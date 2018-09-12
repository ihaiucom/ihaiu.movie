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
    var manageBusinessSender = /** @class */ (function (_super) {
        __extends(manageBusinessSender, _super);
        function manageBusinessSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageBusiness;
            return _this;
        }
        /**
         * 领取收益
         */
        manageBusinessSender.prototype.GetReward = function () {
            var req = new Proto.API.manageBusiness.GetRewardRequest();
            this.send(req);
        };
        return manageBusinessSender;
    }(Games.ProtoSender));
    Games.manageBusinessSender = manageBusinessSender;
})(Games || (Games = {}));
//# sourceMappingURL=manageBusinessSender.js.map