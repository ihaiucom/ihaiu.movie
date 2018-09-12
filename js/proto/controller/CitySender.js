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
    //====================
    // 消息发送器
    //--------------------
    var citySender = /** @class */ (function (_super) {
        __extends(citySender, _super);
        function citySender() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.city;
            return _this;
        }
        /**
         * 设置宣传大使
         * @param uuid
         * @param cityId
         * @param areaId
         * @param actorId
         */
        citySender.prototype.SetPropagandaActor = function (uuid, cityId, areaId, actorId) {
            uuid = "";
            var reqData = new Proto.API.city.SetPropagandaActorRequest();
            reqData.uuid = uuid;
            reqData.cityId = cityId;
            reqData.areaId = areaId;
            reqData.actorId = actorId;
            // Game.protohandler.City.sSetPropagandaActor.dispatch();
            this.send(reqData);
        };
        /**
         * 宣传
         * @param uuid
         * @param cityId
         * @param areaId
         */
        citySender.prototype.Propaganda = function (uuid, cityId, areaId) {
            uuid = "";
            var reqData = new Proto.API.city.PropagandaRequest();
            reqData.uuid = uuid;
            reqData.cityId = cityId;
            reqData.areaId = areaId;
            // Game.moduleModel.market.Info.lastAreaProgress = 100;
            // Game.moduleModel.market.Info.lastArea = 11019;
            // Game.protohandler.City.sPropaganda.dispatch();
            this.send(reqData);
        };
        /**
         * 路演
         * @param uuid
         * @param cityId
         * @param areaId
         */
        citySender.prototype.Roadshow = function (uuid, cityId, areaId) {
            uuid = "";
            var reqData = new Proto.API.city.RoadshowRequest();
            reqData.uuid = uuid;
            reqData.cityId = cityId;
            reqData.areaId = areaId;
            // Game.moduleModel.market.Info.roadShowFlag = true;
            // Game.protohandler.City.sRoadshow.dispatch();
            this.send(reqData);
        };
        /**
         * 设置形象大使
         * @param uuid
         * @param cityId
         * @param psition
         */
        citySender.prototype.SetAmbassador = function (uuid, cityId, psition, actuuid) {
            var reqData = new Proto.API.city.SetAmbassadorRequest();
            reqData.uuid = uuid;
            reqData.cityId = cityId;
            reqData.psition = psition;
            reqData.actuuid = actuuid;
            // Game.protohandler.City.sSetAmbassador.dispatch();
            this.send(reqData);
        };
        /**
         * 领取收益
         * @param uuid
         * @param cityId
         */
        citySender.prototype.GetReward = function (uuid, cityId) {
            var reqData = new Proto.API.city.GetRewardRequest();
            reqData.uuid = uuid;
            reqData.cityId = cityId;
            // Game.protohandler.City.sGetReward.dispatch();
            this.send(reqData);
        };
        citySender.prototype.HoldCity = function (uuid) {
            if (uuid === void 0) { uuid = ""; }
            var reqData = new Proto.API.city.HoldCityRequest();
            reqData.uuid = uuid;
            // reqData.cityId = cityId;
            this.send(reqData);
        };
        return citySender;
    }(Games.ProtoSender));
    Games.citySender = citySender;
})(Games || (Games = {}));
//# sourceMappingURL=CitySender.js.map