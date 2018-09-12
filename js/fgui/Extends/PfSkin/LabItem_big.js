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
        var LabItem_big = /** @class */ (function (_super) {
            __extends(LabItem_big, _super);
            function LabItem_big() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LabItem_big.prototype.RenderItem = function (data) {
                if (data == null) {
                    return;
                }
                if (data.itemIconUrl) {
                    this.itemData = data;
                }
                else {
                    this.itemData = Games.ItemData.Create(data.itemId, data.itemNum);
                }
                // this.title = this.itemData.itemNum.toString();
                this.normalNumb = this.itemData.itemNum;
                this.icon = this.itemData.itemIconUrl;
                this.m_star.starNum = this.itemData.itemStar;
            };
            Object.defineProperty(LabItem_big.prototype, "normalNumb", {
                set: function (num) {
                    var str = formatNumberUnit(num);
                    this.title = str;
                },
                enumerable: true,
                configurable: true
            });
            LabItem_big.prototype.normalNumbs = function (fmat) {
                var numbs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    numbs[_i - 1] = arguments[_i];
                }
                var str = formatArrayNumberUnit.apply(void 0, [fmat].concat(numbs));
                this.title = str;
            };
            return LabItem_big;
        }(PfSkin.LabItem_bigStruct));
        PfSkin.LabItem_big = LabItem_big;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabItem_big.js.map