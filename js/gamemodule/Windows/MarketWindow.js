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
    var MarketSubEnum;
    (function (MarketSubEnum) {
        MarketSubEnum[MarketSubEnum["Main"] = 1] = "Main";
        MarketSubEnum[MarketSubEnum["CountryList"] = 2] = "CountryList";
        MarketSubEnum[MarketSubEnum["Publicity"] = 3] = "Publicity";
        MarketSubEnum[MarketSubEnum["RoadShow"] = 4] = "RoadShow";
        MarketSubEnum[MarketSubEnum["SelectActor"] = 5] = "SelectActor";
    })(MarketSubEnum = Games.MarketSubEnum || (Games.MarketSubEnum = {}));
    var MarketTabEnum;
    (function (MarketTabEnum) {
        MarketTabEnum[MarketTabEnum["CityInfo"] = 0] = "CityInfo";
        MarketTabEnum[MarketTabEnum["Occupy"] = 1] = "Occupy";
    })(MarketTabEnum = Games.MarketTabEnum || (Games.MarketTabEnum = {}));
    //======================
    // 市场窗口
    //----------------------
    var MarketWindow = /** @class */ (function (_super) {
        __extends(MarketWindow, _super);
        function MarketWindow() {
            var _this = _super.call(this) || this;
            _this.countryListSubwindow = new Games.MarketCountryListSubwindow(MarketSubEnum.CountryList, _this);
            _this.publicitySubwindow = new Games.MarketPublicitySubwindow(MarketSubEnum.Publicity, _this);
            _this.roadShowSubwindow = new Games.MarketRoadShowSubwindow(MarketSubEnum.RoadShow, _this);
            _this.selectActorSubwindow = new Games.MarketSelectActorSubwindow(MarketSubEnum.SelectActor, _this);
            _this.registerSubwindow(_this.countryListSubwindow);
            _this.registerSubwindow(_this.publicitySubwindow);
            _this.registerSubwindow(_this.roadShowSubwindow);
            _this.registerSubwindow(_this.selectActorSubwindow);
            // 添加依赖资源
            _this.addAssetForFguiComponent(fgui.Market.MarketMainPanel);
            return _this;
        }
        // 生成动态预加载资源
        MarketWindow.prototype.generateAssetsForDynmic = function () {
            _super.prototype.generateAssetsForDynmic.call(this);
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(1001));
            this.addDynmicAssetForAvatarAll(Game.config.avatar.getConfig(6101));
        };
        // 菜单创建
        MarketWindow.prototype.onMenuCreate = function () {
            this.conent = fgui.Market.MarketMainPanel.createInstance();
            this.contentPane = this.conent;
            this.center();
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
            // 注册Tab
            this.registerTab(MarketTabEnum.CityInfo, this.conent.m_cityInfoPanel);
            this.registerTab(MarketTabEnum.Occupy, this.conent.m_occupyPanel);
            _super.prototype.onMenuCreate.call(this);
        };
        //=========================
        // 显示完成
        // 可以在这里添加协议消息监听
        //-------------------------
        MarketWindow.prototype.onShowComplete = function () {
            _super.prototype.onShowComplete.call(this);
        };
        //=========================
        // 隐藏完成
        // 可以在这里移除协议消息监听
        //-------------------------
        MarketWindow.prototype.onHideComplete = function () {
            _super.prototype.onHideComplete.call(this);
        };
        MarketWindow.prototype.destory = function () {
            console.log("destory");
            this.conent.OnDestory();
            _super.prototype.destory.call(this);
        };
        MarketWindow.prototype.guideStreetBtn = function () {
            return this.conent.m_occupyPanel.guideGetCityPointBtn();
        };
        MarketWindow.prototype.guidFreeActorBtn = function () {
            var list = this.conent.m_cityInfoPanel.dispatchList;
            if (list == null) {
                return this.conent.m_cityInfoPanel.m_listActor.getChildAt(0);
            }
            for (var index = 0; index < list.length; index++) {
                var data = list[index];
                if (data == 0) {
                    return this.conent.m_cityInfoPanel.m_listActor.getChildAt(index);
                }
            }
            return this.conent.m_cityInfoPanel.m_listActor.getChildAt(0);
        };
        Object.defineProperty(MarketWindow.prototype, "guideCurrentCountry", {
            get: function () {
                return this.conent.countryId;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MarketWindow.prototype, "guideCurrentCity", {
            get: function () {
                return this.conent.CurrentCity.id;
            },
            enumerable: true,
            configurable: true
        });
        MarketWindow.prototype.guideSelectCity = function () {
            var arg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arg[_i] = arguments[_i];
            }
            for (var index = 0; index < this.conent.cityDatas.length; index++) {
                var data = this.conent.cityDatas[index];
                if (data.id == arg[0]) {
                    this.conent.m_list.scrollToView(index);
                    return this.conent.m_list.getChildAt(this.conent.m_list.itemIndexToChildIndex(index));
                }
            }
            return null;
        };
        MarketWindow.prototype.guideHomeCityBtn = function () {
            return this.guideSelectCity(Game.moduleModel.market.Info.headquarters);
        };
        return MarketWindow;
    }(Games.MWindow));
    Games.MarketWindow = MarketWindow;
})(Games || (Games = {}));
//# sourceMappingURL=MarketWindow.js.map