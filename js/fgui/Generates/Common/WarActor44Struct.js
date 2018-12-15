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
        var WarActor44Struct = /** @class */ (function (_super) {
            __extends(WarActor44Struct, _super);
            function WarActor44Struct() {
                return _super.call(this) || this;
            }
            WarActor44Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "WarActor44"));
            };
            WarActor44Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            WarActor44Struct.URL = "ui://txcuvopddsh6t25q";
            WarActor44Struct.DependPackages = ["Common"];
            return WarActor44Struct;
        }(fairygui.GComponent));
        Common.WarActor44Struct = WarActor44Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActor44Struct.js.map