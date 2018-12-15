var Games;
(function (Games) {
    /** 游戏场景管理 */
    var StageManager = /** @class */ (function () {
        function StageManager() {
        }
        /** 初始化 */
        StageManager.prototype.init = function () {
            this.homeSceneSet = new Games.HomeStage();
            this.homeSceneSet.start();
            this.oscar = new Games.OscarStage();
            this.oscar.start();
            this.roadshow = new Games.RoadShowStage();
            this.roadshow.start();
        };
        return StageManager;
    }());
    Games.StageManager = StageManager;
})(Games || (Games = {}));
//# sourceMappingURL=StageManager.js.map