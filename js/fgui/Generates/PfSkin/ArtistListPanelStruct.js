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
        var ArtistListPanelStruct = /** @class */ (function (_super) {
            __extends(ArtistListPanelStruct, _super);
            function ArtistListPanelStruct() {
                return _super.call(this) || this;
            }
            ArtistListPanelStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "ArtistListPanel"));
            };
            ArtistListPanelStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChild("list"));
                this.m_name1 = (this.getChild("name1"));
                this.m_name2 = (this.getChild("name2"));
                this.m_canScount = (this.getChild("canScount"));
                this.m_canScountTitle = (this.getChild("canScountTitle"));
                this.m_listPanel = (this.getChild("listPanel"));
                this.m_xingtanBtn = (this.getChild("xingtanBtn"));
                this.m_frozenBtn = (this.getChild("frozenBtn"));
                this.m_add = (this.getChild("add"));
            };
            ArtistListPanelStruct.URL = "ui://s33x8418tqflt26a";
            ArtistListPanelStruct.DependPackages = ["PfSkin", "Common"];
            return ArtistListPanelStruct;
        }(fairygui.GComponent));
        PfSkin.ArtistListPanelStruct = ArtistListPanelStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistListPanelStruct.js.map