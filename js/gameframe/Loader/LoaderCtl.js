var Games;
(function (Games) {
    //======================
    // 加载界面控制器
    //----------------------
    var LoaderCtl = /** @class */ (function () {
        function LoaderCtl() {
            // 是否已经打开
            this.isOpened = false;
            //延时显示加载面板Handler
            this.delayShowPanelHandler = -1;
        }
        Object.defineProperty(LoaderCtl.prototype, "isDelayShowPanel", {
            get: function () {
                return this.loaderId == Games.LoaderId.Module;
            },
            enumerable: true,
            configurable: true
        });
        // 打开
        LoaderCtl.prototype.open = function () {
            var _this = this;
            this.isOpened = true;
            if (this.loaderPanel) {
                this.loaderPanel.showOn(Games.MenuLayer.loader);
                this.loaderPanel.setContentVisiable(true);
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                    clearTimeout(this.delayShowPanelHandler);
                    this.delayShowPanelHandler = setTimeout(function () {
                        _this.loaderPanel.setContentVisiable(true);
                    }, 100);
                }
            }
        };
        // 关闭
        LoaderCtl.prototype.close = function () {
            if (this.delayShowPanelHandler != -1) {
                clearTimeout(this.delayShowPanelHandler);
                this.delayShowPanelHandler = -1;
            }
            this.isOpened = false;
            if (this.loaderPanel) {
                this.loaderPanel.hide();
                if (this.isDelayShowPanel) {
                    this.loaderPanel.setContentVisiable(false);
                }
            }
        };
        // 设置进度
        LoaderCtl.prototype.setProgress = function (progress) {
            if (this.loaderPanel)
                this.loaderPanel.setValue(progress);
        };
        // 设置进度最大值
        LoaderCtl.prototype.setMax = function (max) {
            if (this.loaderPanel)
                this.loaderPanel.setMax(max);
        };
        // 设置Tip
        LoaderCtl.prototype.setTip = function (txt) {
            if (this.loaderPanel)
                this.loaderPanel.setTip(txt);
        };
        LoaderCtl.prototype.setTips = function (txts) {
            if (this.loaderPanel)
                this.loaderPanel.setTips(txts);
        };
        return LoaderCtl;
    }());
    Games.LoaderCtl = LoaderCtl;
})(Games || (Games = {}));
//# sourceMappingURL=LoaderCtl.js.map