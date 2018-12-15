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
    /**
     * 统计管理器
     */
    var Static = /** @class */ (function (_super) {
        __extends(Static, _super);
        function Static() {
            var _this = _super.call(this) || this;
            // 派发器列表
            _this.staticDispathList = [];
            // 派发器长度
            _this.listLength = 0;
            _this.isRegistationInf = false;
            _this.isActLoadStart = false;
            _this.isLoadStepOver = new Dictionary();
            _this.isLoadEnd = false;
            _this._userItemInfo = false;
            _this._userStatus = false;
            if (BrowserDetect.isCrosswalk) {
                _this.addDispatch(new Games.CrosswalkViewAppsFlyerStatic());
            }
            else if (BrowserDetect.isConch) {
                _this.addDispatch(new Games.AppsFlyerStatic());
            }
            if (BrowserDetect.isApp) {
                _this.addDispatch(new Games.ShinezoneStatic());
            }
            return _this;
        }
        Object.defineProperty(Static, "Instance", {
            get: function () {
                if (!Static._Instance) {
                    Static._Instance = new Static();
                }
                return Static._Instance;
            },
            enumerable: true,
            configurable: true
        });
        Static.prototype.addDispatch = function (staticDispatch) {
            this.staticDispathList.push(staticDispatch);
            this.listLength = this.staticDispathList.length;
        };
        Static.prototype.onRegistation = function (first) {
            if (!first && !this.isRegistationInf) {
                this.isRegistationInf = true;
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onRegistation(first);
                    }
                }
            }
        };
        Static.prototype.initNewDay = function () {
            this._userItemInfo = false;
        };
        Static.prototype.onInstall = function () {
            if (!Games.GameLocalStorage.Instance.hasItem("__Static_httpActInstall", true)) {
                Games.GameLocalStorage.Instance.setBoolean("__Static_httpActInstall", true, true);
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onInstall();
                    }
                }
            }
        };
        Static.prototype.onloadstart = function (isForceSend) {
            if (!this.isActLoadStart || isForceSend) {
                this.isActLoadStart = true;
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onloadstart(isForceSend);
                    }
                }
            }
        };
        Static.prototype.onLoadStep = function (loadStep) {
            if (!this.isLoadStepOver.hasKey(loadStep)) {
                this.isLoadStepOver.add(loadStep, true);
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onLoadStep(loadStep);
                    }
                }
            }
        };
        Static.prototype.onLoadEnd = function () {
            if (!this.isLoadEnd) {
                this.isLoadEnd = true;
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onLoadEnd();
                    }
                }
            }
        };
        Static.prototype.onPurchase = function (dollar, order_id, item, confId) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onPurchase(dollar, order_id, item, confId);
                }
            }
        };
        Static.prototype.onUserItemInfo = function () {
            if (!this._userItemInfo) {
                this._userItemInfo = true;
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onUserItemInfo();
                    }
                }
            }
        };
        Static.prototype.onUserStatus = function () {
            if (!this._userStatus) {
                this._userStatus = true;
                if (this.listLength > 0) {
                    for (var i = 0; i < this.listLength; i++) {
                        this.staticDispathList[i].onUserStatus();
                    }
                }
            }
        };
        Static.prototype.onUserorbit = function (tid, item, action) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onUserorbit(tid, item, action);
                }
            }
        };
        Static.prototype.onUpgrdae = function (tid, item, fromlevel, changelev, targetlev) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onUpgrdae(tid, item, fromlevel, changelev, targetlev);
                }
            }
        };
        Static.prototype.onResourceinput = function (item, type, grade, id) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onResourceinput(item, type, grade, id);
                }
            }
        };
        Static.prototype.onResourceoutput = function (item, type, id) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onResourceoutput(item, type, id);
                }
            }
        };
        Static.prototype.onUseGold = function (item, cost, market) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onUseGold(item, cost, market);
                }
            }
        };
        Static.prototype.onFinishTutorial = function (id) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onFinishTutorial(id);
                }
            }
        };
        Static.prototype.onLevelAchieved = function (lv) {
            if (this.listLength > 0) {
                for (var i = 0; i < this.listLength; i++) {
                    this.staticDispathList[i].onLevelAchieved(lv);
                }
            }
        };
        return Static;
    }(Games.StaticAbstractDispatch));
    Games.Static = Static;
})(Games || (Games = {}));
//# sourceMappingURL=Static.js.map