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
     * 经营会议
     */
    var manageMeetingSender = /** @class */ (function (_super) {
        __extends(manageMeetingSender, _super);
        function manageMeetingSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.manageMeeting;
            return _this;
        }
        /**
         * 领取收益
         * @param type
         */
        manageMeetingSender.prototype.GetReward = function (type) {
            var req = new Proto.API.manageMeeting.GetRewardRequest();
            req.type = type;
            this.send(req);
        };
        /**
         * 加价
         * @param type  1 50% 2 200%
         */
        manageMeetingSender.prototype.Markup = function (type) {
            var req = new Proto.API.manageMeeting.MarkupRequest();
            req.type = type;
            this.send(req);
        };
        return manageMeetingSender;
    }(Games.ProtoSender));
    Games.manageMeetingSender = manageMeetingSender;
})(Games || (Games = {}));
//# sourceMappingURL=manageMeetingSender.js.map