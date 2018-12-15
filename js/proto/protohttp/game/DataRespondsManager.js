/*
* 服务器消息返回管理器
*/
var DataRespondsManager = /** @class */ (function () {
    function DataRespondsManager() {
    }
    DataRespondsManager.init = function () {
        Frame.MessageCenter.on(frame.event.HttpChannelEvent.DATA_RESPONDS, this.dataResponds, this);
    };
    DataRespondsManager.dataResponds = function (rsp) {
        if (rsp.OK) {
            var arr = rsp.reqData.command.split("/");
            var moduleName = arr[0];
            var funName = arr[1];
            // moduleName = firstUpperCase(moduleName)
            // funName = firstUpperCase(funName)
            var handler = Game.protohandler[moduleName];
            if (handler) {
                var fun = handler[funName];
                if (fun) {
                    if (!rsp.reqData.data["__isTook"])
                        console.info("[HttpProto OnResponds]  command=" + rsp.reqData.command + ", " + getClassName(rsp.reqData.data));
                    fun.apply(handler, [rsp.data]);
                }
                else {
                    if (!rsp.reqData.data["__isTook"])
                        console.warn("[HttpProto OnResponds No Handler] command=" + rsp.reqData.command + ", " + getClassName(rsp.reqData.data));
                }
            }
            else {
                console.warn("[HttpProto OnResponds No Handler] command=" + rsp.reqData.command + ", " + getClassName(rsp.reqData.data));
            }
            var eventName_1 = moduleName + "_" + funName;
            setTimeout(function () {
                Game.protoOkEvent.dispatch(eventName_1, rsp.data);
            }, 10);
        }
        else {
            console.debug("[HttpProto OnResponds OnError] command=" + rsp.reqData.command + ", " + getClassName(rsp.reqData.data) + ",  errNo=" + rsp.errNo + ", errMsg=" + rsp.errMsg);
        }
    };
    return DataRespondsManager;
}());
//# sourceMappingURL=DataRespondsManager.js.map