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
        var SubMenuBgArrowStruct = /** @class */ (function (_super) {
            __extends(SubMenuBgArrowStruct, _super);
            function SubMenuBgArrowStruct() {
                return _super.call(this) || this;
            }
            SubMenuBgArrowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "SubMenuBgArrow"));
            };
            SubMenuBgArrowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_arrow = this.getController("arrow");
                this.m_arrowDown = (this.getChild("arrowDown"));
                this.m_arrowTop = (this.getChild("arrowTop"));
                this.m_arrowLeft = (this.getChild("arrowLeft"));
                this.m_arrowRight = (this.getChild("arrowRight"));
            };
            SubMenuBgArrowStruct.URL = "ui://7ecreso0m6h3x4d";
            SubMenuBgArrowStruct.DependPackages = ["MainUI"];
            return SubMenuBgArrowStruct;
        }(fairygui.GComponent));
        MainUI.SubMenuBgArrowStruct = SubMenuBgArrowStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=SubMenuBgArrowStruct.js.map