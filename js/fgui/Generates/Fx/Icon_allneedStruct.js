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
    var Fx;
    (function (Fx) {
        var Icon_allneedStruct = /** @class */ (function (_super) {
            __extends(Icon_allneedStruct, _super);
            function Icon_allneedStruct() {
                return _super.call(this) || this;
            }
            Icon_allneedStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "icon_allneed"));
            };
            Icon_allneedStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Icon_allneedStruct.URL = "ui://9l36y1kipldw55uw";
            Icon_allneedStruct.DependPackages = ["Fx"];
            return Icon_allneedStruct;
        }(fairygui.GComponent));
        Fx.Icon_allneedStruct = Icon_allneedStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Icon_allneedStruct.js.map