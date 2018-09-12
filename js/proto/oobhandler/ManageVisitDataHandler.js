/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ManageVisitDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                break;
            default:
                var data = Game.moduleModel.visit.addVisitData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ManageVisitDataHandler.js.map