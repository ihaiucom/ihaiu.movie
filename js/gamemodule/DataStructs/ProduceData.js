var Games;
(function (Games) {
    var ProduceSkillType;
    (function (ProduceSkillType) {
        ProduceSkillType[ProduceSkillType["Process"] = 0] = "Process";
        ProduceSkillType[ProduceSkillType["Storage"] = 1] = "Storage";
        ProduceSkillType[ProduceSkillType["Time"] = 2] = "Time";
        ProduceSkillType[ProduceSkillType["Output"] = 3] = "Output";
    })(ProduceSkillType = Games.ProduceSkillType || (Games.ProduceSkillType = {}));
    //升级技能
    var ProduceSkill = /** @class */ (function () {
        function ProduceSkill() {
        }
        return ProduceSkill;
    }());
    Games.ProduceSkill = ProduceSkill;
    var ProduceData = /** @class */ (function () {
        function ProduceData() {
            this.produceSkillList = [];
            this.outFactorList = [];
        }
        return ProduceData;
    }());
    Games.ProduceData = ProduceData;
})(Games || (Games = {}));
//# sourceMappingURL=ProduceData.js.map