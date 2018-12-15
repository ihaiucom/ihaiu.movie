/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.GuideDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                break;
            default:
                Game.moduleModel.guide.initFinishId(msg.guide, msg.story);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=GuideDataHandler.js.map