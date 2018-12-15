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
        var BtnRoadShowStruct = /** @class */ (function (_super) {
            __extends(BtnRoadShowStruct, _super);
            function BtnRoadShowStruct() {
                return _super.call(this) || this;
            }
            BtnRoadShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Market", "btnRoadShow"));
            };
            BtnRoadShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_labCost = (this.getChild("labCost"));
                this.m_t0 = this.getTransition("t0");
            };
            BtnRoadShowStruct.URL = "ui://p7g5z54adm319x";
            BtnRoadShowStruct.DependPackages = ["Market", "Common"];
            return BtnRoadShowStruct;
        }(fairygui.GButton));
        Market.BtnRoadShowStruct = BtnRoadShowStruct;
    })(Market = fgui.Market || (fgui.Market = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnRoadShowStruct.js.map