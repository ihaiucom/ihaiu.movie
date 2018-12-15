/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.TaskDataHandler = function (msg, ops, uuid) {
        console.log("任务数据:" + JSON.stringify(msg));
        if (msg) {
            switch (msg.type) {
                // 日常
                case EAchievementType.daily:
                    // console.log("日常协议数据:" + JSON.stringify(msg));
                    Game.moduleModel.mission.setData(msg);
                    break;
            }
        }
        switch (ops) {
            case EGameDataOps.remove:
                Game.moduleModel.task.removeTaskDataByUUid(uuid);
                break;
            default:
                //更新	
                Game.moduleModel.task.addTaskDataByProto(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=TaskDataHandler.js.map