var LangType = /** @class */ (function () {
    function LangType() {
    }
    LangType.toLang = function (httpLang) {
        httpLang = httpLang.replace("-", "_").toLowerCase();
        if (httpLang.indexOf("en") != -1)
            httpLang = LangType.en;
        if (window["Game"]) {
            if (!Game.config.languageType.getConfigByValue(httpLang)) {
                httpLang = LangType.en;
            }
        }
        else {
            var has = false;
            for (var v in LangType) {
                if (v == httpLang) {
                    has = true;
                    break;
                }
            }
            if (!has) {
                httpLang = LangType.en;
            }
        }
        return httpLang;
    };
    LangType.zh_cn = "zh_cn";
    LangType.zh_tw = "zh_tw";
    LangType.en = "en";
    return LangType;
}());
var LangConfigLoader = configs.LangConfigLoader;
var LangConfigReader = configs.LangConfigReader;
var LangConfig = configs.LangConfig;
/** 多语言配置管理器 */
var LangManager = /** @class */ (function () {
    function LangManager() {
        this._lang = null;
        this.langListDict = new Dictionary();
    }
    Object.defineProperty(LangManager, "Instance", {
        get: function () {
            if (!LangManager._Instance) {
                LangManager._Instance = new LangManager();
            }
            return LangManager._Instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "httpLang", {
        get: function () {
            if (!this._httpLang) {
                this.httpLang = this.lang;
            }
            return this._httpLang;
        },
        set: function (value) {
            value = value.replace("_", "-");
            if (value.indexOf("-")) {
                var arr = value.split("-");
                for (var i = 1; i < arr.length; i++) {
                    arr[i] = arr[i].toUpperCase();
                }
                value = arr.join("-");
            }
            this._httpLang = value;
            if (window["frame"] && window["frame"]["comm"] && window["frame"]["comm"]["HttpComm"])
                frame.comm.HttpComm.SetHeader("accept-language", value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "lang", {
        get: function () {
            if (!this._lang) {
                if (Games.GameLocalStorage.Instance.hasItem("_lang", true)) {
                    this._lang = Games.GameLocalStorage.Instance.getString("_lang", true);
                }
                else {
                    // let lang = navigator.language;
                    // if (!lang)
                    // {
                    // 	lang = navigator["browserLanguage"];
                    // }
                    // lang = LangType.toLang(lang);
                    // this._lang = lang;
                    this._lang = LangType.en;
                }
                this.httpLang = this._lang;
            }
            return this._lang;
        },
        set: function (value) {
            this._lang = value;
            this.httpLang = value;
            Games.GameLocalStorage.Instance.setString("_lang", value, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LangManager.prototype, "current", {
        get: function () {
            if (this._current) {
                return this._current;
            }
            if (!this.langListDict.hasKey(this.lang)) {
                var langList = new configs.LangConfigLoader();
                langList.lang = this.lang;
                this.langListDict.add(langList.lang, langList);
                this._current = langList;
            }
            return this.langListDict.getValue(this.lang);
        },
        enumerable: true,
        configurable: true
    });
    LangManager.prototype.getValue = function (tableName, id, fieldName) {
        var langReader = this.current[tableName];
        if (langReader) {
            var config = langReader.getConfig(id);
            if (config) {
                return config.dict.getValue(fieldName);
            }
        }
        return null;
    };
    return LangManager;
}());
//# sourceMappingURL=LangManager.js.map