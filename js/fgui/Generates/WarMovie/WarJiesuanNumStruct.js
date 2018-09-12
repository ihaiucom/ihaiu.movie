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
    var WarMovie;
    (function (WarMovie) {
        var WarJiesuanNumStruct = /** @class */ (function (_super) {
            __extends(WarJiesuanNumStruct, _super);
            function WarJiesuanNumStruct() {
                return _super.call(this) || this;
            }
            WarJiesuanNumStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarJiesuanNum"));
            };
            WarJiesuanNumStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_num = this.getController("num");
            };
            WarJiesuanNumStruct.URL = "ui://y6ozucp1j0tea8";
            WarJiesuanNumStruct.DependPackages = ["WarMovie"];
            return WarJiesuanNumStruct;
        }(fairygui.GComponent));
        WarMovie.WarJiesuanNumStruct = WarJiesuanNumStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarJiesuanNumStruct.js.map