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
        var WarYRCostItemStruct = /** @class */ (function (_super) {
            __extends(WarYRCostItemStruct, _super);
            function WarYRCostItemStruct() {
                return _super.call(this) || this;
            }
            WarYRCostItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarYRCostItem"));
            };
            WarYRCostItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_juese = (this.getChild("juese"));
                this.m_name = (this.getChild("name"));
                this.m_costText = (this.getChild("costText"));
                this.m_costIcon = (this.getChild("costIcon"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            WarYRCostItemStruct.URL = "ui://y6ozucp1r0zd3g";
            WarYRCostItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarYRCostItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarYRCostItemStruct = WarYRCostItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRCostItemStruct.js.map