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
    var Street;
    (function (Street) {
        var StreetLvUpInfoPanel = /** @class */ (function (_super) {
            __extends(StreetLvUpInfoPanel, _super);
            function StreetLvUpInfoPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetLvUpInfoPanel.prototype.onWindowInited = function () {
                this.m_btnClose.onClick(this, this.OnCloseClick);
                this.m_btnConfirm.onClick(this, this.OnBtnConfirmClick);
            };
            StreetLvUpInfoPanel.prototype.onWindowOpen = function (arg) {
                this.streetData = arg;
                this.UpdateView();
            };
            StreetLvUpInfoPanel.prototype.onWindowShow = function () {
            };
            StreetLvUpInfoPanel.prototype.onWindowHide = function () {
            };
            StreetLvUpInfoPanel.prototype.UpdateView = function () {
                this.m_txtTip1.text = Game.config.msg.getTxtFormat(MsgKey.block_upgrade_requirement, this.streetData.Cfg.name);
                this.m_txtTip2.text = Game.config.msg.getTxt(MsgKey.trophy_tips);
                this.m_txtTip3.text = Game.config.msg.getTxt(MsgKey.trophy_tips2);
                this.m_progress.value = Game.moduleModel.street.cupNum;
                this.m_progress.max = Game.moduleModel.street.GetMaxCup(this.streetData.id);
                this.m_title.text = this.streetData.Name;
            };
            StreetLvUpInfoPanel.prototype.OnCloseClick = function () {
                this.moduleWindow.closeSelf();
            };
            StreetLvUpInfoPanel.prototype.OnBtnConfirmClick = function () {
                this.moduleWindow.closeSelf();
            };
            return StreetLvUpInfoPanel;
        }(Street.StreetLvUpInfoPanelStruct));
        Street.StreetLvUpInfoPanel = StreetLvUpInfoPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetLvUpInfoPanel.js.map