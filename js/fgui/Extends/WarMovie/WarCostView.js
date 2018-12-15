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
        var WarCostView = /** @class */ (function (_super) {
            __extends(WarCostView, _super);
            function WarCostView() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarCostView.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmCostViewTitle;
                this.m_yrList.itemRenderer = Laya.Handler.create(this, this.yrCostItem, null, false);
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 关闭按钮
                this.m_closeBtn.onClick(this, this.onClickClose);
            };
            WarCostView.prototype.onClickOkBtn = function () {
                // this.moduleWindow.closeSelf();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState();
            };
            WarCostView.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
                this.moduleMain.menuClose();
            };
            WarCostView.prototype.onWindowShow = function () {
                this.setData();
            };
            WarCostView.prototype.onWindowHide = function () {
            };
            WarCostView.prototype.yrCostItem = function (index, obj) {
                var item = obj;
                item.setData(this.costlist.getValue(index), this.charact.getValue(index));
            };
            WarCostView.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                var list = Game.moduleModel.warData.curYRList;
                this.costlist = new Dictionary();
                this.charact = new Dictionary();
                this.m_nameTip.text = format(Game.config.msg.getConfig(MsgKey.movie_actor_pay).notice, Game.moduleModel.warData.moveStory.filmName);
                var cost = 0;
                var counts = 0;
                if (list.count > 0) {
                    var keyList = list.getKeys();
                    for (var i = 0; i < keyList.length; i++) {
                        var val = list.getValue(keyList[i]);
                        if (val.id !== 9999) {
                            var charactItem = Game.moduleModel.warData.moveStory.characterProperty[i];
                            if (val.id !== 9997) {
                                cost += val.PayForFilming(charactItem.type);
                            }
                            this.charact.add(counts, charactItem);
                            this.costlist.add(counts, val);
                            counts++;
                        }
                    }
                }
                this.m_costText.text = formatNumberUnit(cost, 1);
                this.m_costIcon.icon = Game.config.avatar.getConfig(Game.config.item.getConfig(EItemId.dollar).icon).iconUrl;
                this.m_yrList.numItems = counts;
            };
            return WarCostView;
        }(WarMovie.WarCostViewStruct));
        WarMovie.WarCostView = WarCostView;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCostView.js.map