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
                this.m_icon1.icon = Games.WarLoadPic.getItemIcon(data[0].itemId);
                this.m_val1.text = data[0].itemNum.toFixed(0);
                if (data.length > 1) {
                    this.m_icon2.icon = Games.WarLoadPic.getItemIcon(data[1].itemId);
                    this.m_val2.text = data[1].itemNum.toFixed(0);
                    this.m_icon2.visible = true;
                    this.m_val2.visible = true;
                }
                else {
                    this.m_icon2.visible = false;
                    this.m_val2.visible = false;
                }
                this.starUpdate = starUpdate;
                this.visible = true;
            };
            return WarTargetSucces;
        }(WarMovie.WarTargetSuccesStruct));
        WarMovie.WarTargetSucces = WarTargetSucces;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTargetSucces.js.map