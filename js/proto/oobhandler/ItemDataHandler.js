var Games;
(function (Games) {
    Games.ProtoOobHandler.ItemDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                var itemData = Game.moduleModel.item.getItemByUuid(uuid);
                if (itemData) {
                    Game.moduleModel.item.setItemNum(itemData.itemId, 0, uuid);
                }
                break;
            default:
                // console.log("ItemDataHandler itemId=" + msg.itemId + "  amount=" + msg.amount);
                Game.moduleModel.item.setItemNum(msg.itemId, msg.amount, uuid, msg.createTime);
                if (Game.config.item.getType(msg.itemId) == 14) {
                    Game.moduleModel.street.UpdateStreetCup(msg.amount);
                }
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ItemDataHandler.js.map