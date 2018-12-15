var Games;
(function (Games) {
    var ActorTrainData = /** @class */ (function () {
        function ActorTrainData() {
            this.property = [];
            this.property_interval = [];
        }
        /**
         *
         * @param id 演员id
         * @param type
         * @param count
         */
        ActorTrainData.prototype.update = function (id, type, count) {
            this.property_interval.splice(0, this.property_interval.length);
            this.id = id;
            this.type = type;
            this.count = count;
            var tId = id * 100 + this.type;
            var actorConfig = Game.config.actor.getConfig(id);
            if (actorConfig) {
                this.actorTrainConfig = Game.config.actorTrain.getConfig(tId);
                if (this.actorTrainConfig) {
                    this.name = this.actorTrainConfig.name;
                    this.action = this.actorTrainConfig.action;
                    this.scene_name = this.actorTrainConfig.scene_name;
                    this.property = this.actorTrainConfig.property;
                    var star = actorConfig.starNum;
                    var actorTrainLvConfig = Game.config.actorTrainLv.getConfig(count);
                    if (actorTrainLvConfig) {
                        this.cost = actorTrainLvConfig.cost;
                        this.diamondsCost = actorTrainLvConfig.diamonds_cost;
                        for (var index = 0; index < this.property.length; index++) {
                            var element = this.property[index];
                            if (element == actorConfig.main_id) {
                                this.property_interval.push(actorTrainLvConfig["star" + star + "_main"]);
                            }
                            else {
                                this.property_interval.push(actorTrainLvConfig["star" + star + "_vice"]);
                            }
                        }
                    }
                }
            }
        };
        return ActorTrainData;
    }());
    Games.ActorTrainData = ActorTrainData;
})(Games || (Games = {}));
//# sourceMappingURL=ActorTrainData.js.map