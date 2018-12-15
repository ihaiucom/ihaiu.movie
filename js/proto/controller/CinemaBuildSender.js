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
    // 消息发送器
    //--------------------
    var CinemaBuildSender = /** @class */ (function (_super) {
        __extends(CinemaBuildSender, _super);
        function CinemaBuildSender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.CinemaBuild;
            return _this;
        }
        /**
         * 扩建楼层
         * @param floor
         */
        CinemaBuildSender.prototype.ExtendFloor = function (floor) {
            var reqData = new Proto.API.CinemaBuild.ExtendFloorRequest();
            reqData.floor = floor;
            this.send(reqData);
            console.log("ExtendFloor -> " + floor);
        };
        /**
         * 建造房间
         * @param floor
         * @param roomType
         */
        CinemaBuildSender.prototype.BuildRoom = function (floor, roomType) {
            var reqData = new Proto.API.CinemaBuild.BuildRoomRequest();
            reqData.floor = floor;
            reqData.roomType = roomType;
            this.send(reqData);
        };
        /**
         * 升级房间
         * @param roomId
         */
        CinemaBuildSender.prototype.UpgradeRoom = function (roomId) {
            var reqData = new Proto.API.CinemaBuild.UpgradeRoomRequest();
            reqData.roomId = roomId;
            this.send(reqData);
        };
        /**
         *  金币兑换
         * @param count   兑换的次数
         */
        CinemaBuildSender.prototype.goldExchange = function (count) {
            var req = new Proto.API.CinemaBuild.goldExchangeRequest();
            req.count = count;
            this.send(req);
        };
        return CinemaBuildSender;
    }(Games.ProtoSender));
    Games.CinemaBuildSender = CinemaBuildSender;
})(Games || (Games = {}));
//# sourceMappingURL=CinemaBuildSender.js.map