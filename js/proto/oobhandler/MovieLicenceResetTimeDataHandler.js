/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.MovieLicenceResetTimeDataHandler = function (msg, ops, uuid) {
        Game.moduleModel.warData.licenceData = msg;
        Game.moduleModel.warData.licenceTimeLeft();
    };
})(Games || (Games = {}));
//# sourceMappingURL=MovieLicenceResetTimeDataHandler.js.map