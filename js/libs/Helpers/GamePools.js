var Games;
(function (Games) {
    /** 游戏缓存 */
    var GamePools = /** @class */ (function () {
        function GamePools() {
            /** 粒子拖尾缓存 */
            this.trailPool = new Games.TrailEmitterPool();
            /**  对话框缓存 */
            this.talkBoxPool = new Games.TalkBoxPool();
            /** 单位组件缓存 */
            this.componentPool = new Games.ComponentPool();
        }
        return GamePools;
    }());
    Games.GamePools = GamePools;
})(Games || (Games = {}));
//# sourceMappingURL=GamePools.js.map