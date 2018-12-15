var Games;
(function (Games) {
    var CityData = /** @class */ (function () {
        function CityData(id, state, isHome) {
            this.id = id;
            this.state = state;
            this.isHome = isHome;
        }
        Object.defineProperty(CityData.prototype, "name", {
            get: function () {
                return this.cfg.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "num", {
            get: function () {
                return this.cfg.city_num;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "index", {
            get: function () {
                return Game.config.city.GetCityIndexInCountry(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "country", {
            get: function () {
                return this.cfg.country;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "numName", {
            get: function () {
                return this.num + "." + this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "cfg", {
            get: function () {
                return Game.config.city.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CityData.prototype, "holdReward", {
            get: function () {
                var cfg = this.cfg;
                if (cfg) {
                    return cfg.hold_reward;
                }
                return [];
            },
            enumerable: true,
            configurable: true
        });
        return CityData;
    }());
    Games.CityData = CityData;
})(Games || (Games = {}));
//# sourceMappingURL=CityData.js.map