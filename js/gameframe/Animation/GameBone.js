var Games;
(function (Games) {
    var Bone = /** @class */ (function () {
        function Bone() {
            this.templetPool = new Games.TempletPool();
            this.skeletonCache = new Games.SkeletonCache();
        }
        return Bone;
    }());
    Games.Bone = Bone;
})(Games || (Games = {}));
var GameBoone = new Games.Bone();
//# sourceMappingURL=GameBone.js.map