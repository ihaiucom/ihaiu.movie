/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////
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
var fgui;
(function (fgui) {
    var WarMovie;
    (function (WarMovie) {
        var WarCityItem = /** @class */ (function (_super) {
            __extends(WarCityItem, _super);
            function WarCityItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCityItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 点击按钮
                this.onClick(this, this.onClickBtn);
            };
            WarCityItem.prototype.onClickBtn = function () {
                if (!this.selectedThis) {
                    this.selectedCallBack(this.curData);
                }
            };
            WarCityItem.prototype.setData = function (cityData, curCity, selectedCallBack) {
                this.curData = cityData;
                this.curCity = curCity;
                this.selectedCallBack = selectedCallBack;
                if (this.curCity !== null && this.curCity.id === cityData.id) {
                    this.selectedThis = true;
                }
                else {
                    this.selectedThis = false;
                }
                this.selected = this.selectedThis;
                this.m_title.text = cityData.num.toFixed(0) + "." + cityData.name;
                if (cityData.state === Games.CityStateEnum.hasOccupy) {
                    this.m_gray.setSelectedIndex(0);
                }
                else {
                    this.m_gray.setSelectedIndex(1);
                }
            };
            return WarCityItem;
        }(WarMovie.WarCityItemStruct));
        WarMovie.WarCityItem = WarCityItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCityItem.js.map