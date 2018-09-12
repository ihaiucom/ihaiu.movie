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
        var BtnRoadShowStruct = /** @class */ (function (_super) {
            __extends(BtnRoadShowStruct, _super);
            function BtnRoadShowStruct() {
                return _super.call(this) || this;
            }
            BtnRoadShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "btnRoadShow"));
            };
            BtnRoadShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_state = this.getController("state");
                this.m_labCost = (this.getChild("labCost"));
            };
            BtnRoadShowStruct.URL = "ui://s33x8418udqe1um";
            BtnRoadShowStruct.DependPackages = ["PfSkin"];
            return BtnRoadShowStruct;
        }(fairygui.GButton));
        PfSkin.BtnRoadShowStruct = BtnRoadShowStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnRoadShowStruct.js.map