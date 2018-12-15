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
        var ItemIconStruct = /** @class */ (function (_super) {
            __extends(ItemIconStruct, _super);
            function ItemIconStruct() {
                return _super.call(this) || this;
            }
            ItemIconStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemIcon"));
            };
            ItemIconStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_itemType = this.getController("itemType");
                this.m_pactIcon = (this.getChild("pactIcon"));
                this.m_icon = (this.getChild("icon"));
            };
            ItemIconStruct.URL = "ui://txcuvopdl5idt25e";
            ItemIconStruct.DependPackages = ["Common"];
            return ItemIconStruct;
        }(fairygui.GComponent));
        Common.ItemIconStruct = ItemIconStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIconStruct.js.map