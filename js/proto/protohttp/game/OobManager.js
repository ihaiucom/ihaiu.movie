/*
* oob管理器
*/
var OobManager = /** @class */ (function () {
    function OobManager() {
    }
    OobManager.init = function () {
        // Frame.MessageCenter.on(frame.event.HttpChannelEvent.OOB_UPDATE, this.oobUpdateHand, this);
    };
    OobManager.oobUpdateHand = function (oob, isTook) {
        // console.log("oob数据更新")
        // console.log(JSON.stringify(oob));
        for (var i = 0; i < oob.length; i++) {
            for (var j = 0; j < oob[i].length; j++) {
                var item = oob[i][j];
                var ops = item["ops"];
                var uuid = item["uuid"];
                // console.log(item.data);
                var type = item["type"];
                if (type) {
                    var a = Games.ProtoOobHandler;
                    var fun = Games.ProtoOobHandler[type + "Handler"];
                    if (fun) {
                        if (!isTook)
                            console.info("[oob\u534F\u8BAE\u6D88\u606F\u5904\u7406\u5668] type= " + type + "  ops=" + ops + "  uuid=" + uuid);
                        if (isString(item.data)) {
                            if (isNullOrEmpty(item.data)) {
                                item.data = null;
                            }
                            else {
                                item.data = JSON.parse(item.data);
                            }
                        }
                        fun(item.data, ops, uuid);
                    }
                    else {
                        console.warn("[oob\u534F\u8BAE\u6D88\u606F\u6CA1\u6709\u5904\u7406\u5668] \u6CA1\u6709\u8BBE\u7F6E type= " + type + "  ops=" + ops + "  uuid=" + uuid);
                    }
                    // Game.protoOkEvent.dispatch(type, item.data, ops, uuid);
                }
                else {
                    console.error("[oob\u534F\u8BAE\u6D88\u606F\u51FA\u9519] \u6CA1\u6709\u8BBE\u7F6Etype, " + JSON.stringify(item) + ",   type= " + type + "  ops=" + ops + "  uuid=" + uuid);
                }
                // console.log("");
            }
        }
        setTimeout(function () {
            OobManager.oobNoticMsg(oob);
        }, 10);
    };
    OobManager.oobNoticMsg = function (oob) {
        for (var i = 0; i < oob.length; i++) {
            for (var j = 0; j < oob[i].length; j++) {
                var item = oob[i][j];
                var ops = item["ops"];
                var uuid = item["uuid"];
                var type = item["type"];
                if (type) {
                    Game.protoOkEvent.dispatch(type, item.data, ops, uuid);
                }
            }
        }
    };
    return OobManager;
}());
//# sourceMappingURL=OobManager.js.map