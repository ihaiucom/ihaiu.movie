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
        var DialogUI = /** @class */ (function (_super) {
            __extends(DialogUI, _super);
            function DialogUI() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DialogUI.prototype.open = function (content, okFunc) {
                var _this = this;
                this.m_dialog.m_title.text = content;
                this.okFunc = okFunc;
                Games.MenuLayer.dialog.addChild(this);
                setTimeout(function () {
                    _this.close();
                }, 3000);
                setTimeout(function () {
                    _this.onClick(_this, _this.close);
                }, 1000);
            };
            DialogUI.prototype.close = function () {
                this.offClick(this, this.close);
                this.removeFromParent();
                if (this.okFunc !== null) {
                    this.okFunc();
                }
            };
            return DialogUI;
        }(PfSkin.DialogUIStruct));
        PfSkin.DialogUI = DialogUI;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=DialogUI.js.map