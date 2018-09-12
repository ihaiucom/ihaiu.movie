var Games;
(function (Games) {
    Games.ProtoOobHandler.MailDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                Game.moduleModel.mail.RemoveMailData(uuid);
                break;
            default:
                Game.moduleModel.mail.UpdateServeMailData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=MailDataHandler.js.map