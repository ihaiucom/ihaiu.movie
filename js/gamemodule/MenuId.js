var Games;
(function (Games) {
    // 模块ID
    var MenuId;
    (function (MenuId) {
        /*------------- 系统  ------------ */
        /** 主界面 */
        MenuId[MenuId["Home"] = 1] = "Home";
        /** 登录 */
        MenuId[MenuId["Login"] = 101] = "Login";
        /** 创建角色 */
        MenuId[MenuId["CreateRole"] = 102] = "CreateRole";
        /** 角色信息 */
        MenuId[MenuId["PlayerInfo"] = 103] = "PlayerInfo";
        /** 排行榜 */
        MenuId[MenuId["Rank"] = 104] = "Rank";
        /** 主线任务 */
        MenuId[MenuId["MainTask"] = 105] = "MainTask";
        /** 街区 */
        MenuId[MenuId["Street"] = 106] = "Street";
        /** 公告 */
        MenuId[MenuId["Notice"] = 107] = "Notice";
        /*------------- 主菜单  ------------ */
        /** 拍摄界面 */
        MenuId[MenuId["War"] = 3] = "War";
        /** 市场 */
        MenuId[MenuId["Market"] = 5] = "Market";
        /** 仓库 */
        MenuId[MenuId["Bag"] = 6] = "Bag";
        //艺人
        MenuId[MenuId["ArtistList"] = 4] = "ArtistList";
        MenuId[MenuId["ArtistDetail"] = 401] = "ArtistDetail";
        MenuId[MenuId["ActorDetail"] = 402] = "ActorDetail";
        MenuId[MenuId["ArtistFrozen"] = 403] = "ArtistFrozen";
        MenuId[MenuId["ArtistScoutResult"] = 404] = "ArtistScoutResult";
        MenuId[MenuId["ArtistScoutSuccess"] = 405] = "ArtistScoutSuccess";
        MenuId[MenuId["ArtistTrain"] = 406] = "ArtistTrain";
        MenuId[MenuId["ArtistTrainResult"] = 407] = "ArtistTrainResult";
        MenuId[MenuId["ArtistGet"] = 408] = "ArtistGet";
        MenuId[MenuId["ArtistShare"] = 409] = "ArtistShare";
        MenuId[MenuId["ArtListExercise"] = 410] = "ArtListExercise";
        /*------------- 右上角菜单  ------------ */
        /** 商城 */
        MenuId[MenuId["Shop"] = 21] = "Shop";
        /** 充值 */
        MenuId[MenuId["Recharge"] = 22] = "Recharge";
        /** 日常以及日常奖励 */
        MenuId[MenuId["Mission"] = 23] = "Mission";
        MenuId[MenuId["MissionReward"] = 231] = "MissionReward";
        /** 福利 */
        MenuId[MenuId["Weal"] = 24] = "Weal";
        /** 活动 */
        MenuId[MenuId["Event"] = 25] = "Event";
        /** 超级偶像 */
        MenuId[MenuId["SuperIdol"] = 26] = "SuperIdol";
        /*------------- 右下角菜单  ------------ */
        /** 设置 */
        MenuId[MenuId["SystemSetting"] = 31] = "SystemSetting";
        /** 邮件 */
        MenuId[MenuId["Mail"] = 32] = "Mail";
        /** 聊天 */
        MenuId[MenuId["Chat"] = 33] = "Chat";
        /*------------- 右中角菜单  ------------ */
        /** 奥斯卡 */
        MenuId[MenuId["Awards"] = 41] = "Awards";
        /** 小目标 */
        MenuId[MenuId["Goal"] = 42] = "Goal";
        /*------------- 经营子菜单  ------------ */
        /** 生产 */
        MenuId[MenuId["Produce"] = 51] = "Produce";
        /** 订单 */
        MenuId[MenuId["Order"] = 52] = "Order";
        /** 公务 */
        MenuId[MenuId["Official"] = 53] = "Official";
        /** 粉丝 */
        MenuId[MenuId["Fans"] = 54] = "Fans";
        /** 会议 */
        MenuId[MenuId["Meeting"] = 55] = "Meeting";
        /*------------- 管理子菜单  ------------ */
        /** 剧本 */
        MenuId[MenuId["StoryLibrary"] = 61] = "StoryLibrary";
        /** 院线 */
        MenuId[MenuId["Cinemas"] = 62] = "Cinemas";
        /** 编剧 */
        MenuId[MenuId["Screenwriter"] = 63] = "Screenwriter";
        /** 艺人名录 */
        MenuId[MenuId["Artist"] = 64] = "Artist";
        /** 宝物 */
        MenuId[MenuId["Treasure"] = 65] = "Treasure";
        /** 剧本信息  */
        MenuId[MenuId["StoryInfo"] = 6101] = "StoryInfo";
        /*------------- 社交子菜单  ------------ */
        /** 集团 */
        MenuId[MenuId["Group"] = 71] = "Group";
        /** 领袖 */
        MenuId[MenuId["Leader"] = 72] = "Leader";
        /** 合作 */
        MenuId[MenuId["Cooperation"] = 73] = "Cooperation";
        /*------------- 合作子菜单  ------------ */
        /** 合作任务 */
        MenuId[MenuId["CooperationTask"] = 81] = "CooperationTask";
        /** 合作订单 */
        MenuId[MenuId["CooperatOrder"] = 82] = "CooperatOrder";
        /** 送美元 */
        MenuId[MenuId["CooperatSentDollar"] = 83] = "CooperatSentDollar";
        /** 送金币 */
        MenuId[MenuId["CooperatSentGold"] = 84] = "CooperatSentGold";
        /** 有子菜单的按钮开始ID */
        MenuId[MenuId["SubMenuButtonBegin"] = 10000] = "SubMenuButtonBegin";
        /**主菜单 */
        MenuId[MenuId["Run"] = 10001] = "Run";
        MenuId[MenuId["Manage"] = 10002] = "Manage";
        MenuId[MenuId["Social"] = 10003] = "Social";
        /*------------- 建筑子菜单  ------------ */
        MenuId[MenuId["BuildRoomUpgrade"] = 201] = "BuildRoomUpgrade";
        MenuId[MenuId["BuildRoomList"] = 202] = "BuildRoomList";
    })(MenuId = Games.MenuId || (Games.MenuId = {}));
})(Games || (Games = {}));
//# sourceMappingURL=MenuId.js.map