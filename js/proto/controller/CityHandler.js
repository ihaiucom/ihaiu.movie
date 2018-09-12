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
    // 消息处理器
    //--------------------
    var cityHandler = /** @class */ (function (_super) {
        __extends(cityHandler, _super);
        function cityHandler() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.moduleName = Games.ProtoModuleNames.city;
            _this.sSetAmbassador = new Signal();
            _this.sHoldCity = new Signal();
            return _this;
        }
        /**
         * 设置宣传大使
         * @param resData
         */
        cityHandler.prototype.SetPropagandaActor = function (resData) {
        };
        /**
         * 宣传
         * @param resData
         */
        cityHandler.prototype.Propaganda = function (resData) {
            // this.sPropaganda.dispatch();
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_5_StreetPublicize);
            //
            // Game.guide.checkPlayStoryByType(StoryTriggerType.FinishStreet);
        };
        /**
         * 路演
         * @param resData
         */
        cityHandler.prototype.Roadshow = function (resData) {
            // let ret = resData.result;
            // this.sRoadshow.dispatch();
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_6_RoadShow);
        };
        /**
         * 设置形象大使
         * @param resData
         */
        cityHandler.prototype.SetAmbassador = function (resData) {
            this.sSetAmbassador.dispatch();
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_12_AppointActor);
        };
        /**
         * 领取收益
         * @param resData
         */
        cityHandler.prototype.GetReward = function (resData) {
            // this.sGetReward.dispatch();
            Game.moduleModel.market.IsGetCityReward = true;
        };
        cityHandler.prototype.HoldCity = function (resData) {
            this.sHoldCity.dispatch();
            Game.moduleModel.task.clientUpdateMainTaskProgress(Games.MainTaskRequireType.RequireType_7_CityFinish);
        };
        return cityHandler;
    }(Games.ProtoHandler));
    Games.cityHandler = cityHandler;
})(Games || (Games = {}));
//# sourceMappingURL=CityHandler.js.map