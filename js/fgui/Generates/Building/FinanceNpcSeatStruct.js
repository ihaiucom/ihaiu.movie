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
    var Building;
    (function (Building) {
        var FinanceNpcSeatStruct = /** @class */ (function (_super) {
            __extends(FinanceNpcSeatStruct, _super);
            function FinanceNpcSeatStruct() {
                return _super.call(this) || this;
            }
            FinanceNpcSeatStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Building", "FinanceNpcSeat"));
            };
            FinanceNpcSeatStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            FinanceNpcSeatStruct.URL = "ui://d062jvkguju9e14i";
            FinanceNpcSeatStruct.DependPackages = ["Building"];
            return FinanceNpcSeatStruct;
        }(fairygui.GComponent));
        Building.FinanceNpcSeatStruct = FinanceNpcSeatStruct;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FinanceNpcSeatStruct.js.map