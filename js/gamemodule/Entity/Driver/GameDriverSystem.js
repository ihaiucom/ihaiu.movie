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
    var GameDriverSystem = /** @class */ (function (_super) {
        __extends(GameDriverSystem, _super);
        function GameDriverSystem() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.updateList = [];
            _this.renderList = [];
            _this.secondList = [];
            _this.isUpdateTick = true;
            _this.isRenderTick = true;
            _this.isSecondsTick = true;
            return _this;
        }
        GameDriverSystem.prototype.start = function () {
            Games.GameDriver.registerDriver(this);
        };
        GameDriverSystem.prototype.stop = function () {
            Games.GameDriver.unregisterDriver(this);
        };
        GameDriverSystem.prototype.addComponent = function (driver) {
            driver.isUpdateTick && this.updateList.push(driver);
            driver.isRenderTick && this.renderList.push(driver);
            driver.isSecondsTick && this.secondList.push(driver);
        };
        GameDriverSystem.prototype.removeComponet = function (driver) {
            var index = -1;
            if (driver.isUpdateTick) {
                index = this.updateList.indexOf(driver);
                if (index != -1) {
                    this.updateList.splice(index, 1);
                }
            }
            if (driver.isRenderTick) {
                index = this.renderList.indexOf(driver);
                if (index != -1) {
                    this.renderList.splice(index, 1);
                }
            }
            if (driver.isSecondsTick) {
                index = this.secondList.indexOf(driver);
                if (index != -1) {
                    this.secondList.splice(index, 1);
                }
            }
        };
        GameDriverSystem.prototype.onUpdate = function () {
            this.updateList.forEach(function (value, index, array) {
                value.onUpdate();
            });
        };
        GameDriverSystem.prototype.onRender = function () {
            this.renderList.forEach(function (value, index, array) {
                value.onRender();
            });
        };
        GameDriverSystem.prototype.onSeconds = function () {
            this.secondList.forEach(function (value, index, array) {
                value.onSeconds();
            });
        };
        return GameDriverSystem;
    }(Games.ESystem));
    Games.GameDriverSystem = GameDriverSystem;
})(Games || (Games = {}));
//# sourceMappingURL=GameDriverSystem.js.map