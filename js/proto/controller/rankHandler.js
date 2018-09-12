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
     *
     */
    var rankHandler = /** @class */ (function (_super) {
        __extends(rankHandler, _super);
        function rankHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.rank;
            return _this;
        }
        /**
         *
         */
        rankHandler.prototype.GetOscarData = function (msg) {
        };
        /**
         *
         */
        rankHandler.prototype.GetOscarReward = function (msg) {
            var dropList = msg.dropout;
            if (dropList && dropList.length > 0) {
                Game.system.getItemText(dropList, function () {
                    for (var index = 0; index < dropList.length; index++) {
                        var item = dropList[index];
                        if (Game.config.item.getType(item.itemId) == 14) {
                            Game.moduleModel.street.UpdateStreetCup(item.amount);
                        }
                    }
                });
            }
        };
        /**
         *
         */
        rankHandler.prototype.ChoseTheater = function (msg) {
        };
        /**
         *
         */
        rankHandler.prototype.GetStreetReward = function (msg) {
            var dropList = msg.dropout;
            var list = [];
            for (var index = 0; index < dropList.length; index++) {
                var element = dropList[index];
                var item = new DTItemNum();
                item.itemId = element.itemId;
                item.itemNum = element.amount;
                list.push(item);
            }
            Game.system.getRewardText(list);
        };
        /**
         *  获取自己的排名信息
         */
        rankHandler.prototype.GetSelfList = function (msg) {
            Game.moduleModel.rank.UpdateSelfList(msg.data);
        };
        /**
         *  获取全服排行榜
         */
        rankHandler.prototype.GetServerRankList = function (msg) {
            Game.moduleModel.rank.UpdateServerRankList(msg);
        };
        /**
         *  获取分组总票房排行榜
         */
        rankHandler.prototype.GetGroupRankList = function (msg) {
            Game.moduleModel.rank.UpdateGroupRankList(msg);
        };
        /**
         *  获取分组电影排行榜
         */
        rankHandler.prototype.GetGroupMovieRankList = function (msg) {
            Game.moduleModel.rank.UpdateGroupMovieRankList(msg);
        };
        /**
         *  获取电影基本信息
         */
        rankHandler.prototype.GetMovieShortData = function (msg) {
            Game.moduleModel.rank.UpdateMovieShortData(msg.data);
        };
        /**
         *  获取玩家基本信息
         */
        rankHandler.prototype.GetPlayerShortData = function (msg) {
            Game.moduleModel.rank.UpdatePlayerShortData(msg.data);
            Game.moduleModel.cooperation.sReqOtherInf.dispatch(msg);
        };
        /**
         *  领取排行榜奖励
         */
        rankHandler.prototype.GetServerListReward = function (msg) {
            var dropList = msg.dropout;
            var list = [];
            for (var index = 0; index < dropList.length; index++) {
                var element = dropList[index];
                var item = new DTItemNum();
                item.itemId = element.itemId;
                item.itemNum = element.amount;
                list.push(item);
            }
            Game.system.getRewardText(list);
        };
        /**
         *  修改服务器名称
         */
        rankHandler.prototype.ChangeServerName = function (msg) {
        };
        return rankHandler;
    }(Games.ProtoHandler));
    Games.rankHandler = rankHandler;
})(Games || (Games = {}));
//# sourceMappingURL=rankHandler.js.map