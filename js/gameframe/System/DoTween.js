var DoTween;
(function (DoTween) {
    function TweenMove(target, fromtPoint, toPoint, duration, ease, complete, delay, coverBefore, autoRecover) {
        target.x = fromtPoint.x;
        target.y = fromtPoint.y;
        laya.utils.Tween.to(target, { x: toPoint.x, y: toPoint.y }, duration, ease, complete, delay, coverBefore, autoRecover);
    }
    DoTween.TweenMove = TweenMove;
    function TweenRect(target, fromRect, toRect, duration, ease, complete, delay, coverBefore, autoRecover) {
        target.x = fromRect.x;
        target.y = fromRect.y;
        target.width = fromRect.width;
        target.height = fromRect.height;
        laya.utils.Tween.to(target, { x: toRect.x, y: toRect.y, width: toRect.width, height: toRect.height }, duration, ease, complete, delay, coverBefore, autoRecover);
    }
    DoTween.TweenRect = TweenRect;
})(DoTween || (DoTween = {}));
//# sourceMappingURL=DoTween.js.map