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
        var GMTimeLoopSortType;
        (function (GMTimeLoopSortType) {
            GMTimeLoopSortType[GMTimeLoopSortType["CostTimeTotal"] = 0] = "CostTimeTotal";
            GMTimeLoopSortType[GMTimeLoopSortType["CostTime"] = 1] = "CostTime";
            GMTimeLoopSortType[GMTimeLoopSortType["CallNum"] = 2] = "CallNum";
            GMTimeLoopSortType[GMTimeLoopSortType["EvaluateCost"] = 3] = "EvaluateCost";
        })(GMTimeLoopSortType = GM.GMTimeLoopSortType || (GM.GMTimeLoopSortType = {}));
        var GMTimeLoopPage = /** @class */ (function (_super) {
            __extends(GMTimeLoopPage, _super);
            function GMTimeLoopPage() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.dataList = [];
                _this.sortType = GMTimeLoopSortType.EvaluateCost;
                return _this;
            }
            // 窗口初始化完毕
            GMTimeLoopPage.prototype.onWindowInited = function () {
                this.m_clearButton.onClick(this, this.onClickClearButton);
                this.m_refreshButton.onClick(this, this.onClickRefreshButton);
                this.m_sortCostTimeToalButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTimeTotal]);
                this.m_sorteCostTimeButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CostTime]);
                this.m_sorteCallNumButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.CallNum]);
                this.m_sorteEvaluateButton.onClick(this, this.onClickRefreshButton, [GMTimeLoopSortType.EvaluateCost]);
            };
            GMTimeLoopPage.prototype.onClickClearButton = function () {
                Games.DebugTimerLoopManager.clear();
            };
            GMTimeLoopPage.prototype.onClickRefreshButton = function (sortType) {
                if (sortType) {
                    this.sortType = sortType;
                }
                var list = Games.DebugTimerLoopManager.Instance.dict.getValues();
                switch (this.sortType) {
                    case GMTimeLoopSortType.CostTimeTotal:
                        list = list.sort(function (a, b) { return a.costTimeToal - b.costTimeToal; });
                        break;
                    case GMTimeLoopSortType.CostTime:
                        list = list.sort(function (a, b) { return a.costTime - b.costTime; });
                        break;
                    case GMTimeLoopSortType.CallNum:
                        list = list.sort(function (a, b) { return a.callNum - b.callNum; });
                        break;
                    case GMTimeLoopSortType.EvaluateCost:
                        list = list.sort(function (a, b) { return a.evaluateCost - b.evaluateCost; });
                        break;
                }
                this.setList(list);
            };
            GMTimeLoopPage.prototype.setList = function (items) {
                this.dataList = items;
                var list = this.m_list;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = items.length;
            };
            GMTimeLoopPage.prototype.renderListItem = function (index, item) {
                var data = this.dataList[index];
                item.setItemData(data);
            };
            return GMTimeLoopPage;
        }(GM.GMTimeLoopPageStruct));
        GM.GMTimeLoopPage = GMTimeLoopPage;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMTimeLoopPage.js.map