var Games;
(function (Games) {
    /**
     * 统计数据
     */
    var StaticMessage = /** @class */ (function () {
        function StaticMessage() {
            this.game_id = 1116;
            this.area_id = 9999;
            this.uid = "1"; // 用户ID
            this.time = "";
            this.cash = 0;
            this.coin = 0;
            this.level = 1;
            this.rtime = "";
            this.act = "";
            this.tid = "";
            this.item = "";
            this.value = 2;
            this.value2 = 1;
            if (Games.ChannelManager.getInstance().serverItem
                && Games.ChannelManager.getInstance().serverItem.staticGameId
                && Games.ChannelManager.getInstance().serverItem.staticGameId > 0) {
                this.game_id = Games.ChannelManager.getInstance().serverItem.staticGameId;
            }
        }
        return StaticMessage;
    }());
    Games.StaticMessage = StaticMessage;
})(Games || (Games = {}));
//# sourceMappingURL=StaticMessage.js.map