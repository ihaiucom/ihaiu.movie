var Mathf = /** @class */ (function () {
    function Mathf() {
    }
    Mathf.clamp = function (num, min, max) {
        return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
    };
    Mathf.Clamp01 = function (value) {
        if (value < 0.0)
            return 0.0;
        if (value > 1.0)
            return 1;
        return value;
    };
    /// <summary>
    ///   <para>Linearly interpolates between a and b by t.</para>
    /// </summary>
    /// <param name="a"></param>
    /// <param name="b"></param>
    /// <param name="t"></param>
    Mathf.Lerp = function (a, b, t) {
        return a + (b - a) * Mathf.Clamp01(t);
    };
    return Mathf;
}());
//# sourceMappingURL=Mathf.js.map