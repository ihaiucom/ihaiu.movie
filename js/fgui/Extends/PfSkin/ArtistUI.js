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
        var ArtistUI = /** @class */ (function (_super) {
            __extends(ArtistUI, _super);
            function ArtistUI() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.buildIndex = -1;
                return _this;
            }
            //是否正在显示
            ArtistUI.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            //点击关闭
            ArtistUI.prototype.onClickCloseBtn = function () {
                if (this.tabIndex == Games.ArtistListSubType.FindPanel) {
                    this.showListPanel();
                }
                else {
                    this.moduleWindow.menuClose();
                }
            };
            ArtistUI.prototype.onWindowHide = function () {
                this.m_closeBtn.offClick(this, this.onClickCloseBtn);
                this.hideBuildRoom();
            };
            ArtistUI.prototype.onWindowShow = function () {
                this.m_closeBtn.onClick(this, this.onClickCloseBtn);
                this.showBuildRoom();
                this.onShowWindow();
            };
            //显示
            ArtistUI.prototype.onShowWindow = function () {
                var args = this.moduleWindow.menuParameter.args;
                if (args && args.length > 0) {
                    var param = args[0];
                    if (param == 1) {
                        this.showListPanel();
                    }
                    else {
                        this.showFindPanel();
                    }
                }
                else {
                    this.showListPanel();
                }
            };
            // 如果需要处理额外的业务，可以重新该方法
            ArtistUI.prototype.onOpenTab = function (tabIndex) {
                switch (tabIndex) {
                    case Games.ArtistListSubType.FindPanel:
                        this.m_findPanel.updateView();
                        break;
                    case Games.ArtistListSubType.ListPanel:
                        this.m_listPanel.updateView();
                        break;
                    default:
                        break;
                }
            };
            //显示探查界面
            ArtistUI.prototype.showFindPanel = function () {
                this.moduleWindow.openTab(Games.ArtistListSubType.FindPanel);
            };
            //显示列表界面
            ArtistUI.prototype.showListPanel = function () {
                this.moduleWindow.openTab(Games.ArtistListSubType.ListPanel);
            };
            ArtistUI.prototype.showBuildRoom = function () {
                this.buildRoom = Games.AvatarManager.context.getRoomByType(Games.RoomType.Actor);
                if (this.buildRoom != null) {
                    this.buildRoom.onRoomInScreen();
                    this.buildRoom.setRoomFrameVisible(false);
                    this.buildIndex = Games.AvatarManager.context.getRoomIndexByType(Games.RoomType.Actor);
                    this.buildRoom.setXY(-20, -4);
                    this.buildRoom.setScale(1.05, 1.05);
                    this.m_roomContainer.addChild(this.buildRoom);
                }
            };
            ArtistUI.prototype.hideBuildRoom = function () {
                if (this.buildRoom) {
                    this.buildRoom.setXY(0, 0);
                    this.buildRoom.setScale(1, 1);
                    this.buildRoom.setRoomFrameVisible(true);
                    Games.AvatarManager.context.addRoomAt(this.buildRoom, this.buildIndex);
                }
            };
            //获取符合条件的列表项
            ArtistUI.prototype.selectActor = function (lv) {
                return this.m_listPanel.selectActor(lv);
            };
            return ArtistUI;
        }(PfSkin.ArtistUIStruct));
        PfSkin.ArtistUI = ArtistUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistUI.js.map