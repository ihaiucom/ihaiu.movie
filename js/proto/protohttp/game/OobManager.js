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
                            console.info("[HttpProto OnObb] type= " + type + "  ops=" + ops + "  uuid=" + uuid);
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
                        console.warn("[HttpProto OnObb No Handler] \u6CA1\u6709\u8BBE\u7F6E type= " + type + "  ops=" + ops + "  uuid=" + uuid);
                    }
                    // Game.protoOkEvent.dispatch(type, item.data, ops, uuid);
                }
                else {
                    console.error("[HttpProto OnObb OnError] \u6CA1\u6709\u8BBE\u7F6Etype, " + JSON.stringify(item) + ",   type= " + type + "  ops=" + ops + "  uuid=" + uuid);
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
                    OobManager.oobTypeNumDict[type] = OobManager.oobTypeNumDict[type] !== undefined ? OobManager.oobTypeNumDict[type] + 1 : 1;
                    Game.protoOkEvent.dispatch(type, item.data, ops, uuid);
                }
            }
        }
        for (var key in OobManager.oobTypeNumDict) {
            OobManager.oobTypeKeyList.push(key);
            Game.protoOobListOkEvent.dispatch(key);
            // console.log(key + ":" + OobManager.oobTypeNumDict[key]);
        }
        while (OobManager.oobTypeKeyList.length > 0) {
            delete OobManager.oobTypeNumDict[OobManager.oobTypeKeyList.pop()];
        }
    };
    OobManager.oobTypeNumDict = {};
    OobManager.oobTypeKeyList = [];
    return OobManager;
}());
//# sourceMappingURL=OobManager.js.map