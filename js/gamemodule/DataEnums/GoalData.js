var Games;
(function (Games) {
    var GoalData = /** @class */ (function () {
        function GoalData() {
        }
        GoalData.prototype.initData = function (curProgress, maxProgress) {
            this.curProgress = curProgress;
            this.maxProgress = maxProgress;
            this.status = curProgress >= maxProgress ? 1 : 0;
            this.progressString = format("{0}/{1}", curProgress, maxProgress);
        };
        return GoalData;
    }());
    Games.GoalData = GoalData;
})(Games || (Games = {}));
//# sourceMappingURL=GoalData.js.map