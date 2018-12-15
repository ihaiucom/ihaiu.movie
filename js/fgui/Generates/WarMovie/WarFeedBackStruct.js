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
        var WarFeedBackStruct = /** @class */ (function (_super) {
            __extends(WarFeedBackStruct, _super);
            function WarFeedBackStruct() {
                return _super.call(this) || this;
            }
            WarFeedBackStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFeedBack"));
            };
            WarFeedBackStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_title = (this.getChild("title"));
                this.m_filmName = (this.getChild("filmName"));
                this.m_zongfen = (this.getChild("zongfen"));
                this.m_receive = (this.getChild("receive"));
                this.m_okIcon = (this.getChild("okIcon"));
                this.m_dianzanValue = (this.getChild("dianzanValue"));
                this.m_dianzhanCom = (this.getChild("dianzhanCom"));
                this.m_feedList = (this.getChild("feedList"));
                this.m_feedTip2 = (this.getChild("feedTip2"));
                this.m_feedTip3 = (this.getChild("feedTip3"));
                this.m_feedTip4 = (this.getChild("feedTip4"));
                this.m_filmInf = (this.getChild("filmInf"));
                this.m_starProgress = (this.getChild("starProgress"));
                this.m_filmDes = (this.getChild("filmDes"));
                this.m_okBtn = (this.getChild("okBtn"));
                this.m_closeBtn = (this.getChild("closeBtn"));
                this.m_t0 = this.getTransition("t0");
                this.m_dianzhanAni = this.getTransition("dianzhanAni");
            };
            WarFeedBackStruct.URL = "ui://y6ozucp1qbxl6u";
            WarFeedBackStruct.DependPackages = ["WarMovie", "Common", "System"];
            return WarFeedBackStruct;
        }(fairygui.GComponent));
        WarMovie.WarFeedBackStruct = WarFeedBackStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFeedBackStruct.js.map