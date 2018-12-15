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
        var Effect_propagate_02_textStruct = /** @class */ (function (_super) {
            __extends(Effect_propagate_02_textStruct, _super);
            function Effect_propagate_02_textStruct() {
                return _super.call(this) || this;
            }
            Effect_propagate_02_textStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_propagate_02_text"));
            };
            Effect_propagate_02_textStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_propagate_02_textStruct.URL = "ui://9l36y1ki8r1v5ts";
            Effect_propagate_02_textStruct.DependPackages = ["Fx"];
            return Effect_propagate_02_textStruct;
        }(fairygui.GComponent));
        Fx.Effect_propagate_02_textStruct = Effect_propagate_02_textStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_propagate_02_textStruct.js.map