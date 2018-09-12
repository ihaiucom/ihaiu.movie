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
        var SystemGetItemMessageStruct = /** @class */ (function (_super) {
            __extends(SystemGetItemMessageStruct, _super);
            function SystemGetItemMessageStruct() {
                return _super.call(this) || this;
            }
            SystemGetItemMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemGetItemMessage"));
            };
            SystemGetItemMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listItem = (this.getChild("listItem"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
                this.m_t2 = this.getTransition("t2");
            };
            SystemGetItemMessageStruct.URL = "ui://txcuvopdmu1z2b";
            SystemGetItemMessageStruct.DependPackages = ["Common", "PlayerInfo", "Fx"];
            return SystemGetItemMessageStruct;
        }(fairygui.GComponent));
        Common.SystemGetItemMessageStruct = SystemGetItemMessageStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemGetItemMessageStruct.js.map