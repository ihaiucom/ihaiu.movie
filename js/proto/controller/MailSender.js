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
    // 消息发送器
    //--------------------
    var MailSender = /** @class */ (function (_super) {
        __extends(MailSender, _super);
        function MailSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Mail;
            return _this;
        }
        /**
         * 领取奖励
         * @param uuid
         */
        MailSender.prototype.MailGetReward = function (uuid) {
            var reqData = new Proto.API.Mail.MailGetRewardRequest();
            reqData.uuid = uuid;
            this.send(reqData);
        };
        /**
         * 删除邮件
         * @param uuid
         */
        MailSender.prototype.MailDelete = function (uuid) {
            var reqData = new Proto.API.Mail.MailDeleteRequest();
            reqData.uuid = uuid;
            this.send(reqData, false, false);
        };
        /**
         * 阅读邮件
         * @param uuid
         */
        MailSender.prototype.MailRead = function (uuid) {
            var reqData = new Proto.API.Mail.MailReadRequest();
            reqData.uuid = uuid;
            this.send(reqData, false, false);
        };
        /**
         *  批量领取邮件
         * @param uuid
         */
        MailSender.prototype.MailGetRewardMany = function (uuid) {
            var req = new Proto.API.Mail.MailGetRewardManyRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *  批量删除邮件
         * @param uuid
         */
        MailSender.prototype.MailDeleteMany = function (uuid) {
            var req = new Proto.API.Mail.MailDeleteManyRequest();
            req.uuid = uuid;
            this.send(req);
        };
        return MailSender;
    }(Games.ProtoSender));
    Games.MailSender = MailSender;
})(Games || (Games = {}));
//# sourceMappingURL=MailSender.js.map