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
    var WarContinue;
    (function (WarContinue) {
        var WarContinuousIncomeStruct = /** @class */ (function (_super) {
            __extends(WarContinuousIncomeStruct, _super);
            function WarContinuousIncomeStruct() {
                return _super.call(this) || this;
            }
            WarContinuousIncomeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarContinue", "WarContinuousIncome"));
            };
            WarContinuousIncomeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ChangeCity = this.getController("ChangeCity");
                this.m_showCostRed = this.getController("showCostRed");
                this.m_filmName = (this.getChild("filmName"));
                this.m_incomeTime = (this.getChild("incomeTime"));
                this.m_guanzhuduValue = (this.getChild("guanzhuduValue"));
                this.m_expandIcon = (this.getChild("expandIcon"));
                this.m_expandCost = (this.getChild("expandCost"));
                this.m_rewardValue1 = (this.getChild("rewardValue1"));
                this.m_rewardIcon1 = (this.getChild("rewardIcon1"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_cityList = (this.getChild("cityList"));
                this.m_lockTip = (this.getChild("lockTip"));
                this.m_lock = (this.getChild("lock"));
                this.m_title = (this.getChild("title"));
                this.m_pingjia = (this.getChild("pingjia"));
                this.m_overTip1 = (this.getChild("overTip1"));
                this.m_overTip = (this.getChild("overTip"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_cityName = (this.getChild("cityName"));
                this.m_rewardList2 = (this.getChild("rewardList2"));
                this.m_cantTip = (this.getChild("cantTip"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_guanzhuduProgress = (this.getChild("guanzhuduProgress"));
                this.m_promotionBtn = (this.getChild("promotionBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_Income = (this.getChild("Income"));
                this.m_xuanchuance = (this.getChild("xuanchuance"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_Income2 = (this.getChild("Income2"));
                this.m_okBtn2 = (this.getChild("okBtn2"));
                this.m_nameBtn = (this.getChild("nameBtn"));
                this.m_closeBtn2 = (this.getChild("closeBtn2"));
                this.m_fxEffectMovieEarnings = (this.getChild("fxEffectMovieEarnings"));
            };
            WarContinuousIncomeStruct.URL = "ui://qybz1z3jqbxl84";
            WarContinuousIncomeStruct.DependPackages = ["WarContinue", "WarMovie", "System", "Fx", "Common"];
            return WarContinuousIncomeStruct;
        }(fairygui.GComponent));
        WarContinue.WarContinuousIncomeStruct = WarContinuousIncomeStruct;
    })(WarContinue = fgui.WarContinue || (fgui.WarContinue = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinuousIncomeStruct.js.map