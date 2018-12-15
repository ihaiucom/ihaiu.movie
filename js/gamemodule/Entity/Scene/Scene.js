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
    /** 场景 */
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // 背景层
            _this.backgroundLayer = new Sprite();
            // 内容后景层
            _this.contentBackLayer = new Sprite();
            // 内容层
            _this.contentLayer = new Sprite();
            //内容前景层
            _this.contentFrontLayer = new Sprite();
            // UI层
            _this.uiLayer = new Sprite();
            /**场景单位列表 */
            _this.unitList = [];
            //宽高
            _this._width = 0;
            _this._height = 0;
            return _this;
        }
        Object.defineProperty(Scene.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (val) {
                this._width = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (val) {
                this._height = val;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.clearUnits();
        };
        Scene.prototype.addUnit = function (unit) {
            this.unitList.push(unit);
        };
        Scene.prototype.getUnit = function (uid) {
            return this.unitList.findOne(function (value) {
                return value.unit.uid == uid;
            });
        };
        Scene.prototype.clearUnits = function (isDestroy) {
            if (isDestroy === void 0) { isDestroy = true; }
            if (isDestroy) {
                for (var i = 0; i < this.unitList.length; i++) {
                    this.unitList[i].dispose();
                }
            }
            this.unitList.length = 0;
        };
        Scene.prototype.removeUnit = function (uid) {
            for (var i = 0; i < this.unitList.length; i++) {
                var unit = this.unitList[i];
                if (unit.unit.uid == uid) {
                    this.unitList.splice(i, 1)[0].dispose();
                }
            }
        };
        Scene.prototype.getUnitById = function (id) {
            throw "NoImplement";
        };
        Scene.prototype.onUpdate = function () {
            _super.prototype.onUpdate.call(this);
            for (var i = this.unitList.length - 1; i >= 0; i--) {
                this.unitList[i].onUpdate();
            }
        };
        Scene.prototype.onRender = function () {
            _super.prototype.onRender.call(this);
            for (var i = this.unitList.length - 1; i >= 0; i--) {
                this.unitList[i].onRender();
            }
        };
        Scene.prototype.onSeconds = function () {
            _super.prototype.onSeconds.call(this);
            for (var i = this.unitList.length - 1; i >= 0; i--) {
                this.unitList[i].onSeconds();
            }
        };
        return Scene;
    }(Games.EEntity));
    Games.Scene = Scene;
})(Games || (Games = {}));
//# sourceMappingURL=Scene.js.map