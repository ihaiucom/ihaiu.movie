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
        var WarXukezhengOver = /** @class */ (function (_super) {
            __extends(WarXukezhengOver, _super);
            function WarXukezhengOver() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarXukezhengOver.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.SysTipTitle;
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarXukezhengOver.prototype.onClickOkBtn = function () {
                this.moduleWindow.menuBack();
            };
            WarXukezhengOver.prototype.onWindowShow = function () {
                this.setData();
            };
            WarXukezhengOver.prototype.onWindowHide = function () {
            };
            WarXukezhengOver.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_icon.icon = Games.WarLoadPic.getItemIcon(4);
                this.m_getTip.text = format(Game.config.msg.getConfig(MsgKey.movie_licence_finish_tips).notice, Game.config.global.getConfig(GlobalKey.Licence_Restore_Time).value);
            };
            return WarXukezhengOver;
        }(WarMovie.WarXukezhengOverStruct));
        WarMovie.WarXukezhengOver = WarXukezhengOver;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarXukezhengOver.js.map