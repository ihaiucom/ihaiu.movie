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
    var GM;
    (function (GM) {
        var GMDisplayTreePage = /** @class */ (function (_super) {
            __extends(GMDisplayTreePage, _super);
            function GMDisplayTreePage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            // 窗口初始化完毕
            GMDisplayTreePage.prototype.onWindowInited = function () {
                this.m_refreshButton.onClick(this, this.onClickRefreshButton);
                this.m_showSelectButton.onClick(this, this.onClickShowSelectButton);
                this.m_hideSelectButton.onClick(this, this.onClickHideSelectButton);
                this.m_noSelectButton.onClick(this, this.onClickNoSelectButton);
                this.m_parentLayerButton.onClick(this, this.onClickParentLayerButton);
                this.m_setLayerButton.onClick(this, this.onClickSetLayerButton);
            };
            // 点击按钮--刷新
            GMDisplayTreePage.prototype.onClickRefreshButton = function () {
                this.m_tree.refresh();
            };
            // 点击按钮--显示选中的
            GMDisplayTreePage.prototype.onClickShowSelectButton = function () {
            };
            // 点击按钮--隐藏选中的
            GMDisplayTreePage.prototype.onClickHideSelectButton = function () {
            };
            // 点击按钮--不选
            GMDisplayTreePage.prototype.onClickNoSelectButton = function () {
            };
            // 点击按钮--上级
            GMDisplayTreePage.prototype.onClickParentLayerButton = function () {
            };
            // 点击按钮--塌陷
            GMDisplayTreePage.prototype.onClickSetLayerButton = function () {
            };
            return GMDisplayTreePage;
        }(GM.GMDisplayTreePageStruct));
        GM.GMDisplayTreePage = GMDisplayTreePage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMDisplayTreePage.js.map