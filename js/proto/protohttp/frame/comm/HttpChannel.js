/*
* Http通道
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpComm = frame.comm.HttpComm;
// import ProtoSys = Proto.API.System;
var frame;
(function (frame) {
    var comm;
    (function (comm) {
        var HttpChannel = /** @class */ (function (_super) {
            __extends(HttpChannel, _super);
            function HttpChannel(host, port, useHttps) {
                if (useHttps === void 0) { useHttps = false; }
                var _this = _super.call(this) || this;
                _this._account = "";
                _this._token = "";
                _this._userId = 0;
                _this._http = new comm.HttpComm(host, port, useHttps);
                return _this;
            }
            HttpChannel.prototype.destroy = function () {
                this._http.destroy();
                this._http = null;
            };
            HttpChannel.prototype.login = function (account) {
                this._account = account;
                // var p: ProtoSys.loginRequest = new ProtoSys.loginRequest();
                // p.account = this._account;
                // p.token = this._token;
                // this._http.addReq("account/login", p, this.loginRespondHandle, this);
            };
            HttpChannel.prototype.loginRespondHandle = function (rsp) {
                if (rsp && rsp.OK) {
                    // var p: ProtoSys.loginResponse = rsp.data as ProtoSys.loginResponse;
                    // this._userId = p.userId;
                    // this._http.setJwt(p.jwt);
                }
                this.event(frame.event.HttpChannelEvent.LOGIN_COMPLETE, rsp);
            };
            Object.defineProperty(HttpChannel.prototype, "http", {
                get: function () {
                    return this._http;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HttpChannel.prototype, "account", {
                get: function () {
                    return this._account;
                },
                set: function (value) {
                    this._account = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HttpChannel.prototype, "token", {
                get: function () {
                    return this._token;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HttpChannel.prototype, "userId", {
                get: function () {
                    return this._userId;
                },
                set: function (value) {
                    this._userId = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(HttpChannel.prototype, "jwt", {
                set: function (jwt) {
                    this.http.setJwt(jwt);
                },
                enumerable: true,
                configurable: true
            });
            return HttpChannel;
        }(laya.events.EventDispatcher));
        comm.HttpChannel = HttpChannel;
    })(comm = frame.comm || (frame.comm = {}));
})(frame || (frame = {}));
//# sourceMappingURL=HttpChannel.js.map