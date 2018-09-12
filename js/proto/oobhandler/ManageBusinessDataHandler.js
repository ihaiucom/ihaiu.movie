/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ManageBusinessDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                break;
            default:
                var data = Game.moduleModel.business.addBusinessData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ManageBusinessDataHandler.js.map