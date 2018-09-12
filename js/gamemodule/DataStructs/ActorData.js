var Games;
(function (Games) {
    var ActorExerciseData = /** @class */ (function () {
        function ActorExerciseData(msg) {
            this.seatUuid = "";
            this.uuid = "";
            this.id = 0;
            this.seatIndex = 0;
            this.startTime = 0;
            if (msg) {
                this.uuid = msg.actorUuid;
                this.seatIndex = msg.index;
                this.startTime = msg.startTime;
            }
        }
        return ActorExerciseData;
    }());
    Games.ActorExerciseData = ActorExerciseData;
    var ActorData = /** @class */ (function () {
        function ActorData() {
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
            /**参与拍摄票房影响力总和 */
            this.boxOfficeCount = 0;
            /**获取奖杯数量 */
            this.cupCount = 0;
            /**拍摄电影次数 */
            this.movieCount = 0;
            /**人气值 */
            this.popularValue = 0;
        }
        // 拍摄需求片酬（实际消耗）
        ActorData.prototype.PayForFilming = function (positionId) {
            var story = Game.moduleModel.warData.moveStory;
            var posCost = Game.config.position.getConfig(positionId).position_con * 0.01;
            var starCost = Game.config.starCon.getConfig(story.stars).story_star_con * 0.01;
            return this.payCheck * posCost * starCost;
        };
        /**
         * 依据类型，获取熟练度信息
         * @param type 类型
         */
        ActorData.prototype.getShootType = function (type) {
            for (var i = 0; i < this.shootTypeList.length; i++) {
                if (this.shootTypeList[i].type === type) {
                    return this.shootTypeList[i];
                }
            }
            return null;
        };
        /**
         * 获取
         */
        ActorData.prototype.getShootListLvGreater0 = function () {
            var list = [];
            for (var i = 0; i < this.shootTypeList.length; i++) {
                if (this.shootTypeList[i].proficiencyLevel > 0) {
                    list.push(this.shootTypeList[i]);
                }
            }
            return list;
        };
        /**
         *设置id
         * @param value id数据
         */
        ActorData.prototype.setId = function (value) {
            this.id = value;
            this.config = Game.config.actor.getConfig(value);
            this.props = [];
            if (this.config.spectacle > 0) {
                this.props.push(1601);
            }
            if (this.config.perform > 0) {
                this.props.push(1602);
            }
            if (this.config.plot > 0) {
                this.props.push(1603);
            }
            if (this.config.art > 0) {
                this.props.push(1604);
            }
            if (this.config.entertainment > 0) {
                this.props.push(1605);
            }
        };
        /**
         * 设置等级
         * @param value 等级
         */
        ActorData.prototype.setLevel = function (value) {
            this.level = value;
            if (this.levelData == null) {
                this.levelData = new Games.ActorLevelData();
            }
            this.levelData.update(this.id, value);
        };
        /**
         * 设置培养
         * @param value 等级
         */
        ActorData.prototype.setTrainCount = function (value) {
            this.cultivateCount = value;
            //
            if (this.trainData == null) {
                this.trainData = [new Games.ActorTrainData(), new Games.ActorTrainData(), new Games.ActorTrainData(), new Games.ActorTrainData()];
            }
            //
            if (this.nextTrainData == null) {
                this.nextTrainData = [new Games.ActorTrainData(), new Games.ActorTrainData(), new Games.ActorTrainData(), new Games.ActorTrainData()];
            }
            for (var index = 0; index < this.trainData.length; index++) {
                var element = this.trainData[index];
                element.update(this.id, index + 1, this.cultivateCount);
            }
            for (var index = 0; index < this.nextTrainData.length; index++) {
                var element = this.nextTrainData[index];
                element.update(this.id, index + 1, this.cultivateCount + 1);
            }
        };
        /**
         *
         * @param index
         */
        ActorData.prototype.getTrainDataByType = function (type) {
            return this.trainData[type - 1];
        };
        /**
         *
         * @param index
         */
        ActorData.prototype.getNextTrainDataByType = function (type) {
            return this.nextTrainData[type];
        };
        Object.defineProperty(ActorData.prototype, "star", {
            /**
             * 获取的是星星数量
             */
            get: function () {
                return this.config.starNum;
            },
            enumerable: true,
            configurable: true
        });
        //四种属性
        ActorData.prototype.getProps = function () {
            return this.props;
        };
        //技能数据
        ActorData.prototype.setSkills = function () {
            if (this.skills == null) {
                this.skills = new Array();
            }
            if (this.skillDict == null) {
                this.skillDict = new Dictionary();
            }
            var skills = this.config.skill;
            for (var index = 0; index < skills.length; index++) {
                //
                var data;
                if (index < this.skills.length) {
                    data = this.skills[index];
                }
                else {
                    data = new Games.SkillData();
                }
                data.setDTActor(skills[index]);
                var config = data.config;
                var groupId = config.group_id;
                data.actorId = this.id;
                data.update(this.getSkillByGroupId(groupId));
                this.skillDict.add(groupId, data);
                this.skills.push(data);
            }
        };
        //资产数据
        ActorData.prototype.setAssets = function () {
            if (this.assets == null) {
                this.assets = new Array();
            }
            for (var index = 0; index < Games.ActorModel.assetLenth; index++) {
                //
                var data;
                if (index < this.assets.length) {
                    data = this.assets[index];
                }
                else {
                    data = new Games.AssetData();
                    data.actorId = this.id;
                    data.type = index + 1;
                }
                data.actorExtraLimit = this.giveAssetsCountLimit;
                data.update(this.getAssetByType(index + 1));
                this.assets.push(data);
            }
        };
        /**
         *
         * @param type 获取资产
         */
        ActorData.prototype.getAssetByType = function (type) {
            for (var index = 0; index < this.giveAssetsList.length; index++) {
                var element = this.giveAssetsList[index];
                if (element.giveType == type) {
                    return element;
                }
            }
            return null;
        };
        /**
         * 获取技能
         * @param id 技能id
         */
        ActorData.prototype.getSkillByGroupId = function (id) {
            for (var index = 0; index < this.skillList.length; index++) {
                var element = this.skillList[index];
                var config = Game.config.skill.getConfig(element.skillId);
                if (config.group_id == id) {
                    return element;
                }
            }
            return null;
        };
        //获取当前拥有技能列表
        ActorData.prototype.getEffectSkills = function () {
            return this.skills.filter(function (value, index, array) {
                return value.isEffect == true;
            });
        };
        //获取解锁的
        ActorData.prototype.getUnlockSkillByType = function (type) {
            var skill;
            for (var index = 0; index < this.skills.length; index++) {
                var element = this.skills[index];
                if (element.config) {
                    var effect = Game.config.skillEffect.getConfig(element.config.effect).effect;
                    if (effect == type) {
                        skill = element;
                        break;
                    }
                }
            }
            return skill;
        };
        //获取当前等级上限
        ActorData.prototype.getMaxLv = function () {
            return Game.config.actorLoyalty.getConfigByIdLv(this.id, this.loyaltyLevel).max_lv;
        };
        //等级是否达到最大
        ActorData.prototype.isMaxLv = function () {
            var lv = this.loyaltyLevel + 1;
            var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
            var isMax = true;
            if (loyConfig) {
                isMax = false;
            }
            return isMax;
        };
        //获取下一等级提升的忠诚度
        ActorData.prototype.getNextLvUpLoyaltyLv = function () {
            var lv = this.loyaltyLevel;
            var curMaxLv = this.getMaxLv();
            while (true) {
                lv = lv + 1;
                var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
                if (loyConfig) {
                    if (loyConfig.max_lv > curMaxLv) {
                        break;
                    }
                }
                else {
                    break;
                }
            }
            return lv;
        };
        //获取下一等级提升的最大等级
        ActorData.prototype.getNextLvUpLv = function () {
            var lv = this.loyaltyLevel;
            var curMaxLv = this.getMaxLv();
            var nextMaxLv;
            while (true) {
                lv = lv + 1;
                var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, lv);
                if (loyConfig) {
                    if (loyConfig.max_lv > curMaxLv) {
                        nextMaxLv = loyConfig.max_lv;
                        break;
                    }
                }
                else {
                    break;
                }
            }
            return nextMaxLv;
        };
        Object.defineProperty(ActorData.prototype, "isLoyaltyMaxLv", {
            //最大忠诚度
            get: function () {
                var loyConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, this.loyaltyLevel);
                var nextConfig = Game.config.actorLoyalty.getConfigByIdLv(this.id, this.loyaltyLevel + 1);
                if (!nextConfig && this.loyaltyExp >= loyConfig.exp - 1) {
                    return true;
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorData.prototype, "bodyIconUrl", {
            get: function () {
                return this.config.avatarConfig.bodyIconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorData.prototype, "upgradeCostNum", {
            //获取升级消耗
            get: function () {
                var srcCostNum = this.levelData.cost.itemNum - this.levelExp;
                var rate = 1;
                var skill = this.getUnlockSkillByType(Games.SkillTriggerType.upgrade_gold_cost);
                if (skill && skill.isUnlock) {
                    rate = rate + skill.config.value / 100;
                }
                srcCostNum = Math.max(0, Math.ceil(srcCostNum * rate));
                return srcCostNum;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorData.prototype, "upgradeTotalCostNum", {
            //升级原所有花费
            get: function () {
                var srcCostNum = this.levelData.cost.itemNum;
                var rate = 1;
                var skill = this.getUnlockSkillByType(Games.SkillTriggerType.upgrade_gold_cost);
                if (skill && skill.isUnlock) {
                    rate = rate + skill.config.value / 100;
                }
                srcCostNum = Math.max(0, Math.ceil(srcCostNum * rate));
                return srcCostNum;
            },
            enumerable: true,
            configurable: true
        });
        ActorData.prototype.getAssetDataByType = function (type) {
            return this.assets[type];
        };
        //培养消耗金币
        ActorData.prototype.upgradeTrainCostGoldNum = function (type) {
            var trianConfig = this.getNextTrainDataByType(type - 1);
            var srcCostNum = trianConfig.cost[0].itemNum;
            var rate = 1;
            var skill = this.getUnlockSkillByType(Games.SkillTriggerType.upgrade_gold_cost);
            if (skill && skill.isUnlock) {
                rate = rate + skill.config.value / 100;
            }
            srcCostNum = Math.max(0, Math.ceil(srcCostNum * rate));
            return srcCostNum;
        };
        Object.defineProperty(ActorData.prototype, "preMaxLv", {
            //前一个等级最大限制
            get: function () {
                var lv = this.level - 1;
                var maxLv = 0;
                if (lv > 0) {
                    maxLv = Game.config.actorLoyalty.getMaxLv(this.id, lv);
                }
                return maxLv;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActorData.prototype, "curMaxLv", {
            //当前等级的最大限制
            get: function () {
                var lv = this.level;
                var maxLv = 0;
                if (lv > 0) {
                    maxLv = Game.config.actorLoyalty.getMaxLv(this.id, lv);
                }
                return maxLv;
            },
            enumerable: true,
            configurable: true
        });
        return ActorData;
    }());
    Games.ActorData = ActorData;
})(Games || (Games = {}));
//# sourceMappingURL=ActorData.js.map