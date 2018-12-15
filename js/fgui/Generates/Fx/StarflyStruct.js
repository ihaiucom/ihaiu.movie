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
        var StarflyStruct = /** @class */ (function (_super) {
            __extends(StarflyStruct, _super);
            function StarflyStruct() {
                return _super.call(this) || this;
            }
            StarflyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "starfly"));
            };
            StarflyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            StarflyStruct.URL = "ui://9l36y1kid3aj5k";
            StarflyStruct.DependPackages = ["Fx"];
            return StarflyStruct;
        }(fairygui.GComponent));
        Fx.StarflyStruct = StarflyStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=StarflyStruct.js.map