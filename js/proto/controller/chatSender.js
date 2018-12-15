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
     *
     */
    var chatSender = /** @class */ (function (_super) {
        __extends(chatSender, _super);
        function chatSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.chat;
            return _this;
        }
        /**
         *  新消息通知
         * @param channel
         */
        chatSender.prototype.MessageNotice = function (channel) {
            var req = new Proto.API.chat.MessageNoticeRequest();
            req.channel = channel;
            this.send(req);
        };
        /**
         *  主页面新消息通知
         */
        chatSender.prototype.NewMessage = function () {
            var req = new Proto.API.chat.NewMessageRequest();
            this.send(req);
        };
        /**
         *  各个频道消息
         */
        chatSender.prototype.AllMessage = function () {
            var req = new Proto.API.chat.AllMessageRequest();
            this.send(req);
        };
        /**
         *  发送信息
         * @param message   信息
         * @param recipient   接收者
         * @param roomId   房间号，如果是世界频道，不判断该字段
         * @param channel   频道
         */
        chatSender.prototype.SendMessage = function (message, recipient, roomId, channel) {
            var req = new Proto.API.chat.SendMessageRequest();
            req.message = message;
            req.recipient = recipient;
            req.roomId = roomId;
            req.channel = channel;
            this.send(req);
        };
        /**
         *  拉取消息
         * @param channel   频道
         * @param roomId   房间号，如果是世界频道，不判断该字段
         * @param messageId   0：新消息，非0：旧消息
         */
        chatSender.prototype.PullMessage = function (channel, roomId, messageId) {
            var req = new Proto.API.chat.PullMessageRequest();
            req.channel = channel;
            req.roomId = roomId;
            req.messageId = messageId;
            this.send(req);
        };
        /**
         *  屏蔽玩家
         * @param userId   玩家id
         */
        chatSender.prototype.Sheielding = function (userId) {
            var req = new Proto.API.chat.SheieldingRequest();
            req.userId = userId;
            this.send(req);
        };
        /**
         *  解除屏蔽
         * @param userId   玩家id
         */
        chatSender.prototype.ReleaseShield = function (userId) {
            var req = new Proto.API.chat.ReleaseShieldRequest();
            req.userId = userId;
            this.send(req);
        };
        /**
         *  招募集团
         */
        chatSender.prototype.recruit = function () {
            var req = new Proto.API.chat.recruitRequest();
            this.send(req);
        };
        return chatSender;
    }(Games.ProtoSender));
    Games.chatSender = chatSender;
})(Games || (Games = {}));
//# sourceMappingURL=chatSender.js.map