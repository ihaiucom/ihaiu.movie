/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
    /**
     *  模块

     */
    var testHandler = /** @class */ (function (_super) {
        __extends(testHandler, _super);
        function testHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.test;
            return _this;
        }
        /**
         *  添加道具
         */
        testHandler.prototype.AddItem = function (msg) {
        };
        /**
         *  增加粉丝(公司升级)
         */
        testHandler.prototype.AddFans = function (msg) {
        };
        /**
         *  增加期待值
         */
        testHandler.prototype.AddExpect = function (msg) {
        };
        /**
         *  删除电影
         */
        testHandler.prototype.DeleteMovie = function (msg) {
        };
        /**
         *  添加剧本
         */
        testHandler.prototype.AddStory = function (msg) {
        };
        /**
         *  添加艺人技能经验
         */
        testHandler.prototype.AddActorSkillExp = function (msg) {
        };
        /**
         *
         */
        testHandler.prototype.debug = function (msg) {
        };
        /**
         *  添加剧本进度
         */
        testHandler.prototype.AddStoryProgress = function (msg) {
        };
        /**
         *  增加一个兑换码
         */
        testHandler.prototype.AddGift = function (msg) {
        };
        /**
         *
         */
        testHandler.prototype.SetBlockLevel = function (msg) {
        };
        /**
         *  增加日常任务的进度
         */
        testHandler.prototype.AddDailyTaskProgress = function (msg) {
        };
        /**
         *  刷新时间
         */
        testHandler.prototype.RefreshTime = function (msg) {
        };
        /**
         *
         */
        testHandler.prototype.addTaskProgress = function (msg) {
        };
        /**
         *  奥斯卡颁奖
         */
        testHandler.prototype.UpdateOscar = function (msg) {
        };
        /**
         *  完成订单
         */
        testHandler.prototype.PutOrderItems = function (msg) {
        };
        /**
         *  将所有剧本设置为金本
         */
        testHandler.prototype.setAllStoryGold = function (msg) {
        };
        /**
         *  设置小秘书状态
         */
        testHandler.prototype.SetSecretaryStatus = function (msg) {
        };
        /**
         *  清除小秘书使用次数
         */
        testHandler.prototype.CleanSecretaryTimes = function (msg) {
        };
        /**
         *  领取充值礼包
         */
        testHandler.prototype.GetRechargeGift = function (msg) {
        };
        /**
         *
         */
        testHandler.prototype.GetAutoCooperate = function (msg) {
        };
        /**
         *  一键解锁所有生产线 未加解锁限制判断 并且加了10000钻石以及 10000 生产图纸
         */
        testHandler.prototype.LockAllProduce = function (msg) {
        };
        /**
         *   一键占领城市
         */
        testHandler.prototype.GotoCity = function (msg) {
        };
        /**
         *  添加剧本
         */
        testHandler.prototype.AddStarStory = function (msg) {
        };
        /**
         *  设置占领城市前状态
         */
        testHandler.prototype.GotoCityBefore = function (msg) {
        };
        /**
         *
         */
        testHandler.prototype.FinishGuide = function (msg) {
        };
        return testHandler;
    }(Games.ProtoHandler));
    Games.testHandler = testHandler;
})(Games || (Games = {}));
//# sourceMappingURL=testHandler.js.map