var Games;
(function (Games) {
    var StreetData = /** @class */ (function () {
        function StreetData() {
        }
        StreetData.CreateStreet = function (id) {
            var street = new StreetData();
            street.id = id;
            return street;
        };
        Object.defineProperty(StreetData.prototype, "Name", {
            get: function () {
                return this.Cfg.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "Reward", {
            get: function () {
                return this.Cfg.upgrade_reward;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "Cfg", {
            get: function () {
                return Game.config.blockLevel.getConfig(this.id);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "isCurrent", {
            get: function () {
                return this.id == Game.moduleModel.street.streetCurrentId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "isLock", {
            get: function () {
                return this.id > Game.moduleModel.street.streetCurrentId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "iconUrl", {
            get: function () {
                var cfg = Game.config.avatar.getConfig(this.Cfg.pic);
                if (cfg) {
                    return cfg.iconUrl;
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "cinemaStaticNum", {
            get: function () {
                if (this.Cfg.cinema && this.Cfg.cinema.length > 0) {
                    var cfg = Game.config.cinema.getConfig(this.Cfg.cinema[0]);
                    if (cfg) {
                        return cfg.num;
                    }
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "cinemaNum", {
            get: function () {
                var treaterIds = User.info.theaterIds;
                for (var index = 0; index < treaterIds.length; index++) {
                    var treater = treaterIds[index];
                    var cfg = Game.config.cinema.getConfig(treater);
                    if (cfg.unlock == this.id) {
                        return cfg.num;
                    }
                }
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "cinemaName", {
            get: function () {
                var treaterIds = User.info.theaterIds;
                for (var index = 0; index < treaterIds.length; index++) {
                    var treater = treaterIds[index];
                    var cfg = Game.config.cinema.getConfig(treater);
                    if (cfg.unlock == this.id) {
                        return cfg.name;
                    }
                }
                return "";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "canSign", {
            get: function () {
                return !this.isLock && this.cinemaNum == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "hasCinema", {
            get: function () {
                return this.cinemaNum > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StreetData.prototype, "LastStreet", {
            get: function () {
                var lastCfg = Game.config.blockLevel.GetLastStreetCfg(this.id);
                if (lastCfg) {
                    return StreetData.CreateStreet(lastCfg.id);
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        return StreetData;
    }());
    Games.StreetData = StreetData;
})(Games || (Games = {}));
//# sourceMappingURL=StreetData.js.map