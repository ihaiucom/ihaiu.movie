var Games;
(function (Games) {
    //======================
    // 场景房间配置
    //----------------------
    var RoomTypeClass = /** @class */ (function () {
        function RoomTypeClass(type, newClass) {
            this.type = type;
            this.newClass = newClass;
        }
        return RoomTypeClass;
    }());
    Games.RoomTypeClass = RoomTypeClass;
    var BuildingProcessMgr = /** @class */ (function () {
        function BuildingProcessMgr() {
        }
        BuildingProcessMgr.get = function (roomType) {
            return this.dict.getValue(roomType);
        };
        BuildingProcessMgr.add = function (roomType, newClass) {
            this.dict.add(roomType, new RoomTypeClass(roomType, newClass));
        };
        //添加房间处理器
        BuildingProcessMgr.install = function () {
            this.add(Games.RoomType.Cinema, Games.BuildingProcess1);
            this.add(Games.RoomType.Shoot, Games.BuildingProcess2);
            this.add(Games.RoomType.Actor, Games.BuildingProcess3);
            this.add(Games.RoomType.Reception, Games.BuildingProcess10);
            this.add(Games.RoomType.Meeting, Games.BuildingProcess11);
            this.add(Games.RoomType.Training, Games.BuildingProcess13);
        };
        BuildingProcessMgr.dict = new Dictionary();
        return BuildingProcessMgr;
    }());
    Games.BuildingProcessMgr = BuildingProcessMgr;
})(Games || (Games = {}));
//# sourceMappingURL=BuildingProcessMgr.js.map