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
    var PortraitType;
    (function (PortraitType) {
        PortraitType[PortraitType["Dress"] = 0] = "Dress";
        PortraitType[PortraitType["Buy"] = 1] = "Buy";
    })(PortraitType = Games.PortraitType || (Games.PortraitType = {}));
    var PlayerInfoModel = /** @class */ (function (_super) {
        __extends(PlayerInfoModel, _super);
        function PlayerInfoModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lastTimeRenameSignature = 0; //上一次修改签名时间
            //玩家升级消息队列
            _this.playerLevelUpMsg = [];
            return _this;
        }
        //一分钟修改一次签名
        PlayerInfoModel.prototype.checkRenameSignatureTime = function () {
            return Game.time.serverSeconds - this.lastTimeRenameSignature > 60;
        };
        PlayerInfoModel.prototype.enqueuePlayerLevelUpMsg = function (msg) {
            this.playerLevelUpMsg.push(msg);
        };
        PlayerInfoModel.prototype.dequeuePlayerLevelUpMsg = function () {
            if (this.hasPlayerLevelUpMsg) {
                var msg = this.playerLevelUpMsg.splice(this.playerLevelUpMsg.length - 1, 1)[0];
                this.playerLevelUpMsg.length = 0;
                return msg;
            }
            return null;
        };
        Object.defineProperty(PlayerInfoModel.prototype, "hasPlayerLevelUpMsg", {
            get: function () {
                return this.playerLevelUpMsg.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        return PlayerInfoModel;
    }(Games.MModel));
    Games.PlayerInfoModel = PlayerInfoModel;
})(Games || (Games = {}));
//# sourceMappingURL=PlayerInfoModel.js.map