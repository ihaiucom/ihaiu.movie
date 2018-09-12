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
        var TipReward = /** @class */ (function (_super) {
            __extends(TipReward, _super);
            function TipReward() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.itemNumList = [];
                return _this;
            }
            TipReward.prototype.setItems = function (itemNumList) {
                this.itemNumList = itemNumList;
                this.refreshRewardList();
            };
            // 刷新奖励列表		
            TipReward.prototype.refreshRewardList = function () {
                var list = this.m_list;
                this.width = this.itemNumList.length * 60 + 52;
                list.setVirtual();
                list.setVirtualAndLoop();
                if (!list.itemRenderer)
                    list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
                list.numItems = this.itemNumList.length;
            };
            TipReward.prototype.renderListItem = function (index, item) {
                var data = this.itemNumList[index];
                item.updateViewByDTNum(data);
                item.m_c_show_bg.selectedIndex = 1;
            };
            // 显示并且自动校正位置		
            TipReward.prototype.showPopup = function (button) {
                var _this = this;
                this.button = button;
                fairygui.GRoot.inst.showPopup(this, button, false);
                this.layoutBottom();
                this.m_popupMC.play(Handler.create(this, function () {
                    _this.hidePopup();
                }), 1, 0);
            };
            TipReward.prototype.layoutBottom = function () {
                var stageWidth = fairygui.GRoot.inst.width;
                var pos = this.button.localToGlobal();
                //console.log(this.button.pivotX);
                //console.log(this.button.x);
                //console.log(pos.x);
                var buttonCenterX = pos.x + this.button.width * 0.5;
                var x = buttonCenterX - this.width * 0.5;
                x = Math.max(x, 0);
                x = Math.min(x, stageWidth - this.width);
                this.x = x;
                this.y = this.y + 25;
                this.m_arrow.x = buttonCenterX - this.x;
                this.setPivot((this.width - 56) / this.width, 1);
            };
            // 隐藏		
            TipReward.prototype.hidePopup = function () {
                fairygui.GRoot.inst.hidePopup(this);
            };
            return TipReward;
        }(Common.TipRewardStruct));
        Common.TipReward = TipReward;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TipReward.js.map