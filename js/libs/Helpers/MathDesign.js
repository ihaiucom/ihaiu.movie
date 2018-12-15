//--属性计算
var MathDesign = /** @class */ (function () {
    function MathDesign() {
    }
    //获取训练室升级减免的时间
    MathDesign.calcActorExperciseDerateTime = function () {
        var roomInfo = Game.moduleModel.building.getRoomByType(Games.RoomType.Training);
        var roomCfg = Game.config.buildingLevel.getConfig(roomInfo.id);
        var roomEffects = roomCfg.effect_id;
        for (var _i = 0, roomEffects_1 = roomEffects; _i < roomEffects_1.length; _i++) {
            var effectId = roomEffects_1[_i];
            var roomEffectCfg = Game.config.buildingEffect.getConfig(effectId);
            if (roomEffectCfg.effect == 25) //减少训练时间效果
             {
                return roomEffectCfg.par1;
            }
        }
        return 0;
    };
    //艺人训练所得经验加成 - 基础+小秘书+房间等级
    MathDesign.calcActorExperciseExp = function () {
        var baseExperciseExpVal = Game.config.global.getConfig(GlobalKey.Actor_Train_Exp).value;
        var secretaryAddExpPer = Game.moduleModel.secretary.skillExpRate / 100;
        var roomLevelAddExpPer = this.getRoomLevelAddExp() / 100;
        return Math.floor((baseExperciseExpVal * (1 + secretaryAddExpPer)) * (1 + roomLevelAddExpPer));
    };
    //训练室升级经验加成百分比
    MathDesign.getRoomLevelAddExp = function () {
        var roomInfo = Game.moduleModel.building.getRoomByType(Games.RoomType.Training);
        var roomCfg = Game.config.buildingLevel.getConfig(roomInfo.id);
        var roomEffects = roomCfg.effect_id;
        for (var _i = 0, roomEffects_2 = roomEffects; _i < roomEffects_2.length; _i++) {
            var effectId = roomEffects_2[_i];
            var roomEffectCfg = Game.config.buildingEffect.getConfig(effectId);
            if (roomEffectCfg.effect == 24) //经验加成效果
             {
                return roomEffectCfg.par1;
            }
        }
        return 0;
    };
    return MathDesign;
}());
//# sourceMappingURL=MathDesign.js.map