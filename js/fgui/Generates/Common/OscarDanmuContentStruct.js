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
        var OscarDanmuContentStruct = /** @class */ (function (_super) {
            __extends(OscarDanmuContentStruct, _super);
            function OscarDanmuContentStruct() {
                return _super.call(this) || this;
            }
            OscarDanmuContentStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "OscarDanmuContent"));
            };
            OscarDanmuContentStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
            };
            OscarDanmuContentStruct.URL = "ui://txcuvopdenjffr";
            OscarDanmuContentStruct.DependPackages = ["Common"];
            return OscarDanmuContentStruct;
        }(fairygui.GLabel));
        Common.OscarDanmuContentStruct = OscarDanmuContentStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmuContentStruct.js.map