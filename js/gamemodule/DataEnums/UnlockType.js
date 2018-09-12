var Games;
(function (Games) {
    // 开启方式，0 = 表示初始开放，1 = 账号等级开放，2 = 建筑开放，3 = 街区开放，4 = 特殊开放
    var UnlockType;
    (function (UnlockType) {
        UnlockType[UnlockType["None"] = 0] = "None";
        UnlockType[UnlockType["Level"] = 1] = "Level";
        UnlockType[UnlockType["BuildingLevel"] = 2] = "BuildingLevel";
        UnlockType[UnlockType["BlockLevel"] = 3] = "BlockLevel";
        UnlockType[UnlockType["Other"] = 4] = "Other";
    })(UnlockType = Games.UnlockType || (Games.UnlockType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=UnlockType.js.map