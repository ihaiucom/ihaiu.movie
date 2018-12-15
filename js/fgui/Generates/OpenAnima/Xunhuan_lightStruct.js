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
        var Xunhuan_lightStruct = /** @class */ (function (_super) {
            __extends(Xunhuan_lightStruct, _super);
            function Xunhuan_lightStruct() {
                return _super.call(this) || this;
            }
            Xunhuan_lightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "xunhuan_light"));
            };
            Xunhuan_lightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t05 = this.getTransition("t05");
            };
            Xunhuan_lightStruct.URL = "ui://oyge7e0tboch1i";
            Xunhuan_lightStruct.DependPackages = ["OpenAnima"];
            return Xunhuan_lightStruct;
        }(fairygui.GComponent));
        OpenAnima.Xunhuan_lightStruct = Xunhuan_lightStruct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Xunhuan_lightStruct.js.map