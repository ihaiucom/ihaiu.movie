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
    var ArtistDic;
    (function (ArtistDic) {
        var ArtistDicUIStruct = /** @class */ (function (_super) {
            __extends(ArtistDicUIStruct, _super);
            function ArtistDicUIStruct() {
                return _super.call(this) || this;
            }
            ArtistDicUIStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "ArtistDicUI"));
            };
            ArtistDicUIStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_screen = this.getController("screen");
                this.m_showDetails = this.getController("showDetails");
                this.m_title = (this.getChild("title"));
                this.m_screenList = (this.getChild("screenList"));
                this.m_type1 = (this.getChild("type1"));
                this.m_type2 = (this.getChild("type2"));
                this.m_type3 = (this.getChild("type3"));
                this.m_type4 = (this.getChild("type4"));
                this.m_type5 = (this.getChild("type5"));
                this.m_typeList1 = (this.getChild("typeList1"));
                this.m_typeList2 = (this.getChild("typeList2"));
                this.m_typeList3 = (this.getChild("typeList3"));
                this.m_typeList4 = (this.getChild("typeList4"));
                this.m_typeList5 = (this.getChild("typeList5"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_closeSearchBtn = (this.getChild("closeSearchBtn"));
                this.m_artistList = (this.getChild("artistList"));
                this.m_ScreenBtn = (this.getChild("ScreenBtn"));
                this.m_shwoDetail = (this.getChild("shwoDetail"));
            };
            ArtistDicUIStruct.URL = "ui://aeg3jnlem8atq";
            ArtistDicUIStruct.DependPackages = ["ArtistDic", "WarMovie", "Common", "PfSkin"];
            return ArtistDicUIStruct;
        }(fairygui.GComponent));
        ArtistDic.ArtistDicUIStruct = ArtistDicUIStruct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistDicUIStruct.js.map