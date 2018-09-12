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
    var Cooperation;
    (function (Cooperation) {
        var CooperationApplyStruct = /** @class */ (function (_super) {
            __extends(CooperationApplyStruct, _super);
            function CooperationApplyStruct() {
                return _super.call(this) || this;
            }
            CooperationApplyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationApply"));
            };
            CooperationApplyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_name = (this.getChild("name"));
                this.m_msg = (this.getChild("msg"));
                this.m_remind = (this.getChild("remind"));
                this.m_title = (this.getChild("title"));
                this.m_refuseBtn = (this.getChild("refuseBtn"));
                this.m_receiveBtn = (this.getChild("receiveBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_icon = (this.getChild("icon"));
            };
            CooperationApplyStruct.URL = "ui://k9ycebr5w3bv3";
            CooperationApplyStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationApplyStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationApplyStruct = CooperationApplyStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationApplyStruct.js.map