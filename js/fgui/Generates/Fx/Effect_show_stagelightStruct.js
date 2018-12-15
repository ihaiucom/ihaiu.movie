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
        var Effect_show_stagelightStruct = /** @class */ (function (_super) {
            __extends(Effect_show_stagelightStruct, _super);
            function Effect_show_stagelightStruct() {
                return _super.call(this) || this;
            }
            Effect_show_stagelightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "Effect_show_stagelight"));
            };
            Effect_show_stagelightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Effect_show_stagelightStruct.URL = "ui://9l36y1ki8ukwom";
            Effect_show_stagelightStruct.DependPackages = ["Fx"];
            return Effect_show_stagelightStruct;
        }(fairygui.GComponent));
        Fx.Effect_show_stagelightStruct = Effect_show_stagelightStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Effect_show_stagelightStruct.js.map