var Games;
(function (Games) {
    var StoryData = /** @class */ (function () {
        function StoryData() {
        }
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