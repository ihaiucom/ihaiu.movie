var Games;
(function (Games) {
    var SkillData = /** @class */ (function () {
        function SkillData() {
        }
        /**
         * 设计解锁数据
         * @param dtActor
         */
        SkillData.prototype.setDTActor = function (dtActor) {
            this.dtActor = dtActor;
            this.config = Game.config.skill.getConfigByGroupIdAndLv(dtActor.group_id, 1);
        };
        /**
         * 更新
         * @param data
         */
        SkillData.prototype.update = function (data) {
            this.data = data;
            this.isEffect = false;
            if (this.data) {
                this.isEffect = this.data.isEffect;
                this.config = Game.config.skill.getConfig(this.data.skillId);
            }
        };
        Object.defineProperty(SkillData.prototype, "iconUrl", {
            //图标
            get: function () {
                return Game.config.avatar.getConfig(this.config.icon).iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkillData.prototype, "desc", {
            //
            get: function () {
                return format(this.config.tips, this.config.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkillData.prototype, "effectDesc", {
            //
            get: function () {
                return format(this.config.effecttext, this.config.value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SkillData.prototype, "isUnlock", {
            //是否解锁
            get: function () {
                var acotrlv = 1;
                var data = Game.moduleModel.actor.getActor(this.actorId);
                if (data) {
                    acotrlv = data.level;
                }
                return this.dtActor.lv <= acotrlv;
            },
            enumerable: true,
            configurable: true
        });
        return SkillData;
    }());
    Games.SkillData = SkillData;
})(Games || (Games = {}));
//# sourceMappingURL=SkillData.js.map