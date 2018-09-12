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
        var SystemToastMessage = /** @class */ (function (_super) {
            __extends(SystemToastMessage, _super);
            function SystemToastMessage() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SystemToastMessage.prototype.play = function (txt, onComplete) {
                if (this._onCompleteHandler) {
                    this._onCompleteHandler.recover();
                }
                this._onCompleteHandler = onComplete;
                this.m_title.m_title.text = txt;
                Games.MenuLayer.floatMsg.addChild(this);
                centerScreen(this);
                this.m_t0.play(Handler.create(this, this.onComplete));
            };
            SystemToastMessage.prototype.onComplete = function () {
                this.removeFromParent();
                if (this._onCompleteHandler) {
                    this._onCompleteHandler.runWith(this);
                    this._onCompleteHandler.recover();
                    this._onCompleteHandler = null;
                }
            };
            return SystemToastMessage;
        }(System.SystemToastMessageStruct));
        System.SystemToastMessage = SystemToastMessage;
    })(System = fgui.System || (fgui.System = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SystemToastMessage.js.map