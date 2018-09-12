/**
* HTTP配置数据
*/
var frame;
(function (frame) {
    var comm;
    (function (comm) {
        var HttpConfig = /** @class */ (function () {
            function HttpConfig(host, port, useHttps) {
                if (useHttps === void 0) { useHttps = false; }
                this._host = "";
                this._port = 80;
                this._useHttps = false;
                this._host = host;
                this._port = port;
                this._useHttps = useHttps;
            }
            HttpConfig.prototype.destroy = function () {
                this._host = null;
            };
            Object.defineProperty(HttpConfig.prototype, "hostHead", {
                get: function () {
                    var host = this._host + ":" + this._port;
                    if (this._useHttps) {
                        host = "https://" + host;
                    }
                    else {
                        host = "http://" + host;
                    }
                    return host;
                },
                enumerable: true,
                configurable: true
            });
            HttpConfig.prototype.getFullRequestUrl = function (command) {
                command = command.replace("//", "/");
                if (command.charAt(0) != "/")
                    command = "/" + command;
                var url = this.hostHead + command;
                return url;
            };
            HttpConfig.prototype.getFullRequestData = function (jwt, data) {
                var fullData = { "jwt": jwt, "data": data };
                return fullData;
            };
            return HttpConfig;
        }());
        comm.HttpConfig = HttpConfig;
    })(comm = frame.comm || (frame.comm = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpConfig.js.map