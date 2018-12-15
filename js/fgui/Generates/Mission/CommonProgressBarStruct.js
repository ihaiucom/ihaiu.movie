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
    var Mission;
    (function (Mission) {
        var CommonProgressBarStruct = /** @class */ (function (_super) {
            __extends(CommonProgressBarStruct, _super);
            function CommonProgressBarStruct() {
                return _super.call(this) || this;
            }
            CommonProgressBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mission", "CommonProgressBar"));
            };
            CommonProgressBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            CommonProgressBarStruct.URL = "ui://33rn3ccx7wlga";
            CommonProgressBarStruct.DependPackages = ["Mission"];
            return CommonProgressBarStruct;
        }(fairygui.GProgressBar));
        Mission.CommonProgressBarStruct = CommonProgressBarStruct;
    })(Mission = fgui.Mission || (fgui.Mission = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CommonProgressBarStruct.js.map