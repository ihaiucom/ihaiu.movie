var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    //====================
    // 消息发送器
    //--------------------
    var testSender = /** @class */ (function (_super) {
        __extends(testSender, _super);
        function testSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.test;
            return _this;
        }
        /**
         * 添加道具
         * @param floor
         */
        testSender.prototype.AddItem = function (itemId, amount) {
            var reqData = new Proto.API.test.AddItemRequest();
            reqData.itemId = itemId;
            reqData.amount = amount;
            this.send(reqData);
            if (Game.config.item.getType(itemId) == 14) {
                Game.moduleModel.street.UpdateStreetCup(amount);
            }
        };
        /**
         * 建造房间
         * @param floor
         * @param roomType
         */
        testSender.prototype.BuildRoom = function (floor, roomType) {
            var reqData = new Proto.API.CinemaBuild.BuildRoomRequest();
            reqData.floor = floor;
            reqData.roomType = roomType;
            this.send(reqData);
        };
        /**
         * 升级房间
         * @param roomId
         */
        testSender.prototype.UpgradeRoom = function (roomId) {
            var reqData = new Proto.API.CinemaBuild.UpgradeRoomRequest();
            reqData.roomId = roomId;
            this.send(reqData);
        };
        // AddActor(actorId, name)
        // {
        //     let reqData = new Proto.API.test.AddActorRequest();
        //     reqData.actorId = actorId;
        //     reqData.name = name;
        //     // this.send(reqData);
        // }
        testSender.prototype.AddFans = function (amount) {
            var reqData = new Proto.API.test.AddFansRequest();
            reqData.amount = amount;
            this.send(reqData);
        };
        testSender.prototype.AddSkillExp = function (actorId, amount) {
            var reqData = new Proto.API.test.AddActorSkillExpRequest();
            reqData.amount = amount;
            reqData.actorId = actorId;
            this.send(reqData);
        };
        /**
         *  增加期待值
         * @param amount   期待值数量
         */
        testSender.prototype.AddExpect = function (amount) {
            var req = new Proto.API.test.AddExpectRequest();
            req.amount = amount;
            this.send(req);
        };
        /**
         *  删除电影
         * @param uuid   电影id
         */
        testSender.prototype.DeleteMovie = function (uuid) {
            var req = new Proto.API.test.DeleteMovieRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *  添加剧本
         * @param storyId   剧本id
         */
        testSender.prototype.AddStory = function (storyId) {
            var req = new Proto.API.test.AddStoryRequest();
            req.storyId = storyId;
            this.send(req);
        };
        /**
         *  添加艺人技能经验
         * @param actorId   艺人id
         * @param amount
         */
        testSender.prototype.AddActorSkillExp = function (actorId, amount) {
            var req = new Proto.API.test.AddActorSkillExpRequest();
            req.actorId = actorId;
            req.amount = amount;
            this.send(req);
        };
        /**
         *
         * @param num
         */
        testSender.prototype.debug = function (num) {
            var req = new Proto.API.test.debugRequest();
            req.num = num;
            this.send(req);
        };
        /**
         * 添加剧本进度
         * @param uuid
         * @param index
         */
        testSender.prototype.AddStoryProgress = function (storyId, index) {
            var req = new Proto.API.test.AddStoryProgressRequest();
            req.index = index;
            req.storyId = storyId;
            this.send(req);
        };
        /**
         *  增加一个兑换码
         * @param giftUuid   兑换码
         * @param giftId   兑换码配置文件 id
         * @param targetId   指定使用者
         * @param startTime   开始时间
         * @param endTime   结束时间
         * @param total   总共可用次数
         */
        testSender.prototype.AddGift = function (giftUuid, giftId, targetId, startTime, endTime, total) {
            var req = new Proto.API.test.AddGiftRequest();
            req.giftUuid = giftUuid;
            req.giftId = giftId;
            req.targetId = targetId;
            req.startTime = startTime;
            req.endTime = endTime;
            req.total = total;
            this.send(req);
        };
        /**
         *
         * @param level   街区等级
         */
        testSender.prototype.SetBlockLevel = function (level) {
            var req = new Proto.API.test.SetBlockLevelRequest();
            req.level = level;
            this.send(req);
        };
        // /**
        //  *  增加日常任务的进度
        //  * @param id   任务配置表 id
        //  * @param amount   任务完成进度
        //  */
        // AddDailyTaskProgress(id: number, amount: number)
        // {
        //     let req = new Proto.API.test.AddDailyTaskProgressRequest();
        //     req.id = id;
        //     req.amount = amount;
        //     this.send(req);
        // }
        /**
         *  刷新时间
         * @param type   刷新类型
         */
        testSender.prototype.RefreshTime = function (type) {
            var req = new Proto.API.test.RefreshTimeRequest();
            req.type = type;
            this.send(req);
        };
        // /**
        //  * 
        //  * @param id   任务uuid
        //  */
        // addTaskProgress(id: string)
        // {
        //     let req = new Proto.API.test.addTaskProgressRequest();
        //     req.id = id;
        //     this.send(req);
        // }
        testSender.prototype.addStory = function (id) {
            var req = new Proto.API.test.AddStoryRequest();
            req.storyId = id;
            this.send(req);
        };
        /**
         *  奥斯卡颁奖
         */
        testSender.prototype.UpdateOscar = function () {
            var req = new Proto.API.test.UpdateOscarRequest();
            this.send(req);
        };
        /**
         *  完成订单
         * @param uuid   唯一订单编号
         */
        testSender.prototype.PutOrderItems = function (uuid) {
            var req = new Proto.API.test.PutOrderItemsRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *  将所有剧本设置为金本
         */
        testSender.prototype.setAllStoryGold = function () {
            var req = new Proto.API.test.setAllStoryGoldRequest();
            this.send(req);
        };
        /**
         *  设置小秘书状态
         * @param status   小秘书状态
         */
        testSender.prototype.SetSecretaryStatus = function (status) {
            var req = new Proto.API.test.SetSecretaryStatusRequest();
            req.status = status;
            this.send(req);
        };
        /**
         *  清除小秘书使用次数
         */
        testSender.prototype.CleanSecretaryTimes = function () {
            var req = new Proto.API.test.CleanSecretaryTimesRequest();
            this.send(req);
        };
        /**
         *  领取充值礼包
         */
        testSender.prototype.GetRechargeGift = function () {
            var req = new Proto.API.test.GetRechargeGiftRequest();
            this.send(req);
        };
        /**
         *
         */
        testSender.prototype.GetAutoCooperate = function () {
            var req = new Proto.API.test.GetAutoCooperateRequest();
            this.send(req);
        };
        /**
         *  一键解锁所有生产线 未加解锁限制判断 并且加了10000钻石以及 10000 生产图纸
         */
        testSender.prototype.LockAllProduce = function () {
            var req = new Proto.API.test.LockAllProduceRequest();
            this.send(req);
        };
        /**
         *   一键占领城市
         * @param id   1... 最后一个城市的编号
         */
        testSender.prototype.GotoCity = function (id) {
            var req = new Proto.API.test.GotoCityRequest();
            req.id = id;
            this.send(req);
        };
        /**
         *  添加剧本
         * @param starId   剧本星级
         * @param amount   数量
         */
        testSender.prototype.AddStarStory = function (starId, amount) {
            var req = new Proto.API.test.AddStarStoryRequest();
            req.starId = starId;
            req.amount = amount;
            this.send(req);
        };
        /**
         *  设置占领城市前状态
         * @param id   1... 最后一个城市的编号
         */
        testSender.prototype.GotoCityBefore = function (id) {
            var req = new Proto.API.test.GotoCityBeforeRequest();
            req.id = id;
            this.send(req);
        };
        /**
         *
         */
        testSender.prototype.FinishGuide = function () {
            var req = new Proto.API.test.FinishGuideRequest();
            this.send(req);
        };
        /**
         *  会议 公务 探班次数全满
         */
        testSender.prototype.AddManage = function () {
            var req = new Proto.API.test.AddManageRequest();
            this.send(req);
        };
        /**
         *  非雪藏艺人正常升级每次十级
         */
        testSender.prototype.SetAllActorLv = function () {
            var req = new Proto.API.test.SetAllActorLvRequest();
            this.send(req);
        };
        return testSender;
    }(Games.ProtoSender));
    Games.testSender = testSender;
})(Games || (Games = {}));
//# sourceMappingURL=testSender.js.map