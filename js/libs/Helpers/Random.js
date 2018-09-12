var Random = /** @class */ (function () {
    function Random() {
    }
    // int
    // min <= r < max
    Random.range = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.floor(range * rand);
    };
    // int
    // min <= r <= max
    Random.rangeBoth = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        return min + Math.round(range * rand);
    };
    // int
    // min < r < max
    Random.rangeBetween = function (min, max) {
        var range = max - min;
        var rand = Math.random();
        if (Math.round(rand * range) == 0) {
            return min + 1;
        }
        else if (Math.round(rand * max) == max) {
            return max - 1;
        }
        else {
            return min + Math.round(rand * range) - 1;
        }
    };
    /// <summary>
    /// 乱序排列一个数组
    /// </summary>
    Random.GetDisorderList = function (list) {
        var countNum = list.length;
        var listA = new Array();
        var listB = new Array();
        for (var i = 0; i < countNum; i++) {
            listA.push(list[i]);
        }
        while (listB.length < countNum) {
            var index = Random.range(0, listA.length);
            if (listB.indexOf(listA[index]) === -1) {
                listB.push(listA[index]);
                listA.splice(index, 1);
            }
        }
        return listB;
    };
    return Random;
}());
//# sourceMappingURL=Random.js.map