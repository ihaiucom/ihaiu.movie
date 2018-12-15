var Games;
(function (Games) {
    var ActorLevelData = /** @class */ (function () {
        function ActorLevelData() {
        }
        /**
         *
         * @param id 数据
         * @param lv
         */
        ActorLevelData.prototype.update = function (id, lv) {
            this.id = id;
            this.lv = lv;
            var actorConfig = Game.config.actorLevel.getConfig(lv);
            if (actorConfig) {
                this.cost = actorConfig.cost;
            }
        };
        return ActorLevelData;
    }());
    Games.ActorLevelData = ActorLevelData;
})(Games || (Games = {}));
//# sourceMappingURL=ActorLevelData.js.map