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
        var ConfirmBtn2Struct = /** @class */ (function (_super) {
            __extends(ConfirmBtn2Struct, _super);
            function ConfirmBtn2Struct() {
                return _super.call(this) || this;
            }
            ConfirmBtn2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "ConfirmBtn2"));
            };
            ConfirmBtn2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            ConfirmBtn2Struct.URL = "ui://y6ozucp1qbxl8e";
            ConfirmBtn2Struct.DependPackages = ["WarMovie", "Common"];
            return ConfirmBtn2Struct;
        }(fairygui.GButton));
        WarMovie.ConfirmBtn2Struct = ConfirmBtn2Struct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ConfirmBtn2Struct.js.map