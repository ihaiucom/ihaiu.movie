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
    var BlockLevelConfigReader = /** @class */ (function (_super) {
        __extends(BlockLevelConfigReader, _super);
        function BlockLevelConfigReader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlockLevelConfigReader.prototype.getSellIcon = function (val) {
            var list = this.getConfigList();
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === User.info.stall) {
                    if (val >= list[i].marvel_sell) {
                        return 6028;
                    }
                    else if (val >= list[i].myth_sell) {
                        return 6027;
                    }
                    else if (val >= list[i].great_sell) {
                        return 6026;
                    }
                    else if (val >= list[i].big_sell) {
                        return 6025;
                    }
                    else if (val >= list[i].good) {
                        return 6024;
                    }
                    else {
                        return 6023;
                    }
                }
            }
        };
        BlockLevelConfigReader.prototype.GetSellIconUrl = function (block, boxOffic) {
            var cfg = Game.config.blockLevel.getConfig(block);
            if (cfg) {
                return cfg.GetSellIconUrl(boxOffic);
            }
            console.log("街区" + block + "缺少配置");
            return "";
        };
        BlockLevelConfigReader.prototype.GetNextSteetCfg = function (streetId) {
            var list = this.getConfigList();
            for (var index = 0; index < list.length; index++) {
                var cfg = list[index];
                if (cfg.id == streetId) {
                    return list[index + 1];
                }
            }
            return null;
        };
        BlockLevelConfigReader.prototype.GetLastStreetCfg = function (streetId) {
            var list = this.getConfigList();
            for (var index = 0; index < list.length; index++) {
                var cfg = list[index];
                if (cfg.id == streetId) {
                    if (index > 0)
                        return list[index - 1];
                }
            }
            return null;
        };
        return BlockLevelConfigReader;
    }(configs.BlockLevelConfigReaderStruct));
    configs.BlockLevelConfigReader = BlockLevelConfigReader;
})(configs || (configs = {}));
//# sourceMappingURL=BlockLevelConfigReader.js.map