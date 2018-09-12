/**
 *  MADE BY GENERATOR AT 2018-9-11 20:03:41,
 *  PLEASE DO NOT REWRITE.
 */
var Proto;
(function (Proto) {
    var SE;
    (function (SE) {
        var EError;
        (function (EError) {
            EError[EError["NoError"] = 0] = "NoError";
            EError[EError["ServerError"] = 1] = "ServerError";
            EError[EError["DataError"] = 2] = "DataError";
            EError[EError["UnknownError"] = 3] = "UnknownError";
            EError[EError["DataBusy"] = 4] = "DataBusy";
            EError[EError["NoUsrId"] = 5] = "NoUsrId";
            EError[EError["Frozen"] = 6] = "Frozen";
            EError[EError["Dropped"] = 7] = "Dropped";
        })(EError = SE.EError || (SE.EError = {}));
        var EMoneyType;
        (function (EMoneyType) {
            EMoneyType[EMoneyType["Money"] = 1] = "Money";
            EMoneyType[EMoneyType["Diamond"] = 2] = "Diamond";
            EMoneyType[EMoneyType["Gold"] = 3] = "Gold";
            EMoneyType[EMoneyType["Coin"] = 4] = "Coin";
        })(EMoneyType = SE.EMoneyType || (SE.EMoneyType = {}));
        var EGoodsFlag;
        (function (EGoodsFlag) {
            EGoodsFlag[EGoodsFlag["None"] = 0] = "None";
            EGoodsFlag[EGoodsFlag["New"] = 1] = "New";
            EGoodsFlag[EGoodsFlag["Hot"] = 2] = "Hot";
            EGoodsFlag[EGoodsFlag["Discount"] = 3] = "Discount";
            EGoodsFlag[EGoodsFlag["SoldOut"] = 4] = "SoldOut";
        })(EGoodsFlag = SE.EGoodsFlag || (SE.EGoodsFlag = {}));
        var EAcceptCondition;
        (function (EAcceptCondition) {
            EAcceptCondition[EAcceptCondition["acceptcondition_front_id"] = 1] = "acceptcondition_front_id";
            EAcceptCondition[EAcceptCondition["acceptcondition_level"] = 2] = "acceptcondition_level";
        })(EAcceptCondition = SE.EAcceptCondition || (SE.EAcceptCondition = {}));
        var ECompleteCondition;
        (function (ECompleteCondition) {
            ECompleteCondition[ECompleteCondition["completecondition_score"] = 1] = "completecondition_score";
            ECompleteCondition[ECompleteCondition["completecondition_kill"] = 2] = "completecondition_kill";
        })(ECompleteCondition = SE.ECompleteCondition || (SE.ECompleteCondition = {}));
        var ECompleteReward;
        (function (ECompleteReward) {
            ECompleteReward[ECompleteReward["completereward_exp"] = 1] = "completereward_exp";
            ECompleteReward[ECompleteReward["completereward_item"] = 2] = "completereward_item";
            ECompleteReward[ECompleteReward["completereward_gold"] = 3] = "completereward_gold";
        })(ECompleteReward = SE.ECompleteReward || (SE.ECompleteReward = {}));
        var EUsrState;
        (function (EUsrState) {
            EUsrState[EUsrState["uninit"] = 1] = "uninit";
            EUsrState[EUsrState["init_actor"] = 2] = "init_actor";
            EUsrState[EUsrState["usual"] = 3] = "usual";
            EUsrState[EUsrState["frozen"] = 4] = "frozen";
            EUsrState[EUsrState["dropped"] = 5] = "dropped";
        })(EUsrState = SE.EUsrState || (SE.EUsrState = {}));
        var EItemNumber;
        (function (EItemNumber) {
            EItemNumber[EItemNumber["diamond"] = 1] = "diamond";
            EItemNumber[EItemNumber["gold"] = 2] = "gold";
        })(EItemNumber = SE.EItemNumber || (SE.EItemNumber = {}));
        var EPublishTypeCode;
        (function (EPublishTypeCode) {
            EPublishTypeCode[EPublishTypeCode["sdknotice"] = 1] = "sdknotice";
            EPublishTypeCode[EPublishTypeCode["usrmail"] = 2] = "usrmail";
            EPublishTypeCode[EPublishTypeCode["gamemail"] = 9] = "gamemail";
            EPublishTypeCode[EPublishTypeCode["gamenotice"] = 10] = "gamenotice";
        })(EPublishTypeCode = SE.EPublishTypeCode || (SE.EPublishTypeCode = {}));
        var EUserSex;
        (function (EUserSex) {
            EUserSex[EUserSex["boy"] = 2001] = "boy";
            EUserSex[EUserSex["girl"] = 2002] = "girl";
        })(EUserSex = SE.EUserSex || (SE.EUserSex = {}));
        var EItemCategory;
        (function (EItemCategory) {
            EItemCategory[EItemCategory["diamond"] = 1] = "diamond";
            EItemCategory[EItemCategory["gold"] = 2] = "gold";
            EItemCategory[EItemCategory["dollar"] = 3] = "dollar";
            EItemCategory[EItemCategory["other"] = 4] = "other";
            EItemCategory[EItemCategory["normal"] = 5] = "normal";
            EItemCategory[EItemCategory["assets"] = 6] = "assets";
            EItemCategory[EItemCategory["contract"] = 7] = "contract";
            EItemCategory[EItemCategory["giftbag"] = 8] = "giftbag";
            EItemCategory[EItemCategory["licence"] = 10] = "licence";
            EItemCategory[EItemCategory["cup"] = 14] = "cup";
        })(EItemCategory = SE.EItemCategory || (SE.EItemCategory = {}));
        var EItemId;
        (function (EItemId) {
            EItemId[EItemId["diamond"] = 1] = "diamond";
            EItemId[EItemId["gold"] = 2] = "gold";
            EItemId[EItemId["dollar"] = 3] = "dollar";
            EItemId[EItemId["licence"] = 4] = "licence";
            EItemId[EItemId["fans"] = 5] = "fans";
            EItemId[EItemId["praise"] = 6] = "praise";
            EItemId[EItemId["drawing"] = 7] = "drawing";
            EItemId[EItemId["expect"] = 8] = "expect";
            EItemId[EItemId["study_card"] = 5004] = "study_card";
            EItemId[EItemId["player_rename_card"] = 5008] = "player_rename_card";
            EItemId[EItemId["actor_skill_exp_water"] = 5010] = "actor_skill_exp_water";
            EItemId[EItemId["actor_loyalty_card"] = 5003] = "actor_loyalty_card";
            EItemId[EItemId["brochure"] = 5005] = "brochure";
        })(EItemId = SE.EItemId || (SE.EItemId = {}));
        var EGameDataRename;
        (function (EGameDataRename) {
            EGameDataRename[EGameDataRename["renameLengthMin"] = 4] = "renameLengthMin";
            EGameDataRename[EGameDataRename["renameLengthMax"] = 18] = "renameLengthMax";
            EGameDataRename[EGameDataRename["rePerSignatureLengthMax"] = 100] = "rePerSignatureLengthMax";
        })(EGameDataRename = SE.EGameDataRename || (SE.EGameDataRename = {}));
        var EStoryStack;
        (function (EStoryStack) {
            EStoryStack[EStoryStack["story_stack_daily_times"] = 2045] = "story_stack_daily_times";
            EStoryStack[EStoryStack["story_stack_search_cost"] = 2046] = "story_stack_search_cost";
            EStoryStack[EStoryStack["story_stack_cd_stage_cost"] = 2047] = "story_stack_cd_stage_cost";
            EStoryStack[EStoryStack["story_stack_cd_stage_length"] = 2048] = "story_stack_cd_stage_length";
            EStoryStack[EStoryStack["story_stack_cd"] = 2050] = "story_stack_cd";
            EStoryStack[EStoryStack["story_stack_daily_update"] = 2051] = "story_stack_daily_update";
            EStoryStack[EStoryStack["story_stack_cd_block_level"] = 2052] = "story_stack_cd_block_level";
        })(EStoryStack = SE.EStoryStack || (SE.EStoryStack = {}));
        var EStoryModule;
        (function (EStoryModule) {
            EStoryModule[EStoryModule["noFinish"] = 0] = "noFinish";
            EStoryModule[EStoryModule["finish"] = 1] = "finish";
            EStoryModule[EStoryModule["hadGet"] = 2] = "hadGet";
            EStoryModule[EStoryModule["randomLength"] = 3] = "randomLength";
            EStoryModule[EStoryModule["shootTime"] = 5] = "shootTime";
            EStoryModule[EStoryModule["score"] = 8] = "score";
        })(EStoryModule = SE.EStoryModule || (SE.EStoryModule = {}));
        var EMovieState;
        (function (EMovieState) {
            EMovieState[EMovieState["chooseScript"] = 2] = "chooseScript";
            EMovieState[EMovieState["renameFilm"] = 3] = "renameFilm";
            EMovieState[EMovieState["currentMarketInf"] = 4] = "currentMarketInf";
            EMovieState[EMovieState["chooseActor"] = 5] = "chooseActor";
            EMovieState[EMovieState["costView"] = 6] = "costView";
            EMovieState[EMovieState["yRShowView"] = 7] = "yRShowView";
            EMovieState[EMovieState["compatibility"] = 8] = "compatibility";
            EMovieState[EMovieState["filming"] = 9] = "filming";
            EMovieState[EMovieState["chooseType"] = 10] = "chooseType";
            EMovieState[EMovieState["chooseTip"] = 11] = "chooseTip";
            EMovieState[EMovieState["propaganda"] = 12] = "propaganda";
            EMovieState[EMovieState["complete"] = 13] = "complete";
            EMovieState[EMovieState["actorUpdate"] = 14] = "actorUpdate";
            EMovieState[EMovieState["proficiency"] = 15] = "proficiency";
            EMovieState[EMovieState["chooseTheater"] = 16] = "chooseTheater";
            EMovieState[EMovieState["noticeFeedBack"] = 17] = "noticeFeedBack";
            EMovieState[EMovieState["SYPF"] = 18] = "SYPF";
            EMovieState[EMovieState["audienceReputation"] = 19] = "audienceReputation";
            EMovieState[EMovieState["result"] = 20] = "result";
            EMovieState[EMovieState["overMarket"] = 21] = "overMarket";
            EMovieState[EMovieState["Jiesuan"] = 22] = "Jiesuan";
            EMovieState[EMovieState["rewardTip"] = 23] = "rewardTip";
            EMovieState[EMovieState["contineTransceiver"] = 24] = "contineTransceiver";
        })(EMovieState = SE.EMovieState || (SE.EMovieState = {}));
        var EGlobalId;
        (function (EGlobalId) {
            EGlobalId[EGlobalId["maxMovieNum"] = 9] = "maxMovieNum";
            EGlobalId[EGlobalId["tempActor"] = 9999] = "tempActor";
            EGlobalId[EGlobalId["loyaltyCardLimit"] = 1035] = "loyaltyCardLimit";
        })(EGlobalId = SE.EGlobalId || (SE.EGlobalId = {}));
        var EMovieType;
        (function (EMovieType) {
        })(EMovieType = SE.EMovieType || (SE.EMovieType = {}));
        var EBoxOfficeEvaluation;
        (function (EBoxOfficeEvaluation) {
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["normal"] = 1] = "normal";
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["good"] = 2] = "good";
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["big_sell"] = 3] = "big_sell";
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["great_sell"] = 4] = "great_sell";
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["myth_sell"] = 5] = "myth_sell";
            EBoxOfficeEvaluation[EBoxOfficeEvaluation["marvel_sell"] = 6] = "marvel_sell";
        })(EBoxOfficeEvaluation = SE.EBoxOfficeEvaluation || (SE.EBoxOfficeEvaluation = {}));
        var EProgressBoxId;
        (function (EProgressBoxId) {
            EProgressBoxId[EProgressBoxId["manageOrder"] = 1] = "manageOrder";
            EProgressBoxId[EProgressBoxId["dailyTask"] = 2] = "dailyTask";
            EProgressBoxId[EProgressBoxId["cooperateTask"] = 3] = "cooperateTask";
        })(EProgressBoxId = SE.EProgressBoxId || (SE.EProgressBoxId = {}));
        var EManageProduce;
        (function (EManageProduce) {
            EManageProduce[EManageProduce["line"] = 0] = "line";
            EManageProduce[EManageProduce["save"] = 1] = "save";
            EManageProduce[EManageProduce["time"] = 2] = "time";
            EManageProduce[EManageProduce["output_initial"] = 3] = "output_initial";
            EManageProduce[EManageProduce["time_add"] = 4] = "time_add";
            EManageProduce[EManageProduce["dollarIntervalTime"] = 11] = "dollarIntervalTime";
            EManageProduce[EManageProduce["baseProduceId"] = 100] = "baseProduceId";
            EManageProduce[EManageProduce["intervalTime"] = 300] = "intervalTime";
        })(EManageProduce = SE.EManageProduce || (SE.EManageProduce = {}));
        var ERankListType;
        (function (ERankListType) {
            ERankListType[ERankListType["SelfList"] = 1] = "SelfList";
            ERankListType[ERankListType["ServerList"] = 2] = "ServerList";
            ERankListType[ERankListType["GroupList"] = 3] = "GroupList";
            ERankListType[ERankListType["GroupMovieList"] = 4] = "GroupMovieList";
        })(ERankListType = SE.ERankListType || (SE.ERankListType = {}));
        var EAchievementState;
        (function (EAchievementState) {
            EAchievementState[EAchievementState["none"] = 0] = "none";
            EAchievementState[EAchievementState["receivable"] = 1] = "receivable";
            EAchievementState[EAchievementState["received"] = 2] = "received";
            EAchievementState[EAchievementState["finished"] = 3] = "finished";
            EAchievementState[EAchievementState["rewarded"] = 4] = "rewarded";
        })(EAchievementState = SE.EAchievementState || (SE.EAchievementState = {}));
        var EAchievementType;
        (function (EAchievementType) {
            EAchievementType[EAchievementType["daily"] = 1] = "daily";
            EAchievementType[EAchievementType["achievement"] = 2] = "achievement";
            EAchievementType[EAchievementType["story"] = 3] = "story";
            EAchievementType[EAchievementType["mainTask"] = 4] = "mainTask";
        })(EAchievementType = SE.EAchievementType || (SE.EAchievementType = {}));
        var EMallItemLimitType;
        (function (EMallItemLimitType) {
            EMallItemLimitType[EMallItemLimitType["daily"] = 1] = "daily";
            EMallItemLimitType[EMallItemLimitType["weekly"] = 2] = "weekly";
        })(EMallItemLimitType = SE.EMallItemLimitType || (SE.EMallItemLimitType = {}));
        var EManageBusiness;
        (function (EManageBusiness) {
            EManageBusiness[EManageBusiness["baseLine"] = 10] = "baseLine";
            EManageBusiness[EManageBusiness["interval"] = 180] = "interval";
        })(EManageBusiness = SE.EManageBusiness || (SE.EManageBusiness = {}));
        var EManageVisit;
        (function (EManageVisit) {
            EManageVisit[EManageVisit["baseLine"] = 3] = "baseLine";
            EManageVisit[EManageVisit["overdueTime"] = 180] = "overdueTime";
            EManageVisit[EManageVisit["baseIntervalTime"] = 300] = "baseIntervalTime";
        })(EManageVisit = SE.EManageVisit || (SE.EManageVisit = {}));
        var EManageOrder;
        (function (EManageOrder) {
            EManageOrder[EManageOrder["baseLength"] = 9] = "baseLength";
            EManageOrder[EManageOrder["baseTime"] = 1200] = "baseTime";
            EManageOrder[EManageOrder["delTime"] = 20] = "delTime";
        })(EManageOrder = SE.EManageOrder || (SE.EManageOrder = {}));
        var EMailId;
        (function (EMailId) {
            EMailId[EMailId["cooperateApplyFail"] = 3] = "cooperateApplyFail";
            EMailId[EMailId["orderId"] = 4] = "orderId";
            EMailId[EMailId["partnerGive"] = 7] = "partnerGive";
            EMailId[EMailId["firstCooperate"] = 8] = "firstCooperate";
            EMailId[EMailId["firstAccountCooperate"] = 9] = "firstAccountCooperate";
            EMailId[EMailId["delOrderId"] = 10] = "delOrderId";
            EMailId[EMailId["rewardOrder"] = 11] = "rewardOrder";
            EMailId[EMailId["dailyTask"] = 12] = "dailyTask";
        })(EMailId = SE.EMailId || (SE.EMailId = {}));
        var ESecretaryType;
        (function (ESecretaryType) {
            ESecretaryType[ESecretaryType["noHave"] = 0] = "noHave";
            ESecretaryType[ESecretaryType["had"] = 1] = "had";
            ESecretaryType[ESecretaryType["temporaryHad"] = 2] = "temporaryHad";
        })(ESecretaryType = SE.ESecretaryType || (SE.ESecretaryType = {}));
        var ESecretary;
        (function (ESecretary) {
            ESecretary[ESecretary["skillExp"] = 2] = "skillExp";
            ESecretary[ESecretary["trainTime"] = 3] = "trainTime";
            ESecretary[ESecretary["searchTime"] = 4] = "searchTime";
            ESecretary[ESecretary["starSearch"] = 5] = "starSearch";
            ESecretary[ESecretary["cityTimes"] = 6] = "cityTimes";
            ESecretary[ESecretary["workTimes"] = 7] = "workTimes";
            ESecretary[ESecretary["visitTimes"] = 8] = "visitTimes";
            ESecretary[ESecretary["secretaryExpStart"] = 9] = "secretaryExpStart";
            ESecretary[ESecretary["secretaryExpEnd"] = 10] = "secretaryExpEnd";
            ESecretary[ESecretary["applicationDuration"] = 11] = "applicationDuration";
            ESecretary[ESecretary["applicationLicense"] = 12] = "applicationLicense";
            ESecretary[ESecretary["applicationLicenseNum"] = 13] = "applicationLicenseNum";
            ESecretary[ESecretary["freeGiftId"] = 1001] = "freeGiftId";
            ESecretary[ESecretary["moneyGiftId"] = 2001] = "moneyGiftId";
        })(ESecretary = SE.ESecretary || (SE.ESecretary = {}));
        var EManageMeet;
        (function (EManageMeet) {
            EManageMeet[EManageMeet["baseLine"] = 3] = "baseLine";
            EManageMeet[EManageMeet["baseIntervalTime"] = 1200] = "baseIntervalTime";
        })(EManageMeet = SE.EManageMeet || (SE.EManageMeet = {}));
        var EOscarType;
        (function (EOscarType) {
            EOscarType[EOscarType["man"] = 1] = "man";
            EOscarType[EOscarType["woman"] = 2] = "woman";
            EOscarType[EOscarType["perform"] = 3] = "perform";
            EOscarType[EOscarType["art"] = 4] = "art";
            EOscarType[EOscarType["publicPraise"] = 5] = "publicPraise";
            EOscarType[EOscarType["bestBoxOffice"] = 6] = "bestBoxOffice";
            EOscarType[EOscarType["totalBoxOffice"] = 7] = "totalBoxOffice";
            EOscarType[EOscarType["movies"] = 8] = "movies";
            EOscarType[EOscarType["bigSell"] = 9] = "bigSell";
        })(EOscarType = SE.EOscarType || (SE.EOscarType = {}));
        var EGMRefreshType;
        (function (EGMRefreshType) {
            EGMRefreshType[EGMRefreshType["dailySign"] = 0] = "dailySign";
            EGMRefreshType[EGMRefreshType["dailyTask"] = 1] = "dailyTask";
            EGMRefreshType[EGMRefreshType["dailyMall"] = 2] = "dailyMall";
            EGMRefreshType[EGMRefreshType["weeklyMall"] = 3] = "weeklyMall";
            EGMRefreshType[EGMRefreshType["manageProduce"] = 4] = "manageProduce";
        })(EGMRefreshType = SE.EGMRefreshType || (SE.EGMRefreshType = {}));
        var EItemUseType;
        (function (EItemUseType) {
            EItemUseType[EItemUseType["noReward"] = 0] = "noReward";
            EItemUseType[EItemUseType["allReward"] = 1] = "allReward";
            EItemUseType[EItemUseType["randomReward"] = 2] = "randomReward";
        })(EItemUseType = SE.EItemUseType || (SE.EItemUseType = {}));
        var EGuideType;
        (function (EGuideType) {
            EGuideType[EGuideType["guide"] = 1] = "guide";
            EGuideType[EGuideType["story"] = 2] = "story";
        })(EGuideType = SE.EGuideType || (SE.EGuideType = {}));
        var ENoticeType;
        (function (ENoticeType) {
            ENoticeType[ENoticeType["init"] = 1] = "init";
            ENoticeType[ENoticeType["add"] = 2] = "add";
            ENoticeType[ENoticeType["update"] = 4] = "update";
            ENoticeType[ENoticeType["remove"] = 8] = "remove";
        })(ENoticeType = SE.ENoticeType || (SE.ENoticeType = {}));
        var EGameDataOps;
        (function (EGameDataOps) {
            EGameDataOps[EGameDataOps["init"] = 1] = "init";
            EGameDataOps[EGameDataOps["add"] = 2] = "add";
            EGameDataOps[EGameDataOps["update"] = 4] = "update";
            EGameDataOps[EGameDataOps["remove"] = 8] = "remove";
        })(EGameDataOps = SE.EGameDataOps || (SE.EGameDataOps = {}));
        var ECommon = /** @class */ (function () {
            function ECommon() {
            }
            ECommon.MaxNameLenth = 20; // 名字最大长度
            ECommon.DefaultName = "Brad Pitt"; // 默认名字
            ECommon.MoveSpeed = 1.3; // 移动速度
            ECommon.CanJump = false; // 开启跳跃
            return ECommon;
        }());
        SE.ECommon = ECommon;
        var EChannel = /** @class */ (function () {
            function EChannel() {
            }
            EChannel.facebook = "1";
            EChannel.google = "2";
            return EChannel;
        }());
        SE.EChannel = EChannel;
        var ProtoVersion = /** @class */ (function () {
            function ProtoVersion() {
            }
            ProtoVersion.versionCode = 78; //协议版本号数字表示
            ProtoVersion.versionName = "0.7.8"; //协议版本号字符表示
            return ProtoVersion;
        }());
        SE.ProtoVersion = ProtoVersion;
        var DBOType = /** @class */ (function () {
            function DBOType() {
            }
            DBOType.UsrData = "UsrData";
            DBOType.GameInfo = "GameInfo";
            DBOType.GameInfoExt = "GameInfoExt";
            DBOType.GMMsgLog = "GMMsgLog";
            DBOType.OrderData = "OrderData";
            DBOType.ItemData = "ItemData";
            DBOType.StorySuitData = "StorySuitData";
            DBOType.StoryData = "StoryData";
            DBOType.ActorData = "ActorData";
            DBOType.CityData = "CityData";
            DBOType.ActorSkillEffect = "ActorSkillEffect";
            DBOType.TempData = "TempData";
            DBOType.MovieData = "MovieData";
            DBOType.ManageOrderData = "ManageOrderData"; // 经营订单
            DBOType.ProgressBoxData = "ProgressBoxData";
            DBOType.ManageProduceData = "ManageProduceData"; // 经营生产
            DBOType.MovieLicenceResetTimeData = "MovieLicenceResetTimeData";
            DBOType.ManageBusinessData = "ManageBusinessData"; // 经营公务
            DBOType.ManageVisitData = "ManageVisitData"; // 经营探班
            DBOType.StoryMessage = "StoryMessage";
            DBOType.RankListData = "RankListData";
            DBOType.TaskData = "TaskData"; // 任务结构
            DBOType.MallItemLimitData = "MallItemLimitData"; // 单个商品限购数据
            DBOType.MailData = "MailData";
            DBOType.ManageMeetingData = "ManageMeetingData"; // 经营会议
            DBOType.DanmuData = "DanmuData";
            DBOType.DailySign = "DailySign"; // 日常签到数据
            DBOType.SecretaryData = "SecretaryData"; // 小秘书功能
            DBOType.SevenAddUpData = "SevenAddUpData"; // 活动期间累计达到某种要求领取奖励
            DBOType.ActortExerciseData = "ActortExerciseData"; // 艺人训练队列
            DBOType.DailyEvent = "DailyEvent"; // 日程事件
            DBOType.GuideData = "GuideData"; // 引导数据
            DBOType.PlayerCooperateData = "PlayerCooperateData"; // 合作
            DBOType.AccountCooperateData = "AccountCooperateData"; // 账号邀请合作数据
            DBOType.AutoCooperateData = "AutoCooperateData"; // 公共邀请合作数据
            DBOType.CooperateTaskData = "CooperateTaskData"; // 合作任务
            DBOType.CooperateOrderData = "CooperateOrderData"; // 合作订单
            return DBOType;
        }());
        SE.DBOType = DBOType;
    })(SE = Proto.SE || (Proto.SE = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=SharedEnum.js.map