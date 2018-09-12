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
        var StoryInfoUI = /** @class */ (function (_super) {
            __extends(StoryInfoUI, _super);
            function StoryInfoUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StoryInfoUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_sendBtn.text = TEXT.SendMsg;
                this.m_input.promptText = TEXT.StoryInputPromptText;
                this.m_filmTypeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
                this.m_list.itemRenderer = Handler.create(this, this.updateMessageBoard, null, false);
                this.m_totalList.itemRenderer = Handler.create(this, this.updateTotalNum, null, false);
            };
            StoryInfoUI.prototype.updateMessageBoard = function (index, obj) {
                var item = obj;
                item.updateView(this.msgs[index]);
            };
            // 剧本元素item赋值
            StoryInfoUI.prototype.initTagsItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    item.m_title.text = this.storyData.config.filmType;
                    item.m_typeLabel.setSelectedIndex(1);
                }
                else {
                    item.m_title.text = this.storyData.config.filmTags[index - 1];
                    item.m_typeLabel.setSelectedIndex(0);
                }
            };
            StoryInfoUI.prototype.updateTotalNum = function (index, obj) {
                var item = obj;
                item.setData(this.curTotalNum[index]);
                // this.m_totalList.numItems = (this.storyData.maxScore + "").length;
            };
            StoryInfoUI.prototype.updateView = function (storyId) {
                this.storyId = storyId;
                this.m_input.text = "";
                this.storyData = Game.moduleModel.story.getStoryData(storyId);
                if (this.storyData) {
                    //名称
                    this.m_filmName.text = this.storyData.config.filmName;
                    //详情
                    this.m_filmIcon.setData(this.storyData.config);
                    this.m_desc.text = this.storyData.config.filmDes.toString();
                    //海报
                    this.m_filmIcon.icon = Game.config.avatar.getConfig(this.storyData.config.poster_name).iconUrl;
                    //总票房
                    this.m_tip2.text = Games.TEXT.ZuiGaoPiaoFang;
                    //票房数字
                    // this.m_total.text = this.storyData.maxScore + "";
                    // this.m_total.text = this.storyData.maxScore + "";
                    this.curTotalNum = formatNumberUnit(this.storyData.maxScore, 1).toString().split("");
                    this.m_totalList.numItems = this.curTotalNum.length;
                    // 剧本元素
                    this.m_filmTypeList.numItems = this.storyData.config.filmTags.length + 1;
                    //留言板数量
                    this.m_list.numItems = 0;
                    this.setMessage();
                }
            };
            //更新留言板
            StoryInfoUI.prototype.updateMsgBoard = function (msg) {
                if (msg) {
                    this.msgs = msg.message;
                    this.m_list.numItems = this.msgs.length;
                }
                else {
                    this.m_list.numItems = 0;
                }
                this.m_list.scrollPane.scrollBottom();
                if (this.m_list.numItems > 0) {
                    this.m_none.visible = false;
                }
                else {
                    this.m_none.visible = true;
                }
            };
            //点击关闭按钮
            StoryInfoUI.prototype.onClickCloseBtn = function () {
                this.moduleWindow.menuClose();
            };
            //发送
            StoryInfoUI.prototype.onClickSendBtn = function () {
                if (validateSendMsgBoard(this.m_input.text)) {
                    Game.protosender.story.setMessage(this.storyData.config.id, this.m_input.text);
                    this.m_input.text = "";
                }
            };
            StoryInfoUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.m_sendBtn.offClick(this, this.onClickSendBtn);
                Game.protoOkEvent.remove(ProtoEventKey.story_GetMessage, this.updateMsgBoard, this);
                Game.protoOkEvent.remove(ProtoEventKey.story_SetMessage, this.setMessage, this);
            };
            StoryInfoUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.m_sendBtn.onClick(this, this.onClickSendBtn);
                Game.protoOkEvent.add(ProtoEventKey.story_GetMessage, this.updateMsgBoard, this);
                Game.protoOkEvent.add(ProtoEventKey.story_SetMessage, this.setMessage, this);
                var id = this.moduleWindow.menuParameter.args[0];
                this.updateView(id);
            };
            StoryInfoUI.prototype.setMessage = function () {
                Game.protosender.story.getMessage(this.storyData.config.id);
            };
            return StoryInfoUI;
        }(PfSkin.StoryInfoUIStruct));
        PfSkin.StoryInfoUI = StoryInfoUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StoryInfoUI.js.map