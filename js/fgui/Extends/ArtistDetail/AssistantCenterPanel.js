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
    var ArtistDetail;
    (function (ArtistDetail) {
        var AssistantCenterPanel = /** @class */ (function (_super) {
            __extends(AssistantCenterPanel, _super);
            function AssistantCenterPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AssistantCenterPanel.prototype.updateView = function (lessonData) {
                this.m_icon.url = lessonData.propUrl;
                //属性提升
                this.m_attrTitle.text = TEXT.AssistantTitle1;
                //课程效果
                this.m_tagTitle.text = TEXT.AssistantTitle2;
                //属性
                this.m_attrLabel.text = lessonData.propValue.toString();
                this.m_c_visible_max.selectedIndex = lessonData.isMax ? 1 : 0;
                //
                if (lessonData.isMax == false) {
                    //当前
                    this.m_nextAddLabel.text = lessonData.propValue.toString();
                    //增加的
                    this.m_nextAddNum.text = format("(+{0})", lessonData.nextValue);
                }
                //培养次数增加
                this.m_trainTimes.text = TEXT.AssistantTrainTimes;
                //
                this.m_trainTimesNum.text = format("(+{0})", lessonData.trainAddValue);
                //解锁是否显示
                this.m_unlockTagTip.visible = lessonData.isUnlockTag == false;
                this.m_trainTimesUnlockTip.visible = lessonData.isUnlockTrain == false;
                //解锁提示
                this.m_unlockTagTip.text = lessonData.unlockTagTip;
                this.m_trainTimesUnlockTip.text = lessonData.unlockTrainTip;
                if (lessonData.actorSign > 0) {
                    var tagData = lessonData.actorData.getTagById(lessonData.actorSign);
                    //课程标签效果
                    this.m_curTag.updateViewByIdLv(tagData.id, tagData.srcLv);
                    this.m_nextTag.updateViewByIdLv(tagData.id, tagData.srcLv + lessonData.tagAddValue);
                }
            };
            return AssistantCenterPanel;
        }(ArtistDetail.AssistantCenterPanelStruct));
        ArtistDetail.AssistantCenterPanel = AssistantCenterPanel;
    })(ArtistDetail = fgui.ArtistDetail || (fgui.ArtistDetail = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=AssistantCenterPanel.js.map