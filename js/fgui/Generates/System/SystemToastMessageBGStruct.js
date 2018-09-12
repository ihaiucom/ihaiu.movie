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
        var SystemToastMessageBGStruct = /** @class */ (function (_super) {
            __extends(SystemToastMessageBGStruct, _super);
            function SystemToastMessageBGStruct() {
                return _super.call(this) || this;
            }
            SystemToastMessageBGStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "SystemToastMessageBG"));
            };
            SystemToastMessageBGStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            SystemToastMessageBGStruct.URL = "ui://fiza9hgrfvpy1a";
            SystemToastMessageBGStruct.DependPackages = ["System"];
            return SystemToastMessageBGStruct;
        }(fairygui.GComponent));
        System.SystemToastMessageBGStruct = SystemToastMessageBGStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastMessageBGStruct.js.map