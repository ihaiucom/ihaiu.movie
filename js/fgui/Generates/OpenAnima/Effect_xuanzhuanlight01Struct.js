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
    var OpenAnima;
    (function (OpenAnima) {
        var Effect_xuanzhuanlight01Struct = /** @class */ (function (_super) {
            __extends(Effect_xuanzhuanlight01Struct, _super);
            function Effect_xuanzhuanlight01Struct() {
                return _super.call(this) || this;
            }
            Effect_xuanzhuanlight01Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Effect_xuanzhuanlight01"));
            };
            Effect_xuanzhuanlight01Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t12 = this.getTransition("t12");
            };
            Effect_xuanzhuanlight01Struct.URL = "ui://oyge7e0tboch2g";
            Effect_xuanzhuanlight01Struct.DependPackages = ["OpenAnima"];
            return Effect_xuanzhuanlight01Struct;
        }(fairygui.GComponent));
        OpenAnima.Effect_xuanzhuanlight01Struct = Effect_xuanzhuanlight01Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_xuanzhuanlight01Struct.js.map