/**
* HTTP请求和响应通道
*/
var frame;
(function (frame) {
    var comm;
    (function (comm) {
        var Event = laya.events.Event;
        var HttpRequest = laya.net.HttpRequest;
        var ReqData = frame.comm.HttpRequestData;
        var HttpComm = /** @class */ (function () {
            function HttpComm(host, port, useHttps, timeout) {
                if (timeout === void 0) { timeout = 10000; }
                this._timeout = 10000;
                this._jwt = "";
                this.isInitGameData = false;
                this._timeout = timeout;
                this._httpConfig = new comm.HttpConfig(host, port, useHttps);
                this._reqDataList = [];
                this._httpRequest = new HttpRequest();
                this._httpRequest.http.timeout = timeout;
                this._httpRequest["reqdata"] = null;
                this._httpRequest.on(Event.COMPLETE, this, this.completeHandler);
                this._httpRequest.on(Event.ERROR, this, this.errorHandler);
                HttpComm.SetHeader("accept-language", LangManager.Instance.httpLang);
            }
            HttpComm.SetHeader = function (key, value) {
                var index = HttpComm.HEADERS.indexOf(key);
                if (index != -1) {
                    HttpComm.HEADERS[index + 1] = value;
                }
                else {
                    HttpComm.HEADERS.push(key, value);
                }
                log(HttpComm.HEADERS);
            };
            HttpComm.prototype.destroy = function () {
                this._httpRequest.off(Event.COMPLETE, this, this.completeHandler);
                this._httpRequest.off(Event.ERROR, this, this.errorHandler);
                delete this._httpRequest["reqdata"];
                this._httpRequest = null;
                this._reqDataList = null;
                this._httpConfig.destroy();
                this._httpConfig = null;
            };
            HttpComm.prototype.recreateHttpRequest = function () {
                if (!this._httpRequest) {
                    return;
                }
                var preHttpRequest = this._httpRequest;
                // setTimeout(function ()
                // {
                // 	preHttpRequest.off(Event.COMPLETE, this, this.completeHandler);
                // 	preHttpRequest.off(Event.ERROR, this, this.errorHandler);
                // }, 50000);
                Game.proto.isNeedReGetLoginGameData = false;
                var reqdata = this._httpRequest["reqdata"];
                if (reqdata && reqdata.data && !reqdata.data["__isTook"]) {
                    Game.proto.isNeedReGetLoginGameData = true;
                    // setTimeout(() =>
                    // {
                    // 	this._reqDataList.push(reqdata);
                    // }, 500);
                }
                // alert("recreateHttpRequest this._reqDataList.length=" + this._reqDataList.length + " reqdata=" + reqdata);
                this._httpRequest = new HttpRequest();
                this._httpRequest.http.timeout = this._timeout;
                // this._httpRequest["reqdata"] = reqdata;
                this._httpRequest["reqdata"] = null;
                this._httpRequest.on(Event.COMPLETE, this, this.completeHandler);
                this._httpRequest.on(Event.ERROR, this, this.errorHandler);
                // if (this._reqDataList.length > 0)
                // 	this.pickAndSendReq();
                if (BrowserDetect.isApp) {
                    if (preHttpRequest.http && preHttpRequest.http["xhr"] && preHttpRequest.http["xhr"]["abort"]) {
                        preHttpRequest.http["xhr"].abort();
                    }
                }
                else {
                    if (preHttpRequest.http && preHttpRequest.http["abort"]) {
                        preHttpRequest.http.abort();
                    }
                }
                preHttpRequest.off(Event.COMPLETE, this, this.completeHandler);
                preHttpRequest.off(Event.ERROR, this, this.errorHandler);
                preHttpRequest.offAll();
            };
            HttpComm.prototype.addReq = function (command, data, callback, callbackThis, highPriority) {
                if (data === void 0) { data = null; }
                if (callback === void 0) { callback = null; }
                if (callbackThis === void 0) { callbackThis = null; }
                if (highPriority === void 0) { highPriority = false; }
                var reqData = new ReqData(command, data, callback, callbackThis);
                if (highPriority) {
                    this._reqDataList.unshift(reqData);
                }
                else {
                    this._reqDataList.push(reqData);
                }
                if (this._httpRequest["reqdata"] == null)
                    this.pickAndSendReq();
                return reqData.reqIdx;
            };
            HttpComm.prototype.pickAndSendReq = function () {
                if (this._reqDataList.length > 0) {
                    var reqData = this._reqDataList.shift();
                    this._httpRequest["reqdata"] = reqData;
                    var fullData = this._httpConfig.getFullRequestData(this._jwt, reqData.data);
                    var data = JSON.stringify(fullData);
                    var url = this._httpConfig.getFullRequestUrl(reqData.command);
                    this._httpRequest.send(url, data, "post", "json", HttpComm.HEADERS);
                    if (HttpComm.LogRequest && !reqData.data["__isTook"]) 
                    // if (HttpComm.LogRequest)
                    {
                        console.log("--HttpProto Send：" + url);
                        // console.log(data);
                    }
                    if (!reqData.data["__isTook"]) {
                        var showTime = reqData.data["__showTime"] !== undefined && reqData.data["__showTime"] !== null ? reqData.data["__showTime"] : 5000;
                        var delayTime = reqData.data["__delayTime"] !== undefined && reqData.data["__delayTime"] !== null ? reqData.data["__delayTime"] : 2000;
                        GlobalModalWaiting.show(showTime, delayTime);
                    }
                }
            };
            HttpComm.prototype.completeHandler = function (msg) {
                GlobalModalWaiting.hide();
                // if (HttpComm.LogRespond) console.log("--HttpProto Respond：" + JSON.stringify(msg));
                var reqData = this._httpRequest["reqdata"];
                var respondsData = new frame.comm.HttpRespondsData();
                if (reqData && reqData.data) {
                    reqData.data["__isRespond"] = true;
                    if (msg.errno == 0 && reqData.data["__isReGetLoginGameData"]) {
                        Game.event.dispatch(GameEventKey.GameFrame_ReLoginData_Begin);
                        Game.onReLoginDataBeginHandler();
                    }
                }
                if (msg && msg.data) {
                    if (msg.data.oob) {
                        OobManager.oobUpdateHand(msg.data.oob, reqData.data["__isTook"]);
                        // Frame.MessageCenter.event(frame.event.HttpChannelEvent.OOB_UPDATE, msg.data.oob);
                    }
                    if (msg.errno == 0) {
                        respondsData.OK = true;
                        respondsData.reqData = reqData;
                        if (msg.data.data) {
                            respondsData.data = msg.data.data;
                        }
                        else {
                            respondsData.data = msg.data;
                        }
                        if (reqData.callback != null) {
                            reqData.callback.call(reqData.callbackThis, respondsData);
                        }
                        Frame.MessageCenter.event(frame.event.HttpChannelEvent.DATA_RESPONDS, respondsData);
                    }
                }
                if (msg.errno != 0) {
                    var errorTxt = "[HttpProtoError] errno=" + msg.errno + ", errmsg=" + msg.errmsg + " ";
                    var errorConfig = Game.config.msgProtoError.getConfig(msg.errno);
                    if (errorConfig) {
                        errorTxt = errorConfig.notice;
                        console.warn("[HttpProtoError] errno=" + msg.errno + ", errmsg=" + msg.errmsg + "  " + JSON.stringify(msg) + " " + errorTxt);
                    }
                    else {
                        console.warn("[HttpProtoError] errno=" + msg.errno + ", errmsg=" + msg.errmsg + "  " + JSON.stringify(msg) + " ");
                    }
                    if (this.isInitGameData) {
                        errorTxt = Games.TEXT.ErrorNameUsed;
                    }
                    Game.system.toastText(errorTxt);
                    respondsData.OK = false;
                    respondsData.errNo = msg.errno;
                    respondsData.errMsg = msg.errmsg;
                    if (reqData.callback)
                        reqData.callback.call(reqData.callbackThis, respondsData);
                    var arr = reqData.command.split("/");
                    var moduleName = arr[0];
                    var funName = arr[1];
                    var eventName_1 = moduleName + "_" + funName;
                    setTimeout(function () {
                        Game.protoFailEvent.dispatch(eventName_1);
                    }, 10);
                }
                Game.proto.__onMsgRespone(reqData.command);
                this.removeReqData(reqData);
                reqData.destroy();
                this._httpRequest["reqdata"] = null;
                this.pickAndSendReq();
                if (this.isInitGameData) {
                    this.isInitGameData = false;
                }
            };
            HttpComm.prototype.errorHandler = function (data) {
                GlobalModalWaiting.hide();
                console.warn("[HttpProtoError] errno=-100, errmsg=Http Request Fail " + data);
                var reqData = this._httpRequest["reqdata"];
                var isToastText = true;
                if (reqData && reqData.data) {
                    reqData.data["__isRespond"] = true;
                    if (reqData.data["__isTook"])
                        isToastText = false;
                }
                if (isToastText) {
                    Game.system.toastText(Games.TEXT.ErrorHttpSendFail);
                }
                var num = HttpComm.SendErrorNums.hasKey(reqData.command) ? HttpComm.SendErrorNums.getValue(reqData.command) + 1 : 1;
                HttpComm.SendErrorNums.add(reqData.command, num);
                if (reqData.callback != null) {
                    reqData.callback.call(reqData.callbackThis, { "errno": -100, "errmsg": "Http请求失败" });
                }
                Game.proto.__onMsgRespone(reqData.command);
                var arr = reqData.command.split("/");
                var moduleName = arr[0];
                var funName = arr[1];
                var eventName = moduleName + "_" + funName;
                setTimeout(function () {
                    Game.protoFailEvent.dispatch(eventName);
                }, 10);
                this.removeReqData(reqData);
                reqData.destroy();
                this._httpRequest["reqdata"] = null;
                this.pickAndSendReq();
            };
            HttpComm.prototype.removeReqData = function (reqData) {
                var idx = this._reqDataList.indexOf(reqData);
                if (idx >= 0) {
                    reqData.destroy();
                    this._reqDataList.splice(idx, 1);
                }
            };
            HttpComm.prototype.removeReqByID = function (reqIdx) {
                if (reqIdx === void 0) { reqIdx = 0; }
                var reqData;
                for (var i = this._reqDataList.length - 1; i >= 0; i--) {
                    reqData = this._reqDataList[i];
                    if (reqData.reqIdx == reqIdx)
                        this._reqDataList.splice(i, 1);
                }
            };
            HttpComm.prototype.removeReqByCallback = function (callback) {
                var reqData;
                for (var i = this._reqDataList.length - 1; i >= 0; i--) {
                    reqData = this._reqDataList[i];
                    if (reqData.callback == callback)
                        this._reqDataList.splice(i, 1);
                }
            };
            Object.defineProperty(HttpComm.prototype, "jwt", {
                get: function () {
                    return this._jwt;
                },
                enumerable: true,
                configurable: true
            });
            HttpComm.prototype.setJwt = function (value) {
                this._jwt = value;
            };
            HttpComm.LogRequest = true;
            HttpComm.LogRespond = true;
            HttpComm.HEADERS = ["content-type", "application/json", "accept-language", "zh-CN"];
            HttpComm.SendErrorNums = new Dictionary();
            return HttpComm;
        }());
        comm.HttpComm = HttpComm;
    })(comm = frame.comm || (frame.comm = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpComm.js.map