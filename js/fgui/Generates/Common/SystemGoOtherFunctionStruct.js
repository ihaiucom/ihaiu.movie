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
        var SystemGoOtherFunctionStruct = /** @class */ (function (_super) {
            __extends(SystemGoOtherFunctionStruct, _super);
            function SystemGoOtherFunctionStruct() {
                return _super.call(this) || this;
            }
            SystemGoOtherFunctionStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemGoOtherFunction"));
            };
            SystemGoOtherFunctionStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_des = (this.getChild("des"));
                this.m_list = (this.getChild("list"));
                this.m_closeFullBtn = (this.getChild("closeFullBtn"));
                this.m_enbaleBtn = (this.getChild("enbaleBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
            };
            SystemGoOtherFunctionStruct.URL = "ui://txcuvopdcwjyaw";
            SystemGoOtherFunctionStruct.DependPackages = ["Common"];
            return SystemGoOtherFunctionStruct;
        }(fairygui.GComponent));
        Common.SystemGoOtherFunctionStruct = SystemGoOtherFunctionStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGoOtherFunctionStruct.js.map