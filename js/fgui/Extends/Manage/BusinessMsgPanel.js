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
    var Manage;
    (function (Manage) {
        var BusinessMsgPanel = /** @class */ (function (_super) {
            __extends(BusinessMsgPanel, _super);
            function BusinessMsgPanel() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BusinessMsgPanel.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_reward.itemRenderer = Handler.create(this, this.updateRewardItemRender, null, false);
                this.m_get.text = TEXT.BusinessGet;
            };
            BusinessMsgPanel.prototype.updateRewardItemRender = function (index, item) {
                var dtItem = this.rewards[index];
                item.PopupInfo = dtItem.itemId;
                item.updateViewByDTNum(dtItem);
            };
            /**
             * 更新界面
             * @param data
             */
            BusinessMsgPanel.prototype.updateView = function (data) {
                this.rewards = data.resultRewards;
                this.m_reward.numItems = this.rewards.length;
            };
            return BusinessMsgPanel;
        }(Manage.BusinessMsgPanelStruct));
        Manage.BusinessMsgPanel = BusinessMsgPanel;
    })(Manage = fgui.Manage || (fgui.Manage = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BusinessMsgPanel.js.map