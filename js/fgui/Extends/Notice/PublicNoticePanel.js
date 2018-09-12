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
    var Notice;
    (function (Notice) {
        var PublicNoticePanel = /** @class */ (function (_super) {
            __extends(PublicNoticePanel, _super);
            function PublicNoticePanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PublicNoticePanel.prototype.onWindowInited = function () {
                this.m_checkBox.onClick(this, this.onClickCheckBox);
                this.m_btnClose.onClick(this.moduleWindow, this.moduleWindow.menuClose);
            };
            PublicNoticePanel.prototype.onClickCheckBox = function () {
                Game.localStorage.isNoticTodayNoOpen = this.m_checkBox.selected;
            };
            PublicNoticePanel.prototype.onWindowShow = function () {
                this.m_checkBox.selected = Game.localStorage.isNoticTodayNoOpen;
                var data = Game.channel.serverNoticData;
                if (data) {
                    this.m_labContent.text = data.content;
                }
            };
            PublicNoticePanel.prototype.onWindowHide = function () {
            };
            return PublicNoticePanel;
        }(Notice.PublicNoticePanelStruct));
        Notice.PublicNoticePanel = PublicNoticePanel;
    })(Notice = fgui.Notice || (fgui.Notice = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PublicNoticePanel.js.map