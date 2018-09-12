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
        var LabAsset_BG = /** @class */ (function (_super) {
            __extends(LabAsset_BG, _super);
            function LabAsset_BG() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(LabAsset_BG.prototype, "normalNumb", {
                set: function (num) {
                    var str = formatNumberUnit(num, num >= 1000 ? 1 : 0);
                    this.title = str;
                },
                enumerable: true,
                configurable: true
            });
            LabAsset_BG.prototype.normalNumbs = function (fmat) {
                var numbs = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    numbs[_i - 1] = arguments[_i];
                }
                var str = formatArrayNumberUnit.apply(void 0, [fmat].concat(numbs));
                this.title = str;
            };
            return LabAsset_BG;
        }(PfSkin.LabAsset_BGStruct));
        PfSkin.LabAsset_BG = LabAsset_BG;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LabAsset_BG.js.map