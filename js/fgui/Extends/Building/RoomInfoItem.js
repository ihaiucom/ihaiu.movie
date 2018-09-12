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
    var Building;
    (function (Building) {
        var RoomInfoItem = /** @class */ (function (_super) {
            __extends(RoomInfoItem, _super);
            function RoomInfoItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoomInfoItem.prototype.setInfo = function (info) {
                this.info = info;
                this.cfg = Game.config.buildingLevel.getConfig(this.info.id);
                this.m_iconLoader.visible = true;
                if (this.info.isBuilded) {
                    this.m_roomLock.visible = true;
                    var reason = Game.config.msg.getTxtFormat(MsgKey.build_be_builded);
                    this.setBuildLock(reason);
                }
                else {
                    this.m_room_title.text = info.name;
                    this.m_roomLock.visible = false;
                    this.setBuildCost();
                }
                this.m_btn_roomTip.onClick(this, this.showRoomTips);
                this.setBuildIcon();
                //cache bitmap
                this.displayObject.cacheAs = "bitmap";
            };
            RoomInfoItem.prototype.setBuildIcon = function () {
                this.m_iconLoader.m_room_icon.url = Res.getRoom(this.info.type);
            };
            //升级消耗
            RoomInfoItem.prototype.setBuildCost = function () {
                this.m_assetList.removeChildrenToPool();
                var costList = this.cfg.cost;
                for (var _i = 0, costList_1 = costList; _i < costList_1.length; _i++) {
                    var costItem = costList_1[_i];
                    var itemCfg = Game.config.item.getConfig(costItem.itemId);
                    var userItem = Game.moduleModel.item.getItem(costItem.itemId);
                    var asset = this.m_assetList.addItemFromPool();
                    asset.setEnoughInfo(userItem.itemIconUrl, costItem.itemId, costItem.itemNum);
                    this.m_assetList.addChild(asset);
                }
            };
            RoomInfoItem.prototype.showRoomTips = function () {
                this.m_tips.visible = true;
                this.m_tips.m_effectText1.text = TEXT.BuildEffect;
                this.m_tips.m_effectValue1.text = this.cfg.effect_tips;
                this.m_tips.m_effectText2.text = TEXT.BuildLevelEffect;
                this.m_tips.m_effectValue2.text = this.cfg.level_tips;
                fairygui.GRoot.inst.showPopup(this.m_tips);
            };
            //设置lock
            RoomInfoItem.prototype.setBuildLock = function (reason) {
                this.m_assetList.removeChildrenToPool();
                this.m_roomLock.visible = true;
                this.m_roomLock.m_room_title.text = this.info.name;
                this.m_roomLock.m_reason.text = reason;
            };
            return RoomInfoItem;
        }(Building.RoomInfoItemStruct));
        Building.RoomInfoItem = RoomInfoItem;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=RoomInfoItem.js.map