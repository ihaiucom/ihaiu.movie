var Games;
(function (Games) {
    //======================
    // 物品 数据
    //----------------------
    var ItemData = /** @class */ (function () {
        function ItemData() {
            // 物品ID
            this.itemId = 0;
            // 物品数量
            this.itemNum = 0;
            // 创建(获得)时间
            this.createTime = 0;
        }
        Object.defineProperty(ItemData.prototype, "itemNumTxt", {
            // 数字文本
            get: function () {
                var fix = this.itemNum > 1000 ? 1 : 0;
                return formatNumberUnit(this.itemNum, fix);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "itemConfig", {
            // 物品配置
            get: function () {
                return Game.config.item.getConfig(this.itemId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "itemType", {
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
        Object.defineProperty(ItemData.prototype, "itemName", {
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
        Object.defineProperty(ItemData.prototype, "itemDes", {
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
        Object.defineProperty(ItemData.prototype, "itemStar", {
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
        Object.defineProperty(ItemData.prototype, "itemIconUrl", {
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
        Object.defineProperty(ItemData.prototype, "itemBodyIconUrl", {
            get: function () {
                if (this.itemConfig) {
                    var avatarConfig = Game.config.avatar.getConfig(this.itemConfig.icon);
                    if (avatarConfig) {
                        return avatarConfig.bodyIconUrl;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "compoundItem", {
            get: function () {
                if (this.itemConfig) {
                    var compoundConfig = Game.config.compound.getConfig(this.itemConfig.syn_id);
                    if (compoundConfig && compoundConfig.syn_item != 0) {
                        var item = new DTItemNum();
                        item.itemId = compoundConfig.id;
                        item.itemNum = compoundConfig.num_req;
                        return item;
                    }
                    return null;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "compoundNum", {
            get: function () {
                if (this.compoundItem) {
                    var num = this.compoundItem.itemNum;
                    return Math.floor(this.itemNum / num);
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "splitItem", {
            get: function () {
                if (this.itemConfig) {
                    var compoundConfig = Game.config.compound.getConfig(this.itemConfig.syn_id);
                    if (compoundConfig) {
                        var splitList = compoundConfig.split_list;
                        if (splitList.length == 1 && splitList[0].itemId == 0) {
                            return [];
                        }
                        return splitList;
                    }
                    return null;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "compoundActor", {
            get: function () {
                if (this.itemConfig) {
                    if (this.itemConfig.actor_id != 0) {
                        var item = new DTItemNum();
                        item.itemId = this.itemConfig.actor_id;
                        item.itemNum = this.itemConfig.actor_num;
                        return item;
                    }
                    return null;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemData.prototype, "compoundActorNum", {
            get: function () {
                if (this.compoundActor) {
                    var num = this.compoundActor.itemNum;
                    return Math.floor(this.itemNum / num);
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        // 创建物品数据结构，使用物品ID和数量
        ItemData.Create = function (itemId, itemNum) {
            var item = new ItemData();
            item.itemId = itemId;
            item.itemNum = itemNum;
            return item;
        };
        ItemData.GetIconUrl = function (id) {
            var itemConfig = Game.config.item.getConfig(id);
            if (itemConfig) {
                var avatarConfig = Game.config.avatar.getConfig(itemConfig.icon);
                if (avatarConfig) {
                    return avatarConfig.iconUrl;
                }
            }
            return "";
        };
        ItemData.GetName = function (id) {
            var itemConfig = Game.config.item.getConfig(id);
            if (itemConfig) {
                return itemConfig.name;
            }
            return "";
        };
        ItemData.Binning = function (data) {
            if (data instanceof ItemData) {
                return data;
            }
            else {
                var item = new ItemData();
                if (data instanceof DTItemNum) {
                    item.itemId = data.itemId;
                    item.itemNum = data.itemNum;
                }
                else {
                    item.itemId = data.itemId;
                    item.itemNum = data.amount;
                }
                return item;
            }
        };
        ItemData.BinningItemList = function (_list) {
            if (_list == null) {
                return [];
            }
            var list = [];
            for (var index = 0; index < _list.length; index++) {
                var data = _list[index];
                if (!data) {
                    console.warn("ItemData.BinningItemList data=null , index=" + index);
                    continue;
                }
                var item = ItemData.Binning(data);
                if (!item || item.itemNum === undefined || item.itemNum === null) {
                    console.warn("ItemData.BinningItemList index=" + index + " item.itemNum=" + item.itemNum);
                    continue;
                }
                list.push(item);
            }
            return list;
        };
        return ItemData;
    }());
    Games.ItemData = ItemData;
})(Games || (Games = {}));
//# sourceMappingURL=ItemData.js.map