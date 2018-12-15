var Games;
(function (Games) {
    var CityStreetData = /** @class */ (function () {
        function CityStreetData(id, state, progress) {
            if (state === void 0) { state = Games.StreetStateEnum.NotOccupy; }
            if (progress === void 0) { progress = 0; }
            this.id = id;
            var cfg = Game.config.street.getConfig(id);
            this.state = state;
            this.progress = progress;
        }
        Object.defineProperty(CityStreetData.prototype, "name", {
            get: function () {
                return this.cfg.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "city", {
            get: function () {
                if (this.cfg) {
                    return this.cfg.city;
                }
                console.log("城市街区：" + this.id + " 缺少配置");
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "pos", {
            get: function () {
                return this.cfg.position;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "pre", {
            get: function () {
                return this.cfg.pre_id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "next", {
            get: function () {
                return this.cfg.next_stage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "num", {
            get: function () {
                if (this._num != null) {
                    return this._num;
                }
                var cityCfg = Game.config.city.getConfig(this.city);
                if (cityCfg == null) {
                    console.log(this.id + "街区的城市：" + this.city + " 缺少配置");
                    return 0;
                }
                var streetList = cityCfg.street_id;
                for (var index = 0; index < streetList.length; index++) {
                    var id = streetList[index];
                    if (id == this.id) {
                        this._num = index + 1;
                        return this._num;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "cityNum", {
            get: function () {
                var cityCfg = Game.config.city.getConfig(this.city);
                if (cityCfg) {
                    return cityCfg.city_num;
                }
                console.log("城市：" + this.id + " 缺少配置");
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "numName", {
            get: function () {
                return this.cityNum + "-" + this.num + " " + this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "reward", {
            get: function () {
                var list = [];
                var expect = new DTItemNum();
                expect.itemId = 8;
                expect.itemNum = this.cfg.expect;
                return list.concat(this.cfg.finale_reward, expect);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityStreetData.prototype, "cfg", {
            get: function () {
                return Game.config.street.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        return CityStreetData;
    }());
    Games.CityStreetData = CityStreetData;
})(Games || (Games = {}));
//# sourceMappingURL=CityStreetData.js.map