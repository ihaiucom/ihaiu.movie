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
    // 生产Tab标签
    //----------------------
    var ProduceTab;
    (function (ProduceTab) {
        ProduceTab[ProduceTab["Rank0"] = 0] = "Rank0";
        ProduceTab[ProduceTab["Rank1"] = 1] = "Rank1";
        ProduceTab[ProduceTab["Rank2"] = 2] = "Rank2";
    })(ProduceTab = Games.ProduceTab || (Games.ProduceTab = {}));
    //======================
    // 生产窗口
    //----------------------
    var ProduceWindow = /** @class */ (function (_super) {
        __extends(ProduceWindow, _super);
        function ProduceWindow() {
            var _this = _super.call(this) || this;
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Produce.Main);
            return _this;
        }
        // 菜单创建
        ProduceWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Produce.Main.createInstance();
            this.contentPane = this.conent;
            // this.center();
            // //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            this.createTabPanel();
            _super.prototype.onMenuCreate.call(this);
        };
        // 菜单打开事件，传递参数
        ProduceWindow.prototype.onMenuOpen = function (parameter) {
            _super.prototype.onMenuOpen.call(this, parameter);
        };
        ProduceWindow.prototype.createTabPanel = function () {
            this.registerTab(ProduceTab.Rank0, this.conent.m_produceList);
            this.registerTab(ProduceTab.Rank1, this.conent.m_produceList);
            this.registerTab(ProduceTab.Rank2, this.conent.m_produceList);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        ProduceWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        ProduceWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        return ProduceWindow;
    }(Games.MWindow));
    Games.ProduceWindow = ProduceWindow;
})(Games || (Games = {}));
//# sourceMappingURL=ProduceWindow.js.map