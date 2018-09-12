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
     *  日常签到

     */
    var dailySignSender = /** @class */ (function (_super) {
        __extends(dailySignSender, _super);
        function dailySignSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.dailySign;
            return _this;
        }
        /**
         *  签到
         */
        dailySignSender.prototype.sign = function () {
            var req = new Proto.API.dailySign.signRequest();
            this.send(req);
        };
        return dailySignSender;
    }(Games.ProtoSender));
    Games.dailySignSender = dailySignSender;
})(Games || (Games = {}));
//# sourceMappingURL=dailySignSender.js.map