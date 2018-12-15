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
        var GoodsLineStruct = /** @class */ (function (_super) {
            __extends(GoodsLineStruct, _super);
            function GoodsLineStruct() {
                return _super.call(this) || this;
            }
            GoodsLineStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "GoodsLine"));
            };
            GoodsLineStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Goods1 = (this.getChild("Goods1"));
                this.m_Goods2 = (this.getChild("Goods2"));
                this.m_Goods3 = (this.getChild("Goods3"));
            };
            GoodsLineStruct.URL = "ui://s33x8418kl6dt21p";
            GoodsLineStruct.DependPackages = ["PfSkin", "Common"];
            return GoodsLineStruct;
        }(fairygui.GComponent));
        PfSkin.GoodsLineStruct = GoodsLineStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoodsLineStruct.js.map