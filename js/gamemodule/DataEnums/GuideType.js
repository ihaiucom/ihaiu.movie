var Games;
(function (Games) {
    //
    var GuideType;
    (function (GuideType) {
        GuideType[GuideType["None"] = 0] = "None";
        GuideType[GuideType["Story"] = 1] = "Story";
        GuideType[GuideType["Guide"] = 2] = "Guide";
    })(GuideType = Games.GuideType || (Games.GuideType = {}));
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
        StoryTriggerType[StoryTriggerType["MainUI"] = 0] = "MainUI";
        StoryTriggerType[StoryTriggerType["Create"] = 1] = "Create";
        StoryTriggerType[StoryTriggerType["ClickBtn"] = 2] = "ClickBtn";
        StoryTriggerType[StoryTriggerType["ClickIcon"] = 3] = "ClickIcon";
        StoryTriggerType[StoryTriggerType["SelectActor"] = 4] = "SelectActor";
        StoryTriggerType[StoryTriggerType["FinishStreet"] = 5] = "FinishStreet";
        StoryTriggerType[StoryTriggerType["FinishRoadShow"] = 6] = "FinishRoadShow";
        StoryTriggerType[StoryTriggerType["FinishBuild"] = 7] = "FinishBuild";
        StoryTriggerType[StoryTriggerType["FinishPreGuide"] = 8] = "FinishPreGuide";
        StoryTriggerType[StoryTriggerType["OpenMenu"] = 9] = "OpenMenu";
        StoryTriggerType[StoryTriggerType["FristSumitTakeMovie"] = 10] = "FristSumitTakeMovie";
        StoryTriggerType[StoryTriggerType["FristMovieUp"] = 11] = "FristMovieUp";
        StoryTriggerType[StoryTriggerType["FinishPreStory"] = 12] = "FinishPreStory";
        StoryTriggerType[StoryTriggerType["OpenOscar"] = 13] = "OpenOscar";
        StoryTriggerType[StoryTriggerType["SelectStoryMoneyNotEnough"] = 14] = "SelectStoryMoneyNotEnough";
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
        GuideFinishType[GuideFinishType["GuideFinishType_29_FinishPreGuide"] = 29] = "GuideFinishType_29_FinishPreGuide";
    })(GuideFinishType = Games.GuideFinishType || (Games.GuideFinishType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=GuideType.js.map