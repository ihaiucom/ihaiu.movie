var Games;
(function (Games) {
    var AssetData = /** @class */ (function () {
        function AssetData() {
            this.lv = 1; //等级
            this.actorExtraLimit = 0; //艺人上限
            this.extraGiveACLimit = 0; //额外
            //
            this.giveItemDic = new Dictionary();
            this.giveItems = [];
        }
        /**
         * 更新资产数据
         * @param data 资产数据
         */
        AssetData.prototype.update = function (data) {
            this.data = data;
            this.giveItemDic.clear();
            this.giveItems.splice(0, this.giveItems.length);
            if (data) {
                this.lv = data.giveLevel;
                if (data.giveItemList) {
                    //存储起来
                    for (var index = 0; index < data.giveItemList.length; index++) {
                        var element = data.giveItemList[index];
                        this.giveItems.push(element.amount);
                        this.giveItemDic.add(element.itemId, element);
                    }
                    ;
                }
                this.extraGiveACLimit = data.extraGiveACLimit;
            }
            //
            var actorConfig = Game.config.actor.getConfig(this.actorId);
            //
            var assetId = this.actorId * 100 + this.type;
            this.isMax = false;
            if (actorConfig) {
                var actorAssetConfig = Game.config.actorAssets.getConfig(assetId);
                if (actorAssetConfig) {
                    this.actor_property = actorAssetConfig.actor_property;
                }
                var assetNexLvConfig = Game.config.actorAssetsLv.getConfig(this.lv + 1);
                if (assetNexLvConfig) {
                    this.isMax = false;
                }
                else {
                    this.isMax = true;
                }
                var assetLvConfig = Game.config.actorAssetsLv.getConfig(this.lv);
                if (assetLvConfig) {
                    var star = actorConfig.starNum;
                    this.num = assetLvConfig["star" + star + "_num"];
                    this.value = assetLvConfig["star" + star + "_value"];
                    this.max = assetLvConfig["star" + star + "_max"];
                    switch (this.type) {
                        case 1:
                            this.item = assetLvConfig["sex_" + actorConfig.sex];
                            break;
                        case 2:
                            this.item = assetLvConfig["c_" + actorConfig.country];
                            break;
                        case 3:
                            this.item = assetLvConfig["p_" + actorConfig.show_type];
                            break;
                        case 4:
                            this.item = assetLvConfig["y_" + actorConfig.age_type];
                            break;
                        default:
                            break;
                    }
                }
            }
            //当前配置
            // this.config = Game.config.actorAssets.getConfigByIdLvType(this.actorId, this.type, this.lv);
            // //下一级
            // let nextConfig = Game.config.actorAssets.getConfigByIdLvType(this.actorId, this.type, this.lv + 1);
            // if (nextConfig)
            // {
            // 	this.isMax = false;
            // }
            // else
            // {
            // 	this.isMax = true;
            // }
            // this.id = this.config.id;
        };
        /**
         *
         * @param id
         */
        AssetData.prototype.getItemNum = function (id) {
            var num = 0;
            var d = this.giveItemDic.getValue(id);
            if (d) {
                num = d.amount;
            }
            return num;
        };
        /**
         * 获取当前等级锁赠送的数量
         * @param id 道具id
         */
        AssetData.prototype.getCurLvItemNum = function (id) {
            var lv = this.lv;
            var count = this.getItemNum(id);
            while (lv > 1) {
                lv = lv - 1;
                var actorConfig = Game.config.actor.getConfig(this.actorId);
                if (actorConfig) {
                    var star = actorConfig.starNum;
                    var item = 0;
                    var num = 0;
                    var assetLvConfig = Game.config.actorAssetsLv.getConfig(lv);
                    if (assetLvConfig) {
                        num = assetLvConfig["star" + star + "_num"];
                        switch (this.type) {
                            case 1:
                                item = assetLvConfig["sex_" + actorConfig.sex];
                                break;
                            case 2:
                                item = assetLvConfig["c_" + actorConfig.country];
                                break;
                            case 3:
                                item = assetLvConfig["p_" + actorConfig.show_type];
                                break;
                            case 4:
                                item = assetLvConfig["y_" + actorConfig.age_type];
                                break;
                            default:
                                break;
                        }
                        if (item == id) {
                            count = count - num;
                        }
                    }
                }
            }
            return count;
        };
        Object.defineProperty(AssetData.prototype, "maxSendNum", {
            //返回最大赠送数量上限		
            get: function () {
                var num = 0;
                var items = this.giveItemDic.getValues();
                var preCount = 0;
                for (var index = 0; index < items.length; index++) {
                    var item = items[index];
                    if (item.itemId != this.item) {
                        preCount += item.amount;
                    }
                }
                num = this.actorExtraLimit - preCount;
                return num + this.extraGiveACLimit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetData.prototype, "useCardMax", {
            //使用忠诚卡上限
            get: function () {
                var max = this.num;
                return max;
            },
            enumerable: true,
            configurable: true
        });
        return AssetData;
    }());
    Games.AssetData = AssetData;
})(Games || (Games = {}));
//# sourceMappingURL=AssetData.js.map