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
        var WarSurveyInfWomanStruct = /** @class */ (function (_super) {
            __extends(WarSurveyInfWomanStruct, _super);
            function WarSurveyInfWomanStruct() {
                return _super.call(this) || this;
            }
            WarSurveyInfWomanStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSurveyInfWoman"));
            };
            WarSurveyInfWomanStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_sex = (this.getChild("sex"));
                this.m_title = (this.getChild("title"));
            };
            WarSurveyInfWomanStruct.URL = "ui://s33x8418znuj1f4";
            WarSurveyInfWomanStruct.DependPackages = ["PfSkin"];
            return WarSurveyInfWomanStruct;
        }(fairygui.GLabel));
        PfSkin.WarSurveyInfWomanStruct = WarSurveyInfWomanStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSurveyInfWomanStruct.js.map