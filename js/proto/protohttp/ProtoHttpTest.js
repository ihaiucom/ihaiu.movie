var frame;
(function (frame) {
    var ProtoHttpTest = /** @class */ (function () {
        function ProtoHttpTest() {
        }
        ProtoHttpTest.prototype.init = function () {
            DataRespondsManager.init();
            OobManager.init();
            //Http初始化和登录
            this.httpChannel = new frame.comm.HttpChannel("172.16.0.116", 8360, false);
            this.httpChannel.on(frame.event.HttpChannelEvent.LOGIN_COMPLETE, this, this.loginHandle);
            this.httpChannel.login("test1");
        };
        ProtoHttpTest.prototype.loginHandle = function (rsp) {
            this.httpChannel.off(frame.event.HttpChannelEvent.LOGIN_COMPLETE, this, this.loginHandle);
            if (rsp.OK) {
                console.log("登录成功");
                //业务数据通信从这里开始
                this.doBusinessRequest();
            }
            else {
                console.log("登录失败");
                console.log(rsp.errMsg);
            }
        };
        ProtoHttpTest.prototype.doBusinessRequest = function () {
            var requestData = new Proto.API.GameData.GetLoginGameDataRequest();
            requestData.channel = "1";
            this.httpChannel.http.addReq("GameData/GetLoginGameData", requestData);
            // this.httpChannel.http.addReq("GameData/GetLoginGameData", requestData, (rsp:frame.comm.HttpRespondsData)=>{
            //     if(rsp.OK)
            //     {
            //         let responseData =  rsp.data as Proto.API.GameData.GetLoginGameDataResponse;
            //         console.log(JSON.stringify(responseData));
            //     } else {
            //         console.log("GetLoginGameData请求失败");
            //         console.log(rsp.errMsg);
            //     }
            // }, this);
        };
        return ProtoHttpTest;
    }());
    frame.ProtoHttpTest = ProtoHttpTest;
})(frame || (frame = {}));
//# sourceMappingURL=ProtoHttpTest.js.map