/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.GoldExchangeHandler = function (msg, ops, uuid) {
        console.log("兑换次数更新", msg.count);
        User.goldExchangeCount = msg.count;
    };
})(Games || (Games = {}));
//# sourceMappingURL=GoldExchangeHandler.js.map