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
        var BuildRoomUpgradeSuccess = /** @class */ (function (_super) {
            __extends(BuildRoomUpgradeSuccess, _super);
            function BuildRoomUpgradeSuccess() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.childIndex = -1;
                _this.propItemOrginalX = 0;
                return _this;
            }
            BuildRoomUpgradeSuccess.prototype.init = function (info) {
                var _this = this;
                this.info = info;
                var level = Game.config.buildingLevel.getConfig(info.id).level;
                this.m_effectGroup.m_roomName.text = info.name + format(Games.TEXT.BuildUpgrade, level);
                var effects = Game.config.buildingLevel.getConfig(info.id).effect_id;
                this.m_porpList.removeChildrenToPool();
                for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                    var effectId = effects_1[_i];
                    var cfg = Game.config.buildingEffect.getConfig(effectId);
                    var propItem = this.m_porpList.addItemFromPool();
                    propItem.getChild("title").text = "[color=#e3b121]" + cfg.effect_des + "[/color]";
                    this.m_porpList.addChild(propItem);
                    this.propItemOrginalX = propItem.x;
                }
                this.setBuildIcon();
                this.m_btn_confirm.m_title.text = TEXT.ButtonOk;
                this.m_btn_confirm.onClick(this, this.onConfirm);
                //effect
                var duration = 300;
                FguiHelper.boundEffect(this.m_effectGroup, duration);
                setTimeout(function () {
                    _this.startTweenPropItem(); //Tween
                }, duration);
            };
            BuildRoomUpgradeSuccess.prototype.startTweenPropItem = function () {
                Laya.timer.loop(500, this, this.onTweenPropItem, null, true, true);
                for (var i = 0; i < this.m_porpList.numChildren; i++) {
                    var item = this.m_porpList.getChildAt(i);
                    item.x = Laya.stage.width;
                }
            };
            BuildRoomUpgradeSuccess.prototype.onTweenPropItem = function () {
                this.childIndex++;
                if (this.childIndex >= this.m_porpList.numChildren) {
                    Laya.timer.clear(this, this.onTweenPropItem);
                    return;
                }
                var item = this.m_porpList.getChildAt(this.childIndex);
                var endY = item.y;
                item.x = this.propItemOrginalX;
                item.y = endY + this.m_porpList.height;
                Laya.Tween.to(item, { y: endY }, 300, Laya.Ease.linearIn, Handler.create(null, function (target) {
                }, [item]), 0, true, true);
            };
            BuildRoomUpgradeSuccess.prototype.setBuildIcon = function () {
                this.m_effectGroup.m_roomFrame.m_room_icon.url = Res.getRoom(this.info.type);
            };
            BuildRoomUpgradeSuccess.prototype.onConfirm = function () {
                Laya.timer.clear(this, this.onTweenPropItem);
                this.parent.removeChild(this);
            };
            return BuildRoomUpgradeSuccess;
        }(Building.BuildRoomUpgradeSuccessStruct));
        Building.BuildRoomUpgradeSuccess = BuildRoomUpgradeSuccess;
    })(Building = fgui.Building || (fgui.Building = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BuildRoomUpgradeSuccess.js.map