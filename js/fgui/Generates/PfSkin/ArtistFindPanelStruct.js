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
        var ArtistFindPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistFindPanelStruct, _super);
            function ArtistFindPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistFindPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistFindPanel"));
            };
            ArtistFindPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c_visible_dialog = this.getController("c_visible_dialog");
                this.m_gold = (this.getChild("gold"));
                this.m_time = (this.getChild("time"));
                this.m_remianTime = (this.getChild("remianTime"));
                this.m_leaveTip = (this.getChild("leaveTip"));
                this.m_tremianTime = (this.getChild("tremianTime"));
                this.m_findBtn = (this.getChild("findBtn"));
                this.m_dialog1 = (this.getChild("dialog1"));
                this.m_dialog2 = (this.getChild("dialog2"));
                this.m_dialog3 = (this.getChild("dialog3"));
            };
            ArtistFindPanelStruct.URL = "ui://s33x8418tqflt269";
            ArtistFindPanelStruct.DependPackages = ["PfSkin", "Common", "WarMovie"];
            return ArtistFindPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistFindPanelStruct = ArtistFindPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistFindPanelStruct.js.map