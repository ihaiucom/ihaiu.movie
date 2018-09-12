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
        var FilmSelectItem = /** @class */ (function (_super) {
            __extends(FilmSelectItem, _super);
            function FilmSelectItem() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this._canShowInf = false;
                return _this;
            }
            FilmSelectItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                // 选择按钮
                this.m_selectBtn.onClick(this, this.onClickSelectBtn);
                this.m_selectBtn.m_title.text = TEXT.ButtonSelect;
                // 剧本详情按钮
                this.m_filmInf.onClick(this, this.onClickInf);
                this.m_filmInf.m_c1.setSelectedIndex(1);
                this.m_filmTypeList.itemRenderer = Laya.Handler.create(this, this.initTagsItem, null, false);
            };
            Object.defineProperty(FilmSelectItem.prototype, "canShowInf", {
                get: function () {
                    return this._canShowInf;
                },
                set: function (value) {
                    this._canShowInf = value;
                },
                enumerable: true,
                configurable: true
            });
            FilmSelectItem.prototype.onClickInf = function () {
                if (this.canShowInf) {
                    Game.moduleModel.warData.filmInfoConfig = this.currData;
                    // 打开电影信息详情子窗口
                    this.moduleWindow.openSubwindowByIndex(Games.WarSubwindowType.FilmInfo, true);
                }
            };
            // 选择此剧本
            FilmSelectItem.prototype.onClickSelectBtn = function () {
                var _this = this;
                var myHaveDollar = Game.moduleModel.item.getItemNum(EItemId.dollar);
                if (myHaveDollar >= this.cost) {
                    Game.moduleModel.warData.filmIndexOf = this.indexOf;
                    Game.system.openRename(TEXT.ChangeStoryName, null, function (arg) {
                        Game.moduleModel.warData.SendReName(arg, function () {
                            Game.moduleModel.warData.filmInfoConfig = _this.currData;
                            _this.moduleWindow.warFilmSelectingSubwindow.closeSelf();
                            _this.moduleWindow.conent.subWindowToMain();
                        });
                    }, null, TEXT.ButtonOk, this.currData.filmName, format(TEXT.StoryNameLimit, 20), 20, "", [3, parseInt(this.cost.toFixed(0))], true, this.getRandomList());
                }
                else {
                    var isplay = Game.guide.checkPlayStorySelectStoryOrActor();
                    if (isplay == false) {
                        Game.system.openItemWay(EItemId.dollar, this.cost);
                    }
                }
            };
            FilmSelectItem.prototype.getRandomList = function () {
                return Game.config.gameRandomName.getConfig(this.currData.random_name).names;
            };
            FilmSelectItem.prototype.setData = function (data, index, isHaveGuanzhong) {
                this.currData = data;
                this.indexOf = index;
                this.cost = Game.moduleModel.warData.moveData.movieCost[this.indexOf];
                // 名称
                this.m_filmName.text = this.currData.filmName;
                this.m_filmInf.setData(this.currData, true);
                // 剧本元素
                this.m_filmTypeList.numItems = this.currData.filmTags.length + 1;
                if (this.currData.filmTags.length > 2) {
                    this.m_c1.setSelectedIndex(0);
                }
                else {
                    this.m_c1.setSelectedIndex(1);
                }
                // 介绍 
                this.m_filmDes.setData(this.currData.filmDes);
                // 选择按钮消费美元数量
                this.m_selectBtn.m_cost.text = formatNumberUnit(this.cost, 1);
                if (isHaveGuanzhong) {
                    // 观众需求
                    if (this.currData.getMale > 0) {
                        this.m_men.text = this.currData.getMale + "%";
                        this.m_men.visible = true;
                    }
                    else {
                        this.m_men.visible = false;
                    }
                    if (this.currData.getFemale > 0) {
                        this.m_women.text = this.currData.getFemale + "%";
                        this.m_women.visible = true;
                    }
                    else {
                        this.m_women.visible = false;
                    }
                    if (this.currData.getChild > 0) {
                        this.m_child.text = this.currData.getChild + "%";
                        this.m_child.visible = true;
                    }
                    else {
                        this.m_child.visible = false;
                    }
                }
                else {
                    this.m_men.visible = false;
                    this.m_women.visible = false;
                    this.m_child.visible = false;
                }
            };
            // 剧本元素item赋值
            FilmSelectItem.prototype.initTagsItem = function (index, obj) {
                var item = obj;
                if (index === 0) {
                    item.m_title.text = this.currData.filmType;
                    item.m_typeLabel.setSelectedIndex(1);
                }
                else {
                    item.m_title.text = this.currData.filmTags[index - 1];
                    item.m_typeLabel.setSelectedIndex(0);
                }
            };
            return FilmSelectItem;
        }(WarMovie.FilmSelectItemStruct));
        WarMovie.FilmSelectItem = FilmSelectItem;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=FilmSelectItem.js.map