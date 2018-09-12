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
    // 消息处理器
    //--------------------
    var MailHandler = /** @class */ (function (_super) {
        __extends(MailHandler, _super);
        function MailHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Mail;
            return _this;
        }
        /**
         * 领取奖励
         */
        MailHandler.prototype.MailGetReward = function (msg) {
            if (msg.dropout && msg.dropout.length > 0) {
                Game.system.getItemText(msg.dropout, null, null);
            }
        };
        /**
         * 删除邮件
         */
        MailHandler.prototype.MailDelete = function (msg) {
        };
        /**
         * 阅读邮件
         */
        MailHandler.prototype.MailRead = function (msg) {
        };
        /**
         *  批量领取邮件
         */
        MailHandler.prototype.MailGetRewardMany = function (msg) {
            if (msg.dropout && msg.dropout.length > 0) {
                Game.system.getItemText(msg.dropout, null, null);
            }
        };
        /**
         *  批量删除邮件
         */
        MailHandler.prototype.MailDeleteMany = function (msg) {
        };
        return MailHandler;
    }(Games.ProtoHandler));
    Games.MailHandler = MailHandler;
})(Games || (Games = {}));
//# sourceMappingURL=MailHandler.js.map