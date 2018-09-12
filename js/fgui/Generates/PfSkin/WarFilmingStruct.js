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
        var WarFilmingStruct = /** @class */ (function (_super) {
            __extends(WarFilmingStruct, _super);
            function WarFilmingStruct() {
                return _super.call(this) || this;
            }
            WarFilmingStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilming"));
            };
            WarFilmingStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg2 = (this.getChild("bg2"));
                this.m_bg3 = (this.getChild("bg3"));
                this.m_xuhuan = (this.getChild("xuhuan"));
                this.m_topBg = (this.getChild("topBg"));
                this.m_title = (this.getChild("title"));
                this.m_qidaizhiBg = (this.getChild("qidaizhiBg"));
                this.m_qidaiIcon = (this.getChild("qidaiIcon"));
                this.m_tip = (this.getChild("tip"));
                this.m_qidaiValue = (this.getChild("qidaiValue"));
                this.m_psAim = (this.getChild("psAim"));
                this.m_attIcon1 = (this.getChild("attIcon1"));
                this.m_att1 = (this.getChild("att1"));
                this.m_attIcon2 = (this.getChild("attIcon2"));
                this.m_att2 = (this.getChild("att2"));
                this.m_attIcon3 = (this.getChild("attIcon3"));
                this.m_att3 = (this.getChild("att3"));
                this.m_attIcon4 = (this.getChild("attIcon4"));
                this.m_att4 = (this.getChild("att4"));
                this.m_attIcon5 = (this.getChild("attIcon5"));
                this.m_att5 = (this.getChild("att5"));
                this.m_bg4 = (this.getChild("bg4"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_desBg = (this.getChild("desBg"));
                this.m_filmTypeList = (this.getChild("filmTypeList"));
                this.m_caozuoIcon = (this.getChild("caozuoIcon"));
                this.m_caozuoTip = (this.getChild("caozuoTip"));
                this.m_caozuo = (this.getChild("caozuo"));
                this.m_topBg2 = (this.getChild("topBg2"));
                this.m_1 = (this.getChild("1"));
                this.m_2 = (this.getChild("2"));
                this.m_3 = (this.getChild("3"));
                this.m_4 = (this.getChild("4"));
                this.m_5 = (this.getChild("5"));
                this.m_filming = (this.getChild("filming"));
                this.m_biaoqianBg = (this.getChild("biaoqianBg"));
                this.m_guangmang = (this.getChild("guangmang"));
                this.m_guangquan = (this.getChild("guangquan"));
                this.m_lv1 = (this.getChild("lv1"));
                this.m_lv2 = (this.getChild("lv2"));
                this.m_lv3 = (this.getChild("lv3"));
                this.m_lv4 = (this.getChild("lv4"));
                this.m_lv5 = (this.getChild("lv5"));
                this.m_iconQidaizhi = (this.getChild("iconQidaizhi"));
                this.m_qidaizhiValue = (this.getChild("qidaizhiValue"));
                this.m_qidaizhiTip = (this.getChild("qidaizhiTip"));
                this.m_biaoqian = (this.getChild("biaoqian"));
                this.m_hengfu1 = (this.getChild("hengfu1"));
                this.m_hengfu2 = (this.getChild("hengfu2"));
                this.m_xuhua = (this.getChild("xuhua"));
                this.m_hengfuTitle = (this.getChild("hengfuTitle"));
                this.m_hengfu = (this.getChild("hengfu"));
                this.m_dikuang = (this.getChild("dikuang"));
                this.m_fenge = (this.getChild("fenge"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_xuanzeList = (this.getChild("xuanzeList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_changeNameBtn = (this.getChild("changeNameBtn"));
                this.m_filmProgress = (this.getChild("filmProgress"));
                this.m_sliver = (this.getChild("sliver"));
                this.m_xukezheng = (this.getChild("xukezheng"));
            };
            WarFilmingStruct.URL = "ui://s33x84186ve81go";
            WarFilmingStruct.DependPackages = ["PfSkin"];
            return WarFilmingStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmingStruct = WarFilmingStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmingStruct.js.map