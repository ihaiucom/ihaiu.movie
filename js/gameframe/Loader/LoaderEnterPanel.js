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
    // 加载界面--进入游戏
    //----------------------
    var LoaderEnterPanel = /** @class */ (function (_super) {
        __extends(LoaderEnterPanel, _super);
        function LoaderEnterPanel() {
            var _this = _super.call(this) || this;
            _this.tips = [];
            _this.__setTipHandlerTimer = -1;
            return _this;
        }
        LoaderEnterPanel.prototype.onInit = function () {
            this.loader = fgui.System.LoaderEnterGame.createInstance();
            this.contentPane = this.loader;
            // this.center();
            //弹出窗口的动效已中心为轴心
            // this.setPivot(0.5, 0.5);
            _super.prototype.onInit.call(this);
            this.tips = LoadingStateTxt.tips;
            this.setVersion();
        };
        // 显示完成
        LoaderEnterPanel.prototype.onShown = function () {
            _super.prototype.onShown.call(this);
            this.beginTips();
            this.setVersion();
            gameApplication.sInfo.add(this.setVersion, this);
        };
        // 隐藏完成
        LoaderEnterPanel.prototype.onHide = function () {
            _super.prototype.onHide.call(this);
            this.stopTips();
            gameApplication.sInfo.remove(this.setVersion, this);
        };
        LoaderEnterPanel.prototype.beginTips = function () {
            this.stopTips();
            if (this.tips && this.tips.length > 0) {
                this.__setTipHandler();
            }
        };
        LoaderEnterPanel.prototype.stopTips = function () {
            if (this.__setTipHandlerTimer > 0) {
                clearTimeout(this.__setTipHandlerTimer);
                this.__setTipHandlerTimer = -1;
            }
        };
        LoaderEnterPanel.prototype.__setTipHandler = function () {
            var _this = this;
            this.loader.m_help.text = this.tips[Random.range(0, this.tips.length)];
            this.__setTipHandlerTimer = setTimeout(function () {
                _this.__setTipHandler();
            }, Random.range(100, 400));
        };
        // 设置最大值
        LoaderEnterPanel.prototype.setMax = function (value) {
            // console.log("LoaderEnterPanel.setMax  value=" + value);
            this.loader.m_progressBar.max = value;
        };
        // 设置加载进度
        LoaderEnterPanel.prototype.setValue = function (value) {
            // console.log("LoaderEnterPanel.setValue  value=" + value);
            this.loader.m_progressBar.value = value;
        };
        // 设置Tip
        LoaderEnterPanel.prototype.setTip = function (tip) {
            this.loader.m_title.text = tip;
        };
        LoaderEnterPanel.prototype.setTips = function (tips) {
            // this.loader.m_help.text = tips[0];
        };
        // 设置版本号
        LoaderEnterPanel.prototype.setVersion = function () {
            this.loader.m_txt_gamever.text = "GameVersion:" + GameVersions.Manager.Instance.localAppVersionData.toString();
            this.loader.m_txt_resVer.text = "ResVersion:" + GameVersions.Manager.Instance.localResVersionData.toString();
        };
        return LoaderEnterPanel;
    }(Games.LoaderPanel));
    Games.LoaderEnterPanel = LoaderEnterPanel;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderEnterPanel.js.map