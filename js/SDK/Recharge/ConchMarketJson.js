var Games;
(function (Games) {
    var ConchMarketJson = /** @class */ (function () {
        function ConchMarketJson() {
            //服务器验证地址 (单机版设置空字符串)
            this.callback_uri = "http://172.16.52.101:3000/pay/Apple";
            if (Games.ChannelManager.getInstance().serverItem && Games.ChannelManager.getInstance().serverItem.marketVerifyUrl) {
                this.callback_uri = Games.ChannelManager.getInstance().serverItem.marketVerifyUrl;
            }
        }
        ConchMarketJson.prototype.toJson = function () {
            return JSON.stringify(this);
        };
        return ConchMarketJson;
    }());
    Games.ConchMarketJson = ConchMarketJson;
})(Games || (Games = {}));
//# sourceMappingURL=ConchMarketJson.js.map