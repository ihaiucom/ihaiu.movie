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
        var SystemAddFansMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAddFansMessageStruct, _super);
            function SystemAddFansMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAddFansMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "SystemAddFansMessage"));
            };
            SystemAddFansMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_content = (this.getChild("content"));
                this.m_progress = (this.getChild("progress"));
                this.m_btnClose = (this.getChild("btnClose"));
                this.m_t0 = this.getTransition("t0");
            };
            SystemAddFansMessageStruct.URL = "ui://txcuvopdfbam2m";
            SystemAddFansMessageStruct.DependPackages = ["Common"];
            return SystemAddFansMessageStruct;
        }(fairygui.GComponent));
        Common.SystemAddFansMessageStruct = SystemAddFansMessageStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAddFansMessageStruct.js.map