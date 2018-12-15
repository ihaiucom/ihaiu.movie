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
        var GuideFinishItemStruct = /** @class */ (function (_super) {
            __extends(GuideFinishItemStruct, _super);
            function GuideFinishItemStruct() {
                return _super.call(this) || this;
            }
            GuideFinishItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "GuideFinishItem"));
            };
            GuideFinishItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_arrow1 = (this.getChild("arrow1"));
            };
            GuideFinishItemStruct.URL = "ui://7ecreso0gn0tx56";
            GuideFinishItemStruct.DependPackages = ["MainUI", "Common"];
            return GuideFinishItemStruct;
        }(fairygui.GButton));
        MainUI.GuideFinishItemStruct = GuideFinishItemStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GuideFinishItemStruct.js.map