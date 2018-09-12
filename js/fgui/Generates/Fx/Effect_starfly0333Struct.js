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
        var Effect_starfly0333Struct = /** @class */ (function (_super) {
            __extends(Effect_starfly0333Struct, _super);
            function Effect_starfly0333Struct() {
                return _super.call(this) || this;
            }
            Effect_starfly0333Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_starfly0333"));
            };
            Effect_starfly0333Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t2 = this.getTransition("t2");
            };
            Effect_starfly0333Struct.URL = "ui://9l36y1kig8v8kj";
            Effect_starfly0333Struct.DependPackages = ["Fx"];
            return Effect_starfly0333Struct;
        }(fairygui.GComponent));
        Fx.Effect_starfly0333Struct = Effect_starfly0333Struct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_starfly0333Struct.js.map