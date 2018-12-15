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
        var WarTargetSucces = /** @class */ (function (_super) {
            __extends(WarTargetSucces, _super);
            function WarTargetSucces() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WarTargetSucces.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_iconList.itemRenderer = Laya.Handler.create(this, this.initItem, null, false);
                // 关闭
                this.m_okBtn.onClick(this, this.onClickClose);
            };
            WarTargetSucces.prototype.onClickClose = function () {
                if (this.starUpdate && this.starUpdate !== null) {
                    this.starUpdate();
                }
                this.visible = false;
            };
            WarTargetSucces.prototype.setData = function (data, starUpdate, title) {
                if (title === void 0) { title = null; }
                this.curDTItemData = data;
                this.m_iconList.numItems = this.curDTItemData.length;
                this.starUpdate = starUpdate;
                this.visible = true;
            };
            WarTargetSucces.prototype.initItem = function (index, obj) {
                var item = obj;
                item.m_icon1.icon = Games.WarLoadPic.getItemIcon(this.curDTItemData[index].itemId);
                item.m_val1.text = this.curDTItemData[index].itemNum.toFixed(0);
                var config = Game.config.item.getConfig(this.curDTItemData[index].itemId);
                item.m_starList.numItems = config.itemStarNum;
            };
            return WarTargetSucces;
        }(WarMovie.WarTargetSuccesStruct));
        WarMovie.WarTargetSucces = WarTargetSucces;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTargetSucces.js.map