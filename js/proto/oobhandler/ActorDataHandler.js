var Games;
(function (Games) {
    Games.ProtoOobHandler.ActorDataHandler = function (msg, ops, uuid) {
        var isAdd = false;
        var preHide = false;
        if (Game.moduleModel.actor.hasActor(msg.actorId) == false) {
            isAdd = true;
        }
        else {
            var preData = Game.moduleModel.actor.getActor(msg.actorId);
            if (preData) {
                preHide = preData.hide;
            }
        }
        var data = Game.moduleModel.actor.addActorData(msg);
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
        console.log("艺人更新：", ops, msg.actorId);
        if (isAdd) {
            Game.moduleModel.actor.sAddActorList.dispatch(data);
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_4_NoseActor);
            // if (Game.moduleModel.actor.getAllActorLen() == 1)
            // {
            // 	Game.guide.finishInitActor();
            // }
        }
        else {
            if (preHide != data.hide) {
                Game.event.dispatch(GameEventKey.GameEventKey_UpdateActorHideInfo, data);
            }
            Game.moduleModel.actor.sUpdateActorInfo.dispatch(data);
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_3_UpgradeActor);
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ActorDataHandler.js.map