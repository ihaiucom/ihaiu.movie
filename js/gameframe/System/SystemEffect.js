var Games;
(function (Games) {
    //======================
    // 浮动消息管理
    //----------------------
    var SystemEffect = /** @class */ (function () {
        function SystemEffect() {
            // 所有的
            this.list = [];
            // 可以使用的池
            this.pools = [];
        }
        SystemEffect.prototype.playeffect = function (dtItem, delay) {
            if (delay === void 0) { delay = 0; }
            this.show(dtItem, delay);
        };
        SystemEffect.prototype.playeffects = function (dts) {
            for (var index = 0; index < dts.length; index++) {
                var element = dts[index];
                this.show(element, index * 200);
            }
        };
        SystemEffect.prototype.show = function (dtItem, delay) {
            var item;
            if (this.pools.length > 0) {
                item = this.pools.pop();
            }
            else {
                item = fgui.Common.ItemCellView.createInstance();
                this.list.push(item);
                Games.MenuLayer.floatMsg.addChild(item);
            }
            item.visible = true;
            item.setXY(fairygui.GRoot.inst.width >> 1, fairygui.GRoot.inst.height >> 1);
            item.updateViewByDTNum(dtItem);
            var endPos = new Point();
            if (dtItem.isBagType) {
                endPos.x = fairygui.GRoot.inst.width;
                endPos.y = fairygui.GRoot.inst.height;
            }
            Laya.Tween.to(item, { x: endPos.x, y: endPos.y }, 500, Laya.Ease.quadOut, Handler.create(this, this.onComplete, [item]), delay);
        };
        SystemEffect.prototype.onComplete = function (item) {
            item.visible = false;
            this.pools.push(item);
        };
        return SystemEffect;
    }());
    Games.SystemEffect = SystemEffect;
})(Games || (Games = {}));
//# sourceMappingURL=SystemEffect.js.map