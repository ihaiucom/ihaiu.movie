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
    var Street;
    (function (Street) {
        var StreetCinemaView = /** @class */ (function (_super) {
            __extends(StreetCinemaView, _super);
            function StreetCinemaView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetCinemaView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_listCinema.itemRenderer = new Handler(this, this.RenderCinemaItem, null, false);
                this.m_btnSign.onClick(this, this.OnBtnSignClick);
            };
            StreetCinemaView.prototype.Render = function (data, moduleWindow) {
                this.streetData = data;
                this.moduleWindow = moduleWindow;
                // this.m_name.text = this.streetData.cinemaName;
                if (this.streetData.canSign) {
                    this.m_num.text = formatNumberUnit(this.streetData.cinemaStaticNum);
                    this.m_state.setSelectedIndex(2);
                }
                else if (this.streetData.hasCinema) {
                    this.m_num.text = formatNumberUnit(this.streetData.cinemaNum);
                    this.m_state.setSelectedIndex(3);
                }
                else {
                    var cinemaList = this.streetData.Cfg.cinema;
                    if (cinemaList.length == 1) {
                        this.m_state.setSelectedIndex(0);
                        var data_1 = this.streetData.Cfg.cinema[0];
                        var cfg = Game.config.cinema.getConfig(data_1);
                        this.m_cinemaItem.icon = cfg.iconUrl;
                        // this.m_cinemaItem.title = cfg.name;
                        this.m_cinemaItem.m_num.text = formatNumberUnit(cfg.num);
                        this.m_cinemaItem.Level = cfg.sign_level;
                    }
                    else {
                        this.m_state.setSelectedIndex(1);
                        this.m_listCinema.numItems = cinemaList.length;
                    }
                }
            };
            StreetCinemaView.prototype.OnBtnSignClick = function () {
                this.moduleWindow.OnSignClick(this);
            };
            StreetCinemaView.prototype.RenderCinemaItem = function (index, obj) {
                var data = this.streetData.Cfg.cinema[index];
                var cfg = Game.config.cinema.getConfig(data);
                obj.icon = cfg.iconUrl;
                // obj.title = cfg.name;
                obj.m_num.text = formatNumberUnit(cfg.num);
                obj.Level = cfg.sign_level;
            };
            return StreetCinemaView;
        }(Street.StreetCinemaViewStruct));
        Street.StreetCinemaView = StreetCinemaView;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetCinemaView.js.map