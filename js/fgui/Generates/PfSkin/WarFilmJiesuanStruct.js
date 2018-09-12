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
        var WarFilmJiesuanStruct = /** @class */ (function (_super) {
            __extends(WarFilmJiesuanStruct, _super);
            function WarFilmJiesuanStruct() {
                return _super.call(this) || this;
            }
            WarFilmJiesuanStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmJiesuan"));
            };
            WarFilmJiesuanStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_kuang = (this.getChild("kuang"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_zhuyanList = (this.getChild("zhuyanList"));
                this.m_koubei = (this.getChild("koubei"));
                this.m_tip = (this.getChild("tip"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_auther = (this.getChild("auther"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_total = (this.getChild("total"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_tip4 = (this.getChild("tip4"));
                this.m_rewardValue = (this.getChild("rewardValue"));
                this.m_tip5 = (this.getChild("tip5"));
                this.m_rewardList = (this.getChild("rewardList"));
                this.m_bpBg = (this.getChild("bpBg"));
                this.m_bp1 = (this.getChild("bp1"));
                this.m_bp2 = (this.getChild("bp2"));
                this.m_bipinCom = (this.getChild("bipinCom"));
                this.m_filmTip = (this.getChild("filmTip"));
                this.m_middleCom = (this.getChild("middleCom"));
                this.m_l1 = (this.getChild("l1"));
                this.m_r1 = (this.getChild("r1"));
                this.m_l2 = (this.getChild("l2"));
                this.m_r2 = (this.getChild("r2"));
                this.m_weiman = (this.getChild("weiman"));
                this.m_zuowei = (this.getChild("zuowei"));
                this.m_shareBg = (this.getChild("shareBg"));
                this.m_shareTip = (this.getChild("shareTip"));
                this.m_shareBox = (this.getChild("shareBox"));
                this.m_shareArrow = (this.getChild("shareArrow"));
                this.m_shareRewardTip = (this.getChild("shareRewardTip"));
                this.m_sellTipIcon = (this.getChild("sellTipIcon"));
                this.m_starProgress = (this.getChild("starProgress"));
                this.m_totalProgress = (this.getChild("totalProgress"));
                this.m_costProgress = (this.getChild("costProgress"));
                this.m_shareBtn = (this.getChild("shareBtn"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFilmJiesuanStruct.URL = "ui://s33x8418k8js1i5";
            WarFilmJiesuanStruct.DependPackages = ["PfSkin"];
            return WarFilmJiesuanStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmJiesuanStruct = WarFilmJiesuanStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmJiesuanStruct.js.map