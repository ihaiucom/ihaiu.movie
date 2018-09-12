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
    var TrailEmitter = /** @class */ (function (_super) {
        __extends(TrailEmitter, _super);
        function TrailEmitter() {
            var _this = _super.call(this) || this;
            _this.renderClassList = [];
            _this.displayIndex = -1;
            return _this;
        }
        TrailEmitter.prototype.setRenderList = function (rendererClasses) {
            this.renderClassList = rendererClasses;
            this.setup();
        };
        TrailEmitter.prototype.setRenderer = function (rendererClass) {
            this.renderClassList.push(rendererClass);
            this.setup();
        };
        TrailEmitter.prototype.setup = function () {
            this.emitNum = 2;
            var textureInit = new Games.TextureInit();
            textureInit.setRenderList(this.renderClassList);
            this.addInitializer(textureInit);
            this.addInitializer(new Games.LiftTimeInit(0.6, 1.2));
            this.addInitializer(new Games.RotationInit(0, 360));
            this.addInitializer(new Games.ScaleInit(0.6, 0.8));
            this.addActoiner(new Games.Age());
            this.addActoiner(new Games.Fade(1, 0));
            this.addActoiner(new Games.Move(30, 30));
        };
        TrailEmitter.prototype.showOn = function (root, displayIndex) {
            if (displayIndex === void 0) { displayIndex = -1; }
            if (root instanceof laya.display.Sprite) {
                this.root = root;
            }
            else {
                this.root = root.displayObject;
            }
            this.displayIndex = displayIndex;
            this.checkShow();
        };
        TrailEmitter.prototype.checkShow = function () {
            if (this.root) {
                if (this.displayIndex >= 0) {
                    this.root.addChildAt(this, this.displayIndex);
                }
                else {
                    this.root.addChild(this);
                }
            }
        };
        return TrailEmitter;
    }(Games.ParticleEmitter2D));
    Games.TrailEmitter = TrailEmitter;
})(Games || (Games = {}));
//# sourceMappingURL=TrailEmitter.js.map