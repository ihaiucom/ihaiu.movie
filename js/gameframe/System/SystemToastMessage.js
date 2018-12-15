var Games;
(function (Games) {
    //======================
    // 浮动消息管理
    //----------------------
    var SystemToastMessag = /** @class */ (function () {
        function SystemToastMessag() {
            // 所有的
            this.list = [];
            // 可以使用的池
            this.pools = [];
            this.timeSpacing = 1;
        }
        SystemToastMessag.prototype.play = function (txt) {
            if (txt != this.lastTxt) {
                this.show(txt);
            }
            else if (getTime() - this.lastTime >= this.timeSpacing) {
                this.show(txt);
            }
        };
        SystemToastMessag.prototype.show = function (txt) {
            this.lastTxt = txt;
            this.lastTime = getTime();
            var item;
            if (this.pools.length > 0) {
                item = this.pools.pop();
            }
            else {
                item = fgui.System.SystemToastMessage.createInstance();
                this.list.push(item);
            }
            item.play(txt, Handler.create(this, this.onItemComplete));
        };
        SystemToastMessag.prototype.onItemComplete = function (item) {
            this.pools.push(item);
        };
        return SystemToastMessag;
    }());
    Games.SystemToastMessag = SystemToastMessag;
})(Games || (Games = {}));
//# sourceMappingURL=SystemToastMessage.js.map