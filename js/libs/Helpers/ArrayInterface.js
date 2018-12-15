Array.prototype.findOne = function (fun, thisArg) {
    var len = this.length;
    if (typeof fun != "function") {
        throw new TypeError();
    }
    for (var i = 0; i < len; i++) {
        if (fun.call(thisArg, this[i])) {
            return this[i];
        }
    }
    return null;
};
Array.prototype.find = function (fun, thisArg) {
    var len = this.length;
    if (typeof fun != "function") {
        throw new TypeError();
    }
    for (var i = 0; i < len; i++) {
        if (fun.call(thisArg, this[i], i, this)) {
            return this[i];
        }
    }
    return null;
};
Array.prototype.findIndex = function (fun, thisArg) {
    var len = this.length;
    if (typeof fun != "function") {
        throw new TypeError();
    }
    for (var i = 0; i < len; i++) {
        if (fun.call(thisArg, this[i])) {
            return i;
        }
    }
    return -1;
};
//# sourceMappingURL=ArrayInterface.js.map