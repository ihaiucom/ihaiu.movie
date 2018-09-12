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
        var WarFilmShareStruct = /** @class */ (function (_super) {
            __extends(WarFilmShareStruct, _super);
            function WarFilmShareStruct() {
                return _super.call(this) || this;
            }
            WarFilmShareStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmShare"));
            };
            WarFilmShareStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmTime = (this.getChild("filmTime"));
                this.m_userName = (this.getChild("userName"));
                this.m_icon = (this.getChild("icon"));
                this.m_pingjia = (this.getChild("pingjia"));
                this.m_meitiValue = (this.getChild("meitiValue"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_total = (this.getChild("total"));
                this.m_filmLabelList = (this.getChild("filmLabelList"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmType = (this.getChild("filmType"));
            };
            WarFilmShareStruct.URL = "ui://s33x8418pvrg1i9";
            WarFilmShareStruct.DependPackages = ["PfSkin"];
            return WarFilmShareStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmShareStruct = WarFilmShareStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmShareStruct.js.map