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
        var WarIncomeRewardItemStruct = /** @class */ (function (_super) {
            __extends(WarIncomeRewardItemStruct, _super);
            function WarIncomeRewardItemStruct() {
                return _super.call(this) || this;
            }
            WarIncomeRewardItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarIncomeRewardItem"));
            };
            WarIncomeRewardItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
            };
            WarIncomeRewardItemStruct.URL = "ui://s33x8418pvrg1ik";
            WarIncomeRewardItemStruct.DependPackages = ["PfSkin"];
            return WarIncomeRewardItemStruct;
        }(fairygui.GButton));
        PfSkin.WarIncomeRewardItemStruct = WarIncomeRewardItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarIncomeRewardItemStruct.js.map