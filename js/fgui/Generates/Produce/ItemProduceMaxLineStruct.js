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
        var ItemProduceMaxLineStruct = /** @class */ (function (_super) {
            __extends(ItemProduceMaxLineStruct, _super);
            function ItemProduceMaxLineStruct() {
                return _super.call(this) || this;
            }
            ItemProduceMaxLineStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ItemProduceMaxLine"));
            };
            ItemProduceMaxLineStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            ItemProduceMaxLineStruct.URL = "ui://eg7c5x5rx9sk19";
            ItemProduceMaxLineStruct.DependPackages = ["Produce"];
            return ItemProduceMaxLineStruct;
        }(fairygui.GButton));
        Produce.ItemProduceMaxLineStruct = ItemProduceMaxLineStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemProduceMaxLineStruct.js.map