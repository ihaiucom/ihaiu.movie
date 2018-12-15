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
        var SystemSelectItemMessageStruct = /** @class */ (function (_super) {
            __extends(SystemSelectItemMessageStruct, _super);
            function SystemSelectItemMessageStruct() {
                return _super.call(this) || this;
            }
            SystemSelectItemMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemSelectItemMessage"));
            };
            SystemSelectItemMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_assetList = (this.getChild("assetList"));
                this.m_commonPanel = (this.getChild("commonPanel"));
                this.m_confirmBtn = (this.getChild("confirmBtn"));
            };
            SystemSelectItemMessageStruct.URL = "ui://txcuvopdfwl4t261";
            SystemSelectItemMessageStruct.DependPackages = ["Common"];
            return SystemSelectItemMessageStruct;
        }(fairygui.GComponent));
        Common.SystemSelectItemMessageStruct = SystemSelectItemMessageStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemSelectItemMessageStruct.js.map