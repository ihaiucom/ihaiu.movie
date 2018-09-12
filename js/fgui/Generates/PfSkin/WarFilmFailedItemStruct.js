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
        var WarFilmFailedItemStruct = /** @class */ (function (_super) {
            __extends(WarFilmFailedItemStruct, _super);
            function WarFilmFailedItemStruct() {
                return _super.call(this) || this;
            }
            WarFilmFailedItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmFailedItem"));
            };
            WarFilmFailedItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_icon = (this.getChild("icon"));
                this.m_title = (this.getChild("title"));
                this.m_okTip = (this.getChild("okTip"));
            };
            WarFilmFailedItemStruct.URL = "ui://s33x8418k8js1hd";
            WarFilmFailedItemStruct.DependPackages = ["PfSkin"];
            return WarFilmFailedItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarFilmFailedItemStruct = WarFilmFailedItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmFailedItemStruct.js.map