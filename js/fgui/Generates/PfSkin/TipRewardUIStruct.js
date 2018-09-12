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
        var TipRewardUIStruct = /** @class */ (function (_super) {
            __extends(TipRewardUIStruct, _super);
            function TipRewardUIStruct() {
                return _super.call(this) || this;
            }
            TipRewardUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "TipRewardUI"));
            };
            TipRewardUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_bg = (this.getChild("bg"));
                this.m_list = (this.getChild("list"));
                this.m_t0 = this.getTransition("t0");
            };
            TipRewardUIStruct.URL = "ui://s33x8418jazc1ll";
            TipRewardUIStruct.DependPackages = ["PfSkin", "Common"];
            return TipRewardUIStruct;
        }(fairygui.GLabel));
        PfSkin.TipRewardUIStruct = TipRewardUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TipRewardUIStruct.js.map