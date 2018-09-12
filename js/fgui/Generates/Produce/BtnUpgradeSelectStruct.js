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
        var BtnUpgradeSelectStruct = /** @class */ (function (_super) {
            __extends(BtnUpgradeSelectStruct, _super);
            function BtnUpgradeSelectStruct() {
                return _super.call(this) || this;
            }
            BtnUpgradeSelectStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "BtnUpgradeSelect"));
            };
            BtnUpgradeSelectStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            BtnUpgradeSelectStruct.URL = "ui://eg7c5x5re80ir";
            BtnUpgradeSelectStruct.DependPackages = ["Produce"];
            return BtnUpgradeSelectStruct;
        }(fairygui.GButton));
        Produce.BtnUpgradeSelectStruct = BtnUpgradeSelectStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnUpgradeSelectStruct.js.map