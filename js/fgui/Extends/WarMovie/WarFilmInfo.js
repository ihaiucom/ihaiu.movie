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
    var WarMovie;
    (function (WarMovie) {
        var WarFilmInfo = /** @class */ (function (_super) {
            __extends(WarFilmInfo, _super);
            function WarFilmInfo() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.closeMenui = false;
                return _this;
            }
            WarFilmInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_filmTypeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
                this.m_filmActorList.itemRenderer = Laya.Handler.create(this, this.yirenItem, null, false);
                // 点击艺人列表item
                this.m_filmActorList.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
                this.m_completeList.itemRenderer = Laya.Handler.create(this, this.completeItem, null, false);
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClicClose);
            };
            WarFilmInfo.prototype.onClicClose = function () {
                this.moduleWindow.closeSelf();
                if (this.closeMenui) {
                    this.moduleWindow.menuClose();
                }
            };
            WarFilmInfo.prototype.onWindowShow = function () {
                this.setData();
            };
            WarFilmInfo.prototype.onWindowHide = function () {
                this.m_filmActorList.clearSelection();
            };
            WarFilmInfo.prototype.setData = function () {
                if (this.moduleWindow.menuParameter.args.length > 0) {
                    this.closeMenui = true;
                    if (this.moduleWindow.menuParameter.args[0].movieId > 0) {
                        this.curData = Game.config.story.getConfig(this.moduleWindow.menuParameter.args[0].movieId);
                        this.curData.filmName = this.moduleWindow.menuParameter.args[0].name;
                    }
                    else {
                        Game.system.toastText("error!!!");
                        this.moduleWindow.closeSelf();
                        return;
                    }
                }
                else {
                    this.closeMenui = false;
                    if (Game.moduleModel.warData.filmInfoConfig && Game.moduleModel.warData.filmInfoConfig !== null) {
                        this.curData = Game.moduleModel.warData.filmInfoConfig;
                    }
                    else {
                        this.curData = Game.moduleModel.warData.moveStory;
                    }
                }
                // 剧本名称
                this.m_filmName.text = this.curData.filmName;
                // 剧本元素
                this.m_filmTypeList.numItems = this.curData.filmTags.length + 1;
                // 介绍 
                this.m_filmDes.setData(this.curData.filmDes);
                // 剧本星级
                this.m_filmIcon.setData(this.curData);
                this.clickYRItem = 0;
                // 艺人需求列表
                this.m_filmActorList.numItems = this.curData.characterProperty.length;
                if (this.curData.characterProperty.length === 5) {
                    this.m_filmActorList.scrollPane.setPosX(150);
                }
                else if (this.curData.characterProperty.length === 4) {
                    this.m_filmActorList.scrollPane.setPosX(70);
                }
                // 点击界面
                this.onClick(this, this.closeyirenItemPos);
                if (Game.moduleModel.building.getRoomLevel(Games.RoomType.Market) > 0) {
                    if (this.curData.getMale > 0) {
                        this.m_men.visible = true;
                        this.m_men.text = this.curData.getMale + "%";
                    }
                    else {
                        this.m_men.visible = false;
                    }
                    if (this.curData.getFemale > 0) {
                        this.m_women.visible = true;
                        this.m_women.text = this.curData.getFemale + "%";
                    }
                    else {
                        this.m_women.visible = false;
                    }
                    if (this.curData.getChild > 0) {
                        this.m_child.visible = true;
                        this.m_child.text = this.curData.getChild + "%";
                    }
                    else {
                        this.m_child.visible = false;
                    }
                    this.m_rewardCom.visible = true;
                }
                else {
                    this.m_rewardCom.visible = false;
                }
                this.m_completeList.numItems = 1;
                Games.WarLoadPic.setIcon(this.m_rewardIcon, this.curData.getReward[0].storyeffect);
                this.m_rewardVal.text = format("+{0}%", this.curData.getReward[0].rate);
            };
            WarFilmInfo.prototype.getRewardTip = function () {
                var str = "";
                if (this.curData.target_mark) {
                    str = Game.config.msg.getConfig(MsgKey.story_target_tips).notice;
                }
                else {
                    str = Game.config.msg.getConfig(MsgKey.story_non_target_tips).notice;
                }
                return str;
            };
            // 剧本目标续集提示 item赋值
            WarFilmInfo.prototype.completeItem = function (index, obj) {
                if (index === 0) {
                    var item = obj;
                    item.m_tip.text = this.getRewardTip();
                    if (this.curData.target_mark) {
                        item.m_colorControl.setSelectedIndex(0);
                    }
                    else {
                        item.m_colorControl.setSelectedIndex(1);
                    }
                }
            };
            // 剧本元素item赋值
            WarFilmInfo.prototype.initTagsItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    item.m_title.text = this.curData.filmType;
                    item.m_typeLabel.setSelectedIndex(1);
                }
                else {
                    item.m_title.text = this.curData.filmTags[index - 1];
                    item.m_typeLabel.setSelectedIndex(0);
                }
            };
            // 单个艺人赋值
            WarFilmInfo.prototype.yirenItem = function (index, obj) {
                var item = obj;
                item.setData(this.curData.characterProperty[index]);
            };
            // 点击界面
            WarFilmInfo.prototype.closeyirenItemPos = function (vet) {
                if (this.clickYRItem == 0) {
                    // 关闭pop提示
                    this.m_filmActorList.clearSelection();
                }
                else {
                    this.clickYRItem = 0;
                }
            };
            // 艺人被点击
            WarFilmInfo.prototype.clickItem = function (obj) {
                this.clickYRItem = 1;
                this.m_filmActorList.childrenRenderOrder = fairygui.ChildrenRenderOrder.Arch;
                this.m_filmActorList.apexIndex = this.m_filmActorList.getChildIndex(obj);
            };
            return WarFilmInfo;
        }(WarMovie.WarFilmInfoStruct));
        WarMovie.WarFilmInfo = WarFilmInfo;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmInfo.js.map