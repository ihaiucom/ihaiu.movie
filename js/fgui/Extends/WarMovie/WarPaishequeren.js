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
    var WarMovie;
    (function (WarMovie) {
        var WarPaishequeren = /** @class */ (function (_super) {
            __extends(WarPaishequeren, _super);
            function WarPaishequeren() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarPaishequeren.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            // 点击任意位置关闭 -- 排除主窗口
            WarPaishequeren.prototype.onClickClose = function () {
                this.moduleWindow.menuBack();
            };
            // 确定拍摄
            WarPaishequeren.prototype.onClickOkBtn = function () {
                var _this = this;
                this.moduleWindow.closeSelf();
                // 回到状态判断
                Game.moduleModel.warData.MakeFilm(function () {
                    _this.moduleMain.conent.subWindowToMain();
                });
            };
            WarPaishequeren.prototype.onWindowShow = function () {
                this.setData();
            };
            WarPaishequeren.prototype.onWindowHide = function () {
            };
            WarPaishequeren.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_tip.text = Game.config.msg.getConfig(MsgKey.movie_confirm).notice;
                this.m_icon.icon = Games.WarLoadPic.getItemIcon(EItemId.licence);
            };
            return WarPaishequeren;
        }(WarMovie.WarPaishequerenStruct));
        WarMovie.WarPaishequeren = WarPaishequeren;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarPaishequeren.js.map