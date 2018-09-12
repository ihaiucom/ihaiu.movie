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
    var PfSkin;
    (function (PfSkin) {
        var ItemGetUIStruct = /** @class */ (function (_super) {
            __extends(ItemGetUIStruct, _super);
            function ItemGetUIStruct() {
                return _super.call(this) || this;
            }
            ItemGetUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ItemGetUI"));
            };
            ItemGetUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_title = (this.getChild("title"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            ItemGetUIStruct.URL = "ui://s33x8418lrcb1no";
            ItemGetUIStruct.DependPackages = ["PfSkin", "Common"];
            return ItemGetUIStruct;
        }(fairygui.GComponent));
        PfSkin.ItemGetUIStruct = ItemGetUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ItemGetUIStruct.js.map