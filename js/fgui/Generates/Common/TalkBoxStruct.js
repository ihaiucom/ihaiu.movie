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
        var TalkBoxStruct = /** @class */ (function (_super) {
            __extends(TalkBoxStruct, _super);
            function TalkBoxStruct() {
                return _super.call(this) || this;
            }
            TalkBoxStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "TalkBox"));
            };
            TalkBoxStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            TalkBoxStruct.URL = "ui://txcuvopdi24u3d";
            TalkBoxStruct.DependPackages = ["Common"];
            return TalkBoxStruct;
        }(fairygui.GLabel));
        Common.TalkBoxStruct = TalkBoxStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TalkBoxStruct.js.map