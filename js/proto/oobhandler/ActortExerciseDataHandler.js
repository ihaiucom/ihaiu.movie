/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ActortExerciseDataHandler = function (msg, ops, uuid) {
        var data = Game.moduleModel.actor.addActorExerciseData(msg, uuid);
        switch (ops) {
            case EGameDataOps.init:
                break;
            case EGameDataOps.add:
                break;
            case EGameDataOps.update:
                break;
            case EGameDataOps.remove:
                break;
            default:
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ActortExerciseDataHandler.js.map