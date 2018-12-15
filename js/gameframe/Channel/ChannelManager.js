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
var Games;
(function (Games) {
    var Handler = laya.utils.Handler;
    var ServerStateType;
    (function (ServerStateType) {
        ServerStateType[ServerStateType["Close"] = 0] = "Close";
        ServerStateType[ServerStateType["Noraml"] = 1] = "Noraml";
    })(ServerStateType = Games.ServerStateType || (Games.ServerStateType = {}));
    var ServerNoticType;
    (function (ServerNoticType) {
        ServerNoticType[ServerNoticType["Normal"] = 1] = "Normal";
        ServerNoticType[ServerNoticType["StopServer"] = 2] = "StopServer";
    })(ServerNoticType || (ServerNoticType = {}));
    var ChannelManager = /** @class */ (function (_super) {
        __extends(ChannelManager, _super);
        function ChannelManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.serverListUrl = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
            // 程序内置默认		
            _this.defaultServerItem = { name: "QA", ip: "172.81.240.224", port: 80, state: ServerStateType.Noraml, https: false, test: true };
            return _this;
        }
        Object.defineProperty(ChannelManager.prototype, "noticUrl", {
            // 通知Url		
            get: function () {
                if (this.serverItem) {
                    if (this.serverItem.noticUrl) {
                        return this.serverItem.noticUrl;
                    }
                    if (this.serverItem.https) {
                        return "https://" + this.serverItem.ip + "/notice.html";
                    }
                    else {
                        return "http://" + this.serverItem.ip + "/notice.html";
                    }
                }
                return "http://172.16.0.93/notice.html";
            },
            enumerable: true,
            configurable: true
        });
        ChannelManager.prototype.getServerItem = function (serverName) {
            if (!serverName)
                return null;
            if (this.serverList) {
                for (var i = 0; i < this.serverList.list.length; i++) {
                    if (this.serverList.list[i].name == serverName) {
                        return this.serverList.list[i];
                    }
                }
            }
            return null;
        };
        Object.defineProperty(ChannelManager.prototype, "serverName", {
            get: function () {
                if (!this._serverName) {
                    if (Games.GameLocalStorage.Instance.serverName) {
                        var item = this.getServerItem(Games.GameLocalStorage.Instance.serverName);
                        if (item) {
                            this._serverName = Games.GameLocalStorage.Instance.serverName;
                        }
                    }
                    if (!this._serverName && this.serverList) {
                        var item = this.getServerItem(this.serverList.defaultServer);
                        if (item) {
                            this._serverName = this.serverList.defaultServer;
                        }
                        else if (this.serverList.list.length > 0) {
                            this._serverName = this.serverList.list[0].name;
                        }
                    }
                }
                return this._serverName;
            },
            set: function (name) {
                this._serverName = name;
                Games.GameLocalStorage.Instance.serverName = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChannelManager.prototype, "serverIndex", {
            //======================
            // 选择的服务器的索引
            //----------------------
            get: function () {
                if (this.serverList) {
                    for (var i = 0; i < this.serverList.list.length; i++) {
                        if (this.serverList.list[i].name == this.serverName) {
                            return i;
                        }
                    }
                }
                return -1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ChannelManager.prototype, "serverItem", {
            //======================
            // 选择的服务器
            //----------------------
            get: function () {
                var item = this.getServerItem(this.serverName);
                if (item) {
                    return item;
                }
                return this.defaultServerItem;
            },
            enumerable: true,
            configurable: true
        });
        // 请求服务器列表
        ChannelManager.prototype.requestServerList = function (url, caller, onSucess, onFail) {
            function callSuccess() {
                if (onSucess) {
                    if (caller) {
                        onSucess.apply(caller);
                    }
                    else {
                        onSucess();
                    }
                }
            }
            function callFail() {
                if (onFail) {
                    if (caller) {
                        onFail.apply(caller);
                    }
                    else {
                        onFail();
                    }
                }
            }
            if (this.serverList) {
                callSuccess();
                return;
            }
            if (!url) {
                url = BrowserDetect.urlServerList;
            }
            console.log("serverListUrl=" + url);
            // alert("确定是热更新了 serverListUrl=" + url);
            this.serverListUrl = url;
            Laya.loader.load(url, Handler.create(this, function () {
                var resust = Laya.loader.getRes(url);
                if (resust) {
                    this.serverList = isString(resust) ? JSON.parse(resust) : resust;
                    console.log("获取服务器列表：");
                    console.log(resust);
                    console.log(JSON.stringify(this.serverList));
                    callSuccess();
                }
                else {
                    console.log("ChannelManager LoadFail: ServerList.json ");
                    callFail();
                }
            }));
        };
        Object.defineProperty(ChannelManager.prototype, "isTodayOpenedNotice", {
            // 是否需要打开通知		
            get: function () {
                if (Games.GameLocalStorage.Instance.isNoticTodayNoOpen) {
                    if (Games.GameLocalStorage.Instance.hasItem("lastOpenNoticeTime", true)) {
                        var lastOpenTime = Games.GameLocalStorage.Instance.getInt("lastOpenNoticeTime", true);
                        var isToday = Game.time.isLocalToday(lastOpenTime);
                        return !isToday;
                    }
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        // 请求通知
        ChannelManager.prototype.requestNotice = function () {
            console.log(this.noticUrl);
            Laya.loader.load(this.noticUrl, Handler.create(this, this.onResopneNotic));
            // Laya.loader.load("http://blog.ihaiu.com/params.json", Handler.create(this, () =>
            // {
            // 	let result = Laya.loader.getRes("http://blog.ihaiu.com/params.json");
            // 	if (!isString(result))
            // 	{
            // 		result = JSON.stringify(result);
            // 	}
            // 	console.log("加载http://blog.ihaiu.com/params.json: " + result);
            // }));
        };
        ChannelManager.prototype.onResopneNotic = function () {
            var resust = Laya.loader.getRes(this.noticUrl);
            console.log(resust);
            if (resust) {
                try {
                    this.serverNoticData = isString(resust) ? JSON.parse(resust) : resust;
                    if (!this.serverNoticData || this.serverNoticData.visible == false) {
                        return;
                    }
                    if (this.serverNoticData.type == ServerNoticType.Normal) {
                        if (this.isTodayOpenedNotice) {
                            Game.menu.open(Games.MenuId.Notice);
                            Games.GameLocalStorage.Instance.setInt("lastOpenNoticeTime", Game.time.localTime, true);
                        }
                    }
                    else {
                        Game.system.alrtTextFull(this.serverNoticData.content, this.serverNoticData.title, null, function () {
                            // TODO 退出程序
                            if (window["conch"] && window["conch"]["exit"])
                                window["conch"].exit();
                        });
                    }
                }
                catch (error) {
                    console.warn("通知有问题");
                }
            }
        };
        return ChannelManager;
    }(frame.base.BaseSingleton));
    Games.ChannelManager = ChannelManager;
})(Games || (Games = {}));
//# sourceMappingURL=ChannelManager.js.map