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
        var OscarDanmuStruct = /** @class */ (function (_super) {
            __extends(OscarDanmuStruct, _super);
            function OscarDanmuStruct() {
                return _super.call(this) || this;
            }
            OscarDanmuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "OscarDanmu"));
            };
            OscarDanmuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
            };
            OscarDanmuStruct.URL = "ui://txcuvopdenjffp";
            OscarDanmuStruct.DependPackages = ["Common"];
            return OscarDanmuStruct;
        }(fairygui.GComponent));
        Common.OscarDanmuStruct = OscarDanmuStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=OscarDanmuStruct.js.map