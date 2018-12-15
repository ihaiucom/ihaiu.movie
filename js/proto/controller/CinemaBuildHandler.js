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
    var CinemaBuildHandler = /** @class */ (function (_super) {
        __extends(CinemaBuildHandler, _super);
        function CinemaBuildHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.CinemaBuild;
            return _this;
        }
        /**--接收
         * 扩建楼层返回
         * @param resData
         */
        CinemaBuildHandler.prototype.ExtendFloor = function (resData) {
            console.log("[" + this.moduleName + "] ExtendFloor Response " + resData + " ");
            if (resData.result == 0) {
                Game.moduleModel.building.floorIndex = resData.floor;
            }
        };
        /**
         * 建造房间返回
         * @param resData
         */
        CinemaBuildHandler.prototype.BuildRoom = function (resData) {
            console.log("[" + this.moduleName + "] BuildRoom Response " + resData + " ");
            if (resData.result == 0) {
                var proto = new Proto.SS.RoomInfo();
                proto.floor = resData.floor;
                proto.roomId = resData.roomId;
                var roomInfo = Games.RoomInfo.creatInfo(proto);
                Game.moduleModel.building.addRoomInfo(roomInfo);
            }
        };
        /**
         * 升级房间返回
         * @param resData
         */
        CinemaBuildHandler.prototype.UpgradeRoom = function (resData) {
            console.log("[" + this.moduleName + "]  UpgradeRoom Response " + resData + " ");
            if (resData.result == 0) {
                Game.moduleModel.building.upgradeRoom(resData.preRoomId, resData.roomId);
            }
        };
        /**
         *  金币兑换
         */
        CinemaBuildHandler.prototype.goldExchange = function (msg) {
        };
        return CinemaBuildHandler;
    }(Games.ProtoHandler));
    Games.CinemaBuildHandler = CinemaBuildHandler;
})(Games || (Games = {}));
//# sourceMappingURL=CinemaBuildHandler.js.map