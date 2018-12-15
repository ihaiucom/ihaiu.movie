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
        var ItemLockTipStruct = /** @class */ (function (_super) {
            __extends(ItemLockTipStruct, _super);
            function ItemLockTipStruct() {
                return _super.call(this) || this;
            }
            ItemLockTipStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemLockTip"));
            };
            ItemLockTipStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_name = (this.getChild("name"));
                this.m_desc = (this.getChild("desc"));
            };
            ItemLockTipStruct.URL = "ui://txcuvopdcp1ct24f";
            ItemLockTipStruct.DependPackages = ["Common"];
            return ItemLockTipStruct;
        }(fairygui.GComponent));
        Common.ItemLockTipStruct = ItemLockTipStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemLockTipStruct.js.map