var Games;
(function (Games) {
    //======================
    // 日常任务 数据
    //----------------------
    var MissionData = /** @class */ (function () {
        function MissionData() {
            this.id = 0; //对应的策划表id
            this.unlock = true;
            // 协议数据
            this.protoData = new Proto.SS.TaskData();
        }
        return MissionData;
    }());
    Games.MissionData = MissionData;
})(Games || (Games = {}));
//# sourceMappingURL=MissionData.js.map