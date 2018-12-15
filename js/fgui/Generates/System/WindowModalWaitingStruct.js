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
        var WindowModalWaitingStruct = /** @class */ (function (_super) {
            __extends(WindowModalWaitingStruct, _super);
            function WindowModalWaitingStruct() {
                return _super.call(this) || this;
            }
            WindowModalWaitingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("System", "WindowModalWaiting"));
            };
            WindowModalWaitingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            WindowModalWaitingStruct.URL = "ui://fiza9hgr5sasc";
            WindowModalWaitingStruct.DependPackages = ["System"];
            return WindowModalWaitingStruct;
        }(fairygui.GComponent));
        System.WindowModalWaitingStruct = WindowModalWaitingStruct;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowModalWaitingStruct.js.map