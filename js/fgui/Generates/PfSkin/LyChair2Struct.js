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
        var LyChair2Struct = /** @class */ (function (_super) {
            __extends(LyChair2Struct, _super);
            function LyChair2Struct() {
                return _super.call(this) || this;
            }
            LyChair2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LyChair2"));
            };
            LyChair2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            LyChair2Struct.URL = "ui://s33x8418sm6tt1vl";
            LyChair2Struct.DependPackages = ["PfSkin"];
            return LyChair2Struct;
        }(fairygui.GComponent));
        PfSkin.LyChair2Struct = LyChair2Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyChair2Struct.js.map