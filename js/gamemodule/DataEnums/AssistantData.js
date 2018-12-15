var Games;
(function (Games) {
    var AssistantData = /** @class */ (function () {
        function AssistantData() {
            /**场面 */
            this.spectacle = 0;
            /**表演 */
            this.perform = 0;
            /**剧情 */
            this.plot = 0;
            /**艺术 */
            this.art = 0;
            /**娱乐 */
            this.entertainment = 0;
        }
        Object.defineProperty(AssistantData.prototype, "config", {
            get: function () {
                var actorData = this.actorData;
                if (actorData) {
                    var id = actorData.config.star * 10000 + this.id * 1000 + this.level;
                    return Game.config.actorAide.getConfig(id);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        AssistantData.prototype.getOtherConfig = function (lv) {
            var actorData = this.actorData;
            if (actorData) {
                var id = actorData.config.star * 10000 + this.id * 1000 + lv;
                return Game.config.actorAide.getConfig(id);
            }
            return null;
        };
        Object.defineProperty(AssistantData.prototype, "uuid", {
            get: function () {
                var actorData = this.actorData;
                if (actorData) {
                    return actorData.uuid;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "nextValue", {
            //下一等级属性值
            get: function () {
                var cfg = this.getOtherConfig(this.level);
                var value = 0;
                if (cfg) {
                    value = this.isMainId ? cfg.main_property : cfg.secondary_property;
                }
                return value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "preValue", {
            //上一等级属性值
            get: function () {
                var cfg = this.getOtherConfig(this.level - 1);
                var value = 0;
                if (cfg) {
                    value = this.isMainId ? cfg.main_property : cfg.secondary_property;
                }
                return value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "iconUrl", {
            //课程icon
            get: function () {
                var cfg = this.config;
                if (cfg) {
                    if (this.level > 0) {
                        return cfg.iconUrl;
                    }
                    else {
                        return cfg.iconUrl2;
                    }
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "propUrl", {
            //属性icon
            get: function () {
                var propConfig = Game.config.property.getConfig(this.propId);
                return propConfig.iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "levelTxt", {
            //lv.10
            get: function () {
                if (this.level > 0) {
                    return format(Games.TEXT.LVDot, this.level);
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "cost", {
            //升级解锁花费
            get: function () {
                return this.costDtItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "canUp", {
            /**
             * 是否可以升级
             */
            get: function () {
                var cost = this.cost;
                if (this.level > 0 && Games.ItemHelper.checkItemsEnough(cost) && this.isMax == false) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssistantData.prototype, "isMax", {
            /**
             * 是否是最大值
             */
            get: function () {
                var cfg = this.getOtherConfig(this.level + 1);
                return cfg == null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         *  格式化数据
         * @param msg 数据
         */
        AssistantData.prototype.formatByProto = function (msg, actorData, id) {
            this.actorData = actorData;
            if (msg) {
                this.level = msg.level;
                this.id = msg.id;
                this.actorSign = msg.actorSign;
            }
            else {
                this.level = 0;
                this.id = id;
                this.actorSign = 0;
            }
            this.costDtItems = [];
            var cfg = this.config;
            if (cfg) {
                if (cfg.cost > 0) {
                    var item = new DTItemNum();
                    item.itemId = Game.config.item.getItemByActorId(this.actorData.id).id;
                    item.itemNum = cfg.cost;
                    this.costDtItems = this.costDtItems.concat(item);
                }
                if (cfg.introduction) {
                    this.costDtItems = this.costDtItems.concat(cfg.introduction);
                }
            }
            //计算增肌属性
            this.caculateProp();
        };
        //计算增加属性
        AssistantData.prototype.caculateProp = function () {
            var data = this.actorData;
            var props = data.getProps();
            var propId = props[this.config.number - 1];
            var config = Game.config.property.getConfig(propId);
            var filed = config.field;
            var isMainId = data.config.isMainID(propId);
            var totalValue = 0;
            if (this.level > 0) {
                var lv = this.level - 1;
                while (lv >= 0) {
                    var preConfig = this.getOtherConfig(lv);
                    var addValue = isMainId ? preConfig.main_property : preConfig.secondary_property;
                    totalValue = totalValue + addValue;
                    lv--;
                }
            }
            this.propId = propId;
            this.isMainId = isMainId;
            this.propValue = totalValue;
            this[filed] = totalValue;
            //标签加成解锁
            var tagId = this.actorData.id * 100 + this.id * 10 + 1;
            var tagCfg = Game.config.actorAideattach.getConfig(tagId);
            if (tagCfg) {
                this.isUnlockTag = this.level >= tagCfg.lv;
                this.unlockTagTip = format(Games.TEXT.AssistantUnlockTag, tagCfg.lv);
                this.tagAddValue = tagCfg.value;
            }
            //训练加成解锁
            var trainId = this.actorData.id * 100 + this.id * 10 + 2;
            var trainCfg = Game.config.actorAideattach.getConfig(trainId);
            if (trainCfg) {
                this.isUnlockTrain = this.level >= trainCfg.lv;
                this.unlockTrainTip = format(Games.TEXT.AssistantUnlockTrain, trainCfg.lv);
                this.trainAddValue = trainCfg.value;
            }
        };
        return AssistantData;
    }());
    Games.AssistantData = AssistantData;
})(Games || (Games = {}));
//# sourceMappingURL=AssistantData.js.map