var Games;
(function (Games) {
    Games.ProtoOobHandler.StoryDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                Game.moduleModel.story.removeStoryByUUid(uuid);
                break;
            default:
                Game.moduleModel.story.addStoryByProto(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=StoryDataHandler.js.map