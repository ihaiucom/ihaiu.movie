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
        var ArtistShowStruct = /** @class */ (function (_super) {
            __extends(ArtistShowStruct, _super);
            function ArtistShowStruct() {
                return _super.call(this) || this;
            }
            ArtistShowStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("ArtistDic", "ArtistShow"));
            };
            ArtistShowStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_HaveNo = this.getController("HaveNo");
                this.m_haveNoBoard = this.getController("haveNoBoard");
                this.m_nameTip1 = (this.getChild("nameTip1"));
                this.m_nameTip2 = (this.getChild("nameTip2"));
                this.m_icon = (this.getChild("icon"));
                this.m_notHired = (this.getChild("notHired"));
                this.m_name = (this.getChild("name"));
                this.m_starList = (this.getChild("starList"));
                this.m_sexIcon = (this.getChild("sexIcon"));
                this.m_countryIcon = (this.getChild("countryIcon"));
                this.m_showIcon = (this.getChild("showIcon"));
                this.m_ageIcon = (this.getChild("ageIcon"));
                this.m_tip1 = (this.getChild("tip1"));
                this.m_tip2 = (this.getChild("tip2"));
                this.m_talkList = (this.getChild("talkList"));
                this.m_inputBG = (this.getChild("inputBG"));
                this.m_input = (this.getChild("input"));
                this.m_tip3 = (this.getChild("tip3"));
                this.m_noTip = (this.getChild("noTip"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_sendBtn = (this.getChild("sendBtn"));
                this.m_detailsBtn = (this.getChild("detailsBtn"));
            };
            ArtistShowStruct.URL = "ui://aeg3jnlem8atr";
            ArtistShowStruct.DependPackages = ["ArtistDic", "WarMovie", "Common", "PfSkin"];
            return ArtistShowStruct;
        }(fairygui.GComponent));
        ArtistDic.ArtistShowStruct = ArtistShowStruct;
    })(ArtistDic = fgui.ArtistDic || (fgui.ArtistDic = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=ArtistShowStruct.js.map