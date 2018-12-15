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
    var AppsFlyerStatic = /** @class */ (function (_super) {
        __extends(AppsFlyerStatic, _super);
        function AppsFlyerStatic() {
            var _this = _super.call(this) || this;
            _this.isIos = false;
            _this.isAndroid = false;
            if (Games.StaticAttributes.Instance.enableAppflyer) {
                //a、创建Test类
                _this.OcNativeClass = Laya.PlatformClass.createClass("OcNativeClass");
                _this.OcNativeObj = _this.OcNativeClass.newObject(); // 不支持构造函数
                if (_this.OcNativeClass && _this.OcNativeObj) {
                    _this.isIos = true;
                }
            }
            if (Games.StaticAttributes.Instance.enableAppflyerAndorid) {
                //a、创建Test类
                _this.OcNativeClass = Laya.PlatformClass.createClass("com.shinezone.movie.OcNativeClass");
                _this.OcNativeObj = _this.OcNativeClass.newObject(); // 不支持构造函数
                if (_this.OcNativeClass && _this.OcNativeObj) {
                    _this.isAndroid = true;
                }
            }
            return _this;
        }
        AppsFlyerStatic.prototype.onRegistation = function (first) {
            if (this.isAndroid) {
                this.OcNativeObj.callWithBack(null, "onAppsFlyerRegistation");
            }
            else if (this.isIos) {
                this.OcNativeObj.call("onAppsFlyerRegistation:", 1);
            }
        };
        // public initNewDay() { }
        // public onInstall() { }
        AppsFlyerStatic.prototype.onloadstart = function (isForceSend) {
            if (this.isAndroid) {
                this.OcNativeObj.callWithBack(null, "onAppsFlyerLogin");
            }
            else if (this.isIos) {
                this.OcNativeObj.call("onAppsFlyerLogin:", 1);
            }
        };
        // onLoadStep(loadStep: string): void { }
        // onLoadEnd(): void { }
        AppsFlyerStatic.prototype.onPurchase = function (dollar, order_id, item, confId) {
            if (this.isAndroid) {
                this.OcNativeObj.callWithBack(null, "onAppsFlyerPurchase", confId, dollar);
            }
            else if (this.isIos) {
                this.OcNativeObj.call("onAppsFlyerPurchase:and:", confId, dollar);
            }
        };
        // onUserItemInfo(): void { }
        // onUserStatus(): void { }
        // onUserorbit(tid: string, item: string, action: string): void { }
        // onUpgrdae(tid: string, item: string, fromlevel: string, changelev: string, targetlev: string) { }
        // onResourceinput(item: DTItemNum[], type: string, grade: number, id: number) { }
        // onResourceoutput(item: DTItemNum[], type: string, id: string) { }
        // onUseGold(item: string, cost: number, market: string) { }
        AppsFlyerStatic.prototype.onFinishTutorial = function (id) {
            if (id === GlobalConfig.getValue(GlobalKey.maintask_complete_end)) {
                if (this.isAndroid) {
                    this.OcNativeObj.callWithBack(null, "onAppsFlyerTutorial");
                }
                else if (this.isIos) {
                    this.OcNativeObj.call("onAppsFlyerTutorial:");
                }
            }
        };
        AppsFlyerStatic.prototype.onLevelAchieved = function (lv) {
            if (this.isAndroid) {
                this.OcNativeObj.callWithBack(null, "onAppsFlyerLevelAchieved", lv);
            }
            else if (this.isIos) {
                this.OcNativeObj.call("onAppsFlyerLevelAchieved:", lv);
            }
        };
        return AppsFlyerStatic;
    }(Games.StaticAbstractDispatch));
    Games.AppsFlyerStatic = AppsFlyerStatic;
})(Games || (Games = {}));
//# sourceMappingURL=AppsFlyerStatic.js.map