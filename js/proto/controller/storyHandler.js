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
    var storyHandler = /** @class */ (function (_super) {
        __extends(storyHandler, _super);
        function storyHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.story;
            return _this;
        }
        /**
         * 搜罗剧本
         */
        storyHandler.prototype.findStory = function (msg) {
            // if (msg.type == 1)
            // {
            // 	Game.system.openRewardStory(msg.id, msg.num, TEXT.StoryRewardTitle);
            // }
            // else
            // {
            // 	let item: DTItemNum = new DTItemNum();
            // 	item.itemId = msg.id;
            // 	item.itemNum = msg.num;
            // 	Game.system.openAwardsAlert([item], TEXT.StoryRewardTitle);
            // }
        };
        /**
         * 清除搜罗时间
         */
        storyHandler.prototype.cleanFindStory = function (msg) {
            if (msg.result == 0) {
                Game.system.toastMsg(MsgKey.story_cd_success);
            }
        };
        /**
         * 领取剧本组奖励
         */
        storyHandler.prototype.getReward = function (msg) {
            if (msg.result == 0) {
                var config = Game.config.storyStackSort.getConfig(msg.storySuitId);
                if (config) {
                    var items = config.rewards;
                    Game.system.openAwardsAlert(items, Games.TEXT.StoryRewardTitle);
                }
            }
        };
        /**
         *  获取剧本留言信息
         */
        storyHandler.prototype.GetMessage = function (msg) {
        };
        /**
         *  剧本留言
         */
        storyHandler.prototype.SetMessage = function (msg) {
        };
        return storyHandler;
    }(Games.ProtoHandler));
    Games.storyHandler = storyHandler;
})(Games || (Games = {}));
//# sourceMappingURL=storyHandler.js.map