var Games;
(function (Games) {
    /**
     * 艺人单位构建
     */
    var UnitCreator = /** @class */ (function () {
        function UnitCreator() {
        }
        /**
         * 创建单位
         * @param info
         * @param onComplete
         * @param caller
         * @param boundWidth
         * @param boundHeight
         * @param scaleFactor
         */
        UnitCreator.prototype.creatUnit = function (info, onComplete, caller, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            var ctrl = new Games.UnitCtrl();
            ctrl.creat(info, onComplete, caller, boundWidth, boundHeight, scaleFactor);
            return ctrl;
        };
        /** 单位自增uid */
        UnitCreator.incrementId = 10000;
        return UnitCreator;
    }());
    Games.UnitCreator = UnitCreator;
})(Games || (Games = {}));
//# sourceMappingURL=UnitCreator.js.map