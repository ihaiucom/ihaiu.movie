var Games;
(function (Games) {
    Games.ProtoOobHandler.GameInfoHandler = function (msg, ops, uuid) {
        if (!msg)
            return;
        User.info = msg;
        switch (ops) {
            case EGameDataOps.init:
                Game.moduleModel.building.initRoomInfo(msg);
                break;
            case EGameDataOps.update:
                break;
            default:
                break;
        }
        if (User.info) {
            gameApplication.setUserInfo(User.account.account, User.info.name);
        }
        //艺人时间控制
        Game.moduleModel.actor.setup();
        //
        Game.moduleModel.story.setup();
        //通知数据变更
        User.sGameInfoUpdate.dispatch();
        // 注册埋点
        Games.Static.Instance.onRegistation(false);
        // 登录埋点
        Games.Static.Instance.onloadstart(false);
        // 用户状态信息
        Games.Static.Instance.onUserItemInfo();
        Games.Static.Instance.onUserStatus();
    };
})(Games || (Games = {}));
//# sourceMappingURL=GameInfoHandler.js.map