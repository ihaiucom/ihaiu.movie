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
        var StreetItem = /** @class */ (function (_super) {
            __extends(StreetItem, _super);
            function StreetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btnSelect.onClick(this, this.OnSelect);
            };
            StreetItem.prototype.Render = function (data, moduleWindow) {
                this.streetData = data;
                this.moduleWindow = moduleWindow;
                this.m_streetIcon.icon = this.streetData.iconUrl;
                this.m_streetIcon.title = this.streetData.Cfg.name;
                this.m_streetIcon.grayed = this.streetData.isLock;
                this.m_streetIcon.isRed = this.streetData.isCurrent && Game.moduleModel.street.canReward;
                this.m_playerIcon.m_icon.m_icon.url = User.headIconUrl;
                this.m_progress.value = Game.moduleModel.street.cupNum;
                this.m_progress.max = Game.moduleModel.street.GetMaxCup(this.streetData.id);
                this.m_isCurrent.setSelectedIndex(this.streetData.isCurrent ? 1 : 0);
                this.height = this.streetData.isCurrent ? 288 : 222;
                this.m_cinemaView.Render(this.streetData, this.moduleWindow);
                this.m_rewardView.Render(this.streetData);
            };
            StreetItem.prototype.OnSelect = function () {
                this.moduleWindow.OnItemClick(this);
            };
            return StreetItem;
        }(Street.StreetItemStruct));
        Street.StreetItem = StreetItem;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetItem.js.map