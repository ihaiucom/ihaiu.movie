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
    var PfSkin;
    (function (PfSkin) {
        var StoryGroupRewardItem = /** @class */ (function (_super) {
            __extends(StoryGroupRewardItem, _super);
            function StoryGroupRewardItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryGroupRewardItem.prototype.playEffect = function () {
                this.m_t0.stop();
                this.m_t1.play(null, -1);
                this.m_c1.selectedIndex = 0;
            };
            StoryGroupRewardItem.prototype.stopEffect = function () {
                this.m_t0.play(null, 1);
                this.m_t1.stop();
                this.m_c1.selectedIndex = 0;
            };
            StoryGroupRewardItem.prototype.getEffect = function () {
                this.m_c1.selectedIndex = 1;
            };
            return StoryGroupRewardItem;
        }(PfSkin.StoryGroupRewardItemStruct));
        PfSkin.StoryGroupRewardItem = StoryGroupRewardItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryGroupRewardItem.js.map