/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ManageMeetingDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                break;
            default:
                var data = Game.moduleModel.meeting.addMeetingData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ManageMeetingDataHandler.js.map