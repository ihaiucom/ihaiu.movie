var DictionaryList = /** @class */ (function () {
    function DictionaryList() {
        this.list = [];
        this.dict = {};
        this._count = 0;
    }
    Object.defineProperty(DictionaryList.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    DictionaryList.prototype.add = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
            this.list.push(val);
        }
        this.dict[key] = val;
    };
    DictionaryList.prototype.set = function (key, val) {
        if (this.hasKey(key) === false) {
            this._count++;
            this.list.push(val);
        }
        this.dict[key] = val;
    };
    DictionaryList.prototype.remove = function (key) {
        if (this.hasKey(key)) {
            this._count--;
            var value = this.getValue(key);
            var index = this.list.indexOf(value);
            if (index != -1) {
                this.list.splice(index, 1);
            }
        }
        // this.dict[key] = undefined;
        delete this.dict[key];
    };
    DictionaryList.prototype.hasKey = function (key) {
        return this.dict[key] != undefined;
    };
    DictionaryList.prototype.getValue = function (key) {
        return this.dict[key];
    };
    DictionaryList.prototype.getValueOrDefault = function (key, _default) {
        if (this.hasKey(key)) {
            return this.getValue(key);
        }
        else {
            return _default;
        }
    };
    DictionaryList.prototype.__getDict = function () {
        return this.dict;
    };
    DictionaryList.prototype.getValues = function () {
        return this.list;
    };
    DictionaryList.prototype.getKeys = function () {
        var list = [];
        for (var key in this.dict) {
            list.push(key);
        }
        return list;
    };
    DictionaryList.prototype.clear = function () {
        this.list.length = 0;
        this.dict = {};
        this._count = 0;
    };
    return DictionaryList;
}());
//# sourceMappingURL=DictionaryList.js.map