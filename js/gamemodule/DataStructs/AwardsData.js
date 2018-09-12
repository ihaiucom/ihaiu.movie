var Games;
(function (Games) {
    var AwardsData = /** @class */ (function () {
        function AwardsData() {
        }
        Object.defineProperty(AwardsData.prototype, "name", {
            get: function () {
                return Game.config.msg.getConfig(AwardsData.namelist[this.type]).notice;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AwardsData.prototype, "winner", {
            get: function () {
                if (this.listCandidate == null || this.winnerIndex == null || this.winnerIndex < 0 || this.winnerIndex >= this.listCandidate.length) {
                    return null;
                }
                var winner = this.listCandidate[this.winnerIndex];
                return winner;
            },
            enumerable: true,
            configurable: true
        });
        AwardsData.Create = function (type, listCandidate, winnerIndex) {
            var awards = new AwardsData();
            awards.type = type;
            awards.listCandidate = listCandidate || [];
            awards.winnerIndex = winnerIndex || 0;
            return awards;
        };
        AwardsData.namelist = [0, 1085, 1086, 1087, 1088, 1089];
        return AwardsData;
    }());
    Games.AwardsData = AwardsData;
})(Games || (Games = {}));
//# sourceMappingURL=AwardsData.js.map