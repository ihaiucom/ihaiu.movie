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
        var WarFilmInfoStruct = /** @class */ (function (_super) {
            __extends(WarFilmInfoStruct, _super);
            function WarFilmInfoStruct() {
                return _super.call(this) || this;
            }
            WarFilmInfoStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarFilmInfo"));
            };
            WarFilmInfoStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bg = (this.getChild("bg"));
                this.m_upDaban = (this.getChild("upDaban"));
                this.m_diban = (this.getChild("diban"));
                this.m_dibian = (this.getChild("dibian"));
                this.m_daban = (this.getChild("daban"));
                this.m_daojiao = (this.getChild("daojiao"));
                this.m_textBg = (this.getChild("textBg"));
                this.m_kuang = (this.getChild("kuang"));
                this.m_filmIcon = (this.getChild("filmIcon"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_filmLabelList = (this.getChild("filmLabelList"));
                this.m_yirenbg = (this.getChild("yirenbg"));
                this.m_fenge1 = (this.getChild("fenge1"));
                this.m_gzTip = (this.getChild("gzTip"));
                this.m_gzTip2 = (this.getChild("gzTip2"));
                this.m_manIcon = (this.getChild("manIcon"));
                this.m_manReq = (this.getChild("manReq"));
                this.m_womanIcon = (this.getChild("womanIcon"));
                this.m_womanReq = (this.getChild("womanReq"));
                this.m_childIcon = (this.getChild("childIcon"));
                this.m_childReq = (this.getChild("childReq"));
                this.m_fenge2 = (this.getChild("fenge2"));
                this.m_filmYirenList = (this.getChild("filmYirenList"));
                this.m_icon = (this.getChild("icon"));
                this.m_attAdd = (this.getChild("attAdd"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_filmStar = (this.getChild("filmStar"));
                this.m_filmType = (this.getChild("filmType"));
                this.m_completedConditions1 = (this.getChild("completedConditions1"));
                this.m_completedConditions2 = (this.getChild("completedConditions2"));
                this.m_completedConditions3 = (this.getChild("completedConditions3"));
                this.m_completedConditions4 = (this.getChild("completedConditions4"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarFilmInfoStruct.URL = "ui://s33x8418r8ay1fh";
            WarFilmInfoStruct.DependPackages = ["PfSkin"];
            return WarFilmInfoStruct;
        }(fairygui.GComponent));
        PfSkin.WarFilmInfoStruct = WarFilmInfoStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFilmInfoStruct.js.map