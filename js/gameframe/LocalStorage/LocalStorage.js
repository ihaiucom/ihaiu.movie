var Games;
(function (Games) {
    //======================
    // 游戏本地数据缓存
    //----------------------
    var LocalStorage = /** @class */ (function () {
        function LocalStorage() {
        }
        Object.defineProperty(LocalStorage.prototype, "username", {
            get: function () {
                if (!this._username) {
                    this._username = this.getString("username", true);
                }
                return this._username;
            },
            set: function (value) {
                this._username = value;
                this.setString("username", value, true);
                Game.sound.onLogin();
            },
            enumerable: true,
            configurable: true
        });
        LocalStorage.prototype.getKey = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            if (isGobal) {
                return key;
            }
            else {
                return this.username + "_" + key;
            }
        };
        // string
        LocalStorage.prototype.setItem = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal));
        };
        // string
        LocalStorage.prototype.setString = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getString = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val === undefined || val === null) {
                val = "";
            }
            return val;
        };
        // boolean
        LocalStorage.prototype.setBoolean = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value ? "true" : "false");
        };
        LocalStorage.prototype.getBoolean = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) == "true";
        };
        // int
        LocalStorage.prototype.setInt = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        };
        LocalStorage.prototype.getInt = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseInt(val);
            }
            return 0;
        };
        // float
        LocalStorage.prototype.setFloat = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setItem(this.getKey(key, isGobal), value.toString());
        };
        LocalStorage.prototype.getFloat = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            var val = Laya.LocalStorage.getItem(this.getKey(key, isGobal));
            if (val) {
                return parseFloat(val);
            }
            return 0;
        };
        LocalStorage.prototype.setJSON = function (key, value, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            Laya.LocalStorage.setJSON(this.getKey(key, isGobal), value);
        };
        LocalStorage.prototype.getJSON = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getJSON(this.getKey(key, isGobal));
        };
        LocalStorage.prototype.removeItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.removeItem(this.getKey(key, isGobal));
        };
        LocalStorage.prototype.hasItem = function (key, isGobal) {
            if (isGobal === void 0) { isGobal = false; }
            return Laya.LocalStorage.getItem(this.getKey(key, isGobal)) !== null;
        };
        LocalStorage.prototype.clear = function () {
            return Laya.LocalStorage.clear();
        };
        return LocalStorage;
    }());
    Games.LocalStorage = LocalStorage;
})(Games || (Games = {}));
//# sourceMappingURL=LocalStorage.js.map