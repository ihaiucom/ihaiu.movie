var Games;
(function (Games) {
    var TimeLimitType;
    (function (TimeLimitType) {
        //0点
        TimeLimitType[TimeLimitType["Zero"] = 0] = "Zero";
        // 10点
        TimeLimitType[TimeLimitType["Ten"] = 1] = "Ten";
        // 9点50
        TimeLimitType[TimeLimitType["NineToFifty"] = 2] = "NineToFifty";
        // 9点55
        TimeLimitType[TimeLimitType["NineToFiftyFive"] = 3] = "NineToFiftyFive";
    })(TimeLimitType = Games.TimeLimitType || (Games.TimeLimitType = {}));
})(Games || (Games = {}));
//# sourceMappingURL=TimeLimitType.js.map