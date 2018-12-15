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
        var Touxiang44Struct = /** @class */ (function (_super) {
            __extends(Touxiang44Struct, _super);
            function Touxiang44Struct() {
                return _super.call(this) || this;
            }
            Touxiang44Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "touxiang44"));
            };
            Touxiang44Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang44Struct.URL = "ui://txcuvopddsh6t25l";
            Touxiang44Struct.DependPackages = ["Common"];
            return Touxiang44Struct;
        }(fairygui.GLabel));
        Common.Touxiang44Struct = Touxiang44Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang44Struct.js.map