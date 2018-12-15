/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.PlayerCooperateDataHandler = function (msg, ops, uuid) {
        // 上次请求时间
        Game.moduleModel.cooperation.updatePlayerCooperateData(msg, ops, uuid);
    };
})(Games || (Games = {}));
//# sourceMappingURL=PlayerCooperateDataHandler.js.map