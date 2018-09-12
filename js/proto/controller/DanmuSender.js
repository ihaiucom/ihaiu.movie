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
     *  弹幕接口

     */
    var DanmuSender = /** @class */ (function (_super) {
        __extends(DanmuSender, _super);
        function DanmuSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.Danmu;
            return _this;
        }
        /**
         *  设置弹幕
         * @param id   颁奖场次 Id
         * @param msg   弹幕消息
         */
        DanmuSender.prototype.set = function (id, msg) {
            var req = new Proto.API.Danmu.setRequest();
            req.id = id;
            req.msg = msg;
            this.send(req);
        };
        /**
         *
         * @param id   颁奖场次 Id
         * @param time   时间戳
         */
        DanmuSender.prototype.get = function (id, time) {
            var req = new Proto.API.Danmu.getRequest();
            req.id = id;
            req.time = time;
            this.send(req);
        };
        return DanmuSender;
    }(Games.ProtoSender));
    Games.DanmuSender = DanmuSender;
})(Games || (Games = {}));
//# sourceMappingURL=DanmuSender.js.map