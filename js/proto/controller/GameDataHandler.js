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
    // 消息处理器
    //--------------------
    var GameDataHandler = /** @class */ (function (_super) {
        __extends(GameDataHandler, _super);
        function GameDataHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.GameData;
            _this.isFirstLoginGameData = true;
            return _this;
        }
        /**
         * 初始化游戏数据
         */
        GameDataHandler.prototype.InitGameData = function (resData) {
            // 进入主界面或者进入开场剧情            
            Game.checkEnterGame(true);
        };
        /**
         * 选择初始化艺人
         */
        GameDataHandler.prototype.GetInitActor = function (resData) {
            // TODO 临时 添加粉色
            // Game.protosender.test.AddFans(39000);
        };
        /**
         * 注册账号
         */
        GameDataHandler.prototype.Auth = function (msg) {
            // 返回 0成功 1失败
            if (msg.result != 0) {
                Game.system.toastMsg(MsgKey.account_load_again);
                return;
            }
            Game.protosender.GameData.GetLoginGameData(Game.localStorage.password, "1");
            // apps注册成功
            Games.Static.Instance.onRegistation(true);
        };
        /**
         * 玩家数据初始化提交
         */
        GameDataHandler.prototype.GetLoginGameData = function (resData) {
            Game.time.serverTimezone = resData.timeZone;
            Games.GameLocalStorage.Instance.setBoolean("__PopUpMain_HavePopToday", false, false);
            User.startTimeTick();
            Game.moduleModel.notice.UpdateNoticeMsg(resData.noticeList);
            // 埋点 设备激活
            // Static.Instance.actInstall();
            Games.Static.Instance.onInstall();
            // 加载开始 埋点
            // Games.Static.Instance.actLoadStep("load_start");
            Games.Static.Instance.onLoadStep("load_start");
            // 加载结束 埋点
            // Games.Static.Instance.actLoadStep("load_end");
            Games.Static.Instance.onLoadStep("load_end");
            // 加载完成 角色设备配置（能够获取uid就马上打点，每次登陆都要传） 埋点
            // Games.Static.Instance.actLoadEnd();
            Games.Static.Instance.onLoadEnd();
            // 完成之前的订单
            Game.protosender.pay.FinishOrderForLast();
            if (this.isFirstLoginGameData) {
                // 进入主界面或者进入开场剧情            
                Game.checkEnterGame();
            }
            else {
                Game.event.dispatch(GameEventKey.GameFrame_ReLoginData_End);
            }
            this.isFirstLoginGameData = false;
            Game.proto.isNeedReGetLoginGameData = false;
        };
        /**
         * 修改公司名
         * @param resData
         */
        GameDataHandler.prototype.RenameGameData = function (resData) {
        };
        /**
         * 修改玩家的个性签名
         * @param resData
         */
        GameDataHandler.prototype.RePerSignatureGameData = function (resData) {
        };
        /**
         * 修改玩家的头像
         * @param resData
         */
        GameDataHandler.prototype.RePortraitGameData = function (resData) {
        };
        /**
         *
         */
        GameDataHandler.prototype.GetInitGameData = function (msg) {
        };
        /**
         * 获取玩家拓展信息
         */
        GameDataHandler.prototype.GetGameInfoExt = function (msg) {
        };
        /**
         *
         */
        GameDataHandler.prototype.GetNoticeList = function (msg) {
            Game.moduleModel.notice.UpdateNoticeMsg(msg.noticeList);
        };
        /**
         * 游客绑定账号
         */
        GameDataHandler.prototype.VisitorAuth = function (msg) {
            if (msg.result == 0) {
                Game.localStorage.isGameGuest = false;
                Game.protosender.GameData.GetLoginGameData(Game.localStorage.password, "1");
            }
            else {
                var txt = Games.TEXT.GuestBindError_2;
                switch (msg.result) {
                    case 1:
                        txt = Games.TEXT.GuestBindError_1;
                        break;
                    case 2:
                        txt = Games.TEXT.GuestBindError_2;
                        break;
                    case 3:
                        txt = Games.TEXT.GuestBindError_3;
                        break;
                }
                Game.system.toastText(txt);
            }
        };
        return GameDataHandler;
    }(Games.ProtoHandler));
    Games.GameDataHandler = GameDataHandler;
})(Games || (Games = {}));
//# sourceMappingURL=GameDataHandler.js.map