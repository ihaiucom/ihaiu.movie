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
    var Activity;
    (function (Activity) {
        var ActivityMain = /** @class */ (function (_super) {
            __extends(ActivityMain, _super);
            function ActivityMain() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.delayShowTimeOutNum = -1;
                return _this;
            }
            ActivityMain.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_topList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 选中列表某一项
                this.m_topList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
            };
            // 关闭
            ActivityMain.prototype.onClickCloseBtn = function () {
                Game.moduleModel.secretary.curSelectKey = 0;
                this.moduleWindow.menuBack();
            };
            ActivityMain.prototype.onWindowShow = function () {
                if (!this.comList) {
                    this.comList = new Dictionary();
                }
                Game.moduleModel.activity.sUpdateSign.add(this.updateSign, this);
                Game.moduleModel.activity.sUpdateSeven.add(this.updateSeven, this);
                Game.moduleModel.secretary.sGetLicenseUpdate.add(this.sGetLicenseUpdate, this);
                Game.protoOkEvent.add(ProtoEventKey.SecretaryData, this.updateSecretaryHandler, this);
                this.setData();
            };
            ActivityMain.prototype.onWindowHide = function () {
                if (this.delayShowTimeOutNum !== -1) {
                    clearTimeout(this.delayShowTimeOutNum);
                }
                Game.moduleModel.activity.sUpdateSign.remove(this.updateSign, this);
                Game.moduleModel.activity.sUpdateSeven.remove(this.updateSeven, this);
                Game.moduleModel.secretary.sGetLicenseUpdate.remove(this.sGetLicenseUpdate, this);
                Game.protoOkEvent.remove(ProtoEventKey.SecretaryData, this.updateSecretaryHandler, this);
                var panelList = this.comList.getValues();
                for (var i = 0; i < panelList.length; i++) {
                    panelList[i].visible = false;
                }
            };
            // 小秘书领取许可证反馈
            ActivityMain.prototype.sGetLicenseUpdate = function () {
                if (this.applyLicensePanel && this.applyLicensePanel.visible) {
                    this.applyLicensePanel.delayShowFx();
                }
            };
            // 更新签到信息
            ActivityMain.prototype.updateSign = function () {
                GlobalModalWaiting.hide();
                if (this.signPanel && this.signPanel !== null && this.signPanel.visible) {
                    this.signPanel.signRewardTip();
                }
                // 更新红点
                this.m_topList.numItems = this.m_topList.numItems;
            };
            // 更新七日信息
            ActivityMain.prototype.updateSeven = function () {
                GlobalModalWaiting.hide();
                if (this.sevenPanel && this.sevenPanel !== null && this.sevenPanel.visible) {
                    this.sevenPanel.onRefrush();
                }
                // 更新红点
                this.m_topList.numItems = this.m_topList.numItems;
            };
            // 秘书功能更新
            ActivityMain.prototype.updateSecretaryHandler = function () {
                if (this.secretaryPanel && this.secretaryPanel.visible) {
                    this.secretaryPanel.setData();
                }
                if (this.applyLicensePanel && this.applyLicensePanel.visible) {
                    this.applyLicensePanel.setData(this);
                }
                this.m_topList.numItems = this.m_topList.numItems;
                //
                if (Game.moduleModel.secretary.curSelectKey > 0 && Game.moduleModel.secretary.isForever) {
                    Game.moduleModel.secretary.openSecretary(Game.moduleModel.secretary.curSelectKey);
                }
            };
            ActivityMain.prototype.setData = function (num) {
                var _this = this;
                if (num === void 0) { num = 0; }
                if (this.moduleWindow.menuParameter.args.length > 0) {
                    this.curSelectItem = this.moduleWindow.menuParameter.args[0];
                    var ctl = Game.menu.getMenuCtl(this.moduleWindow.menuId);
                    if (ctl && ctl.backMenuId > 0) {
                        var backCtrl = Game.menu.getMenuCtl(ctl.backMenuId);
                        switch (backCtrl.menuId) {
                            case MenuId.Market:
                                Game.moduleModel.secretary.curSelectKey = ESecretary.cityTimes;
                                break;
                            case MenuId.Official:
                                Game.moduleModel.secretary.curSelectKey = ESecretary.workTimes;
                                break;
                            default:
                                Game.moduleModel.secretary.curSelectKey = ESecretary.visitTimes;
                                break;
                        }
                    }
                    else {
                        Game.moduleModel.secretary.curSelectKey = ESecretary.visitTimes;
                    }
                }
                else {
                    this.curSelectItem = num;
                }
                if (this.moduleWindow.menuId === MenuId.Weal) {
                    // 福利
                    if (!this.welfareConfig || this.welfareConfig === null) {
                        this.welfareConfig = Game.config.welfare.getConfigList();
                    }
                    this.m_title.text = TEXT.WelfTitle;
                    this.m_topList.numItems = 0;
                    this.delayShowTimeOutNum = setTimeout(function () {
                        _this.m_topList.numItems = _this.welfareConfig.length;
                        _this.m_topList.addSelection(_this.curSelectItem);
                        _this.openWelfSwitch();
                    }, 100);
                }
                else if (this.moduleWindow.menuId === MenuId.Event) {
                    this.m_title.text = TEXT.ActivityTitle;
                    // 是否存在七日登录活动
                    var sevenHave = Game.moduleModel.activity.sevenInit(null);
                    if (sevenHave) {
                        this.m_noActivityControl.setSelectedIndex(0);
                        // 活动
                        if (!this.activityConfig || this.activityConfig === null) {
                            this.activityConfig = Game.config.activities.getConfigList();
                        }
                        for (var i = this.activityConfig.length - 1; i >= 0; i--) {
                            if (this.activityConfig[i].id === 1) {
                                this.activityConfig.slice(i, 1);
                            }
                        }
                        this.m_topList.numItems = this.activityConfig.length;
                        this.m_topList.addSelection(this.curSelectItem);
                        this.openActivitySwitch();
                    }
                    else {
                        this.m_topList.numItems = 0;
                        this.m_noActivityControl.setSelectedIndex(1);
                    }
                }
            };
            // 福利界面切换
            ActivityMain.prototype.openWelfSwitch = function () {
                var panelList = this.comList.getValues();
                for (var i = 0; i < panelList.length; i++) {
                    panelList[i].visible = false;
                }
                switch (this.curSelectItem) {
                    case 0:
                        {
                            if (!this.signPanel || this.signPanel === null || !this.comList.hasKey("signPanel")) {
                                this.signPanel = fgui.Activity.SignPanel.createInstance();
                                this.m_panel.addChild(this.signPanel);
                                this.signPanel.setXY((this.m_panel.width - this.signPanel.width) / 2, 0);
                                this.comList.add("signPanel", this.signPanel);
                            }
                            Game.moduleModel.activity.signInit(null);
                            this.signPanel.setData();
                            this.signPanel.height = this.m_panel.height;
                        }
                        break;
                    case 1:
                        {
                            if (!this.secretaryPanel || this.secretaryPanel === null || !this.comList.hasKey("secretaryPanel")) {
                                this.secretaryPanel = fgui.Activity.SecretaryPanel.createInstance();
                                this.m_panel.addChild(this.secretaryPanel);
                                this.secretaryPanel.setXY((this.m_panel.width - this.secretaryPanel.width) / 2, 0);
                                this.comList.add("secretaryPanel", this.secretaryPanel);
                            }
                            this.secretaryPanel.setData();
                        }
                        break;
                    case 2:
                        {
                            if (!this.applyLicensePanel || this.applyLicensePanel === null || !this.comList.hasKey("applyLicensePanel")) {
                                this.applyLicensePanel = fgui.Activity.LicenseReq.createInstance();
                                this.m_panel.addChild(this.applyLicensePanel);
                                this.applyLicensePanel.setXY((this.m_panel.width - this.applyLicensePanel.width) / 2, 0);
                                this.comList.add("applyLicensePanel", this.applyLicensePanel);
                            }
                            this.applyLicensePanel.setData(this);
                        }
                        break;
                }
            };
            // 活动界面切换
            ActivityMain.prototype.openActivitySwitch = function () {
                var panelList = this.comList.getValues();
                for (var i = 0; i < panelList.length; i++) {
                    panelList[i].visible = false;
                }
                switch (this.curSelectItem) {
                    case 0:
                        {
                            if (!this.sevenPanel || this.sevenPanel === null || !this.comList.hasKey("sevenPanel")) {
                                this.sevenPanel = fgui.Activity.ActivitySeven.createInstance();
                                this.m_panel.addChild(this.sevenPanel);
                                this.sevenPanel.setXY((this.m_panel.width - this.sevenPanel.width) / 2, 0);
                                this.comList.add("sevenPanel", this.sevenPanel);
                            }
                            this.sevenPanel.setData(this.activityConfig[this.curSelectItem]);
                            this.sevenPanel.height = this.m_panel.height;
                        }
                        break;
                }
            };
            // 顶部标签列表item
            ActivityMain.prototype.initItem = function (index, obj) {
                var item = obj;
                if (this.moduleWindow.menuId === MenuId.Weal) {
                    item.setDataWelf(this.welfareConfig[index]);
                }
                else if (this.moduleWindow.menuId === MenuId.Event) {
                    item.setData(this.activityConfig[index]);
                }
            };
            // 点击某个item
            ActivityMain.prototype.onClickItem = function (obj) {
                var index = this.m_topList.getChildIndex(obj);
                if (this.curSelectItem !== index) {
                    // 切换活动面板
                    this.curSelectItem = index;
                    if (this.moduleWindow.menuId === MenuId.Weal) {
                        this.openWelfSwitch();
                    }
                    else if (this.moduleWindow.menuId === MenuId.Event) {
                        this.openActivitySwitch();
                    }
                }
            };
            return ActivityMain;
        }(Activity.ActivityMainStruct));
        Activity.ActivityMain = ActivityMain;
    })(Activity = fgui.Activity || (fgui.Activity = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ActivityMain.js.map