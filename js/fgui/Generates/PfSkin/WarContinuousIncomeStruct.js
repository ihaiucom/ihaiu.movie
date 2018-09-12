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
    var PfSkin;
    (function (PfSkin) {
        var WarContinuousIncomeStruct = /** @class */ (function (_super) {
            __extends(WarContinuousIncomeStruct, _super);
            function WarContinuousIncomeStruct() {
                return _super.call(this) || this;
            }
            WarContinuousIncomeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarContinuousIncome"));
            };
            WarContinuousIncomeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_changeCity = this.getController("changeCity");
                this.m_bg = (this.getChild("bg"));
                this.m_bg1 = (this.getChild("bg1"));
                this.m_bgTop = (this.getChild("bgTop"));
                this.m_bgBai = (this.getChild("bgBai"));
                this.m_pingjia = (this.getChild("pingjia"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_incomeTime = (this.getChild("incomeTime"));
                this.m_guanzhuduValue = (this.getChild("guanzhuduValue"));
                this.m_lockTip = (this.getChild("lockTip"));
                this.m_lock = (this.getChild("lock"));
                this.m_rewardIcon1 = (this.getChild("rewardIcon1"));
                this.m_rewardValue1 = (this.getChild("rewardValue1"));
                this.m_rewardIcon2 = (this.getChild("rewardIcon2"));
                this.m_rewardValue2 = (this.getChild("rewardValue2"));
                this.m_rewardTip = (this.getChild("rewardTip"));
                this.m_rewardTipValue = (this.getChild("rewardTipValue"));
                this.m_cityList = (this.getChild("cityList"));
                this.m_IncomeList = (this.getChild("IncomeList"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bgBai2 = (this.getChild("bgBai2"));
                this.m_cantTip = (this.getChild("cantTip"));
                this.m_icon2 = (this.getChild("icon2"));
                this.m_cityName = (this.getChild("cityName"));
                this.m_IncomeList2 = (this.getChild("IncomeList2"));
                this.m_rewardList2 = (this.getChild("rewardList2"));
                this.m_overTip = (this.getChild("overTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_xuanchuance = (this.getChild("xuanchuance"));
                this.m_nameBtn = (this.getChild("nameBtn"));
                this.m_guanzhuduProgress = (this.getChild("guanzhuduProgress"));
                this.m_promotionBtn = (this.getChild("promotionBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_okBtn2 = (this.getChild("okBtn2"));
                this.m_closeBtn2 = (this.getChild("closeBtn2"));
            };
            WarContinuousIncomeStruct.URL = "ui://s33x8418pvrg1if";
            WarContinuousIncomeStruct.DependPackages = ["PfSkin"];
            return WarContinuousIncomeStruct;
        }(fairygui.GComponent));
        PfSkin.WarContinuousIncomeStruct = WarContinuousIncomeStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinuousIncomeStruct.js.map