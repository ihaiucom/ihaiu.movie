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
        var CrossAnima1Struct = /** @class */ (function (_super) {
            __extends(CrossAnima1Struct, _super);
            function CrossAnima1Struct() {
                return _super.call(this) || this;
            }
            CrossAnima1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "CrossAnima1"));
            };
            CrossAnima1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
            };
            CrossAnima1Struct.URL = "ui://oyge7e0tboch1c";
            CrossAnima1Struct.DependPackages = ["OpenAnima"];
            return CrossAnima1Struct;
        }(fairygui.GComponent));
        OpenAnima.CrossAnima1Struct = CrossAnima1Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CrossAnima1Struct.js.map