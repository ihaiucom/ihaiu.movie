var GameEventKey = /** @class */ (function () {
    function GameEventKey() {
    }
    GameEventKey.Test = "Test";
    /* --------------------- 框架消息 --------------------*/
    // 打开窗口消息 (menuId:MenuId, openType:MenuOpenType, openIndex?: number | string)
    GameEventKey.GameFrame_OpenMenu = "GameFrame_OpenMenu";
    // 关闭窗口 (menuId: MenuId)
    GameEventKey.GameFrame_CloseMenu = "GameFrame_CloseMenu";
    // 重刷登录数据--处理数据之前
    GameEventKey.GameFrame_ReLoginData_Begin = "GameFrame_ReLoginData_Begin";
    // 重刷登录数据--处理数据之后
    GameEventKey.GameFrame_ReLoginData_End = "GameFrame_ReLoginData_End";
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
    // 拍摄相关============================
    // 
    GameEventKey.GameEventKey_UpdateFilmingStatus = "GameEventKey_UpdateFilmingStatus";
    // 拍摄请求
    GameEventKey.GameEventKey_MakeFilm = "GameEventKey_MakeFilm";
    // 拍摄 修改剧本名称
    GameEventKey.GameEventKey_MakeFilmRename = "GameEventKey_MakeFilmRename";
    // 拍摄 选择艺人
    GameEventKey.GameEventKey_MakeFilmSelectActor = "GameEventKey_MakeFilmSelectActor";
    // 拍摄 选择艺人全部确认
    GameEventKey.GameEventKey_MakeFilmConfirmSetActor = "GameEventKey_MakeFilmConfirmSetActor";
    // 拍摄 选择剧本类型
    GameEventKey.GameEventKey_MakeFilmsetSelectType = "GameEventKey_MakeFilmsetSelectType";
    // 拍摄 院线请求
    GameEventKey.GameEventKey_MakeFilmsetPublishMovie = "GameEventKey_MakeFilmsetPublishMovie";
    // 拍摄 更新电影状态
    GameEventKey.GameEventKey_MakeFilmUpdateMovieState = "GameEventKey_MakeFilmUpdateMovieState";
    // 拍摄 领取剧本目标奖励
    GameEventKey.GameEventKey_MakeFilmGetStoryGoals = "GameEventKey_MakeFilmGetStoryGoals";
    // 拍摄 切换城市
    GameEventKey.GameEventKey_MakeFilmSwitchCity = "GameEventKey_MakeFilmSwitchCity";
    // 拍摄 推广电影
    GameEventKey.GameEventKey_MakeFilmSpreadMovie = "GameEventKey_MakeFilmSpreadMovie";
    // 拍摄 领取收益
    GameEventKey.GameEventKey_MakeFilmGetRewardMovie = "GameEventKey_MakeFilmGetRewardMovie";
    // 拍摄 更新放映中的电影情况
    GameEventKey.GameEventKey_MakeFilmWarEndingIncome = "GameEventKey_MakeFilmWarEndingIncome";
    // 拍摄相关============================
    //玩家升级
    GameEventKey.GameEventKey_PlayerLevelUp = "GameEventKey_PlayerLevelUp";
    GameEventKey.GameEventKey_PlayerLevelUpOnClose = "GameEventKey_PlayerLevelUpOnClose";
    //更新主线任务
    GameEventKey.GameEventKey_ClientUpdateMainTask = "GameEventKey_ClientUpdateMainTask";
    //解锁剧本
    GameEventKey.GameEventKey_StoryUnLock = "GameEventKey_StoryUnLock";
    // 时间提醒
    GameEventKey.GameEventKey_TimeLimitRemind = "GameEventKey_TimeLimitRemind";
    //隐藏显示
    GameEventKey.GameEventKey_VisibleMainUI = "GameEventKey_VisibleMainUI";
    //显示隐藏箭头
    GameEventKey.GameEventKey_VisibleTaskArrowUI = "GameEventKey_VisibleTaskArrowUI";
    //房间和UI界面之间切换
    GameEventKey.GameEventKey_SwitchUIRoom = "GameEventKey_SwitchUIRoom";
    //同步房间信息
    GameEventKey.GameEventKey_SyncRoomInfo = "GameEventKey_SyncRoomInfo";
    //解锁初始
    GameEventKey.GameEventKey_UnlockInit = "GameEventKey_UnlockInit";
    //解锁变更
    GameEventKey.GameEventKey_UnlockChange = "GameEventKey_UnlockChange";
    GameEventKey.GameEventKey_OscarDataChange = "GameEventKey_OscarDataChange";
    GameEventKey.GameEventKey_UpdateTimeMenuTick = "GameEventKey_UpdateTimeMenuTick";
    //剧本播放完成
    GameEventKey.GameEventKey_StorylineComplete = "GameEventKey_StoryComplete";
    //剧本选择动画完成
    GameEventKey.GameEventKey_FilmStoryAnimationComplete = "GameEventKey_FilmStoryAnimationComplete";
    //拍摄状态变化
    GameEventKey.GameEventKey_FilmStoryStateChange = "GameEventKey_FilmStoryStateChange";
    return GameEventKey;
}());
//# sourceMappingURL=GameEventKey.js.map