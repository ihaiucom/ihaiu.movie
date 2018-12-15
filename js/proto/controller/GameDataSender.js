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
    var GameDataSender = /** @class */ (function (_super) {
        __extends(GameDataSender, _super);
        function GameDataSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.GameData;
            _this.channel = "1";
            return _this;
        }
        /**
         * 初始化游戏数据
         */
        GameDataSender.prototype.InitGameData = function (name, sex) {
            Game.proto.httpChannel.http.isInitGameData = true;
            var reqData = new Proto.API.GameData.InitGameDataRequest();
            reqData.name = name;
            reqData.sex = sex;
            reqData["__delayTime"] = 0;
            reqData["__showTime"] = 30000;
            this.send(reqData);
        };
        /**
         * 选择初始化艺人
         * @param initialActorId 初始艺人索引
         */
        GameDataSender.prototype.GetInitActor = function (initialActorId) {
            var reqData = new Proto.API.GameData.GetInitActorRequest();
            reqData.index = initialActorId;
            this.send(reqData);
        };
        /**
         *
         * @param pass   密码
         */
        GameDataSender.prototype.Auth = function (pass) {
            this.pass = pass;
            var req = new Proto.API.GameData.AuthRequest();
            req.pass = pass;
            this.send(req);
        };
        /**
         * 玩家数据初始化提交
         */
        GameDataSender.prototype.GetLoginGameData = function (pass, channel) {
            if (channel === void 0) { channel = "1"; }
            this.pass = pass;
            this.channel = channel;
            var reqData = new Proto.API.GameData.GetLoginGameDataRequest();
            reqData.channel = channel;
            reqData.pass = pass;
            reqData["__delayTime"] = 0;
            reqData["__showTime"] = 30000;
            this.send(reqData);
        };
        GameDataSender.prototype.ReGetLoginGameData = function () {
            var reqData = new Proto.API.GameData.GetLoginGameDataRequest();
            reqData.channel = this.channel;
            reqData.pass = this.pass;
            reqData["__delayTime"] = 0;
            reqData["__showTime"] = 30000;
            reqData["__isReGetLoginGameData"] = true;
            this.send(reqData);
        };
        /**
         * 获取角色详细信息
         */
        GameDataSender.prototype.GetGameInfoExt = function () {
            var reqData = new Proto.API.GameData.GetGameInfoExtRequest();
            this.send(reqData);
        };
        /**
         * 修改公司名
         * @param playerName
         */
        GameDataSender.prototype.RenameGameData = function (playerName) {
            var reqData = new Proto.API.GameData.RenameGameDataRequest();
            reqData.playerName = playerName;
            this.send(reqData);
        };
        /**
         * 修改玩家的个性签名
         * @param playerName
         */
        GameDataSender.prototype.RePerSignatureGameData = function (perSignature) {
            var reqData = new Proto.API.GameData.RePerSignatureGameDataRequest();
            reqData.perSignature = perSignature;
            this.send(reqData);
        };
        /**
         * 修改玩家的头像
         * @param type 0表示穿戴 1表示购买
         * @param portraitId 头像ID
         */
        GameDataSender.prototype.RePortraitGameData = function (type, portraitId) {
            var reqData = new Proto.API.GameData.RePortraitGameDataRequest();
            reqData.type = type;
            reqData.portraitId = portraitId;
            this.send(reqData);
        };
        /**
         *
         * @param nameList  需要获取的类型的string描述 DBOType枚举
         */
        GameDataSender.prototype.GetInitGameData = function (nameList) {
            var req = new Proto.API.GameData.GetInitGameDataRequest();
            req.nameList = nameList;
            this.send(req);
        };
        /**
         *
         */
        GameDataSender.prototype.GetNoticeList = function () {
            var req = new Proto.API.GameData.GetNoticeListRequest();
            this.send(req);
        };
        /**
         *
         * @param name   用户名
         * @param pass   密码
         */
        GameDataSender.prototype.VisitorAuth = function (name, pass) {
            var req = new Proto.API.GameData.VisitorAuthRequest();
            req.name = name;
            req.pass = pass;
            req["__delayTime"] = 0;
            req["__showTime"] = 30000;
            this.send(req);
        };
        return GameDataSender;
    }(Games.ProtoSender));
    Games.GameDataSender = GameDataSender;
})(Games || (Games = {}));
//# sourceMappingURL=GameDataSender.js.map