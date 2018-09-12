/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
var Games;
(function (Games) {
    Games.ProtoOobHandler.ManageOrderDataHandler = function (msg, ops, uuid) {
        switch (ops) {
            case EGameDataOps.remove:
                var data = Game.moduleModel.order.removeOrderData(uuid);
                if (data) {
                    data.dispatch();
                }
                break;
            default:
                Game.moduleModel.order.addOrderData(msg);
                break;
        }
    };
})(Games || (Games = {}));
//# sourceMappingURL=ManageOrderDataHandler.js.map