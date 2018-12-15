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
        var StreetMainPanel = /** @class */ (function (_super) {
            __extends(StreetMainPanel, _super);
            function StreetMainPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StreetMainPanel.prototype.onWindowInited = function () {
                this.m_rankPanel.onInit(this.moduleWindow);
                this.m_streetPanel.onInit(this.moduleWindow);
            };
            StreetMainPanel.prototype.onWindowDestory = function () {
                this.m_rankPanel.onWindowDestory();
                this.m_streetPanel.onWindowDestory();
            };
            StreetMainPanel.prototype.onWindowOpen = function () {
                var arg = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    arg[_i] = arguments[_i];
                }
                this.OpenStreetRankPanel();
            };
            StreetMainPanel.prototype.onWindowShow = function () {
                this.m_rankPanel.onWindowShow();
                this.m_streetPanel.onWindowShow();
            };
            StreetMainPanel.prototype.onWindowHide = function () {
                this.m_rankPanel.onWindowHide();
                this.m_streetPanel.onWindowHide();
            };
            StreetMainPanel.prototype.UpdateView = function () {
                switch (this.m_showTab.selectedIndex) {
                    case 0:
                        this.m_rankPanel.UpdateView();
                        break;
                    case 1:
                        this.m_streetPanel.UpdateView();
                        break;
                    default:
                        break;
                }
            };
            StreetMainPanel.prototype.OpenStreetRankPanel = function () {
                this.m_showTab.setSelectedIndex(0);
                this.m_rankPanel.onWindowOpen();
                if (this.m_rankPanel.x == 0) {
                    return;
                }
                this.m_rankPanel.x = this.width;
                this.m_streetPanel.x = 0;
                Laya.Tween.to(this.m_rankPanel, { x: 0 }, 600);
                Laya.Tween.to(this.m_streetPanel, { x: -this.width }, 600);
            };
            StreetMainPanel.prototype.OpenStreetListPanel = function () {
                this.m_showTab.setSelectedIndex(1);
                this.m_streetPanel.onWindowOpen();
                this.m_rankPanel.x = 0;
                this.m_streetPanel.x = -this.width;
                Laya.Tween.to(this.m_rankPanel, { x: this.width }, 600);
                Laya.Tween.to(this.m_streetPanel, { x: 0 }, 600);
            };
            return StreetMainPanel;
        }(Street.StreetMainPanelStruct));
        Street.StreetMainPanel = StreetMainPanel;
    })(Street = fgui.Street || (fgui.Street = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StreetMainPanel.js.map