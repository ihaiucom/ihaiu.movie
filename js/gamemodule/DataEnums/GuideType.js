var Games;
(function (Games) {
    //
    var GuideType;
    (function (GuideType) {
        GuideType[GuideType["None"] = 0] = "None";
        GuideType[GuideType["Story"] = 1] = "Story";
        GuideType[GuideType["Guide"] = 2] = "Guide";
        GuideType[GuideType["Anima"] = 3] = "Anima";
        GuideType[GuideType["Car"] = 4] = "Car";
    })(GuideType = Games.GuideType || (Games.GuideType = {}));
    var GuideId;
    (function (GuideId) {
        GuideId[GuideId["Guide_FristId"] = 100101] = "Guide_FristId";
        GuideId[GuideId["Guide_GoldExchangeId"] = 105501] = "Guide_GoldExchangeId";
        GuideId[GuideId["Guide_StreetId"] = 105101] = "Guide_StreetId";
    })(GuideId = Games.GuideId || (Games.GuideId = {}));
    //引导播放类型
    var GuidePlayType;
    (function (GuidePlayType) {
        GuidePlayType[GuidePlayType["MainTask"] = 0] = "MainTask";
        GuidePlayType[GuidePlayType["DailyTask"] = 1] = "DailyTask";
    })(GuidePlayType = Games.GuidePlayType || (Games.GuidePlayType = {}));
    //引导可以播放的类型 用于判断引导播放的前置条件
    var GuideCanPlayType;
    (function (GuideCanPlayType) {
        GuideCanPlayType[GuideCanPlayType["FinishPreGuide"] = 1] = "FinishPreGuide";
        GuideCanPlayType[GuideCanPlayType["HasContinueMovie"] = 2] = "HasContinueMovie";
        GuideCanPlayType[GuideCanPlayType["HasOrderList"] = 3] = "HasOrderList";
        GuideCanPlayType[GuideCanPlayType["SelectRoomType"] = 4] = "SelectRoomType";
        GuideCanPlayType[GuideCanPlayType["HasContinueMovie2"] = 5] = "HasContinueMovie2";
        GuideCanPlayType[GuideCanPlayType["SelectActor"] = 6] = "SelectActor";
        GuideCanPlayType[GuideCanPlayType["VisitActor"] = 7] = "VisitActor";
    })(GuideCanPlayType = Games.GuideCanPlayType || (Games.GuideCanPlayType = {}));
    //半身像位置
    var GuideAnchor;
    (function (GuideAnchor) {
        GuideAnchor[GuideAnchor["Left"] = 1] = "Left";
        GuideAnchor[GuideAnchor["Right"] = 2] = "Right";
    })(GuideAnchor = Games.GuideAnchor || (Games.GuideAnchor = {}));
    //引导形式
    var GuideDialogType;
    (function (GuideDialogType) {
        GuideDialogType[GuideDialogType["Dialog"] = 0] = "Dialog";
        GuideDialogType[GuideDialogType["Left"] = 1] = "Left";
        GuideDialogType[GuideDialogType["Right"] = 2] = "Right";
        GuideDialogType[GuideDialogType["Npc"] = 3] = "Npc";
        GuideDialogType[GuideDialogType["HaiBao"] = 4] = "HaiBao";
        GuideDialogType[GuideDialogType["Hide"] = 5] = "Hide";
    })(GuideDialogType = Games.GuideDialogType || (Games.GuideDialogType = {}));
    //界面形式
    var GuideUIType;
    (function (GuideUIType) {
        GuideUIType[GuideUIType["None"] = 0] = "None";
        GuideUIType[GuideUIType["NpcIntro"] = 1] = "NpcIntro";
        GuideUIType[GuideUIType["InitAcotr"] = 2] = "InitAcotr";
        GuideUIType[GuideUIType["HaiBao"] = 3] = "HaiBao";
        GuideUIType[GuideUIType["Menu"] = 4] = "Menu";
    })(GuideUIType = Games.GuideUIType || (Games.GuideUIType = {}));
    //引导全屏点击
    var GuideFullClickType;
    (function (GuideFullClickType) {
        GuideFullClickType[GuideFullClickType["None"] = 0] = "None";
        GuideFullClickType[GuideFullClickType["CompleteWrite"] = 1] = "CompleteWrite";
        GuideFullClickType[GuideFullClickType["NextGuide"] = 2] = "NextGuide";
        GuideFullClickType[GuideFullClickType["CompleteNotForceGuide"] = 3] = "CompleteNotForceGuide";
        GuideFullClickType[GuideFullClickType["NextStory"] = 4] = "NextStory";
    })(GuideFullClickType = Games.GuideFullClickType || (Games.GuideFullClickType = {}));
    //剧情触发类型
    var StoryTriggerType;
    (function (StoryTriggerType) {
        StoryTriggerType[StoryTriggerType["Start"] = 0] = "Start";
        // 		1新建账号初次登录游戏
        StoryTriggerType[StoryTriggerType["Create"] = 1] = "Create";
        // 2点击按钮
        StoryTriggerType[StoryTriggerType["ClickBtn"] = 2] = "ClickBtn";
        // 3点击icon
        StoryTriggerType[StoryTriggerType["ClickIcon"] = 3] = "ClickIcon";
        // 4选择完初始演员
        StoryTriggerType[StoryTriggerType["SelectActor"] = 4] = "SelectActor";
        // 5完成街道宣传
        StoryTriggerType[StoryTriggerType["FinishStreet"] = 5] = "FinishStreet";
        // 6完成城市路演
        StoryTriggerType[StoryTriggerType["FinishRoadShow"] = 6] = "FinishRoadShow";
        // 7完成建造
        StoryTriggerType[StoryTriggerType["FinishBuild"] = 7] = "FinishBuild";
        // 8完成前置引导
        StoryTriggerType[StoryTriggerType["FinishPreGuide"] = 8] = "FinishPreGuide";
        // 9打开界面
        StoryTriggerType[StoryTriggerType["OpenMenu"] = 9] = "OpenMenu";
        // 10第一次拍摄, 点击提交后
        StoryTriggerType[StoryTriggerType["FristSumitTakeMovie"] = 10] = "FristSumitTakeMovie";
        // 11第一部电影上映
        StoryTriggerType[StoryTriggerType["FristMovieUp"] = 11] = "FristMovieUp";
        // 12完成前置剧情
        StoryTriggerType[StoryTriggerType["FinishPreStory"] = 12] = "FinishPreStory";
        // 13第一次进入奥斯卡
        StoryTriggerType[StoryTriggerType["OpenOscar"] = 13] = "OpenOscar";
        // 14选择剧本或拍摄片酬不够
        StoryTriggerType[StoryTriggerType["SelectStoryMoneyNotEnough"] = 14] = "SelectStoryMoneyNotEnough";
        // 15领取主线任务奖励
        StoryTriggerType[StoryTriggerType["FinishMainTask"] = 15] = "FinishMainTask";
        // 16拍摄第一次出现5星剧本
        StoryTriggerType[StoryTriggerType["FiveStarStory"] = 16] = "FiveStarStory";
        // 17探查第一次出现已拥有4星艺人
        StoryTriggerType[StoryTriggerType["FourStarActor"] = 17] = "FourStarActor";
        // 18拍摄步骤
        StoryTriggerType[StoryTriggerType["FilmState"] = 18] = "FilmState";
        //
        StoryTriggerType[StoryTriggerType["End"] = 19] = "End";
    })(StoryTriggerType = Games.StoryTriggerType || (Games.StoryTriggerType = {}));
    //引导完成条件
    var GuideFinishType;
    (function (GuideFinishType) {
        GuideFinishType[GuideFinishType["GuideFinishType_1_MakeBuild"] = 1] = "GuideFinishType_1_MakeBuild";
        GuideFinishType[GuideFinishType["GuideFinishType_2_UpgradeBuild"] = 2] = "GuideFinishType_2_UpgradeBuild";
        GuideFinishType[GuideFinishType["GuideFinishType_3_UpgradeActor"] = 3] = "GuideFinishType_3_UpgradeActor";
        GuideFinishType[GuideFinishType["GuideFinishType_4_NoseActor"] = 4] = "GuideFinishType_4_NoseActor";
        GuideFinishType[GuideFinishType["GuideFinishType_5_StreetPublicize"] = 5] = "GuideFinishType_5_StreetPublicize";
        GuideFinishType[GuideFinishType["GuideFinishType_6_RoadShow"] = 6] = "GuideFinishType_6_RoadShow";
        GuideFinishType[GuideFinishType["GuideFinishType_7_CityFinish"] = 7] = "GuideFinishType_7_CityFinish";
        GuideFinishType[GuideFinishType["GuideFinishType_8_TakeMovie"] = 8] = "GuideFinishType_8_TakeMovie";
        GuideFinishType[GuideFinishType["GuideFinishType_9_SeeMovieReward"] = 9] = "GuideFinishType_9_SeeMovieReward";
        GuideFinishType[GuideFinishType["GuideFinishType_10_GetMovieReward"] = 10] = "GuideFinishType_10_GetMovieReward";
        GuideFinishType[GuideFinishType["GuideFinishType_11_UpgradeAttention"] = 11] = "GuideFinishType_11_UpgradeAttention";
        GuideFinishType[GuideFinishType["GuideFinishType_12_AppointActor"] = 12] = "GuideFinishType_12_AppointActor";
        GuideFinishType[GuideFinishType["GuideFinishType_13_ChooseFocusPointCity"] = 13] = "GuideFinishType_13_ChooseFocusPointCity";
        GuideFinishType[GuideFinishType["GuideFinishType_14_GetCityReward"] = 14] = "GuideFinishType_14_GetCityReward";
        GuideFinishType[GuideFinishType["GuideFinishType_15_DoPuduct"] = 15] = "GuideFinishType_15_DoPuduct";
        GuideFinishType[GuideFinishType["GuideFinishType_16_CompleteOrder"] = 16] = "GuideFinishType_16_CompleteOrder";
        GuideFinishType[GuideFinishType["GuideFinishType_17_DoBusiness"] = 17] = "GuideFinishType_17_DoBusiness";
        GuideFinishType[GuideFinishType["GuideFinishType_18_FansVisit"] = 18] = "GuideFinishType_18_FansVisit";
        GuideFinishType[GuideFinishType["GuideFinishType_19_GetTotalRewardMovie"] = 19] = "GuideFinishType_19_GetTotalRewardMovie";
        GuideFinishType[GuideFinishType["GuideFinishType_20_ClickTarget"] = 20] = "GuideFinishType_20_ClickTarget";
        GuideFinishType[GuideFinishType["GuideFinishType_21_ExpendFloor"] = 21] = "GuideFinishType_21_ExpendFloor";
        GuideFinishType[GuideFinishType["GuideFinishType_22_SelectContory"] = 22] = "GuideFinishType_22_SelectContory";
        GuideFinishType[GuideFinishType["GuideFinishType_23_SelectCity"] = 23] = "GuideFinishType_23_SelectCity";
        GuideFinishType[GuideFinishType["GuideFinishType_24_ClickAnyWhere"] = 24] = "GuideFinishType_24_ClickAnyWhere";
        GuideFinishType[GuideFinishType["GuideFinishType_25_OrderIntoBox"] = 25] = "GuideFinishType_25_OrderIntoBox";
        GuideFinishType[GuideFinishType["GuideFinishType_26_SelectStory"] = 26] = "GuideFinishType_26_SelectStory";
        GuideFinishType[GuideFinishType["GuideFinishType_27_CostlicenceNum"] = 27] = "GuideFinishType_27_CostlicenceNum";
        GuideFinishType[GuideFinishType["GuideFinishType_28_TakeMoiveType"] = 28] = "GuideFinishType_28_TakeMoiveType";
        GuideFinishType[GuideFinishType["GuideFinishType_29_Secretary"] = 29] = "GuideFinishType_29_Secretary";
        GuideFinishType[GuideFinishType["GuideFinishType_30_MarketSelectActor"] = 30] = "GuideFinishType_30_MarketSelectActor";
    })(GuideFinishType = Games.GuideFinishType || (Games.GuideFinishType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=GuideType.js.map