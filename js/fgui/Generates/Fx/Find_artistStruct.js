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
        var Find_artistStruct = /** @class */ (function (_super) {
            __extends(Find_artistStruct, _super);
            function Find_artistStruct() {
                return _super.call(this) || this;
            }
            Find_artistStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "find_artist"));
            };
            Find_artistStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Find_artistStruct.URL = "ui://9l36y1kib2tpp8";
            Find_artistStruct.DependPackages = ["Fx"];
            return Find_artistStruct;
        }(fairygui.GComponent));
        Fx.Find_artistStruct = Find_artistStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Find_artistStruct.js.map