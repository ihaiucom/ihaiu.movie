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
    var MainUI;
    (function (MainUI) {
        var VisitMainTopUI = /** @class */ (function (_super) {
            __extends(VisitMainTopUI, _super);
            function VisitMainTopUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            VisitMainTopUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.VisitFansWantMeet;
                this.visible = false;
            };
            VisitMainTopUI.prototype.show = function (data) {
                var _this = this;
                this.visitData = data;
                if (this.visible == false) {
                    this.visible = true;
                    this.onWindowShow();
                }
                //临时秘书 不属于永久
                if (Game.moduleModel.secretary.isTempSecretary) {
                    var remainTimes = Game.moduleModel.secretary.autoVisitNum;
                    if (remainTimes <= 0) {
                        Game.moduleModel.secretary.isAutoVisit = false;
                    }
                }
                //头像
                // this.m_icon.icon = data.actorConfig.avatarConfig.bodyIconUrl;
                if (this.avatar == null) {
                    var aInfo = Games.AvatarInfo.creatByAvatarId(data.actorId);
                    this.avatar = Games.Avatar.Creat(aInfo, function (AvatarInfo) {
                        var bounds = _this.avatar.getBounds();
                        _this.avatar.pos((_this.width) * 0.5, bounds.height + 80);
                        _this.displayObject.addChild(_this.avatar);
                        _this.avatar.direction = Games.DirtionType.Left;
                        //this.refRoom.addAvatar(avatar, this.refRoom.m_buildScene.m_avatarContainer0);
                        //avatar.enterTo(Laya.stage.width - 150, avatar.y, DirtionType.Left);
                        _this.avatar.on(Laya.Event.CLICK, _this, _this.onClickIcon);
                        //avatar.setTalk(TEXT.ActorExperciser, true);
                        _this.avatar.openShadow();
                        // setTimeout(() =>
                        // {
                        // 	avatar.playAction(1026);
                        // }, 3000);
                    });
                }
                //名字
                this.m_name.text = Game.moduleModel.actor.getActor(data.actorId).name;
                //自动接待
                this.m_checklabel.text = Games.TEXT.VisitAutoReceive;
                //更新时间
                Laya.timer.loop(1000, this, this.onUpdateTime, null, true);
                //是否
                this.m_checkbox.selected = Game.moduleModel.secretary.isAutoVisit;
                //
                this.onUpdateTime();
            };
            //清除cd
            VisitMainTopUI.prototype.clearTime = function () {
                Laya.timer.clear(this, this.onUpdateTime);
            };
            VisitMainTopUI.prototype.onUpdateTime = function () {
                //当前时间
                var nowTime = Game.time.serverSeconds;
                //过期时间
                var nextTime = this.visitData.leaveTime;
                //倒计时
                var duration = Math.max(0, nextTime - nowTime);
                //
                if (duration > 0) {
                    this.m_time.text = TimeHelper.TimeFormat3(duration);
                }
                else {
                    this.hide();
                }
            };
            //点击自动
            VisitMainTopUI.prototype.onClickCheckBox = function () {
                if (this.m_checkbox.selected) {
                    if (Game.moduleModel.secretary.autoVisitNum > 0) {
                        Game.moduleModel.secretary.isAutoVisit = this.m_checkbox.selected;
                        Game.menu.close(MenuId.Fans);
                        Games.AvatarManager.autoActorToReception(this.visitData.actorId);
                    }
                    else {
                        if (Game.moduleModel.secretary.isTempSecretary) {
                            //免费次数已经用完
                            Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_experience, Game.config.msg.getTxt(MsgKey.secretary_auto2)), TEXT.SecretaryForeverAgent, null, function () {
                                Game.menu.open(MenuId.Weal, 1);
                            }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                        }
                        else {
                            //没有秘书购买
                            Game.system.confirmText(Game.config.msg.getTxtFormat(MsgKey.secretary_not_owned, Game.config.msg.getTxt(MsgKey.secretary_auto2)), TEXT.SecretaryForeverAgent, null, function () {
                                Game.menu.open(MenuId.Weal, 1);
                            }, null, Game.config.msg.getTxt(MsgKey.go_to_hire), TEXT.ButtonCannel, false);
                        }
                        this.m_checkbox.selected = false;
                        Game.moduleModel.secretary.isAutoVisit = this.m_checkbox.selected;
                    }
                }
                else {
                    Game.moduleModel.secretary.isAutoVisit = this.m_checkbox.selected;
                }
            };
            VisitMainTopUI.prototype.onWindowShow = function () {
                this.m_checkbox.onClick(this, this.onClickCheckBox);
            };
            VisitMainTopUI.prototype.onWindowHide = function () {
                this.m_checkbox.offClick(this, this.onClickCheckBox);
            };
            VisitMainTopUI.prototype.onClickIcon = function () {
                Game.system.toastText(Game.config.msg.getTxt(MsgKey.visit_point));
            };
            VisitMainTopUI.prototype.hide = function () {
                this.clearTime();
                if (this.visible) {
                    this.visible = false;
                    this.onWindowHide();
                }
                if (this.avatar) {
                    this.avatar.off(Laya.Event.CLICK, this, this.onClickIcon);
                    this.avatar.dispose();
                    this.avatar.removeSelf();
                    this.avatar = null;
                }
            };
            return VisitMainTopUI;
        }(MainUI.VisitMainTopUIStruct));
        MainUI.VisitMainTopUI = VisitMainTopUI;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=VisitMainTopUI.js.map