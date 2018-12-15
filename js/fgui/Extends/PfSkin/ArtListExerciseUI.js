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
        var ArtListExerciseUI = /** @class */ (function (_super) {
            __extends(ArtListExerciseUI, _super);
            function ArtListExerciseUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.buildIndex = -1;
                return _this;
            }
            ArtListExerciseUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                //init
                this.m_closeBtn.onClick(this, this.onClosePanel);
                this.m_addSlotBtn.onClick(this, this.onAddSlotClick);
            };
            ArtListExerciseUI.prototype.onWindowShow = function () {
                this.showActorRoom();
                //initUI
                var roomLevel = Game.moduleModel.building.getRoomLevel(Games.RoomType.Training);
                this.m_levelText.text = format(Game.config.msg.getTxtFormat(MsgKey.train_title_level, roomLevel));
                this.m_effectText.text = format(Game.config.msg.getTxtFormat(MsgKey.train_title_tips, MathDesign.calcActorExperciseExp()));
                this.updateListView(); //更新列表
                this.m_listItem.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                Game.protoOkEvent.add(ProtoEventKey.Actor_ActorExerciseStart, this.callBackActorExerciseStart, this);
                Game.protoOkEvent.add(ProtoEventKey.Actor_ActorExerciseAdd, this.callBackActorExerciseAdd, this);
                Game.protoOkEvent.add(ProtoEventKey.Actor_ActorExerciseReward, this.callBackActorExerciseReward, this);
            };
            ArtListExerciseUI.prototype.onWindowHide = function () {
                Game.protoOkEvent.remove(ProtoEventKey.Actor_ActorExerciseStart, this.callBackActorExerciseStart, this);
                Game.protoOkEvent.remove(ProtoEventKey.Actor_ActorExerciseAdd, this.callBackActorExerciseAdd, this);
                Game.protoOkEvent.remove(ProtoEventKey.Actor_ActorExerciseReward, this.callBackActorExerciseReward, this);
                this.m_listItem.off(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                this.hideActorRoom();
            };
            ArtListExerciseUI.prototype.onClosePanel = function () {
                Game.menu.close(MenuId.ArtListExercise);
            };
            ArtListExerciseUI.prototype.callBackActorExerciseStart = function (proto) {
                this.updateListView();
                Game.event.dispatch(GameEventKey.GameEventKey_ActorExperciseStart, proto.aId);
            };
            ArtListExerciseUI.prototype.callBackActorExerciseReward = function (proto) {
                this.updateListView();
                Game.event.dispatch(GameEventKey.GameEventKey_ActorExperciseEnd, proto.aId, proto.eId);
            };
            ArtListExerciseUI.prototype.callBackActorExerciseAdd = function (proto) {
                this.updateListView();
            };
            ArtListExerciseUI.prototype.onClickItem = function (item) {
                if (item.complete) {
                    Game.moduleModel.actor.setActorExerciseStaus(item.uuid, true);
                    Game.protosender.Actor.ActorExerciseReward(item.uuid, false);
                }
            };
            ArtListExerciseUI.prototype.updateListView = function () {
                var actorExerciseDataList = Game.moduleModel.actor.getExperciseDataList();
                actorExerciseDataList.sort(function (a, b) {
                    return a.seatIndex - b.seatIndex;
                });
                this.m_listItem.removeChildrenToPool();
                for (var i = 0; i < actorExerciseDataList.length; i++) {
                    var actorExerciseData = actorExerciseDataList[i];
                    var exerciseItem = this.m_listItem.addItemFromPool();
                    exerciseItem.setInfo(actorExerciseData.seatUuid, actorExerciseData);
                    this.m_listItem.addChild(exerciseItem);
                }
                this.m_slotText.text = Game.config.msg.getTxtFormat(MsgKey.train_area_tips, Game.moduleModel.actor.onExperciseCount, actorExerciseDataList.length);
            };
            //增加训练位
            ArtListExerciseUI.prototype.onAddSlotClick = function () {
                console.log("onAddSlotClick");
                var slotCount = Game.moduleModel.actor.getActorExerciseDataKeys().length;
                var slotCostList = Game.config.global.getConfig(GlobalKey.Training_Area_Price).value2;
                if (slotCount >= slotCostList.length + 1) {
                    Game.system.toastText(TEXT.ActorExperciseMaxLine);
                    return;
                }
                Game.system.confirmTextIcon(this.getSoltCost(), TEXT.NoticeTitle, TEXT.ActorExperciseUnlock, function () {
                    var currentCost = slotCostList[slotCount - 1];
                    if (ItemHelper.checkItemEnough2(currentCost.v1, currentCost.v2)) {
                        //request
                        Game.protosender.Actor.ActorExerciseAdd();
                    }
                    else {
                        Game.system.openItemWay(currentCost.v1, currentCost.v2);
                        // Game.system.toastText(format(TEXT.ToastTextItemNotEnough2, ItemHelper.getItemName(currentCost.v1), currentCost.v2));
                    }
                });
            };
            ArtListExerciseUI.prototype.getSoltCost = function () {
                var result = new DTItemNum();
                var priceList = Game.config.global.getConfig(GlobalKey.Training_Area_Price).value2;
                var currentSoltCount = Game.moduleModel.actor.getExperciseDataList().length;
                var minIndex = Math.min(currentSoltCount, priceList.length);
                minIndex = Math.max(0, minIndex - 1);
                var price = priceList[minIndex];
                if (price) {
                    result.itemId = price.v1;
                    result.itemNum = price.v2;
                }
                return [result];
            };
            ArtListExerciseUI.prototype.showActorRoom = function () {
                this.buildRoom = Games.AvatarManager.context.getRoomByType(Games.RoomType.Training);
                if (this.buildRoom != null) {
                    this.buildRoom.onRoomInScreen();
                    this.buildRoom.setRoomFrameVisible(false);
                    this.buildRoom.setXY(-20, -15);
                    this.buildRoom.setScale(1.05, 1.05);
                    this.buildIndex = Games.AvatarManager.context.getRoomIndexByType(Games.RoomType.Training);
                    this.m_roomContainer.addChild(this.buildRoom.mainView);
                    //center
                    // let centerX = (this.m_roomContainer.width - this.buildRoom.width) * 0.5;
                    // this.buildRoom.setXY(centerX - 20, - 4);
                    //scaleX
                    var scale = ScreenSetting.screenWidth / this.buildRoom.mainView.sourceWidth;
                    this.buildRoom.setScale(scale * 1.05, 1.05);
                }
            };
            ArtListExerciseUI.prototype.hideActorRoom = function () {
                if (this.buildRoom) {
                    this.buildRoom.setXY(0, 0);
                    this.buildRoom.setScale(1, 1);
                    this.buildRoom.setRoomFrameVisible(true);
                    Games.AvatarManager.context.addRoomAt(this.buildRoom, this.buildIndex);
                    //aspect
                    this.buildRoom.mainView.removeRelation(this.m_roomContainer, fairygui.RelationType.Size);
                }
            };
            return ArtListExerciseUI;
        }(PfSkin.ArtListExerciseUIStruct));
        PfSkin.ArtListExerciseUI = ArtListExerciseUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtListExerciseUI.js.map