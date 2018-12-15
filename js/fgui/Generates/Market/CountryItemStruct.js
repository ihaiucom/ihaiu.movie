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
    var Market;
    (function (Market) {
        var CountryItemStruct = /** @class */ (function (_super) {
            __extends(CountryItemStruct, _super);
            function CountryItemStruct() {
                return _super.call(this) || this;
            }
            CountryItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "CountryItem"));
            };
            CountryItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_isHome = this.getController("isHome");
                this.m_imgHome = (this.getChild("imgHome"));
                this.m_txtName = (this.getChild("txtName"));
                this.m_txtProgress = (this.getChild("txtProgress"));
                this.m_imgCountryIcon = (this.getChild("imgCountryIcon"));
            };
            CountryItemStruct.URL = "ui://p7g5z54adm31fc";
            CountryItemStruct.DependPackages = ["Market", "WarMovie", "Common"];
            return CountryItemStruct;
        }(fairygui.GButton));
        Market.CountryItemStruct = CountryItemStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CountryItemStruct.js.map