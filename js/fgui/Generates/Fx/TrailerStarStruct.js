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
        var TrailerStarStruct = /** @class */ (function (_super) {
            __extends(TrailerStarStruct, _super);
            function TrailerStarStruct() {
                return _super.call(this) || this;
            }
            TrailerStarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Fx", "TrailerStar"));
            };
            TrailerStarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
            };
            TrailerStarStruct.URL = "ui://9l36y1kic6xjgh";
            TrailerStarStruct.DependPackages = ["Fx"];
            return TrailerStarStruct;
        }(fairygui.GComponent));
        Fx.TrailerStarStruct = TrailerStarStruct;
    })(Fx = fgui.Fx || (fgui.Fx = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TrailerStarStruct.js.map