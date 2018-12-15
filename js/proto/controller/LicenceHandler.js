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
    // 消息处理器 -- 账号
    //--------------------
    var LicenceHandler = /** @class */ (function (_super) {
        __extends(LicenceHandler, _super);
        function LicenceHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LicenceHandler;
    }(Games.ProtoHandler));
    Games.LicenceHandler = LicenceHandler;
})(Games || (Games = {}));
//# sourceMappingURL=LicenceHandler.js.map