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
        var StreetLevelUpItemStruct = /** @class */ (function (_super) {
            __extends(StreetLevelUpItemStruct, _super);
            function StreetLevelUpItemStruct() {
                return _super.call(this) || this;
            }
            StreetLevelUpItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "StreetLevelUpItem"));
            };
            StreetLevelUpItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
                this.m_name = (this.getChild("name"));
            };
            StreetLevelUpItemStruct.URL = "ui://txcuvopdl40ut23c";
            StreetLevelUpItemStruct.DependPackages = ["Common", "Building"];
            return StreetLevelUpItemStruct;
        }(fairygui.GComponent));
        Common.StreetLevelUpItemStruct = StreetLevelUpItemStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetLevelUpItemStruct.js.map