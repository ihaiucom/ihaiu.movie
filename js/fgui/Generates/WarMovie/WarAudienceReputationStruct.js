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
        var WarAudienceReputationStruct = /** @class */ (function (_super) {
            __extends(WarAudienceReputationStruct, _super);
            function WarAudienceReputationStruct() {
                return _super.call(this) || this;
            }
            WarAudienceReputationStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarAudienceReputation"));
            };
            WarAudienceReputationStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_scorTip = (this.getChild("scorTip"));
                this.m_score = (this.getChild("score"));
                this.m_typeList = (this.getChild("typeList"));
                this.m_audTip2 = (this.getChild("audTip2"));
                this.m_audTip3 = (this.getChild("audTip3"));
                this.m_audTip4 = (this.getChild("audTip4"));
                this.m_audTip5 = (this.getChild("audTip5"));
                this.m_filmInf = (this.getChild("filmInf"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_audienceProgress = (this.getChild("audienceProgress"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_okBtn = (this.getChild("okBtn"));
            };
            WarAudienceReputationStruct.URL = "ui://y6ozucp1qbxl73";
            WarAudienceReputationStruct.DependPackages = ["WarMovie", "System", "Common"];
            return WarAudienceReputationStruct;
        }(fairygui.GComponent));
        WarMovie.WarAudienceReputationStruct = WarAudienceReputationStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarAudienceReputationStruct.js.map