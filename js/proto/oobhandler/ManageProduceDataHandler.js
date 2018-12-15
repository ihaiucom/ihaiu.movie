var Games;
(function (Games) {
    Games.ProtoOobHandler.ManageProduceDataHandler = function (msg, ops, uuid) {
        var data = Game.moduleModel.produce.addProduceData(msg, uuid);
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
//# sourceMappingURL=ManageProduceDataHandler.js.map