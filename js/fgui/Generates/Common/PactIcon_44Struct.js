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
    var Common;
    (function (Common) {
        var PactIcon_44Struct = /** @class */ (function (_super) {
            __extends(PactIcon_44Struct, _super);
            function PactIcon_44Struct() {
                return _super.call(this) || this;
            }
            PactIcon_44Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PactIcon_44"));
            };
            PactIcon_44Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_showSpecial = this.getController("showSpecial");
                this.m_title = (this.getChild("title"));
                this.m_special = (this.getChild("special"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            PactIcon_44Struct.URL = "ui://txcuvopdth3bt23b";
            PactIcon_44Struct.DependPackages = ["Common"];
            return PactIcon_44Struct;
        }(fairygui.GButton));
        Common.PactIcon_44Struct = PactIcon_44Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_44Struct.js.map