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
    //====================
    // 消息处理器
    //--------------------
    var ProtoHandler = /** @class */ (function (_super) {
        __extends(ProtoHandler, _super);
        function ProtoHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ProtoHandler;
    }(Games.ProtoBaseController));
    Games.ProtoHandler = ProtoHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ProtoHandler.js.map