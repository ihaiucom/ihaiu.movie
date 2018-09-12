var Games;
(function (Games) {
    var BaseBuildingProcess = /** @class */ (function () {
        function BaseBuildingProcess() {
        }
        BaseBuildingProcess.prototype.init = function (refRoom) {
            this.refRoom = refRoom;
            this.roomInfo = refRoom.roomInfo;
            this.onInit();
            this.onProcess();
        };
        BaseBuildingProcess.prototype.onInit = function () {
        };
        BaseBuildingProcess.prototype.onProcess = function () {
        };
        BaseBuildingProcess.prototype.dispose = function () {
        };
        BaseBuildingProcess.prototype.isSelfRoom = function (roomType) {
            return this.roomInfo.type == roomType;
        };
        return BaseBuildingProcess;
    }());
    Games.BaseBuildingProcess = BaseBuildingProcess;
})(Games || (Games = {}));
//# sourceMappingURL=BaseBuildingProcess.js.map