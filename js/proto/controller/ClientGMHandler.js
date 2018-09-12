/////////////////////////////////////
// ihaiu.ExportProto生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
    /**
     *
     */
    var ClientGMHandler = /** @class */ (function (_super) {
        __extends(ClientGMHandler, _super);
        function ClientGMHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.ClientGM;
            return _this;
        }
        /**
         *  测试
         */
        ClientGMHandler.prototype.gmTest = function (msg) {
        };
        /**
         *  请求奥斯卡数据
         */
        ClientGMHandler.prototype.gmUpdateOscar = function (msg) {
        };
        return ClientGMHandler;
    }(Games.ProtoHandler));
    Games.ClientGMHandler = ClientGMHandler;
})(Games || (Games = {}));
//# sourceMappingURL=ClientGMHandler.js.map