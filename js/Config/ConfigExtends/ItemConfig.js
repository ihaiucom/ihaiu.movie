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
    var ItemConfig = /** @class */ (function (_super) {
        __extends(ItemConfig, _super);
        function ItemConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ItemConfig.prototype, "avatarConfig", {
            get: function () {
                return Game.config.avatar.getConfig(this.icon);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfig.prototype, "iconUrl", {
            get: function () {
                if (this.avatarConfig) {
                    if (this.type == 7) {
                        return this.avatarConfig.bodyIconUrl;
                    }
                    return this.avatarConfig.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemConfig.prototype, "itemStarNum", {
            /**
             * 物品星级 0,1,2,3,4,5
             */
            get: function () {
                if (this.star == 0) {
                    return 0;
                }
                var propertyCfg = Game.config.property.getConfig(this.star);
                if (propertyCfg) {
                    var star = Number(propertyCfg.zh_cn_name);
                    if (star == null) {
                        console.log("Error Item Star");
                        return 0;
                    }
                    star = star < 0 ? 0 : star;
                    star = star > 6 ? 6 : star;
                    return star;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        return ItemConfig;
    }(configs.ItemConfigStruct));
    configs.ItemConfig = ItemConfig;
})(configs || (configs = {}));
//# sourceMappingURL=ItemConfig.js.map