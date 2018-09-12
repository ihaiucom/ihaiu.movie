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
        var WarSurveyInfManReqStruct = /** @class */ (function (_super) {
            __extends(WarSurveyInfManReqStruct, _super);
            function WarSurveyInfManReqStruct() {
                return _super.call(this) || this;
            }
            WarSurveyInfManReqStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSurveyInfManReq"));
            };
            WarSurveyInfManReqStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarSurveyInfManReqStruct.URL = "ui://s33x8418r8ay1fc";
            WarSurveyInfManReqStruct.DependPackages = ["PfSkin"];
            return WarSurveyInfManReqStruct;
        }(fairygui.GLabel));
        PfSkin.WarSurveyInfManReqStruct = WarSurveyInfManReqStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSurveyInfManReqStruct.js.map