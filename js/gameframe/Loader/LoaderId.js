var Games;
(function (Games) {
    var LoaderId;
    (function (LoaderId) {
        // 没有显示界面
        LoaderId[LoaderId["None"] = 0] = "None";
        // 转圈圈
        LoaderId[LoaderId["Circle"] = 1] = "Circle";
        // 启动界面
        LoaderId[LoaderId["Launch"] = 2] = "Launch";
        // 进入游戏加载界面
        LoaderId[LoaderId["EnterGame"] = 3] = "EnterGame";
        // 加载模块界面
        LoaderId[LoaderId["Module"] = 4] = "Module";
    })(LoaderId = Games.LoaderId || (Games.LoaderId = {}));
})(Games || (Games = {}));
if (!window["LoaderId"]) {
    window["LoaderId"] = Games.LoaderId;
}
//# sourceMappingURL=LoaderId.js.map