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
        var CrossAnima2Struct = /** @class */ (function (_super) {
            __extends(CrossAnima2Struct, _super);
            function CrossAnima2Struct() {
                return _super.call(this) || this;
            }
            CrossAnima2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "CrossAnima2"));
            };
            CrossAnima2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
            };
            CrossAnima2Struct.URL = "ui://oyge7e0tboch2a";
            CrossAnima2Struct.DependPackages = ["OpenAnima"];
            return CrossAnima2Struct;
        }(fairygui.GComponent));
        OpenAnima.CrossAnima2Struct = CrossAnima2Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CrossAnima2Struct.js.map