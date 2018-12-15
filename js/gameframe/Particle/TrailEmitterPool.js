/** 粒子拖尾缓存 */
var Games;
(function (Games) {
    var TrailEmitterPool = /** @class */ (function () {
        function TrailEmitterPool() {
            /** 所有对象 */
            this.allList = [];
            /** 没有使用的对象列表 */
            this.list = [];
        }
        Object.defineProperty(TrailEmitterPool.prototype, "totalNum", {
            /**
             * 总数
             */
            get: function () {
                return this.allList.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailEmitterPool.prototype, "poolNum", {
            /**
             * 没有使用的数量
             */
            get: function () {
                return this.list.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TrailEmitterPool.prototype, "useNum", {
            /**
             * 正在被使用的数量
             */
            get: function () {
                return this.totalNum - this.poolNum;
            },
            enumerable: true,
            configurable: true
        });
        /** 返回对象 */
        TrailEmitterPool.prototype.recover = function (emitter) {
            if (this.list.length >= TrailEmitterPool.MAX_POOL_CAPACITY) {
                // console.log("TrailEmitterPool -- max pool capacity=" + TrailEmitterPool.MAX_POOL_CAPACITY);
                emitter.stop();
                var index = this.allList.indexOf(emitter);
                if (index != -1) {
                    this.allList.splice(index, 1);
                }
            }
            else {
                emitter.recover();
                this.list.push(emitter);
            }
        };
        /**
         * 异步请求对象
         */
        TrailEmitterPool.prototype.requrestItem = function () {
            // console.log("TrailEmitterPool -- totalNum=" + this.totalNum + " poolNum=" + this.poolNum + " useNum=" + this.useNum);
            var emitter;
            if (this.list.length > 0) {
                emitter = this.list.pop();
            }
            else {
                emitter = new Games.TrailEmitter();
                this.allList.push(emitter);
            }
            return emitter;
        };
        /**最大存储量 */
        TrailEmitterPool.MAX_POOL_CAPACITY = 50;
        return TrailEmitterPool;
    }());
    Games.TrailEmitterPool = TrailEmitterPool;
})(Games || (Games = {}));
//# sourceMappingURL=TrailEmitterPool.js.map