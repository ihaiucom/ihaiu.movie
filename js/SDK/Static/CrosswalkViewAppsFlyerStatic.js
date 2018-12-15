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
    var CrosswalkViewAppsFlyerStatic = /** @class */ (function (_super) {
        __extends(CrosswalkViewAppsFlyerStatic, _super);
        function CrosswalkViewAppsFlyerStatic() {
            var _this = _super.call(this) || this;
            _this.jsClassName = "CrosswalkViewAppsFlyerStatic";
            Games.GameBridgerManager.Instance.registerHandler(_this);
            return _this;
        }
        CrosswalkViewAppsFlyerStatic.prototype.onRegistation = function (first) {
            this.callNative("onAppsFlyerRegistation");
        };
        CrosswalkViewAppsFlyerStatic.prototype.initNewDay = function () { };
        CrosswalkViewAppsFlyerStatic.prototype.onInstall = function () { };
        CrosswalkViewAppsFlyerStatic.prototype.onloadstart = function (isForceSend) {
            this.callNative("onAppsFlyerLogin");
        };
        CrosswalkViewAppsFlyerStatic.prototype.onLoadStep = function (loadStep) { };
        CrosswalkViewAppsFlyerStatic.prototype.onLoadEnd = function () { };
        CrosswalkViewAppsFlyerStatic.prototype.onPurchase = function (dollar, order_id, item, confId) {
            this.callNative("onAppsFlyerPurchase", { appContentID: confId, costVal: dollar });
        };
        CrosswalkViewAppsFlyerStatic.prototype.onUserItemInfo = function () { };
        CrosswalkViewAppsFlyerStatic.prototype.onUserStatus = function () { };
        CrosswalkViewAppsFlyerStatic.prototype.onUserorbit = function (tid, item, action) { };
        CrosswalkViewAppsFlyerStatic.prototype.onUpgrdae = function (tid, item, fromlevel, changelev, targetlev) { };
        CrosswalkViewAppsFlyerStatic.prototype.onResourceinput = function (item, type, grade, id) { };
        CrosswalkViewAppsFlyerStatic.prototype.onResourceoutput = function (item, type, id) { };
        CrosswalkViewAppsFlyerStatic.prototype.onUseGold = function (item, cost, market) { };
        CrosswalkViewAppsFlyerStatic.prototype.onFinishTutorial = function (id) {
            if (id === GlobalConfig.getValue(GlobalKey.maintask_complete_end)) {
                this.callNative("onAppsFlyerTutorial");
            }
        };
        CrosswalkViewAppsFlyerStatic.prototype.onLevelAchieved = function (lv) {
            this.callNative("onAppsFlyerLevelAchieved", { level: lv });
        };
        return CrosswalkViewAppsFlyerStatic;
    }(Games.GameBridger));
    Games.CrosswalkViewAppsFlyerStatic = CrosswalkViewAppsFlyerStatic;
})(Games || (Games = {}));
//# sourceMappingURL=CrosswalkViewAppsFlyerStatic.js.map