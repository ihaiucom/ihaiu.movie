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
    var Fx;
    (function (Fx) {
        var Effect_chapterStruct = /** @class */ (function (_super) {
            __extends(Effect_chapterStruct, _super);
            function Effect_chapterStruct() {
                return _super.call(this) || this;
            }
            Effect_chapterStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_chapter"));
            };
            Effect_chapterStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_chapterStruct.URL = "ui://9l36y1kikowfik";
            Effect_chapterStruct.DependPackages = ["Fx"];
            return Effect_chapterStruct;
        }(fairygui.GComponent));
        Fx.Effect_chapterStruct = Effect_chapterStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_chapterStruct.js.map