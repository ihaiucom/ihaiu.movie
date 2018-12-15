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
        var GMTickPage = /** @class */ (function (_super) {
            __extends(GMTickPage, _super);
            function GMTickPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dataList = [];
                _this.sortType = GM.GMTimeLoopSortType.EvaluateCost;
                return _this;
            }
            // 窗口初始化完毕
            GMTickPage.prototype.onWindowInited = function () {
                this.m_clearButton.onClick(this, this.onClickClearButton);
                this.m_refreshButton.onClick(this, this.onClickRefreshButton);
                this.m_sortCostTimeToalButton.onClick(this, this.onClickRefreshButton, [GM.GMTimeLoopSortType.CostTimeTotal]);
                this.m_sorteCostTimeButton.onClick(this, this.onClickRefreshButton, [GM.GMTimeLoopSortType.CostTime]);
                this.m_sorteCallNumButton.onClick(this, this.onClickRefreshButton, [GM.GMTimeLoopSortType.CallNum]);
                this.m_sorteEvaluateButton.onClick(this, this.onClickRefreshButton, [GM.GMTimeLoopSortType.EvaluateCost]);
            };
            GMTickPage.prototype.onClickClearButton = function () {
                Games.DebugTimerLoopManager.clear();
            };
            GMTickPage.prototype.onClickRefreshButton = function (sortType) {
                if (sortType) {
                    this.sortType = sortType;
                }
                var list = Game.tick["list"];
                switch (this.sortType) {
                    case GM.GMTimeLoopSortType.CostTimeTotal:
                        list = list.sort(function (a, b) { return a.debugCostTimeToal - b.debugCostTimeToal; });
                        break;
                    case GM.GMTimeLoopSortType.CostTime:
                        list = list.sort(function (a, b) { return a.debugCostTime - b.debugCostTime; });
                        break;
                    case GM.GMTimeLoopSortType.CallNum:
                        list = list.sort(function (a, b) { return a.debugCallNum - b.debugCallNum; });
                        break;
                    case GM.GMTimeLoopSortType.EvaluateCost:
                        list = list.sort(function (a, b) { return a.debugEvaluateCost - b.debugEvaluateCost; });
                        break;
                }
                this.setList(list);
            };
            GMTickPage.prototype.setList = function (items) {
                this.dataList = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
            };
            GMTickPage.prototype.renderListItem = function (index, item) {
                var data = this.dataList[index];
                item.setTickData(data);
            };
            return GMTickPage;
        }(GM.GMTickPageStruct));
        GM.GMTickPage = GMTickPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMTickPage.js.map