var Games;
(function (Games) {
    // 开启方式，0 = 表示初始开放，1 = 账号等级开放，2 = 建筑开放，3 = 街区开放，4 = 特殊开放，5 = 占领城市
    var UnlockType;
    (function (UnlockType) {
        UnlockType[UnlockType["None"] = 0] = "None";
        UnlockType[UnlockType["Level"] = 1] = "Level";
        UnlockType[UnlockType["BuildingLevel"] = 2] = "BuildingLevel";
        UnlockType[UnlockType["BlockLevel"] = 3] = "BlockLevel";
        UnlockType[UnlockType["Other"] = 4] = "Other";
        UnlockType[UnlockType["HoldCity"] = 5] = "HoldCity";
        UnlockType[UnlockType["MainTask"] = 6] = "MainTask";
    })(UnlockType = Games.UnlockType || (Games.UnlockType = {}));
    var CloseType;
    (function (CloseType) {
        CloseType[CloseType["None"] = 0] = "None";
        CloseType[CloseType["Recharge"] = 1] = "Recharge";
        CloseType[CloseType["MainTask"] = 2] = "MainTask";
        CloseType[CloseType["Level"] = 3] = "Level";
        CloseType[CloseType["Reward"] = 4] = "Reward";
    })(CloseType = Games.CloseType || (Games.CloseType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=UnlockType.js.map