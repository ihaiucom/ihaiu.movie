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
        var TopMoneyItemStruct = /** @class */ (function (_super) {
            __extends(TopMoneyItemStruct, _super);
            function TopMoneyItemStruct() {
                return _super.call(this) || this;
            }
            TopMoneyItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopMoneyItem"));
            };
            TopMoneyItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_addButtonVisiable = this.getController("addButtonVisiable");
                this.m_title = (this.getChild("title"));
                this.m_icon = (this.getChild("icon"));
                this.m_addButton = (this.getChild("addButton"));
            };
            TopMoneyItemStruct.URL = "ui://7ecreso0rbh3x48";
            TopMoneyItemStruct.DependPackages = ["MainUI", "Common"];
            return TopMoneyItemStruct;
        }(fairygui.GLabel));
        MainUI.TopMoneyItemStruct = TopMoneyItemStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMoneyItemStruct.js.map