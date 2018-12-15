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
        var TalkBox2Struct = /** @class */ (function (_super) {
            __extends(TalkBox2Struct, _super);
            function TalkBox2Struct() {
                return _super.call(this) || this;
            }
            TalkBox2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("OpenAnima", "TalkBox2"));
            };
            TalkBox2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_position_arrow = this.getController("c_position_arrow");
                this.m_title = (this.getChild("title"));
            };
            TalkBox2Struct.URL = "ui://oyge7e0tboch2q";
            TalkBox2Struct.DependPackages = ["OpenAnima"];
            return TalkBox2Struct;
        }(fairygui.GLabel));
        OpenAnima.TalkBox2Struct = TalkBox2Struct;
    })(OpenAnima = fgui.OpenAnima || (fgui.OpenAnima = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkBox2Struct.js.map