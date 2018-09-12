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
    var RankServerData = Games.RankServerData;
    var RankGroupData = Games.RankGroupData;
    var RankGroupMovieData = Games.RankGroupMovieData;
    var RankModel = /** @class */ (function (_super) {
        __extends(RankModel, _super);
        function RankModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //服务器排行
            _this.listServer = [];
            //街道排名
            _this.listGroup = [];
            //街道电影排名
            _this.listGroupMovie = [];
            _this.dicPlayer = new Dictionary();
            _this.dicMovie = new Dictionary();
            _this.listBoxOfficeIcon = [6023, 6024, 6025, 6026, 6027, 6028];
            return _this;
        }
        RankModel.prototype.install = function () {
            _super.prototype.install.call(this);
        };
        RankModel.prototype.UpdateRankListData = function (msg) {
            this.rankInfo = msg;
            this.rankInfo.lastRank = this.rankInfo.lastRank + 1;
            this.rankInfo.lastWeakRank = this.rankInfo.lastWeakRank + 1;
        };
        RankModel.prototype.UpdateSelfList = function (msg) {
            this.selfInfo = msg;
            this.selfInfo.MainRank = this.selfInfo.MainRank + 1;
            this.selfInfo.groupList = this.selfInfo.groupList + 1;
        };
        RankModel.prototype.UpdateServerRankList = function (msg) {
            // this.listServer = msg.data;
            this.listServer = [];
            for (var index = 0; index < msg.data.length; index++) {
                var desc = msg.data[index];
                if (desc.movieId != 0) {
                    var rankdata = new RankServerData(index + 1, desc);
                    this.listServer.push(rankdata);
                    this.RemovePlayerShortData(rankdata.desc.userId);
                    this.RemoveMovieShortData(rankdata.desc.movieUuid);
                }
            }
            this.SetSelfServerRank(msg.selfData, msg.selfRank + 1);
        };
        RankModel.prototype.SetSelfServerRank = function (data, rank) {
            this.selfServerData = new Games.RankServerData(rank, data);
            if (this.selfServerData.desc.movieId != 0 && this.listServer.length < this.selfServerData.rank) {
                this.listServer.push(this.selfServerData);
            }
        };
        RankModel.prototype.UpdateGroupRankList = function (msg) {
            this.listGroup = [];
            for (var index = 0; index < msg.data.length; index++) {
                var desc = msg.data[index];
                var rankdata = new RankGroupData(index + 1, desc);
                this.listGroup.push(rankdata);
                this.RemovePlayerShortData(rankdata.desc.userId);
                // if (desc.totalBoxOffice != 0)
                // {
                // 	let rankdata = new RankGroupData(index + 1, desc);
                // 	this.listGroup.push(rankdata);
                // 	this.RemovePlayerShortData(rankdata.desc.userId);
                // }
            }
            this.SetSelfGroupRank(msg.selfData, msg.selfRank + 1);
        };
        RankModel.prototype.SetSelfGroupRank = function (data, rank) {
            this.selfGroupData = new Games.RankGroupData(rank, data);
            if (this.listGroup.length < this.selfGroupData.rank) {
                this.listGroup.push(this.selfGroupData);
            }
        };
        RankModel.prototype.UpdateGroupMovieRankList = function (msg) {
            this.listGroupMovie = [];
            for (var index = 0; index < msg.data.length; index++) {
                var desc = msg.data[index];
                var rankdata = new RankGroupMovieData(index + 1, desc);
                if (rankdata.desc.totalBoxOffice > 0) {
                    this.listGroupMovie.push(rankdata);
                }
                this.RemovePlayerShortData(rankdata.desc.userId);
            }
            this.SetSelfGroupMovieRank(msg.selfData, msg.selfRank + 1);
        };
        RankModel.prototype.SetSelfGroupMovieRank = function (data, rank) {
            this.selfGroupMovieData = new Games.RankGroupMovieData(rank, data);
            if (this.selfGroupMovieData.desc.totalBoxOffice > 0 && this.listGroupMovie.length < this.selfGroupMovieData.rank) {
                this.listGroupMovie.push(this.selfGroupMovieData);
            }
        };
        RankModel.prototype.UpdatePlayerShortData = function (msg) {
            this.dicPlayer.add(msg.userId, msg);
        };
        RankModel.prototype.RemovePlayerShortData = function (userId) {
            if (this.dicPlayer.hasKey(userId)) {
                this.dicPlayer.remove(userId);
            }
        };
        RankModel.prototype.UpdateMovieShortData = function (msg) {
            msg.mediaCommend = msg.mediaCommend / 10;
            this.dicMovie.add(msg.uuid, msg);
            Game.system.movieInfo(msg);
        };
        RankModel.prototype.RemoveMovieShortData = function (uuid) {
            if (this.dicMovie.hasKey(uuid)) {
                this.dicMovie.remove(uuid);
            }
        };
        Object.defineProperty(RankModel.prototype, "SelfServerRankData", {
            get: function () {
                return this.selfServerData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "LastWeakServerRank", {
            get: function () {
                return this.rankInfo.lastWeakRank;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "SelfServerRank", {
            get: function () {
                if (this.selfInfo == null) {
                    return 0;
                }
                return this.selfInfo.MainRank;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "SelfGroupRankData", {
            get: function () {
                return this.selfGroupData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "SelfGroupRank", {
            get: function () {
                if (this.selfInfo == null) {
                    return 0;
                }
                return this.selfInfo.groupList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "SelfGroupMovieRankData", {
            get: function () {
                return this.selfGroupMovieData;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "ServerRankList", {
            get: function () {
                return this.listServer.slice(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "GroupRankList", {
            get: function () {
                return this.listGroup.slice(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "GroupMovieRankList", {
            get: function () {
                return this.listGroupMovie.slice(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "ServerName", {
            get: function () {
                if (this.selfInfo == null) {
                    return "";
                }
                return this.selfInfo.serverName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "ServerUuid", {
            get: function () {
                if (this.rankInfo == null) {
                    return null;
                }
                return this.rankInfo.serverUuid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "LastStreetId", {
            get: function () {
                if (this.rankInfo == null) {
                    return null;
                }
                return this.rankInfo.lastGroupId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "hasGetLastReward", {
            get: function () {
                return this.rankInfo.isGetLastReward;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "CanGetReward", {
            get: function () {
                if (this.rankInfo == null) {
                    return false;
                }
                var list = this.LastRewardList;
                return list.length > 0 && !this.rankInfo.isGetLastReward;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "cupNum", {
            get: function () {
                return User.info.cup;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "CanChangeName", {
            get: function () {
                if (this.rankInfo == null) {
                    return false;
                }
                return this.rankInfo.lastWeakRank == 1 && !this.rankInfo.isChangeServerName;
            },
            enumerable: true,
            configurable: true
        });
        RankModel.prototype.GetMovieShort = function (uuid) {
            if (this.dicMovie.hasKey(uuid)) {
                return this.dicMovie.getValue(uuid);
            }
            return null;
        };
        RankModel.prototype.GetPlayerShortData = function (userId) {
            if (this.dicPlayer.hasKey(userId)) {
                return this.dicPlayer.getValue(userId);
            }
            return null;
        };
        RankModel.prototype.GetBoxOfficEvaluationIconUrl = function (index) {
            var avatarIcon = this.listBoxOfficeIcon[index];
            if (avatarIcon) {
                return Game.config.avatar.GetIconUrl(this.listBoxOfficeIcon[index]);
            }
            console.log("票房等级" + index + "没有数据");
            return "";
        };
        Object.defineProperty(RankModel.prototype, "RankRewardList", {
            get: function () {
                var date = new Date(Game.time.serverMilliseconds);
                var week = date.getDay();
                return week == 7 ? Game.config.serverRankingList.weekRewardList : Game.config.serverRankingList.dailyRewardList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "LastRewardList", {
            get: function () {
                if (this.rankInfo == null) {
                    return [];
                }
                var date = new Date(Game.time.serverMilliseconds);
                var week = date.getDay();
                return Game.config.serverRankingList.GetRewards(this.rankInfo.lastRank, week == 7);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RankModel.prototype, "RedNum", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return RankModel;
    }(Games.MModel));
    Games.RankModel = RankModel;
})(Games || (Games = {}));
//# sourceMappingURL=RankModel.js.map