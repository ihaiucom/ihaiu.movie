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
        var TopMoneyMainBarStruct = /** @class */ (function (_super) {
            __extends(TopMoneyMainBarStruct, _super);
            function TopMoneyMainBarStruct() {
                return _super.call(this) || this;
            }
            TopMoneyMainBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopMoneyMainBar"));
            };
            TopMoneyMainBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_gold = (this.getChild("gold"));
                this.m_diamond = (this.getChild("diamond"));
            };
            TopMoneyMainBarStruct.URL = "ui://7ecreso0f2qvx3s";
            TopMoneyMainBarStruct.DependPackages = ["MainUI", "Common"];
            return TopMoneyMainBarStruct;
        }(fairygui.GComponent));
        MainUI.TopMoneyMainBarStruct = TopMoneyMainBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMoneyMainBarStruct.js.map