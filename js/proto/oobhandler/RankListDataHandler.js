/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.RankListDataHandler = function (msg, ops, uuid) {
        Game.moduleModel.rank.UpdateRankListData(msg);
        Game.moduleModel.oscar.UpdateRewardData(msg);
    };
})(Games || (Games = {}));
//# sourceMappingURL=RankListDataHandler.js.map