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
        var Xunhuan_light002Struct = /** @class */ (function (_super) {
            __extends(Xunhuan_light002Struct, _super);
            function Xunhuan_light002Struct() {
                return _super.call(this) || this;
            }
            Xunhuan_light002Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "xunhuan_light002"));
            };
            Xunhuan_light002Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t2 = this.getTransition("t2");
            };
            Xunhuan_light002Struct.URL = "ui://oyge7e0tboch1w";
            Xunhuan_light002Struct.DependPackages = ["OpenAnima"];
            return Xunhuan_light002Struct;
        }(fairygui.GComponent));
        OpenAnima.Xunhuan_light002Struct = Xunhuan_light002Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Xunhuan_light002Struct.js.map