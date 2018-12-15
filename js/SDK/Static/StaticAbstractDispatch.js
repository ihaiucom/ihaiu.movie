var Games;
(function (Games) {
    /**
     * 抽象类，实现接口，（接口的适配器模式）
     */
    var StaticAbstractDispatch = /** @class */ (function () {
        function StaticAbstractDispatch() {
        }
        StaticAbstractDispatch.prototype.initNewDay = function () { };
        ;
        // 设备激活（设备首次点击app，uid字段记设备ID,只有首次的时候传）
        StaticAbstractDispatch.prototype.onInstall = function () { };
        ;
        // 注册
        StaticAbstractDispatch.prototype.onRegistation = function (first) { };
        ;
        // 角色登陆游戏信息（能够获取角色后 立马调用该接口，每次登陆都要传）
        StaticAbstractDispatch.prototype.onloadstart = function (isForceSend) { };
        // 登陆加载的步骤（账号登陆加载的每一步都需要调用该接口，每次登陆都要传）
        StaticAbstractDispatch.prototype.onLoadStep = function (loadStep) { };
        // 加载完成 角色设备配置（能够获取uid就马上打点，每次登陆都要传）
        StaticAbstractDispatch.prototype.onLoadEnd = function () { };
        // 充值埋点
        StaticAbstractDispatch.prototype.onPurchase = function (dollar, order_id, item, confId) { };
        // 每日首次登陆资源库存:包括钻石，金币，赞数量，美元，图纸，以及仓库的周边道具
        StaticAbstractDispatch.prototype.onUserItemInfo = function () { };
        // 用户状态信息（一般是用户登陆时的状态信息，比如排行榜、buff效果等）
        StaticAbstractDispatch.prototype.onUserStatus = function () { };
        // 记录行为
        StaticAbstractDispatch.prototype.onUserorbit = function (tid, item, action) { };
        ;
        // 记录升级解锁
        StaticAbstractDispatch.prototype.onUpgrdae = function (tid, item, fromlevel, changelev, targetlev) { };
        ;
        // 记录消耗
        StaticAbstractDispatch.prototype.onResourceinput = function (item, type, grade, id) { };
        ;
        // 记录产出
        StaticAbstractDispatch.prototype.onResourceoutput = function (item, type, id) { };
        ;
        // 消耗钻石
        StaticAbstractDispatch.prototype.onUseGold = function (item, cost, market) { };
        ;
        // 新手引导完成	
        StaticAbstractDispatch.prototype.onFinishTutorial = function (id) { };
        ;
        // 玩家等级达到lv级
        StaticAbstractDispatch.prototype.onLevelAchieved = function (lv) { };
        ;
        return StaticAbstractDispatch;
    }());
    Games.StaticAbstractDispatch = StaticAbstractDispatch;
})(Games || (Games = {}));
//# sourceMappingURL=StaticAbstractDispatch.js.map