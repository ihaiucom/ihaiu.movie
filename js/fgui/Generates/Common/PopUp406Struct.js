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
        var PopUp406Struct = /** @class */ (function (_super) {
            __extends(PopUp406Struct, _super);
            function PopUp406Struct() {
                return _super.call(this) || this;
            }
            PopUp406Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PopUp406"));
            };
            PopUp406Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            PopUp406Struct.URL = "ui://txcuvopdhh7657";
            PopUp406Struct.DependPackages = ["Common"];
            return PopUp406Struct;
        }(fairygui.GComponent));
        Common.PopUp406Struct = PopUp406Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUp406Struct.js.map