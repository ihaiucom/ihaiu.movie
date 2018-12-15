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
        var TopHeadIconMaskStruct = /** @class */ (function (_super) {
            __extends(TopHeadIconMaskStruct, _super);
            function TopHeadIconMaskStruct() {
                return _super.call(this) || this;
            }
            TopHeadIconMaskStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopHeadIconMask"));
            };
            TopHeadIconMaskStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_icon = (this.getChild("icon"));
            };
            TopHeadIconMaskStruct.URL = "ui://7ecreso0pazr2g";
            TopHeadIconMaskStruct.DependPackages = ["MainUI"];
            return TopHeadIconMaskStruct;
        }(fairygui.GButton));
        MainUI.TopHeadIconMaskStruct = TopHeadIconMaskStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopHeadIconMaskStruct.js.map