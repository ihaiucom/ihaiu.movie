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
    var MainUI;
    (function (MainUI) {
        var CooperationForMainUI = /** @class */ (function (_super) {
            __extends(CooperationForMainUI, _super);
            function CooperationForMainUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.autoCloseTimeout = 0;
                return _this;
            }
            CooperationForMainUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 显示合作界面
                this.m_add.onClick(this, this.onClickAddBtn);
                // 显示或收起
                this.m_icon.onClick(this, this.onClickIconBtn);
                // 任务
                this.m_iconBtn1.onClick(this, this.onClickMissBtn);
                // 订单
                this.m_iconBtn2.onClick(this, this.onClickOrderBtn);
                // 赠送美元
                this.m_iconBtn3.onClick(this, this.onClickDollarBtn);
                // 赠送金币
                this.m_iconBtn4.onClick(this, this.onClickCoinsBtn);
                for (var i = 0; i < this.numChildren; i++) {
                    var item = this.getChildAt(i);
                    if (item.name.startsWith("iconBtn")) {
                        var button = item;
                        var menuButtonData = void 0;
                        if (!isNullOrEmpty(button.data)) {
                            menuButtonData = JSON.parse(button.data);
                        }
                        else {
                            menuButtonData = { menuId: 0 };
                        }
                        var menuConfig = Game.config.menu.getConfig(menuButtonData.menuId);
                        if (menuConfig) {
                            button.text = menuConfig.name;
                            if (!isNullOrEmpty(menuConfig.iconUrl))
                                button.icon = menuConfig.iconUrl;
                        }
                    }
                }
            };
            CooperationForMainUI.prototype.onClickMissBtn = function () {
                Game.menu.open(MenuId.Cooperation);
            };
            CooperationForMainUI.prototype.onClickOrderBtn = function () {
                if (Game.moduleModel.order.getCooperationOrderList().length > 0) {
                    Game.menu.open(MenuId.Order, true);
                }
                else {
                    Game.system.toastMsg(MsgKey.cooperative_order_no);
                }
            };
            CooperationForMainUI.prototype.onClickDollarBtn = function () {
                var valNum = (User.info.level / 4 + 1) * User.info.level * 80 + 420;
                var val = formatNumberUnit(valNum, 1);
                Game.system.confirmMsg(MsgKey.cooperated_send, [val, Game.config.item.getConfig(EItemId.dollar).name], TEXT.CooperationGiveRewardDollar, this, function () {
                    if (Game.moduleModel.item.getItemNum(EItemId.dollar) < valNum) {
                        Game.system.openItemWay(EItemId.dollar, valNum);
                    }
                    else {
                        Game.moduleModel.cooperation.sendGiveReward(EItemId.dollar);
                    }
                }, //ok
                function () { }, //no
                TEXT.ButtonOk, TEXT.ButtonCannel, false);
            };
            CooperationForMainUI.prototype.onClickCoinsBtn = function () {
                var valNum = (User.info.level / 4 + 1) * User.info.level * 60 + 440;
                var val = formatNumberUnit(valNum, 1);
                Game.system.confirmMsg(MsgKey.cooperated_send, [val, Game.config.item.getConfig(EItemId.gold).name], TEXT.CooperationGiveRewardGold, this, function () {
                    if (Game.moduleModel.item.getItemNum(EItemId.gold) < valNum) {
                        Game.system.openItemWay(EItemId.gold, valNum);
                    }
                    else {
                        Game.moduleModel.cooperation.sendGiveReward(EItemId.gold);
                    }
                }, //ok
                function () { }, //no
                TEXT.ButtonOk, TEXT.ButtonCannel, false);
            };
            CooperationForMainUI.prototype.onClickAddBtn = function () {
                if (this.m_have.selectedIndex === 0) {
                    Game.menu.open(MenuId.Cooperation);
                }
            };
            CooperationForMainUI.prototype.onClickIconBtn = function () {
                if (this.m_have.selectedIndex === 1) {
                    this.m_have.setSelectedIndex(2);
                }
                else if (this.m_have.selectedIndex === 2) {
                    this.m_have.setSelectedIndex(1);
                }
            };
            CooperationForMainUI.prototype.setData = function () {
                var _this = this;
                if (!this.visible) {
                    this.visible = true;
                }
                if (Game.moduleModel.cooperation.havePartner) {
                    if (Game.moduleModel.cooperation.partnerInfData && Game.moduleModel.cooperation.partnerInfData !== null) {
                        if (this.m_have.selectedIndex === 0) {
                            this.m_have.setSelectedIndex(1);
                            this.m_icon.m_icon.icon = Game.config.headPortrait.GetPlayerIconUrl(Game.moduleModel.cooperation.partnerInfData.portrait, Game.moduleModel.cooperation.partnerInfData.sex);
                        }
                    }
                    else {
                        if (this.autoCloseTimeout === 0) {
                            this.searchPartner();
                            this.autoCloseTimeout = setTimeout(function () {
                                _this.searchPartner();
                            }, 500);
                        }
                    }
                }
                else {
                    if (this.m_have.selectedIndex !== 0) {
                        this.m_have.setSelectedIndex(0);
                    }
                }
            };
            CooperationForMainUI.prototype.searchPartner = function () {
                if (Game.moduleModel.cooperation.partnerInfData && Game.moduleModel.cooperation.partnerInfData !== null) {
                    clearTimeout(this.autoCloseTimeout);
                    this.autoCloseTimeout = 0;
                }
                else {
                    if (Game.moduleModel.cooperation.cooperData && Game.moduleModel.cooperation.cooperData !== null && Game.moduleModel.cooperation.cooperData.friendEntityId.length > 0) {
                        Game.moduleModel.cooperation.sendGetOtherInf(parseInt(Game.moduleModel.cooperation.cooperData.friendEntityId));
                    }
                }
            };
            CooperationForMainUI.prototype.refreshRed = function () {
                this.m_iconBtn2.m_c_red_visible.selectedIndex = Game.moduleModel.order.cooperateRedNum > 0 ? 1 : 0;
            };
            return CooperationForMainUI;
        }(MainUI.CooperationForMainUIStruct));
        MainUI.CooperationForMainUI = CooperationForMainUI;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=CooperationForMainUI.js.map