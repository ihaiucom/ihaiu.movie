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
    /** 奥斯卡场景 */
    var OscarStage = /** @class */ (function (_super) {
        __extends(OscarStage, _super);
        function OscarStage() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 是否激活 */
            _this._isActive = false;
            //---------------------------------------
            // 接口
            //---------------------------------------
            _this.isUpdateTick = true;
            _this.isRenderTick = true;
            return _this;
        }
        Object.defineProperty(OscarStage.prototype, "mainScene", {
            get: function () {
                if (!this._mainScene)
                    this._mainScene = new Games.OscarScene();
                return this._mainScene;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OscarStage.prototype, "isActive", {
            get: function () {
                return this._isActive;
            },
            set: function (val) {
                this._isActive = val;
                !val && this.disposeMainScene();
            },
            enumerable: true,
            configurable: true
        });
        OscarStage.prototype.disposeMainScene = function () {
            if (this._mainScene) {
                this._mainScene.dispose();
                this._mainScene = null;
            }
        };
        OscarStage.prototype.start = function () {
            Game.driverSystem.addComponent(this);
        };
        OscarStage.prototype.stop = function () {
            Game.driverSystem.removeComponet(this);
        };
        OscarStage.prototype.onRender = function () {
            if (this.isActive) {
                this.mainScene.onRender();
            }
        };
        OscarStage.prototype.onUpdate = function () {
            if (this.isActive) {
                this.mainScene.onUpdate();
            }
        };
        return OscarStage;
    }(Games.ESystem));
    Games.OscarStage = OscarStage;
})(Games || (Games = {}));
//# sourceMappingURL=OscarStage.js.map