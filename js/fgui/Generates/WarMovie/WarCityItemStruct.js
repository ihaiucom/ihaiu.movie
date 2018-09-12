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
        var WarCityItemStruct = /** @class */ (function (_super) {
            __extends(WarCityItemStruct, _super);
            function WarCityItemStruct() {
                return _super.call(this) || this;
            }
            WarCityItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarCityItem"));
            };
            WarCityItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_gray = this.getController("gray");
                this.m_icon = (this.getChild("icon"));
                this.m_iconGray = (this.getChild("iconGray"));
                this.m_title = (this.getChild("title"));
            };
            WarCityItemStruct.URL = "ui://y6ozucp1qbxl8b";
            WarCityItemStruct.DependPackages = ["WarMovie"];
            return WarCityItemStruct;
        }(fairygui.GButton));
        WarMovie.WarCityItemStruct = WarCityItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCityItemStruct.js.map