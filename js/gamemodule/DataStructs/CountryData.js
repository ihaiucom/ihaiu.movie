var Games;
(function (Games) {
    var CountryData = /** @class */ (function () {
        // cityList:number[];
        // cityList?:CityData[];
        function CountryData(id) {
            this.id = id;
            var cfg = this.cfg;
            this.icon = cfg.icon;
            this.preCountry = cfg.pre_id;
            this.nextCountry = cfg.next_country;
        }
        Object.defineProperty(CountryData.prototype, "name", {
            get: function () {
                return this.cfg.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CountryData.prototype, "cfg", {
            get: function () {
                return Game.config.country.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CountryData.prototype, "iconUrl", {
            get: function () {
                return Game.config.avatar.getConfig(this.cfg.icon).iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CountryData.prototype, "flagUrl", {
            get: function () {
                return Game.config.avatar.getConfig(this.cfg.flag).iconUrl;
            },
            enumerable: true,
            configurable: true
        });
        return CountryData;
    }());
    Games.CountryData = CountryData;
})(Games || (Games = {}));
//# sourceMappingURL=CountryData.js.map