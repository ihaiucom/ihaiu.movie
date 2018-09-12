var GameEventKey = /** @class */ (function () {
    function GameEventKey() {
    }
    GameEventKey.Test = "Test";
    /* --------------------- 框架消息 --------------------*/
    // 打开窗口消息 (menuId:MenuId, openType:MenuOpenType, openIndex?: number | string)
    GameEventKey.GameFrame_OpenMenu = "GameFrame_OpenMenu";
    // 关闭窗口 (menuId: MenuId)
    GameEventKey.GameFrame_CloseMenu = "GameFrame_CloseMenu";
    /* --------------------- 游戏消息 --------------------*/
    // 弹出
    GameEventKey.PopupPanel = "PopupPanel";
    GameEventKey.updateOrderView = "GameEventKeyUpdateOrderView";
    //更新订单
    GameEventKey.GameEventKey_UpdateOrderView = "GameEventKey_UpdateOrderView";
    //更新合作订单
    GameEventKey.GameEventKey_UpdateCoopreationOrderView = "GameEventKey_UpdateCoopreationOrderView";
    //重置搜罗次数
    GameEventKey.GameEventKey_ResetFindStoryTime = "GameEventKey_ResetFindStoryTime";
    //更新拜访艺人
    GameEventKey.GameEventKey_UpdateVisitActor = "GameEventKey_UpdateVisitActor";
    //会议更新
    GameEventKey.GameEventKey_MeetingShowPanel = "GameEventKey_MeetingShowPanel";
    //滚动到
    GameEventKey.GameEventKey_ScrollMainRoom = "GameEventKey_ScrollMainRoom";
    //开始探班状态
    GameEventKey.GameEventKey_StartReception = "GameEventKey_StartReception";
    //点击艺人
    GameEventKey.GameEventKey_FindActorToReception = "GameEventKey_FindActorToReception";
    //禁用滚动
    GameEventKey.GameEventKey_EnabledScrollMain = "GameEventKey_EnabledScrollMain";
    //会议阶段
    GameEventKey.GameEventKey_MeetingStep = "GameEventKey_MeetingStep";
    //拍摄电影
    GameEventKey.GameEventKey_ShootStart = "GameEventKey_ShootStart";
    GameEventKey.GameEventKey_ShootEnd = "GameEventKey_ShootEnd";
    GameEventKey.GameEventKey_ShootStartAddActor = "GameEventKey_ShootStartAddActor";
    //电影上映
    GameEventKey.GameEventKey_FilmStart = "GameEventKey_FilmStart";
    GameEventKey.GameEventKey_FilmOn = "GameEventKey_FilmOn";
    GameEventKey.GameEventKey_FilmEnd = "GameEventKey_FilmEnd";
    //艺人训练
    GameEventKey.GameEventKey_ActorExperciseStart = "GameEventKey_ActorExperciseStart";
    GameEventKey.GameEventKey_ActorExperciseEnd = "GameEventKey_ActorExperciseEnd";
    GameEventKey.GameEventKey_ActorBackToExperciseRoom = "GameEventKey_ActorBackToExperciseRoom";
    //更新艺人隐藏信息
    GameEventKey.GameEventKey_UpdateActorHideInfo = "GameEventKey_UpdateActorHideInfo";
    //更新奖励领取进度
    GameEventKey.GameEventKey_UpdateProgressBoxStatus = "GameEventKey_UpdateProgressBoxStatus";
    //更新红点
    GameEventKey.GameEventKey_UpdateMainUIRed = "GameEventKey_UpdateStoryRed";
    // 拍摄相关
    GameEventKey.GameEventKey_UpdateFilmingStatus = "GameEventKey_UpdateFilmingStatus";
    //玩家升级
    GameEventKey.GameEventKey_PlayerLevelUp = "GameEventKey_PlayerLevelUp";
    //更新主线任务
    GameEventKey.GameEventKey_ClientUpdateMainTask = "GameEventKey_ClientUpdateMainTask";
    //解锁剧本
    GameEventKey.GameEventKey_StoryUnLock = "GameEventKey_StoryUnLock";
    // 时间提醒
    GameEventKey.GameEventKey_TimeLimitRemind = "GameEventKey_TimeLimitRemind";
    GameEventKey.GameEventKey_TimeLimitRemind50 = "GameEventKey_TimeLimitRemind";
    return GameEventKey;
}());
//# sourceMappingURL=GameEventKey.js.map