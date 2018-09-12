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
        var PactIcon_44Struct = /** @class */ (function (_super) {
            __extends(PactIcon_44Struct, _super);
            function PactIcon_44Struct() {
                return _super.call(this) || this;
            }
            PactIcon_44Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "PactIcon_44"));
            };
            PactIcon_44Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            PactIcon_44Struct.URL = "ui://9qou8rs7l1hm14";
            PactIcon_44Struct.DependPackages = ["Activity", "WarMovie", "Common"];
            return PactIcon_44Struct;
        }(fairygui.GButton));
        Activity.PactIcon_44Struct = PactIcon_44Struct;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_44Struct.js.map