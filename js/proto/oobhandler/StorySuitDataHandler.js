/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.StorySuitDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                Game.moduleModel.story.removeStorySuitData(uuid);
                break;
            default:
                Game.moduleModel.story.addStorySuitByProto(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=StorySuitDataHandler.js.map