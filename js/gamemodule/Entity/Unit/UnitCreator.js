var Games;
(function (Games) {
    /**
     * 艺人单位构建
     */
    var UnitCreator = /** @class */ (function () {
        function UnitCreator() {
        }
        /** 创建单位（实体） */
        UnitCreator.prototype.creatEUnit = function (info, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            var unit = new Games.UnitAgent();
            unit.init(info, boundWidth, boundHeight, scaleFactor);
            return unit;
        };
        /** 请求单位（实体） */
        UnitCreator.prototype.requestUnit = function (info, boundWidth, boundHeight, scaleFactor) {
            if (boundWidth === void 0) { boundWidth = 190; }
            if (boundHeight === void 0) { boundHeight = 620; }
            if (scaleFactor === void 0) { scaleFactor = 0.26; }
            var unit = Games.AvatarManager.getRoomCUnit(info.uid);
            if (unit) {
                unit.visible = true;
                return unit;
            }
            else {
                unit = new Games.UnitAgent();
                unit.init(info, boundWidth, boundHeight, scaleFactor);
                Games.AvatarManager.addRoomCUnit(unit);
            }
            return unit;
        };
        /** 单位自增uid */
        UnitCreator.incrementId = 10000;
        return UnitCreator;
    }());
    Games.UnitCreator = UnitCreator;
})(Games || (Games = {}));
//# sourceMappingURL=UnitCreator.js.map