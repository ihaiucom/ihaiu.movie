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
        var ItemIconEffectLoaderStruct = /** @class */ (function (_super) {
            __extends(ItemIconEffectLoaderStruct, _super);
            function ItemIconEffectLoaderStruct() {
                return _super.call(this) || this;
            }
            ItemIconEffectLoaderStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Produce", "ItemIconEffectLoader"));
            };
            ItemIconEffectLoaderStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_iconLoader = (this.getChild("iconLoader"));
                this.m_t1 = this.getTransition("t1");
            };
            ItemIconEffectLoaderStruct.URL = "ui://eg7c5x5rsayo33";
            ItemIconEffectLoaderStruct.DependPackages = ["Produce"];
            return ItemIconEffectLoaderStruct;
        }(fairygui.GComponent));
        Produce.ItemIconEffectLoaderStruct = ItemIconEffectLoaderStruct;
    })(Produce = fgui.Produce || (fgui.Produce = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIconEffectLoaderStruct.js.map