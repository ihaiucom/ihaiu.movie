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
        var WarCompletedConditionsStruct = /** @class */ (function (_super) {
            __extends(WarCompletedConditionsStruct, _super);
            function WarCompletedConditionsStruct() {
                return _super.call(this) || this;
            }
            WarCompletedConditionsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarCompletedConditions"));
            };
            WarCompletedConditionsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_star0 = (this.getChild("star0"));
                this.m_star1 = (this.getChild("star1"));
                this.m_title = (this.getChild("title"));
            };
            WarCompletedConditionsStruct.URL = "ui://s33x8418r8ay1fq";
            WarCompletedConditionsStruct.DependPackages = ["PfSkin"];
            return WarCompletedConditionsStruct;
        }(fairygui.GLabel));
        PfSkin.WarCompletedConditionsStruct = WarCompletedConditionsStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCompletedConditionsStruct.js.map