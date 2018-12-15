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
        var ButtonPublicityCostStruct = /** @class */ (function (_super) {
            __extends(ButtonPublicityCostStruct, _super);
            function ButtonPublicityCostStruct() {
                return _super.call(this) || this;
            }
            ButtonPublicityCostStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "ButtonPublicityCost"));
            };
            ButtonPublicityCostStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_title = (this.getChild("title"));
                this.m_cost = (this.getChild("cost"));
                this.m_assetLoader = (this.getChild("assetLoader"));
                this.m_t0 = this.getTransition("t0");
            };
            ButtonPublicityCostStruct.URL = "ui://p7g5z54ahjkwfp";
            ButtonPublicityCostStruct.DependPackages = ["Market", "Common"];
            return ButtonPublicityCostStruct;
        }(fairygui.GButton));
        Market.ButtonPublicityCostStruct = ButtonPublicityCostStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ButtonPublicityCostStruct.js.map