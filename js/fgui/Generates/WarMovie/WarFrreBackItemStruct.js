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
        var WarFrreBackItemStruct = /** @class */ (function (_super) {
            __extends(WarFrreBackItemStruct, _super);
            function WarFrreBackItemStruct() {
                return _super.call(this) || this;
            }
            WarFrreBackItemStruct.createInstance = function () {
                return (fairygui.UIPackage.createObject("WarMovie", "WarFrreBackItem"));
            };
            WarFrreBackItemStruct.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_noticeIcon = (this.getChild("noticeIcon"));
                this.m_noticeName = (this.getChild("noticeName"));
                this.m_fen = (this.getChild("fen"));
                this.m_useNo = (this.getChild("useNo"));
                this.m_dianzanValue = (this.getChild("dianzanValue"));
                this.m_starProgress = (this.getChild("starProgress"));
                this.m_des = (this.getChild("des"));
                this.m_t0 = this.getTransition("t0");
            };
            WarFrreBackItemStruct.URL = "ui://y6ozucp1qbxl72";
            WarFrreBackItemStruct.DependPackages = ["WarMovie", "Common"];
            return WarFrreBackItemStruct;
        }(fairygui.GComponent));
        WarMovie.WarFrreBackItemStruct = WarFrreBackItemStruct;
    })(WarMovie = fgui.WarMovie || (fgui.WarMovie = {}));
})(fgui || (fgui = {}));
//# sourceMappingURL=WarFrreBackItemStruct.js.map