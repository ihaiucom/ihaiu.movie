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
        var MinDialogStruct = /** @class */ (function (_super) {
            __extends(MinDialogStruct, _super);
            function MinDialogStruct() {
                return _super.call(this) || this;
            }
            MinDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "MinDialog"));
            };
            MinDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
            };
            MinDialogStruct.URL = "ui://y6ozucp1ty0bdq";
            MinDialogStruct.DependPackages = ["WarMovie", "Common"];
            return MinDialogStruct;
        }(fairygui.GLabel));
        WarMovie.MinDialogStruct = MinDialogStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MinDialogStruct.js.map