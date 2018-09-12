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
        var SystemToastMessageStruct = /** @class */ (function (_super) {
            __extends(SystemToastMessageStruct, _super);
            function SystemToastMessageStruct() {
                return _super.call(this) || this;
            }
            SystemToastMessageStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemToastMessage"));
            };
            SystemToastMessageStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_t0 = this.getTransition("t0");
            };
            SystemToastMessageStruct.URL = "ui://fiza9hgrgdopk";
            SystemToastMessageStruct.DependPackages = ["System"];
            return SystemToastMessageStruct;
        }(fairygui.GLabel));
        System.SystemToastMessageStruct = SystemToastMessageStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastMessageStruct.js.map