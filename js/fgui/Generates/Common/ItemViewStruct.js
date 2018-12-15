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
        var ItemViewStruct = /** @class */ (function (_super) {
            __extends(ItemViewStruct, _super);
            function ItemViewStruct() {
                return _super.call(this) || this;
            }
            ItemViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ItemView"));
            };
            ItemViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ItemViewStruct.URL = "ui://txcuvopdcwjyb3";
            ItemViewStruct.DependPackages = ["Common"];
            return ItemViewStruct;
        }(fairygui.GButton));
        Common.ItemViewStruct = ItemViewStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemViewStruct.js.map