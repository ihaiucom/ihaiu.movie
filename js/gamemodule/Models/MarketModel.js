var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Games;
(function (Games) {
    //======================
    // 剧情 数据模型
    //----------------------
    var MarketModel = /** @class */ (function (_super) {
        __extends(MarketModel, _super);
        function MarketModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(MarketModel.prototype, "IsGetCityReward", {
            get: function () {
                return this.isGetCityReward;
            },
            set: function (value) {
                this.isGetCityReward = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketModel.prototype, "Info", {
            get: function () {
                if (this.info == null) {
                    console.log("Proto CityData is NULL!");
                    return new Proto.SS.CityData();
                }
                return this.info;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 占领的最大市场
         */
        MarketModel.prototype.GetMaxCity = function () {
            var lastCity = this.GetLastCity();
            if (lastCity == null) {
                return null;
            }
            var maxCityId = lastCity.cfg.pre_id;
            if (maxCityId == 0) {
                return null;
            }
            return this.GetCity(maxCityId);
        };
        MarketModel.prototype.UpdateCityData = function (msg) {
            this.info = msg;
        };
        MarketModel.prototype.GetCityCfg = function (id) {
            return Game.config.city.getConfig(id);
        };
        MarketModel.prototype.GetStreetState = function (id) {
            var streetCfg = Game.config.street.getConfig(id);
            var cityId = streetCfg.city;
            var cityState = this.GetCityState(cityId);
            if (cityState == Games.CityStateEnum.hasOccupy || cityState == Games.CityStateEnum.FinishPublicity || cityState == Games.CityStateEnum.FinishRoadShow) {
                return Games.StreetStateEnum.HasOccupy;
            }
            if (cityState == Games.CityStateEnum.Lock) {
                return Games.StreetStateEnum.NotOccupy;
            }
            if (cityState == Games.CityStateEnum.InOccupy) {
                if (id == this.Info.lastArea) {
                    if (this.Info.lastAreaProgress == 100) {
                        return Games.StreetStateEnum.HasOccupy;
                    }
                    return Games.StreetStateEnum.InOccupy;
                }
                if (id < this.Info.lastArea) {
                    return Games.StreetStateEnum.HasOccupy;
                }
                return Games.StreetStateEnum.NotOccupy;
            }
        };
        MarketModel.prototype.GetCityState = function (id) {
            var cityCfg = Game.config.city.getConfig(id);
            if (cityCfg == null) {
                return Games.CityStateEnum.Lock;
            }
            var countryId = cityCfg.country;
            var countryState = this.GetCountryState(countryId);
            if (countryState == Games.CountryStateEnum.HasOccupy) {
                return Games.CityStateEnum.hasOccupy;
            }
            if (countryState == Games.CountryStateEnum.NotOccupy) {
                return Games.CityStateEnum.Lock;
            }
            var sortValue = Game.config.city.sort(id, this.Info.lastCity);
            if (sortValue > 0) {
                return Games.CityStateEnum.Lock;
            }
            if (sortValue < 0) {
                return Games.CityStateEnum.hasOccupy;
            }
            if (this.Info.roadShowFlag) {
                return Games.CityStateEnum.FinishRoadShow;
            }
            var progress = this.GetCityProgress();
            if (progress == 100) {
                return Games.CityStateEnum.FinishPublicity;
            }
            return Games.CityStateEnum.InOccupy;
        };
        MarketModel.prototype.GetCountryState = function (id) {
            var lastCountry = this.GetLastCountryId();
            var sortValue = Game.config.country.sort(id, lastCountry);
            if (sortValue == 0) {
                return Games.CountryStateEnum.InOccupy;
            }
            if (sortValue > 0) {
                return Games.CountryStateEnum.NotOccupy;
            }
            if (sortValue < 0) {
                return Games.CountryStateEnum.HasOccupy;
            }
        };
        MarketModel.prototype.GetCity = function (id) {
            if (id == null || id == 0) {
                return null;
            }
            return new Games.CityData(id, this.GetCityState(id), id == this.Info.headquarters);
        };
        MarketModel.prototype.GetHomeCity = function () {
            if (this.Info.headquarters == 0) {
                return null;
            }
            return this.GetCity(this.Info.headquarters);
        };
        MarketModel.prototype.GetLastCity = function () {
            if (this.Info.lastCity == 0) {
                return null;
            }
            return this.GetCity(this.Info.lastCity);
        };
        MarketModel.prototype.GetLastStreet = function () {
            var state = Games.StreetStateEnum.InOccupy;
            if (this.Info.lastAreaProgress == 100) {
                state = Games.StreetStateEnum.HasOccupy;
            }
            return new Games.CityStreetData(this.Info.lastArea, state, this.Info.lastAreaProgress);
        };
        MarketModel.prototype.GetPublicRewards = function (street) {
            var list = [];
            var item = new DTItemNum();
            item.itemId = 2;
            item.itemNum = street.cfg.once_reward;
            list.push(item);
            return list;
        };
        MarketModel.prototype.GetCityGoldSpeed = function () {
            return this.Info.speedGold / 100;
        };
        MarketModel.prototype.GetCityFansSpeed = function () {
            return this.Info.speedFans;
        };
        MarketModel.prototype.GetCurGold = function () {
            var time = Game.time.getSubSecondsPre(this.Info.lastDropTimestamp);
            var speed = this.GetCityGoldSpeed();
            return Math.ceil(this.Info.lastGold + time * speed);
        };
        MarketModel.prototype.GetCurFans = function () {
            var time = Game.time.getSubSecondsPre(this.Info.lastDropTimestamp);
            var speed = this.GetCityFansSpeed();
            return Math.ceil(this.Info.lastFans + time * speed);
        };
        Object.defineProperty(MarketModel.prototype, "GoldLimit", {
            get: function () {
                return this.Info.maxGold;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketModel.prototype, "FansLimit", {
            get: function () {
                return this.Info.maxFans;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketModel.prototype, "FansLimitTime", {
            /**
             * 获取粉丝收益的时间上线 /小时
             */
            get: function () {
                return this.FansLimit / this.GetCityFansSpeed() / 3600;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketModel.prototype, "GoldLimitTime", {
            /**
             * 获取金币收益的时间上线 /小时
             */
            get: function () {
                return this.GoldLimit / this.GetCityGoldSpeed() / 3600;
            },
            enumerable: true,
            configurable: true
        });
        MarketModel.prototype.GetCityReward = function (cityId) {
            var random_out = Game.config.city.getConfig(cityId).random_out;
            return random_out;
        };
        MarketModel.prototype.GetCityRewardNum = function (itemId) {
            for (var index = 0; index < this.Info.dropList.length; index++) {
                var item = this.Info.dropList[index];
                return item.amount;
            }
            return 0;
        };
        MarketModel.prototype.IsCityRewardUnlock = function (id) {
            return true;
        };
        MarketModel.prototype.GetAmbassadorNum = function () {
            var num = 0;
            for (var index = 0; index < this.Info.ambassador.length; index++) {
                var element = this.Info.ambassador[index];
                if (element != 0) {
                    num++;
                }
            }
            return num;
        };
        MarketModel.prototype.GetAmbassador = function () {
            return this.Info.ambassador;
        };
        Object.defineProperty(MarketModel.prototype, "IsUnlockFiveActor", {
            get: function () {
                var cfg = Game.config.global.getConfig(2069);
                if (cfg) {
                    var value = cfg.value;
                    var stall = User.info.stall;
                    return stall > value;
                }
                return true;
            },
            enumerable: true,
            configurable: true
        });
        MarketModel.prototype.GetRoadShowCost = function () {
            return this.GetCityCfg(this.Info.lastCity).show_cost;
        };
        // public GetStreetProgress(id)
        // {
        //     if (id == this.Info.lastArea)
        //     {
        //         return this.Info.lastAreaProgress;
        //     }
        // }
        MarketModel.prototype.GetCityProgress = function () {
            if (this.Info.lastArea == 0) {
                return 0;
            }
            var occupyNum = 0;
            var cfg = Game.config.street.getConfig(this.Info.lastArea);
            if (this.Info.lastAreaProgress == 100) {
                occupyNum = 1;
            }
            var id = cfg.pre_id;
            while (id != 0) {
                cfg = Game.config.street.getConfig(id);
                if (cfg.city != this.Info.lastCity) {
                    break;
                }
                occupyNum++;
                id = cfg.pre_id;
            }
            var streetNum = this.GetCityCfg(this.Info.lastCity).street_num;
            return occupyNum / streetNum * 100;
        };
        MarketModel.prototype.GetCountry = function (id) {
            return new Games.CountryData(id);
        };
        MarketModel.prototype.GetCountryProgress = function (countryId) {
            var lastCountry = this.GetLastCountryId();
            if (countryId != lastCountry) {
                return Game.config.country.getConfig(countryId).city_num;
            }
            if (this.Info.lastCity == 0) {
                return 0;
            }
            var cfg = Game.config.city.getConfig(this.Info.lastCity);
            var id = cfg.pre_id;
            var occupyNum = 0;
            while (id != 0) {
                cfg = Game.config.city.getConfig(id);
                if (cfg.country != lastCountry) {
                    break;
                }
                occupyNum++;
                id = cfg.pre_id;
            }
            return occupyNum;
        };
        MarketModel.prototype.GetPublicityCost = function () {
            return Game.config.street.getConfig(this.Info.lastArea).publicize_cost;
        };
        MarketModel.prototype.GetStreetDemand = function () {
            return Game.config.street.GetRequire(this.Info.lastArea);
        };
        MarketModel.prototype.GetCityDemand = function (cityId, index) {
            var list = Game.config.city.GetCityRequire(cityId);
            return list[index];
        };
        MarketModel.prototype.GetPublicityDemandText = function () {
            var demandList = this.GetStreetDemand();
            if (demandList.length == 0) {
                return "";
            }
            var demand = this.GetDemandExplain(demandList[demandList.length - 1]);
            return Games.TEXT.MarketPublicityInfo.format(demand);
        };
        MarketModel.prototype.GetStreetDemandText = function () {
            return this.GetDemandListText(this.GetStreetDemand());
        };
        MarketModel.prototype.GetDemandListText = function (list) {
            // let list = this.GetStreetDemand();
            var str = "";
            for (var index = 0; index < list.length; index++) {
                var data = list[index];
                var demand = data;
                var value = data.value;
                str += this.GetActorDemandText(demand, demand.value);
                if (index < list.length - 1) {
                    str += "\n";
                }
            }
            return str;
        };
        MarketModel.prototype.GetPropertyName = function (id) {
            var cfg = Game.config.property.getConfig(id);
            if (cfg == null) {
                return "error";
            }
            return cfg.name;
        };
        MarketModel.prototype.GetPropertyIcon = function (id) {
            var cfg = Game.config.property.getConfig(id);
            if (cfg == null) {
                return "error";
            }
            return cfg.iconUrl;
        };
        MarketModel.prototype.GetDemandExplain = function (demand) {
            var name = "";
            switch (demand.type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                case Games.ActorRequireEnum.Continents:
                    name = this.GetPropertyName(demand.value);
                    break;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    name = this.GetDemandTypeName(demand.type);
                    break;
                default:
                    break;
            }
            return name;
        };
        MarketModel.prototype.GetDemandTypeName = function (type) {
            var name = "";
            switch (type) {
                case Games.ActorRequireEnum.age:
                    name = Games.TEXT.age;
                    break;
                case Games.ActorRequireEnum.sex:
                    name = Games.TEXT.sex;
                    break;
                case Games.ActorRequireEnum.type:
                    name = Games.TEXT.type;
                    break;
                case Games.ActorRequireEnum.Continents:
                    name = Games.TEXT.country;
                    break;
                case Games.ActorRequireEnum.art:
                    name = this.GetPropertyName(1604); //"艺术:";
                    break;
                case Games.ActorRequireEnum.entertainment:
                    name = this.GetPropertyName(1605); //"娱乐:";
                    break;
                case Games.ActorRequireEnum.performance:
                    name = this.GetPropertyName(1602); //"表演:";
                    break;
                case Games.ActorRequireEnum.plot:
                    name = this.GetPropertyName(1603); //"剧情:";
                    break;
                case Games.ActorRequireEnum.scene:
                    name = this.GetPropertyName(1601); //"场面:";
                    break;
                default:
                    break;
            }
            return name;
        };
        MarketModel.prototype.GetDemandTypeIcon = function (type) {
            var name = "";
            switch (type) {
                case Games.ActorRequireEnum.art:
                    name = this.GetPropertyIcon(1604); //"艺术:";
                    break;
                case Games.ActorRequireEnum.entertainment:
                    name = this.GetPropertyIcon(1605); //"娱乐:";
                    break;
                case Games.ActorRequireEnum.performance:
                    name = this.GetPropertyIcon(1602); //"表演:";
                    break;
                case Games.ActorRequireEnum.plot:
                    name = this.GetPropertyIcon(1603); //"剧情:";
                    break;
                case Games.ActorRequireEnum.scene:
                    name = this.GetPropertyIcon(1601); //"场面:";
                    break;
                default:
                    break;
            }
            return name;
        };
        MarketModel.prototype.GetActorDemandText = function (demand, value) {
            var type = demand.type;
            var name;
            var strValue;
            name = this.GetDemandTypeName(demand.type) + ":";
            switch (type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.Continents:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                    strValue = this.GetPropertyName(value);
                    break;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    strValue = value.toString();
                    break;
                default:
                    break;
            }
            // strValue = demand.value == value ? this.GetGreeTxt(strValue):this.GetWhiteTxt(strValue);
            return name + strValue;
        };
        MarketModel.prototype.GetActorDemandValueText = function (demand, value) {
            var type = demand.type;
            var strValue;
            switch (type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.Continents:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                    strValue = this.GetPropertyName(value);
                    break;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    strValue = value.toString();
                    break;
                default:
                    break;
            }
            return strValue;
        };
        MarketModel.prototype.GetLastCountryId = function () {
            var cfg = this.GetCityCfg(this.Info.lastCity);
            if (cfg == null) {
                return 0;
            }
            return cfg.country;
        };
        MarketModel.prototype.GetHomeCountryId = function () {
            if (this.Info.headquarters == 0) {
                return 0;
            }
            return this.GetCityCfg(this.Info.headquarters).country;
        };
        MarketModel.prototype.IsHomeCountry = function (countryId) {
            return this.GetHomeCountryId() == countryId;
        };
        MarketModel.prototype.IsLastCountry = function (countryId) {
            return this.GetLastCountryId() == countryId;
        };
        MarketModel.prototype.IsHomeCity = function (cityId) {
            return this.Info.headquarters == cityId;
        };
        MarketModel.prototype.IsLastCity = function (cityId) {
            return this.Info.lastCity == cityId;
        };
        MarketModel.prototype.GetPropagandaActor = function () {
            return this.Info.propagandaActor;
        };
        MarketModel.prototype.GetCityList = function (countryId) {
            var lastCountry = this.GetLastCountryId();
            if (countryId == null || lastCountry == countryId) {
                return this.GetLastCityList();
            }
            var cityList = [];
            var cfgList = Game.config.city.getCitysByCountry(countryId);
            for (var index = 0; index < cfgList.length; index++) {
                var cfg = cfgList[index];
                cityList.push(new Games.CityData(cfg.id, Games.CityStateEnum.hasOccupy, cfg.id == this.Info.headquarters));
            }
            cityList = cityList.sort(function (a, b) { return b.num - a.num; });
            return cityList;
        };
        MarketModel.prototype.GetLastCityList = function () {
            var cityList = [];
            if (this.Info.lastCity == 0)
                return cityList;
            var city = this.GetLastCity();
            var lastCountry = city.country;
            cityList.push(city);
            if (city.cfg.next_city != 0) {
                var nextCity = new Games.CityData(city.cfg.next_city, Games.CityStateEnum.Lock, false);
                if (nextCity.country == lastCountry) {
                    cityList.push(nextCity);
                }
            }
            var id = city.cfg.pre_id;
            while (id != 0) {
                city = new Games.CityData(id, Games.CityStateEnum.hasOccupy, id == this.Info.headquarters);
                if (city.country != lastCountry) {
                    break;
                }
                cityList.push(city);
                id = city.cfg.pre_id;
            }
            cityList = cityList.sort(function (a, b) { return a.num - b.num; });
            return cityList;
        };
        MarketModel.prototype.GetCountryList = function () {
            var CountryList = [];
            var id = this.GetLastCountryId();
            var country = new Games.CountryData(id);
            var homeId = this.GetHomeCountryId();
            country.isHome = id == homeId;
            CountryList.push(country);
            id = country.preCountry;
            while (id != 0) {
                country = new Games.CountryData(id);
                country.isHome = id == this.info.headquarters;
                CountryList.push(country);
                id = country.preCountry;
            }
            CountryList = CountryList.sort(function (a, b) { return b.num - a.num; });
            return CountryList;
        };
        MarketModel.prototype.GetStreetList = function () {
            var cityId = this.Info.lastCity;
            var streetList = [];
            var id = this.Info.lastArea;
            var street = this.GetLastStreet();
            streetList.push(street);
            if (street.next != 0) {
                var nextStreet = new Games.CityStreetData(street.next, Games.StreetStateEnum.NotOccupy, 0);
                if (nextStreet.city == cityId) {
                    streetList.push(nextStreet);
                }
            }
            id = street.pre;
            while (id != 0) {
                street = new Games.CityStreetData(id, Games.StreetStateEnum.HasOccupy, 100);
                if (street.city != cityId) {
                    break;
                }
                streetList.push(street);
                id = street.pre;
            }
            return streetList;
        };
        // TODO 接入演员模块
        MarketModel.prototype.GetActorList = function () {
            return Game.moduleModel.actor.getActors();
        };
        MarketModel.prototype.SendSetAmbassador = function (uuid, cityId, index, actId) {
            var actuuid = Game.moduleModel.market.GetActor(actId).uuid;
            Game.protosender.city.SetAmbassador(uuid, cityId, index, actuuid);
        };
        MarketModel.prototype.GetActor = function (id) {
            return Game.moduleModel.actor.getActor(id);
        };
        MarketModel.prototype.GetActorRequire = function (id) {
            var actor = Game.moduleModel.actor.getActor(id);
            if (actor == null) {
                return [];
            }
            var map = Game.config.actor.GetRequire(id);
            map[Games.ActorRequireEnum.scene.toString()] = actor.spectacle;
            map[Games.ActorRequireEnum.performance.toString()] = actor.perform;
            map[Games.ActorRequireEnum.plot.toString()] = actor.plot;
            map[Games.ActorRequireEnum.art.toString()] = actor.art;
            map[Games.ActorRequireEnum.entertainment.toString()] = actor.entertainment;
            return map;
        };
        MarketModel.prototype.IsDemandConform = function (demand, value) {
            switch (demand.type) {
                case Games.ActorRequireEnum.age:
                case Games.ActorRequireEnum.Continents:
                case Games.ActorRequireEnum.sex:
                case Games.ActorRequireEnum.type:
                    return demand.value == value;
                case Games.ActorRequireEnum.art:
                case Games.ActorRequireEnum.entertainment:
                case Games.ActorRequireEnum.performance:
                case Games.ActorRequireEnum.plot:
                case Games.ActorRequireEnum.scene:
                    return demand.value <= value;
                default:
                    break;
            }
            return false;
        };
        MarketModel.prototype.GetActorIcon = function (id) {
            if (id == null) {
                return "";
            }
            var actor = Game.moduleModel.actor.getActor(id);
            if (actor == null) {
                return "";
            }
            var cfg = actor.config;
            var avatarCfg = Game.config.avatar.getConfig(cfg.avatar);
            var iconUrl = avatarCfg.bodyIconUrl;
            return iconUrl;
        };
        MarketModel.prototype.GetMovieCity = function () {
            var lastCity = this.GetLastCity();
            var preCitys = this.GetPreCityList(lastCity, 5);
            var nextCitys = this.GetNextCityList(lastCity, 4);
            var list = preCitys.concat([lastCity], nextCitys);
            return list;
        };
        MarketModel.prototype.GetPreCityList = function (cityData, num) {
            var list = [];
            var cityId = cityData.cfg.pre_id;
            for (var i = 0; i < num; i++) {
                var city = this.GetCity(cityId);
                if (city) {
                    list.push(city);
                    cityId = city.cfg.pre_id;
                }
                else {
                    break;
                }
            }
            list = list.sort(function (a, b) { return a.num - b.num; });
            return list;
        };
        MarketModel.prototype.GetNextCityList = function (cityData, num) {
            var list = [];
            var cityId = cityData.cfg.next_city;
            for (var i = 0; i < num; i++) {
                var city = this.GetCity(cityId);
                if (city) {
                    list.push(city);
                    cityId = city.cfg.next_city;
                }
                else {
                    break;
                }
            }
            list = list.sort(function (a, b) { return a.num - b.num; });
            return list;
        };
        // Task API
        /**
         * 是否完成街道宣传
         * @param id: 街道ID
         *
         */
        MarketModel.prototype.IsTaskCityPointFinish = function (id) {
            var state = this.GetStreetState(id);
            if (state == Games.StreetStateEnum.HasOccupy) {
                return true;
            }
            return false;
        };
        /**
         * 是否完成占领城市
         * @param id: 城市ID
         */
        MarketModel.prototype.IsTaskCityFinish = function (id) {
            var state = this.GetCityState(id);
            if (state == Games.CityStateEnum.hasOccupy) {
                return true;
            }
            return false;
        };
        /**
         * 是否完成n次路演
         * @param num:要求路演次数
         */
        MarketModel.prototype.IsTaskRoadShowNum = function (num) {
            var cfg = Game.config.city.GetCityByNum(num);
            if (cfg) {
                var state = this.GetCityState(cfg.id);
                if (state == Games.CityStateEnum.hasOccupy) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 向某个城市派遣形象大使
         * @param id ：城市ID
         * @param num :派遣的形象大使数量
         */
        MarketModel.prototype.IsTaskAppointActor = function (id, num) {
            if (id != this.Info.headquarters) {
                return false;
            }
            if (this.GetAmbassadorNum() == num) {
                return true;
            }
            return false;
        };
        Object.defineProperty(MarketModel.prototype, "RedNum", {
            get: function () {
                return 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 是否完成城市路演
         * @param id: 城市ID
         */
        MarketModel.prototype.IsTaskRoadShowFinish = function (id) {
            var state = this.GetCityState(id);
            if (state == Games.CityStateEnum.FinishRoadShow) {
                return true;
            }
            return false;
        };
        /**
         *完成n次路演
         */
        MarketModel.prototype.roadShowNum = function () {
            var city = this.GetLastCity();
            if (city) {
                if (city.state == Games.CityStateEnum.FinishRoadShow) {
                    return city.num;
                }
                else {
                    return city.num - 1;
                }
            }
            return 0;
        };
        /**
         * 向某个城市派遣形象大使
         * @param id ：城市ID
         * @param num :派遣的形象大使数量
         */
        MarketModel.prototype.appointActorNum = function (id, num) {
            if (id != this.Info.headquarters) {
                return 0;
            }
            return num <= this.GetAmbassadorNum();
        };
        MarketModel.prototype.TaskGetAmbassadorNum = function (id) {
            if (id != this.Info.headquarters) {
                return 0;
            }
            return this.GetAmbassadorNum();
        };
        return MarketModel;
    }(Games.MModel));
    Games.MarketModel = MarketModel;
})(Games || (Games = {}));
//# sourceMappingURL=MarketModel.js.map