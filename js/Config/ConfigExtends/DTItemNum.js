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
    var DTItemNum = /** @class */ (function (_super) {
        __extends(DTItemNum, _super);
        function DTItemNum() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DTItemNum.parse = function (txt) {
            var csv = toStringArray(txt);
            if (csv.length < 2)
                return null;
            var config = new DTItemNum();
            config.itemId = csvGetInt(csv, 0);
            config.itemNum = csvGetInt(csv, 1);
            return config;
        };
        DTItemNum.parseArray = function (txt) {
            var csv = toStringArray(txt, /[;]/);
            var list = [];
            for (var i = 0; i < csv.length; i++) {
                var item = DTItemNum.parse(csv[i]);
                if (item) {
                    list.push(DTItemNum.parse(csv[i]));
                }
            }
            return list;
        };
        Object.defineProperty(DTItemNum.prototype, "itemConfig", {
            // 物品配置
            get: function () {
                return Game.config.item.getConfig(this.itemId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemType", {
            // 物品类型
            get: function () {
                if (this.itemConfig) {
                    return this.itemConfig.type;
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemName", {
            // 物品名称
            get: function () {
                if (this.itemConfig) {
                    return this.itemConfig.name;
                }
                return this.itemId + "\u6CA1\u914D\u7F6E\u8BE5\u7269\u54C1";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemDes", {
            // 物品描述
            get: function () {
                if (this.itemConfig) {
                    return this.itemConfig.item_des;
                }
                return this.itemId + "\u6CA1\u914D\u7F6E\u8BE5\u7269\u54C1";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemStar", {
            // 物品星级
            get: function () {
                if (this.itemConfig) {
                    var propertyCfg = Game.config.property.getConfig(this.itemConfig.star);
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
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemIconUrl", {
            // 物品图标
            get: function () {
                if (this.itemConfig) {
                    var avatarConfig = Game.config.avatar.getConfig(this.itemConfig.icon);
                    if (avatarConfig) {
                        return avatarConfig.iconUrl;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DTItemNum.prototype, "itemNumTxt", {
            // 数字文本
            get: function () {
                return formatNumberUnit(this.itemNum);
            },
            enumerable: true,
            configurable: true
        });
        return DTItemNum;
    }(configs.DTItemNumStruct));
    configs.DTItemNum = DTItemNum;
})(configs || (configs = {}));
//# sourceMappingURL=DTItemNum.js.map