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
    var MainUI;
    (function (MainUI) {
        var WarShangyingProgressBar2Struct = /** @class */ (function (_super) {
            __extends(WarShangyingProgressBar2Struct, _super);
            function WarShangyingProgressBar2Struct() {
                return _super.call(this) || this;
            }
            WarShangyingProgressBar2Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "WarShangyingProgressBar2"));
            };
            WarShangyingProgressBar2Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar_v = (this.getChild("bar_v"));
            };
            WarShangyingProgressBar2Struct.URL = "ui://7ecreso0ma97x3u";
            WarShangyingProgressBar2Struct.DependPackages = ["MainUI", "Common"];
            return WarShangyingProgressBar2Struct;
        }(fairygui.GProgressBar));
        MainUI.WarShangyingProgressBar2Struct = WarShangyingProgressBar2Struct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarShangyingProgressBar2Struct.js.map