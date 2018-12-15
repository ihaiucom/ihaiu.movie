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
        var WarXKHuifu = /** @class */ (function (_super) {
            __extends(WarXKHuifu, _super);
            function WarXKHuifu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarXKHuifu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickOkBtn);
            };
            WarXKHuifu.prototype.onClickOkBtn = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarXKHuifu.prototype.onWindowShow = function () {
                this.setData();
                Game.moduleModel.warData.sUpdateLicenceForTime.add(this.onUpdateTime, this);
            };
            WarXKHuifu.prototype.onWindowHide = function () {
                Game.moduleModel.warData.sUpdateLicenceForTime.remove(this.onUpdateTime, this);
            };
            WarXKHuifu.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                var itemId = Game.config.global.getConfig(GlobalKey.Movie_Licence_ID).value;
                this.m_icon.icon = Games.WarLoadPic.getItemIcon(itemId);
                var itemConf = Game.config.item.getConfig(itemId);
                this.m_bottomTip.text = format(Game.config.msg.getConfig(MsgKey.movie_licence_get_tips).notice, Game.config.global.getConfig(GlobalKey.Licence_Restore_Max).value, Game.moduleModel.warData.licenceData.dailyCount);
                this.m_title.text = format(Game.config.msg.getConfig(MsgKey.build_non_material).notice, itemConf.name);
                this.onUpdateTime();
            };
            WarXKHuifu.prototype.onUpdateTime = function () {
                if (Game.moduleModel.warData.preLicenceAddWithCD < 1) {
                    if (Game.moduleModel.warData.licenceSubTime > 0) {
                        this.m_time.text = TimeHelper.TimeFormat3(Game.moduleModel.warData.licenceSubTime);
                    }
                    else {
                        this.m_time.text = "0";
                    }
                }
                else {
                    this.onClickOkBtn();
                }
            };
            return WarXKHuifu;
        }(WarMovie.WarXKHuifuStruct));
        WarMovie.WarXKHuifu = WarXKHuifu;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarXKHuifu.js.map