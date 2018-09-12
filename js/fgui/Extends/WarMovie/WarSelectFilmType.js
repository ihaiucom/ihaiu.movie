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
        var WarSelectFilmType = /** @class */ (function (_super) {
            __extends(WarSelectFilmType, _super);
            function WarSelectFilmType() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selectType = -1;
                return _this;
            }
            WarSelectFilmType.prototype.constructFromXML = function (xml) {
                var _this = this;
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmTypeSelectTitle;
                this.m_nameTip.text = TEXT.FilmTypeSelectTitle;
                this.m_curMarket.text = TEXT.CurMarketTip;
                this.m_men.m_sex.text = TEXT.sexMan;
                this.m_women.m_sex.text = TEXT.sexWomen;
                this.m_child.m_sex.text = TEXT.sexChild;
                this.allType = Game.config.movieShootType.getConfigList();
                // 刷新类型列表
                this.m_typeList.itemRenderer = Laya.Handler.create(this, this.initTypeListItem, null, false);
                // 选中列表某一项
                this.m_typeList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 关闭面板
                this.m_closeBtn.onClick(this, this.onClickClose);
                // 电影详情
                this.m_filminfBtn.onClick(this, function () {
                    _this.moduleMain.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
                });
            };
            WarSelectFilmType.prototype.onClickOkBtn = function () {
                var _this = this;
                if (this.selectType > -1) {
                    Game.moduleModel.warData.setSelectType(this.selectType, function () {
                        _this.moduleMain.conent.subWindowToMain();
                    });
                    this.moduleWindow.closeSelf();
                }
                else {
                    Game.system.toastText(TEXT.SelectTypeNone);
                }
            };
            WarSelectFilmType.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarSelectFilmType.prototype.onWindowShow = function () {
                this.setData();
            };
            WarSelectFilmType.prototype.onWindowHide = function () {
            };
            WarSelectFilmType.prototype.setData = function () {
                if (Game.moduleModel.building.getRoomLevel(Games.RoomType.Market) > 0) {
                    var man = Game.moduleModel.warData.moveData.expected[0];
                    var woman = Game.moduleModel.warData.moveData.expected[1];
                    var child = Game.moduleModel.warData.moveData.expected[2];
                    this.m_curMarket.visible = true;
                    // 当前市场情况
                    this.m_men.m_title.text = man + "%";
                    this.m_women.m_title.text = woman + "%";
                    this.m_child.m_title.text = child + "%";
                }
                else {
                    this.m_curMarket.visible = false;
                    this.m_men.visible = false;
                    this.m_women.visible = false;
                    this.m_child.visible = false;
                }
                this.moduleMain = this.moduleWindow.mainWindow;
                this.selectType = -1;
                this.allType = Game.config.movieShootType.getConfigList();
                // this.allType = Random.GetDisorderList(Game.config.movieShootType.getConfigList());
                this.m_typeList.clearSelection();
                this.m_typeList.numItems = this.allType.length;
                this.m_typeList.scrollToView(0);
            };
            // 类型列表单个赋值
            WarSelectFilmType.prototype.initTypeListItem = function (index, obj) {
                var item = obj;
                item.setData(this.allType[index], index);
            };
            // 点击某个item
            WarSelectFilmType.prototype.onClickItem = function (obj) {
                var index = this.m_typeList.getChildIndex(obj);
                this.selectType = this.allType[index].id;
            };
            return WarSelectFilmType;
        }(WarMovie.WarSelectFilmTypeStruct));
        WarMovie.WarSelectFilmType = WarSelectFilmType;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectFilmType.js.map