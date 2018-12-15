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
    var TextureInit = /** @class */ (function (_super) {
        __extends(TextureInit, _super);
        function TextureInit() {
            var _this = _super.call(this) || this;
            _this.rendererClassList = [];
            return _this;
        }
        TextureInit.prototype.setRenderList = function (rendererClasses) {
            this.rendererClassList = rendererClasses;
        };
        Object.defineProperty(TextureInit.prototype, "rendererClass", {
            //获取-随机渲染项
            get: function () {
                var rd = Random.range(0, this.rendererClassList.length);
                return this.rendererClassList[rd];
            },
            enumerable: true,
            configurable: true
        });
        TextureInit.prototype.initialize = function (emitter, particle) {
            if (particle.renderer == null) {
                particle.renderer = this.rendererClass["createInstance"]();
            }
            else {
                particle.renderer = particle.renderer;
            }
            if (emitter.parent) {
                emitter.parent.addChild(particle);
                particle.x = emitter.x;
                particle.y = emitter.y;
            }
        };
        return TextureInit;
    }(Games.Initializer));
    Games.TextureInit = TextureInit;
})(Games || (Games = {}));
//# sourceMappingURL=TextureInit.js.map