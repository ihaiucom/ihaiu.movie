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
            return _this;
        }
        /**
         * 初始化游戏数据
         */
        GameDataHandler.prototype.InitGameData = function (resData) {
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
        };
        /**
         * 玩家数据初始化提交
         */
        GameDataHandler.prototype.GetLoginGameData = function (resData) {
            Game.moduleModel.notice.UpdateNoticeMsg(resData.noticeList);
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
        return GameDataHandler;
    }(Games.ProtoHandler));
    Games.GameDataHandler = GameDataHandler;
})(Games || (Games = {}));
//# sourceMappingURL=GameDataHandler.js.map