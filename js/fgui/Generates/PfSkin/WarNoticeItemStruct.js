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
        var WarNoticeItemStruct = /** @class */ (function (_super) {
            __extends(WarNoticeItemStruct, _super);
            function WarNoticeItemStruct() {
                return _super.call(this) || this;
            }
            WarNoticeItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarNoticeItem"));
            };
            WarNoticeItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_pinglunPage = this.getController("pinglunPage");
                this.m_bg = (this.getChild("bg"));
                this.m_bg2 = (this.getChild("bg2"));
                this.m_icon = (this.getChild("icon"));
                this.m_noticeName = (this.getChild("noticeName"));
                this.m_userName = (this.getChild("userName"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_riqi = (this.getChild("riqi"));
                this.m_okorerror = (this.getChild("okorerror"));
                this.m_pinglun1 = (this.getChild("pinglun1"));
                this.m_meitiName = (this.getChild("meitiName"));
                this.m_haibao = (this.getChild("haibao"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_pinglun2 = (this.getChild("pinglun2"));
                this.m_meitiming = (this.getChild("meitiming"));
                this.m_meitijieshao = (this.getChild("meitijieshao"));
                this.m_haibaobg = (this.getChild("haibaobg"));
                this.m_haibao3 = (this.getChild("haibao3"));
                this.m_pinglun3 = (this.getChild("pinglun3"));
                this.m_dianzanIcon = (this.getChild("dianzanIcon"));
                this.m_fen = (this.getChild("fen"));
                this.m_dianzanValue = (this.getChild("dianzanValue"));
                this.m_des = (this.getChild("des"));
                this.m_des2 = (this.getChild("des2"));
                this.m_des3 = (this.getChild("des3"));
                this.m_starProgress = (this.getChild("starProgress"));
            };
            WarNoticeItemStruct.URL = "ui://s33x8418q3y51h1";
            WarNoticeItemStruct.DependPackages = ["PfSkin"];
            return WarNoticeItemStruct;
        }(fairygui.GLabel));
        PfSkin.WarNoticeItemStruct = WarNoticeItemStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarNoticeItemStruct.js.map