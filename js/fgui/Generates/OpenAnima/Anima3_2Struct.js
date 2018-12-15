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
        var Anima3_2Struct = /** @class */ (function (_super) {
            __extends(Anima3_2Struct, _super);
            function Anima3_2Struct() {
                return _super.call(this) || this;
            }
            Anima3_2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "Anima3_2"));
            };
            Anima3_2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_player = (this.getChild("player"));
                this.m_dialog1 = (this.getChild("dialog1"));
                this.m_dialog2 = (this.getChild("dialog2"));
                this.m_dialog3 = (this.getChild("dialog3"));
                this.m_dialog4 = (this.getChild("dialog4"));
                this.m_t0 = this.getTransition("t0");
            };
            Anima3_2Struct.URL = "ui://oyge7e0ts7oa2t";
            Anima3_2Struct.DependPackages = ["OpenAnima"];
            return Anima3_2Struct;
        }(fairygui.GComponent));
        OpenAnima.Anima3_2Struct = Anima3_2Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Anima3_2Struct.js.map