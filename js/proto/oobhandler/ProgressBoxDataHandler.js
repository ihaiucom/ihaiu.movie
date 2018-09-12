/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ProgressBoxDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                // Game.moduleModel.progressBox.removeOrderData(uuid);
                break;
            default:
                var data = Game.moduleModel.progressBox.addProgressBoxData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ProgressBoxDataHandler.js.map