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
        var StoryAchevementTargetItem = /** @class */ (function (_super) {
            __extends(StoryAchevementTargetItem, _super);
            function StoryAchevementTargetItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /**
             *
             * @param str
             * @param data
             */
            StoryAchevementTargetItem.prototype.updateView = function (str, data) {
                this.text = format(str, data.progress);
                if (data.status == EStoryModule.finish) {
                    this.m_gou.grayed = false;
                }
                else {
                    this.m_gou.grayed = true;
                }
            };
            return StoryAchevementTargetItem;
        }(PfSkin.StoryAchevementTargetItemStruct));
        PfSkin.StoryAchevementTargetItem = StoryAchevementTargetItem;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryAchevementTargetItem.js.map