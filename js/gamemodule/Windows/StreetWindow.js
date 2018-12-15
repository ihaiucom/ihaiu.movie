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
    var StreetWindowSubEnum;
    (function (StreetWindowSubEnum) {
        StreetWindowSubEnum[StreetWindowSubEnum["StreetInfoPanel"] = 0] = "StreetInfoPanel";
        StreetWindowSubEnum[StreetWindowSubEnum["StreetLvUpInfoPanel"] = 1] = "StreetLvUpInfoPanel";
        StreetWindowSubEnum[StreetWindowSubEnum["StreetCinemaSelectedPanel"] = 2] = "StreetCinemaSelectedPanel";
        StreetWindowSubEnum[StreetWindowSubEnum["StreetSelectCinemaPanel"] = 3] = "StreetSelectCinemaPanel";
    })(StreetWindowSubEnum = Games.StreetWindowSubEnum || (Games.StreetWindowSubEnum = {}));
    var StreetWindow = /** @class */ (function (_super) {
        __extends(StreetWindow, _super);
        function StreetWindow() {
            var _this = _super.call(this) || this;
            _this.cinemaSelectedSubwindow = new Games.StreetCinemaSelectedSubwindow(StreetWindowSubEnum.StreetCinemaSelectedPanel, _this);
            _this.infoSubwindow = new Games.StreetInfoSubwindow(StreetWindowSubEnum.StreetInfoPanel, _this);
            _this.lvUpInfoSubwindow = new Games.StreetLvUpInfoSubwindow(StreetWindowSubEnum.StreetLvUpInfoPanel, _this);
            _this.selectCinemaSubwindow = new Games.StreetSelectCinemaSubwindow(StreetWindowSubEnum.StreetSelectCinemaPanel, _this);
            _this.registerSubwindow(_this.cinemaSelectedSubwindow);
            _this.registerSubwindow(_this.infoSubwindow);
            _this.registerSubwindow(_this.lvUpInfoSubwindow);
            _this.registerSubwindow(_this.selectCinemaSubwindow);
            // 添加依赖资源
            _this.addAssetForFguiPackagename(Games.GuiPackageNames.Common);
            _this.addAssetForFguiComponent(fgui.Street.StreetMainPanel);
            return _this;
        }
        // 菜单创建
        StreetWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Street.StreetMainPanel.createInstance();
            this.contentPane = this.conent;
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        StreetWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
            this.conent.onWindowOpen();
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        StreetWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        StreetWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        StreetWindow.prototype.listTab = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return this.conent.m_rankPanel.m_listTab.getChildAt(args[0]);
        };
        Object.defineProperty(StreetWindow.prototype, "CurrentSignCinemaBtn", {
            get: function () {
                var streetList = Game.moduleModel.street.StreetList;
                for (var index = 0; index < streetList.length; index++) {
                    var street = streetList[index];
                    if (street.canSign) {
                        var realIndex = this.conent.m_streetPanel.m_list.itemIndexToChildIndex(index);
                        if (realIndex < 0) {
                            return null;
                        }
                        var item = this.conent.m_streetPanel.m_list.getChildAt(realIndex);
                        if (item != null) {
                            return item.m_cinemaView.m_btnSign;
                        }
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        return StreetWindow;
    }(Games.MWindow));
    Games.StreetWindow = StreetWindow;
})(Games || (Games = {}));
//# sourceMappingURL=StreetWindow.js.map