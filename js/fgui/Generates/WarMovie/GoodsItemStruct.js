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
    var WarMovie;
    (function (WarMovie) {
        var GoodsItemStruct = /** @class */ (function (_super) {
            __extends(GoodsItemStruct, _super);
            function GoodsItemStruct() {
                return _super.call(this) || this;
            }
            GoodsItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "GoodsItem"));
            };
            GoodsItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ItemIcon = (this.getChild("ItemIcon"));
                this.m_title = (this.getChild("title"));
            };
            GoodsItemStruct.URL = "ui://y6ozucp1qbxl85";
            GoodsItemStruct.DependPackages = ["WarMovie", "Common"];
            return GoodsItemStruct;
        }(fairygui.GLabel));
        WarMovie.GoodsItemStruct = GoodsItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoodsItemStruct.js.map