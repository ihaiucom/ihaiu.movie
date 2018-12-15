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
        var Effect_show_0077Struct = /** @class */ (function (_super) {
            __extends(Effect_show_0077Struct, _super);
            function Effect_show_0077Struct() {
                return _super.call(this) || this;
            }
            Effect_show_0077Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_show_0077"));
            };
            Effect_show_0077Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_show_0077Struct.URL = "ui://9l36y1kijikq5ue";
            Effect_show_0077Struct.DependPackages = ["Fx"];
            return Effect_show_0077Struct;
        }(fairygui.GComponent));
        Fx.Effect_show_0077Struct = Effect_show_0077Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_show_0077Struct.js.map