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
        var ItemIcon50x50Struct = /** @class */ (function (_super) {
            __extends(ItemIcon50x50Struct, _super);
            function ItemIcon50x50Struct() {
                return _super.call(this) || this;
            }
            ItemIcon50x50Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemIcon50x50"));
            };
            ItemIcon50x50Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ItemIcon50x50Struct.URL = "ui://txcuvopdj3a33p";
            ItemIcon50x50Struct.DependPackages = ["Common"];
            return ItemIcon50x50Struct;
        }(fairygui.GLabel));
        Common.ItemIcon50x50Struct = ItemIcon50x50Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemIcon50x50Struct.js.map