/**
* 服务器返回的数据（Http请求）
*/
var frame;
(function (frame) {
    var comm;
    (function (comm) {
        var HttpRespondsData = /** @class */ (function () {
            function HttpRespondsData() {
                this.data = null;
                this.OK = false;
                this.reqData = null;
                this.errNo = 0;
                this.errMsg = "";
            }
            HttpRespondsData.prototype.destroy = function () {
                this.data = null;
                this.reqData = null;
                this.errMsg = "";
            };
            return HttpRespondsData;
        }());
        comm.HttpRespondsData = HttpRespondsData;
    })(comm = frame.comm || (frame.comm = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpRespondsData.js.map