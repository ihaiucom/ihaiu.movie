var GameVersions;
(function (GameVersions) {
    var VersionData = /** @class */ (function () {
        function VersionData() {
            // 第一部分为主版本号
            this.master = 0;
            // 第二部分为次版本号, 需要更新app版本
            this.minor = 0;
            // 第三部分为修订版
            this.revised = 0;
            // 第四部分为修订版
            this.revised2 = 0;
        }
        Object.defineProperty(VersionData.prototype, "isZero", {
            get: function () {
                return this.master == 0 &&
                    this.minor == 0 &&
                    this.revised == 0 &&
                    this.revised2 == 0;
            },
            enumerable: true,
            configurable: true
        });
        VersionData.prototype.setVersionTxt = function (versionTxt) {
            if (versionTxt === undefined || versionTxt === null)
                return this;
            if (isNullOrEmpty(versionTxt.trim()))
                return this;
            versionTxt = versionTxt.toLowerCase();
            versionTxt = versionTxt.replace("version:", "").replace("version", "").replace("ver", "").replace("v", "");
            var arr = versionTxt.split('.');
            this.master = parseInt(arr[0]);
            if (arr.length > 1)
                this.minor = parseInt(arr[1]);
            if (arr.length > 2)
                this.revised = parseInt(arr[2]);
            if (arr.length > 3)
                this.revised2 = parseInt(arr[3]);
            return this;
        };
        VersionData.prototype.equal = function (target) {
            return this.master == target.master
                && this.minor == target.minor
                && this.revised == target.revised
                && this.revised2 == target.revised2;
        };
        VersionData.prototype.toString = function () {
            return "v" + this.master + "." + this.minor + "." + this.revised + "." + this.revised2;
        };
        return VersionData;
    }());
    GameVersions.VersionData = VersionData;
})(GameVersions || (GameVersions = {}));
//# sourceMappingURL=VersionData.js.map