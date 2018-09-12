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
        var ProduceUpgradeItemStruct = /** @class */ (function (_super) {
            __extends(ProduceUpgradeItemStruct, _super);
            function ProduceUpgradeItemStruct() {
                return _super.call(this) || this;
            }
            ProduceUpgradeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ProduceUpgradeItem"));
            };
            ProduceUpgradeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_title = (this.getChild("title"));
                this.m_num = (this.getChild("num"));
                this.m_skill1 = (this.getChild("skill1"));
                this.m_skill2 = (this.getChild("skill2"));
                this.m_skill3 = (this.getChild("skill3"));
                this.m_skill4 = (this.getChild("skill4"));
                this.m_btnUpgradeLock = (this.getChild("btnUpgradeLock"));
                this.m_btnUpgradeSelect = (this.getChild("btnUpgradeSelect"));
            };
            ProduceUpgradeItemStruct.URL = "ui://eg7c5x5re80is";
            ProduceUpgradeItemStruct.DependPackages = ["Produce", "Common"];
            return ProduceUpgradeItemStruct;
        }(fairygui.GComponent));
        Produce.ProduceUpgradeItemStruct = ProduceUpgradeItemStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProduceUpgradeItemStruct.js.map