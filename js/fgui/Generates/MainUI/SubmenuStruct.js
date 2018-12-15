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
        var SubmenuStruct = /** @class */ (function (_super) {
            __extends(SubmenuStruct, _super);
            function SubmenuStruct() {
                return _super.call(this) || this;
            }
            SubmenuStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "Submenu"));
            };
            SubmenuStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_arrow = this.getController("arrow");
                this.m_arrowBottom = (this.getChild("arrowBottom"));
                this.m_arrowTop = (this.getChild("arrowTop"));
                this.m_arrowLeft = (this.getChild("arrowLeft"));
                this.m_arrowRight = (this.getChild("arrowRight"));
                this.m_container = (this.getChild("container"));
            };
            SubmenuStruct.URL = "ui://7ecreso0m6h3x4c";
            SubmenuStruct.DependPackages = ["MainUI"];
            return SubmenuStruct;
        }(fairygui.GComponent));
        MainUI.SubmenuStruct = SubmenuStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SubmenuStruct.js.map