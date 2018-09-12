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
    var rankSender = /** @class */ (function (_super) {
        __extends(rankSender, _super);
        function rankSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.rank;
            return _this;
        }
        /**
         *
         */
        rankSender.prototype.GetSelfList = function () {
            var req = new Proto.API.rank.GetSelfListRequest();
            this.send(req);
        };
        /**
         *
         */
        rankSender.prototype.GetServerRankList = function () {
            var req = new Proto.API.rank.GetServerRankListRequest();
            this.send(req);
        };
        /**
         *
         */
        rankSender.prototype.GetGroupRankList = function () {
            var req = new Proto.API.rank.GetGroupRankListRequest();
            this.send(req);
        };
        /**
         *
         */
        rankSender.prototype.GetGroupMovieRankList = function () {
            var req = new Proto.API.rank.GetGroupMovieRankListRequest();
            this.send(req);
        };
        /**
         *
         * @param uuid   电影唯一id
         */
        rankSender.prototype.GetMovieShortData = function (uuid) {
            var req = new Proto.API.rank.GetMovieShortDataRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *
         * @param userId   id
         */
        rankSender.prototype.GetPlayerShortData = function (userId) {
            var req = new Proto.API.rank.GetPlayerShortDataRequest();
            req.userId = userId;
            this.send(req);
        };
        /**
         *  领取排行榜奖励
         * @param uuid   排行榜唯一id
         */
        rankSender.prototype.GetServerListReward = function (uuid) {
            var req = new Proto.API.rank.GetServerListRewardRequest();
            req.uuid = uuid;
            this.send(req);
        };
        /**
         *  修改服务器名称
         * @param uuid   排行榜唯一id
         * @param name   服务器名称
         */
        rankSender.prototype.ChangeServerName = function (uuid, name) {
            var req = new Proto.API.rank.ChangeServerNameRequest();
            req.uuid = uuid;
            req.name = name;
            this.send(req);
        };
        /**
         *
         */
        rankSender.prototype.GetOscarData = function () {
            var req = new Proto.API.rank.GetOscarDataRequest();
            this.send(req);
        };
        /**
         *
         * @param type
         */
        rankSender.prototype.GetOscarReward = function (type) {
            var req = new Proto.API.rank.GetOscarRewardRequest();
            req.type = type;
            this.send(req);
        };
        /**
         *
         * @param theaterId
         */
        rankSender.prototype.ChoseTheater = function (theaterId) {
            var req = new Proto.API.rank.ChoseTheaterRequest();
            req.theaterId = theaterId;
            this.send(req);
        };
        /**
         * @param type: 0 街区奖励 1 排行榜祝贺
         */
        rankSender.prototype.GetStreetReward = function (type) {
            var req = new Proto.API.rank.GetStreetRewardRequest();
            req.type = type;
            this.send(req);
        };
        return rankSender;
    }(Games.ProtoSender));
    Games.rankSender = rankSender;
})(Games || (Games = {}));
//# sourceMappingURL=rankSender.js.map