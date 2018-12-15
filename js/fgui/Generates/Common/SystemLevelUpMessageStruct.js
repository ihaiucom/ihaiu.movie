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
        var SystemLevelUpMessageStruct = /** @class */ (function (_super) {
            __extends(SystemLevelUpMessageStruct, _super);
            function SystemLevelUpMessageStruct() {
                return _super.call(this) || this;
            }
            SystemLevelUpMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemLevelUpMessage"));
            };
            SystemLevelUpMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            SystemLevelUpMessageStruct.URL = "ui://txcuvopdfbam2t";
            SystemLevelUpMessageStruct.DependPackages = ["Common"];
            return SystemLevelUpMessageStruct;
        }(fairygui.GComponent));
        Common.SystemLevelUpMessageStruct = SystemLevelUpMessageStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemLevelUpMessageStruct.js.map