var Games;
(function (Games) {
    //方向
    var ItemUseType;
    (function (ItemUseType) {
        /**其他 */
        ItemUseType[ItemUseType["None"] = 0] = "None";
        /**获得全部物品 */
        ItemUseType[ItemUseType["AllReward"] = 1] = "AllReward";
        /** 随机获得一种物品 */
        ItemUseType[ItemUseType["RandomReward"] = 2] = "RandomReward";
        /** 给艺人添加道具 */
        ItemUseType[ItemUseType["ActorUse"] = 3] = "ActorUse";
        /** 选择一种物品 */
        ItemUseType[ItemUseType["SelectReward"] = 4] = "SelectReward";
    })(ItemUseType = Games.ItemUseType || (Games.ItemUseType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=ItemUseType.js.map