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
    var GM;
    (function (GM) {
        var GMTickPageStruct = /** @class */ (function (_super) {
            __extends(GMTickPageStruct, _super);
            function GMTickPageStruct() {
                return _super.call(this) || this;
            }
            GMTickPageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GM", "GMTickPage"));
            };
            GMTickPageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_refreshButton = (this.getChild("refreshButton"));
                this.m_clearButton = (this.getChild("clearButton"));
                this.m_sortCostTimeToalButton = (this.getChild("sortCostTimeToalButton"));
                this.m_sorteEvaluateButton = (this.getChild("sorteEvaluateButton"));
                this.m_sorteCallNumButton = (this.getChild("sorteCallNumButton"));
                this.m_sorteCostTimeButton = (this.getChild("sorteCostTimeButton"));
            };
            GMTickPageStruct.URL = "ui://ujw583yp7h8s12";
            GMTickPageStruct.DependPackages = ["GM"];
            return GMTickPageStruct;
        }(fairygui.GComponent));
        GM.GMTickPageStruct = GMTickPageStruct;
    })(GM = fgui.GM || (fgui.GM = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GMTickPageStruct.js.map