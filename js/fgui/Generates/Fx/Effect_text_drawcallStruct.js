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
        var Effect_text_drawcallStruct = /** @class */ (function (_super) {
            __extends(Effect_text_drawcallStruct, _super);
            function Effect_text_drawcallStruct() {
                return _super.call(this) || this;
            }
            Effect_text_drawcallStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_text_drawcall"));
            };
            Effect_text_drawcallStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t021 = this.getTransition("t021");
            };
            Effect_text_drawcallStruct.URL = "ui://9l36y1ki10sh5tk";
            Effect_text_drawcallStruct.DependPackages = ["Fx"];
            return Effect_text_drawcallStruct;
        }(fairygui.GComponent));
        Fx.Effect_text_drawcallStruct = Effect_text_drawcallStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_text_drawcallStruct.js.map