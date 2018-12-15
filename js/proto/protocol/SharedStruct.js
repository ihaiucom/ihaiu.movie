/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 */
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
var Proto;
(function (Proto) {
    var SS;
    (function (SS) {
        var DBBase = /** @class */ (function () {
            function DBBase() {
            }
            return DBBase;
        }());
        SS.DBBase = DBBase;
        var DBObject = /** @class */ (function (_super) {
            __extends(DBObject, _super);
            function DBObject() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.uuid = "";
                return _this;
            }
            return DBObject;
        }(DBBase));
        SS.DBObject = DBObject;
        var ShardDBObject = /** @class */ (function (_super) {
            __extends(ShardDBObject, _super);
            function ShardDBObject() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.uuid = "";
                _this.entityId = 0;
                return _this;
            }
            return ShardDBObject;
        }(DBBase));
        SS.ShardDBObject = ShardDBObject;
        var UsrData = /** @class */ (function (_super) {
            __extends(UsrData, _super);
            function UsrData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.usrName = ""; // 玩家名字
                _this.channel = ""; // 渠道代码
                _this.registerTime = 0; // 注册时间 unix时间戳
                _this.registerIP = ""; // 注册IP
                _this.lastLoginTime = 0; // 次登录时间 unix时间戳
                _this.lastLoginIP = ""; // 上次登录IP
                _this.usrState = 0; // 玩家状态
                _this.usrRemark = ""; // 状态注释
                _this.usrFreezeTime = 0; // 冻结的到期时间 0是永久冻结 unix时间戳
                return _this;
            }
            return UsrData;
        }(ShardDBObject));
        SS.UsrData = UsrData;
        var RoomInfo = /** @class */ (function () {
            function RoomInfo() {
                this.roomId = 0; // 房间ID
                this.floor = 0; // 房间所在楼层
            }
            return RoomInfo;
        }());
        SS.RoomInfo = RoomInfo;
        var GameInfo = /** @class */ (function (_super) {
            __extends(GameInfo, _super);
            function GameInfo() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = ""; // 玩家名字
                _this.portrait = 0; // 头像id
                _this.sex = 0; // 性别
                _this.level = 0; // 等级
                _this.fans = 0; // 粉丝数量
                _this.cup = 0; // 奖杯数量
                _this.stall = 0; // 比赛档次
                _this.vipLevel = 0; // vip等级
                _this.vipExp = 0; // vip经验
                _this.extendFloor = 0; // 扩建的楼层
                _this.buildRoomInfo = null; // 建造的房间信息
                _this.maxActor = 0; // 最大艺人数
                _this.maxHideActor = 0; // 最大隐藏艺人数
                _this.noseIntoNum = 0; // 查探次数
                _this.noseIntoTime = 0; // 查探时间
                _this.resetNoseIntoTime = 0; // 查探次数,时间重置时间
                _this.noseIntoActorEffectTime = 0; // 查探的艺人生效时间
                _this.noseIntoActorList = null; // 查探的艺人ID
                _this.expected = 0; // 期待值
                _this.daysCultivateCount = 0; // 今日公司培养次数
                _this.resetDaysCultivateCountTime = 0; // 每日重置时间
                _this.dailyTaskUpdateTime = 0; // 日常任务更新时间
                _this.achievementTaskUpdateTime = 0; // 成就任务更新时间
                _this.mallLimitDailyUpdateTime = 0; // 商城每日限购更新时间
                _this.mallLimitWeeklyUpdateTime = 0; // 商城每周限购更新时间
                _this.findStoryTime = 0; // 搜罗次数
                _this.lastTimeFindStory = 0; // 上次搜罗时间
                _this.lastResetTime = 0; // 上次夸天重置时间
                _this.theaterIds = null; // 院线信息
                _this.lastGetStreetRewardTimt = 0; // 上次领取街区奖励的时间
                _this.lastSendGroupRankListTime = 0; // 上次祝贺总票房时间
                _this.lastSendGroupMovieRankListTime = 0; // 上次祝贺最高票房时间
                _this.sendGroupRankListTimes = 0; // 祝贺次数
                _this.initActorId = 0; // 初始化选择艺人id
                return _this;
            }
            return GameInfo;
        }(ShardDBObject));
        SS.GameInfo = GameInfo;
        var GameInfoExt = /** @class */ (function (_super) {
            __extends(GameInfoExt, _super);
            function GameInfoExt() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.perSignature = ""; // 个性签名
                _this.totalFilm = 0; // 拍摄过的电影数
                _this.numBoxOffice = 0; // 票房总数
                _this.numOrders = 0; // 订单总数
                _this.numProductionLine = 0; // 最高档生产线
                _this.numOfficialBusiness = 0; // 公务次数
                _this.numMeeting = 0; // 会议次数
                _this.numVisit = 0; // 拜访次数
                _this.numGroupBest = 0; // 分组第一次数
                _this.numBestArtDirection = 0; // 获得最佳艺术指导奖次数
                _this.numBestPerformer = 0; // 获得最佳表演奖次数
                _this.numBestPublicPraise = 0; // 获得最受欢迎奖次数
                _this.numGoldenOliveAward = 0; // 获得金橄榄奖次数
                _this.bestWordOfMouth = 0; // 最高口碑
                _this.bestWordOfMouthFilm = ""; // 口碑最高的电影
                _this.bestBoxOffice = 0; // 最高票房
                _this.bestBoxOfficeFilm = ""; // 票房最高的电影
                _this.numNarrativeFilm = 0; // 叙事片数量
                _this.numActionFilm = 0; // 动作片数量
                _this.numAffectionalFilm = 0; // 爱情片数量
                _this.numCartoonFilm = 0; // 动画片数量
                _this.numComedyFilm = 0; // 喜剧片数量
                _this.numMusicalFilm = 0; // 歌舞片数量
                _this.numHorrorFilm = 0; // 恐怖片数量
                _this.numSuspense = 0; // 悬疑片数量
                _this.portraitList = null; // 头像ID列表
                return _this;
            }
            return GameInfoExt;
        }(ShardDBObject));
        SS.GameInfoExt = GameInfoExt;
        var ItemDesc = /** @class */ (function () {
            function ItemDesc() {
                this.itemId = 0; // 配置表id
                this.amount = 0; // 奖励物品数量
            }
            return ItemDesc;
        }());
        SS.ItemDesc = ItemDesc;
        var GMMsgLog = /** @class */ (function (_super) {
            __extends(GMMsgLog, _super);
            function GMMsgLog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.messageId = 0;
                _this.publishTypeCode = 0;
                _this.receiveCount = 0; // 接受次数
                _this.receiveTime = 0; // unix时间戳
                return _this;
            }
            return GMMsgLog;
        }(ShardDBObject));
        SS.GMMsgLog = GMMsgLog;
        var OrderData = /** @class */ (function (_super) {
            __extends(OrderData, _super);
            function OrderData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.entityId = 0;
                _this.orderId = 0; // 订单号
                _this.outerOrderId = ""; // 三方订单id
                _this.productId = ""; // 商品编号
                _this.productNum = 0; // 商品数量
                _this.createTime = 0; // unix时间戳
                _this.paymentTime = 0; // unix时间戳 (收到第三方支付系统成功支付的回调的时间)
                _this.handleCount = 0; // 处理次数
                return _this;
            }
            return OrderData;
        }(DBObject));
        SS.OrderData = OrderData;
        var Notice = /** @class */ (function () {
            function Notice() {
                this.title = ""; // 标题
                this.content = ""; // 内容
                this.messageDetailUrl = "";
                this.itemList = null; // 奖励列表
            }
            return Notice;
        }());
        SS.Notice = Notice;
        var MailDesc = /** @class */ (function () {
            function MailDesc() {
                this.title = ""; // 标题
                this.content = ""; // 内容
                this.itemList = null; // 奖励列表
                this.createTime = 0; // 创建时间
                this.endTime = 0; // 过期时间
                this.IsRewardGot = false;
                this.isNew = false; // 是否是新邮件
            }
            return MailDesc;
        }());
        SS.MailDesc = MailDesc;
        var ItemData = /** @class */ (function (_super) {
            __extends(ItemData, _super);
            function ItemData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.itemId = 0; // 对应的策划表id
                _this.amount = 0; // 物品的数量
                _this.createTime = 0; // 创建(获得)时间
                return _this;
            }
            return ItemData;
        }(ShardDBObject));
        SS.ItemData = ItemData;
        var StorySuitData = /** @class */ (function (_super) {
            __extends(StorySuitData, _super);
            function StorySuitData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.storySuitId = 0; // 剧本套id
                _this.progress = 0; // 集齐剧本进度
                _this.progress2 = 0; // 剧本目标进度
                _this.status = 0; // 状态
                return _this;
            }
            return StorySuitData;
        }(ShardDBObject));
        SS.StorySuitData = StorySuitData;
        var StoryData = /** @class */ (function (_super) {
            __extends(StoryData, _super);
            function StoryData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.storyId = 0; // 剧本id
                _this.storyProgressInfo = null; // 每个剧本所要达成的目标列表
                _this.status = 0; // 状态
                _this.progress = 0; // 进度
                _this.maxScore = 0; // 最高票房
                _this.shootLastTime = 0; // 上次拍摄时间
                return _this;
            }
            return StoryData;
        }(ShardDBObject));
        SS.StoryData = StoryData;
        var StoryProgress = /** @class */ (function () {
            function StoryProgress() {
                this.id = 0; // 1拍摄剧本 2媒体评分 3票房大卖以上
                this.progress = 0; // 进度
                this.status = 0; // 是否完成
            }
            return StoryProgress;
        }());
        SS.StoryProgress = StoryProgress;
        var Assets = /** @class */ (function () {
            function Assets() {
                this.giveType = 0; // 赠送的类型
                this.giveLevel = 0; // 赠送的等级
                this.giveItemList = null; // 赠送的物品
                this.extraGiveACLimit = 0; // 额外赠送物品上限
            }
            return Assets;
        }());
        SS.Assets = Assets;
        var shootInfo = /** @class */ (function () {
            function shootInfo() {
                this.type = 0; // 拍摄类型
                this.proficiencyExp = 0; // 熟练经验
                this.proficiencyLevel = 0; // 熟练等级
            }
            return shootInfo;
        }());
        SS.shootInfo = shootInfo;
        var skillTriggerCondition = /** @class */ (function () {
            function skillTriggerCondition() {
                this.type = 0; // 触发条件类型
                this.value = 0; // 触发条件数值
            }
            return skillTriggerCondition;
        }());
        SS.skillTriggerCondition = skillTriggerCondition;
        var skillInfo = /** @class */ (function () {
            function skillInfo() {
                this.skillId = 0; // 技能ID
                this.isEffect = false; // 是否生效
                this.triggerCondition = null; // 触发技能的条件,多个条件，有一个满足就生效
            }
            return skillInfo;
        }());
        SS.skillInfo = skillInfo;
        var ActorData = /** @class */ (function (_super) {
            __extends(ActorData, _super);
            function ActorData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.actorId = 0; // 艺人id
                _this.name = ""; // 艺人名字
                _this.hide = false; // 是否雪藏
                _this.level = 0; // 等级
                _this.levelExp = 0; // 等级进度
                _this.payCheck = 0; // 片酬
                _this.stamina = 0; // 体力
                _this.staminaLimit = 0; // 体力上限
                _this.LoyaltyExp = 0; // 忠诚度经验
                _this.LoyaltyLevel = 0; // 忠诚度等级
                _this.cultivateCount = 0; // 培养次数
                _this.cultivateCountLimit = 0; // 培养次数上限
                _this.giveAssetsCount = 0; // 赠送资产次数
                _this.giveAssetsCountLimit = 0; // 赠送资产次数上限
                _this.giveAssetsList = null; // 赠送资产列表
                _this.skillExp = 0; // 技能经验
                _this.skillList = null; // 技能信息列表
                _this.shootTypeList = null; // 拍摄类型熟练度
                _this.spectacle = 0; // 场面属性
                _this.perform = 0; // 表演属性
                _this.plot = 0; // 剧情属性
                _this.art = 0; // 艺术属性
                _this.boxOfficeCount = 0; // 参与拍摄票房影响力总和
                _this.cupCount = 0; // 获取奖杯数量
                _this.movieCount = 0; // 拍摄电影次数
                _this.entertainment = 0; // 娱乐属性
                _this.produceId = 0; // 生产线id
                _this.assistantInfos = null; // 助理信息
                return _this;
            }
            return ActorData;
        }(ShardDBObject));
        SS.ActorData = ActorData;
        var AssistantInfo = /** @class */ (function () {
            function AssistantInfo() {
                this.id = 0; // 助理id  1 2 3 4
                this.level = 0; // 助理等级
                this.actorSign = 0; // 增加的艺人标签
            }
            return AssistantInfo;
        }());
        SS.AssistantInfo = AssistantInfo;
        var CityData = /** @class */ (function (_super) {
            __extends(CityData, _super);
            function CityData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastCity = 0; // 最后一个城市
                _this.headquarters = 0; // 总部城市
                _this.ambassador = null; // 形象大使
                _this.maxGold = 0; // 金币上限
                _this.maxFans = 0; // 粉丝上限
                _this.speedGold = 0; // 金币掉落速度
                _this.speedFans = 0; // 粉丝掉落速度
                _this.lastGold = 0; // 上次更新掉落的金币
                _this.lastFans = 0; // 上次更新掉落的粉丝
                _this.lastDropTimestamp = 0; // 上次更新掉落的时间戳
                _this.lastTime = 0; // 上次结算时间
                _this.dropList = null; // 掉落列表
                _this.lastArea = 0; // 当前宣传的地区
                _this.lastAreaProgress = 0; // 当前宣传进度
                _this.propagandaActor = 0; // 宣传大使
                _this.roadShowFlag = false; // 路演成功标记
                return _this;
            }
            return CityData;
        }(ShardDBObject));
        SS.CityData = CityData;
        var skillEffectInfo = /** @class */ (function () {
            function skillEffectInfo() {
                this.actId = 0; // 技能ID
                this.value = 0.0; // 增加的数值%
            }
            return skillEffectInfo;
        }());
        SS.skillEffectInfo = skillEffectInfo;
        var ActorSkillEffect = /** @class */ (function (_super) {
            __extends(ActorSkillEffect, _super);
            function ActorSkillEffect() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.getGoldSpeed = 0.0; // 获得金币速度
                _this.productionEarnings = 0.0; // 生产线收益
                _this.actorPaycheck = null; // 演员片酬
                _this.boxOfficeEarnings = null; // 收益票房
                _this.cityGetGoldTime = 0.0; // 城市获取金币时间
                _this.upgradeGoldCost = null; // 升级金币消耗
                _this.shootTotalAttrIncrease = null; // 拍摄时全属性增加
                return _this;
            }
            return ActorSkillEffect;
        }(ShardDBObject));
        SS.ActorSkillEffect = ActorSkillEffect;
        var TempData = /** @class */ (function (_super) {
            __extends(TempData, _super);
            function TempData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastResetTime = 0; // 上次重置时间
                return _this;
            }
            return TempData;
        }(ShardDBObject));
        SS.TempData = TempData;
        var MovieData = /** @class */ (function (_super) {
            __extends(MovieData, _super);
            function MovieData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.movieId = 0; // 电影id
                _this.name = ""; // 电影名字
                _this.state = 0; // 当前状态
                _this.data = null; // 艺人选择 / 剧本选择
                _this.movieCost = null; // 电影成本
                _this.expected = null; // 市场期待
                _this.battleData = null; // 战斗过程
                _this.battleDataEx = null; // 战斗过程
                _this.type = 0; // 拍摄类型
                _this.actorShootType = null; // 艺人熟练度增加经验
                _this.isTired = false; // 是否疲劳
                _this.isGetStoryGoals = false; // 是否领取剧本奖励
                _this.mediaVisit = null; // 媒体访问
                _this.mExpected = 0; // 期待值
                _this.mediaCommend = 0; // 平均媒体评价
                _this.mediaCommendArr = null; // 媒体评价
                _this.praise = 0; // 媒体评价获得的点赞数
                _this.premiereBoxOffice = 0; // 首映票房
                _this.extBoxOffice = 0; // 额外票房
                _this.publicPraise = 0; // 观众口碑
                _this.runDays = null; // 上映天数
                _this.totalBoxOffice = 0; // 总票房
                _this.totalMovieCost = 0; // 总成本
                _this.evaluationCon = 0; // 评价系数
                _this.attribute = null; // 依次对应5种属性结果, 场面, 表演, 剧情, 艺术, 娱乐
                _this.maxAttribute = null; // 5种属性最大值, 场面, 表演, 剧情, 艺术, 娱乐
                _this.avrAttribute = null; // 5种属性平均值, 场面, 表演, 剧情, 艺术, 娱乐
                _this.dropCount = 0; // 随机次数
                _this.boxOfficeEvaluation = 0; // 票房评价
                _this.extendCity = 0; // 推广城市id
                _this.attentionValue = 0; // 推广关注度
                _this.attentionProgress = 0; // 推广关注度进度
                _this.dropItemList = null; // 掉落物品
                _this.contineTransceiver = 0; // 持续收益
                _this.startTime = 0; // 开始时间戳
                _this.lastTime = 0; // 上次操作时间
                return _this;
            }
            return MovieData;
        }(ShardDBObject));
        SS.MovieData = MovieData;
        var BattleData = /** @class */ (function () {
            function BattleData() {
                this.actorId = 0; // 艺人id
                this.propertyId = 0; // 属性id
                this.value = 0; // 属性值
            }
            return BattleData;
        }());
        SS.BattleData = BattleData;
        var CityGainsInfo = /** @class */ (function () {
            function CityGainsInfo() {
                this.itemId = 0; // 物品ID
                this.speed = 0; // 速度
                this.limit = 0; // 上限
                this.baseNum = 0; // 基础值
            }
            return CityGainsInfo;
        }());
        SS.CityGainsInfo = CityGainsInfo;
        var MediaVisitDesc = /** @class */ (function () {
            function MediaVisitDesc() {
                this.mediaId = 0; // 媒体id
                this.level = 0; // 媒体等级
                this.bAccept = false; // 是否接受
            }
            return MediaVisitDesc;
        }());
        SS.MediaVisitDesc = MediaVisitDesc;
        var ManageOrderData = /** @class */ (function (_super) {
            __extends(ManageOrderData, _super);
            function ManageOrderData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.orderId = 0; // 经营订单ID
                _this.items = null; // 已经塞入的物品
                _this.position = 0; // 订单位置信息
                _this.lastTime = 0; // 订单开始时间
                _this.delFlag = false; // 是否是删除订单 true表示被删除了
                return _this;
            }
            return ManageOrderData;
        }(ShardDBObject));
        SS.ManageOrderData = ManageOrderData;
        var OrderItems = /** @class */ (function () {
            function OrderItems() {
                this.itemId = 0;
                this.amount = 0;
                this.portrait = 0; // 自己放的为0 好友帮忙的是好友的头像
            }
            return OrderItems;
        }());
        SS.OrderItems = OrderItems;
        var ProgressBoxData = /** @class */ (function (_super) {
            __extends(ProgressBoxData, _super);
            function ProgressBoxData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.moduleId = 0; // 模块ID 读取enum.json里 
                _this.progress = 0; // 宝箱进度
                _this.staus = 0; // 领取宝箱状态
                _this.lastTime = 0; // 上次领取时间
                return _this;
            }
            return ProgressBoxData;
        }(ShardDBObject));
        SS.ProgressBoxData = ProgressBoxData;
        var ManageProduceData = /** @class */ (function (_super) {
            __extends(ManageProduceData, _super);
            function ManageProduceData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.produceId = 0; // 生产ID
                _this.hadNum = 0; // 已经生产了多少个
                _this.actId = 0; // 派遣的艺人ID
                _this.level = 0; // 生产线等级
                _this.skills = null; // 生产技能列表
                _this.randomNums = null; // 生产倍数
                _this.produceNum = 0; // 排队生产多少个
                _this.lastTime = 0; // 开始生产时间
                _this.hadProduceTimes = 0; // 领取的时候清零，方便合作任务计算生产次数
                return _this;
            }
            return ManageProduceData;
        }(ShardDBObject));
        SS.ManageProduceData = ManageProduceData;
        var SkillLevel = /** @class */ (function () {
            function SkillLevel() {
                this.skillId = 0; // 技能ID 1队列数量 2 储存上限 3 生产时长 4 每次产出
                this.level = 0; // 技能等级
            }
            return SkillLevel;
        }());
        SS.SkillLevel = SkillLevel;
        var AttrChangeInfo = /** @class */ (function () {
            function AttrChangeInfo() {
                this.attrId = 0; // 属性id
                this.value = 0; // 改变的值
            }
            return AttrChangeInfo;
        }());
        SS.AttrChangeInfo = AttrChangeInfo;
        var MovieLicenceResetTimeData = /** @class */ (function (_super) {
            __extends(MovieLicenceResetTimeData, _super);
            function MovieLicenceResetTimeData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastResetTime = 0; // 上次刷新时间
                _this.dailyCount = 0; // 当天恢复数量
                _this.lastUpdateTime = 0; // 上次恢复时间
                _this.cd = 0; // 当前cd值
                return _this;
            }
            return MovieLicenceResetTimeData;
        }(ShardDBObject));
        SS.MovieLicenceResetTimeData = MovieLicenceResetTimeData;
        var ManageBusinessData = /** @class */ (function (_super) {
            __extends(ManageBusinessData, _super);
            function ManageBusinessData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.businessId = 0; // 公务ID
                _this.dailyCount = 0; // 当天阅读次数
                _this.lineLimit = 0; // 公务队列上限
                _this.lastUpdateTime = 0; // 上次恢复时间
                _this.lastResetTime = 0; // 上次刷新时间
                return _this;
            }
            return ManageBusinessData;
        }(ShardDBObject));
        SS.ManageBusinessData = ManageBusinessData;
        var ManageVisitData = /** @class */ (function (_super) {
            __extends(ManageVisitData, _super);
            function ManageVisitData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.visitId = 0; // 探班ID
                _this.actId = 0; // 艺人ID
                _this.startTime = 0; // 开始探班的时间
                _this.lastTime = 0; // 探班队列刷新时间
                _this.lineLimit = 0; // 探班队列上限
                _this.intervalTime = 0; // 间隔时间
                _this.isReceptior = false; // 是否正处于接待
                return _this;
            }
            return ManageVisitData;
        }(ShardDBObject));
        SS.ManageVisitData = ManageVisitData;
        var StoryMessageDesc = /** @class */ (function () {
            function StoryMessageDesc() {
                this.name = ""; // 玩家名字
                this.userId = 0; // 玩家id
                this.portrait = 0; // 头像id
                this.sex = 0; // 性别
                this.level = 0; // 玩家等级
                this.timestamp = 0; // 留言时间
                this.message = ""; // 信息
            }
            return StoryMessageDesc;
        }());
        SS.StoryMessageDesc = StoryMessageDesc;
        var StoryMessage = /** @class */ (function (_super) {
            __extends(StoryMessage, _super);
            function StoryMessage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.storyId = 0;
                _this.message = null;
                return _this;
            }
            return StoryMessage;
        }(DBObject));
        SS.StoryMessage = StoryMessage;
        var ActorShortDesc = /** @class */ (function () {
            function ActorShortDesc() {
                this.actorId = 0;
                this.name = "";
            }
            return ActorShortDesc;
        }());
        SS.ActorShortDesc = ActorShortDesc;
        var MovieShortData = /** @class */ (function () {
            function MovieShortData() {
                this.userId = 0; // id
                this.uuid = ""; // 电影唯一id(MovieData.uuid)
                this.movieId = 0; // 电影id
                this.name = ""; // 电影名字
                this.data = null; // 艺人选择 / 剧本选择
                this.type = 0; // 拍摄类型
                this.totalBoxOffice = 0; // 票房
                this.boxOfficeEvaluation = 0; // 票房等级评价
                this.mediaCommend = 0; // 平均媒体评价
                this.publicPraise = 0; // 观众口碑
            }
            return MovieShortData;
        }());
        SS.MovieShortData = MovieShortData;
        var BestMovieDesc = /** @class */ (function () {
            function BestMovieDesc() {
                this.movieUuid = ""; // uuid
                this.movieId = 0; // 电影id
                this.name = ""; // 电影名字
                this.totalBoxOffice = 0; // 总票房
                this.boxOfficeEvaluation = 0; // 票房等级评价
            }
            return BestMovieDesc;
        }());
        SS.BestMovieDesc = BestMovieDesc;
        var PlayerShortData = /** @class */ (function () {
            function PlayerShortData() {
                this.userId = 0; // id
                this.portrait = 0; // 头像id
                this.sex = 0; // 性别
                this.name = ""; // 名字
                this.level = 0; // 等级
                this.blockLevel = 0; // 街区等级
                this.perSignature = ""; // 个性签名
                this.city = 0; // 时长占领
                this.numActor = 0; // 艺人数量
                this.numBuilding = 0; // 建筑层数
                this.boxOfficeEvaluation = null; // 票房评价对应次数
                this.dailyBestMovie = ""; // 每日票房最佳 uuid
                this.bestMovie = null; // 票房前三
            }
            return PlayerShortData;
        }());
        SS.PlayerShortData = PlayerShortData;
        var ServerListDesc = /** @class */ (function () {
            function ServerListDesc() {
                this.portrait = 0; // 头像id
                this.sex = 0; // 性别
                this.name = ""; // 名字
                this.userId = 0; // id
                this.movieUuid = "";
                this.movieId = 0; // 电影id
                this.movieName = "";
                this.totalBoxOffice = 0; // 总票房
            }
            return ServerListDesc;
        }());
        SS.ServerListDesc = ServerListDesc;
        var GroupListDesc = /** @class */ (function () {
            function GroupListDesc() {
                this.portrait = 0; // 头像id
                this.sex = 0; // 性别
                this.name = ""; // 名字
                this.userId = 0; // id
                this.totalBoxOffice = 0; // 总票房
            }
            return GroupListDesc;
        }());
        SS.GroupListDesc = GroupListDesc;
        var GroupMovieListDesc = /** @class */ (function () {
            function GroupMovieListDesc() {
                this.name = ""; // 名字
                this.movieUuid = "";
                this.movieId = 0; // 电影id
                this.movieName = ""; // 电影名字
                this.userId = 0; // id
                this.totalBoxOffice = 0; // 总票房
            }
            return GroupMovieListDesc;
        }());
        SS.GroupMovieListDesc = GroupMovieListDesc;
        var SelfRankListDesc = /** @class */ (function () {
            function SelfRankListDesc() {
                this.MainRank = 0; // 全服排名
                this.groupList = 0; // 分组总排行排名
                this.serverName = ""; // 服务器名称
            }
            return SelfRankListDesc;
        }());
        SS.SelfRankListDesc = SelfRankListDesc;
        var RankListData = /** @class */ (function (_super) {
            __extends(RankListData, _super);
            function RankListData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.entityId = 0;
                _this.serverId = 0; // 服务器id
                _this.serverUuid = ""; // 服务器唯一id
                _this.groupId = 0; // 分组id
                _this.lastGroupId = 0; // 昨天的街区分组
                _this.lastRank = 0; // 昨日排名
                _this.lastWeakRank = 0; // 上周排名
                _this.propaganda_department = 0; // 建造宣传部的时间
                _this.isGetLastReward = false; // 是否领取昨日奖励
                _this.isChangeServerName = false; // 是否修改过服务器名字
                _this.big_sell = 0; // 大卖电影数量
                _this.totalBoxOffice = 0; // 最高总票房
                _this.totalBoxOfficeRank = 0; // 最高总票房排名
                _this.historyBestTotalBoxOffice = 0; // 历史总票房最佳
                _this.historyBestTotalBoxOfficeRank = 0; // 历史总票房最佳排名
                _this.historyBestTotalBexOfficeBlockLevel = 0; // 历史最佳的街区
                _this.historyBestTotalBexOfficeTotal = 0; // 当前街区玩家人数
                _this.historyIsNew = false; // 是否新记录
                _this.movies = 0; // 电影拍摄数量
                _this.bestBoxOffice = 0; // 最高票房
                _this.bestBoxOfficeName = ""; // 最高票房电影
                _this.bestBoxOfficeRank = 0; // 最高票房排名
                _this.rewardFlags = null; // 奖励领取标记
                _this.isNew = false; // 是否当天第一次获取
                return _this;
            }
            return RankListData;
        }(DBObject));
        SS.RankListData = RankListData;
        var TaskData = /** @class */ (function (_super) {
            __extends(TaskData, _super);
            function TaskData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.cid = 0; // 对应的策划表id
                _this.type = 0; // 任务类型
                _this.progress = 0; // 完成进度
                _this.state = 0; // 成就或任务状态
                return _this;
            }
            return TaskData;
        }(ShardDBObject));
        SS.TaskData = TaskData;
        var MallItemLimitData = /** @class */ (function (_super) {
            __extends(MallItemLimitData, _super);
            function MallItemLimitData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.id = 0; // 商品id
                _this.type = 0; // 限购类型
                _this.amount = 0; // 已经购买的个数
                return _this;
            }
            return MallItemLimitData;
        }(ShardDBObject));
        SS.MallItemLimitData = MallItemLimitData;
        var MailData = /** @class */ (function (_super) {
            __extends(MailData, _super);
            function MailData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.title = ""; // 标题
                _this.content = ""; // 内容
                _this.itemList = null; // 奖励列表
                _this.createTime = 0; // 创建时间
                _this.endTime = 0; // 过期时间
                _this.IsRewardGot = false;
                _this.isNew = false; // 是否是新邮件
                return _this;
            }
            return MailData;
        }(ShardDBObject));
        SS.MailData = MailData;
        var ManageMeetingData = /** @class */ (function (_super) {
            __extends(ManageMeetingData, _super);
            function ManageMeetingData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.meetID = 0; // 会议ID
                _this.randResult = 0; // 选择的随机结果
                _this.lastTime = 0; // 会议队列刷新时间
                _this.lineLimit = 0; // 会议队列上限
                _this.intervalTime = 0; // 间隔时间
                return _this;
            }
            return ManageMeetingData;
        }(ShardDBObject));
        SS.ManageMeetingData = ManageMeetingData;
        var DanmuItem = /** @class */ (function () {
            function DanmuItem() {
                this.id = 0; // 用户 id
                this.name = ""; // 用户姓名
                this.time = 0; // 时间戳
                this.msg = ""; // 弹幕消息
            }
            return DanmuItem;
        }());
        SS.DanmuItem = DanmuItem;
        var DanmuData = /** @class */ (function (_super) {
            __extends(DanmuData, _super);
            function DanmuData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.data = null; // 弹幕数据
                return _this;
            }
            return DanmuData;
        }(DBObject));
        SS.DanmuData = DanmuData;
        var DailySign = /** @class */ (function (_super) {
            __extends(DailySign, _super);
            function DailySign() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.count = 0; // 签到数
                _this.updateTime = 0; // 更新时间
                return _this;
            }
            return DailySign;
        }(ShardDBObject));
        SS.DailySign = DailySign;
        var SecretaryData = /** @class */ (function (_super) {
            __extends(SecretaryData, _super);
            function SecretaryData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.secretaryType = 0; // 秘书存在类型 0 未获取 1终身拥有 2暂时拥有
                _this.timeList = null; // 每个操作对应的次数列表
                _this.lastTime = 0; // 上次更新数据时间
                _this.applyFrequency = 0; // 申请次数 
                _this.applyLastTime = 0; // 上次申请时间
                _this.isApply = false; // 是否申请
                return _this;
            }
            return SecretaryData;
        }(ShardDBObject));
        SS.SecretaryData = SecretaryData;
        var SecretaryKeyValue = /** @class */ (function () {
            function SecretaryKeyValue() {
                this.key = 0;
                this.value = 0;
                this.isOpen = false; // 是否开启
            }
            return SecretaryKeyValue;
        }());
        SS.SecretaryKeyValue = SecretaryKeyValue;
        var SevenAddUpData = /** @class */ (function (_super) {
            __extends(SevenAddUpData, _super);
            function SevenAddUpData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.progress = 0; // 活动进度
                _this.staus = 0; // 领取宝箱状态
                _this.lastTime = 0; // 上次更新进度时间
                return _this;
            }
            return SevenAddUpData;
        }(ShardDBObject));
        SS.SevenAddUpData = SevenAddUpData;
        var ActortExerciseData = /** @class */ (function (_super) {
            __extends(ActortExerciseData, _super);
            function ActortExerciseData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.index = 0; // 训练槽位顺序
                _this.actorUuid = ""; // 艺人 uuid
                _this.startTime = 0; // 开始时间
                return _this;
            }
            return ActortExerciseData;
        }(ShardDBObject));
        SS.ActortExerciseData = ActortExerciseData;
        var OscarDesc = /** @class */ (function () {
            function OscarDesc() {
                this.id = 0; // 艺人id或者剧本id
                this.name = ""; // 艺人名字或者剧本名字
                this.playerName = ""; // 玩家姓名
                this.userId = 0; // 玩家id
            }
            return OscarDesc;
        }());
        SS.OscarDesc = OscarDesc;
        var OscarData = /** @class */ (function () {
            function OscarData() {
                this.man = null; // 最佳男艺人提名
                this.woman = null; // 最佳女艺人提名
                this.perform = null; // 最佳表演提名
                this.art = null; // 最佳艺术提名
                this.publicPraise = null; // 最佳口碑提名
                this.bestMan = 0; // 最佳男艺人下标
                this.bestWoman = 0; // 最佳女艺人下标
                this.bestPerform = 0; // 最佳表演下标
                this.bestArt = 0; // 最佳艺术下标
                this.bestPublicPraise = 0; // 最佳口碑下标
                this.blockLevel = 0; // 街区等级
            }
            return OscarData;
        }());
        SS.OscarData = OscarData;
        var PlayerOscarData = /** @class */ (function () {
            function PlayerOscarData() {
                this.big_sell = 0; // 大卖电影数量
                this.movies = 0; // 电影拍摄数量
            }
            return PlayerOscarData;
        }());
        SS.PlayerOscarData = PlayerOscarData;
        var DailyEventItem = /** @class */ (function () {
            function DailyEventItem() {
                this.time = 0; // 时间
                this.uuid = ""; // 事件的 uuid
                this.name = ""; // 事件的名称
            }
            return DailyEventItem;
        }());
        SS.DailyEventItem = DailyEventItem;
        var DailyEvent = /** @class */ (function (_super) {
            __extends(DailyEvent, _super);
            function DailyEvent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.data = null;
                return _this;
            }
            return DailyEvent;
        }(ShardDBObject));
        SS.DailyEvent = DailyEvent;
        var GuideData = /** @class */ (function (_super) {
            __extends(GuideData, _super);
            function GuideData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.guide = null; // 引导相关
                _this.story = null; // 剧情相关
                return _this;
            }
            return GuideData;
        }(ShardDBObject));
        SS.GuideData = GuideData;
        var PlayerCooperateData = /** @class */ (function (_super) {
            __extends(PlayerCooperateData, _super);
            function PlayerCooperateData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.lastReqTime = 0; // 上次请求时间 
                _this.lastAutoReqTime = 0; // 上次公开请求时间 
                _this.rewardStatus = 0; // 领取进度宝箱状态
                _this.giveGoldTime = 0; //赠送金币的次数
                _this.giveDollarTime = 0; // 赠送美元的次数
                _this.lastTime = 0; // 领取时间
                return _this;
            }
            return PlayerCooperateData;
        }(ShardDBObject));
        SS.PlayerCooperateData = PlayerCooperateData;
        var AccountCooperateData = /** @class */ (function (_super) {
            __extends(AccountCooperateData, _super);
            function AccountCooperateData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.friendEntityId = ""; // 成为好友的玩家
                _this.appList = null; //请求他为好友的玩家信息
                _this.weekTimes = 0; // 一周内合作不同人的次数
                _this.lastWeek = 0; // 合作时间
                _this.firstCooperate = false; // 首次合作奖励 true 表示已经领取过
                _this.firstACooperate = false; // 首次通过账号查找建立合作 true 表示已经领取过
                _this.isCaptain = false;
                _this.isRead = false; // false 不需要播放特效，true需要播放 
                return _this;
            }
            return AccountCooperateData;
        }(DBObject));
        SS.AccountCooperateData = AccountCooperateData;
        var ApplyInfo = /** @class */ (function () {
            function ApplyInfo() {
                this.entityId = "";
                this.lastTime = 0;
            }
            return ApplyInfo;
        }());
        SS.ApplyInfo = ApplyInfo;
        var AutoCooperateData = /** @class */ (function (_super) {
            __extends(AutoCooperateData, _super);
            function AutoCooperateData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.applyEntityId = ""; // 申请人
                _this.lastTime = 0; // 申请时间
                return _this;
            }
            return AutoCooperateData;
        }(DBObject));
        SS.AutoCooperateData = AutoCooperateData;
        var CooperateTaskData = /** @class */ (function (_super) {
            __extends(CooperateTaskData, _super);
            function CooperateTaskData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.tasks = null;
                _this.currentStar = 0; // 当前星级
                _this.progree = 0;
                _this.lastTime = 0;
                return _this;
            }
            return CooperateTaskData;
        }(DBObject));
        SS.CooperateTaskData = CooperateTaskData;
        var Ctask = /** @class */ (function () {
            function Ctask() {
                this.star = 0; // 几星任务
                this.progree = 0; // 星级任务进度
                this.starTasks = null;
            }
            return Ctask;
        }());
        SS.Ctask = Ctask;
        var StarTask = /** @class */ (function () {
            function StarTask() {
                this.taskid = 0; // 任务ID
                this.taskType = 0; // 任务类型
                this.itemId = 0; // 奖励ID
                this.captainItemNum = 0; // 队长奖励物品数量
                this.itemNum = 0; // 队员奖励物品数量
                this.needParam = null; // 需要的参数
                this.progress = 0; // 任务进度
                this.status = 0; // 0未完成  1已完成 2领取
                this.helpUuid = ""; // 协助任务的玩家
                this.receiveUuid = ""; // 接取任务的玩家
            }
            return StarTask;
        }());
        SS.StarTask = StarTask;
        var CooperateOrderData = /** @class */ (function (_super) {
            __extends(CooperateOrderData, _super);
            function CooperateOrderData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.entityId = 0; // 订单方
                _this.portrait = 0; // 头像ID
                _this.orderUuid = ""; // 订单唯一ID
                _this.itemId = 0;
                _this.amount = 0;
                _this.lastTime = 0; // 放入时间
                return _this;
            }
            return CooperateOrderData;
        }(DBObject));
        SS.CooperateOrderData = CooperateOrderData;
        var PlayerLevelUp = /** @class */ (function () {
            function PlayerLevelUp() {
                this.old_level = 0; // 原来的等级
                this.now_level = 0; // 现在的等级
                this.story = null; // 升级赠送剧本
            }
            return PlayerLevelUp;
        }());
        SS.PlayerLevelUp = PlayerLevelUp;
        var GoldExchange = /** @class */ (function () {
            function GoldExchange() {
                this.count = 0; // 兑换次数
            }
            return GoldExchange;
        }());
        SS.GoldExchange = GoldExchange;
        var NewMessageInfo = /** @class */ (function () {
            function NewMessageInfo() {
                this.num = 0; // 未读消息的数量
                this.type = ""; // 消息类型，user/system
                this.userMsg = null; // 最新一条未读消息
                this.systemMsg = null; // 系统消息
            }
            return NewMessageInfo;
        }());
        SS.NewMessageInfo = NewMessageInfo;
        var MessageInfo = /** @class */ (function () {
            function MessageInfo() {
                this.userId = 0; // 玩家id
                this.name = ""; // 公司名
                this.portrait = 0; // 头像
                this.sex = 0; // 性别
                this.messageId = 0; // 信息id
                this.message = ""; // 信息
                this.time = 0; // 发送时间
            }
            return MessageInfo;
        }());
        SS.MessageInfo = MessageInfo;
        var SystemMessage = /** @class */ (function () {
            function SystemMessage() {
                this.userId = 0; // 玩家id
                this.messageId = 0; // 信息id // 世界频道的消息id
                this.message = 0; // 信息id //MsgChat表
                this.time = 0; // 发送时间
                this.fieldInfo = null; // 信息详情
            }
            return SystemMessage;
        }());
        SS.SystemMessage = SystemMessage;
        var FieldInfo = /** @class */ (function () {
            function FieldInfo() {
                this.type = 0;
                this.text = "";
                this.args = "";
            }
            return FieldInfo;
        }());
        SS.FieldInfo = FieldInfo;
        var PrivateListInfo = /** @class */ (function () {
            function PrivateListInfo() {
                this.roomId = 0; // 房间号
                this.userId = 0; // 玩家id
                this.name = ""; // 公司名
                this.portrait = 0; // 头像
                this.sex = 0; // 性别
                this.message = null; // 信息
                this.newMsgNum = 0; // 新消息的数量
            }
            return PrivateListInfo;
        }());
        SS.PrivateListInfo = PrivateListInfo;
        var PushMessageInfo = /** @class */ (function () {
            function PushMessageInfo() {
                this.roomId = 0; // 房间号
                this.message = null; // 信息
            }
            return PushMessageInfo;
        }());
        SS.PushMessageInfo = PushMessageInfo;
        var RoomMember = /** @class */ (function () {
            function RoomMember() {
                this.member = 0; // 成员id
                this.name = ""; // 公司名
                this.portrait = 0; // 头像
                this.sex = 0; // 性别
                this.lastRead = 0; // 上一次阅读的消息id
            }
            return RoomMember;
        }());
        SS.RoomMember = RoomMember;
        var LevelGiftData = /** @class */ (function (_super) {
            __extends(LevelGiftData, _super);
            function LevelGiftData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.giftId = 0; // 等级礼包id
                return _this;
            }
            return LevelGiftData;
        }(ShardDBObject));
        SS.LevelGiftData = LevelGiftData;
        var GetGuideReward = /** @class */ (function (_super) {
            __extends(GetGuideReward, _super);
            function GetGuideReward() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.staus = 0; // 领取宝箱状态
                return _this;
            }
            return GetGuideReward;
        }(ShardDBObject));
        SS.GetGuideReward = GetGuideReward;
        var CupPackage = /** @class */ (function (_super) {
            __extends(CupPackage, _super);
            function CupPackage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.giftId = 0;
                _this.process = 0; // 进度
                _this.status = 0; // 任务状态
                _this.startTime = 0; // 礼包开启时间
                return _this;
            }
            return CupPackage;
        }(ShardDBObject));
        SS.CupPackage = CupPackage;
        var StoryRefreshData = /** @class */ (function (_super) {
            __extends(StoryRefreshData, _super);
            function StoryRefreshData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dayTime = 0; // 每日次数
                _this.lastTime = 0;
                return _this;
            }
            return StoryRefreshData;
        }(ShardDBObject));
        SS.StoryRefreshData = StoryRefreshData;
    })(SS = Proto.SS || (Proto.SS = {}));
})(Proto || (Proto = {}));
//# sourceMappingURL=SharedStruct.js.map