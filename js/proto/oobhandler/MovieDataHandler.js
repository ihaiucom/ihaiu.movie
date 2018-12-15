var Games;
(function (Games) {
    // 拍摄过程获取的更新协议
    Games.ProtoOobHandler.MovieDataHandler = function (msg, ops, uuid) {
        if (ops === EGameDataOps.remove) {
            if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null && Game.moduleModel.warData.moveData.uuid === msg.uuid) {
                Game.moduleModel.warData.delFimingMove();
            }
            for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                if (Game.moduleModel.warData.movieDataList[i].uuid === uuid) {
                    Game.moduleModel.warData.movieDataList.splice(i, 1);
                    break;
                }
            }
            Game.moduleModel.warData.endingIncome(uuid);
        }
        else if (msg && msg !== null) {
            if (Game.moduleModel.warData.moveData && Game.moduleModel.warData.moveData !== null && msg.state === EMovieState.contineTransceiver) {
                if (Game.moduleModel.warData.moveData.uuid === msg.uuid) {
                    Game.moduleModel.warData.moveJieSuanData = msg;
                }
            }
            if (msg.state === EMovieState.contineTransceiver) {
                var have = false;
                for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                    if (Game.moduleModel.warData.movieDataList[i].uuid === msg.uuid) {
                        Game.moduleModel.warData.movieDataList[i] = msg;
                        have = true;
                        break;
                    }
                }
                if (!have) {
                    Game.moduleModel.warData.movieDataList.push(msg);
                }
                // 排序运营中的电影
                Game.moduleModel.warData.movieDataList = Game.moduleModel.warData.movieDataList.sort(function (a, b) { return a.startTime - b.startTime; });
                Game.moduleModel.warData.endingIncome();
                //更新任务进度
                Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_13_ChooseFocusPointCity);
            }
            else {
                Game.moduleModel.warData.moveData = msg;
                // 断网重连，刷新UI界面
                if (Game.proto.isNeedReGetLoginGameData) {
                    Game.moduleModel.warData.sReGetLoginGameData.dispatch();
                }
                //拍摄状态变化
                Game.event.dispatch(GameEventKey.GameEventKey_FilmStoryStateChange, msg.state);
            }
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=MovieDataHandler.js.map