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
        var TopHeadInfoStruct = /** @class */ (function (_super) {
            __extends(TopHeadInfoStruct, _super);
            function TopHeadInfoStruct() {
                return _super.call(this) || this;
            }
            TopHeadInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopHeadInfo"));
            };
            TopHeadInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_vip = (this.getChild("vip"));
                this.m_level = (this.getChild("level"));
                this.m_headIcon = (this.getChild("headIcon"));
                this.m_expBar = (this.getChild("expBar"));
            };
            TopHeadInfoStruct.URL = "ui://7ecreso0f2qvx3r";
            TopHeadInfoStruct.DependPackages = ["MainUI"];
            return TopHeadInfoStruct;
        }(fairygui.GComponent));
        MainUI.TopHeadInfoStruct = TopHeadInfoStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopHeadInfoStruct.js.map