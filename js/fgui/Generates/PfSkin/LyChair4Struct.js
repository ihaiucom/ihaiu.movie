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
        var LyChair4Struct = /** @class */ (function (_super) {
            __extends(LyChair4Struct, _super);
            function LyChair4Struct() {
                return _super.call(this) || this;
            }
            LyChair4Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LyChair4"));
            };
            LyChair4Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            LyChair4Struct.URL = "ui://s33x8418sm6tt1vn";
            LyChair4Struct.DependPackages = ["PfSkin"];
            return LyChair4Struct;
        }(fairygui.GComponent));
        PfSkin.LyChair4Struct = LyChair4Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyChair4Struct.js.map