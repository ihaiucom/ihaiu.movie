var Games;
(function (Games) {
    Games.ProtoOobHandler.UsrDataHandler = function (msg, ops, uuid) {
        if (!msg)
            return;
        console.log("msg.usrState = " + msg.usrState);
        User.protoUserData = msg;
        switch (msg.usrState) {
            // 新账号
            case Proto.SE.EUsrState.uninit:
                Game.menu.openTab(Games.MenuId.CreateRole, Games.CreateRoleTabType.Default);
                break;
            // 选择初始艺人
            case Proto.SE.EUsrState.init_actor:
            // Game.menu.openTab(MenuId.CreateRole, CreateRoleTabType.InitialActor);
            // break;
            // 启用
            case Proto.SE.EUsrState.usual:
                // setTimeout(() =>
                // {
                //     // Game.menu.open(MenuId.Home);
                //     Game.guide.checkPlayOpenAnima();
                //     Game.menu.close(MenuId.Login);
                //     Game.menu.close(MenuId.CreateRole);
                // }, 100);
                break;
            // 冻结
            case Proto.SE.EUsrState.frozen:
                Game.system.alertText(Games.TEXT.ErorAccountFrozen);
                break;
            // 停用
            case Proto.SE.EUsrState.dropped:
                Game.system.alertText(Games.TEXT.ErorAccountDropped);
                break;
        }
        // 设置服务器登录时间
        Game.time.serverLoginTime = msg.lastLoginTime * 1000;
        Game.time.registerTime = msg.registerTime * 1000;
        // 启动协议消息订阅
        Games.ProtoTookManager.getInstance().start();
    };
})(Games || (Games = {}));
//# sourceMappingURL=UsrDataHandler.js.map