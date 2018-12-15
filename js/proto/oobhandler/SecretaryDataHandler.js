/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.SecretaryDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                // Game.moduleModel.progressBox.removeOrderData(uuid);
                break;
            default:
                Game.moduleModel.secretary.addSecretaryByProto(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=SecretaryDataHandler.js.map