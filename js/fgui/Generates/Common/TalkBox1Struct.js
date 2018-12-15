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
    var Common;
    (function (Common) {
        var TalkBox1Struct = /** @class */ (function (_super) {
            __extends(TalkBox1Struct, _super);
            function TalkBox1Struct() {
                return _super.call(this) || this;
            }
            TalkBox1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "TalkBox1"));
            };
            TalkBox1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TalkBox1Struct.URL = "ui://txcuvopdbdbft23c";
            TalkBox1Struct.DependPackages = ["Common"];
            return TalkBox1Struct;
        }(fairygui.GLabel));
        Common.TalkBox1Struct = TalkBox1Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkBox1Struct.js.map