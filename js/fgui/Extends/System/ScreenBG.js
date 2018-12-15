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
        var ScreenBG = /** @class */ (function (_super) {
            __extends(ScreenBG, _super);
            function ScreenBG() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ScreenBG.prototype.onWindowWillShow = function () {
                this.setScreenSize();
                Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            ScreenBG.prototype.onWindowWillHide = function () {
                Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
            };
            ScreenBG.prototype.setScreenSize = function () {
                autoScreenSize(this, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
            };
            return ScreenBG;
        }(System.ScreenBGStruct));
        System.ScreenBG = ScreenBG;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ScreenBG.js.map