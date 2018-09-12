var Games;
(function (Games) {
    Games.ProtoOobHandler.GameInfoHandler = function (msg, ops, uuid) {
        if (!msg)
            return;
        User.info = msg;
        //艺人时间控制
        Game.moduleModel.actor.setup();
        //
        Game.moduleModel.story.setup();
        //通知数据变更
        User.sGameInfoUpdate.dispatch();
        User.startTimeTick();
    };
})(Games || (Games = {}));
//# sourceMappingURL=GameInfoHandler.js.map