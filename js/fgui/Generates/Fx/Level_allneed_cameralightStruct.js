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
        var Level_allneed_cameralightStruct = /** @class */ (function (_super) {
            __extends(Level_allneed_cameralightStruct, _super);
            function Level_allneed_cameralightStruct() {
                return _super.call(this) || this;
            }
            Level_allneed_cameralightStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "level_allneed_cameralight"));
            };
            Level_allneed_cameralightStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransition("t0");
            };
            Level_allneed_cameralightStruct.URL = "ui://9l36y1kir7woqu";
            Level_allneed_cameralightStruct.DependPackages = ["Fx"];
            return Level_allneed_cameralightStruct;
        }(fairygui.GComponent));
        Fx.Level_allneed_cameralightStruct = Level_allneed_cameralightStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=Level_allneed_cameralightStruct.js.map