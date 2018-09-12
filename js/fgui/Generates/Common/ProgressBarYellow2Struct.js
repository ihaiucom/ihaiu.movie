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
        var ProgressBarYellow2Struct = /** @class */ (function (_super) {
            __extends(ProgressBarYellow2Struct, _super);
            function ProgressBarYellow2Struct() {
                return _super.call(this) || this;
            }
            ProgressBarYellow2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "ProgressBarYellow2"));
            };
            ProgressBarYellow2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChild("bar"));
                this.m_title = (this.getChild("title"));
            };
            ProgressBarYellow2Struct.URL = "ui://txcuvopdky79he";
            ProgressBarYellow2Struct.DependPackages = ["Common"];
            return ProgressBarYellow2Struct;
        }(fairygui.GProgressBar));
        Common.ProgressBarYellow2Struct = ProgressBarYellow2Struct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ProgressBarYellow2Struct.js.map