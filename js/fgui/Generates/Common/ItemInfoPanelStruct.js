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
    var Common;
    (function (Common) {
        var ItemInfoPanelStruct = /** @class */ (function (_super) {
            __extends(ItemInfoPanelStruct, _super);
            function ItemInfoPanelStruct() {
                return _super.call(this) || this;
            }
            ItemInfoPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemInfoPanel"));
            };
            ItemInfoPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_itemInfo = (this.getChild("itemInfo"));
                this.m_t0 = this.getTransition("t0");
            };
            ItemInfoPanelStruct.URL = "ui://txcuvopdh9c1t234";
            ItemInfoPanelStruct.DependPackages = ["Common"];
            return ItemInfoPanelStruct;
        }(fairygui.GComponent));
        Common.ItemInfoPanelStruct = ItemInfoPanelStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemInfoPanelStruct.js.map