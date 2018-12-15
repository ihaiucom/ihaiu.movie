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
        var TopMainBarStruct = /** @class */ (function (_super) {
            __extends(TopMainBarStruct, _super);
            function TopMainBarStruct() {
                return _super.call(this) || this;
            }
            TopMainBarStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "TopMainBar"));
            };
            TopMainBarStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_headInfo = (this.getChild("headInfo"));
                this.m_street = (this.getChild("street"));
                this.m_server = (this.getChild("server"));
                this.m_moneyBar = (this.getChild("moneyBar"));
            };
            TopMainBarStruct.URL = "ui://7ecreso0rbh3x45";
            TopMainBarStruct.DependPackages = ["MainUI", "Common"];
            return TopMainBarStruct;
        }(fairygui.GComponent));
        MainUI.TopMainBarStruct = TopMainBarStruct;
    })(MainUI = fgui.MainUI || (fgui.MainUI = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=TopMainBarStruct.js.map