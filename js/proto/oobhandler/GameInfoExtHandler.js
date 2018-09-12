var Games;
(function (Games) {
    Games.ProtoOobHandler.GameInfoExtHandler = function (msg) {
        if (!msg)
            return;
        User.infoExt = msg;
    };
})(Games || (Games = {}));
//# sourceMappingURL=GameInfoExtHandler.js.map