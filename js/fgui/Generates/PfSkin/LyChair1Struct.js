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
        var LyChair1Struct = /** @class */ (function (_super) {
            __extends(LyChair1Struct, _super);
            function LyChair1Struct() {
                return _super.call(this) || this;
            }
            LyChair1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "LyChair1"));
            };
            LyChair1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            LyChair1Struct.URL = "ui://s33x8418sm6tt1vk";
            LyChair1Struct.DependPackages = ["PfSkin"];
            return LyChair1Struct;
        }(fairygui.GComponent));
        PfSkin.LyChair1Struct = LyChair1Struct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=LyChair1Struct.js.map