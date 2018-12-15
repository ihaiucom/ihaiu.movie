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
        var PactIcon_80Struct = /** @class */ (function (_super) {
            __extends(PactIcon_80Struct, _super);
            function PactIcon_80Struct() {
                return _super.call(this) || this;
            }
            PactIcon_80Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PactIcon_80"));
            };
            PactIcon_80Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_star = this.getController("c_visible_star");
                this.m_c_title_color = this.getController("c_title_color");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_star = (this.getChild("star"));
            };
            PactIcon_80Struct.URL = "ui://txcuvopdyg86t23h";
            PactIcon_80Struct.DependPackages = ["Common"];
            return PactIcon_80Struct;
        }(fairygui.GButton));
        Common.PactIcon_80Struct = PactIcon_80Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PactIcon_80Struct.js.map