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
    var Produce;
    (function (Produce) {
        var ProduceUpgradeStruct = /** @class */ (function (_super) {
            __extends(ProduceUpgradeStruct, _super);
            function ProduceUpgradeStruct() {
                return _super.call(this) || this;
            }
            ProduceUpgradeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceUpgrade"));
            };
            ProduceUpgradeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_assetList = (this.getChild("assetList"));
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_itemNum = (this.getChild("itemNum"));
                this.m_commonPanel = (this.getChild("commonPanel"));
            };
            ProduceUpgradeStruct.URL = "ui://eg7c5x5re80ij";
            ProduceUpgradeStruct.DependPackages = ["Produce", "System", "Common"];
            return ProduceUpgradeStruct;
        }(fairygui.GComponent));
        Produce.ProduceUpgradeStruct = ProduceUpgradeStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceUpgradeStruct.js.map