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
        var Touxiang80Struct = /** @class */ (function (_super) {
            __extends(Touxiang80Struct, _super);
            function Touxiang80Struct() {
                return _super.call(this) || this;
            }
            Touxiang80Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "touxiang80"));
            };
            Touxiang80Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang80Struct.URL = "ui://txcuvopddsh6t25n";
            Touxiang80Struct.DependPackages = ["Common"];
            return Touxiang80Struct;
        }(fairygui.GLabel));
        Common.Touxiang80Struct = Touxiang80Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang80Struct.js.map