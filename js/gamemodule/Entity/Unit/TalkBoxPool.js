var Games;
(function (Games) {
    var TalkBoxPool = /** @class */ (function () {
        function TalkBoxPool() {
            /** 缓存池标识 */
            this.poolSign = "TalkBoxPool";
            /** 缓存最大数量 */
            this.maxPoolNum = 50;
            /** 所有对象 */
            this.allList = [];
            /** 没有使用的对象列表 */
            this.list = [];
        }
        Object.defineProperty(TalkBoxPool.prototype, "totalNum", {
            /** 总数 */
            get: function () {
                return this.allList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TalkBoxPool.prototype, "poolNum", {
            /** 缓存数量 */
            get: function () {
                return this.list.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TalkBoxPool.prototype, "usedNum", {
            /** 正在使用数量 */
            get: function () {
                return this.totalNum - this.poolNum;
            },
            enumerable: true,
            configurable: true
        });
        /** 请求一个对象 */
        TalkBoxPool.prototype.requestItem = function () {
            return this.list.length ? this.list.pop() : this.creatItem();
        };
        /** 返还一个对象到对象池 */
        TalkBoxPool.prototype.recoverItem = function (item) {
            item.setText("");
            if (this.list.indexOf(item) == -1) {
                this.list.push(item);
            }
            // console.log("对话框缓存--" + this.totalNum);
        };
        /** 创建新对象 */
        TalkBoxPool.prototype.creatItem = function () {
            var newItem = fgui.Common.TalkBox.createInstance();
            this.allList.push(newItem);
            return newItem;
        };
        return TalkBoxPool;
    }());
    Games.TalkBoxPool = TalkBoxPool;
})(Games || (Games = {}));
//# sourceMappingURL=TalkBoxPool.js.map