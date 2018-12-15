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
        var WarGoodsItemStruct = /** @class */ (function (_super) {
            __extends(WarGoodsItemStruct, _super);
            function WarGoodsItemStruct() {
                return _super.call(this) || this;
            }
            WarGoodsItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarGoodsItem"));
            };
            WarGoodsItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_colorCon = this.getController("colorCon");
                this.m_icon = (this.getChild("icon"));
                this.m_starList = (this.getChild("starList"));
                this.m_title = (this.getChild("title"));
            };
            WarGoodsItemStruct.URL = "ui://y6ozucp1qbxl7u";
            WarGoodsItemStruct.DependPackages = ["WarMovie", "Common", "PfSkin"];
            return WarGoodsItemStruct;
        }(fairygui.GButton));
        WarMovie.WarGoodsItemStruct = WarGoodsItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarGoodsItemStruct.js.map