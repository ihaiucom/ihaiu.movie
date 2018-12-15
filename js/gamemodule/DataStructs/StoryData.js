var Games;
(function (Games) {
    var StoryData = /** @class */ (function () {
        function StoryData() {
            //是否是金本
            this.isGold = false;
        }
        Object.defineProperty(StoryData.prototype, "storyProgressInfo", {
            get: function () {
                return this._storyProgressInfo;
            },
            set: function (value) {
                this._storyProgressInfo = value;
                var isGold = true;
                for (var index = 0; index < this.storyProgressInfo.length; index++) {
                    var element = this.storyProgressInfo[index];
                    //
                    if (element.status != EStoryModule.finish) {
                        isGold = false;
                    }
                }
                this.isGold = isGold;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryData.prototype, "id", {
            get: function () {
                return this._id;
            },
            /**
             * 剧本id
             */
            set: function (value) {
                this._id = value;
                this.config = Game.config.story.getConfig(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoryData.prototype, "isFinish", {
            get: function () {
                return this.status == EStoryModule.finish;
            },
            enumerable: true,
            configurable: true
        });
        return StoryData;
    }());
    Games.StoryData = StoryData;
})(Games || (Games = {}));
//# sourceMappingURL=StoryData.js.map