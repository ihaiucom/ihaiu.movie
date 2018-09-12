var Games;
(function (Games) {
    var StorySuitData = /** @class */ (function () {
        function StorySuitData() {
        }
        Object.defineProperty(StorySuitData.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
                this.config = Game.config.storyStackSort.getConfig(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorySuitData.prototype, "isCollect", {
            get: function () {
                var scripts = this.config.scripts;
                var b = true;
                for (var index = 0; index < scripts.length; index++) {
                    var element = scripts[index];
                    if (Game.moduleModel.story.hasStoryData(element) == false) {
                        b = false;
                        break;
                    }
                }
                return b;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorySuitData.prototype, "isGotReward", {
            get: function () {
                return this.status == EStoryModule.hadGet;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorySuitData.prototype, "isHasRewardCanGet", {
            get: function () {
                return (this.isCollect) && (this.isGotReward == false);
            },
            enumerable: true,
            configurable: true
        });
        return StorySuitData;
    }());
    Games.StorySuitData = StorySuitData;
})(Games || (Games = {}));
//# sourceMappingURL=StorySuitData.js.map