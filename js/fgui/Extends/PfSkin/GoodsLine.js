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
        var GoodsLine = /** @class */ (function (_super) {
            __extends(GoodsLine, _super);
            function GoodsLine() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GoodsLine.prototype.RenderItem = function (data, buyHandler) {
                this.goodsLine = data;
                this.buyHandler = buyHandler;
                if (this.goodsLine && this.goodsLine.length > 0) {
                    if (this.goodsLine[0]) {
                        this.m_Goods1.visible = true;
                        this.m_Goods1.RenderItem(this.goodsLine[0]);
                        this.m_Goods1.buyHandler = this.buyHandler;
                    }
                    else {
                        this.m_Goods1.visible = false;
                    }
                    if (this.goodsLine[1]) {
                        this.m_Goods2.visible = true;
                        this.m_Goods2.RenderItem(this.goodsLine[1]);
                        this.m_Goods2.buyHandler = this.buyHandler;
                    }
                    else {
                        this.m_Goods2.visible = false;
                    }
                    if (this.goodsLine[2]) {
                        this.m_Goods3.visible = true;
                        this.m_Goods3.RenderItem(this.goodsLine[2]);
                        this.m_Goods3.buyHandler = this.buyHandler;
                    }
                    else {
                        this.m_Goods3.visible = false;
                    }
                }
            };
            return GoodsLine;
        }(PfSkin.GoodsLineStruct));
        PfSkin.GoodsLine = GoodsLine;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoodsLine.js.map