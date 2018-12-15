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
        var ItemInfoStruct = /** @class */ (function (_super) {
            __extends(ItemInfoStruct, _super);
            function ItemInfoStruct() {
                return _super.call(this) || this;
            }
            ItemInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemInfo"));
            };
            ItemInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_isType7 = this.getController("isType7");
                this.m_name = (this.getChild("name"));
                this.m_num = (this.getChild("num"));
                this.m_desc = (this.getChild("desc"));
                this.m_way = (this.getChild("way"));
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_btnInfo = (this.getChild("btnInfo"));
            };
            ItemInfoStruct.URL = "ui://txcuvopddo33t235";
            ItemInfoStruct.DependPackages = ["Common", "WarMovie", "Cooperation"];
            return ItemInfoStruct;
        }(fairygui.GComponent));
        Common.ItemInfoStruct = ItemInfoStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemInfoStruct.js.map