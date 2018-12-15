var Games;
(function (Games) {
    //======================
    // 模块配置
    //----------------------
    var MenuWindows = /** @class */ (function () {
        function MenuWindows() {
        }
        MenuWindows.get = function (menuId) {
            return MenuWindows.dict.getValue(menuId);
        };
        MenuWindows.add = function (menuId, windowClass) {
            // 请在该地方配置menuId对应的 MWindow
            MenuWindows.dict.add(menuId, new Games.ModuleConfig(menuId, windowClass));
        };
        MenuWindows.install = function () {
            MenuWindows.add(Games.MenuId.Login, Games.LoginWindow);
            MenuWindows.add(Games.MenuId.CreateRole, Games.CreateRoleWindow);
            MenuWindows.add(Games.MenuId.Home, Games.HomeWindow);
            MenuWindows.add(Games.MenuId.Produce, Games.ProduceWindow);
            MenuWindows.add(Games.MenuId.Market, Games.MarketWindow);
            MenuWindows.add(Games.MenuId.Bag, Games.BagWindow);
            MenuWindows.add(Games.MenuId.Order, Games.OrderWindow);
            MenuWindows.add(Games.MenuId.ArtistList, Games.ArtistListWindow); //艺人列表
            MenuWindows.add(Games.MenuId.ArtistDetail, Games.ArtistDetailWindow); //艺人详情
            MenuWindows.add(Games.MenuId.ActorDetail, Games.ActorDetailWindow); //艺人介绍
            MenuWindows.add(Games.MenuId.ArtistFrozen, Games.ArtistFrozenWindow); //艺人雪藏
            MenuWindows.add(Games.MenuId.ArtistScoutResult, Games.ArtistScoutResultWindow); //艺人招募结果
            MenuWindows.add(Games.MenuId.ArtistScoutSuccess, Games.ArtistScoutSuccessWindow); //艺人招募成功
            MenuWindows.add(Games.MenuId.ArtistTrain, Games.ArtistTrainWindow); //艺人培训
            MenuWindows.add(Games.MenuId.ArtistTrainResult, Games.ArtistTrainResultWindow); //艺人培训结果
            MenuWindows.add(Games.MenuId.ArtistGet, Games.ArtistGetWindow); //艺人培训结果
            MenuWindows.add(Games.MenuId.ArtistShare, Games.ArtistShareWindow); //艺人分享
            MenuWindows.add(Games.MenuId.ArtListExercise, Games.ArtListExerciseWindow); //艺人训练
            MenuWindows.add(Games.MenuId.Artist, Games.ArtistDirectoryWindow); //艺人名录
            MenuWindows.add(Games.MenuId.ArtistAssistant, Games.ArtistAssistantWindow); //艺人课程
            MenuWindows.add(Games.MenuId.PlayerInfo, Games.PlayerInfoWindow);
            MenuWindows.add(Games.MenuId.War, Games.WarWindow);
            MenuWindows.add(Games.MenuId.StoryLibrary, Games.StoryLibraryWindow);
            MenuWindows.add(Games.MenuId.StoryInfo, Games.StoryInfoWindow);
            MenuWindows.add(Games.MenuId.Mail, Games.MailWindow);
            MenuWindows.add(Games.MenuId.Rank, Games.RankWindow);
            MenuWindows.add(Games.MenuId.Mission, Games.MissionWindow); //日常
            MenuWindows.add(Games.MenuId.MissionReward, Games.MissionWindow); //日常奖励
            MenuWindows.add(Games.MenuId.SystemSetting, Games.SysSettingWindow); // 设置
            MenuWindows.add(Games.MenuId.Event, Games.ActivityWindow); // 活动
            MenuWindows.add(Games.MenuId.Weal, Games.ActivityWindow); // 福利
            MenuWindows.add(Games.MenuId.Shop, Games.ShopWindow);
            MenuWindows.add(Games.MenuId.Recharge, Games.RechargeWindow);
            MenuWindows.add(Games.MenuId.Fans, Games.VisitWindow); //探班
            MenuWindows.add(Games.MenuId.Official, Games.BusinessWindow); //公务
            MenuWindows.add(Games.MenuId.Meeting, Games.MeetingWindow); //会议
            MenuWindows.add(Games.MenuId.Street, Games.StreetWindow); //街区
            MenuWindows.add(Games.MenuId.Awards, Games.OscarWindow); //奥斯卡
            MenuWindows.add(Games.MenuId.Goal, Games.LevelGiftWindow); //等级礼包
            MenuWindows.add(Games.MenuId.CupGift, Games.CupGiftWindow); //等级礼包
            MenuWindows.add(Games.MenuId.Notice, Games.PublicNoticeWindow); //通知--登录前的
            MenuWindows.add(Games.MenuId.MainTask, Games.MainTaskWindow); //主线任务
            MenuWindows.add(Games.MenuId.Cooperation, Games.CooperationWindow); //通知--登录前的
            MenuWindows.add(Games.MenuId.BuildRoomUpgrade, Games.BuildRoomUpgradeWindow); //房间升级
            MenuWindows.add(Games.MenuId.BuildRoomList, Games.BuildRoomListWindow); //房间建造列表
            MenuWindows.add(Games.MenuId.GoldExchange, Games.GoldExchangeWindow); //财务室
            MenuWindows.add(Games.MenuId.WarContinue, Games.WarContinueWindow); //持续收益
            MenuWindows.add(Games.MenuId.PopUp, Games.PopUpWindow); //登录弹窗
            MenuWindows.add(Games.MenuId.GuideComplete, Games.GuideCompleteWindow); //主线奖励弹窗
        };
        MenuWindows.dict = new Dictionary();
        return MenuWindows;
    }());
    Games.MenuWindows = MenuWindows;
})(Games || (Games = {}));
//# sourceMappingURL=MenuWindows.js.map