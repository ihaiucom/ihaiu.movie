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
        var WarContinueRewardItem = /** @class */ (function (_super) {
            __extends(WarContinueRewardItem, _super);
            function WarContinueRewardItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.openLv = 0;
                _this.itemId = 0;
                return _this;
            }
            WarContinueRewardItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 确定按钮
                this.onClick(this, this.onClickOkBtn);
            };
            WarContinueRewardItem.prototype.onClickOkBtn = function () {
                if (this.m_c1.selectedIndex === 1) {
                    Game.system.showItemInfo(this, this.itemId);
                }
                else {
                    Game.system.toastText(format(TEXT.guanzhuduOpenTip, this.openLv));
                }
            };
            WarContinueRewardItem.prototype.setData = function (index, cityPopConfig, curGZLv, noLock) {
                if (noLock === void 0) { noLock = false; }
                this.m_c1.setSelectedIndex(0);
                var conLv = 0;
                var confId = 0;
                this.itemId = 0;
                switch (index) {
                    case 0:
                        {
                            confId = Game.config.item.getConfig(cityPopConfig.level_out_3).icon;
                            this.itemId = cityPopConfig.level_out_3;
                            if (curGZLv >= 3) {
                                conLv = 1;
                            }
                            else {
                                conLv = 0;
                                this.openLv = 3;
                            }
                        }
                        break;
                    case 1:
                        {
                            confId = Game.config.item.getConfig(cityPopConfig.level_out_7).icon;
                            this.itemId = cityPopConfig.level_out_7;
                            if (curGZLv >= 7) {
                                conLv = 1;
                            }
                            else {
                                conLv = 0;
                                this.openLv = 7;
                            }
                        }
                        break;
                    case 2:
                        {
                            confId = Game.config.item.getConfig(cityPopConfig.level_out_10).icon;
                            this.itemId = cityPopConfig.level_out_10;
                            if (curGZLv >= 10) {
                                conLv = 1;
                            }
                            else {
                                conLv = 0;
                                this.openLv = 10;
                            }
                        }
                        break;
                    case 3:
                        {
                            confId = Game.config.item.getConfig(cityPopConfig.level_out_15).icon;
                            this.itemId = cityPopConfig.level_out_15;
                            if (curGZLv >= 15) {
                                conLv = 1;
                            }
                            else {
                                conLv = 0;
                                this.openLv = 15;
                            }
                        }
                        break;
                    case 4:
                        {
                            confId = Game.config.item.getConfig(cityPopConfig.level_out_20).icon;
                            this.itemId = cityPopConfig.level_out_20;
                            if (curGZLv >= 20) {
                                conLv = 1;
                            }
                            else {
                                conLv = 0;
                                this.openLv = 20;
                            }
                        }
                        break;
                }
                this.icon = Game.config.avatar.getConfig(confId).iconUrl;
                if (noLock)
                    conLv = 1;
                this.m_c1.setSelectedIndex(conLv);
            };
            return WarContinueRewardItem;
        }(WarMovie.WarContinueRewardItemStruct));
        WarMovie.WarContinueRewardItem = WarContinueRewardItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarContinueRewardItem.js.map