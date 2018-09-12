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
    //======================
    // 电影选择窗口，目前作为战斗主窗口使用
    //----------------------
    var WarWindow = /** @class */ (function (_super) {
        __extends(WarWindow, _super);
        function WarWindow() {
            var _this = _super.call(this) || this;
            _this.warFilmSelectingSubwindow = new Games.WarFilmSelectingSubwindow(Games.WarSubwindowType.FilmSelect, _this);
            _this.filmInfoSubwindow = new Games.FilmInfoSubwindow(Games.WarSubwindowType.FilmInfo, _this);
            _this.currentMarketInfoSubwindow = new Games.CurrentMarketInfoSubwindow(Games.WarSubwindowType.CurrentMarketInf, _this);
            _this.selectyirenSubwindow = new Games.SelectyirenSubwindow(Games.WarSubwindowType.SelectYiren, _this);
            _this.costViewSubwindow = new Games.WarCostViewSubwindow(Games.WarSubwindowType.CostView, _this);
            _this.warFilmYRShowSubwindow = new Games.WarFilmYRShowSubwindow(Games.WarSubwindowType.YRShowView, _this);
            _this.warYRCompatibilitySubwindow = new Games.WarYRCompatibilitySubwindow(Games.WarSubwindowType.Compatibility, _this);
            _this.warSelectFilmTypeSubwindow = new Games.WarSelectFilmTypeSubwindow(Games.WarSubwindowType.SelectFilmType, _this);
            _this.warFilmingSubwindow = new Games.WarFilmingSubwindow(Games.WarSubwindowType.Filming, _this);
            _this.warSelectNoticeSubwindow = new Games.WarSelectNoticeSubwindow(Games.WarSubwindowType.SelectNotice, _this);
            _this.warFilmSQSubwindow = new Games.WarFilmSQSubwindow(Games.WarSubwindowType.FilmSQ, _this);
            _this.warYRProficiencySubwindow = new Games.WarYRProficiencySubwindow(Games.WarSubwindowType.proficiency, _this);
            _this.warFilmSQViewSubwindow = new Games.WarFilmSQViewSubwindow(Games.WarSubwindowType.FilmSQView, _this);
            _this.warCinemaSelectionSubwindow = new Games.WarCinemaSelectionSubwindow(Games.WarSubwindowType.CinemaSelection, _this);
            _this.warNoticeFeedBackSubwindow = new Games.WarNoticeFeedBackSubwindow(Games.WarSubwindowType.NoticeFeedBack, _this);
            _this.warFilmSYPFSubwindow = new Games.WarFilmSYPFSubwindow(Games.WarSubwindowType.SYPF, _this);
            _this.warAudienceReputationSubwindow = new Games.WarAudienceReputationSubwindow(Games.WarSubwindowType.AudienceReputation, _this);
            _this.warFilmShangYingSubwindow = new Games.WarFilmShangYingSubwindow(Games.WarSubwindowType.Shangying, _this);
            _this.warFilmOverMarketInfoSubwindow = new Games.WarFilmOverMarketInfoSubwindow(Games.WarSubwindowType.overMarket, _this);
            _this.warFilmJiesuanSubwindow = new Games.WarFilmJiesuanSubwindow(Games.WarSubwindowType.Jiesuan, _this);
            _this.warPaishequerenSubwindow = new Games.WarPaishequerenSubwindow(Games.WarSubwindowType.ShootingConfirmation, _this);
            _this.warEndingIncomeSubwindow = new Games.WarEndingIncomeSubwindow(Games.WarSubwindowType.EndIncome, _this);
            _this.warXukezhengOverSubwindow = new Games.WarXukezhengOverSubwindow(Games.WarSubwindowType.XukeOver, _this);
            _this.warXKHuifuSubwindow = new Games.WarXKHuifuSubwindow(Games.WarSubwindowType.XukeHuifu, _this);
            _this.registerSubwindow(_this.warFilmSelectingSubwindow);
            _this.registerSubwindow(_this.filmInfoSubwindow);
            _this.registerSubwindow(_this.currentMarketInfoSubwindow);
            _this.registerSubwindow(_this.selectyirenSubwindow);
            _this.registerSubwindow(_this.costViewSubwindow);
            _this.registerSubwindow(_this.warFilmYRShowSubwindow);
            _this.registerSubwindow(_this.warYRCompatibilitySubwindow);
            _this.registerSubwindow(_this.warSelectFilmTypeSubwindow);
            _this.registerSubwindow(_this.warFilmingSubwindow);
            _this.registerSubwindow(_this.warSelectNoticeSubwindow);
            _this.registerSubwindow(_this.warFilmSQSubwindow);
            _this.registerSubwindow(_this.warYRProficiencySubwindow);
            _this.registerSubwindow(_this.warFilmSQViewSubwindow);
            _this.registerSubwindow(_this.warCinemaSelectionSubwindow);
            _this.registerSubwindow(_this.warNoticeFeedBackSubwindow);
            _this.registerSubwindow(_this.warFilmSYPFSubwindow);
            _this.registerSubwindow(_this.warAudienceReputationSubwindow);
            _this.registerSubwindow(_this.warFilmShangYingSubwindow);
            _this.registerSubwindow(_this.warFilmOverMarketInfoSubwindow);
            _this.registerSubwindow(_this.warFilmJiesuanSubwindow);
            _this.registerSubwindow(_this.warPaishequerenSubwindow);
            _this.registerSubwindow(_this.warEndingIncomeSubwindow);
            _this.registerSubwindow(_this.warXukezhengOverSubwindow);
            _this.registerSubwindow(_this.warXKHuifuSubwindow);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.WarMovie.WarMain);
            return _this;
        }
        // 菜单创建
        WarWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.WarMovie.WarMain.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        WarWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        WarWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        WarWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        Object.defineProperty(WarWindow.prototype, "selectSecondFilm", {
            get: function () {
                var item = this.warFilmSelectingSubwindow.conent.m_filmItemList.getChildAt(1);
                if (item.m_selectBtn.visible) {
                    return item.m_selectBtn;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarWindow.prototype, "selectThirdFilm", {
            get: function () {
                var item = this.warFilmSelectingSubwindow.conent.m_filmItemList.getChildAt(2);
                if (item.m_selectBtn.visible) {
                    return item.m_selectBtn;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarWindow.prototype, "selectActorOkBtn", {
            get: function () {
                if (this.selectyirenSubwindow.conent.m_okBtnContorl.selectedIndex === 1) {
                    return this.selectyirenSubwindow.conent.m_okBtn;
                }
            },
            enumerable: true,
            configurable: true
        });
        return WarWindow;
    }(Games.MWindow));
    Games.WarWindow = WarWindow;
})(Games || (Games = {}));
//# sourceMappingURL=WarWindow.js.map