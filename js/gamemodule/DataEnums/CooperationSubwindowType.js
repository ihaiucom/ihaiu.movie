var Games;
(function (Games) {
    /**
     * 合作 子窗口类型
     */
    var CooperationSubwindowType;
    (function (CooperationSubwindowType) {
        // 搜索小伙伴子窗口
        CooperationSubwindowType[CooperationSubwindowType["serachOther"] = 0] = "serachOther";
        // 合作请求
        CooperationSubwindowType[CooperationSubwindowType["cooperationApply"] = 1] = "cooperationApply";
        // 合作任务
        CooperationSubwindowType[CooperationSubwindowType["cooperationRealtionship"] = 2] = "cooperationRealtionship";
        // 合作结束
        CooperationSubwindowType[CooperationSubwindowType["CooperationEnd"] = 3] = "CooperationEnd";
        // 合作达成
        CooperationSubwindowType[CooperationSubwindowType["CooperationAchieved"] = 4] = "CooperationAchieved";
    })(CooperationSubwindowType = Games.CooperationSubwindowType || (Games.CooperationSubwindowType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=CooperationSubwindowType.js.map