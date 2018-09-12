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
        var WarEndingIncome = /** @class */ (function (_super) {
            __extends(WarEndingIncome, _super);
            function WarEndingIncome() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarEndingIncome.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 初始化柱状图列表
                this.m_filmList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭
                this.m_okBtn.onClick(this, this.onClickClose);
            };
            WarEndingIncome.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarEndingIncome.prototype.onWindowShow = function () {
                this.setData();
            };
            WarEndingIncome.prototype.onWindowHide = function () {
            };
            WarEndingIncome.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_title.text = TEXT.EndingTitle;
                this.m_nameTip.text = TEXT.EndingTip;
                this.m_filmList.numItems = Game.moduleModel.warData.movieDataList.length;
            };
            WarEndingIncome.prototype.initItem = function (index, obj) {
                var _this = this;
                var item = obj;
                item.setData(Game.moduleModel.warData.movieDataList[index], index, function () { _this.setData(); });
            };
            return WarEndingIncome;
        }(WarMovie.WarEndingIncomeStruct));
        WarMovie.WarEndingIncome = WarEndingIncome;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarEndingIncome.js.map