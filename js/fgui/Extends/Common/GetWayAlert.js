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
    var Common;
    (function (Common) {
        var GetWayAlert = /** @class */ (function (_super) {
            __extends(GetWayAlert, _super);
            function GetWayAlert() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GetWayAlert.prototype.setInfo = function (itemId, costNum) {
                this.m_commonDialog.m_closeBtn.onClick(this, this.onCloseSelf);
                var itemcfg = Game.config.item.getConfig(itemId);
                if (itemcfg) {
                    this.m_commonDialog.m_title.text = Game.config.msg.getTxtFormat(MsgKey.build_non_material, itemcfg.name);
                    var userItem = Game.moduleModel.item.getItem(itemId);
                    this.m_assetLoad.url = userItem.itemIconUrl;
                    this.m_assetNum.text = formatNumberUnit(costNum - userItem.itemNum).toString();
                    this.m_descTxt.text = itemcfg.get_way_explain;
                    this.setGetWay(itemcfg);
                }
                Games.MenuLayer.dialog.addChild(this);
                //aspect
                this.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
                this.addRelation(Games.MenuLayer.dialog, fairygui.RelationType.Size);
            };
            GetWayAlert.prototype.setGetWay = function (cfg) {
                this.m_getwayList.removeChildrenToPool();
                var getWayList = cfg.get_way;
                for (var _i = 0, getWayList_1 = getWayList; _i < getWayList_1.length; _i++) {
                    var getway = getWayList_1[_i];
                    var menuCfg = Game.config.menu.getConfig(getway);
                    if (menuCfg) {
                        var getwayItem = this.m_getwayList.addItemFromPool();
                        getwayItem.setMenuId(getway);
                        getwayItem.onClick(this, this.onGetWayItemClick, [getwayItem, getway]);
                        this.m_getwayList.addChild(getwayItem);
                    }
                }
            };
            GetWayAlert.prototype.onGetWayItemClick = function (getwayItem, menuId) {
                var menuConfig = Game.config.menu.getConfig(menuId);
                if (menuConfig) {
                    var openResult = menuConfig.openMenu();
                    if (openResult) {
                        this.onCloseSelf();
                    }
                }
                //Sound
                Game.sound.playSound(SoundKey.MM01_Button);
            };
            GetWayAlert.prototype.onCloseSelf = function () {
                this.parent.removeChild(this);
            };
            return GetWayAlert;
        }(Common.GetWayAlertStruct));
        Common.GetWayAlert = GetWayAlert;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GetWayAlert.js.map