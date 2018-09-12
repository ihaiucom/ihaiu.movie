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
        var ExpectProgress1Struct = /** @class */ (function (_super) {
            __extends(ExpectProgress1Struct, _super);
            function ExpectProgress1Struct() {
                return _super.call(this) || this;
            }
            ExpectProgress1Struct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "ExpectProgress1"));
            };
            ExpectProgress1Struct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_Progress = this.getController("Progress");
                this.m_bar = (this.getChild("bar"));
                this.m_bar2 = (this.getChild("bar2"));
                this.m_bar3 = (this.getChild("bar3"));
                this.m_top1 = (this.getChild("top1"));
                this.m_top2 = (this.getChild("top2"));
                this.m_top3 = (this.getChild("top3"));
                this.m_title = (this.getChild("title"));
            };
            ExpectProgress1Struct.URL = "ui://7ecreso0qz7hx4n";
            ExpectProgress1Struct.DependPackages = ["MainUI", "System", "Common"];
            return ExpectProgress1Struct;
        }(fairygui.GProgressBar));
        MainUI.ExpectProgress1Struct = ExpectProgress1Struct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ExpectProgress1Struct.js.map