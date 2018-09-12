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
    var Common;
    (function (Common) {
        var BtnItemBuyStruct = /** @class */ (function (_super) {
            __extends(BtnItemBuyStruct, _super);
            function BtnItemBuyStruct() {
                return _super.call(this) || this;
            }
            BtnItemBuyStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("Common", "BtnItemBuy"));
            };
            BtnItemBuyStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_button = this.getController("button");
                this.m_itemIcon = (this.getChild("itemIcon"));
                this.m_itemCount = (this.getChild("itemCount"));
            };
            BtnItemBuyStruct.URL = "ui://txcuvopdol2e2p";
            BtnItemBuyStruct.DependPackages = ["Common"];
            return BtnItemBuyStruct;
        }(fairygui.GButton));
        Common.BtnItemBuyStruct = BtnItemBuyStruct;
    })(Common = fgui.Common || (fgui.Common = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=BtnItemBuyStruct.js.map