var Games;
(function (Games) {
    //表演类型
    var PerformType;
    (function (PerformType) {
        // 0随机行走表演
        // 1电影上映
        // 2电影拍摄
        // 3探班
        // 4艺人训练
        // 5会议
        // 6奥斯卡
        // 7路演
        // 8路演粉丝开场
        // 9路演艺人开场
        PerformType[PerformType["FreeWalk"] = 0] = "FreeWalk";
        PerformType[PerformType["Cinema"] = 1] = "Cinema";
        PerformType[PerformType["Shoot"] = 2] = "Shoot";
        PerformType[PerformType["Reception"] = 3] = "Reception";
        PerformType[PerformType["Training"] = 4] = "Training";
        PerformType[PerformType["Meeting"] = 5] = "Meeting";
        PerformType[PerformType["Oscar"] = 6] = "Oscar";
        PerformType[PerformType["RoadShow"] = 7] = "RoadShow";
        PerformType[PerformType["ReceptionFansTalk"] = 8] = "ReceptionFansTalk";
        PerformType[PerformType["ReceptionActorTalk"] = 9] = "ReceptionActorTalk";
    })(PerformType = Games.PerformType || (Games.PerformType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=PerformType.js.map