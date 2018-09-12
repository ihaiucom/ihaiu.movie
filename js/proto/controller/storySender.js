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
    var storySender = /** @class */ (function (_super) {
        __extends(storySender, _super);
        function storySender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.story;
            return _this;
        }
        /**
         * 搜罗剧本
         */
        storySender.prototype.findStory = function () {
            var req = new Proto.API.story.findStoryRequest();
            this.send(req);
        };
        /**
         * 清除搜罗时间
         */
        storySender.prototype.cleanFindStory = function () {
            var req = new Proto.API.story.cleanFindStoryRequest();
            this.send(req);
        };
        /**
         * 领取剧本组奖励
         * @param storySuitId  剧本组ID
         */
        storySender.prototype.getReward = function (storySuitId) {
            var req = new Proto.API.story.getRewardRequest();
            req.storySuitId = storySuitId;
            this.send(req);
        };
        //获取留言
        storySender.prototype.getMessage = function (storyId) {
            var req = new Proto.API.story.GetMessageRequest();
            req.stroyId = storyId;
            this.send(req);
        };
        //留言
        storySender.prototype.setMessage = function (storyId, content) {
            var req = new Proto.API.story.SetMessageRequest();
            req.stroyId = storyId;
            req.content = content;
            this.send(req);
        };
        /**
         *  获取剧本留言信息
         * @param stroyId  剧本ID
         */
        storySender.prototype.GetMessage = function (stroyId) {
            var req = new Proto.API.story.GetMessageRequest();
            req.stroyId = stroyId;
            this.send(req);
        };
        /**
         *  剧本留言
         * @param stroyId   剧本ID
         * @param content   内容
         */
        storySender.prototype.SetMessage = function (stroyId, content) {
            var req = new Proto.API.story.SetMessageRequest();
            req.stroyId = stroyId;
            req.content = content;
            this.send(req);
        };
        return storySender;
    }(Games.ProtoSender));
    Games.storySender = storySender;
})(Games || (Games = {}));
//# sourceMappingURL=storySender.js.map