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
    var WarMovie;
    (function (WarMovie) {
        var WarSelectActorStruct = /** @class */ (function (_super) {
            __extends(WarSelectActorStruct, _super);
            function WarSelectActorStruct() {
                return _super.call(this) || this;
            }
            WarSelectActorStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarSelectActor"));
            };
            WarSelectActorStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_select = this.getController("select");
                this.m_okBtnContorl = this.getController("okBtnContorl");
                this.m_reqList = (this.getChild("reqList"));
                this.m_emtpyTip = (this.getChild("emtpyTip"));
                this.m_emtpyTip2 = (this.getChild("emtpyTip2"));
                this.m_searchTip = (this.getChild("searchTip"));
                this.m_yrList = (this.getChild("yrList"));
                this.m_title = (this.getChild("title"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_filmInfBtn = (this.getChild("filmInfBtn"));
                this.m_selectTip = (this.getChild("selectTip"));
                this.m_backBtn = (this.getChild("backBtn"));
                this.m_zhongTip = (this.getChild("zhongTip"));
            };
            WarSelectActorStruct.URL = "ui://y6ozucp1yytj5m";
            WarSelectActorStruct.DependPackages = ["WarMovie", "PfSkin", "Common"];
            return WarSelectActorStruct;
        }(fairygui.GComponent));
        WarMovie.WarSelectActorStruct = WarSelectActorStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarSelectActorStruct.js.map