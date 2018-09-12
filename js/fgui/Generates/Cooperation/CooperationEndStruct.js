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
        var CooperationEndStruct = /** @class */ (function (_super) {
            __extends(CooperationEndStruct, _super);
            function CooperationEndStruct() {
                return _super.call(this) || this;
            }
            CooperationEndStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Cooperation", "CooperationEnd"));
            };
            CooperationEndStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_text1 = (this.getChild("text1"));
                this.m_text2 = (this.getChild("text2"));
                this.m_title = (this.getChild("title"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_sureBtn = (this.getChild("sureBtn"));
            };
            CooperationEndStruct.URL = "ui://k9ycebr5w3bv2";
            CooperationEndStruct.DependPackages = ["Cooperation", "Common"];
            return CooperationEndStruct;
        }(fairygui.GComponent));
        Cooperation.CooperationEndStruct = CooperationEndStruct;
    })(Cooperation = fgui.Cooperation || (fgui.Cooperation = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationEndStruct.js.map