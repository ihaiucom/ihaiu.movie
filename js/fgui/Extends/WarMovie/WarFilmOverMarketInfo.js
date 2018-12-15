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
        var WarFilmOverMarketInfo = /** @class */ (function (_super) {
            __extends(WarFilmOverMarketInfo, _super);
            function WarFilmOverMarketInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarFilmOverMarketInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 关闭按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
            };
            WarFilmOverMarketInfo.prototype.onClickOkBtn = function () {
                // this.moduleWindow.closeSelf();
                this.moduleMain.conent.startShowWaiting();
                // 进入结算界面
                this.moduleMain.conent.filmOverTip(EMovieState.Jiesuan);
            };
            WarFilmOverMarketInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmOverMarketInfo.prototype.onWindowHide = function () {
            };
            WarFilmOverMarketInfo.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_tip.text = format(TEXT.filmOverMarketTip1, Random.range(50, 500), Game.moduleModel.warData.refrushGuanzhongInf[0]);
                if (Game.moduleModel.warData.refrushGuanzhongInf[1] > 0) {
                    var types = Game.config.movieShootType.getConfigList();
                    var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                    for (var i = 0; i < types.length; i++) {
                        if (types[i].id == Game.moduleModel.warData.moveJieSuanData.type) {
                            this.m_tip.text += format(TEXT.filmOverMarketTip2, Game.moduleModel.warData.refrushGuanzhongInf[1], types[i].getName);
                            break;
                        }
                    }
                }
            };
            return WarFilmOverMarketInfo;
        }(WarMovie.WarFilmOverMarketInfoStruct));
        WarMovie.WarFilmOverMarketInfo = WarFilmOverMarketInfo;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmOverMarketInfo.js.map