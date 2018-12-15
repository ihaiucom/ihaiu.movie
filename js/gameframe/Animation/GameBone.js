var Games;
(function (Games) {
    var Bone = /** @class */ (function () {
        function Bone() {
            this.templetPool = new Games.TempletPool();
            this.skeletonCache = new Games.SkeletonCache();
            this.shareSkeleton = new Games.ShareSkeleton();
            //share bone
            this.animationCache = new Games.AnimationCache();
            this.animHelper = new Games.AnimationHelper();
            //Debug
            this.lastTime = 0;
        }
        return Bone;
    }());
    Games.Bone = Bone;
})(Games || (Games = {}));
var GameBoone = new Games.Bone();
//# sourceMappingURL=GameBone.js.map