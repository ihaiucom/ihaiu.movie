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
    var GameDefaultBridger = /** @class */ (function (_super) {
        __extends(GameDefaultBridger, _super);
        function GameDefaultBridger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.jsClassName = "GameDefaultBridger";
            return _this;
        }
        GameDefaultBridger.prototype.handler = function (data, callback) {
            try {
                eval(data);
            }
            catch (error) {
            }
        };
        return GameDefaultBridger;
    }(Games.GameBridger));
    Games.GameDefaultBridger = GameDefaultBridger;
})(Games || (Games = {}));
//# sourceMappingURL=GameDefaultBridger.js.map