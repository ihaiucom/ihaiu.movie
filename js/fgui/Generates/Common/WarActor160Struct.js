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
        var WarActor160Struct = /** @class */ (function (_super) {
            __extends(WarActor160Struct, _super);
            function WarActor160Struct() {
                return _super.call(this) || this;
            }
            WarActor160Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "WarActor160"));
            };
            WarActor160Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            WarActor160Struct.URL = "ui://txcuvopddsh6t25p";
            WarActor160Struct.DependPackages = ["Common"];
            return WarActor160Struct;
        }(fairygui.GComponent));
        Common.WarActor160Struct = WarActor160Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarActor160Struct.js.map