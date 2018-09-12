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
        var WarTargetFailItemStruct = /** @class */ (function (_super) {
            __extends(WarTargetFailItemStruct, _super);
            function WarTargetFailItemStruct() {
                return _super.call(this) || this;
            }
            WarTargetFailItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarTargetFailItem"));
            };
            WarTargetFailItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getController("c1");
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
            };
            WarTargetFailItemStruct.URL = "ui://y6ozucp1qbxl9u";
            WarTargetFailItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarTargetFailItemStruct;
        }(fairygui.GLabel));
        WarMovie.WarTargetFailItemStruct = WarTargetFailItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarTargetFailItemStruct.js.map