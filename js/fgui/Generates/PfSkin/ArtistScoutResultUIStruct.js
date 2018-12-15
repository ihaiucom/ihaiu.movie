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
        var ArtistScoutResultUIStruct = /** @class */ (function (_super) {
            __extends(ArtistScoutResultUIStruct, _super);
            function ArtistScoutResultUIStruct() {
                return _super.call(this) || this;
            }
            ArtistScoutResultUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistScoutResultUI"));
            };
            ArtistScoutResultUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_effect = this.getController("c_visible_effect");
                this.m_dianzan = (this.getChild("dianzan"));
                this.m_zuanshi = (this.getChild("zuanshi"));
                this.m_xingtan = (this.getChild("xingtan"));
                this.m_leaveLabel = (this.getChild("leaveLabel"));
                this.m_list = (this.getChild("list"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_resetBtn = (this.getChild("resetBtn"));
                this.m_speedBtn = (this.getChild("speedBtn"));
                this.m_effect = (this.getChild("effect"));
            };
            ArtistScoutResultUIStruct.URL = "ui://s33x8418jazc1l9";
            ArtistScoutResultUIStruct.DependPackages = ["PfSkin", "Common", "WarMovie", "Fx", "System"];
            return ArtistScoutResultUIStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistScoutResultUIStruct = ArtistScoutResultUIStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistScoutResultUIStruct.js.map