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
    var PfSkin;
    (function (PfSkin) {
        var MarqueeStruct = /** @class */ (function (_super) {
            __extends(MarqueeStruct, _super);
            function MarqueeStruct() {
                return _super.call(this) || this;
            }
            MarqueeStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "Marquee"));
            };
            MarqueeStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_way = (this.getChild("way"));
            };
            MarqueeStruct.URL = "ui://s33x8418swip1uc";
            MarqueeStruct.DependPackages = ["PfSkin"];
            return MarqueeStruct;
        }(fairygui.GLabel));
        PfSkin.MarqueeStruct = MarqueeStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=MarqueeStruct.js.map