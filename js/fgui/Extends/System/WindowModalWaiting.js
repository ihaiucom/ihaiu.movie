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
        var WindowModalWaiting = /** @class */ (function (_super) {
            __extends(WindowModalWaiting, _super);
            function WindowModalWaiting() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WindowModalWaiting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.setScreenSize();
            };
            WindowModalWaiting.prototype.setScreenSize = function () {
                this.width = ScreenSetting.screenWidth;
                this.height = ScreenSetting.screenHeight;
            };
            WindowModalWaiting.prototype.onLayoutModelWaitPane = function () {
                this.setScreenSize();
            };
            return WindowModalWaiting;
        }(System.WindowModalWaitingStruct));
        System.WindowModalWaiting = WindowModalWaiting;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WindowModalWaiting.js.map