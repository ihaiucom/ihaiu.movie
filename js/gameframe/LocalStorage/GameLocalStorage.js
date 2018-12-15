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
    //======================
    // 游戏本地数据缓存
    //----------------------
    var GameLocalStorage = /** @class */ (function (_super) {
        __extends(GameLocalStorage, _super);
        function GameLocalStorage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(GameLocalStorage, "Instance", {
            get: function () {
                if (!GameLocalStorage._Instance) {
                    GameLocalStorage._Instance = new GameLocalStorage();
                }
                return GameLocalStorage._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "gmX", {
            get: function () {
                if (this._gmX === undefined) {
                    this._gmX = this.getFloat("gmX", true);
                }
                return this._gmX;
            },
            set: function (value) {
                this._gmX = value;
                this.setFloat("gmX", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "gmY", {
            get: function () {
                if (this._gmY === undefined) {
                    if (this.hasItem("gmY", true)) {
                        this._gmY = this.getFloat("gmY", true);
                    }
                    else {
                        this._gmY = 100;
                    }
                }
                return this._gmY;
            },
            set: function (value) {
                this._gmY = value;
                this.setFloat("gmY", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "fontSetting", {
            get: function () {
                if (!this._fontSetting) {
                    this._fontSetting = this.getItem("fontSetting", true);
                }
                return this._fontSetting;
            },
            set: function (value) {
                this._fontSetting = value;
                this.setItem("fontSetting", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "serverName", {
            get: function () {
                if (!this._serverName) {
                    this._serverName = this.getItem("serverName", true);
                }
                return this._serverName;
            },
            set: function (value) {
                this._serverName = value;
                this.setItem("serverName", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "useraccountList", {
            get: function () {
                if (!this._useraccountList) {
                    this._useraccountList = this.getJSON("_useraccountList", true);
                }
                if (!this._useraccountList) {
                    this._useraccountList = [];
                }
                return this._useraccountList;
            },
            set: function (value) {
                this._useraccountList = value;
                this.setJSON("_useraccountList", value, true);
            },
            enumerable: true,
            configurable: true
        });
        GameLocalStorage.prototype.addUseraccount = function (username, password) {
            var has = false;
            var list = this.useraccountList ? this.useraccountList : [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].username == username) {
                    list[i].password = password;
                    list[i].lasttime = Game.time.localTime;
                    has = true;
                }
            }
            if (!has) {
                list.push({ username: username, password: password, lasttime: Game.time.localTime });
            }
            list.sort(function (a, b) { return b.lasttime - a.lasttime; });
            this.useraccountList = list;
        };
        Object.defineProperty(GameLocalStorage.prototype, "password", {
            get: function () {
                if (!this._password) {
                    this._password = this.getItem("password");
                    if (this._password == null)
                        this._password = "";
                }
                return this._password;
            },
            set: function (value) {
                this._password = value;
                this.setItem("password", value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "deviceId", {
            get: function () {
                if (!this._deviceId) {
                    if (BrowserDetect.isApp) {
                        this._deviceId = gameApplication.IDFA;
                    }
                    if (!this._deviceId || this._deviceId == "undefined" || this._deviceId == undefined) {
                        this._deviceId = this.getString("_deviceId", true);
                        if (!this._deviceId) {
                            var timestamp = new Date().getTime();
                            var random = Math.random();
                            this._deviceId = timestamp.toString() + "." + random.toString();
                        }
                    }
                }
                return this._deviceId;
            },
            set: function (value) {
                this._deviceId = value;
                this.setString("_deviceId", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "guestusername", {
            get: function () {
                if (!this._guestusername) {
                    this._guestusername = this.getString("guest", true);
                }
                return this._guestusername;
            },
            set: function (value) {
                this._guestusername = value;
                this.setString("guest", value, true);
                Game.sound.onLogin();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isGuest", {
            get: function () {
                if (this._isGuest === undefined) {
                    this._isGuest = this.getBoolean("isGuest", true);
                }
                return this._isGuest;
            },
            set: function (value) {
                this._isGuest = value;
                this.setBoolean("isGuest", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isGameGuest", {
            get: function () {
                if (this._isGameGuest === undefined) {
                    this._isGameGuest = this.getBoolean("isGameGuest", true);
                }
                return this._isGameGuest;
            },
            set: function (value) {
                this._isGameGuest = value;
                this.setBoolean("isGameGuest", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "isNoticTodayNoOpen", {
            get: function () {
                if (this._isNoticTodayNoOpen === undefined) {
                    this._isNoticTodayNoOpen = this.getBoolean("isNoticTodayNoOpen", true);
                }
                return this._isNoticTodayNoOpen;
            },
            set: function (value) {
                this._isNoticTodayNoOpen = value;
                this.setBoolean("isNoticTodayNoOpen", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "lastOpenShopSpecialTime", {
            get: function () {
                if (this._lastOpenShopSpecialTime === undefined) {
                    this._lastOpenShopSpecialTime = this.getFloat("lastOpenShopSpecialTime", true);
                }
                return this._lastOpenShopSpecialTime;
            },
            set: function (value) {
                this._lastOpenShopSpecialTime = value;
                this.setFloat("lastOpenShopSpecialTime", value, true);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameLocalStorage.prototype, "lastOpenShopSingleTime", {
            get: function () {
                if (this._lastOpenShopSingleTime === undefined) {
                    this._lastOpenShopSingleTime = this.getFloat("lastOpenShopSingleTime", true);
                }
                return this._lastOpenShopSingleTime;
            },
            set: function (value) {
                this._lastOpenShopSingleTime = value;
                this.setFloat("lastOpenShopSingleTime", value, true);
            },
            enumerable: true,
            configurable: true
        });
        return GameLocalStorage;
    }(Games.LocalStorage));
    Games.GameLocalStorage = GameLocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=GameLocalStorage.js.map