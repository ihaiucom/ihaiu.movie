var Games;
(function (Games) {
    var ServerRewardItemData = /** @class */ (function () {
        function ServerRewardItemData(rank, rewardList) {
            this.rank = rank;
            this.rewardList = [];
            for (var index = 0; index < rewardList.length; index++) {
                var reward = rewardList[index];
                var item = Games.ItemData.Create(reward.itemId, reward.itemNum);
                this.rewardList.push(item);
            }
        }
        Object.defineProperty(ServerRewardItemData.prototype, "stringRank", {
            get: function () {
                if (this.rank.length >= 2 && this.rank[0] == this.rank[1]) {
                    return this.rank[0].toString();
                }
                return this.rank.join("~");
            },
            enumerable: true,
            configurable: true
        });
        return ServerRewardItemData;
    }());
    Games.ServerRewardItemData = ServerRewardItemData;
})(Games || (Games = {}));
//# sourceMappingURL=ServerRewardItemData.js.map