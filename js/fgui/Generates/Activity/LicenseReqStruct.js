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
    var Activity;
    (function (Activity) {
        var LicenseReqStruct = /** @class */ (function (_super) {
            __extends(LicenseReqStruct, _super);
            function LicenseReqStruct() {
                return _super.call(this) || this;
            }
            LicenseReqStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "LicenseReq"));
            };
            LicenseReqStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_fxCt = this.getController("fxCt");
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_bottomTip1 = (this.getChild("bottomTip1"));
                this.m_BottomTip2 = (this.getChild("BottomTip2"));
                this.m_timeTip = (this.getChild("timeTip"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_dialog = (this.getChild("dialog"));
                this.m_fxBase = (this.getChild("fxBase"));
                this.m_fx = (this.getChild("fx"));
            };
            LicenseReqStruct.URL = "ui://9qou8rs7ac07w";
            LicenseReqStruct.DependPackages = ["Activity", "WarMovie", "Fx"];
            return LicenseReqStruct;
        }(fairygui.GComponent));
        Activity.LicenseReqStruct = LicenseReqStruct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LicenseReqStruct.js.map