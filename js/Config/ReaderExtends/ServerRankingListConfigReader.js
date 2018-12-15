/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
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
var configs;
(function (configs) {
    var ServerRankingListConfigReader = /** @class */ (function (_super) {
        __extends(ServerRankingListConfigReader, _super);
        function ServerRankingListConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ServerRankingListConfigReader.prototype, "weekRewardList", {
            get: function () {
                var list = [];
                var cfglist = this.getConfigList();
                for (var index = 0; index < cfglist.length; index++) {
                    var cfg = cfglist[index];
                    if (cfg) {
                        list.push(new Games.ServerRewardItemData(cfg.rank, cfg.spec_reward));
                    }
                }
                list.sort(function (a, b) { return a.rank[0] - b.rank[0]; });
                return list;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServerRankingListConfigReader.prototype, "dailyRewardList", {
            get: function () {
                var list = [];
                var cfglist = this.getConfigList();
                for (var index = 0; index < cfglist.length; index++) {
                    var cfg = cfglist[index];
                    if (cfg) {
                        list.push(new Games.ServerRewardItemData(cfg.rank, cfg.normal_reward));
                    }
                }
                list.sort(function (a, b) { return a.rank[0] - b.rank[0]; });
                return list;
            },
            enumerable: true,
            configurable: true
        });
        ServerRankingListConfigReader.prototype.GetRewards = function (rank, isWeek) {
            var list = this.getConfigList();
            for (var index = 0; index < list.length; index++) {
                var cfg = list[index];
                if (cfg.rank.length == 1 && cfg.rank[0] == rank) {
                    return isWeek ? cfg.spec_reward : cfg.normal_reward;
                }
                else if (cfg.rank.length == 2 && cfg.rank[0] <= rank && cfg.rank[1] >= rank) {
                    return isWeek ? cfg.spec_reward : cfg.normal_reward;
                }
            }
            return [];
        };
        return ServerRankingListConfigReader;
    }(configs.ServerRankingListConfigReaderStruct));
    configs.ServerRankingListConfigReader = ServerRankingListConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=ServerRankingListConfigReader.js.map