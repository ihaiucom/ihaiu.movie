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
        var SignPactIcon_44Struct = /** @class */ (function (_super) {
            __extends(SignPactIcon_44Struct, _super);
            function SignPactIcon_44Struct() {
                return _super.call(this) || this;
            }
            SignPactIcon_44Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "SignPactIcon_44"));
            };
            SignPactIcon_44Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            SignPactIcon_44Struct.URL = "ui://9qou8rs7l1hm13";
            SignPactIcon_44Struct.DependPackages = ["Activity", "WarMovie", "Common"];
            return SignPactIcon_44Struct;
        }(fairygui.GButton));
        Activity.SignPactIcon_44Struct = SignPactIcon_44Struct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SignPactIcon_44Struct.js.map