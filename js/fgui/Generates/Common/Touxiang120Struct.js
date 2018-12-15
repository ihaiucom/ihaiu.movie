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
        var Touxiang120Struct = /** @class */ (function (_super) {
            __extends(Touxiang120Struct, _super);
            function Touxiang120Struct() {
                return _super.call(this) || this;
            }
            Touxiang120Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "touxiang120"));
            };
            Touxiang120Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            Touxiang120Struct.URL = "ui://txcuvopddsh6t25i";
            Touxiang120Struct.DependPackages = ["Common"];
            return Touxiang120Struct;
        }(fairygui.GLabel));
        Common.Touxiang120Struct = Touxiang120Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Touxiang120Struct.js.map