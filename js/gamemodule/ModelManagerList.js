var Games;
(function (Games) {
    //======================
    // 模块 数据模型 管理器
    //----------------------
    var ModelManagerList = /** @class */ (function () {
        function ModelManagerList() {
            // 列表
            this.list = [];
            // 埋点数据
            // buriedPoint: BuriedPointModel = new BuriedPointModel();
            // 物品
            this.item = new Games.ItemModel();
            // 剧本
            this.story = new Games.StoryModel();
            //建造
            this.building = new Games.BuildingModel();
            //角色信息
            this.playerInfo = new Games.PlayerInfoModel();
            //艺人
            this.actor = new Games.ActorModel();
            // 战斗
            this.warData = new Games.WarModel();
            this.market = new Games.MarketModel();
            this.bag = new Games.BagModel();
            //生产
            this.produce = new Games.ProduceModel();
            this.mail = new Games.MailModel();
            this.shop = new Games.ShopModel();
            this.recharge = new Games.RechargeModel();
            // 任务 剧本成就
            this.task = new Games.TaskModel();
            // 订单
            this.order = new Games.OrderModel();
            // 宝箱
            this.progressBox = new Games.ProgressBoxModel();
            // 系统设置
            this.setting = new Games.SystemSettingModel();
            // 探班
            this.visit = new Games.VisitModel();
            // 公务
            this.business = new Games.BusinessModel();
            // 会议
            this.meeting = new Games.MeetingModel();
            // 活动
            this.activity = new Games.ActivityModel();
            // 排行榜
            this.rank = new Games.RankModel();
            // 日常
            this.mission = new Games.MissionModel();
            // 街区
            this.street = new Games.StreetModel();
            // 奥斯卡
            this.oscar = new Games.OscarModel();
            // 公告
            this.notice = new Games.NoticeModel();
            // 小秘书
            this.secretary = new Games.SecretaryModel();
            // 合作
            this.cooperation = new Games.CooperationModel();
            // 引导
            this.guide = new Games.GuideModel();
            // 功能
            this.func = new Games.FunctionModel();
            // 小目标数据模型
            this.targetPackage = new Games.TargetPackageModel();
        }
        // 初始化列表
        ModelManagerList.prototype.initList = function () {
            // this.list.push(this.buriedPoint);
            this.list.push(this.item);
            this.list.push(this.story);
            this.list.push(this.building);
            this.list.push(this.actor);
            this.list.push(this.warData);
            this.list.push(this.market);
            this.list.push(this.bag);
            this.list.push(this.playerInfo);
            this.list.push(this.produce);
            this.list.push(this.mail);
            this.list.push(this.mission);
            this.list.push(this.shop);
            this.list.push(this.recharge);
            this.list.push(this.task);
            this.list.push(this.order);
            this.list.push(this.progressBox);
            this.list.push(this.setting);
            this.list.push(this.rank);
            this.list.push(this.visit);
            this.list.push(this.business);
            this.list.push(this.meeting);
            this.list.push(this.activity);
            this.list.push(this.street);
            this.list.push(this.oscar);
            this.list.push(this.notice);
            this.list.push(this.secretary);
            this.list.push(this.cooperation);
            this.list.push(this.guide);
            this.list.push(this.func);
            this.list.push(this.targetPackage);
        };
        return ModelManagerList;
    }());
    Games.ModelManagerList = ModelManagerList;
})(Games || (Games = {}));
//# sourceMappingURL=ModelManagerList.js.map