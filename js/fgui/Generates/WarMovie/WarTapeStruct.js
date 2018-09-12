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
        var WarTapeStruct = /** @class */ (function (_super) {
            __extends(WarTapeStruct, _super);
            function WarTapeStruct() {
                return _super.call(this) || this;
            }
            WarTapeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarTape"));
            };
            WarTapeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t1 = this.getTransition("t1");
            };
            WarTapeStruct.URL = "ui://y6ozucp1qbxl77";
            WarTapeStruct.DependPackages = ["WarMovie", "Common"];
            return WarTapeStruct;
        }(fairygui.GComponent));
        WarMovie.WarTapeStruct = WarTapeStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTapeStruct.js.map