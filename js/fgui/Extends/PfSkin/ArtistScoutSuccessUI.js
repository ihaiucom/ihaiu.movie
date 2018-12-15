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
        var ArtistScoutSuccessUI = /** @class */ (function (_super) {
            __extends(ArtistScoutSuccessUI, _super);
            function ArtistScoutSuccessUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ArtistScoutSuccessUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_confirmBtn.onClick(this, this.onClickConfirmBtn);
                this.m_randomBtn.onClick(this, this.onClickRandomBtn);
                this.m_content.m_title.promptText = format(Games.TEXT.Input4toNumChar, 18);
                this.m_content.m_title.input.maxChars = 18;
                this.m_rewardList.itemRenderer = Handler.create(this, this.updateRewardItemHandler, null, false);
                this.m_closeBtn.visible = false;
            };
            ArtistScoutSuccessUI.prototype.updateRewardItemHandler = function (index, item) {
                item.updateViewByDTNum(this.actorData.config.recruit_reward[index]);
                item.PopupInfo = this.actorData.config.recruit_reward[index].itemId;
            };
            //显示第一个成功招募
            ArtistScoutSuccessUI.prototype.showFirstGroup = function () {
                this.getRandomNames();
                //给他重命名
                var promptText = format(Games.TEXT.RenameForActor, (this.actorData.config.sex == 1101 ? Games.TEXT.She : Games.TEXT.He));
                this.m_content.m_title.promptText = promptText;
                this.m_content.m_title.text = "";
                this.m_desc1.text = Games.TEXT.NoseSuccess; //新的艺人加入公司
                this.m_desc2.text = Games.TEXT.NewActorJoin; //新的艺人加入公司
                this.m_confirmBtn.text = Games.TEXT.Rename; //改名
                this.m_c_visible.selectedIndex = 0;
            };
            /**
             * 显示重复招募
             */
            ArtistScoutSuccessUI.prototype.showSecondGroup = function () {
                this.m_confirmBtn.text = Games.TEXT.Sure; //确定
                // this.m_minIcon.icon = Game.config.avatar.getConfig(this.actorData.config.avatar).bodyIconUrl;//头像
                // this.m_pieceNum.text = format(Games.TEXT.Num, this.actorData.config.recruit_reward[0].itemNum)
                // this.item.visible = true;
                // this.item.setXY(this.m_pos.x, this.m_pos.y);
                // this.item.updateViewByDTNum(this.actorData.config.recruit_reward[1]);
                this.m_c_visible.selectedIndex = 1;
                this.m_rewardList.numItems = this.actorData.config.recruit_reward.length;
                this.m_desc2.text = Games.TEXT.SameActorJoin; //已有同名艺人
                this.m_desc1.text = Games.TEXT.ActorRecoverToDealAsset; //已转化
            };
            /**
             *
             * @param data 数据
             * @param isSecond 数据
             */
            ArtistScoutSuccessUI.prototype.updateView = function (data, isSecond) {
                var _this = this;
                if (isSecond === void 0) { isSecond = false; }
                this.actorData = data;
                this.isSecond = isSecond;
                //星
                this.m_starList.itemRenderer = Handler.create(this, function (index, item) {
                    item.icon = _this.actorData.config.starUrl;
                }, null, false);
                this.m_starList.numItems = this.actorData.star; //星级
                //艺人icon
                this.m_icon.icon = Game.config.avatar.getConfig(this.actorData.config.avatar).bodyIconUrl;
                if (isSecond) {
                    this.m_name.text = this.actorData.name; //名字
                    this.showSecondGroup();
                }
                else {
                    this.m_name.text = this.actorData.config.name; //名字
                    this.showFirstGroup();
                }
                //
                Game.sound.playSound(SoundKey.MM12_RecruitArtist);
            };
            /**
             * 关闭
             */
            ArtistScoutSuccessUI.prototype.closeMenu = function () {
                if (this.isSecond == false) {
                    Game.menu.open(MenuId.ArtistGet, this.actorData);
                }
                Game.menu.close(MenuId.ArtistScoutSuccess);
            };
            ArtistScoutSuccessUI.prototype.onWindowHide = function () {
                if (Game.moduleModel.actor.getAllActorLen() == 1) {
                    Game.guide.finishInitActor();
                }
            };
            /**
             * 改名
             * @param name 名字
             */
            ArtistScoutSuccessUI.prototype.changeName = function (name) {
                this.actorData.name = name;
                Game.protosender.Actor.actorChangeName(this.actorData.uuid, name);
                this.closeMenu();
            };
            /**确认 */
            ArtistScoutSuccessUI.prototype.onClickConfirmBtn = function () {
                var _this = this;
                if (this.isSecond) {
                    this.closeMenu();
                }
                else {
                    if (this.m_content.text != "") {
                        if (validateOtherName(this.m_content.text)) {
                            this.changeName(this.m_content.text);
                        }
                    }
                    else {
                        Game.system.confirmText(Games.TEXT.SureUseDefaultName, null, null, function () {
                            _this.changeName(_this.actorData.config.name);
                        });
                    }
                }
            };
            //获取随机名字
            ArtistScoutSuccessUI.prototype.onClickRandomBtn = function () {
                this.m_content.m_title.text = this.curRandomNames[this.randomIndex];
                this.randomIndex++;
                if (this.randomIndex >= this.curRandomNames.length) {
                    this.randomIndex = 0;
                }
            };
            /**
             *初始化名字
             */
            ArtistScoutSuccessUI.prototype.getRandomNames = function () {
                this.curRandomNames = Game.config.gameRandomName.getConfig(this.actorData.config.random_name).names;
                this.randomIndex = Math.floor(this.curRandomNames.length * Math.random());
            };
            return ArtistScoutSuccessUI;
        }(PfSkin.ArtistScoutSuccessUIStruct));
        PfSkin.ArtistScoutSuccessUI = ArtistScoutSuccessUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutSuccessUI.js.map