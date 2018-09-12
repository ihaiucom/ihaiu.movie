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
        var WarCostViewStruct = /** @class */ (function (_super) {
            __extends(WarCostViewStruct, _super);
            function WarCostViewStruct() {
                return _super.call(this) || this;
            }
            WarCostViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarCostView"));
            };
            WarCostViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_upDaban = (this.getChild("upDaban"));
                this.m_diHei = (this.getChild("diHei"));
                this.m_diBai = (this.getChild("diBai"));
                this.m_daban = (this.getChild("daban"));
                this.m_daojiao = (this.getChild("daojiao"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_nameTip = (this.getChild("nameTip"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_costText = (this.getChild("costText"));
                this.m_allTip = (this.getChild("allTip"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            WarCostViewStruct.URL = "ui://s33x84186ve81g8";
            WarCostViewStruct.DependPackages = ["PfSkin"];
            return WarCostViewStruct;
        }(fairygui.GComponent));
        PfSkin.WarCostViewStruct = WarCostViewStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCostViewStruct.js.map