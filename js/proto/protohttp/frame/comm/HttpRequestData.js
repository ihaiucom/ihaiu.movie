/**
* 客户端请求数据（Http请求）
*/
var frame;
(function (frame) {
    var comm;
    (function (comm) {
        var HttpRequestData = /** @class */ (function () {
            function HttpRequestData(command, data, callback, callbackThis) {
                this.command = command;
                this.data = data;
                this.callback = callback;
                this.callbackThis = callbackThis;
                HttpRequestData.maxReqIdx++;
                this.reqIdx = HttpRequestData.maxReqIdx;
            }
            Object.defineProperty(HttpRequestData.prototype, "protoClassType", {
                get: function () {
                    if (this.data) {
                        return this.data.constructor;
                    }
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            HttpRequestData.prototype.destroy = function () {
                this.command = null;
                this.data = null;
                this.callback = null;
                this.callbackThis = null;
            };
            HttpRequestData.maxReqIdx = 0;
            return HttpRequestData;
        }());
        comm.HttpRequestData = HttpRequestData;
    })(comm = frame.comm || (frame.comm = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpRequestData.js.map