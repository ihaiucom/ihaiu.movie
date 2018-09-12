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
        var WarTip = /** @class */ (function (_super) {
            __extends(WarTip, _super);
            function WarTip() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.haveClose = false;
                return _this;
            }
            WarTip.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_closeBtn.onClick(this, this.clickCloseBtn);
            };
            WarTip.prototype.clickCloseBtn = function () {
                if (!this.haveClose) {
                    this.haveClose = true;
                    this.m_t0.playReverse(Handler.create(this, this.close));
                }
            };
            WarTip.prototype.close = function () {
                if (this.okFunc && this.okFunc !== null) {
                    this.okFunc();
                }
                this.visible = false;
            };
            WarTip.prototype.setData = function (content, okFunc) {
                this.haveClose = false;
                this.okFunc = okFunc;
                this.m_des.text = content;
                this.visible = true;
                this.m_t0.play(null, 1);
            };
            return WarTip;
        }(WarMovie.WarTipStruct));
        WarMovie.WarTip = WarTip;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTip.js.map