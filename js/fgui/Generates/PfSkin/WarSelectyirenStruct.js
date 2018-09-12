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
        var WarSelectyirenStruct = /** @class */ (function (_super) {
            __extends(WarSelectyirenStruct, _super);
            function WarSelectyirenStruct() {
                return _super.call(this) || this;
            }
            WarSelectyirenStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("PfSkin", "WarSelectyiren"));
            };
            WarSelectyirenStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_SelectYR = this.getController("SelectYR");
                this.m_bg = (this.getChild("bg"));
                this.m_topBg = (this.getChild("topBg"));
                this.m_title = (this.getChild("title"));
                this.m_reqList = (this.getChild("reqList"));
                this.m_zhong = (this.getChild("zhong"));
                this.m_zhongTip = (this.getChild("zhongTip"));
                this.m_yrReqCom = (this.getChild("yrReqCom"));
                this.m_listBg = (this.getChild("listBg"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_yiList = (this.getChild("yiList"));
                this.m_bgTemp = (this.getChild("bgTemp"));
                this.m_emtpyTip = (this.getChild("emtpyTip"));
                this.m_emtpyTip2 = (this.getChild("emtpyTip2"));
                this.m_searchTip = (this.getChild("searchTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmInfBtn = (this.getChild("filmInfBtn"));
                this.m_backBtn = (this.getChild("backBtn"));
                this.m_selectOkBtn = (this.getChild("selectOkBtn"));
            };
            WarSelectyirenStruct.URL = "ui://s33x84186ve81fw";
            WarSelectyirenStruct.DependPackages = ["PfSkin"];
            return WarSelectyirenStruct;
        }(fairygui.GComponent));
        PfSkin.WarSelectyirenStruct = WarSelectyirenStruct;
    })(PfSkin = fgui.PfSkin || (fgui.PfSkin = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectyirenStruct.js.map