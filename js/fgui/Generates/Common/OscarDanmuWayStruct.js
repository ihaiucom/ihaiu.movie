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
        var OscarDanmuWayStruct = /** @class */ (function (_super) {
            __extends(OscarDanmuWayStruct, _super);
            function OscarDanmuWayStruct() {
                return _super.call(this) || this;
            }
            OscarDanmuWayStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "OscarDanmuWay"));
            };
            OscarDanmuWayStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_talkContent = (this.getChild("talkContent"));
            };
            OscarDanmuWayStruct.URL = "ui://txcuvopdenjffq";
            OscarDanmuWayStruct.DependPackages = ["Common"];
            return OscarDanmuWayStruct;
        }(fairygui.GComponent));
        Common.OscarDanmuWayStruct = OscarDanmuWayStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmuWayStruct.js.map