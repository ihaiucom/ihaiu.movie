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
    var RoadShowStage = /** @class */ (function (_super) {
        __extends(RoadShowStage, _super);
        function RoadShowStage() {
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
        Object.defineProperty(RoadShowStage.prototype, "mainScene", {
            get: function () {
                if (!this._mainScene)
                    this._mainScene = new Games.RoadShowScene();
                return this._mainScene;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RoadShowStage.prototype, "isActive", {
            get: function () {
                return this._isActive;
            },
            set: function (val) {
                this._isActive = val;
                !val && this.delayDisposeMainScene();
            },
            enumerable: true,
            configurable: true
        });
        RoadShowStage.prototype.delayDisposeMainScene = function () {
            var _this = this;
            var updateDTime = Games.GameDriver.time.updateTime.deltaTime * 1000;
            setTimeout(function () {
                _this.disposeMainScene();
            }, updateDTime);
        };
        RoadShowStage.prototype.disposeMainScene = function () {
            if (this._mainScene) {
                this._mainScene.dispose();
                this._mainScene = null;
            }
        };
        RoadShowStage.prototype.start = function () {
            Game.driverSystem.addComponent(this);
        };
        RoadShowStage.prototype.stop = function () {
            Game.driverSystem.removeComponet(this);
        };
        RoadShowStage.prototype.onRender = function () {
            if (this.isActive) {
                this.mainScene.onRender();
            }
        };
        RoadShowStage.prototype.onUpdate = function () {
            if (this.isActive) {
                this.mainScene.onUpdate();
            }
        };
        return RoadShowStage;
    }(Games.ESystem));
    Games.RoadShowStage = RoadShowStage;
})(Games || (Games = {}));
//# sourceMappingURL=RoadShowStage.js.map