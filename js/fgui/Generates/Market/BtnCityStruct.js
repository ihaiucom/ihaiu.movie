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
        var BtnCityStruct = /** @class */ (function (_super) {
            __extends(BtnCityStruct, _super);
            function BtnCityStruct() {
                return _super.call(this) || this;
            }
            BtnCityStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "BtnCity"));
            };
            BtnCityStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_isHome = this.getController("isHome");
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_num = (this.getChild("num"));
                this.m_red = (this.getChild("red"));
            };
            BtnCityStruct.URL = "ui://p7g5z54adm31f1";
            BtnCityStruct.DependPackages = ["Market", "MainUI", "WarMovie", "Common"];
            return BtnCityStruct;
        }(fairygui.GButton));
        Market.BtnCityStruct = BtnCityStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnCityStruct.js.map