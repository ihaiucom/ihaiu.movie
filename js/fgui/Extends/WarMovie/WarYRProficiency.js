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
        var WarYRProficiency = /** @class */ (function (_super) {
            __extends(WarYRProficiency, _super);
            function WarYRProficiency() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarYRProficiency.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title.text = TEXT.FilmProficiencyTitle;
                // 确定按钮
                this.m_okBtn.onClick(this, this.onClickOkBtn);
                // 艺人列表
                this.m_actorList.itemRenderer = Laya.Handler.create(this, this.initYRItem, null, false);
            };
            WarYRProficiency.prototype.onClickOkBtn = function () {
                // this.moduleWindow.closeSelf();
                this.moduleMain.conent.startShowWaiting();
                // 保存当前状态到服务器
                Game.moduleModel.warData.sendUpdateMovieState();
            };
            WarYRProficiency.prototype.onClickClose = function () {
                this.moduleWindow.closeSelf();
            };
            WarYRProficiency.prototype.onWindowShow = function () {
                Game.moduleModel.warData.sProficiencyUpdate.add(this.updateList, this);
                this.setData();
            };
            WarYRProficiency.prototype.onWindowHide = function () {
                Game.moduleModel.warData.sProficiencyUpdate.add(this.updateList, this);
            };
            WarYRProficiency.prototype.updateList = function () {
                this.m_okBtn.visible = true;
            };
            WarYRProficiency.prototype.setData = function () {
                this.moduleMain = this.moduleWindow.mainWindow;
                this.m_okBtn.visible = false;
                var typetip = "";
                var types = Game.config.movieShootType.getConfigList();
                var tips = Game.config.msg.getConfig(MsgKey.movie_type_tips).notice;
                var curType;
                for (var i = 0; i < types.length; i++) {
                    if (types[i].id == Game.moduleModel.warData.moveData.type) {
                        curType = types[i];
                        break;
                    }
                }
                this.m_filmName.text = format(Game.config.msg.getConfig(MsgKey.movie_type_addition).notice, curType.getName);
                this.m_filmDes.setData(curType.getLove);
                this.m_icon.icon = Game.config.avatar.getConfig(curType.pic).iconUrl;
                // 此处需要修改，需要读取 Game.moduleModel.warData.moveData.data 艺人数据
                this.m_actorList.numItems = Game.moduleModel.warData.getRealYRList.count;
            };
            // 列表单个item赋值
            WarYRProficiency.prototype.initYRItem = function (index, obj) {
                var item = obj;
                item.setData(Game.moduleModel.warData.getRealYRList.getValue(index), index);
            };
            return WarYRProficiency;
        }(WarMovie.WarYRProficiencyStruct));
        WarMovie.WarYRProficiency = WarYRProficiency;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarYRProficiency.js.map