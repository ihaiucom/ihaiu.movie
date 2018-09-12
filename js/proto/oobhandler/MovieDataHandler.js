var Games;
(function (Games) {
    // 拍摄过程获取的更新协议
    Games.ProtoOobHandler.MovieDataHandler = function (msg, ops, uuid) {
        if (ops === EGameDataOps.remove) {
            for (var i = 0; i < Game.moduleModel.warData.movieDataList.length; i++) {
                if (Game.moduleModel.warData.movieDataList[i].uuid === uuid) {
                    Game.moduleModel.warData.movieDataList.splice(i, 1);
                    break;
                }
            }
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
            }
            else {
                Game.moduleModel.warData.moveData = msg;
            }
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=MovieDataHandler.js.map