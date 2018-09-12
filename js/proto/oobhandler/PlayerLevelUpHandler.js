/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    var playerLevel;
    Games.ProtoOobHandler.PlayerLevelUpHandler = function (msg, ops, uuid) {
        console.log("PlayerLevelUpHandler = " + msg.old_level + " upgrade " + msg.now_level);
        Game.moduleModel.playerInfo.enqueuePlayerLevelUpMsg(msg);
        Game.event.dispatch(GameEventKey.GameEventKey_PlayerLevelUp, msg.old_level, msg.now_level);
        // if (!playerLevel)
        // {
        // 	playerLevel = fgui.PlayerInfo.PlayerLevelUp.createInstance();
        // }
        // if (playerLevel)
        // 	playerLevel.show(msg.old_level, msg.now_level, msg.story);
    };
})(Games || (Games = {}));
//# sourceMappingURL=PlayerLevelUpHandler.js.map