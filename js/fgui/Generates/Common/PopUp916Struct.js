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
        var PopUp916Struct = /** @class */ (function (_super) {
            __extends(PopUp916Struct, _super);
            function PopUp916Struct() {
                return _super.call(this) || this;
            }
            PopUp916Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "PopUp916"));
            };
            PopUp916Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            PopUp916Struct.URL = "ui://txcuvopdhh7659";
            PopUp916Struct.DependPackages = ["Common", "System"];
            return PopUp916Struct;
        }(fairygui.GComponent));
        Common.PopUp916Struct = PopUp916Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=PopUp916Struct.js.map