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
var Games;
(function (Games) {
    var OscarScene = /** @class */ (function (_super) {
        __extends(OscarScene, _super);
        function OscarScene() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(OscarScene.prototype, "mainView", {
            get: function () {
                if (!this._mainView) {
                    this._mainView = fgui.PfSkin.OscarAnim.createInstance();
                    this._mainView.mainScene = this;
                }
                return this._mainView;
            },
            enumerable: true,
            configurable: true
        });
        return OscarScene;
    }(Games.Scene));
    Games.OscarScene = OscarScene;
})(Games || (Games = {}));
//# sourceMappingURL=OscarScene.js.map