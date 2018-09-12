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
    var System;
    (function (System) {
        var SystemAlertMessageStruct = /** @class */ (function (_super) {
            __extends(SystemAlertMessageStruct, _super);
            function SystemAlertMessageStruct() {
                return _super.call(this) || this;
            }
            SystemAlertMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemAlertMessage"));
            };
            SystemAlertMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_content = (this.getChild("content"));
                this.m_title = (this.getChild("title"));
                this.m_bgCom = (this.getChild("bgCom"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            SystemAlertMessageStruct.URL = "ui://fiza9hgrgdopy";
            SystemAlertMessageStruct.DependPackages = ["System", "Common"];
            return SystemAlertMessageStruct;
        }(fairygui.GComponent));
        System.SystemAlertMessageStruct = SystemAlertMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemAlertMessageStruct.js.map