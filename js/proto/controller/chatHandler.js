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
    var chatHandler = /** @class */ (function (_super) {
        __extends(chatHandler, _super);
        function chatHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.chat;
            return _this;
        }
        /**
         *  新消息通知
         */
        chatHandler.prototype.MessageNotice = function (msg) {
        };
        /**
         *  主页面新消息通知
         */
        chatHandler.prototype.NewMessage = function (msg) {
        };
        /**
         *  各个频道消息
         */
        chatHandler.prototype.AllMessage = function (msg) {
        };
        /**
         *  发送信息
         */
        chatHandler.prototype.SendMessage = function (msg) {
        };
        /**
         *  拉取消息
         */
        chatHandler.prototype.PullMessage = function (msg) {
        };
        /**
         *  屏蔽玩家
         */
        chatHandler.prototype.Sheielding = function (msg) {
        };
        /**
         *  解除屏蔽
         */
        chatHandler.prototype.ReleaseShield = function (msg) {
        };
        /**
         *  招募集团
         */
        chatHandler.prototype.recruit = function (msg) {
        };
        return chatHandler;
    }(Games.ProtoHandler));
    Games.chatHandler = chatHandler;
})(Games || (Games = {}));
//# sourceMappingURL=chatHandler.js.map