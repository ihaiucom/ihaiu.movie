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
    var WarContinueWindow = /** @class */ (function (_super) {
        __extends(WarContinueWindow, _super);
        function WarContinueWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.WarContinue.WarContinuousIncome);
            _this.addAssetForFguiComponent(fgui.WarMovie.WarMain);
            return _this;
        }
        // 菜单创建
        WarContinueWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.WarContinue.WarContinuousIncome.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        WarContinueWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        // 菜单显示
        WarContinueWindow.prototype.menuShow = function (root) {
            this.showOn(root);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        WarContinueWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        WarContinueWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        Object.defineProperty(WarContinueWindow.prototype, "filmContinueFirstRewardBtn", {
            get: function () {
                return this.conent.m_okBtn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarContinueWindow.prototype, "filmContinueFirstpromotionBtn", {
            get: function () {
                if (this.conent && this.conent.m_promotionBtn) {
                    return this.conent.m_promotionBtn;
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarContinueWindow.prototype, "cityBtn", {
            // 
            get: function () {
                for (var i = 0; i < this.conent.cityList.length; i++) {
                    if (this.conent.curCity === null || this.conent.cityList[i].id !== this.conent.curCity.id) {
                        if (this.conent.cityList[i].state === Games.CityStateEnum.hasOccupy) {
                            this.conent.m_cityList.scrollToView(i);
                            return this.conent.m_cityList.getChildAt(this.conent.m_cityList.itemIndexToChildIndex(i));
                        }
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WarContinueWindow.prototype, "citySwitch", {
            get: function () {
                if (this.conent.m_ChangeCity.selectedIndex === 1) {
                    if (this.conent.m_okBtn2.visible) {
                        return this.conent.m_okBtn2;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        return WarContinueWindow;
    }(Games.MWindow));
    Games.WarContinueWindow = WarContinueWindow;
})(Games || (Games = {}));
//# sourceMappingURL=WarContinueWindow.js.map