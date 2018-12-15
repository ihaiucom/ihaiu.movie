/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var SystemSettings;
    (function (SystemSettings) {
        var SelectLanguage = /** @class */ (function (_super) {
            __extends(SelectLanguage, _super);
            function SelectLanguage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SelectLanguage.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_languageList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 选中列表某一项
                this.m_languageList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                this.m_bg.onClick(this, this.onClickCloseBtn);
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            SelectLanguage.prototype.onClickCloseBtn = function () {
                this.visible = false;
                Game.moduleModel.setting.sCallLanguagePanel.remove(null, this);
            };
            SelectLanguage.prototype.onClickOkBtn = function () {
                var _this = this;
                if (this.selectItem && this.selectItem !== null && this.selectItem.id !== Game.moduleModel.setting.settingLanguageId) {
                    Game.system.confirmText(TEXT.LangSelectMsg, Games.TEXT.SwitchLanguage, this, function () {
                        console.log(Game.moduleModel.setting.settingLanguageId);
                        Game.moduleModel.setting.settingLanguageId = _this.selectItem.id;
                        window.location.reload();
                    });
                }
                this.onClickCloseBtn();
            };
            SelectLanguage.prototype.setData = function () {
                var list = Game.config.languageType.getConfigList();
                this.languageConfig = new Array();
                for (var i = 0; i < list.length; i++) {
                    if (list[i].languageswitch === 1) {
                        this.languageConfig.push(list[i]);
                    }
                }
                // this.languageConfig = Game.config.languageType.getConfigList();
                this.m_languageList.numItems = this.languageConfig.length;
                if (Game.moduleModel.setting.settingLanguageId === 0) {
                    Game.moduleModel.setting.settingLanguageId = Game.config.global.getConfig(GlobalKey.default_language).value;
                }
                for (var i = 0; i < this.languageConfig.length; i++) {
                    if (this.languageConfig[i].id === Game.moduleModel.setting.settingLanguageId) {
                        this.m_languageList.addSelection(i);
                        this.selectItem = this.languageConfig[i];
                        break;
                    }
                }
                this.visible = true;
            };
            SelectLanguage.prototype.initItem = function (index, obj) {
                var item = obj;
                item.setData(this.languageConfig[index]);
            };
            // 点击某个item
            SelectLanguage.prototype.onClickItem = function (obj) {
                var index = this.m_languageList.getChildIndex(obj);
                this.selectItem = this.languageConfig[index];
            };
            return SelectLanguage;
        }(SystemSettings.SelectLanguageStruct));
        SystemSettings.SelectLanguage = SelectLanguage;
    })(SystemSettings = fgui.SystemSettings || (fgui.SystemSettings = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SelectLanguage.js.map