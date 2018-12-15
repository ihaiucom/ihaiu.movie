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
        var CompletedConditionsStruct = /** @class */ (function (_super) {
            __extends(CompletedConditionsStruct, _super);
            function CompletedConditionsStruct() {
                return _super.call(this) || this;
            }
            CompletedConditionsStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "CompletedConditions"));
            };
            CompletedConditionsStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_colorControl = this.getController("colorControl");
                this.m_tip = (this.getChild("tip"));
            };
            CompletedConditionsStruct.URL = "ui://y6ozucp1r0zd5a";
            CompletedConditionsStruct.DependPackages = ["WarMovie"];
            return CompletedConditionsStruct;
        }(fairygui.GComponent));
        WarMovie.CompletedConditionsStruct = CompletedConditionsStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CompletedConditionsStruct.js.map