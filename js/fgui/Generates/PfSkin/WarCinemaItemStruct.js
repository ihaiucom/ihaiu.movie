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
        var WarCinemaItemStruct = /** @class */ (function (_super) {
            __extends(WarCinemaItemStruct, _super);
            function WarCinemaItemStruct() {
                return _super.call(this) || this;
            }
            WarCinemaItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarCinemaItem"));
            };
            WarCinemaItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg1 = (this.getChild("bg1"));
                this.m_iconBg = (this.getChild("iconBg"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_tip = (this.getChild("tip"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarCinemaItemStruct.URL = "ui://s33x8418k8js1hs";
            WarCinemaItemStruct.DependPackages = ["PfSkin"];
            return WarCinemaItemStruct;
        }(fairygui.GComponent));
        PfSkin.WarCinemaItemStruct = WarCinemaItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarCinemaItemStruct.js.map