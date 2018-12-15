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
     * 系统设置 数据模型
     */
    var SystemSettingModel = /** @class */ (function (_super) {
        __extends(SystemSettingModel, _super);
        function SystemSettingModel() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sCallLanguagePanel = new Signal();
            _this.sCallGiftPanel = new Signal();
            // 获取礼包成功
            _this.sCallGiftGetOk = new Signal();
            /**
             * 设置保存的临时数据
             */
            _this.settingData = new Dictionary();
            return _this;
        }
        Object.defineProperty(SystemSettingModel.prototype, "settingLanguageId", {
            // 当前语言
            get: function () {
                return Game.config.languageType.getConfigByValue(LangManager.Instance.lang).id;
            },
            set: function (id) {
                var lan = Game.config.languageType.getConfig(id).value;
                if (lan != LangManager.Instance.lang) {
                    LangManager.Instance.lang = lan;
                    // Game.system.confirmText(TEXT.LangSelectMsg, null, this, this.onClickResetYesButton);
                }
            },
            enumerable: true,
            configurable: true
        });
        SystemSettingModel.prototype.onClickResetYesButton = function () {
            window.location.reload();
        };
        SystemSettingModel.prototype.exchange = function (id) {
            Game.protosender.Gift.Exchange(id);
        };
        SystemSettingModel.prototype.handlerExchange = function (msg) {
            this.sCallGiftGetOk.dispatch();
        };
        SystemSettingModel.prototype.getBoolean = function (key) {
            switch (key) {
                case "music_switch":
                    return !Game.sound.musicMuted;
                case "soundeffect_switch":
                    return !Game.sound.soundMuted;
            }
            if (!this.settingData.hasKey(key)) {
                if (Game.localStorage.hasItem(key)) {
                    var value = Game.localStorage.getBoolean(key);
                    this.setBoolean(key, value);
                }
                else {
                    var value = Game.config.settingDefault.getConfig(key).OnOff;
                    this.setBoolean(key, value);
                }
            }
            return this.settingData.getValue(key);
        };
        SystemSettingModel.prototype.setBoolean = function (key, value) {
            this.settingData.add(key, value);
            Game.localStorage.setBoolean(key, value);
            switch (key) {
                case "music_switch":
                    Game.sound.musicMuted = !value;
                    break;
                case "soundeffect_switch":
                    Game.sound.soundMuted = !value;
                    break;
            }
        };
        return SystemSettingModel;
    }(Games.MModel));
    Games.SystemSettingModel = SystemSettingModel;
})(Games || (Games = {}));
//# sourceMappingURL=SystemSettingModel.js.map