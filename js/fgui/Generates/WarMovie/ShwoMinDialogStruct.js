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
        var ShwoMinDialogStruct = /** @class */ (function (_super) {
            __extends(ShwoMinDialogStruct, _super);
            function ShwoMinDialogStruct() {
                return _super.call(this) || this;
            }
            ShwoMinDialogStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "ShwoMinDialog"));
            };
            ShwoMinDialogStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialog = (this.getChild("dialog"));
                this.m_t0 = this.getTransition("t0");
                this.m_t1 = this.getTransition("t1");
            };
            ShwoMinDialogStruct.URL = "ui://y6ozucp1ty0bdr";
            ShwoMinDialogStruct.DependPackages = ["WarMovie"];
            return ShwoMinDialogStruct;
        }(fairygui.GComponent));
        WarMovie.ShwoMinDialogStruct = ShwoMinDialogStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ShwoMinDialogStruct.js.map