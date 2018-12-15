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
    var GoldExchange;
    (function (GoldExchange) {
        var GoldExchangeViewStruct = /** @class */ (function (_super) {
            __extends(GoldExchangeViewStruct, _super);
            function GoldExchangeViewStruct() {
                return _super.call(this) || this;
            }
            GoldExchangeViewStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("GoldExchange", "GoldExchangeView"));
            };
            GoldExchangeViewStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_dialogUI = (this.getChild("dialogUI"));
                this.m_panel = (this.getChild("panel"));
            };
            GoldExchangeViewStruct.URL = "ui://4kwtb00phqf40";
            GoldExchangeViewStruct.DependPackages = ["GoldExchange", "Common"];
            return GoldExchangeViewStruct;
        }(fairygui.GComponent));
        GoldExchange.GoldExchangeViewStruct = GoldExchangeViewStruct;
    })(GoldExchange = fgui.GoldExchange || (fgui.GoldExchange = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=GoldExchangeViewStruct.js.map